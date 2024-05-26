import React from 'react';
import prroductos_cashAR from '../assets/Productos/prroductos_cashAR.jpg';
import user_cashAR from '../assets/Productos/user_cashAR.jpg';
import user_infraestructura from '../assets/Productos/user_infraestructura.jpg';
import user_desarrollo from '../assets/Productos/user_desarrollo.jpg';
import casharLogo from '../assets/Productos/cashARLogo.jpeg';


const Productos = () => {
  return (

    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="container bg-white p-8 rounded-lg shadow-lg">
      
    <header className="text-white" style={{ height: "120vh" }}>
      <div 
        className="relative w-full h-full bg-cover bg-center flex items-start justify-end rounded-t-lg" 
        style={{ backgroundImage: `url(${prroductos_cashAR})` }}
      >
        <h1 className="absolute w-full h-full top-0 right-0 text-2xl font-bold bg-gray-800 bg-opacity-50 p-4 rounded-t-lg">
          Cada uno de nuestros productos está creado con la máxima calidad y funcionalidad, garantizando un rendimiento excepcional y una experiencia de usuario superior.
        </h1>
      </div>
    </header>

      <main className="py-16 px-8">
        <section id="cases" className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Casos de éxito</h2>
          <div className="grid grid-cols-1 gap-8">

          <div className="flex items-center relative">              
            <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-full">
            {/* Imagen de cashAR Logo */}
            <img src={casharLogo} alt="cashAR Logo" className="h-12 rounded-full absolute top-0 left-0 transform scale-150" />
            
            {/* Imagen de cashAR Image */}
            <img src={user_cashAR} alt="cashAR Image" className="hidden md:block w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md" />
            
            {/* Contenido de la carta */}
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-bold mr-4">cashAR</h3>      
            </div>
            <p>"Esta aplicación es increíblemente útil y fácil de usar. Me encanta cómo detecta automáticamente las divisas y muestra su valor en realidad aumentada. Además, la función de comunicación para personas con discapacidad visual es impresionante y realmente inclusiva. La capacidad de realizar conversiones a otras divisas al instante hace que viajar y gestionar finanzas sea mucho más sencillo."</p>
            <p className="text-gray-600">- Alejandra, Madrid, España</p>
          </div>
        </div>

            <div className="flex items-center">
                
              <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-full">
              <img src={user_infraestructura} alt="Servicio de Infraestructura Image" className="hidden md:block w-full md:w-1/2 h-48 object-cover rounded-lg shadow-md" />
              
                <h3 className="text-xl font-bold">Servicio de Infraestructura</h3>
                <p>"Contratamos a Tecnolag para mejorar la red de nuestro edificio y estamos muy satisfechos. El equipo fue profesional y eficiente, logrando una red más rápida, estable y segura. La productividad ha mejorado notablemente y el soporte post-instalación ha sido excelente. ¡Altamente recomendados!"</p>
                <p className="text-gray-600">- Ricardo, Torreón, México</p>
              </div>
            </div>
           
            <div className="flex items-center">
              
              
              <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-full">
              
              <img src={user_desarrollo} alt="Desarrollo de Software Image" className="hidden md:block w-full md:w-1/2 h-48 object-cover rounded-lg shadow-md" />
                
                <h3 className="text-xl font-bold">Desarrollo de Software</h3>
                <p>"Estamos encantados con el software desarrollado por Tecnolag para gestionar el estado de los automóviles en nuestro taller. La solución es intuitiva y ha simplificado enormemente el seguimiento de reparaciones y mantenimiento. Ahora podemos actualizar y consultar el status de cada vehículo en tiempo real, lo que ha mejorado nuestra eficiencia y la satisfacción de nuestros clientes. ¡Un gran trabajo del equipo de desarrollo!"</p>
                <p className="text-gray-600">- Juan Angel, Monterrey, México</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
);
};

export default Productos;