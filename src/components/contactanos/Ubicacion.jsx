const Unicacion = () => {
    return (
        <div className="w-[80%] mx-auto mb-16">
            <h3 className="text-3xl">Encuentranos cerca de ti</h3>
            <div className="mt-10 w-[80%] mx-auto">
                <p className="font-bold">Torreón</p>
                <p className="w-1/4">Calz A. de Juambelz 301 Piso 2, Cuarto de Cobián Centro, 27000 Torreón, Coah.</p>
                <a target="_blank" title="Ir Maps" href="https://www.google.com/maps/place/Calz+A.+de+Juambelz+301,+Cuarto+de+Cobi%C3%A1n+Centro,+27000+Torre%C3%B3n,+Coah./@25.5377545,-103.4170218,17z/data=!4m6!3m5!1s0x868fdba29d660a33:0x60dc00cf3b9629e1!8m2!3d25.5377545!4d-103.4144469!16s%2Fg%2F11c43txcn1?entry=ttu">
                    <img 
                        src="/imgs/contactanos/mapa.jpg" 
                        alt="Ubicación Tecnolag"
                        className="mt-5 rounded-lg "
                    />
                </a>
            </div>
        </div>
    )
}

export default Unicacion