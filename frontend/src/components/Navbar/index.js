import React from "react"

function Navbar() {
    return(
        <React.Fragment>
          <div className="font-sans w-full pb-5 m-0">
            <div className="bg-white shadow">
              <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                  <div className="hidden sm:flex sm:items-center">
                    <a href="/" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">Products</a>
                  </div>
                </div>
                
                <div className="block sm:hidden bg-white border-t-2 py-2">
                  <div className="flex flex-col">
                    <a href="/" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1">Products</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
    )
}
export { Navbar }