import React, { Component } from 'react'
import Cart from './Cart';
import ProductDetail from './ProductDetail';
import ProductItem from './ProductItem';
import styles from './ProductList.module.css'


export default class ProductList extends Component {

    product = [
        {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
        },
        {
            "id": 2,
            "name": "Adidas Prophere Black White",
            "alias": "adidas-prophere-black-white",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 990,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
        },
        {
            "id": 3,
            "name": "Adidas Prophere Customize",
            "alias": "adidas-prophere-customize",
            "price": 375,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 415,
            "image": "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"
        },
        {
            "id": 4,
            "name": "Adidas Super Star Red",
            "alias": "adidas-super-star-red",
            "price": 465,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 542,
            "image": "http://svcy3.myclass.vn/images/adidas-super-star-red.png"
        },
        {
            "id": 5,
            "name": "Adidas Swift Run",
            "alias": "adidas-swift-run",
            "price": 550,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 674,
            "image": "http://svcy3.myclass.vn/images/adidas-swift-run.png"
        },
        {
            "id": 6,
            "name": "Adidas Tenisky Super Star",
            "alias": "adidas-tenisky-super-star",
            "price": 250,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 456,
            "image": "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png"
        },
        {
            "id": 7,
            "name": "Adidas Ultraboost 4",
            "alias": "adidas-ultraboost-4",
            "price": 450,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 854,
            "image": "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png"
        },
        {
            "id": 8,
            "name": "Adidas Yeezy 350",
            "alias": "adidas-yeezy-350",
            "price": 750,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 524,
            "image": "http://svcy3.myclass.vn/images/adidas-yeezy-350.png"
        },
        {
            "id": 9,
            "name": "Nike Adapt BB",
            "alias": "nike-adapt-bb",
            "price": 630,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 599,
            "image": "http://svcy3.myclass.vn/images/nike-adapt-bb.png"
        },
        {
            "id": 10,
            "name": "Nike Air Max 97",
            "alias": "nike-air-max-97",
            "price": 650,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 984,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-97.png"
        },
        {
            "id": 11,
            "name": "Nike Air Max 97 Blue",
            "alias": "nike-air-max-97-blue",
            "price": 450,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 875,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png"
        },
        {
            "id": 12,
            "name": "Nike Air Max 270 React",
            "alias": "nike-air-max-270-react",
            "price": 750,
            "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
            "shortDescription": "Paul George is the rare high-percentage shooter",
            "quantity": 445,
            "image": "http://svcy3.myclass.vn/images/nike-air-max-270-react.png"
        }
    ];
    state={selectedItem: null, isShowCart: false, cart : []}

    // show cart
    showCart = () => {
        this.setState({
            isShowCart: true,
        })
    }
    // hide cart
    hideCart = () => {
        this.setState({
            isShowCart: false,
        })
    }

    // add to cart
    addToCart = (prod) => {
        
        // kiểm tra trong giỏ hàng tồn tại rồi thì tăng quantity chưa thì push vô mảng

        const cloneCart = [...this.state.cart];
        const foundItem = cloneCart.find(item => item.product.id === prod.id);
        // tạo dữ liệu mới
        let cartItem = {product: prod,quantity: 1,}
        if(foundItem) {
            foundItem.quantity += 1;

        } else{
            cloneCart.push(cartItem);

        }

        //cap nhật lại giỏ hàng
        this.setState({
            cart: cloneCart,
        });

    }


    //calcTotalProductInCart
    calcTotalProductInCart = () => {
       return this.state.cart.reduce((total, item) => {
            return total + item.quantity
        },0)
    }

    // show detail
    setSelectedItem = (dataFromChild) => {
        this.setState({
            selectedItem: dataFromChild
        })
    }

    // increase quantity
    increaseQuantity = (id) => {
        const cloneCart = [...this.state.cart];
        const findProduct = cloneCart.find(prod => id === prod.product.id);

        findProduct.quantity += 1;
        this.setState({
            cart: cloneCart,
        })
    }

    // decrease quantity
    decreaseQuantity = (id) => {
        const cloneCart = [...this.state.cart];
        const findProduct = cloneCart.find(prod => id === prod.product.id);
        const findIndex = cloneCart.findIndex(item => id === item.product.id);

        if(findProduct && findProduct.quantity > 1) {
            findProduct.quantity --;
        }else{
            cloneCart.splice(findIndex, 1);
        }

        this.setState({
            cart: cloneCart,
        })

    }

    // total cart
    totalCart = () => {
        return this.state.cart.reduce((totalAll, item) => {
            return totalAll += item.product.price * item.quantity
        }, 0)
    }

    // payment all
    paymentAll = () => {
        this.setState({
            cart: [],
        }, () => {
            alert('Thanh Toán Thành Công');
        });
    }

    // delete cart
    deleteCart = () => {
        this.setState({
            cart: [],
        })
    }

    // delete cart item
    deleteCartItem = (id) => {
        const cloneCart = [...this.state.cart];

        const foundIndex = cloneCart.findIndex(item =>  id === item.product.id);

        cloneCart.splice(foundIndex, 1);

        this.setState({
            cart: cloneCart
        })
    }


    // render item
    renderProduct = () => {
        // reverse lại để show sản phẩm mới 
        const html = this.product.reverse().map((item) => {
            return (
                <div key={item.id} className="col-4">
                    <ProductItem 
                    prod={item} 
                    setSelectedItem={this.setSelectedItem} 
                    addToCart={this.addToCart}
                    />
                </div>
            )
        })
        return html;
    }



    render() {
        
        return (
            <div>
                <header className={styles.header}>
                    
                    <div className="logo col-3"><h1>Shoes Shop</h1></div>
                    <div className="cart col-9" style={{textAlign: 'right', fontSize: '40px', color: 'red'}}>
                        <div
                        onClick={this.showCart}
                         className={styles.cart }>
                            <span className={styles.quantity}>{this.calcTotalProductInCart()}</span> <i className="fa fa-shopping-cart "></i>
                        </div> 
                    </div>
                    
                </header>
                <div className="container-fluid" style={{ background: "#f5f9fe",paddingTop: 100 }}>
                    <div className="row">
                        <div className="col-3 p-2">
                            {this.state.selectedItem && <ProductDetail selectedItem={this.state.selectedItem} />} 
                        </div>
                        <div className="col-9">
                            <div className="row">
                                {this.renderProduct()}
                            </div>
                        </div>
                    </div>
                    {this.state.isShowCart && <Cart
                        paymentAll={this.paymentAll}
                        totalCart={this.totalCart}
                        decreaseQuantity={this.decreaseQuantity}
                        increaseQuantity={this.increaseQuantity}
                        deleteCartItem={this.deleteCartItem}
                        deleteCart={this.deleteCart}
                        cartItem={this.state.cart} 
                        hideCart={this.hideCart}
                    />}
                    
                </div>
            </div>
        )
    }
}
