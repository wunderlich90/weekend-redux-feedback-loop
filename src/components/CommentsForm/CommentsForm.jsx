import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function CommentsForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [commentInput, setCommentInput] = useState('');

    function onClick() {
        dispatch({
            type: 'SET_COMMENTS_DATA',
            payload: commentInput
        })
        history.push('/review')
    }


    return(
        <>
         
            <div>
                <h1>
                    Any comments you want to leave?
                </h1>
            </div>
            <div>
                <h4>Comments?</h4>
            </div>
            <div>
            <input
                type="text"
                placeholder="Comments?"
                onChange={(evt) => setCommentInput(evt.target.value)}
                value={commentInput}
            />
            <button className="nextPage" onClick={onClick}>Next</button>
            </div>
           
        </>

    )

}

export default CommentsForm;