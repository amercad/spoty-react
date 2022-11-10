import './Home.css';

export const Home = () => {
    return (
        <>
            <img src="https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/spotify%2Fbanner.webp?alt=media&token=d29dd6da-323a-4528-b9d0-ecfc52ba425d" alt="Banner" className="img-fluid w-100" />
            
            <section>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h1>Abba</h1>
                            <p>
                            ABBA es un grupo sueco de música pop, integrado por Agnetha Fältskog, Björn Ulvaeus, Benny Andersson y Anni-Frid «Frida» Lyngstad. El nombre «ABBA» es un acrónimo formado por las primeras letras del nombre de cada miembro (Agnetha, Björn, Benny, Anni-Frid).3

                            El cuarteto se formó en Estocolmo en 1972, logrando fama internacional al triunfar en el Festival de la Canción de Eurovisión 1974.4​ Desde entonces, ABBA ha ganado popularidad empleando melodías pegadizas, letras simples y su sonido propio, caracterizado por las armonías de las voces femeninas y el wall of sound, un efecto musical creado por el productor Phil Spector.
                            </p>
                            <hr/>
                        </div>
                    </div>
                    
                    <div className='row mt-5'>
                        <div className='col-12 col-md-8'>
                            <img src='https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/spotify%2Fgrupo-abba.jpg?alt=media&token=3ad999bc-9d44-4506-88b6-314f78bbcfc3' alt='abba' className='img-fluid w-100' />
                        </div>
                        <div className='col-12 col-md-4 align-self-center'>
                            <p>
                                Björn y Agnetha contrajeron matrimonio meses antes de la formación del cuarteto, mientras que Benny y Frida lo hicieron en 1978; los cuatro lidiaron con sus obligaciones artísticas al mismo tiempo que se ocupaban de sus nuevas familias.
    
                                Sus grabaciones tuvieron un impacto comercial que los llevó a convertirse en los artistas más exitosos de su compañía discográfica —Universal Music Group— y a ser la banda con más ventas en los años 1970.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}