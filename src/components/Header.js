import React from 'react'
import axios from 'axios'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            userSignIn: []
        }
    }

    componentWillMount(){
        this.userSignIn()
    }

    userSignIn = ()=>{
        axios.get(window.localStorage)
        console.log(window.localStorage)
       
    }
    render(){
        return (
        	<div>
	            <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="/">Shopping Cart</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="/shopping-cart">
                                        <i className="fa fa-shopping-cart" aria-hidden="true"></i> Shopping cart
                                        <span className="badge"></span>
                                    </a>
                                </li>
                                <li className="dropdown">
                                   
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user" aria-hidden="true"></i>  <span class="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="/profile"> Profile</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="/logout">LogOut</a></li>
                                    </ul>
                                
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user" aria-hidden="true"></i> User Profile<span class="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="/signup">SignUp</a></li>
                                        <li><a href="/signin">SignIn</a></li>
                                    </ul>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

}
export default Header