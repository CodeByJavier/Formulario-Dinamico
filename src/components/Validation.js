const ValidationInput = (names, mail, phone, id) => {
    const errors = {};

    // Validación del nombre
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+(\s+[A-Za-zÁÉÍÓÚáéíóúñÑ]+)+$/;
    if (!nameRegex.test(names)) {
        errors.names = "Nombre inválido (debe tener dos palabras)";
    }

    // Validación del correo
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(mail)) {
        errors.mail = "Correo inválido";
    }

    // Validación del teléfono
    const phoneRegex = /^[0-9]{9}$/;
    if (!phoneRegex.test(phone)) {
        errors.phone = "Ingrese 9 dígitos";
    }

    // Validación del ID
    const idRegex = /^[0-9]{3}$/;
    if (!idRegex.test(id)) {
        errors.id = "Ingrese 3 dígitos";
    }

    return errors; // Retorna un objeto con los errores
}

export const FormatName = (names) => {
    return names.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
};


export default ValidationInput;