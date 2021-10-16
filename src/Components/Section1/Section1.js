import React from 'react'
import "./Section1.css";
import mobile2 from '../../Assets/X Mockup.png';
function Section1() {
    return (
        <div className="section">
            <div className="section1">
                <h2 className="head">How to use the app</h2>
            </div>
            <div className="left-container">
                <div className="leftbox">
                    <img src={mobile2} alt="" />
                </div>
            </div>
            <div className="container">
                <h2>1</h2>
                <p>Download the Meat Eat App from
                    Google Play Store or AppStore</p>
                <h2>4</h2>
                <p>Input your delivery address</p>
                <h2>2</h2>
                <p>Sign Up using your mobile number
                    and set your delivery location</p>
                <h2>5</h2>
                <p>Checkout by paying using your
                    convenient mode of payment</p>
                <h2>3</h2>
                <p>Add the products you need to
                    the cart</p>
                <h2>6</h2>
                <p>Manage and Track your order</p>
            </div>
        </div>
    )
}

export default Section1


