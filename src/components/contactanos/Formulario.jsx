import { useState } from "react"
import CampoTexto from "./CampoTexto"
import SelectAsunto from "./SelectAsunto"
import TextArea from "./TextArea"
import validacion from "../../utils/validacion"
import useFirebase from "../../hooks/useFirebase"
import Error from "./Error"

const Formulario = () => {
    const [ nombre, setNombre ] = useState('');
    const [ numero, setNumero ] = useState('');
    const [ correo, setCorreo ] = useState('');
    const [ confirmar, setConfirmar ] = useState('');
    const [ asunto, setAsunto ] = useState('');
    const [ mensaje, setMensaje ] = useState('');

    // Errores
    const [ error, setError ] = useState(false);
    const [ errores, setErrores ] = useState([]);

    const opciones = [
        { value: 'Soporte Técnico' },
        { value: 'Soporte Presencial' },
        { value: 'Reservar Cita' },
        { value: 'Registro de Producto' },
    ]

    const { enviarFormulario, loading } = useFirebase();
    
    const handleSubmit = async ( e ) => {
        e.preventDefault();

        // Validación de campos
        const { error, errores } = validacion({
            nombre,
            numero,
            correo,
            confirmar,
            asunto,
            mensaje
        })

        // Hay errores?
        if( error ) {
            // Agregarlos al state y despues de 2s borrarlos
            setError( error );
            setErrores( errores );

            setTimeout(() => {
                setError(error);
                setErrores([])
            }, 2000 )
        } else {
            // Se envia a firebase
            await enviarFormulario({
                nombre,
                numero,
                correo,
                confirmar,
                asunto,
                mensaje
            });    
        }
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off" className="w-[80%] mx-auto bg-[#d9d9d9] p-10 my-16 rounded-xl shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)]">
            <h3 className="mb-6 text-3xl text-center">Contáctanos</h3>
            
            {
                error && (
                    <div className="space-y-2 mb-7">
                        { 
                            errores.map( ( error, index ) => (
                                <Error key={index}>{error.msj}</Error>
                            ))  
                        }
                    </div>
                )
            }

            <div className="grid grid-cols-2 gap-x-12 gap-y-7">
                <CampoTexto
                    loading={loading}
                    label="Nombre*"
                    value={nombre}
                    onChange={ ( e ) => setNombre( e.target.value )}
                />

                <CampoTexto
                    loading={loading}
                    type="tel"
                    label="Número de teléfono"
                    value={numero}
                    onChange={ ( e ) => setNumero( e.target.value )}
                />

                <CampoTexto
                    loading={loading}
                    label="Correo*"
                    type="email"
                    value={correo}
                    onChange={ ( e ) => setCorreo( e.target.value )}
                />

                <CampoTexto
                    loading={loading}
                    label="Confirmar Correo*"
                    type="email"
                    value={confirmar}
                    onChange={ (e) => setConfirmar( e.target.value )}
                />
            </div>

            <SelectAsunto
                loading={loading}
                label="Asunto*"
                value={asunto}
                onChange={ ( e ) => setAsunto( e.target.value )}
                opciones={opciones}
            />

            <TextArea
                loading={loading}
                label="Mensaje*"
                value={mensaje}
                onChange={ (e) => setMensaje( e.target.value ) }
            />

            <div className="flex justify-center mt-8">
                <button
                    type="submit"
                    disabled={loading}
                    className={`py-1 transition-all duration-200 border rounded-lg w-36 hover:bg-black hover:bg-opacity-5
                                ${loading? 'disabled:border-gray-400 disabled:text-gray-400 hover:bg-none' : 'border-black text-black'}`}
                >
                    Enviar
                </button>
            </div>

            <br />
            <p>* Campos Obligatorios</p>
        </form>
    )
}

export default Formulario