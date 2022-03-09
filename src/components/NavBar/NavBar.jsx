//contents menu
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


const NavBar = (props) => {
const{contentArr, content, setContent, openMenu, setOpenMenu, searchTerm, catglist,subcatglist} = props;

const filteredcontent = (
<>    <p>{catglist}</p> <p>{subcatglist}</p> </>
);


const menuCat = catglist.map((contentCat, index) => {

  const handleCatgClick = () => {
   // setContent(contentCat) //to check for description
    setOpenMenu(contentCat);
  }


  const expandedMenu = (
    <>
    <div className="navbar__subcatg"  onClick={handleCatgClick}>
    
      <FontAwesomeIcon icon={faChevronDown} size="1x" color="white"/>
      <span className="menutext">
       {contentCat} </span></div>
    {

    subcatglist.filter((item) => item.startsWith(contentCat)).map((subcatg,index) => {
     
 return     (
  <>
  <div className="navbar__subcatg__item" >
    {/*onClick={()=>setContent(subcatg)}>*/}
   {/* <div onClick={logging}> */}
   <span>&nbsp;&nbsp;&nbsp;</span> {subcatg.substring(subcatg.indexOf(">")+1)} </div>
  
  
   {
contentArr.filter((cont) => subcatg.includes(cont.subcategoryId)).map((item,index) => 

(   <div className="navbar__subcatg__itemtitle" onClick={() => setContent(item)} >
{item.title} 
</div>
))
}

  
 

</>


      )
      }
    )}</>
  );


  const collapsedMenu = (
    <div className="navbar__subcatg"  onClick={handleCatgClick}>
  <FontAwesomeIcon icon={faChevronUp} size="1x" color="white"/> <span className="menutext">
    {contentCat} </span></div>
   );



return (
<>
   {/* <div onClick={()=>setOpenMenu(contentCat)}> */} 

{openMenu === contentCat ? expandedMenu : collapsedMenu}



{/*  </div> */}
    

  </>)})


  return (
    <div className="navbar">
   <div className="bookmarked">
   <input type="checkbox" id="bookmarked" name="bookmarked" value="bookmarked" class="checkbox" />Show bookmarked only   </div>
{searchTerm == "" ? menuCat : filteredcontent }
 </div> )
}

export default NavBar
