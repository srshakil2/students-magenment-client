import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navber from "../Components/Navber/Navber";
import ContainerBox from "../Shared/ContainerBox/ContainerBox";

const Layout = () => {
  return (
    <div className="relative">
      <Navber></Navber>
      <ContainerBox>
        <Outlet></Outlet>
      </ContainerBox>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
