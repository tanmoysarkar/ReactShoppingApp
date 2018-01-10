import React from 'react'

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let cart =[]
        for (var i = 0; i < 5; i++) {
            cart[i] = <div className="row">
                        <div className="col-sm-6 col-md-4">
                            <div className="thumbnail">
                                <img src="https://rukminim1.flixcart.com/image/312/312/j7qi9ow0/pressure-cooker/j/z/b/12685-pigeon-original-imaevmhhhzn8nk8a.jpeg?q=70" alt="..." className="img-responsive"/>
                                <div className="caption">
                                    <h3></h3>
                                    <p className="description"></p>
                                    <div className="col-xs-12">
                                        <div className="price pull-left">₹ </div>
                                        <div className="count pull-right"> in Stock</div>
                                    </div><br/><br/>
                                    <div className="clearfix">
                                        
                                        <a href="/add-to-cart/" className="btn btn-success pull-right" role="button">Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
        }
        
        return (
            <div>
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4 col-sm-offset-3">
                        <div id="success" className="alert alert-success" >
                            
                        </div>
                    </div>
                </div>
                {cart}
            </div>
        )
    }

}
export default Home

