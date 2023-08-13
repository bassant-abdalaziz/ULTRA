import React, { useState,useEffect }  from 'react'
import axios from "axios"
import '../css/Profile.css';
import ProfileItem from './ProfileItem'


const Profile= ()=> {

const [skills,setSkills]=useState([])

useEffect(()=>{
    axios.get('modal/data.json').then((response) => {
       setSkills(response.data.skills);
    });
},[])


const listSkills = skills.map(skill => {
    let sp ;
      
    if (skill.perc === "100%") {
      sp = "sp1";
    } else if (skill.perc === "90%") {
      sp = "sp2";
    } else if (skill.perc === "80%") {
      sp = "sp3";
    }

    return(
        <div className="bar" key={skill.id}>
                  <div className='skill'>
                    <span className="title">{skill.title}</span>
                    <span className="perc">{skill.perc}</span>
                  </div>
                  <div className="parent">
                      <span className={sp}></span>
                  </div>
        </div>
    )
})

  return (
    <div className="profile_skills">
      <div className="container">
        <div className='myProfile'>
        <div className="profile">
              <h2 className="heading"><span>My </span>Profile</h2>
              <ul className="profile-list">
                  <ProfileItem >
                      <span>Name</span>
                      Bassant Abdalaziz
                  </ProfileItem>
                  <ProfileItem >
                      <span>Birthday</span>
                      8/4/2000
                  </ProfileItem>
                  <ProfileItem >
                      <span>Address</span>
                      Zagazig
                  </ProfileItem>
                  <ProfileItem >
                      <span>Phone</span>
                      4444 5555 6666
                  </ProfileItem>
                  <ProfileItem >
                      <span>Email</span>
                      bassant123@gmail.com
                  </ProfileItem>
                  <ProfileItem >
                  <span>Website</span>
                      <span className="web">www.google.com</span>
                  </ProfileItem>
              </ul>
          </div>
          
          <div className="skills">
              <h2 className="heading">Some <span>skills</span></h2>
              <p className="skills-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
              </p>
              {listSkills}
          </div>
        </div>
      </div>
</div>
  )
}

export default Profile