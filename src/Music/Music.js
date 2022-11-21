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
            
           
        if (isLoading) {
            
            return (<h3>Cargando...</h3>)
        
        } else {
        
            return (
                <>
                    <div className='container'>
                        <h1 className='mt-3 text-center'>Estan listas las canciones</h1>
                        <div className='row'>
                            {
                                canciones.map(cancion => (
                                    <div className='mt-5 col-12 col-md-4' key={ cancion.id }>
                                            <p key={ cancion.name }>{cancion.name}</p>
                                            <img key={ cancion.album.images[1].url } src={cancion.album.images[1].url} alt={cancion.name} className='img-fluid d-block' />
                                            <audio src={ cancion.preview_url } controls='controls'></audio>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </>    
            )

        }
}