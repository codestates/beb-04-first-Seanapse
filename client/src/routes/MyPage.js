import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import Top from '../layouts/Top'
import Gallery from '../layouts/Gallery'

function MyPage({nftList, address}) {

    const [keyword, setKeyword] = useState('')
    const navigate = useNavigate()

    useEffect(()=> {
      if(address === '') {
        navigate('/')
      }
    }, [])

    return (
        <div className="MyPage">
            <Top address={address} keyword={keyword} changeHandler={setKeyword}/>
            <Gallery address={address} nftlist={nftList} keyword={keyword}/>
        </div>   
    )
}

export default MyPage;