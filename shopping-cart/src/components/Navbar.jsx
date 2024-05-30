import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import logo from "../Assets/Logo.png"

const Navbar = () => {
  return (
    <div className="bg-blue-500">
      <div className="flex flex-row justify-between">

        <NavLink to="/">
          <div>
          <img src={logo}/>
          </div>
        </NavLink>

          <div>
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div>
                  <FaShoppingCart/>
              </div>
            </NavLink>
            
          </div>
      </div>
    </div>
  )
};

export default Navbar;
