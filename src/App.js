import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/NavBar/Navbar'
import Rowpost from './Components/RowPost/Rowpost';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost/>
    </div>
  );
}

export default App;
