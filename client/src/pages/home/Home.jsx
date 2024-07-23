import ButtomContact from '../../components/buttoms/ButtomContact.jsx';
import '../home/Home.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Home = () => {
  const { ref: refWeb, inView: inViewWeb } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: refSeo, inView: inViewSeo } = useInView({ triggerOnce: true, threshold: 0.1 });

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
        transition={{ duration: 1.5 }}>
        <h3>Diseño web atractivo y profesional con estudio de la UX/UI</h3>
        <img src='../src/assets/img/laptop-rainbow.jpg'></img>
        <p className='container-services-description' style={{marginTop:'8em'}}>Un diseño intuitivo mejora la usabilidad y facilita la navegación, mientras que una experiencia positiva fomenta la lealtad y satisfacción del usuario. Además, un diseño eficiente puede convertir visitas en clientes, reducir los costos de soporte y aumentar la retención, ya que los usuarios satisfechos tienden a regresar y recomendar la plataforma.</p>
        <p className='container-services-description'>Nuestro proceso incluye investigación de usuarios para comprender a la audiencia, prototipado para visualizar el flujo y funcionalidad del producto, diseño de interfaz coherente con la marca, pruebas exhaustivas de usabilidad y una iteración continua basada en feedback para asegurar una experiencia óptima.</p>
      </motion.article>
      <motion.article
       className='services-seo'
       initial={{x:300, opacity:0}}
       animate={{x:0, opacity:1}}
       duration={{ duration:1.5}}>
        <h3>Posicionamiento SEO para resultados de búsqueda</h3>
        <img src='../../src/assets/img/seo-758264_1280.jpg'></img>
        <p className='container-services-description'>Nuestro servicio de posicionamiento SEO está diseñado para que tu página web aparezca en los primeros resultados de búsqueda y atraiga tráfico de calidad. Realizamos un análisis exhaustivo de palabras clave y optimizamos tu contenido para mejorar tu ranking en los motores de búsqueda. Además, implementamos estrategias efectivas de link building y mejoramos la estructura de tu sitio web para que sea fácilmente indexado por los motores de búsqueda.</p>
        <p className='container-services-description'>Gracias al enfoque integral de SEO, aumentamos la visibilidad de tu negocio en línea y atraemos a más clientes potenciales. Desde la investigación de palabras clave hasta la optimización de contenido y la construcción de enlaces de calidad, nos aseguramos de que cada aspecto de tu sitio web esté optimizado para el éxito en los motores de búsqueda.</p>
      </motion.article>
      <article className='services-apps'>
        <h3>Apps a medida: soluciones para automatizar procesos de tu negocio</h3>
        <img src='../src/assets/img/code-1076536_1280.jpg'></img>
        <p className='container-services-description'style={{marginTop:'6em'}}>Ofrecemos servicios de web atractivos y profesionales que cautivarán a tus visitantes. Nuestro equipo de diseñadores expertos se encargará de crear una solución única y personalizada que refleje la identidad de tu marca.</p> <p className='container-services-description'style={{marginTop:'1em'}}>Utilizamos las últimas tendencias en diseño y tecnología para garantizar que tu negocio obtenga la solución que buscabas y sea moderno, funcional, optimizando las tareas necesarias para que tú puedas enfocarte en seguir desarrollando tu negocio.</p> <p className='container-services-description'style={{marginTop:'1em'}}>Además, nos aseguramos de que tu web esté optimizada para dispositivos móviles y cumpla con los estándares de usabilidad y accesibilidad.<br/>Con nuestro servicio, podrás destacarte de la competencia y brindar una experiencia excepcional a tus usuarios.</p>
      </article>
    </section>

    <section className='container-about'>
      <article className='container-about-description'>
        <h1>Nuestro Equipo</h1>
        <p>En WebsPymes, nos especializamos en crear experiencias digitales personalizadas mediante un enfoque integral. Nuestro proceso incluye investigación de usuarios para comprender a la audiencia, prototipado para visualizar el flujo y funcionalidad del producto, diseño de interfaz coherente con la marca, pruebas exhaustivas de usabilidad y una iteración continua basada en feedback para asegurar una experiencia óptima.</p>
        <p>Contamos con un equipo de profesionales altamente cualificados y con amplia experiencia en el sector. Nuestro objetivo es ayudarte a alcanzar tus metas y hacer crecer tu negocio en línea.</p>
        <article className='profiles'>
        <div className='profile1'>
          <h3 className='name-profile'>Triana Soler Martin</h3>
          <img src="https://via.placeholder.com/150" alt="profile" />
          <p>COO de WebPymes. Experta en análisis de datos e incansable desarrolladora.</p>
          <a href='https://www.linkedin.com/in/triana-soler-martín/'>Contacto</a>
        </div>
        <div className='profile2'>
          <h3 className='name-profile'>Eliana Redón</h3>
          <img src="https://via.placeholder.com/150" alt="profile" />
          <p>CEO de WebPymes, apasionada de los retos y desarrolladora perfeccionista.</p>
          <a href='https://www.linkedin.com/in/eliana-rendon/'>Contacto</a>
        </div>
        <div className='profile3'>
          <h3 className='name-profile'>Fátima Cosme</h3>
          <img src="https://via.placeholder.com/150" alt="profile" />
          <p>Desarrolladora entregada al equipo de WebsPymes..</p>
          <a href='https://www.linkedin.com/in/fatimacosme/'>Contacto</a>
        </div>
      </article>
        
        <p style={{marginTop:'8em', marginBottom:'2em'}}>Para nosotras es fundamental conocer las demandas de cada cliente y asi, podremos dar con la solución más óptima para cada caso. Creemos que hacer webs es relativamente sencillo, pero el objetivo fundamental de nuestro trabajo es dar soluciones y para ello es preciso conocer los negocios y a las personas que están detrás de ellos.</p>
        
      </article>
      
    </section>

    <section className='container-contact'style={{marginTop:'10em'}}>

      <ButtomContact/>

    </section>
    </>
  )
}


export default Home;