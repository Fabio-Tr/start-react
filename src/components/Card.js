import react, { Component } from "react";


class Card extends Component {
    render() {
        return (
            <div className="col">
                <div className="card" style={{ width: "18rem", textAlign: "center" }}>
                    <img src={this.props.img} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title text-dark">{this.props.title}</h5>
                        <p className="card-text text-dark">{this.props.description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )

    }
}

export default Card;