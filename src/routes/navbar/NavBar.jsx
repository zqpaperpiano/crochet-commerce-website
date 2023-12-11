import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrochetLogo} from '../../assets/crown.svg'
import './NavBar.scss';

const NavBar = () => {
    return(
        <Fragment>
            <div className='navigation'>
                    <Link className="logo-container" to='/'>
                        <CrochetLogo className="logo" />
                    </Link>

                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>

                    <Link className='nav-link' to='/signIn'>
                        SIGN IN 
                    </Link>

                    <Link className='nav-link' to='/signUp'>
                        SIGN UP 
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default NavBar;