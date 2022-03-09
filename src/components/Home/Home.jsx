import React,{useState,useEffect} from 'react';
import Header from '../Header/Header';
import {Link} from 'react-router-dom';


import mainleft from '../../images/mainleft2.jpg'

import "./Home.scss"
//import ReadSection from '../../containers/Read/ReadSection';


const Home = (props) => {
const {openMenu,setOpenMenu,content, setContent, catglist, subcatglist, contents, setContents, allComments,setAllComments} = props;


/*
  const getAllContent = () => {
        
    fetch("http://localhost:8080/contents")
      .then(res => res.json())
      .then(json => setContents(json))
      .then(() => console.log("In first"))
      .catch(err => console.log("error1--" + err))

    
  }



  useEffect(() => {
    console.log("In Use Effect of Home");
    getAllContent();
//    getAllComments();
  }, []);


  console.log("In Home section");
  console.log(contents);
  */

const categories = catglist.map((catg, index) => {
  const catgclass = catg.substring(0,4).toLowerCase();
  console.log(catgclass);







  const handleMenuClick = () => {
    setOpenMenu(catg);
//    setContent(catg);
 




}



    return (
    
    
       <div className="category" onClick={handleMenuClick}>
       <Link className="link" to="/readsection" openMenu={openMenu} setOpenMenu={setOpenMenu} catglist={catglist} subcatglist={subcatglist} allComments={allComments} contents={contents}>
  <div className={catgclass}>
    {catg} 
  </div>
  </Link>
</div>    
  )    
    }
)

    return  (
    <div className='main'>
    <Header/>
      <div className="main__body"> {/*body begin */}  
        <div className="main__body__top">
          <div>
          <Link to="/new-article" catglist={catglist} subcatglist={subcatglist}> 
          <img className="main__img" src={mainleft} alt="mainimg" />
          </Link>
          </div> 

          <div  className="main__caption"> 
          <p className="main__caption__text">
          Sharing EXPERIENCES you EXPERIENCED <br/>
          In your life is a better EXPERIENCE to EXPERIENCE. 
          </p>
          </div> 

        </div>       {/*top closing*/}

        <div className="main__body__bottom"> 
        <h1 className="browsetitle">Browse in the below categories to read what your colleagues have to say...</h1>
          <div className="main__body__catgs">
            {categories}
          </div>
        </div>
      </div>
    </div>
)
}

export default Home
