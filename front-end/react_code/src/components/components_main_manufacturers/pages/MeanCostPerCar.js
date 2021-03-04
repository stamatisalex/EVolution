

import React, { useEffect, useState } from 'react';
import {FormStyle} from './MeanCostPerCar_components/FormStyling.js'
import Form from './MeanCostPerCar_components/Form';
import  Muitable  from "./MuidataTable";
import {columns} from './MeanCostPerCar_components/MeanCostPerCarTableColumns'
import {BatteryLoading} from 'react-loadingg'


function ChargingSessions(props) {

  const [startdate, setStartDate] = useState([])
  const [enddate, setEndDate] = useState([])
  const [model, setModel] = useState([])

  const [options, setOptions]= useState([])
  

  const [data, setData] = useState([])
  const [general, setGeneral] = useState([])

  const [shouldRender, setShouldRender] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)
  const [isloading, setIsLoading] = useState(false)



  useEffect( () => {
    if (didSubmit){
      setIsLoading(true)
      console.log(model, startdate, enddate)

      fetch(`http://localhost:8765/evcharge/api/EnergyCost/PerModel/23/Ioniq/${startdate}/${enddate}`)
          .then(response => response.json())
          .then(fetchedData => {
              setData(() => fetchedData[6])
              let tmp=[]
              var i
              for (i=0; i<6; i++){
                  tmp.push(fetchedData[i])
              }
              setGeneral(() => tmp)

              console.log(fetchedData[6])

              setIsLoading(false)

          })
          .catch(err => console.log(err))
          setDidSubmit(false)
          if (!shouldRender)
            setShouldRender(true)
    }
  }, [didSubmit])



  return (
    <div >
      <FormStyle className='meanCostPerCar' >
        <Form setStartDate={setStartDate} setEndDate={setEndDate} setModel={setModel} setDidSubmit={setDidSubmit}/>
      </FormStyle>
      {data.length!==0 && !isloading? <Muitable data={data} tableName={`Mean energy cost per km for model ${model}`} columns={columns} /> : null}
      {data.length===0 && !isloading && shouldRender? <h2>No data</h2> : null}
      <br />
      <br />
      {isloading? <BatteryLoading size={"large"} speed={1} color={'#99cc00'} style={{margingTop: '20px', borderColor: '#99cc00', position: 'absolute', left: '50%', transform: 'translate(-50%,-50%)'}} /> : null}
    </div>

  );



}

export default ChargingSessions;




