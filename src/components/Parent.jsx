import React from 'react';
import Child from './Child';
 
class Parent extends React.Component {
  render() {
    const messageFromParent = "Hello from ParentComponent!";

    return (
      <div>
        <p>Parent Component</p>
        {/* Passage de la propriété "message" au composant enfant */}
        <Child message={messageFromParent} />
      </div>
    );
  }
}

export default Parent;
