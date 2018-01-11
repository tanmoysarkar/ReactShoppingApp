import React from 'react'
import axios from 'axios'
import config from '../../config/config'
var api = config.api.root

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            product: []
        }
    }

    componentWillMount(){
        this.product()
    }

    product = ()=>{
        axios.get(api+'/api/product')
       .then((response)=>{
            console.log(response.data)
            this.setState({product: response.data})
        })
       .catch((error)=>{
        console.log("error",error)
       })
    }

    render(){
        let cart =[]
        for (var i = 0; i < this.state.product.length; i++) {
            cart[i] =   <div className="row">
                            <div className="col-sm-6 col-md-4">
                                <div className="thumbnail">
                                    <img src={this.state.product[i].imagePath} alt="..." className="img-responsive"/>
                                    <div className="caption">
                                        <h3>{this.state.product[i].name}</h3>
                                        <p className="description">{this.state.product[i].description}</p>
                                        <div className="col-xs-12">
                                            <div className="price pull-left">₹ {this.state.product[i].price}</div>
                                            <div className="count pull-right">{this.state.product[i].count} in Stock</div>
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

