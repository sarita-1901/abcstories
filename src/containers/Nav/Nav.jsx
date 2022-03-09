import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import SearchBox from "../../components/SearchBox/SearchBox";
import NavBar from "../../components/NavBar/NavBar";
import './Nav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faHome} from '@fortawesome/free-solid-svg-icons'


const Nav = props => {
   const{ content, setContent, openMenu, setOpenMenu,catglist,subcatglist} = props;
   
  const [searchTerm, setSearchTerm] = useState("");
  const [contentArr, setContentArr] = useState([]);
  

  const getAllContent = () => {
        
    fetch("http://localhost:8080/contents")
      .then(res => res.json())
      .then(json => setContentArr(json))
      .then(() => console.log("In first"))
      .catch(err => console.log("error1--" + err))

    
  }



  useEffect(() => {
    console.log("In Use Effect of Nav");
    getAllContent();
//    getAllComments();
  }, []);


  
  const handleInput = event => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  
/*  const filteredContentArr = contentArr.filter(content => {
    const contentTitleLower = content.title.toLowerCase();

    return contentTitleLower.includes(searchTerm);
  });*/

  return (
    <>
    <div className="navcontainer">
<Link to="/">
    <FontAwesomeIcon icon={faHome} size="2x" color="white"/>
    </Link>
      <SearchBox label={"contents"} searchTerm={searchTerm} handleInput={handleInput} />
      <NavBar contentArr={contentArr} content={content} setContent={setContent} openMenu={openMenu} setOpenMenu={setOpenMenu} searchTerm={searchTerm} catglist={catglist} subcatglist={subcatglist} />
      </div>
    </>
  );
};

export default Nav;
