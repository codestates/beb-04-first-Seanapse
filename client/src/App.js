import Home from './pages/Home';
import {List} from "./components/export";
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <List></List>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;