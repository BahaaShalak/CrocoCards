
import crocoPic from "./assets/crocodile.gif"
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={crocoPic} alt="Crocodile"></img>
            <h2 className="card-title">Giren</h2>
            <p className="card-text">I am a not good person.</p>
        </div>
    );
}

export default Card