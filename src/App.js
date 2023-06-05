import logo from './logo.svg';
import './App.css';
import { LoginPage } from './pages/login/login';
import { SignUpPage } from './pages/sign-up/sign-up';

function App() {
  return (
    <div className="App">
      {/* <LoginPage></LoginPage> */}
      <SignUpPage></SignUpPage>
    </div>
  );
}

export default App;
