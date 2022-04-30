import React, { useState } from 'react'
import { predecir } from "../helpers/logica"

const Form = ({ prioriZ, evidenciaXY, tablaLikelihood }) => {

    const [edad, setEdad] = useState(0)
    const [temperatura, setTemperatura] = useState(0)

    const mostrarDatos = (e) => {
        e.preventDefault()
        
        const [ probBebFria, probBebCaliente ] = predecir( prioriZ, evidenciaXY, tablaLikelihood, edad, temperatura )

        if ( probBebFria > probBebCaliente) {
            console.log('Bebida fria')
        } else {
            console.log('Bebida caliente')
        } 
    }

    return (
        <div className='bg-cafeteria-400 mt-10 px-5 py-10 rounded-md w-3/4 mx-auto my-60 shadow-lg md:w-3/4 '>
            <h1 className="text-cafeteria-100 font-bold text-xl uppercase text-center">Predecir Bebida</h1>
            <div className="mb-4">
                <form onSubmit={mostrarDatos} className='mt-10'>
                    <label htmlFor="edad" className="text-cafeteria-100 text-xl">Edad:</label>
                    <input name="Edad" type="number" className='mt-2 mb-2 block w-full p-3 rounded-md' placeholder="Edad" value={edad} onChange={(e) => setEdad(Number(e.target.value))} />

                    <label htmlFor="Temperatura" className="text-cafeteria-100 text-xl" >Temperatura en Centigrados:</label>
                    <input name="Temperatura" type="number" className='mt-2 mb-2 block w-full p-3 rounded-md' placeholder="Temperatura" value={temperatura} onChange={(e) => setTemperatura(Number(e.target.value))}/>

                    <button type="submit" className="text-cafeteria-100 text-lg mt-5 w-full bg-cafeteria-300 p-3 uppercase font-bold hover:bg-cafeteria-200 cursor-pointer rounded-lg">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Form