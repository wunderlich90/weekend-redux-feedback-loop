import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function FeelingsForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const feeling = useSelector(store => store.feelingReducer)

    function onClick() {
        history.push('/understanding')
    }


    return(
        <>
         
            <div>
                <h1>
                    How are you feeling today?
                </h1>
            </div>
            <div>
                <h4>Feeling?</h4>
            </div>
            <div>
            <input
                type="number"
                placeholder="Feeling?"
                name="userFeeling"
            />
            <button className="nextPage" onClick={onClick}>Next</button>
            </div>
           
        </>

    )

}

export default FeelingsForm;