import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../index.css'; // Crea este archivo para tus estilos personalizados

const slides = [
  {
    image: '/imgs/consultoria.jpg',
    text: 'Potencia tu negocio con nuestra conultoría de software a medida, optimizando procesos y soluciones tecnológicas'
  },
  {
    image: '/imgs/desarrollo.jpg',
    text: 'Transformamos tus ideas en soluciones digitales. Nuestro equipo de expertos en desarrollo de software se dedica a crear aplicaciones personalizadas que impulsan tu negocio hacia el futuro.'
  },
  {
    image: '/imgs/analisis.jpg',
    text: 'Construimos y gestionamos redes robustas y seguras. Nuestro equipo de infraestructura de redes asegura que tu negocio esté siempre conectado y protegido, ofreciendo soluciones escalables y fiables.'
  },
  {
    image: '/imgs/infraestructura.jpg',
    text:'Convierta sus datos en decisiones inteligentes. Ofrecemos servicios de análisis de datos avanzados que te permiten descubrir patrones ocultos y obtener insights valiosos para optimizar tus operaciones.'
  }
];

  const slider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={`slide-${index}`} className="slider-image" />
            <div className="slider-text">{slide.text}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default slider;
