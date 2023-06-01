import React from 'react'
import './section1.css';

const Section1 = () => {
  return (
    <section className="navbar1">
        <div className="logo">
            <h3>E-commerce</h3>
        </div>
        <div className="search">
            <div className="category"><button>All Categories</button></div>
            <div className="input">
                <input type="text" placeholder="Search anything" />
            </div>
            <div className="icon">
                <div className="img"></div>
            </div>
        </div>
        <div className="help">
            <button>Help</button>
        </div>
        <div className="account">
            <div className="user"></div>
            <h4>Account</h4>
        </div>
        <div className="shopping">
            <div className="shop"></div>
            <h4>Shopping</h4>
        </div>
    </section>
  )
}

export default Section1;