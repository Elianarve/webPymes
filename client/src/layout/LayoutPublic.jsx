import { Outlet } from "react-router-dom";
import Nav from '../components/nav/Nav';

const LayoutPublic = () => {
  return (
    <>
    <Nav/>
    <main>
      <Outlet/>
    </main>
    </>
  )
}

export default LayoutPublic;