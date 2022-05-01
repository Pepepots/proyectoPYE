import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'



ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
)

const GraficoDona = () => {

    const data = {
        labels: ['Bebidas Frias', 'Bebidas Calientes'],
        datasets: [
            {
                label: 'Frias vs Calientes',
                data: [0.339, 0.661],
                backgroundColor: [
                    '#3A0CA3',
                    '#F72885',
                ],
                borderColor: [
                    '#3A0CA3',
                    '#F72885',
                ],
                borderWidth: 1,
                weight: .5
            },
        ],
    }

    return (
        <div className='m-5'>
            <Doughnut data={data} />
        </div>
    )
}

export default GraficoDona