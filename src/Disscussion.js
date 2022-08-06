import React, { useEffect } from 'react';
import Comment from "./Comment";
import FullComment from "./FullComment";
import NewComment from "./NewComment/NewComment";
import axios from "axios";
import './Disscusion.css';




const Disscussion = () => {
    const [comments, setComment] = useEffect(null);
    const [selectedid, setSelectedId] = useEffect(null);

    useEffect(()=> {
       const getComments = async () => {
        try {
            const {data} = await axios.get(
                "" 
            )
            setComment(data)
        }catch (error) {

        }
       }

    },[]);


    const selectCommentHandler = (id) => {
        setSelectedId(id)
        console.log(id)
    }




        return (
        <div>
          <main>
            <section>
                  {comments   ? comments.map((c)=> 
                <Comment key={c.id} name={c.name} email={c.email} body={c.body} onClick={()=> selectCommentHandler(c.id)} /> )  
                   : <div> Loadfing page</div>}
            </section>
            <section>
                     <FullComment commentId={setSelectedId}/>
            </section>
            <section>
                    <NewComment/>
            </section>
            
        </main>  
        </div>
    );
};

export default Disscussion;


   