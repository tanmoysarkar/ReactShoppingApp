import React from 'react'

class checkout extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
        	<div>
            	<div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4 col-sm-offset-3">
                        <h1>Checkout</h1>
                        <h4>Total: ₹ </h4>
                        <div id="charge-error" className="alert alert-danger ">
                            
                        </div>


                        <form action="/checkout" method="post" id="checkout-form">

                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" id="name" className="form-control" required name="name"/>
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label for="address">Address</label>
                                        <input type="text" id="address" className="form-control" required name="address"/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label for="card-name">Name on card</label>
                                        <input type="text" id="card-name" className="form-control" required/>
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <div className="form-group">
                                        <label for="card-number">Card number</label>
                                        <input type="text" id="card-number" className="form-control" placeholder="4242424242424242" required/>
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <div className="row">
                                        <div className="col-xs-4">
                                            <div className="form-group">
                                                <label for="card-expiry-month">Expiry month</label>
                                                <input type="text" id="card-expiry-month" className="form-control" required/>
                                            </div>
                                        </div>
                                        <div className="col-xs-4">
                                            <div className="form-group">
                                                <label for="card-expiry-year">Expiry year</label>
                                                <input type="text" id="card-expiry-year" className="form-control" required/>
                                            </div>
                                        </div>
                                        <div className="col-xs-4">
                                            <div className="form-group">
                                                <label for="card-cvc">Security code</label>
                                                <input type="text" id="card-cvc" className="form-control" required/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-success">Buy!</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
export default checkout