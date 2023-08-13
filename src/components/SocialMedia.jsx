import React, { useState,useEffect } from 'react'
import axios from 'axios'
import "../css/SocialMedia.css"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'


const SocialMedia= ()=> {
const [social,setSocial] = useState([])


useEffect(()=>{
  axios.get('modal/data.json').then((response) => {
     setSocial(response.data.social);
  });
},[])

const listSocial = social.map(item => {
       let icon ;
       let fa;
      
        if (item.icon === "faFacebook") {
          icon = faFacebook
          fa = "face"
        } else if (item.icon === "faTwitter") {
          icon = faTwitter;
          fa ="twitter"
        } else if (item.icon === "faPinterest") {
          icon = faPinterest;
          fa= "pin"
        }

  return(
    <div className={`social ${fa}`} key={item.id}>
      <FontAwesomeIcon icon={icon} className='icon'/>
      <p>
        <span className="info1">{item.title}</span>
        <span className="info2">{item.body}</span>
      </p>
     </div>
            
  )
})
  return (
    <div className="social-media">
            
            {listSocial}
        </div>
  )
}

export default SocialMedia