import { useState } from "react"
import Form from "../components/Form"
import Prediccion from "../components/Prediccion"
const Predecir = ({ prioriZ, evidenciaXY, tablaLikelihood }) => {

    const [prediccion, setPrediccion] = useState(false)

    return (
        <div className='bg-cafeteria-400 mt-20 px-5 py-10 rounded-md w-3/4 mx-auto my-60 shadow-lg md:w-3/4 '>
            {
                !prediccion ? (
                    <Form 
                        prioriZ={prioriZ} 
                        evidenciaXY={evidenciaXY} 
                        tablaLikelihood={tablaLikelihood} 
                        setPrediccion={setPrediccion}
                    />
                ) :
                (
                    <Prediccion prediccion={prediccion} setPrediccion={setPrediccion}/> 
                )
            }
        </div>
    )
}

export default Predecir