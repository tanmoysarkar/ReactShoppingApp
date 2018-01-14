import React from 'react'
import axios from 'axios'
import config from '../../config/config'
var api = config.api.root

class profile extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            profile: []
        }
    }
    componentWillMount(){
        console.log(window.localStorage)
    }

    render(){
        const UserName = window.localStorage.userName
        const UserEmail = window.localStorage.userEmail
        return (
        	<div>
            	<div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h1>User Profile</h1>
                        <br/>

                        <div className="panel panel-default">
                            <div className="panel-body">
                                <h3>Personal data</h3>
                                <br/><br/>
                                <form className="form-horizontal form" action="/user/profile">
                                    <div className="form-group">
                                        <label className="control-label col-sm-2" for="name">Name</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="name" name="name" placeholder="" value={UserName} readonly/>
                                        </div>
                                    </div>

                                    <div className="form-group ">
                                        <label className="control-label col-sm-2" for="email">Email</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="email" name="email" placeholder="" value={UserEmail} readonly/>
                                        </div>
                                    </div>
                                </form>
                                <div className="panel-body">
                                    <h3>My shopping</h3>
                                    <hr/>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <span className="badge"></span>  Count(s)
                                        </li>
                                    </ul>
                                    <div className="panel-footer">
                                        <strong>Value Total: ₹ </strong>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-body">
                                
                                <div className="col-xs-2 col-sm-offset-3">
                                    <a href="/" type="button" className="btn btn-success"><i className="fa fa-arrow-left" aria-hidden="true"> Continue Shopping</i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default profile