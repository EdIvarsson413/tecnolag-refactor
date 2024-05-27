import React from 'react';
import prroductos_cashAR from '../assets/Productos/prroductos_cashAR.jpg';
import user_cashAR from '../assets/Productos/user_cashAR.jpg';
import user_infraestructura from '../assets/Productos/user_infraestructura.jpg';
import user_desarrollo from '../assets/Productos/user_desarrollo.jpg';
import casharLogo from '../assets/Productos/Splash.png';


const Productos = () => {
  return (
 
  <>   
    <header className="text-white" style={{ height: "100vh" }}>
      <div 
        className="relative w-full h-full bg-cover bg-center flex items-start justify-end" 
        style={{ backgroundImage: `url(${prroductos_cashAR})` }}
      >


        <h1 className="absolute w-full h-full top-0 right-0 text-5xl bg-gray-800 bg-opacity-50 p-12" style={{ textAlign: 'end' }}>
          Cada uno de nuestros productos está creado con la máxima calidad y funcionalidad, garantizando un rendimiento excepcional y una experiencia de usuario superior.
        </h1>

      </div>
      
    </header>

      <main className="py-16 px-8">
        <section id="cases" className="mb-16">
          <h2 className="text-5xl py-8">Casos de éxito</h2>
          <div className="grid grid-cols-1 gap-8">

          <div className="flex items-center relative">            

          <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-full flex flex-col md:flex-row h-[500px]">

          <img src={casharLogo} alt="cashAR Logo" className="h-[120px] absolute top-0 left-0" />


            {/* Imagen de cashAR Image */}
            <img src={user_cashAR} alt="cashAR Image" className="hidden md:block w-40 md:w-1/2 h-49 object-cover rounded-lg shadow-md" />
            
            {/* Contenido de la carta */}
            <div className="md:w-1/2 md:pl-6 h-[500px]">
              <div className="flex items-center mb-4 md:mb-0"> {/* Ajuste de la alineación vertical para dispositivos grandes */}
                <h3 className="text-3xl py-4 mr-4">cashAR</h3>      
              </div>
              <p>"Esta aplicación es increíblemente útil y fácil de usar. Me encanta cómo detecta automáticamente las divisas y muestra su valor en realidad aumentada. Además, la función de comunicación para personas con discapacidad visual es impresionante y realmente inclusiva. La capacidad de realizar conversiones a otras divisas al instante hace que viajar y gestionar finanzas sea mucho más sencillo."</p>
              {/* Párrafo con nombre */}
              <p className="absolute bottom-0 right-0">Alejandra, Madrid, España</p>
            </div>
          </div>
        </div>


          <div className="flex items-center relative h-[500px]">
            <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-full flex h-[500px]">
              {/* Imagen */}
              <img src={user_infraestructura} alt="Servicio de Infraestructura Image" className="hidden md:block w-40 md:w-1/2 h-49 object-cover rounded-lg shadow-md" />
              {/* Contenido de la tarjeta */}
              <div className="md:w-1/2 md:pl-6">
                <h3 className="text-3xl py-4">Servicio de Infraestructura</h3>
                <p>"Contratamos a Tecnolag para mejorar la red de nuestro edificio y estamos muy satisfechos. El equipo fue profesional y eficiente, logrando una red más rápida, estable y segura. La productividad ha mejorado notablemente y el soporte post-instalación ha sido excelente. ¡Altamente recomendados!"</p>
                {/* Párrafo con nombre */}
                <p className="absolute bottom-0 right-0">
                  Ricardo, Torreón, México
                </p>
              </div>
            </div>
          </div>


           
            <div className="flex items-center relative h-[500px]">
              <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-full flex h-[500px]">
                {/* Imagen */}
                <img src={user_desarrollo} alt="Desarrollo de Software Image" className="hidden md:block w-40 md:w-1/2 h-49 object-cover rounded-lg shadow-md" />
                {/* Contenido de la tarjeta */}
                <div className="md:w-1/2 md:pl-6">
                  <h3 className="text-3xl py-4">Desarrollo de Software</h3>
                  <p>"Estamos encantados con el software desarrollado por Tecnolag para gestionar el estado de los automóviles en nuestro taller. La solución es intuitiva y ha simplificado enormemente el seguimiento de reparaciones y mantenimiento. Ahora podemos actualizar y consultar el status de cada vehículo en tiempo real, lo que ha mejorado nuestra eficiencia y la satisfacción de nuestros clientes. ¡Un gran trabajo del equipo de desarrollo!"</p>
                  {/* Párrafo con nombre */}
                  <p className="absolute bottom-0 right-0">
                    Juan Angel, Monterrey, México
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
);
};

export default Productos;