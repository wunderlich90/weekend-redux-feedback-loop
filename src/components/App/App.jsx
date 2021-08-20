import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Components
import CommentsForm from '../CommentsForm/CommentsForm';
import FeelingsForm from '../FeelingsForm/FeelingsForm';
import SupportForms from '../SupportForms/SupportForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import { NotificationResponseMessage } from 'pg-protocol/dist/messages';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = () => {
    axios({
      method: 'GET',
      url: '/api/feedback'
    }).then((response) => {
      dispatch({
        type: 'SET_FEEDBACK_LIST',
        payload: response.data
      })
    }).catch(error => {
      console.error('GET /api/feedback failed', error);
    })
  }

  return (
    <div className='App'>
      <Router>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>

  
      <div>
        <div className='navigation'>
          <Route path='/feelings' exact>
            <FeelingsForm/>
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
