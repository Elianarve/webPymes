import {createBrowserRouter} from 'react-router-dom';
import LayoutPublic from '../layout/LayoutPublic';
import Home from '../pages/home/Home';

const router = createBrowserRouter([
    {
    path: '/',
    element: <LayoutPublic />,
    children:[
      {
        index: true,
        element: <Home />
      }
    ]
    }
])

export default router;
