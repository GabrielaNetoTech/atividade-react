import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return ( 
        <>
        <h1>Quem sou eu?</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique harum nihil expedita possimus aut itaque rerum recusandae nulla corporis excepturi tenetur consequatur, voluptatum omnis quis necessitatibus, magni, reiciendis debitis eligendi!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus corrupti repellendus laudantium, culpa aut unde in vero ut assumenda doloribus, eum illum ea ex quam nemo cupiditate neque! Eligendi, neque?</p>
            <div>
                <button><Link to="/">Voltar</Link></button>
                <button><Link to="/contact">Próximo</Link></button>
            </div>
        </>
       
    );
}
 
export default About;