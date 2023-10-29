import { NavLink } from "react-router-dom"
import {FaSearchDollar} from 'react-icons/fa';

const Header = () => {
  return (
    <header>
        <h2><FaSearchDollar/> İş Takip Sistemi</h2>
        <div>
            <NavLink to={"/"}>İş Listesi</NavLink>
            <NavLink to={"/add-job"}>İş Ekle</NavLink>
        </div>
    </header>
  )
}

export default Header;