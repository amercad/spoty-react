import './Integrantes.css';

export const Integrantes = () => {

    const integrantes = [
        {
            nombre: 'Agneta Åse Fältskog',
            rol: 'Vocalista',
            edad: '72 años',
            foto: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/spotify%2Fagnetha.jpg?alt=media&token=9be1a375-7d54-4873-a7f8-b45765947ae3'
        },
        {
            nombre: 'Anni-Frid Synni Lyngstad',
            rol: 'Vocalista',
            edad: '76 años',
            foto: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/spotify%2Fanny-frid.jpg?alt=media&token=2647ff0c-caa8-4552-b0a6-d3dac1a3d637'
        },
        {
            nombre: 'Göran Bror Benny Andersson',
            rol: 'Vocalista',
            edad: '75 años',
            foto: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/spotify%2FBenny.jpg?alt=media&token=88555234-ecad-4d16-bd4f-00a5ccdd617d'
        },
        {
            nombre: 'Björn Kristian Ulvæus',
            rol: 'Guitarrista',
            edad: '77 años',
            foto: 'https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/spotify%2FBjorm.jpg?alt=media&token=17d71db5-a84c-439c-a5d7-504becbbd8a2'
        }
    ];
    
    

    return (
        <>

            <div className="row row-cols-1 row-cols-4 g-0 mt-5">
                    
               {
                    integrantes.map(integrante => (
                        <>
                            <div key={ integrante.nombre } className="col mt-3 p-5 bg-dark css-card">
                                <div className="card h-100 text-center">
                                    <img src={ integrante.foto } alt={ integrante.nombre } className="img-fluid w-100 img-card" />
                                    
                                    <div className='card-body-css'>
                                        <h3 className="text-center fw-bold mt-3">{ integrante.nombre }</h3>
                                        <br/>
                                        <p className="px-5">Edad: { integrante.edad }</p>
                                        <p className="px-5">Rol: { integrante.rol }</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
               } 
                
            </div>

        </>
    )
}