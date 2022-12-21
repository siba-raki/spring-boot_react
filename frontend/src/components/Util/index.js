import axios from "axios";
import { useState, useEffect } from "react"

function Util() {
    const [hoteles, setHoteles] = useState([]);
    const [ciudades, setCiudades] = useState([])

    const getHoteles = () => {
        axios.get('http://localhost:8080/hotel')
            .then(response => {
                if (response.status === 200){
                    setHoteles(response.data);
                } else {
                    alert("Error a traer datos del servidor")
                }
            })
            .catch(err => {
                console.error(err);
            });
    }

    const postHotel = (data) => {
        axios.post('http://localhost:8080/hotel', data)
            .then(response => {
                if (response.status === 200){
                    getHoteles()
                    return true
                } else {
                    return false
                }
            })
            .catch(err => {
                console.error(err);
            });
        }
        
    const deleteHotel = (id) => {
        axios.delete('http://localhost:8080/hotel', id)
            .then(response => {
                if (response.status === 200 ){
                    getHoteles()
                    return true;
                } else {
                    return false;
                }
            })
            .catch(err => {
                console.error(err);
            });
    }

    const updateHotel = (hotel) => {
        axios.update('http://localhost:8080/hotel', hotel)
            .then(response => {
                if (response.status === 200 ){
                    getHoteles()
                    return true;
                } else {
                    return false;
                }
            })
            .catch(err => {
                console.error(err);
            });
    }

    const getCiudades = () => {
        axios.get('http://localhost:8080/ciudad')
            .then(response => {
                if (response.status === 200 ){
                    setCiudades(response.data);
                } else {
                    alert("error al traer datos del servidor")
                }
            })
            .catch(err => {
                console.error(err);
            });
    }

    useEffect(() => {
        if (hoteles.length === 0){
            getHoteles()
        }
        getCiudades()
    // eslint-disable-next-line
    }, [])

    return{
        getHoteles,
        setHoteles,
        postHotel,
        updateHotel,
        deleteHotel,
        hoteles,
        ciudades
    }
}
export { Util }