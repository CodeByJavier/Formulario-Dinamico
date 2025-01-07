import { useState } from "react";

export default function Filter({ data, setData }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("names");

    const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        
        const filtered = data.filter((item) =>
            item[filterType]?.toString().toLowerCase().includes(term)
        );

        setData(filtered); 
    };

    const handleFilterChange = (event) => {
        setFilterType(event.target.value);
    };

    return (
        <div className="filter">
            <select 
                className="filter-select" 
                onChange={handleFilterChange} 
                value={filterType}
            >
                <option value="names">Nombre</option>
                <option value="mail">Mail</option>
                <option value="phone">Teléfono</option>
                <option value="id">ID</option>
            </select>

            <input
                type="text"
                id="search"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    );
}