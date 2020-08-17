import React from "react";

class User extends React.Component{

    render(){
        return (

            <div>
                First Name : {this.props.first_name}
            </div>
            <div>
                Last Name : {this.props.last_name}
            </div>

            <button onclick='this.props.whenClicked("Clicking is Good")'>Please Click Me</button>
        )
    }    
}

export default User;