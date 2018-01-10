import React from 'react'

class signup extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
        	<div>
            	<div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <h1>User Registration</h1><br/>

                        
                            <div className="alert alert-danger">
                               
                                    
                               
                            </div>
                       

                        <form action="/user/signup" method="post">
                            <div className="form-group">
                                <label for="name">User Name</label>
                                <input type="text" id="name" name="name" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label for="email">E-Mail</label>
                                <input type="text" id="email" name="email" className="form-control"/>
                            </div>

                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password" className="form-control"/>
                            </div>
                            
                            <input type="hidden" name="_csrf" value=""/>
                            <br/>
                            
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}
export default signup