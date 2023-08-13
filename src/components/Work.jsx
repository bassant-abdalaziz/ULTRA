import React ,{useEffect,useState} from 'react'
import '../css/Work.css';
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChain, faBolt, faTachometer } from '@fortawesome/free-solid-svg-icons';



const Work= ()=> {
    const [works, setWorks] = useState([])
    
    useEffect(() => {
         axios.get('modal/data.json').then((response) =>{
            console.log(response.data.works)
            setWorks(response.data.works)
         }
        
    )},[])

    
    const workList = works.map(workItem => {
        let icon ;
      
        if (workItem.icon_name === "faChain") {
          icon = faChain;
        } else if (workItem.icon_name === "faBolt") {
          icon = faBolt;
        } else if (workItem.icon_name === "faTachometer") {
          icon = faTachometer;
        }
      
        return (    
          <div className="Box" key={workItem.id}>
            <FontAwesomeIcon icon={icon} className='icon'/> 
            <h4 className="part-title">{workItem.title}</h4>
            <hr className="line" />
            <p className="part-desc">
              {workItem.body}
            </p>
          </div>
        );
      });
      
        
    
  return (
  <div className="work">
    <div className="container">

        <h2 className="heading"><span>My</span> Work</h2>
        <div className='workBoxes'>
          {workList}
        </div>
    </div>
  </div>
  )
}

export default Work