import React from "react"
import AppsIcon from '@material-ui/icons/Apps';


class Sidebar extends React.Component{
    render(){
        return(
                <div className="sidebar">
                    <header className="header_title">
                        <br />
                    My Dashboard
                    <br />
                        <hr />
                    </header>
                    <ul>
                        <li><a href="#"><AppsIcon />Home</a></li>
                        <li>About</li>
                        <li>Maven</li>
                        <li>SonarQube</li>
                    </ul>
                </div>
        )
    }
}

export default Sidebar