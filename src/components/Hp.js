import React, {useEffect, useState} from "react";
export default function MyComponent() {

        const [selected, setSelected] = useState("foundation");
        const [list, setList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/db')
            .then(response =>response.json())
            .then(data =>{
                setList(data)
                console.log(data);
            })
    }, []);
        return (
            <div>
                <button>F</button>
                <button id="organisation" onClick={(e) => setSelected(e.target.id)}>
                    O
                </button>
                <button id="local" onClick={(e) => setSelected(e.target.id)}>L</button>
                <div>
                    {(list[selected] && list[selected].length) && list[selected].map(el => {
                        return (
                            <h1>{el.name}</h1>

                        )
                    })}
                </div>
            </div>
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

    */
