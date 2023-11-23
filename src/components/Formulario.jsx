import { MARCAS, YEARS, PLANES } from '../constants'
import React from 'react'
import { Fragment } from 'react'
import CotizadorContext from '../context/CotizadorProvider'
import useCotizador from '../hooks/useCotizador'
import Error from '../components/Error'

const Formulario = () => {

    const { datos, handleChangeDAtos, setError, error, cotizarSeguro } = useCotizador();

    const handlerSubmit = (e) => {
        e.preventDefault()
        if (Object.values(datos).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }
        setError('')
        cotizarSeguro()
    }

    return (
        <>  {error && <Error />}
            <form onSubmit={handlerSubmit}>
                <div className='my-5'>
                    <label className='block mb-3 font-bold text-gray-400 uppercase'>
                        Marca
                    </label>
                    <select value={datos.marca} name='marca' className='w-full p-3 bg-white border border-gray-200' onChange={event => handleChangeDAtos(event)} >
                        <option value=""> --- Seleccione Marca --- </option>
                        {MARCAS.map((marca) => {
                            return <option key={marca.id}
                                value={marca.id}>
                                {marca.nombre}
                            </option>
                        })}
                    </select>
                </div>

                <div className='my-5'>
                    <label className='block mb-3 font-bold text-gray-400 uppercase'>
                        Año
                    </label>
                    <select value={datos.year} name='year' className='w-full p-3 bg-white border border-gray-200' onChange={event => handleChangeDAtos(event)}>
                        <option value=""> --- Seleccione el Año --- </option>
                        {YEARS.map((year) => {
                            return <option key={year}
                                value={year}>
                                {year}
                            </option>
                        })}
                    </select>
                </div>
                <div className='my-5'>
                    <label className='block mb-3 font-bold text-gray-400 uppercase' >
                        PLanes
                    </label>
                    <div className='flex gap-3 items-center'>
                        {PLANES.map((plan) => {
                            return <Fragment key={plan.id}>
                                <label>
                                    {plan.nombre}
                                </label>
                                <input
                                    onChange={event => handleChangeDAtos(event)}
                                    type='radio'
                                    value={plan.id}
                                    name='plan' />

                            </Fragment>
                        })}
                    </div>
                    <input type='submit' className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursos-pointer p-3 uppercase font-bold' value='Cotizar' />
                </div>
            </form>
        </>
    )
}

export default Formulario