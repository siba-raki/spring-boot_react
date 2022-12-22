import axios from "axios";
import { useState, useEffect } from "react"

function Util() {
    const [hoteles, setHoteles] = useState([]);
    const [ciudades, setCiudades] = useState([])
    const [habitaciones, setHabitaciones] = useState([]);

    const getHoteles = async () => {
        try {
            const response = await axios.get("http://localhost:8080/hotel");
            if (response.status === 200){
                setHoteles(response.data);
            } else {
                alert("Error a traer datos del servidor")
            }
        } catch (error) {
            console.error(error);
        }
    }

    const postHotel = async ( data ) => {
        try {
            const response = await axios.post('http://localhost:8080/hotel', data);
            if (response.status === 200){
                getHoteles()
                return true
            }
        } catch (error) {
            console.error(error);
        }
        return false
    }

    const deleteHotel = async ( id ) => {
        try {
            const response = await axios.delete(`http://localhost:8080/hotel/eliminar/${id}`);
            console.log(response.status);

            if (response.status === 200 ){
                getHoteles()
                return true;
            }
        } catch (error) {
            console.error(error)
        }
        return false;
    };

    const updateHotel = async ( hotel ) => {
        try {
            const response = await axios.put('http://localhost:8080/hotel', hotel)
            if (response.status === 200 ){
                getHoteles()
                return true;
            } 
        } catch (error) {
            console.error(error)
        }
        return false;
    }

    const getCiudades = async () => {
        try {
            const response = await axios.get('http://localhost:8080/ciudad');
            if (response.status === 200 ){
                setCiudades(response.data);
            } else {
                alert("error al traer datos del servidor")
            }
        } catch (error) {
            console.error(error)
        }
    }

    const getHabitaciones = async ( id ) => {
        try {
            const response = await axios.get(`http://localhost:8080/hotel/habitacion/hotel/${id}`)
            if (response.status === 200 ){
                setHabitaciones(response.data);
            } else {
                alert("error al traer datos del servidor")
            }
        } catch (error) {
            console.error(error)
        }
    }

    const reservar = async ( data ) => {
        try {
            const response = await axios.post("http://localhost:8080/hotel/reserva", data)
            if (response.status === 200){
                return true;
            }
        } catch (error) {
            console.error(error)
        }
        return false;
    }

    const getLogin = async ( data ) => {
        try {
            const response = await axios.get(`http://localhost:8080/usuario/login/${data.user}/${data.password}`)
            if (response.status === 200){
                const data = await response.data;
                if (data){
                    localStorage.setItem('valid', true)
                    localStorage.setItem('userId', data[0].idUsuario)
                    localStorage.setItem('rol', data[0].rol)
                    return true;
                }
            }
        } catch (error) {
            console.error(error)
        }
        return false;
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
        getLogin,
        setHoteles,
        postHotel,
        updateHotel,
        deleteHotel,
        reservar,
        hoteles,
        ciudades,
        habitaciones,
        getHabitaciones
    }
}
export { Util }