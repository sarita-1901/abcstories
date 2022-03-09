import React, {useState, useEffect} from 'react'
import Nav from '../Nav/Nav'
import ReadingPane
 from '../../components/ReadingPane/ReadingPane'
import './ReadSection.scss'
import Header from '../../components/Header/Header'
const ReadSection = (props) => {
  const {openMenu,setOpenMenu,content, setContent, catglist, subcatglist, contents, setContents} = props;
 
  console.log("read section called");
  
  return (
    <div className="readmain">
      <Header/>
    <div className="readsection">

     
         <Nav contentArr={contents} content={content} setContent={setContent} openMenu={openMenu} setOpenMenu={setOpenMenu} catglist={catglist} subcatglist={subcatglist}/> 

     {content && 
        <ReadingPane contentArr={contents} content={content} setContent={setContent}/> }
    
{/*      <Routes>
        <Route path="/:id" element={<ReadingPane contentArr={contentArr}/>}>

        </Route>
</Routes> */}

      </div>
      </div>

  )
}

export default ReadSection
