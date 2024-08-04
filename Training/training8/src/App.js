//import logo from './logo.svg';
import './App.css';
import HelloCGU from './HelloCGU'
import MultiButton from './cgu_multiButton'
function App() {
  return (
    <div className="App">
      <div>
        {HelloCGU()}
      </div>
      <div>
        {MultiButton(10)}
      </div>
    </div>
  );
}

export default App;