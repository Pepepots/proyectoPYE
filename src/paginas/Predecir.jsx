import { useEffect, useState } from "react"
import Form from "../components/Form"
const Predecir = ({ prioriZ, evidenciaXY, tablaLikelihood }) => {

    

    return (
        <div>
            <Form prioriZ={prioriZ} evidenciaXY={evidenciaXY} tablaLikelihood={tablaLikelihood} />
        </div>
    )
}

export default Predecir