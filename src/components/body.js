import React from "react"


class Body extends React.Component{
    render(){
        return(
            <div className="db_body">
                This is the place where the cards will lie 
                <br />
                <div className="main_cards">
                    This is the element for card
                </div>
                <div className="main_cards">
                    Second card for SonarQube
                </div>
            </div>
        )
    }
}

export default Body