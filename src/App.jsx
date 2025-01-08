import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/NavBar";
import Input from "./pages/InputForm";
import Display from "./pages/Display";
import { useState } from "react";

function App() {

  const [data, setData] = useState([
    { id: 101, names: 'Carlos Cuarto', mail: 'carlos@mail.com', phone: '123456789' },
    { id: 102, names: 'Pedro Francisco', mail: 'pedro@mail.com', phone: '987654321' },
    { id: 103, names: 'Maria Peña', mail: 'maria@mail.com', phone: '555555555' },
    { id: 104, names: 'Ana López', mail: 'ana@mail.com', phone: '111222333' },
    { id: 105, names: 'Luis Sánchez', mail: 'luis@mail.com', phone: '444555666' },
    { id: 106, names: 'Juan Pérez', mail: 'juan@mail.com', phone: '777888999' },
    { id: 107, names: 'Laura Gómez', mail: 'laura@mail.com', phone: '123123123' },
    { id: 108, names: 'Sofía Ramírez', mail: 'sofia@mail.com', phone: '321321321' },
    { id: 109, names: 'Andrés Castillo', mail: 'andres@mail.com', phone: '456456456' },
    { id: 110, names: 'Daniela Torres', mail: 'daniela@mail.com', phone: '654654654' },
    { id: 111, names: 'Marta Ruiz', mail: 'marta@mail.com', phone: '789789789' },
    { id: 112, names: 'Fernando Díaz', mail: 'fernando@mail.com', phone: '987987987' },
    { id: 113, names: 'Clara Fernández', mail: 'clara@mail.com', phone: '321654987' },
    { id: 114, names: 'Javier Moreno', mail: 'javier@mail.com', phone: '789456123' },
    { id: 115, names: 'Isabel Vega', mail: 'isabel@mail.com', phone: '456123789' },
    { id: 116, names: 'Ricardo Campos', mail: 'ricardo@mail.com', phone: '654987321' },
    { id: 117, names: 'Elena Martínez', mail: 'elena@mail.com', phone: '987654123' },
    { id: 118, names: 'Tomás Cruz', mail: 'tomas@mail.com', phone: '123987654' },
    { id: 119, names: 'Julia Navarro', mail: 'julia@mail.com', phone: '321789654' },
    { id: 120, names: 'Sergio Ibáñez', mail: 'sergio@mail.com', phone: '987321654' },
  ]);


  const addData = (newData) => {
    if(data.some(item => item.id === newData.id || item.mail === newData.mail || item.phone === newData.phone)){
      alert("Ese id, mail o numero ya existe");
    } else {
      setData(prevData => [...prevData, newData]);
    }
  };

  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/*" element={<Input onAddData={addData} />} />
        <Route path="/dashboard/*" element={<Display data={data} onAddData={addData}/>} />  
      </Routes>
    </HashRouter>
  );
}

export default App;