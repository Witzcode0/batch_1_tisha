
import React, { useEffect } from "react";

class MountingClassExample extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor: Initializing state or props");
  }

  componentDidMount() {
    console.log("ComponentDidMount: Component is mounted");
  }

  render() {
    console.log("Render: Component is rendering");
    return <h1>Mounting using Class component</h1>;
  }
}

const MountingFunctionExample = () => {
  useEffect(() => {
    console.log("Component is mounted");
  }, []); // Empty dependency array ensures it runs once.

  return <h1>Mounting using Function component</h1>;
};


// export { MountingClassExample, MountingFunctionExample };

export default MountingClassExample;
