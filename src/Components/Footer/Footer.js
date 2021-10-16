import React from 'react'
import "./Footer.css"
import FooterLogo from '../../Assets/meateat 1.png';
import footerAppstore from '../../Assets/appstorebadge.svg';
import footerPlaystore from '../../Assets/google-play-badge 1.svg';

function Footer() {
    return (
        <div>
            <footer>
                <div className="upfoot">
                    <div className="footmenuheading">
                        <div className="footlogo">
                            <img src={FooterLogo} alt="" />
                            <p>Order Premium Meat and Meat Products, and get it home delivered. Buy<br />
                                Preservative Free, Antibiotic-Residue-Free, 100% Fresh and Natural Meat<br />
                                and Meat products. Fish & Seafood | Poultry | Mutton | Beef | Eggs |<br />
                                Read-to-Cook Products | Vegan Meat and much more.<br /></p>
                            <h3>Download our app to order.</h3>
                        </div>
                        <div className="downapphead">Download the app<br />
                            <div className="footerplaystore">
                                <img src={footerPlaystore} alt="" />
                                <img src={footerAppstore} alt="" />
                            </div>


                        </div>
                        <div className="contacthead">
                            Contact Us<br />
                            <a href="">support@kreerafresh.com</a><br />
                            <a href="tel:080-12345678">080-12345678</a>
                        </div>
                        <div className="citiesservehead">Cities we serve<br/>
                        <ul className="cities">
                            <li>Bengalore</li>
                            <li>Mumbai</li>
                            <li>Delhi</li>
                            <li>Chennai</li>
                            <li>Kochi</li>
                            <li>Hyderabad</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="downfoot"></div>
            </footer>
        </div>
    )
}

export default Footer
