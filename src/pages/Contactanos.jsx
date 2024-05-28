import Formulario from "../components/contactanos/Formulario"
import Ubicacion from "../components/contactanos/Ubicacion"

const Contactanos = () => {

    return (
        <div>
            {/* Imagen y texto al fondo e inicio */}
            <div className="bg-[url(/imgs/contactanos/contacto-md.jpg)] min-h-screen bg-center text-white">
                <div className="grid content-end min-h-screen grid-cols-1 bg-black bg-opacity-60 justify-items-start">
                    <p className="w-2/3 ml-20 text-5xl mb-28 ">¿Tienes alguna pregunta o necesitas más información? Nuestro equipo está aquí para ayudarte.</p>
                </div>
            </div>


            {/* Formulario */}
            <Formulario/>

            {/* Ubicación */}
            <Ubicacion/>
        </div>
    )
}

export default Contactanos