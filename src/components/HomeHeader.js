import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import decoration from "../assets/Decoration.svg"
import header_bc from "../assets/Home-Hero-Image.jpg"

//import { Link as l} from 'react-scroll'
export default function HomeHeader(){
    return(
        <Fragment>
            <div className="log_panel">
                <Link to="/logowanie">Zaloguj</Link>
                <Link to="/rejestracja">Załóż konto</Link>
            </div>
            <nav>
                <ul className="menu">
                    <li><Link>Start</Link></li>
                    <li><Link>O co chodzi?</Link></li>
                    <li><Link>O nas</Link></li>
                    <li><Link>Fundacja i organizacje</Link></li>
                    <li><Link>Kontakt</Link></li>
                </ul>

            </nav>
            <div className="header-column">
                <div>
                    <h1>Zacznij pomagać!</h1>
                    <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                </div>
            </div>
            <div className="dec-container">
                <img src={decoration} alt="dec"/>
            </div>
            <div className="btn-container">
                <div><Link to="/logowanie">ODDAJ RZECZY</Link></div>
                <div><Link to="/logowanie">ZORGANIZUJ ZBIÓRKĘ</Link></div>
            </div>
            <img className="header-bc" src={header_bc} alt="header_bc"/>

        </Fragment>
    )
}
/*
<div>
                    <Link>ODDAJ RZECZY</Link>
                    <Link>ZORGANIZUJ ZBIÓRKĘ</Link>
                </div>
 */