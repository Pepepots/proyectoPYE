import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)

const GraficoBarras = ({ evidenciaXY }) => {

    const opciones = {
        responsive: true,
        plugins:{
            legend: {
                display: true,
                position: 'top'
            },
            title: {
                display: true,
                text: 'Distribucion conjunta X y Y'
            }
        }
    }

    const labels = ['menor-frio', 'menor-templado', 'menor-calido', 
                    'adulto-frio', 'adulto-templado', 'adulto-calido', 
                    'mayor-frio', 'mayor-templado', 'mayor-calido']

    const datos = [].concat.apply([], evidenciaXY)

    const data = {
        labels, 
        datasets: [
            {
                label: 'Probabilidad XnY',
                data: datos,
                backgroundColor: '#123456'
            }
        ]
    }

    return (
        <div className='m-5'>
            <Bar options={opciones} data={data} />
        </div>
    )
}

export default GraficoBarras