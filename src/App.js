import Land from './Landing.js';
import Body from './Body.js'
import Footer from './Footer.js'
import logo from './assets/logo.png'
import './App.css';

function App() {
  return (
    <>
      <div className='sticky bg-white logo-div'><img  src={logo} alt='logo' className='center logo mv2' ></img></div>
      <Land/>
      <Body/>
      <Footer/>
    </>
  );
}

export default App;
