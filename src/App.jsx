import { useEffect, useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { procesarDatos } from "./helpers/logica"
import Layout from "./layout/Layout"
import Archivo from "./paginas/Archivo"
import { Datos } from "./paginas/Datos"
import Predecir from "./paginas/Predecir"

const App = () => {

    const [data, setData] = useState(false)

    const [prioriZ, setPrioriZ] = useState([])
    const [evidenciaXY, setEvidenciaXY] = useState([])
    const [tablaLikelihood, setTablaLikelihood] = useState([])

    useEffect(() => {
        if (data) {
            const [prioriZ, evidenciaXY, tablaLikelihood] = procesarDatos(data)
            
            setPrioriZ(prioriZ)
            setEvidenciaXY(evidenciaXY)
            setTablaLikelihood(tablaLikelihood)

        }
    }, [data])  
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ data ? (<Navigate to='/datos/predecir' />) : <Archivo setData={setData}/>}/>
                <Route path="/datos" element={data ? <Layout /> : (<Navigate to='/' />)}>              
                    <Route path='predecir' element={<Predecir prioriZ={prioriZ} evidenciaXY={evidenciaXY} tablaLikelihood={tablaLikelihood} />} />    
                    <Route path='visualizar' element={<Datos />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App 