
import { useEffect, useState } from 'react';
import axios from 'axios'
import './Covid.css';
import Child from './Child';


export default function Covid() {

      const [covidData, setCovidData] = useState([])
    const url = 'https://api.rootnet.in/covid19-in/stats/latest'
      
    useEffect(()=>{
      axios.get(url).then(res =>{
        console.log(res.data)
        console.log(res.data.data.regional)
        setCovidData(res.data.data.regional)

      })
    },[]) 

    return(
       <div className='container-fluid'>
            <div className='h1'><h1 >COVID RESULTS</h1></div>
            <div className='row'>
                  {covidData.map((val)=>{
                  return <div className='col-lg-3'>
                            <Child  
                              loc =  {val.loc}
                              confirmedCasesForeign ={val.confirmedCasesForeign}
                              confirmedCasesIndian={val.confirmedCasesIndian}
                              deaths= {val.deaths}
                              discharged= {val.discharged}
                              />
                  
                          </div>
                  }

                  )}
            </div>
       </div>
    )
  
  }