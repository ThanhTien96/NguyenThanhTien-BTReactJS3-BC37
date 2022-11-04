import React, { Component } from 'react'
import styles from './ProductItem.module.css';

export default class ProductItem extends Component {


    render() {

        const { image, name, price } = this.props.prod
        return (

            <div className={styles.item}>
                <img src={image} alt="shoe" />
                <h4>Tên: {name}</h4>
                <p>Giá: {price} $</p>
                <button
                onClick={() => this.props.addToCart(this.props.prod)}
                >Thêm Giỏ Hàng</button>
                <button
                onClick={() => {
                    this.props.setSelectedItem(this.props.prod)
                }}
                >Xem Chi Tiết</button>
            </div>

        )
    }
}
