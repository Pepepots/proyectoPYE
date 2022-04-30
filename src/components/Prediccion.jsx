import React from 'react'

const Prediccion = ({ prediccion, setPrediccion}) => {

    const urlCaliente = 'https://res.cloudinary.com/pepepots9414/image/upload/v1651286678/coffee-and-bagel-characters-by-Vexels_t7y2xq.png'

    const urlFria = 'https://res.cloudinary.com/pepepots9414/image/upload/v1651287045/frappe-782544_ktsv6b.png'

    return (
        <div>
            <h1 className='text-5xl text-center' >Bebida {prediccion}</h1>
            <img 
                className='w-80 m-auto mt-5'
                src={ prediccion === 'caliente' ? urlCaliente : urlFria} 
                alt="Cafe Caliente" />

            <button 
                className="text-cafeteria-100 text-lg mt-5 w-full bg-cafeteria-300 p-3 
                uppercase font-bold hover:bg-cafeteria-200 cursor-pointer rounded-lg"
                onClick={() => setPrediccion(false)}
            >
                Reiniciar
            </button>
        </div>
    )
}

export default Prediccion