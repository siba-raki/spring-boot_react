import React from "react"
import Snack  from "../Snack" 

function Table({ hoteles, deleteHotel }) {
  const [snack, setSnack] = React.useState(false);

  const handleClick = (e) => {
    const isDeleted = deleteHotel(e.target.value)
    setSnack(
      isDeleted ? "Se elimino el hotel": "Error al eliminar el hotel"
    )
  }

  return(
    <React.Fragment>
      <Snack msg={snack} setMsg={setSnack}/>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-white border-b">
                  <tr>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      titulo
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      descripcion
                    </th>
                    {/* <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      imagen
                    </th> */}
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      calificacion
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      monto
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      accion
                    </th>
                  </tr>
                </thead>
                <tbody>
                {   Object.entries(hoteles).map(([key, value]) => {
                  return(
                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {value.titulo}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {value.descripcion}
                          </td>
                          {/* <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {value.src}
                          </td> */}
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {value.rating}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {value.amount}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <button aria-label="delete" size="small" onClick={handleClick} value={value.id}>
                                eliminar
                              </button>
                          </td>
                        </tr>
                )})}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export { Table }  