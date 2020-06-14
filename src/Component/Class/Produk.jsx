import React, { Component } from 'react'

import './CSS/Produk.css';

class Produk extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stock,
            sub: "beli",
            status: "Tersedia",
            disable: false

        }
    }

ButtonBeli = () =>{
this.setState ({
    stock: this.state.stock -1
})
if(this.state.stock ==1){
    this.setState({
        status : "Habis",
        disabled : true
    })
}
}
    render() {
        return (
            <div className="box-stock">
                <h2>{this.props.nama}</h2>
                <img src="https://asset.kompas.com/crops/lBn741Zfsgl0gP8PSXD0M70MieA=/0x0:800x533/750x500/data/photo/2020/03/19/5e72f686aecce.jpg" alt="" />
                <p><b>{this.props.harga}</b></p>
                <p>{this.state.stock}</p>
                <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button>
                <p>status</p>

            </div>
        )
    }
}

export default Produk