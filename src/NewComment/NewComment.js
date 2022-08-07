import React from 'react';
import { useState } from 'react';
import axios from "axios";  
const NewComment = ({OnAddPost}) => {

    const [comment,setComment] = useState({
        name: "",
        email:"",
        body:"",
    });
   //     const nameHandler = (e) => {
       //     setComment = {...comment, name : e.target.value };}
      //  const emailHandler = (e) => {
        //     setComment = {...comment, email : e.target.value };}
//        const bodyHandler = (e) => {
       //  setComment = {...comment, body : e.target.value };}

       const changeHandler = () => {
        setComment = {...comment, [e.target.name] : e.target.value };}
       
        
       const postCommentHandler =  (comment) => {
         axios
          .post("", {
            ...comment,
            posyId:10,
        })
        .then((res) =>  axios.get(""))
        .then((res) => setComment(res.data))
        .catch()
    }



        /*
         const postCommentHandler = async (comment) => {
         try{ 
            axios.post("",{

            });
        const {data} = await axios.get("")
        setComments(data)
        } catch (error) {

        }
    */

       
    return (
        <div>
            <div>
                <label>name</label>
                <h2>Add new Comment</h2>
                <input type="text"  onClick={changeHandler} name="name"></input>
            </div>
            <div>
                <label>email</label>
                <input type="email" onClick={changeHandler} name="email"></input>
            </div>
            <div>
                <label>body</label>
                <input type="type-text"  onClick={changeHandler} name="body"/>
                <textarea />
            </div>
            <button onClick={postCommentHandler}>add new Comment</button>
        </div>
    );
    
} ;

export default NewComment;