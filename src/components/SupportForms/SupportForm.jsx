import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function UnderstandingForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const support = useSelector(store => store.supportReducer)

    function onClick() {
        history.push('/comments')
    }


    return(
        <>
         
            <div>
                <h1>
                    How well are you being supported?
                </h1>
            </div>
            <div>
                <h4>Support?</h4>
            </div>
            <div>
            <input
                type="number"
                placeholder="Support?"
                name="userSuppoirt"
            />
            <button className="nextPage" onClick={onClick}>Next</button>
            </div>
           
        </>

    )

}

export default UnderstandingForm;