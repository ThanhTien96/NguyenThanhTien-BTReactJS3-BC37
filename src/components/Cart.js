import React, { Component } from 'react'

export default class Cart extends Component {
    render() {


        return (
            <div className='position-fixed w-100 top-0 left-0 bottom-0 right-0' style={{ background: 'rgba(0,0,0,0.7)' }}>
                <div className="bg-white position-absolute p-5" style={{ top: "50%", left: "50%", transform: ' translate(-50%,-50%)', width: '60%' }}>
                    <button className='btn btn-dark position-absolute' onClick={() => { this.props.hideCart() }}
                        style={{ top: 20, right: 20 }}
                    >
                        <i className="fa fa-times"></i>
                    </button>
                    <h1>Giỏ Hàng</h1>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th colSpan={1}>MSP</th>
                                <th colSpan={2}>Tên sản phẩm</th>
                                <th colSpan={2}>Hình ảnh</th>
                                <th colSpan={2}>Số lượng</th>
                                <th colSpan={1}>Đơn Giá</th>
                                <th colSpan={1}>Thành Tiền</th>
                                <th colSpan={1}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.cartItem.map((item) => {
                                return (
                                    <tr key={item.product.id}>
                                        <td colSpan={1}>{item.product.id}</td>
                                        <td colSpan={2}>{item.product.name}</td>
                                        <td colSpan={2}><img src={item.product.image} alt="" className="img-fluid" style={{ width: '60px' }} /></td>
                                        <td colSpan={2}>
                                            <button
                                            onClick={() => this.props.increaseQuantity(item.product.id)}
                                            className='btn btn-dark me-2'>+</button>
                                            {item.quantity}
                                            <button
                                            onClick={() => this.props.decreaseQuantity(item.product.id)}
                                            className='btn btn-dark ms-2'>-</button>
                                        </td>
                                        <td colSpan={1}>{item.product.price} $</td>
                                        <td colSpan={1}>{(item.quantity * item.product.price).toLocaleString()} $</td>
                                        <td colSpan={1}><button 
                                        onClick={() => this.props.deleteCartItem(item.product.id)}
                                        className="btn btn-danger"><i className="fa fa-trash-alt"></i></button></td>
                                    </tr>
                                )
                            })}


                        </tbody>

                    </table>
                    <div>


                        <h4 style={{ fontSize: 20 }}>Tổng tiền: {this.props.totalCart().toLocaleString()}  $</h4>
                    </div>

                    <div className='mt-3'>
                        <button 
                            onClick={() => this.props.paymentAll()}
                            className="btn btn-danger me-5">Thanh Toán</button>
                        <button
                            onClick={() => this.props.deleteCart()}
                            className="btn btn-danger">Xóa giỏ hàng</button>
                    </div>

                </div>
            </div>
        )
    }
}
