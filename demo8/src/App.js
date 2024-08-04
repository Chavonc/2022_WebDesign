import './App.css';
import CGUlogin from './CGUlogin.js';
import LoginButton from './LoginButton.js';
import Email from './Email.js';
import PassWord from './PassWord.js';

function App()
{
  return(
    <div className="App">
      {CGUlogin()}
      <form>
        {Email()}
        <br></br>
        <br></br>
        {PassWord()}
        <br></br>
        <br></br>
        {LoginButton()}
      </form>
    </div>
  );
}
export default App;