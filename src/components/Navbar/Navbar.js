import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import { Button } from '../button/Button'
import './Navbar.css'

export class Navbar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <div>
                <nav className='NavbarItems'>
                    <h1 className='navbar-logo'>
                        OneStop
                        <i className="fa-solid fa-arrow-pointer logo-icon"></i>
                    </h1>
                    <div className='menu-icon' onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times logo-icon-2' : 'fas fa-bars logo-icon-2'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link className={item.cName} to={item.url}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <Button><Link to="/login">Log In</Link></Button>
                    {/* <Button><Link to="/signup">Sign Up</Link></Button> */}
                    {/* <Button>Sign Up</Button> */}
                </nav>
            </div>
        )
    }
}

export default Navbar
