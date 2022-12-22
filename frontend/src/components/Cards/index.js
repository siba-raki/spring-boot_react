import { Fragment } from "react";
function Cards({hoteles}) {
  return(
    <Fragment>
      <div className="w-1/1">
        <div className="max-w-4xl mx-auto">
          { Object.entries(hoteles).map(([index, hotel]) => {
            return(
              <div className="flex font-sans border-solid border-2 rounded shadow shadow-indigo-500/40 my-5">
                <div className="flex-none w-48 relative">
                  <img src={hotel.foto || ''} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="flex-auto p-6">
                  <div className="flex flex-wrap">
                    <h5 className="flex-auto card-title text-lg text-slate-900">
                      {hotel.nombreHotel}
                      <p class="text-sm text-gray-600 flex items-left">
                        {hotel.ciudad}
                      </p>
                    </h5>
                      <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                        <p>{hotel.descripcion}</p>
                        <p>Telefono: {hotel.telefono}</p>
                      </div>
                    </div>
                      <a href={`/hotel/${hotel.idHotel}`} className="btn btn-primary float-end">Ver disponibilidad</a>
                    </div>
                  </div>
                )
            })}
        </div>
      </div>
    </Fragment>
  )
}
export {Cards}