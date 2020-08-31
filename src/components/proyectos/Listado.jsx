import React from 'react'
import Proyecto from './Proyecto';
const Listado = () => {

    //
    const proyectos = [
        {nombre: 'Tienda Virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Diseño de Sitio Web'}
    ]


    return (
        <ul className="listado-proyecto">
            {proyectos.map(proyecto => (
                <Proyecto
                    proyecto={proyecto}
                ></Proyecto>
            ))}
        </ul>
    )
}

export default Listado
