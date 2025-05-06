import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    return ( 
        <>
          <h1>Deixe seu contato:</h1>
          <div>
            <label>Nome</label>
            <input type="text" placeholder="Digite seu nome" required/>
            <label>Email</label>
            <input type="email" placeholder="Digite seu email" required />
            <label>Comentário</label>
            <textarea name="comentario" placeholder="Deixe seu comentário" required></textarea>
            <button>Enviar</button>
          </div>
          <div>
            <button><Link to="/about">Voltar</Link></button>
            <Link to="/">Próximo</Link>
          </div>
          <h3>Equipe:</h3>
          <ul>
            <li><Link to={"/equipecontato/1/gabriela"}>Gabriela</Link></li>
            <li><Link to={"/equipecontato/2/gustavo"}>Gustavo</Link></li>
            <li><Link to={"/equipecontato/3/victor"}>Victor</Link></li>
            <li><Link to={"/equipecontato/4/geovana"}>Geovana</Link></li>
          </ul>
        </>
    );
}
 
export default Contact;