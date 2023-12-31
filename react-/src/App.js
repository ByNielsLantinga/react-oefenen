import './App.css';
import Hello from "./components/Hello";
import Message from "./components/Message";
import Help from "./components/Help";
import Profile from "./components/Profile";
import Classcomp from "./components/Classcomp";
import Counter from "./components/Counter";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Hello/>
      <Message/>
      <Help/>
      <Profile name="Niels" lastname="Lantinga"/>
      <Profile name="Tom" lastname="van den Boom"/>
      <Classcomp messagecontent="This is  a message from props "/>
      <Counter/>
      <Resume name="Daan"></Resume>
    </div>
  );
}

export default App;
