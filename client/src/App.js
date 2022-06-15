import {Routes, Route} from 'react-router-dom';
import MyPage from './routes/MyPage';
import Home from './routes/Home';
import { Menubar } from './components/export';
import Create from './routes/Create';
import Detail from './routes/Detail';

function App() {
  
  return (
    <div className="App">
      <Menubar></Menubar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/detail' element={<Detail></Detail>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
        <Route path='/mypage' element={<MyPage></MyPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;