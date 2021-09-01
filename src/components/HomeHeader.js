import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import decoration from "../assets/Decoration.svg"
import header_bc from "../assets/Home-Hero-Image.jpg"
import { Link as LinkScroll} from 'react-scroll'
export default function HomeHeader(){
    return(
        <Fragment>
            <header>
                <div className="log_panel">
                    <Link to="/logowanie">Zaloguj</Link>
                    <Link to="/rejestracja">Załóż konto</Link>
                </div>
                <nav>
                    <ul className="menu">
                        <li><LinkScroll to="cos" duration={1500} smooth>Start</LinkScroll></li>
                        <li><LinkScroll to="cos" duration={1500} smooth>O co chodzi?</LinkScroll></li>
                        <li><LinkScroll to="cos" duration={1500} smooth>O nas</LinkScroll></li>
                        <li><LinkScroll to="cos" duration={1500} smooth>Fundacja i organizacje</LinkScroll></li>
                        <li><LinkScroll to="cos" duration={1500} smooth>Kontakt</LinkScroll></li>
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
            </header>
        </Fragment>
    )
}
