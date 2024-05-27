import './Servicios.css';
import React from 'react';
import Imag from '../assets/intro.png';
import Imag2 from '../assets/intro2.png';
import Imag3 from '../assets/intro3.png';
import Imag4 from '../assets/intro4.png';
import Imag5 from '../assets/intro5.png';
const Servicios = () => {
    return (
        <>
            <div className="image-container">
                <img src={Imag} alt="ImgPrin" />
                <div className="overlay"></div>
                <div className="text-overlay">Descubre como nuestras soluciones personalizadas pueden ayudarte a alcanzar tus objetivos y superar desafíos tecnológicos.</div>
            </div>
            <div className="rectangle-container">
                <img src={Imag2} alt="Imagen1" />
                <div>
                    <h2>Consultoría de Software</h2>
                    <p>Nuestro equipo de expertos en consultoría de software trabaja estrechamente contigo para entender tus necesidades y objetivos empresariales. Ofrecemos asesoramiento especializado para optimizar tus procesos tecnológicos, mejorar la eficiencia y garantizar que tus soluciones de software estén alineadas con las mejores prácticas de la industria.</p>
                </div>
            </div>
            <div className="rectangle-container">
            <div>
                    <h2>Desarrollo de Software</h2>
                    <p>Transforma tus ideas en aplicaciones y sistemas personalizados con nuestro servicio de desarrollo de software. Nos especializamos en crear soluciones a medida que se adaptan perfectamente a las necesidades específicas de tu negocio. Utilizando metodologías ágiles y las últimas tecnologías, garantizamos un desarrollo eficiente y de alta calidad, asegurando que cada proyecto se entregue a tiempo y dentro del presupuesto.</p>
                </div>
                <img src={Imag3} alt="Imagen2" />
            </div>
            <div className="rectangle-container">
                <img src={Imag4} alt="Imagen3" />
                <div>
                    <h2>Servicios de Infraestructura</h2>
                    <p>Asegura la robustez y eficiencia de tu infraestructura tecnológica con nuestros servicios especializados. Ofrecemos diseño, implementación y gestión de infraestructuras de TI que garantizan un rendimiento óptimo y una alta disponibilidad.</p>
                </div>
            </div>
            <div className="rectangle-container">
            <div>
                    <h2>Business Intelligence</h2>
                    <p>Impulsa decisiones estratégicas y obten insights valiosos con nuestro servicio de análisis de datos potenciado por inteligencia artificial. Utilizamos técnicas avanzadas de machine learning y procesamiento de datos para convertir grandes volúmenes de información en conocimientos accionables.</p>
                </div>
                <img src={Imag5} alt="Imagen4" />
            </div>
        </>
    );
}

export default Servicios;
