import React, {useState } from 'react';
//import { Editor } from 'react-draft-wysiwyg';
//import { EditorState ,  draftToHtml,  convertToRaw} from 'draft-js';
import { Link } from 'react-router-dom'
//import axios from 'axios';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'

//import draftToHtml from 'draftjs-to-html';
//import htmlToDraft from 'html-to-draftjs';
import './Write.scss'

import { EditorState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Write = (props) => 
{

  const {catglist, subcatglist} = props;
const [viewMode,setViewMode] = useState(false);  
const [subcategory,setSubcategory] = useState([]);

const submittedText = (
  <><div style={{textAlign: "right"}}>
<Link to="/">
<FontAwesomeIcon icon={faHome} size="2x" color="grey" />
</Link>
</div><p className="successtext">Article has been submitted successfully!</p></>)

const [userInfo, setuserInfo] = useState({
  title: '',
//  description: '',
//  category: '',
//  subcategory: '',
});

const onChangeValue = (e) => {
  setuserInfo({
    ...userInfo,
    [e.target.name]:e.target.value
  });
  if (e.target.name === "category")
  setSubcategory(subcatglist.filter((c) => c.startsWith(e.target.value)));
} 

 let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const onEditorStateChange = (editorState) => {
   setDescription(editorState);
  }

  //const [isError, setError] = useState(null);


  const addDetails = (event) => {
    event.preventDefault();
      event.persist();
      fetch("http://localhost:8080/content", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      body: JSON.stringify({
        "title":userInfo.title,
        "type":"article",
        "text": userInfo.description.value,
        "subcategoryId":userInfo.subcategory,
        "categoryId": userInfo.category,
        "author":"Sarita Kalyani"  
      })  //body closing
      }) //fetch closing
     
     // .then((response) => response.json())
     .then(json1 =>  setViewMode(true))
      .catch(err => console.log(" error" + err))
} 
let categoryList = catglist.map((item, i) => {
    return (
        <option key={i} value={item}>{item}</option>
    )
}, this);

let subcategoryList = subcategory.map((item, i) => {
  return (
      <option key={i} value={item}>{item}</option>
  )
}, this);

  return (
  <>
  <Header/>
  {viewMode ? submittedText :
  <div>
    <div>
      <div className="editor"> 
        <form onSubmit={addDetails}>
          <div>
<div style={{textAlign: "right"}}>
          <Link to="/">
    <FontAwesomeIcon icon={faHome} size="2x" color="grey" />
    </Link>
    </div>

            <div className="fieldinput">
              <label className="fieldname"> Title</label>
              <input className="inputbox" type="text" name="title" value={userInfo.title} onChange={onChangeValue} />
            </div>

            <div className="fieldinput">
              <label className="fieldname">Category</label>

              <select className="inputbox"name="category" id="category" value={userInfo.category}  onChange={onChangeValue}>
                                    <option value="">Select Category</option>
                                    {categoryList}
                                </select>


{/*              <input className="inputbox" type="text" name="category" value={userInfo.category} onChange={onChangeValue}  /> */}
            </div>

            <div className="fieldinput">
              <label className="fieldname">Subcategory</label>
{/*              <input className="inputbox" type="text" name="subcategory" value={userInfo.subcategory} onChange={onChangeValue}/>*/}

<select className="inputbox"name="subcategory" id="subcategory" value={userInfo.subcategory}  onChange={onChangeValue}>
                                    <option value="">Select Subcategory</option>
                                    {subcategoryList}
                                </select>


            </div>

            <div className="editor__section">
                 <Editor
                  editorState={description}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={onEditorStateChange}
                />
              <textarea style={{display:'none'}} disabled ref={(val) => userInfo.description = val} value={draftToHtml(convertToRaw(description.getCurrentContent())) } /> 
            </div>

            <div className="publishbutton">
              <button type="submit" className="writesubmit"> Submit  </button>
            </div> 
          </div> 
        </form>
      </div>
    </div>
  </div>
}
</>
)
}

export default Write