import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {

    const location = useLocation()
    const urlActual = location.pathname

    return (
        <div className='md:flex md:min-h-screen'>
            
            <div className="md:w-1/4 bg-cafeteria-300 px-5 py-10">
                <h2 className='text-4xl text-center text-cafeteria-100'>
                    <span className='font-black'>Café</span> Probabilidad
                </h2>

                <nav className='mt-10'>
                    <Link 
                        className={`${ urlActual === '/datos/predecir' ? 'text-cafeteria-400' : 'text-cafeteria-500'} text-2xl block mt-2 hover:text-cafeteria-400`}
                        to="/datos/predecir"
                    >
                        Recomendacion
                    </Link>
                    <Link
                        className={`${ urlActual === '/datos/visualizar' ? 'text-cafeteria-400' : 'text-cafeteria-500'} text-2xl block mt-2 hover:text-cafeteria-400`}
                        to="/datos/visualizar"
                    >
                        Datos
                    </Link>
                </nav>

            </div>

            <div className='md:w-3/4 bg-fondo'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout