import axios from "axios";
import { useState, useEffect } from "react"

function Util() {
    // const [loading, setLoading] = useState(false);
    const [hoteles, setHoteles] = useState([]);
    const [ciudades, setCiudades] = useState([])

    const getHoteles = () => {
        // que el get me traiga solo los diponibles
        // axios.get('http://localhost:8080/hoteles')
        // .then(response => {
        //     if (response.status === 200){
        //         setHoteles(response.data);
        //     } else {
        //         alert("Error a traer datos del servidor")
        //     }
        // })
        // .catch(err => {
        //     console.error(err);
        // });
        // meter estos datos al sql
        setHoteles([{
            id:1,
            titulo:"Esplendor by Wyndham Asuncion",
            descripcion:"El Dazzler by Wyndham Asuncion cuenta ofrece WiFi gratuita, piscina exterior abierta todo el año y centro de spa. También alberga un bar. prime location, safe neighborhood.",
            src: "",
            rating: 4.5,
            amount: 80,
            nroHabitaciones: 2,
            ciudad: "ciudad del este"
            
        },
        {
            id:2,
            titulo:"ibis Asuncion",
            descripcion:"El ibis Asuncion se encuentra en Asunción, a 3,5 km del zoológico y del jardín botánico y a 5 km del centro de información de las Naciones Unidas,",
            src: "",
            rating: 3.5,
            amount: 70,
            nroHabitaciones: 1,
            ciudad: "ciudad del este"
        },
        {
            id:3,
            titulo:"Nomadas Hotel",
            descripcion:"El Nomada Hotel & Hostel se encuentra en pleno centro de Asunción, a solo cinco minutos en coche de Panteón Nacional de los Héroes y Museo de la Casa de la Independencia. Tendrás tintorería, atención multilingüe y consigna de equipaje a tu disposición. Pagando un pequeño",
            src: "",
            rating: 5,
            amount: 100,
            nroHabitaciones: 3,
            ciudad: "Caaguazu"
        },
        {
            id:4,
            titulo:"Las Lomas Casa Hotel",
            descripcion:"Si decides alojarte en Las Lomas Casa Hotel de Asunción, estarás en el barrio financiero y a apenas diez minutos a pie de Centro comercial Paseo La Galería y Museo de Arcilla. Tendrás un centro de negocios, periódicos gratuitos en el vestíbulo y tintorería a tu disposición.",
            src: "",
            rating: 3,
            amount: 25,
            nroHabitaciones: 1,
            ciudad: "asuncion"
        },
        {
            id:5,
            titulo:"Paramanta Lifestyle Hotel",
            descripcion:"Si decides alojarte en Paramanta Lifestyle Hotel de Asunción, estarás en el barrio financiero, a solo 5 minutos en coche de Centro comercial Shopping del Sol y Parque Ñu Guazú. ",
            src: "",
            rating: 5,
            amount: 100,
            nroHabitaciones: 1,
            ciudad: "asuncion"
        },
        {
            id:6,
            titulo:"Posada Del Cielo",
            descripcion:"Si decides alojarte en Las Lomas Casa Hotel de Asunción, estarás en el barrio financiero y a apenas diez minutos a pie de Centro comercial Paseo La Galería y Museo de Arcilla. Tendrás un centro de negocios, periódicos gratuitos en el vestíbulo y tintorería a tu disposición.",
            src: "",
            rating: 4,
            amount: 50,
            nroHabitaciones: 1,
            ciudad: "asuncion"
        },
        {
            id:7,
            titulo:"Danieri Asunción Hotel",
            descripcion:"Si decides alojarte en Danieri Asunción Hotel, estarás a menos de diez minutos a pie de Centro comercial Villa Morra y Centro comercial Shopping Mariscal.",
            src: "",
            rating: 4,
            amount: 70,
            nroHabitaciones: 2,
            ciudad: "asuncion"
        },
        {
            id:8,
            titulo:"Hotel Amalfi",
            descripcion:"Si decides alojarte en ibis AsuncionHotel Amalfi, estarás a menos de diez minutos a pie de Centro comercial Villa Morra y Centro comercial Shopping Mariscal.",
            src: "",
            rating: 2,
            amount: 40,
            nroHabitaciones: 2,
            ciudad: "asuncion"
        },
        {
            id:9,
            titulo:"Hotel hoteles",
            descripcion:"estarás a menos de diez minutos a pie de Centro comercial Villa Morra y Centro comercial Shopping Mariscal.",
            src: "",
            rating: 2,
            amount: 88,
            nroHabitaciones: 2,
            ciudad: "asuncion"
        }
        ])
    }

    const postHotel = (data) => {
        axios.post('http://localhost:8080/hoteles', data)
            .then(response => {
                if (response.status === 201){
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
        axios.delete('http://localhost:8080/hoteles', id)
            .then(response => {
                if (response.status === 202 ){
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
        // axios.get('http://localhost:8080/hoteles') // no entendi muy bien como es la url para pedir las ciudades, (tiene que regresar una lista de las ciudades)
        //     .then(response => {
        //         if (response.status === 200 ){
        //             setCiudades(response.data);
        //         } else {
        //             alert("error al traer datos del servidor")
        //         }
        //     })
        //     .catch(err => {
        //         console.error(err);
        //     });
        setCiudades(['Ciudad del Este', 'Asuncion', 'Caaguazu']);
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
        deleteHotel,
        hoteles,
        ciudades
    }
}
export { Util }