import React from "react"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function Table({ hoteles }) {
  const deleteHotel = (value) => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": '*'},
  };
  fetch(`/api/login?id=${value}`, requestOptions)
  .then( res => {
      if (res.ok){
        // get all?
      }
      throw res
  }).catch(error => {
    alert("Ocurrio un error al enviar los datos")
  })
  }
  return(
    <React.Fragment>
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
                              <IconButton aria-label="delete" size="small" onClick={deleteHotel} value={value.id}>
                                <DeleteIcon fontSize="inherit" />
                              </IconButton>
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