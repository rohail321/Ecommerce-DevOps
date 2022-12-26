import React, { Component } from 'react'
import Input from '../general/input'

import {login} from '../../actions/authActions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {message} from 'antd'

 class Login extends Component {
    state={
        email:"",
        password:"",
    }

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit=(e)=>{
        e.preventDefault()
        const {email,password}=this.state
        const newUser={
            email,
            password
        }
        this.props.login(newUser)

        
    }
    componentWillReceiveProps(nextProps){
        if(nextProps &&nextProps.errors&& nextProps.errors.length>0){
            nextProps.errors.forEach(error => {
                message.error(error.msg)
            });
        }
        
        if(nextProps.isAuthenticated){
            message.success("Login succesfully")
            setTimeout(()=>this.props.history.push("/"),2000)

        }
    } 
  render() {
    return (
        <div className='container' >
        <h1 className='large text-primary' >Login</h1>
        <div className='form' >
        <Input type="email" name="email" placeholder="Enter email" value={this.state.email} onChange={this.onChange} />
        </div>
        <div className='form' >
        <Input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.onChange} />
        </div>
        <button className='btn btn-primary' onClick={this.onSubmit} >Login</button>
        </div>
    )
  }
}

const mapStateToProps=(state)=>({
    isAuthenticated:state.auth.isAuthenticated,
    errors:state.auth.errors
})

export default connect(mapStateToProps, {login})(withRouter(Login))
