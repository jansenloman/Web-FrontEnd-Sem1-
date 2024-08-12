import './App.css';
import Footer from './components/Footer';
import Router from './components/MyRouter';
import Navigationbar from './components/Navbar';

function App() {
  return (
    <div style={{fontFamily: 'Josefin Sans'}}>
      <Navigationbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
