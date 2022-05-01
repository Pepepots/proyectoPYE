import React from 'react'

const TablaSugerencia = () => {
    return (
        <div className='relative overflow-auto'>
            <h2 className='text-2xl text-center m-5 text-cafeteria-100 font-bold'>Sugerencia del robot</h2>
            <div className='px-4 py-8'>
                <table className='border-collapse border border-cafeteria-300 h-60 -my-5'>
                    <thead>
                        <tr>
                            <th className='border border-cafeteria-200 w-60 '> </th>
                            <th className='border border-cafeteria-200 w-60 '>Y=Frio</th>
                            <th className='border border-cafeteria-200 w-60 '>Y=Templado</th>
                            <th className='border border-cafeteria-200 w-60 '>Y=Calido</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-cafeteria-200 w-60 text-center'>X=Menor</td>
                            <td className='border border-cafeteria-200 w-60 text-center'>Caliente</td>
                            <td className='border border-cafeteria-200 w-60 text-center'>Fria</td>
                            <td className='border border-cafeteria-200 w-60 text-center'>Fria</td>
                        </tr>

                        <tr>
                            <td className='border border-cafeteria-200 w-60 text-center'>X=Menor</td>
                            <td className='border border-cafeteria-200 w-60 text-center'>Caliente</td>
                            <td className='border border-cafeteria-200 w-60 text-center'>Caliente</td>
                            <td className='border border-cafeteria-200 w-60 text-center'>Caliente</td>
                        </tr>

                        <tr>
                            <td className='border border-cafeteria-200 w-60 text-center'>X=Menor</td>
                            <td className='border border-cafeteria-200 w-60 text-center'>Caliente</td>
                            <td className='border border-cafeteria-200 w-60 text-center'>Caliente</td>
                            <td className='border border-cafeteria-200 w-60 text-center'>Caliente</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TablaSugerencia