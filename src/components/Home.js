import React, {Fragment} from "react";
import HomeHeader from "./HomeHeader";
import ThreeColumns from "./ThreeColumns";
import FourSteps from "./FourSteps";
import HomePaginate from "./HomePaginate";
export default function Home(){

    return(
        <Fragment>
            <HomeHeader/>
            <ThreeColumns/>
            <FourSteps/>
            <HomePaginate/>
        </Fragment>
    )
}
