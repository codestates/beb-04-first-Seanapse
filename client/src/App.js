import {Routes, Route} from 'react-router-dom';
import MyPage from './routes/MyPage';
import Home from './routes/Home';
import { Menubar } from './components/export';
import Create from './routes/Create';
import { useState } from 'react';

function App() {
  
  const [nftList, setNftList] = useState([])
  const [address, setAddress] = useState('')
  const [searchKeyword, setSearchKeyword]= useState('');

  return (
    <div className="App">
      <Menubar setSearchKeyword={setSearchKeyword} address={address} setAddress={setAddress}/>
      <Routes>
        <Route path='/' element={<Home searchKeyword={searchKeyword}></Home>}></Route>
        <Route path='/detail' element={<div>Detail</div>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
        <Route path='/mypage' element={<MyPage></MyPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;