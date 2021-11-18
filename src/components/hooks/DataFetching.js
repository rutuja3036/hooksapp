import React, {useState,useEffect} from 'react'
import axios from 'axios'
function DataFetching() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idFromButtonClick,setIdFromButtonClick] = useState(1)
/**
     * ///useEffect is about the lifecycle methods of a class component --
     *  if you want to use lifecycle methods of a class component in a stateless functional component --then we use useEffect hook
     */
 useEffect(    
    //the arrow function below will get executed after every render
    () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then( res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        },
        [idFromButtonClick] //run this useEffect hook only once ie after componentDidMount
    )


        const handleClick = () => {
            setIdFromButtonClick(id)
        }


        return (
            <div>
            <input 
                type = "text"
                value = {id}
                onChange = { e => setId(e.target.value)}
                />
                <button type = "button" onClick = {handleClick}> fetch post</button>
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