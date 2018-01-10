
import React from 'react'

class Shoppingcart extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        
        return (
            <div>
                <div className="row">
                    <div className="col-xs-6 col-sm-offset-3">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <span className="badge"></span>
                                <strong></strong>
                                <span className="label  item-price">₹ </span>
                                <div className="btn-group remove-all">

                                    <a href="/remove/" title="Remove all"><i className="fa fa-trash-o"  aria-hidden="true"></i></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6 col-sm-offset-3">
                        <strong>Total: ₹ </strong>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-xs-2 col-sm-offset-3">
                        <a href="/" type="button" className="btn btn-success"><i className="fa fa-arrow-left" aria-hidden="true"> Continue Shopping</i> </a>
                    </div>
                    <div className="col-xs-2 col-sm-offset-3 checkout-item">
                        <a href="/checkout" type="button" className="btn btn-success">Checkout</a>
                    </div>

                </div>
                <div className="row">
                    <div className="col-xs-6 col-sm-offset-3">
                        <h2>No shopping cart items</h2>
                        <a href="/" type="button" className="btn btn-success"><i className="fa fa-arrow-left" aria-hidden="true"> Continue Shopping</i> </a>
                    </div>
                </div>


            </div>
        )
    }

}
export default Shoppingcart

