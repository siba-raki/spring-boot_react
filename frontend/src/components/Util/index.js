// import axios from "axios";
import { useState, useEffect } from "react"

function Util() {
    // const [loading, setLoading] = useState(false);
    const [valid, setValid] = useState(true);
    const [rol, setRol] = useState('admin');
    const [hoteles, setHoteles] = useState([]);

    const getHoteles = async (data={}) => {
        // const response = await axios.post(url, data);
        // if (response.status === 200) {}
        // traer ciudad y nro de habitaciones
        // que este disponible
        setHoteles([{
            id:1,
            titulo:"Esplendor by Wyndham Asuncion",
            descripcion:"El Dazzler by Wyndham Asuncion cuenta ofrece WiFi gratuita, piscina exterior abierta todo el año y centro de spa. También alberga un bar. prime location, safe neighborhood.",
            src: "",
            rating: 4.5,
            amount: 350
        },
        {
            id:2,
            titulo:"ibis Asuncion",
            descripcion:"El ibis Asuncion se encuentra en Asunción, a 3,5 km del zoológico y del jardín botánico y a 5 km del centro de información de las Naciones Unidas,",
            src: "",
            rating: 3.5,
            amount: 150
        }])
    }

    useEffect(() => {
        if (hoteles.length === 0){
            getHoteles()
        }
    // eslint-disable-next-line
    }, [])

    return{
        getHoteles,
        setHoteles,
        hoteles,
        valid,
        setValid,
        rol,
        setRol
    }
}
export { Util }