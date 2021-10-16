import React from 'react'
import meateat from '../../Assets/Rectangle 1.jpg';
import mobile from '../../Assets/Group 164.png';
import badgeAppstore from '../../Assets/appstorebadge.svg';
import badgePlaystore from '../../Assets/google-play-badge 1.svg';
import "./Header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="image">
                <img className="background" src={meateat} alt="invalid" />
            </div>
            {/* right section */}
            <div className="siderect">
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
             
                <div >
                    <img className="mobileimg" src={mobile} alt="" />
                </div>
                <div>
                    <img className="badgeAppstore" src={badgeAppstore} alt="" />
                    <img className="badgePlaystore" src={badgePlaystore} alt="" />
                </div>
            </div>
            <div className="sectionLeft">
                <h2 className="mainhead">Meat Fresh <br/>
                Eat Fresh</h2>
                <p className="para1">Now you can get the best quality meat and meat product delivered to your home. At Meat Eat we strive to enable you to cook your meat with love alone, and not worries about what goes into your meat. Meat Eat gives you the promise of delivering you
                    Preservative Free, Antibiotic-Residue-Free, 100% Fresh and Natural meat and meat products.
                </p>
                <h4 className="tag">Enjoy your meat. Worry free</h4>
            </div>
        </div>
    )
}
