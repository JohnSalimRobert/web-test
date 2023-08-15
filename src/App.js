import './App.css';
import './index.css'
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
const links = [
  {url: '#', text: 'Home'},
  {url: '#', text: 'About us'},
  {url: '#', text: 'Services'},
  {url: '#', text: 'Blogs'},
  {url: '#', text: 'Careers'},
  {url: '#', text: 'Contact us'},
]



function App() {
  
  return (
    <div className="App">
      <Navbar links={links}/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
