import React, {Component} from "react"
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return <footer>
            <article className={"footer-content flex-group space-between flex-align-end"}>
                <div><a href={"https://pentacle.ai"} target={"_blank"} rel="noopener noreferrer">Made by pentacle dot ai</a>
                    <a href={"https://github.com/pentacledotai/sockexplorer"} target={"_blank"} rel="noopener noreferrer">GitHub</a>
                    {/*<Link to="/terms">Terms</Link>*/}
                </div>
                <div className={"embed"}>
                    <iframe width="100%" height="120"
                            src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&autoplay=1&feed=%2FMIYUKI_ETO%2Fmiyuki_sunset_210328%2F"
                            frameBorder="0" allow="autoplay"></iframe>
                </div>
            </article>
        </footer>
    }
}

export default Footer
