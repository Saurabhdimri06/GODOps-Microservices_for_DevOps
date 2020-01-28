import React from "react"
import Header from "../components/header"
import Sidebar from "../components/sidebar"


class Portal_body extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Sidebar />   
                
            </div>
        )
    }
}

export default Portal_body