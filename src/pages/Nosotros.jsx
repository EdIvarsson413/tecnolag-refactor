import React from 'react';
import edi1 from '../assets/edificios.jpg';
import edi2 from '../assets/edificios2.jpg';
import orga from '../assets/orga.jpg';
import '../Nosotros.css';

const Nosotros = () => {
  return (
    <div>
      <div className="contenedorbase">
        <div className="contenedor">
          <div className="capa-oscura"></div>
          <img src={edi1} className="imagen-edificio" alt="Edificio" />
          <div className="texto-superpuesto">
            Nuestra misión es crear soluciones de
            software innovadoras, de alta calidad
            que transformen las experiencias
            digitales de nuestros clientes
          </div>
        </div>

        <div className="espacio-en-blanco"></div> 

        <div className="contenedor2">
          <img src={edi2} className="imagen-edificio2" alt="Edificio" />
          
          <div className="texto">
          <div className="espacio-en-blanco2"></div> 
          ¿Quiénes somos?
        </div>
        <div className="texto2">
        <div className="espacio-en-blanco2"></div> 
        Somos una empresa dedicada a
ofrecer soluciones tecnológicas
innovadoras, especializada en
consultoría y desarrollo de
software, infraestructura
tecnológica y análisis de datos
con inteligencia artificial. Nuestro
compromiso es transformar las
ideas en realidades digitales que
impulsen el éxito de nuestros
clientes.
        </div>
        </div>
        <div className="espacio-en-blanco"></div> 

        <div className="texto-tama">
          Conoce a nuestro equipo
        </div>
        <div className="contenedor3">
          <img src={orga} className="imagen-edificio3 imagen-edificio3-rotada" alt="Organización" />
        </div>

        <div className="espacio-en-blanco"></div>   
      </div>
     
    </div>
  );
}

export default Nosotros;
