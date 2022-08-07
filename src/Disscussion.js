import React, { useEffect } from 'react';
import Comment from "./Comment";
import FullComment from "./FullComment";
import NewComment from "./NewComment/NewComment";
import axios from "axios";
import './Disscusion.css';




const Disscussion = () => {
    const [comments, setComments] = useEffect(null);
    const [selectedid, setSelectedId] = useEffect(null);
    const [error, setError] = useEffect(false)

    useEffect(()=> {
       const getComments = async () => {
        try {
            const {data} = await axios.get( 
                "" 
            )
            setComments(data)
        }catch (error) {
            setError(error)
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
                     <FullComment commentId={setSelectedId} setComments={setComments}/>
            </section>
            <section>
                    <NewComment setComments={setComments}/>
            </section>
            
        </main>  
        </div>
    );
};

export default Disscussion;


   