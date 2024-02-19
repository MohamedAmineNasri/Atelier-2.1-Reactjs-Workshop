import { Component } from "react";

class Child extends Component {
    constructor(props) {
        super(props);
         
      }
   
    render() { 
        return (<div>
            <p>Child Component</p>
            <p>Message Received prop from my parent: {this.props.message}</p>
          </div>);
    }
}
 
export default Child;
 