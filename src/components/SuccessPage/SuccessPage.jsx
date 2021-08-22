import { useHistory } from 'react-router-dom';

function SuccessPage(feelings, understanding, support, comments) {
    const history = useHistory();

    function onClick(){
        feelings = '';
        understanding = '';
        support = '';
        comments = '';

        console.log(feelings, understanding, support, comments);

        history.push('/feelings');
    }

    

    return (
        <>
            <div id="success">
                Submission successful!
            </div>
            <button onClick={onClick}>Add More Feedback</button>
        </>
    )
}

export default SuccessPage;