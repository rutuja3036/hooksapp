import React, {useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)

    /**
     * ///useEffect is about the lifecycle methods of a class component --
@@ -11,27 +12,33 @@ function DataFetching() {
    useEffect(    
        //the arrow function below will get executed after every render
        () => {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then( res => {
                console.log(res)
                 setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        },
        [id] //run this useEffect hook only once ie after componentDidMount
    )



    return (
        <div>
         <input 
            type = "text"
            value = {id}
            onChange = { e => setId(e.target.value)}
            />
            <div>{post.title}</div>
           {/* <ul>{
                posts.map(
                    post => <li key = {post.id}>{post.title}</li>
                )
                  }</ul>*/}
        </div>
        )
                }

    export default DataFetching