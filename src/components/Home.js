import React, {Fragment} from "react";
import HomeHeader from "./HomeHeader";
import ThreeColumns from "./ThreeColumns";
import FourSteps from "./FourSteps";
export default function Home(){

    return(
        <Fragment>
            <HomeHeader/>
            <ThreeColumns/>
            <FourSteps/>
        </Fragment>
    )
}
