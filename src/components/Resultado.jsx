import React from 'react'
import useCotizador from '../hooks/useCotizador'
import { MARCAS, PLANES } from '../constants'

export const Resultado = () => {
    const { resultado, datos } = useCotizador()
    const { marca, plan, year } = datos;

    const nombreMarca = MARCAS.filter(m => m.id === Number(marca))
    const nombrePlan = PLANES.filter(p => p.id === Number(marca))

    if (resultado === 0) return null;

    return (
        <>
            <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
                <h2 className='text-gray-600 font-black text-3xl'>
                    Resumen
                </h2>
                <p className='my-2'>
                    <span className='font-bold'> Marca: </span>
                    {nombreMarca.nombre}
                </p>
                <p className='my-2'>
                    <span className='font-bold'> Plan: </span>
                    {nombrePlan.nombre}
                </p>
                <p className='my-2'>
                    <span className='font-bold'> Year: </span>
                    {year}
                </p>
                <p className='my-2'>
                    <span className='font-bold'> Total: </span>
                    {resultado}
                </p>
            </div>
        </>
    )
}
