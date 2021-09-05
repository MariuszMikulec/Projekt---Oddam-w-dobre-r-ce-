import React, {useEffect, useState} from "react";
import Pagination from "@material-ui/lab/Pagination";
import dc from "../assets/Decoration.svg";
export default function HP() {

        const [selected, setSelected] = useState("foundation");
        const [list, setList] = useState([]);
        const [pages, setPages] = useState();
        const [style, setStyle] = useState();





    useEffect(() => {
        fetch('http://localhost:3000/db')
            .then(response =>response.json())
            .then(data =>{
                setList(data)
                console.log(data);
            })
    }, []);
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);

    };
    console.log(list[selected]);
    console.log(pages)
    console.log(style)
        return (
            <section>
                <div className="home_row">
                    <div className="home_col"><h1>Komu Pomagamy</h1></div>
                    <div className="home_col"><img src={dc}/></div>
                </div>
                <div className="home_row">
                    <button id="foundation" onClick={(e) => setSelected(e.target.id)} >Foundation</button>
                    <button id="organization" onClick={(e) => setSelected(e.target.id)}>Organization</button>
                    <button id="local" onClick={(e) => setSelected(e.target.id)}>Local</button>
                </div>
                <div className="home_row">
                    <div className="home_col"><p>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Laborum, tempora!</p></div>
                </div>
                    <div>
                        {(list[selected] && list[selected].length) && list[selected].map(el => {

                            return (
                                    <div className="Home_container">
                                        <div className="Home_row">
                                            <div className="Home_col">
                                                <h2>{el.name}</h2>
                                                <p>{el.desc}</p>
                                            </div>
                                            <div className="Home_col"><p>{el.target}</p></div>
                                        </div>
                                    </div>
                            )
                        })}
                        <Pagination  count={3} page={page} rowsPerPage={1} variant="outlined" shape="rounded" onChange={handleChange}/>
                    </div>

                <div className="home_row" >
                    <div className="home_col"> </div>
                </div>
            </section>
        );
}
/* const List ={
        fundation:[{name:["Fundacja 1", "Fundacja 2", "Fundacja 3"]},
            {describtion:["fundLorem ipsum dolor sit amet.","fundLorem dolor amet.", "fundLorem ipsum dolor sit."]},
            {target:["fabc", "fdef", "fghi"]}],
        organisation:[{name:["org 1", "org 2", "org 3"]},
            {describtion:["org Lorem ipsum dolor sit amet.","org Lorem dolor amet.", "org Lorem ipsum dolor sit."]},
            {target:["oabc", "odef", "oghi"]}],
        local:[{name:["loc 1", "loc 2", "loc 3"]},
            {describtion:["loc Lorem ipsum dolor sit amet.","loc Lorem dolor amet.", "loc Lorem ipsum dolor sit."]},
            {target:["labc", "lodef", "loghi"]}]}

json-server --watch db.json

    */
