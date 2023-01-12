// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, CardBody, CardHeader, CardTitle, Container } from "reactstrap";
import RegisterForm from "./components/RegisterForm";

export default function App() {
  return (
    <div className="App">
      <Container>
        <Card>
          <CardHeader>
            <CardTitle>Register Form</CardTitle>
          </CardHeader>
          <CardBody>
            <div>hello</div>
            <RegisterForm />
          </CardBody>
        </Card>
      </Container>
    </div>
  );
}
