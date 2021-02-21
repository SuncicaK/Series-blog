import { useState } from "react";
import {useHistory} from 'react-router-dom';

const CreateBlog = () => {
    const[title, setTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('');
    const[series_review, setSeries_review] = useState('')
    const[isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author, series_review};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() =>{
            console.log("new blog added");
            setIsPending(false);
            history.push('/');
        })
        
    }

    return ( 
        <div className="create">
            <h2>Add your review! </h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required
                    value = {title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Your review:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}>
                </textarea>
                <label>Autor of review:</label>
                <input 
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}/>
                    <label>How many stars would you give for the series?</label>
                <select
                    value={series_review}
                    onChange={(e) => setSeries_review(e.target.value)}>
                    <option value="*">*</option>
                    <option value="**">**</option>
                    <option value="***">***</option>
                    <option value="****">****</option>
                    <option value="*****">*****</option>
                    
                </select>

                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog..</button>}
            </form> 
        </div>
     );
}
 
export default CreateBlog;