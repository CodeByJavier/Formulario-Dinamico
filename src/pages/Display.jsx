import { useState, useEffect } from "react";
import Controls from '../components/ControlsDisplay'
import TableCell, {TableHeader} from "../components/DisplayData";
import Filter from "../components/FilterDisplay";

export default function Display({ data }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [filteredData, setFilteredData] = useState(data);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filteredData.slice(startIndex, endIndex);

    useEffect(() => {
        if (filteredData.length < (currentPage - 1) * itemsPerPage) {
            setCurrentPage(1); // Si la página actual está fuera de rango, la restablecemos a la primera
        }
    }, [filteredData, currentPage, itemsPerPage]);
    
    return (
        <>
            <Filter data={data} setData={setFilteredData} />
            <div className="table-container">
                <div className="title">Lista de Usuarios</div>
                <TableHeader />
                <TableCell 
                data={filteredData} 
                setData={setFilteredData} 
                currentData = {currentData}
                /> 

                <Controls
                dataLength={filteredData.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                setItemsPerPage={setItemsPerPage}
                />
            </div>
        </>
    )
}