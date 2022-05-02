import GraficoBarras from "../components/GraficoBarras"
import GraficoDona from "../components/GraficoDona"
import TablaSugerencia from "../components/TablaSugerencia"

export const Datos = ({ evidenciaXY }) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2">
            <div 
                className="h-auto w-10/12 mx-10 my-5 rounded-lg shadow-xl bg-cafeteria-500"
            >
                <GraficoDona />
            </div>

            <div
                className="h-auto w-11/12 m-5 rounded-lg shadow-xl col-span-2 bg-cafeteria-500"
            >
                <GraficoBarras evidenciaXY={evidenciaXY}/>
            </div>
            
            <div
                className="h-auto m-10 mt-1 rounded-lg shadow-xl col-span-3 bg-cafeteria-500"
            >
                <TablaSugerencia />
            </div>
        </div>
    )
}
