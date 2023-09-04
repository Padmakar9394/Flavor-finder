import './App.css';
import About from './components/About/about';
import Nav from "./components/navbar/nav";
import AllCards from "./components/Cards/AllCards"
import Modal from './components/Cards/Modal';
import { useGlobalContext } from './context';

function App() {
  const {showModal} = useGlobalContext();
  return (
    <>
      <Nav />
      <div className='bg-[#f1f5f9]'>
        <About />
        <AllCards />
        { showModal && <Modal /> }
      </div>
      
    </>
  );
}

export default App;
