import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import decoration from "../assets/Decoration.svg";
export default function FourSteps(){
    return(
        <div id='cos'>
            <section className="fs_section">
                <div className="fs_row">
                    <div className="fs_col">
                        <h2>Wystarczą 4 proste kroki</h2>
                        <img src={decoration} alt="dec"/>
                    </div>
                </div>
                <div className="fs_row fs_main_row">
                    <div className="fs_col fs_main_col">
                        <img/>
                        <h4>Wybierz rzeczy</h4>
                        <div className="span"/>
                        <h5>ubrania, zabawki, sprzęt i inne</h5>
                    </div>
                    <div className="fs_col fs_main_col">
                        <img/>
                        <h4>Spakuj je</h4>
                        <div className="span"/>
                        <h5>skorzystaj z worków na śmieci</h5>
                    </div>
                    <div className="fs_col fs_main_col">
                        <img/>
                        <h4>Zdecyduj komu chcesz pomóc</h4>
                        <div className="span"/>
                        <h5>wybierz zaufane miejsce</h5>
                    </div>
                    <div className="fs_col fs_main_col">
                        <img/>
                        <h4>Zamów kuriera</h4>
                        <div className="span"/>
                        <h5>kurier przyjedzie w dogodnym terminie</h5>
                    </div>
                </div>
                <div className="fs_row">
                    <div className="fs_col fs_btn">
                        <Link to="/logowanie"><h1>ODDAJ RZECZY</h1></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}