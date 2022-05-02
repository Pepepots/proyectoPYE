import { useState } from "react"
import { csvToArray } from "../helpers/logica"

const Archivo = ({ setData }) => {

    const [datos, setDatos] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.readAsText(datos)
        reader.onload = function (e) { 
            const text = e.target.result
            const data = csvToArray(text)
            setData(data)
        }
    }

    const handleChange = (e) => {
        setDatos(e.target.files[0])
    }

    return (
        <div className="min-h-screen">
            <div className="bg-cafeteria-300 h-96 flex">
                <div className="h-3/4 w-1/3 mx-auto bg-cafeteria-500 my-60 drop-shadow-2xl rounded-md flex">
                    <form onSubmit={handleSubmit} className="mx-auto my-auto">
                        <input
                            onChange={handleChange}
                            type="file"
                            accept='.csv'
                            className="block w-full text-sm text-cafeteria-200 mx-auto 
                            file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm
                            file:font-semibold file:bg-cafeteria-400 file:to-cafeteria-100 hover:file:bg-cafeteria-300"
                        />
                        <button type="submit" className="mt-10  mx-24 w-2/5 h-10 bg-cafeteria-400 rounded-lg hover:bg-cafeteria-300">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Archivo