import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function FeelingsForm() {
    const dispatch = useDispatch();
    const history = useHistory();

  
    const [feelingInput, setFeelingInput] = useState('');

    function onClick() {
        dispatch({
            type: 'SET_FEELING_DATA',
            payload: feelingInput
        })

        if(!feelingInput) {
            alert('Please enter a feelings value 😁')
        }
        else {
            history.push('/understanding')
        }
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
                onChange={(evt) => setFeelingInput(evt.target.value)}
                value={feelingInput}
            />
            <button className="nextPage" onClick={onClick}>Next</button>
            </div>
           
        </>

    )

}

export default FeelingsForm;