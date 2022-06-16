import { Routes, Route } from 'react-router-dom';
import MyPage from './routes/MyPage';
import Home from './routes/Home';
import { Menubar } from './components/export';
import Create from './routes/Create';
import { useState } from 'react';
import Detail from './routes/Detail';


function App() {

  const [nftList, setNftList] = useState([]);
  const [address, setAddress] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <div className="App">
      <Menubar setSearchKeyword={setSearchKeyword} address={address} setAddress={setAddress} setNftList={setNftList}/>
      <Routes>
        <Route path='/' element={<Home searchKeyword={searchKeyword} nftList={nftList} setNftList={setNftList} address={address} setAddress={setAddress}></Home>}></Route>
        <Route path='/detail/:tokenId' element={<Detail></Detail>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
        <Route path='/mypage' element={<MyPage nftList={nftList} address={address}></MyPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;