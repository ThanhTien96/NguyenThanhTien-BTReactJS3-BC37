import React, { Component } from 'react'
import style from './ProductDetail.module.css';

export default class ProductDetail extends Component {
    render() {
        const {image, name, description, price, quantity} = this.props.selectedItem
        return (
            <div className="col-3 position-fixed" style={{bottom: "5px"}}>
                <div className={style.detail} >
                    <div className={style.imgBg} >
                        <img src={image} alt="shoe" className="img-fluid" />
                    </div>
                    <h5>Tên SP: {name}</h5>
                    <p>Mô Tả: {description}</p>
                    <p>Giá: {price} $</p>
                    <p>Số lượng: {quantity}</p>
                </div>
            </div>
        )
    }
}
