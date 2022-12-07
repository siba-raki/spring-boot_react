import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import React, {useRef, useState} from 'react';
import HotelImg from "./hotel.jpg";
// poner host/image.png y en la api pooner la imagenes en /public
function Filter( {ciudades, hoteles, setHoteles}) {
    const tituloRef = useRef("")
    const nroHabitacionesRef = useRef(0)
    const ciudadRef = useRef("")
    const [clasificacion, setClasificacion] = useState(0)

    const submitHandler = (e) => {
      if (e && "preventDefault" in e) e.preventDefault()
      let newHoteles = hoteles
      if (tituloRef.current.value !== ""){
        newHoteles = newHoteles.filter(hotel => hotel.titulo.includes(tituloRef.current.value));
      }
      if (nroHabitacionesRef.current.value !== "" && nroHabitacionesRef.current.value > 0){
        newHoteles = newHoteles.filter(hotel => hotel.nroHabitaciones === nroHabitacionesRef.current.value);
      }
      if (ciudadRef.current.value !== ""){
        newHoteles = newHoteles.filter(hotel => hotel.ciudad === ciudadRef.current.value);
      }
      if (clasificacion !== 0){
        newHoteles = newHoteles.filter(hotel => hotel.rating >= clasificacion);
      }
      setHoteles(newHoteles)
    }

    return(
      <div className="flex h-screen justify-center items-center" style={{ backgroundImage: `url(${HotelImg})`, backgroundRepeat:"no-repeat" }}>
      <form className="w-2/5 py-5 m-auto px-5 bg-white shadow rounded-md" onSubmit={submitHandler}>
        <h5 className='tracking-wide text-gray-700 font-bold mb-3'>Hoteles en Paraguay</h5>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Nombre
            </label>
            <input name="name" ref={tituloRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white" type="text"/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Nro de habitaciones
            </label>
            <input name="nroHabitaciones" ref={nroHabitacionesRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white" type="number"/>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Ciudad
            </label>
            <div className="relative">
              <select name="ciudad" ref={ciudadRef} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option></option>                
                {
                  ciudades.map((ciudad) => {
                    return(
                      <option>{ciudad}</option>
                    )
                  })
                }
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Clasificacion
            </label>
            <Rating onChange={e => setClasificacion(e.target.value)} name="clasificacion" precision={0.5}/>
            <Button type="submit" size="large" variant="contained" className="mt-5 btn btn-primary">Filtrar</Button>
          </div>
        </div>
      </form>
      </div>
    )
}

export { Filter }