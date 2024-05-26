export default ({ nombre, numero, correo, confirmar, asunto, mensaje }) => {
    const errores = [];

    // Nombre vacio
    if( nombre === '' )
        errores.push({ msj: 'Escriba su nombre' });

    // Se puso numero y se verifica si es valido
    const numeroRegex = /^\d{3}-\d{3}-\d{4}$/;

    if( numero !== '' )
        if( !numeroRegex.test( numero ) )
            errores.push({ msj: 'Formato de número: XXX-XXX-XXXX' })

    // Se ingreso correo correctamente y los correos coinciden
    const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if( correoRegex.test( correo ) ) {
        if( correo !== confirmar )
            errores.push({ msj: 'Los correos no coinciden' });
    } else
        errores.push({ msj: 'El correo no es válido' });

    // Se selccionó un asunto
    if( asunto === '' || asunto === '-- SELECCIONAR --' )
        errores.push({ msj: 'Debe Seleccionar un asunto' });

    // Mensaje vacio
    if( mensaje === '' )
        errores.push({ msj: 'Escriba su mensaje' });

    return { error: Boolean(errores.length), errores }
}