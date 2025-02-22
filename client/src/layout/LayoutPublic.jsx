import { Outlet } from "react-router-dom";
import Nav from '../components/nav/Nav';
import Footer from "../components/footer/Footer";

const LayoutPublic = () => {
  return (
    <>
    <Nav/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default LayoutPublic;