import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ReviewFeedback({ addFeedbackItem }) {

    const history = useHistory();

    const feelings = useSelector(store => store.feelingReducer);
    const understanding = useSelector(store => store.understandingReducer);
    const support = useSelector(store => store.supportReducer);
    const comments = useSelector(store => store.commentsReducer);


    const newItem = {
        feelings: feelings,
        understanding: understanding,
        support: support,
        comments: comments,
    }

    function onClick() {
        addFeedbackItem(newItem);
        history.push('/success');
    }
  




    return (
        <>
        <head>
            <script type="text/javascript">
                function disableBack() { window.history.forward() }
                setTimeout("disableBack()", 0);
                window.onunload = function () { null };
            </script>
        </head>
        <div>
            <ul>
                <li>Feelings: {feelings}</li>
                <li>Understanding: {understanding}</li>
                <li>Support: {support}</li>
                <li>Comments: {comments}</li>
            </ul>

            <button className="submit" onClick={onClick}>Submit</button>
        </div>
        </>
            
        
    )

    

        
}

export default ReviewFeedback;