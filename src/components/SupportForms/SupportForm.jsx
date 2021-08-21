import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';


function UnderstandingForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    //const supported = useSelector(store => store.supportReducer)
    const [supportInput, setSupportInput] = useState('');


    function onClick() {
        dispatch({
            type: 'SET_SUPPORT_DATA',
            payload: supportInput
        })
        if(!supportInput) {
            alert('Please enter a support value 💪')
        }
        else {
            history.push('/comments')
        }
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
                onChange={(evt) => setSupportInput(evt.target.value)}
                value={supportInput}
            />
            <button className="nextPage" onClick={onClick}>Next</button>
            </div>
           
        </>

    )

}

export default UnderstandingForm;