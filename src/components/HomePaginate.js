import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import dc from "../assets/Decoration.svg"
export default function HomePaginate() {
    function part(){
const fund = {
    name: ["Dbam o Zdrowie", "Dla Dzieci", "Bez domu"],
    describtion:["Lorem ipsum dolor.", "Lorem ipsum dolor.", "Lorem ipsum."],
    target:["Lorem", "ipsum", "dolor"]

}

        return(
            <>
                <div>
                    <div>
                        <div>
                            <h2>Organizacja1</h2>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div><p>Lorem ipsum dolor sit amet.</p></div>
                    </div>
                </div></>
        )
    }




        return (
            <>
                <section>
                    <div className="home_row">
                        <div className="home_col"><h1>Komu Pomagamy</h1></div>
                        <div className="home_col"><img src={dc}/></div>
                    </div>
                    <div className="home_row">
                        <div className="home_col"><button>1</button></div>
                        <div className="home_col"><button>2</button></div>
                        <div className="home_col"><button>3</button></div>
                    </div>
                    <div className="home_row">
                        <div className="home_col"><p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Laborum, tempora!</p></div>
                    </div>

                    {part()}
                    {part()}
                    {part()}
                    <div className="home_row" >
                        <div className="home_col"><Pagination count={2} variant="outlined" shape="rounded"/> </div>
                    </div>
                </section>
            </>
        );
}
/*

 */