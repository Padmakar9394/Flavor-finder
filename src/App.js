import './App.css';
import About from './components/About/about';
import Nav from "./components/navbar/nav";
import AllCards from "./components/Cards/AllCards"

function App() {
  return (
    <>
      <Nav />
      <div className='bg-[#f1f5f9]'>
        <About />
        <AllCards />
      </div>
      
    </>
  );
}

export default App;
