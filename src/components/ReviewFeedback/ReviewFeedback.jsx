import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ReviewFeedback() {

    const history = useHistory();

    const feelings = useSelector(store => store.feelingReducer);
    const understanding = useSelector(store => store.understandingReducer);
    const support = useSelector(store => store.supportReducer);
    const comments = useSelector(store => store.commentsReducer);

    function onClick() {
        history.push('/feelings')
    }




    return (
        <>
            <ul>
                <li>Feelings: {feelings}</li>
                <li>Understanding: {understanding}</li>
                <li>Support: {support}</li>
                <li>Comments: {comments}</li>
            </ul>

            <button className="submit" onClick={onClick}>Submit</button>
        </>
    )

    

        
}

export default ReviewFeedback;