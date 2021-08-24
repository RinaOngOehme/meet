Feature: SPECIFY NUMBER OF EVENTS

Scenario: When user has not specified a number, 32 is the default number
Given user has not specified how many events the user wants to see
When the user opens the app with the number of events showing
Then the user should be able to see at least 32 number of events

Scenario: User can change the number of events they want to see
Given user opened the app and should be able to see at least 32 number of events
When the user changes the number of events showing between 1 and 32
Then the user should be able to see the changed number of events showing in our case 1
