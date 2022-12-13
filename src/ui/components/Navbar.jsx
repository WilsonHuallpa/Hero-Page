
import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    //Esto es un custom hooks useNavigate.
    //Creado por react router dom. 
    const navigate = useNavigate();

    const onLogout = () => {
        navigate("/login");
        //En teoria el replace, replazar la pagina.
        //Nos no permite regresar ala pagina anterior. 
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    {/*Colocar explicitamente la clase active */}

                    <NavLink 
                        className={({isActive})=> `nav-item nav-link ${isActive ? 'active' : ''}` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive})=> `nav-item nav-link ${isActive ? 'active' : ''}` }
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={({isActive})=> `nav-item nav-link ${isActive ? 'active' : ''}` }
                        to="/search"
                    >
                        Search
                    </NavLink>
                    <NavLink 
                        className={({isActive})=> `nav-item nav-link ${isActive ? 'active' : ''}` }
                        to="/hero"
                    >
                        Hero
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link">
                        Wilson
                    </span>
                    <button   
                        className='nav-item nav-link btn'
                        onClick={onLogout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}