import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <>
        <h2>ERRO 404: Página não encontrada</h2>
        <button><Link to="/">Voltar</Link></button>
        </>
    );
}
 
export default NotFound;