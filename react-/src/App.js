import './App.css';
import Hello from "./components/Hello";
import Message from "./components/Message";
import Help from "./components/Help";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Hello/>
      <Message/>
      <Help/>
      <Profile name="Niels" lastname="Lantigna"/>
      <Profile name="Tom" lastname="van den Boom"/>
    </div>
  );
}

export default App;
