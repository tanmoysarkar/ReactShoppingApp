import React from 'react'

class signin extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
        	<div>
            	<div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <h1>Login</h1><br/>
                        
                            <div className="alert alert-danger">
                                
                            </div>
                        
                        <form action="/user/signin" method="post">
                            <div className="form-group">
                                <label for="email">E-Mail</label>
                                <input type="text" id="email" name="email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password" className="form-control"/>
                            </div>
                            <input type="hidden" name="_csrf" value=""/>
                            <button type="submit" className="btn btn-primary">Enter</button>
                        </form>
                        <br/>
                        <p>Not yet Registered? <a href="/user/signup">Click here !</a></p>
                    </div>
                </div>
            </div>
        )
    }

}
export default signin