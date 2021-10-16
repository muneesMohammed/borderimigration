import React from 'react'
import "./SupportForm.css"
function SupportForm() {
    return (
        <div>
            <div className="supportsection">
                <h3>Support</h3>
                <div className="formSupport">
                    <form action="">
                        <div className="input-group">
                            <div><label className="name-label" for="name">Your Name*</label>
                                <label className="email-label" for="email">Your email id*</label></div>
                            <input type="text" id="name" />

                            <input type="text" id="email" />

                        </div>
                        <div className="input-group">
                            <div> <label className="Platform-label" for="platform">What platform is this for?*</label>
                                <label className="select-label" for="subject">Subject*</label>
                            </div>

                            <select name="platform" id="platform">
                                <option value="default"></option>
                                <option value="Android">Android</option>
                                <option value="IOS">IOS</option>
                                <option value="Windows">Windows</option>
                                <option value="Linux">Linux</option>
                            </select>

                            <input type="text" id="subject" />

                        </div>
                        <div className="input-group">
                            <div><label className="textarea-label" For="about">Tell us more about the subject*</label></div>
                            <textarea name="about" id="about" cols="40" rows="4"></textarea>

                        </div>
                        <div className="submit-selection">
                            <input type="submit" className="submit-button" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default SupportForm
