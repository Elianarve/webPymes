import {createBrowserRouter} from 'react-router-dom';

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
