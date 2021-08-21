TODO:

[x] Setup
    [x] Create DB and tables using `data.sql`
    [x] Start the server
    [x] npm install
    [x] npm run server
    [x] npm client

[ ] Base Mode
    [x] Add new Feedback
        [x] 4 views for the form parts
            [x] Feeling
            [x] Understanding
            [x] Support
            [x] Comments
            [x] Each part of the form should have its own route
            [x] Clicking next shoud move the user to the next step in the process
    [x] Input Validation
        [x] each step should only allow the user to advance if there was an input provided
        [x] tell the user in some way that an input must be provided
        [x] Comments section does not need to be validated (empty value is ok)
    [ ] Review component
        [x] Allows user to review their feedback
        [x] does not allow user to change their inout
        [ ] doees not allow the user to go back
    [ ] Submit the feedback
        [x] `Review` step needs a submit button
            [ ] saves the submission in the DB
        [ ] user should see a submission success page
        [ ] success page should have a button to start a new survey
            [ ] should reset all data 
            [ ] should take user back to page one
