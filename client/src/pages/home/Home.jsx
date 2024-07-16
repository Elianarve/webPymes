import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='aboutUs-container'>
      <header>
        <div className='leanKata-backdrop'>
          <h1>Web<span>P</span>ymes</h1>
        </div>
      </header>
      <main>
        <section>
          <h3>¡Descubre cómo <span>WebPymes</span> puede transformar tu negocio!</h3>
          <p>En WebPymes, nos especializamos en la optimización de sitios web, desarrollo de software personalizado y asesoramiento digital para impulsar tu presencia en línea.</p>
          <p>Nuestra metodología se basa en la mejora continua y la innovación para garantizar resultados eficientes y de alta calidad.</p>
        </section>

        <div className='cardsContainer'>
          <div className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner">
              <img src="" alt="Mejora Continua" />
              <h4>Mejora Continua</h4>
              <p>Identificamos y solucionamos problemas de manera sistemática para mejorar tus procesos digitales.</p>
            </div>
          </div>

          <div className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner">
              <img src="" alt="Asesoramiento Digital" />
              <h4>Asesoramiento Digital</h4>
              <p>Proveemos estrategias personalizadas para mejorar tu presencia en línea y atraer más clientes.</p>
            </div>
          </div>

          <div className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner">
              <img src="" alt="Eficiencia" />
              <h4>Eficiencia</h4>
              <p>Nuestras soluciones optimizan tus operaciones para maximizar la eficiencia y la productividad.</p>
            </div>
          </div>
        </div>
        
        <hr />
{/* 
        <iframe 
          src="https://www.youtube.com/embed/L8k0OJjKWSI?si=USM3f5VW1JU0WTxY" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen>
        </iframe> */}
        
        <div className='leankataDescription'>
          <p className='shortDescription'>En WebPymes, adoptamos una filosofía de mejora continua inspirada en los principios del Lean y Kaizen, aplicándolos a nuestros servicios de desarrollo web y asesoramiento digital.</p>
          <p className='shortDescription'>Nuestra misión es ayudar a las pymes a crecer y prosperar en el entorno digital, ofreciendo soluciones efectivas y personalizadas.</p>
        </div>
      </main>
    </div>
  );
}

export default Home;
