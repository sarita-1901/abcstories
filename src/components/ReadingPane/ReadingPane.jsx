
import React, {useState,useEffect} from 'react'
//import { useParams } from "react-router-dom";
import './ReadingPane.scss'
import { useForm } from "react-hook-form";

import image from "../../images/image.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faThumbsUp, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons'

const ReadingPane = (props) => {
  const {content} = props;
const [comment,setComment] = useState("");
const [comments, setComments]=useState();


const getAllComments = () => {
        
  fetch("http://localhost:8080/content/comments")
  .then(res => res.json())
  .then(json => setComments(json))
  .then(() => console.log("In second"))
  .catch(err => console.log("error2--" + err))

}


useEffect(() => {
  console.log("In Use Effect of ReadingPane");
//  getAllContent();
    getAllComments();
}, []);

//const [showComment,setShowComment] = useState(true);
  console.log("In Reading Pane");
  console.log(content);
  console.log(comments);
  const { register, handleSubmit } = useForm();

  const handleClick = () => {
content.likes = content.likes + 1;
content.like = true;
console.log("In likes");
  }

  const [mainInput,setMainInput]=useState("");

  const handleComment = (e) => {
    setComment(e.target.value);
  }


  const postComment = (e) => {
    e.preventDefault();
   //   e.persist();
    
    fetch(`http://localhost:8080/content/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    body: JSON.stringify({
      "contentid":content.contentId,
      "commentText":comment,
      "commentedBy":"Sarita Kalyani"
    })  //body closing
    }) //fetch closing
   
    .then((response) => console.log("comment posted"))
    .then((res) => getAllComments())
    .then((res) => setMainInput("") )
     .catch(err => console.log(" error" + err))
}   



const commentsSection = (
<> 
{

comments && 
comments.filter((eachcomment) => eachcomment.contentid == content.contentId).map((eachcomment) => {
  
return     (  

<div className="comment">
<div className="comment__left">
  <FontAwesomeIcon icon={faComment}  size="1x"/>
  </div>
  
  <div className="comment__right">
    <div className="comment__right__about">
      <div className="commentby">
      {eachcomment.commentedBy}
      </div>
      <div className="commenton">
      {eachcomment.commentedOn}
      </div>
    </div>

    <div className="commenttext">
    {eachcomment.commentText}
    </div>
  </div> {/*comment right closing*/}

</div>)
})
}</>)


 const paneContent = (
<div className="pane">
<div className="pane__head">
     <div className = "pane__header">
      {content.title}
    </div>

      <div className="likes" >
        {content.liked ? 
      <FontAwesomeIcon icon={faThumbsUp} size="2x" color="#676768"/> :
      <FontAwesomeIcon icon={faThumbsUp} size="2x" color="#becee5" onClick={handleClick} />  } 

      {content.likes} 
      </div>
      <div>
        { content.bookmarked ? <FontAwesomeIcon icon={faBookmark }  size="2x" color="#676768"/> :
      <FontAwesomeIcon icon={faBookmark }  size="2x" color="#becee5" /> }
      </div>
    </div>

    <div >
      <img className="pane__image" src={image} alt="Image" />
    </div>  
    <div className="pane__text" dangerouslySetInnerHTML={{ __html: content.text}}/>
   
       
    <div className="pane__author">
    - Written by {content.author}
    </div>


<div className="comments__section">
<h4 className="comments__section__header">Discussion</h4>

<div className="comment">
  <div className="comment__left">
    <FontAwesomeIcon icon={faComment}  size="1x"/>
  </div>
  <div className="comment__right">
      {/*  <form> */}
      <form>
        <input  ref={mainInput} type="textbox" className="commentbox" {...register("update")} placeholder="Write comment.." onInput={handleComment}></input>
     {/*  <button className="postbutton" type="submit" onClick={postComment}>Post</button>*/}
     <input type="button" className="postbutton"  value="Post" id="btnsubmit" onClick={postComment}></input>
      </form>
      {/*  <form> */}
  </div> {/* comment right closing*/}
</div> {/* comment closing */}

{commentsSection}

</div> {/* comments section closing*/}
</div>
 )

 const catgContent = (
<div className="pane category__head">
     <div className = "pane__header category__header">
      {content.title}
    </div>
    <div className="pane__text category__text">
   {content.text}
 </div>
</div>
 )

 return (
   <>
   {content.type === "article" ? paneContent : catgContent}
   </>
 )
}

export default ReadingPane
