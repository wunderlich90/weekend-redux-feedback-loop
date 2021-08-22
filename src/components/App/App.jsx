import React from 'react';
import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// Components
import CommentsForm from '../CommentsForm/CommentsForm';
import FeelingsForm from '../FeelingsForm/FeelingsForm';
import SupportForm from '../SupportForms/SupportForm';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import SuccessPage from '../SuccessPage/SuccessPage';
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

  const addFeedbackItem = (newItem) => {
    axios
      .post('/api/feedback', newItem)
      .then((response) => {
        getFeedback();
      })
      .catch((error) => {
        alert(`Couldn't add feedback item`);
        console.error('Error adding to feedback', error);
      });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
  
  

      <Router>
        <div>
          <div className='navigation'>
            <Route path='/feelings' exact>
              <FeelingsForm/>
            </Route>
            <Route path='/understanding' exact>
              <UnderstandingForm/>
            </Route>
            <Route path='/support' exact>
              <SupportForm/>
            </Route>
            <Route path='/comments' exact>
              <CommentsForm/>
            </Route>
            <Route path='/review'>
              <ReviewFeedback
                addFeedbackItem={addFeedbackItem}/>
            </Route>
            <Route path='/success'>
              <SuccessPage/>
            </Route>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
