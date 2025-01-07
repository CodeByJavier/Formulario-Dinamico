# Formulario Dinámico React + Vite

Este es un formulario dinámico desarrollado con **React**, que permite gestionar una lista de usuarios. El formulario incluye funcionalidades de **entrada de datos**, **edición**, **eliminación**, **paginación** y **filtro**. Los datos pueden ser filtrados por nombre, correo electrónico, teléfono o ID, y se actualizan de manera interactiva en tiempo real.

## Características

- **Formulario de Usuarios**: Permite crear, editar y eliminar usuarios.
- **Paginación**: Los datos se dividen en páginas con un número configurable de elementos por página.
- **Filtro de Búsqueda**: Puedes filtrar los datos por nombre, correo electrónico, teléfono o ID.
- **Edición de Datos**: Los usuarios pueden ser editados directamente desde la lista.
- **Eliminación de Datos**: Los usuarios pueden ser eliminados de la lista.
- **Interactividad en Tiempo Real**: Los datos se actualizan de forma dinámica conforme se agregan, editan o eliminan.

## Tecnologías Usadas

- **React**: Framework para construir la interfaz de usuario.
- **Font Awesome**: Para los iconos en los botones de paginación.
- **CSS**: Estilos básicos para el diseño y disposición de los elementos.


## Tecnologías a Usar
- **MySql**: Para la creacion de una base de datos.

## Estructura del Proyecto

El proyecto está compuesto por los siguientes componentes principales:

1. **App**: Es el componente principal que renderiza todos los datos
2. **NavBar**: Es la barra de navegacion
3. **InputForm**: Componente para agregar o editar los datos de un usuario.
4. **Display**: Es el componente que gestiona la visualización de los datos, la paginación, y el filtrado.
5. **DisplayData**: Muestra los datos de los usuarios en una tabla.
6. **ControlsDisplay**: Proporciona los controles de navegación para cambiar de página y seleccionar cuántos elementos mostrar por página.
7. **FilterDisplay**: Permite filtrar los datos en función de un término de búsqueda y un tipo de campo seleccionado.
8. **Validation**: Es el componente que se encarga de la logica de validacion de datos

## Instalación

1. **Clonar el Repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
   cd nombre-del-repositorio