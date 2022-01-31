import react, { Component } from "react";
import img from '../logo3.png';


class Card extends Component {
    render() {
        return (
            <div className="col">
                <div className="card" style={{ width: "18rem", textAlign: "center" }}>
                    <img src={img} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text text-dark">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )

    }
}

export default Card;