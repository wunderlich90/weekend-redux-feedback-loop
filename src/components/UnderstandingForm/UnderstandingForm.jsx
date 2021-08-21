import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function UnderstandingForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const understanding = useSelector(store => store.understandingReducer)

    function onClick() {
        history.push('/support')
    }


    return(
        <>
         
            <div>
                <h1>
                    How well are you understanding the content?
                </h1>
            </div>
            <div>
                <h4>Understanding?</h4>
            </div>
            <div>
            <input
                type="number"
                placeholder="Understanding?"
                name="userUnderstanding"
            />
            <button className="nextPage" onClick={onClick}>Next</button>
            </div>
           
        </>

    )

}

export default UnderstandingForm;