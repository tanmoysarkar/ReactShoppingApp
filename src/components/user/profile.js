import React from 'react'

class profile extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
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
                                <form className="form-horizontal form" action="/user/profile" method="POST">

                                    
                                    <div className="form-group">
                                        <label className="control-label col-sm-2" for="name">Name</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="name" name="name" placeholder="" value=""/>
                                        </div>
                                    </div>

                                    <div className="form-group hidden">
                                        <label className="control-label col-sm-2" for="email">Email</label>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control" id="email" name="email" placeholder="" value=""/>
                                        </div>
                                    </div>

                                    <div className="form-group hidden">
                                        <label className="control-label col-sm-2" for="password">Password</label>
                                        <div className="col-sm-6">
                                            <input type="password" id="password" name="password" className="form-control"/>
                                        </div>
                                    </div>

                                    <input type="hidden" name="_csrf" value="{{ csrfToken }}"/>
                                    
                                </form>
                            </div>
                            <div className="panel-body">
                                <form className="col-xs-2 col-sm-offset-3 form-horizontal form" action="/user/removeUser" method="POST">
                                        <button type="submit" className="btn btn-danger">Delete My Account</button>
                                </form>
                                <div className="col-xs-2 col-sm-offset-3">
                                    <a href="/" type="button" className="btn btn-success"><i className="fa fa-arrow-left" aria-hidden="true"> Continue Shopping</i> </a>
                                </div>
                            </div>

                        </div>

                        
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <h3>My shopping</h3>
                                    <hr/>
                                    <ul className="list-group">
                                        
                                            <li className="list-group-item">
                                                <span className="badge"></span>  Count(s)
                                            </li>
                                        
                                    </ul>
                                </div>

                                <div className="panel-footer">
                                    <strong>Value Total: ₹ </strong>
                                </div>
                            </div>
                       
                    </div>
                </div>
            </div>
        )
    }

}
export default profile