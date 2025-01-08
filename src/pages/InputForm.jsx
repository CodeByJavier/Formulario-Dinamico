import './InputForm'
import profile from '../assets/profile.png' 
import React, { useState } from 'react';
import ValidationInput, {FormatName} from '../components/Validation';

export default function Input({ onAddData }){

    const [dataForm , setDataForm] = useState({
        names: '',
        mail: '',
        phone: '',
        id: '',
    })

    const [errores, setErrores] = useState({
        names: '',
        mail: '',
        phone: '',
        id: '',
    });

    const handleChange = (e) => {
        setDataForm({
          ...dataForm,
          [e.target.id]: e.target.value
        });
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // Llamada a la función de validación
        const resultado = ValidationInput(dataForm.names, dataForm.mail, dataForm.phone, dataForm.id);

        if (resultado.names || resultado.mail || resultado.phone || resultado.id) {
            setErrores(resultado); // Actualiza el estado de errores
        } else {
            
            // Si no hay errores, formatear el nombre
            const formattedName = FormatName(dataForm.names);
            const newDataForm = { ...dataForm, names: formattedName };

            // Enviar los datos formateados
            onAddData(newDataForm);

            setDataForm({
                names: '',
                mail: '',
                phone: '',
                id: '',
            });
            setErrores({
                names: '',
                mail: '',
                phone: '',
                id: '',
            });
        }
    };

    return (
        <div className='container-form'>
            <form className='form' onSubmit={handleSubmit}>
                <input value={dataForm.names} type="text" id="names" placeholder="Nombre" onChange={handleChange} required />
                {errores.names && <div className="error">{errores.names}</div>}

                <input value={dataForm.mail} type="email" id="mail" placeholder="Correo" onChange={handleChange} required />
                {errores.mail && <div className="error">{errores.mail}</div>}

                <input value={dataForm.phone} type="number" id="phone" placeholder="Teléfono" onChange={handleChange} required />
                {errores.phone && <div className="error">{errores.phone}</div>}

                <input value={dataForm.id} type="number" id="id" placeholder="ID" onChange={handleChange} required />
                {errores.id && <div className="error">{errores.id}</div>}

				<button type="submit" id="addButton">Agregar</button>
                
            </form>

            <img src={profile} alt="profile img" className='profile-img'/>
            
        </div>   
    );
}