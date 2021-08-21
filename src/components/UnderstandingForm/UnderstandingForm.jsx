import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


function UnderstandingForm() {
    const dispatch = useDispatch();
    const history = useHistory()

  const [understandingInput, setUnderstandingInput] = useState('');

    function onClick() {
        dispatch({
            type: 'SET_UNDERSTANDING_DATA',
            payload: understandingInput
        })
        if(!understandingInput) {
            alert('Please enter a understanding value 🤔')
        }
        else {
            history.push('/support')
        }
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
                onChange={(evt) => setUnderstandingInput(evt.target.value)}
                value={understandingInput}
                
            />
            <button className="nextPage" onClick={onClick}>Next</button>
            </div>
           
        </>

    )

}

export default UnderstandingForm;