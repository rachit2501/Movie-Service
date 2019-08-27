import React, { Component } from 'react';

class LoginForm extends Component {
    username = React.createRef();
    // componentDidUpdate()
    // {
    //     this.username.current.focus();
    // }
    state = { account:{usernaem:'' , password:''
} };

    handleSubmit = e =>
    {
        e.preventDefault();
        console.log('Submit');
    }
    render() { 
        return <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <div autorFocus ref={this.username} className="form-group"><label htmlFor="username">Username</label><input id="username" type="text" className="form-control"/></div>
                <div className="form-group"><label htmlFor="password">Password</label><input id="password" type="text" className="form-control"/></div>
            </form>
            <button class="btn btn-primary">Login</button>  
        </div>;
    }
}
 
export default LoginForm;