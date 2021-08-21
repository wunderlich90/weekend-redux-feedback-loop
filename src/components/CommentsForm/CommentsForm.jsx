import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function CommentsForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const comments = useSelector(store => store.commentsReducer)

    function onClick() {
        history.push('/feelings')
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
                name="userComments"
            />
            <button className="nextPage" onClick={onClick}>Next</button>
            </div>
           
        </>

    )

}

export default CommentsForm;