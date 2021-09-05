import React, {Fragment} from "react";
import HomeHeader from "./HomeHeader";
import ThreeColumns from "./ThreeColumns";
import FourSteps from "./FourSteps";
import HP from "./Hp";
export default function Home(){

    return(
        <Fragment>
            <HomeHeader/>
            <ThreeColumns/>
            <FourSteps/>
            <HP/>
        </Fragment>
    )
}
/*
json-server --watch db.json
 */
