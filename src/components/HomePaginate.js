import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import dc from "../assets/Decoration.svg"
export default function HomePaginate() {

const List ={
    fundation:[{name:["Fundacja 1", "Fundacja 2", "Fundacja 3"]},
        {describtion:["fundLorem ipsum dolor sit amet.","fundLorem dolor amet.", "fundLorem ipsum dolor sit."]},
        {target:["fabc", "fdef", "fghi"]}],
    organisation:[{name:["org 1", "org 2", "org 3"]},
        {describtion:["org Lorem ipsum dolor sit amet.","org Lorem dolor amet.", "org Lorem ipsum dolor sit."]},
        {target:["oabc", "odef", "oghi"]}],
    local:[{name:["loc 1", "loc 2", "loc 3"]},
        {describtion:["loc Lorem ipsum dolor sit amet.","loc Lorem dolor amet.", "loc Lorem ipsum dolor sit."]},
        {target:["labc", "lodef", "loghi"]}]
}
    const [list, setList]=useState(List.fundation)



        return (
            <>
                <section>
                    <div className="home_row">
                        <div className="home_col"><h1>Komu Pomagamy</h1></div>
                        <div className="home_col"><img src={dc}/></div>
                    </div>
                    <div className="home_row">
                        <div className="home_col"><button id="organization" onClick={(e) => setList(e.target.name)}>1</button></div>
                        <div className="home_col"><button>2</button></div>
                        <div className="home_col"><button>3</button></div>
                    </div>

                    <div className="home_row">
                        <div className="home_col"><p>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Laborum, tempora!</p></div>
                    </div>

                    <div className="Home_container">
                        <div className="Home_row">
                            <div className="Home_col">
                                <h2>{setList.name}</h2>
                                <p>{setList.describtion}</p>
                            </div>
                            <div className="Home_col"><p>{list.target}</p></div>
                        </div>
                        <div className="Home_row">
                            <div className="Home_col">
                                <h2>{list.name}</h2>
                                <p>{list.describtion}</p>
                            </div>
                            <div className="Home_col"><p>{list.target}</p></div>
                        </div>
                        <div className="Home_row">
                            <div className="Home_col">
                                <h2>{list.name}</h2>
                                <p>{list.describtion}</p>
                            </div>
                            <div className="Home_col"><p>{list.target}</p></div>
                        </div>
                    </div>

                    <div className="home_row" >
                        <div className="home_col"><Pagination style={{display:"flex"}} count={0} variant="outlined" shape="rounded"/> </div>
                    </div>
                </section>
            </>
        );
}
/*

 */