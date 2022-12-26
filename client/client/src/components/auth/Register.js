import React, { Component } from 'react'
import Input from '../general/input'
import {register} from '../../actions/authActions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {message} from 'antd'


class Register extends Component {
    state={
        name:"",
        email:"",
        password:"",
        password2:""
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if(nextProps &&nextProps.auth.errors&& nextProps.auth.errors.length>0){
            nextProps.auth.errors.forEach(error => {
                message.error(error.msg)
            });
        }
        if(nextProps.auth.isAuthenticated){
            message.success("Registered succesfully")
            setTimeout(()=>this.props.history.push("/"),2000)

        }
    }

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit=()=>{
        let role=this.props.location.search.split("?role=")
        role=role[role.length-1]
        const {name,email,password,password2}=this.state
        const newUser={
            name,
            email,
            password, 
            role
        }
        if(password===password2){
            this.props.register(newUser)
        }
        else{
            message.error("Incorrect password")
        }
    }
  render() {
    const {name,email,password,password2}=this.state
    return (
      <div className='container' >
        <h1 className='large text-primary' >Register</h1>
        <div className='form'  >
        <Input type="text" name="name" placeholder="Enter name" value={name} onChange={this.onChange} />
        </div>
        <div className='form' >
        <Input type="email" name="email" placeholder="Enter email" value={email} onChange={this.onChange} />
        </div>
        <div className='form' >
        <Input type="password" name="password" placeholder="Enter password" value={password} onChange={this.onChange} />
        </div>
        <div className='form' >
        <Input type="password" name="password2" placeholder="Confirm password" value={password2} onChange={this.onChange} />
        </div>
        <button className='btn btn-primary' onClick={this.onSubmit}>Register</button>
        </div>
    )
  }
}

const mapStateToProps=(state)=>({
    auth:state.auth
})

export default connect(mapStateToProps, {register})(withRouter(Register))
