import Home from './pages/Home';
import {Menubar} from "./components/export";
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Menubar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;