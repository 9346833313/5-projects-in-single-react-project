import { useEffect, useState } from 'react';
import axios from 'axios'
import './Nasa.css';


export default function Nasa() {

    const [nasaData, setNasaData] = useState({})
    const url = 'https://api.nasa.gov/planetary/apod?api_key=ucHRvGh4wozhaR7E4uSd2k5Ulz0LaHwOKKzi0uTL'
      
    useEffect(()=>{
      axios.get(url).then(res =>{
        console.log(res)
        console.log(res.data)
        setNasaData(res.data)

      })
    },[]) 

    return(
        <div className='con'>
        <img className='nasa' src={nasaData.url} />
        <h1 className='title'>{nasaData.title}</h1>
        
          {/* {nasaData.map((val)=>{
            return <div>{val.title}</div>
          } */}

          
        </div>
    )
  
  }