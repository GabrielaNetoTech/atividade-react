import { useParams } from "react-router-dom";

const EquipeContato = () => {

    const {user} = useParams();

    return ( 
        <h3>Contato de {user}</h3>
    );
}
 
export default EquipeContato;