import ButtomContact from '../../components/buttoms/ButtomContact.jsx';
import '../home/Home.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Home = () => {
  const { ref: refWeb, inView: inViewWeb } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: refSeo, inView: inViewSeo } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: refApps, inView: inViewApps } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
    <section className='container-img'>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className='container-text'>
        <h1>Diseño Web, Apps, UX/UI y SEO</h1>
        <h2>Impulsa tu negocio en Internet con nuestros servicios integrales de diseño web, SEO y gestión de redes sociales. Aumenta tus ventas y haz crecer tu negocio con WebsPymes.</h2> 
        <h2> Creemos que hacer webs es relativamente sencillo, pero el objetivo fundamental de nuestro trabajo es dar soluciones y para ello es preciso conocer los negocios y a las personas que están detrás de ellos.</h2>
      </motion.div>
      <motion.img 
        src='../src/assets/img/backgroundweb4.jpg'
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}>
      </motion.img>
    </section>
    <section className='container-news'>
      
    </section>
    <section className='container-services'>
      <h1>Nuestros Servicios</h1>
      <motion.article
        ref={refWeb}
        className='services-web'
        initial={{ opacity: 0 }}
        animate={{ opacity: inViewWeb ? 1 : 0 }}
        transition={{ duration: 5 }}>
        <h3>Diseño web atractivo y profesional con estudio de la UX/UI</h3>
        <img src='../src/assets/img/laptop-rainbow.jpg'></img>
        <p className='container-services-description'>En WebsPymes, nos especializamos en crear experiencias digitales personalizadas mediante un enfoque integral. Nuestro proceso incluye investigación de usuarios para comprender a la audiencia, prototipado para visualizar el flujo y funcionalidad del producto, diseño de interfaz coherente con la marca, pruebas exhaustivas de usabilidad y una iteración continua basada en feedback para asegurar una experiencia óptima.</p>
        
      </motion.article>
      <motion.article
        ref={refSeo}
        className='services-seo'
        initial={{ opacity: 0 }}
        animate={{ opacity: inViewWeb ? 1 : 0 }}
        transition={{ duration: 5 }}>
        <h3>Posicionamiento SEO para resultados de búsqueda</h3>
        <img src='../../src/assets/img/seo-758264_1280.jpg'></img>
        
        <p className='container-services-description'>Gracias al enfoque integral de SEO, aumentamos la visibilidad de tu negocio en línea y atraemos a más clientes potenciales. Desde la investigación de palabras clave hasta la optimización de contenido y la construcción de enlaces de calidad, nos aseguramos de que cada aspecto de tu sitio web esté optimizado para el éxito en los motores de búsqueda.</p>
      </motion.article>
      <motion.article 
        className='services-apps'
        ref={refApps}
        initial={{ opacity: 0 }}
        animate={{ opacity: inViewWeb ? 1 : 0 }}
        transition={{ duration: 5 }}>
        <h3>Apps a medida: soluciones para automatizar procesos de tu negocio</h3>
        <img src='../src/assets/img/code-1076536_1280.jpg'></img>
        <p className='container-services-description'>Ofrecemos servicios de web atractivos y profesionales que cautivarán a tus visitantes. Nuestro equipo de diseñadores expertos se encargará de crear una solución única y personalizada que refleje la identidad de tu marca.</p>
      </motion.article>
    </section>

    <section className='container-about'>
      <article className='container-about-description'>
        <h1>Nuestro Equipo</h1>
        <p>En WebsPymes, nos especializamos en crear experiencias digitales personalizadas mediante un enfoque integral. Nuestro proceso incluye investigación de usuarios para comprender a la audiencia, prototipado para visualizar el flujo y funcionalidad del producto, diseño de interfaz coherente con la marca, pruebas exhaustivas de usabilidad y una iteración continua basada en feedback para asegurar una experiencia óptima.
          <br/>Nuestro objetivo es ayudarte a alcanzar tus metas y hacer crecer tu negocio en línea.</p>
        <article className='profiles'>
        <div className='profile1'>
          <h3 className='name-profile'>Triana Soler Martin</h3>
          <img src='../../src/assets/img/triana.jpeg' alt="profile-photo-triana" />
          <p>COO de WebPymes. Experta en análisis de datos e incansable desarrolladora.</p>
          <a href='https://www.linkedin.com/in/triana-soler-martín/'>Contacto</a>
        </div>
        <div className='profile2'>
          <h3 className='name-profile'>Eliana Redón</h3>
          <img src='../../src/assets/img/eliana.jpeg' alt="profile-photo-eliana" />
          <p>CEO de WebPymes, apasionada de los retos y desarrolladora perfeccionista.</p>
          <a href='https://www.linkedin.com/in/eliana-rendon/'>Contacto</a>
        </div>
        <div className='profile3'>
          <h3 className='name-profile'>Fátima Cosme</h3>
          <img src='../../src/assets/img/fátima.jpeg' alt="profile-photo-fátima" />
          <p>Desarrolladora entregada al equipo de WebsPymes.</p>
          <a href='https://www.linkedin.com/in/fatimacosme/'>Contacto</a>
        </div>
      </article>
        <p style={{
          marginTop:'4em', 
          marginBottom:'1.7em', 
          fontSize:'2.1em', 
          lineHeight: 1.75}}
          >Para nosotras es fundamental conocer las demandas de cada cliente y asi, podremos dar con la solución más óptima para cada caso. Creemos que hacer webs es relativamente sencillo, pero el objetivo fundamental de nuestro trabajo es dar soluciones y para ello es preciso conocer los negocios y a las personas que están detrás de ellos.</p>
      </article>
    </section>

    <section className='container-contact' style={{marginTop:'10em', marginBottom:'20em'}}>
      <ButtomContact/>
    </section>
    </>
  )
}


export default Home;