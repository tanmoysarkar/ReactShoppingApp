import React from 'react'
import axios from 'axios'

class Shoppingcart extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        console.log(localStorage)
    }


    render(){
        const itemAdded = localStorage
        let noCartAdded =   <div className="row">
                                <div className="col-xs-6 col-sm-offset-3">
                                    <h2>No shopping cart items</h2>
                                    <a href="/" type="button" className="btn btn-success"><i className="fa fa-arrow-left" aria-hidden="true"> Continue Shopping</i> </a>
                                </div>
                            </div>

        let totalCart = <div className="row">
                            <div className="col-xs-6 col-sm-offset-3">
                                <strong>Total: ₹ </strong>
                            </div>
                        </div>

        let cartCheckout = <div className="row">
                                <div className="col-xs-2 col-sm-offset-3">
                                    <a href="/" type="button" className="btn btn-success"><i className="fa fa-arrow-left" aria-hidden="true"> Continue Shopping</i> </a>
                                </div>
                                <div className="col-xs-2 col-sm-offset-3 checkout-item">
                                    <a href="/checkout" type="button" className="btn btn-success">Checkout</a>
                                </div>
                            </div>
        let data = JSON.parse(localStorage.getItem("data"))
        let items = []
        data.map(item=>{
            console.log(item)
            items.push(
                <div className="row">
                            <div className="col-xs-6 col-sm-offset-3">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <span className="badge"></span>
                                        <img src={item.imagePath} className="cartItems" />
                                        <strong>{item.name}</strong>
                                        <span className="label  item-price">₹ {item.price}</span>
                                        <div className="btn-group remove-all">
                                            <a href="/remove/" title="Remove all"><i className="fa fa-trash-o"  aria-hidden="true"></i></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                );
        })

        let cartTotalPrice =[]
        var sum = 0
        for (var i = 0; i < data.length; i++) {
            // console.log(data[i].price)
            sum += parseInt(data[i].price); //also didn't work
            console.log(sum)
        }
        return (
            <div>
                {
                    itemAdded ? <div>
                        {items}
                        {totalCart}
                        {cartCheckout}
                    </div> : <div>
                        {noCartAdded}
                    </div>
                }
            </div>
        )
    }

}
export default Shoppingcart

