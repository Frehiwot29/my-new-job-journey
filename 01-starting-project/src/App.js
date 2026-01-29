import './App.css';
import Async from './components/Async';
import AuthForm from './components/AuthForm';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <AuthForm/>
      <Async></Async>
      <Greeting></Greeting>
    </div>
  );
}
export default App;
