TODO:

[x] Setup
    [x] Create DB and tables using `data.sql`
    [x] Start the server
    [x] npm install
    [x] npm run server
    [x] npm client

[ ] Base Mode
    [ ] Add new Feedback
        [ ] 4 views for the form parts
            [ ] Feeling
            [ ] Understanding
            [ ] Support
            [ ] Comments
            [ ] Each part of the form should have its own route
            [ ] Clicking next shoud move the user to the next step in the process
    [ ] Input Validation
        [ ] each step should only alloow the user to advance if there was an input provided
        [ ] tell the user in some way that an input must be provided
        [ ] Comments section does not need to be validated (empty value is ok)
    [ ] Review component
        [ ] Allows user to review their feedback
        [ ] does not allow user to change their inout
        [ ] doees not allow the user to go back
    [ ] Submit the feedback
        [ ] `Review` step needs a submit button
            [ ] saves the submission in the DB
        [ ] user should see a submission success page
        [ ] success page should have a button to start a new survey
            [ ] should reset all data 
            [ ] should take user back to page one
