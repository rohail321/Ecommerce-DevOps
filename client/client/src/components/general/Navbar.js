import React from 'react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../actions/authActions'

const Navbar = ({auth:{isAuthenticated}, logout}) => {
    const user=( <ul>
        <li><Link to="/dashboard" >Dashboard</Link></li>
        <li><Link to="/register?role=seller" >Seller</Link></li>

        <li><Link to="/login" onClick={logout} >
            <span className='hide-on=mobile' >Logout</span>
            </Link></li>
    </ul> )

    const guest=(
        <ul>
        <li><Link to="/register?role=seller" >Seller</Link></li>
        <li><Link to="/register?role=customer" >Register</Link></li>
        <li><Link to="/login" >Login</Link></li>
    </ul> 
    )
  return (
    <nav className='main-navbar bg-dark' >
        <h1>
            <Link to='/'>
                <i className='fas fa-store' ></i> Web Shop
            </Link>     
        </h1>
       {isAuthenticated?user:guest}
    </nav>
  )
}
const mapStateToProps=(state)=>({
    auth:state.auth,
})

export default connect(mapStateToProps, {logout})(Navbar)
