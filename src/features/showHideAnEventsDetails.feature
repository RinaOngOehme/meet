Feature: Show/Hide an Event’s Details

Scenario: An event element is collapsed by default.
Given user has opened the app
When the user has not clicked on any event element
Then the user should see a list of all upcoming events unexpanded

Scenario: User can expand an event to see its details.
Given user has opened the app and seen a list of all upcoming events unexpanded
When the user clicks onto the ShowMore button
Then the user should be able to see more information of the event

Scenario: User can collapse an event to hide its details.
Given user has already clicked on an event element and has expanded it to see more details
When the user clicks onto the ShowLess button
Then the user should be able to see less information of the event
