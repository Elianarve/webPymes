import {createBrowserRouter} from 'react-router-dom';
import LayoutPublic from '../layout/LayoutPublic';
import Home from '../pages/home/Home';
import News from '../pages/news/News';
import Projects from '../pages/projects/Projects';
import Services from '../pages/services/Services';
import About from '../pages/about/About';


const router = createBrowserRouter([
    {
    path: '/',
    element: <LayoutPublic />,
    children:[
      {
        index: true,
        element: <Home />
      },
      {
        path:'news',
        element: <News />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'team',
        element: <About />
      }
    ]
    }
])

export default router;
