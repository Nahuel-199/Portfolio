import React from 'react';
import './About.css';
import img from '../../img/about.jpg';

const About = () => {
    return (
        <div className="a">
        <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img
              src={img}
              alt="Sobre mi..."
              className="a-img"
            />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">Acerca de mí</h1>
          <p className="a-sub">
            Hola soy Nahuel,
            Quien soy? 👀
            Soy un desarrolador Full Stack en busqueda de fortalecer mi experiencia
            y mi carrera profesional.
          </p>
          <p className="a-desc">
          Mi objetivo es desarrollarme y crecer tanto profesional como 
          laboralmente. Compartir mis conocimientos y habilidades para lograr un 
          desempeño satisfactorio tanto mío como a la tarea a realizar.
          </p>
          <p className="a-desc">
           Con muchas ganas de seguir aprendiendo y ser capaz de resolver los proyectos
           a cargo. Apasionado por la tecnología, siempre investigando para poder 
           generar buenas practicas y aprender cosas nuevas.
          </p>
          <div className="a-award">
            {/* <img src={Award} alt="" className="a-award-img" /> */}
            <div className="a-award-texts">
              <h4 className="a-award-title">Mas de mí</h4>
              <p className="a-award-desc">
               Aparte de apasionarme por la tecnologia, me encanta diseñar modelos para mi
               empredimieto de ropa, busco la imagen adecuada para el estilo que realizo,
               armo el diseño para cliente segun como el lo desee y lo comparto con el para despues
               realizar el estampado sobre la prenda 
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About
