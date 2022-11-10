import './Footer.css';
export const Footer = () => {
    return (
        <>
            <footer className="conteiner-fluid g-0 bg-footer mt-5">
               <div className="row">
                    <div className="col-12 col-md-6">
                        <img src="https://firebasestorage.googleapis.com/v0/b/cineamr-5042b.appspot.com/o/spotify%2Ffondo-footer.webp?alt=media&token=2a56e206-4d05-4368-8fa9-28cb7bc1ea5a" alt="Logo footer" className="img-fluid w-100 img-size" />
                    </div>
                    <div className="col-12 col-md-6 text-white align-self-center ps-5">
                        <h3>Abba</h3>
                        <ul>
                            <li>
                                <i class="me-3 fa-brands fa-instagram"></i>
                            </li>
                            <li>
                                <i class="me-3 fa-brands fa-instagram"></i>
                            </li>
                            <li>
                                <i class="me-3 fa-brands fa-instagram"></i>
                            </li>
                        </ul>
                        <p>
                            Todos los derechos reservados &copy; 2022
                        </p>
                    </div>
               </div> 
            </footer>
        </>
    )
}