import { useState, useEffect } from 'react';
import { servicioCanciones } from '../services/servicioCanciones';

export const Music = () => {

    const [ canciones, setCanciones ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);
    
    useEffect(() => {
        servicioCanciones()
        .then(resp => {
            setCanciones(resp)
            setIsLoading(false);
        })
    }, []);
    
    console.log(canciones);
            
    return (
        <>
            { isLoading && <h3>Cargando...</h3> }
            
            {
                canciones.map(cancion => 
                (
                    <>
                    <h5>{ cancion.name }</h5>
                    <p>{ cancion.preview_url }</p>
                    </>
                )
                   
            
                )
            }
        </>
    )
}