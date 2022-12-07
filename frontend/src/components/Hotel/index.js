import { useParams } from 'react-router-dom'
import { useState} from 'react';
function Hotel() {
  const { id } = useParams();
  const hotel = useState(null);
  return(
    <h2>Soy el hotel nro {id}</h2>
  )
}

export { Hotel }