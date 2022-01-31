import '../App.css';

function Masthead() {
    return (
        <div className="container masthead justify-content-center">

            <div className="row d-flex justify-content-center">

                <div className="row justify-content-center p-0 m-3">
                    <div className="first-title-container" style={{width: "min-content", whiteSpace: "nowrap"}}>
                        <h1 className="col-12 text-center first-title h1-animation"> Fabio Trani</h1>
                        <h3 className="col-12 text-center first-title h3-animation fst-italic">Full-Stack Web
                            Developer</h3>
                    </div>
                </div>
                <div className="container col-12 d-flex justify-content-center align-items-center home-container rounded pt-3"
                    id="home">
                    <div className="row justify-content-center d-flex align-items-center">

                        <h2 className="col-12 yellow-text font-gothic" id="aboutTitle"></h2>
                        <p className="col-12 pt-3">
                            Mi chiamo <strong>Fabio Trani</strong>, ho 31 anni e sono un <strong>Junior Full-Stack Web
                                Developer</strong> abile nelle
                            metodologie agili.<br/><br/>
                            La mia formazione si è concretizzata tramite il <strong>Coding Bootcamp per Web Developers
                                di Aulab</strong>
                            che
                            mi
                            ha
                            fornito basi e competenze tali da iniziare il mio viaggio in questo ambito lavorativo.
                            Sono
                            in
                            grado
                            di
                            lavorare per obiettivi, in team e con buone capacità di problem solving anche grazie alle
                            esperienze
                            lavorative precedenti.<br/><br/>
                            Ho sempre avuto la passione per la tecnologia ed ora sono ansioso di mettermi in gioco e
                            continuare a migliorare ed aumentare le mie conoscenze.
                            Questo sito rappresenta l'unione dell'utile al dilettevole, sviluppato da me, è uno degli
                            strumenti che ho messo in campo per farmi conoscere.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Masthead