import React, {Fragment} from "react";
export default function ThreeColumns(){

    return(
        <Fragment>
            <section className="tc">
                <div className="tc-row">
                    <div className="tc-col">
                        <h1>10</h1>
                        <h3>ODDANYCH WORKÓW</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam et illo iste
                            maiores neque officiis placeat quasi velit voluptates voluptatum.</p>
                    </div>
                    <div className="tc-col">
                        <h1>5</h1>
                        <h3>WSPARTYCH ORGANIZACJI</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus,
                            dolorum eveniet explicabo maxime nemo officiis porro quo reprehenderit voluptatum.</p>
                    </div>
                    <div className="tc-col">
                    <h1>7</h1>
                    <h3>ZORGANIZOWANYCH ZBIÓEK</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores eveniet
                        fugit laboriosam laborum maiores odio, qui sed ullam vero?</p>
                    </div>
                </div>

            </section>
        </Fragment>
    )
}