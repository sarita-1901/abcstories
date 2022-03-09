import React,{useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ReadSection from './containers/Read/ReadSection';
import Home  from './components/Home/Home'
import Write from './components/Write/Write';
//import contentArr from './data/content'
import './App.scss'

const App = () => {
  const [openMenu,setOpenMenu]=useState();
  const [content,setContent] = useState(null);
  const [contents,setContents] = useState(null);
  
  const catglist = ["Technology","Personal","Hobbies","Company Events/Programs"];
  const subcatglist = ["Technology > Cloud Migration","Technology > Java bug","Personal > Parenting","Personal > Relocation for Return to Office","Hobbies > Reading","Hobbies > Travelling","Company Events/Programs > Townhall 2021","Company Events/Programs > Tech Program Participation"];


  


  return (
    <div className="app">


<Router>      
     
       <Routes>

       <Route path="/" element={<Home  openMenu={openMenu} setOpenMenu={setOpenMenu} content={content} setContent={setContent} catglist={catglist} subcatglist={subcatglist} contents={contents} setContents={setContents} />}/>


       <Route path="/new-article" element={<Write catglist={catglist} subcatglist={subcatglist}/>} />


        <Route path="/readsection" element={<ReadSection  openMenu={openMenu} setOpenMenu={setOpenMenu}  content={content} setContent={setContent} catglist={catglist} subcatglist={subcatglist}  contents={contents} setContents={setContents} />}/>

      </Routes>
      </Router>
    </div>
  )
}

export default App
