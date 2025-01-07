import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import ValidationInput, {FormatName} from './Validation';

export function TableHeader(){
    return (
        <div className="container-table-header">         
			<div className="table-header">ID</div>
			<div className="table-header">Nombre</div>
			<div className="table-header">Correo</div>
			<div className="table-header">Teléfono</div>
    	</div>
    )
}
export default function TableCell({data, setData, currentData}){

    const [editData, setEditData] = useState(null);

    if (!Array.isArray(data)) {
        return <div>No hay datos disponibles</div>;  // Si no hay datos, muestra este mensaje
    }

    const handleDelete = (id) => {
        const filteredData = data.filter((row) => row.id!== id);
        setData(filteredData);
    };

    
    const handleEdit = (row) => {setEditData(row);};

    const addData = (newData) => {
        // Filtramos para excluir al usuario que estamos editando
        const otherData = data.filter((item) => item.id !== newData.id);
    
        // Validamos que no haya conflictos con correo o teléfono
        if (otherData.some(item => item.mail === newData.mail || item.phone === newData.phone)) {
            alert("Ese mail o número ya existe");
        } else {
            // Insertamos el nuevo dato y ordenamos por `id`
            const updatedData = [...otherData, newData].sort((a, b) => a.id - b.id);
            setData(updatedData);
            setEditData(null); // Cerramos el formulario de edición
        }
    };
    

    const handleUpdate = (e) => {
        e.preventDefault();

        const resultado = ValidationInput(editData.names, editData.mail, editData.phone);

        if (resultado.names || resultado.mail || resultado.phone) {
            alert("Datos incorrectos")
        } else {
            const formattedName = FormatName(editData.names);
            const newEditData = { ...editData, names: formattedName };

            addData(newEditData)
        }
    };

    return (
        <>
        {currentData.sort((a, b) => a.id - b.id).map((row, index) => (
        <div className="container-table-cell" key={index}>
            <div className='hide box'>
                <div className="table-cell">ID</div>
                <div className="table-cell">Nombre</div>
                <div className="table-cell">Correo</div>
                <div className="table-cell">Teléfono</div>
                <div className="table-cell">Acciones</div>
            </div>
            
            <div className="box" key={index}>
                <div className="table-cell">{row.id}</div>
                <div className="table-cell">{row.names}</div>
                <div className="table-cell">{row.mail}</div>
                <div className="table-cell">{row.phone}</div>
                <div className="table-cell table-cell-btn">
                    <FontAwesomeIcon className="delete-button btn" icon={faTrash} size="2x" onClick={() => handleDelete(row.id)}/>
                    <FontAwesomeIcon className="edit-button btn" icon={faPenToSquare} size="2x" onClick={() => handleEdit(row)}/>
                </div>
            </div>
        </div>))}
        
        {editData && (
            <div className='container-form container-edit'>
            <form className="form form-edit" onSubmit={handleUpdate}>
                <input id="names" type="text" value={editData.names} onChange={(e) => setEditData({ ...editData, names: e.target.value })}/>
                <input id="mail" type="email" value={editData.mail} onChange={(e) => setEditData({ ...editData, mail: e.target.value })}/>
                <input id="phone" type="number" value={editData.phone} onChange={(e) => setEditData({ ...editData, phone: e.target.value })}/>
                <button type="submit">Guardar</button>
                <button id="close-button" type="button" onClick={() => setEditData(null)}>Salir</button>
            </form>
            </div>
        )}
        </>
    )
}