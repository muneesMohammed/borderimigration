import React from 'react'
import "./AppDownload.css";
import downloadAppstore from '../../Assets/appstorebadge.svg';
import downloadPlaystore from '../../Assets/google-play-badge 1.svg';
import mobile2 from '../../Assets/X Mockup.png';

function AppDownload() {
    return (
        <div>
            <div className="sectionAppdownload">

                <div className="backbox">
                    <div className="downloadContent">
                        <h3>Download The App</h3>
                        <p>Available for Android and iOS<br/>
                            Easy to use with simple, clean user interface
                            Multiple Payment Modes<br/>
                            App-Only Offers
                        </p>
                        <img className="downloadAppstore" src={downloadAppstore} alt="" />
                        <img className="downloadPlaystore" src={downloadPlaystore} alt="" />
                    </div>

                    <img className="Appmobile"src={mobile2} alt="invalidimg" />
                </div>
            </div>
        </div>
    )
}

export default AppDownload
