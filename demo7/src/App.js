import './App.css';
import CGUlogin from './CGUlogin.js';
import UserLabel from './UserLabel.js';
import UserInput from './UserInput.js';
import PwdLabel from './PwdLabel.js';
import PwdInput from './PwdInput.js';
import LoginButton from './LoginButton.js';

function App()
{
  return(
    <div className="App">
      {CGUlogin()}
      <form>
        {UserLabel()}&emsp;{UserInput()}
        <br></br>
        <br></br>
        {PwdLabel()}&emsp;{PwdInput()}
        <br></br>
        <br></br>
        {LoginButton()}
      </form>
    </div>
  );
}
export default App;