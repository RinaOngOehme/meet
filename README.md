### Meet App ###

#### Project Objectives: ####
To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

#### Project Brief Features ####
#### FEATURE: SHOW/HIDE AN EVENT'S DETAILS #####
##### Scenario 1: An event element is collapsed by default ######
-	As a user, I should be able first see an event element unexpanded so that I can expand on it if I would like to see more information about an event.

-	Given user hasn’t clicked on any event element
When the user opens the app
Then the user should see a list of all upcoming events unexpanded

#### Scenario 2: User can expand an event to see its details ######
-	As a user, I should be able to show event details so that I can see more information about an event.
-	Given user hasn’t clicked on any event element
When the user opens the app
Then the user should be able to expand on an event to see more information

##### Scenario 3: User can collapse an event to hide its details ######
-	As a user, I should be able to hide event details so that I can see less information about an event.

-	Given user has already clicked on an event element and has expanded it to see more details
When the user opens the app
Then the user should be able to collapse on an event to hide the information

#### FEATURE: SPECIFY NUMBER OF EVENTS #####
##### Scenario 1: When user hasn’t specified a number, 32 is the default number ######
-	As a user, I should be able to view 32 number of events in the app so that I can see at least 32 in the events list at once without specifying how many I want to see. 
-	Given user has not specified how many events the user wants to see
When the user opens the app with the number of events showing
Then the user should be able to see at least 32 number of events

##### Scenario 2: User can change the number of events they want to see ######
-	As a user, I should be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once. 
-	Given user has not specified how many events the user wants to see
When the user opens the app with the number of events showing
Then the user should be able to change the number of events the user wants to see

#### FEATURE: USE THE APP WHEN OFFLINE #####
##### Scenario 1: Show cached data when there’s no internet connection ######
-	As a user, I should be able to use the app when offline so that I can see the events I viewed the last time I was online. 

-	Given user has no internet connection 
When the user opens the app with the events showing
Then the user should be able to see the last viewed events when the user is offline

##### Scenario 2: Show error when user changes the settings (city, time range) ######
-	As a user, I should be able to see an error when I try to change settings like the city and time range so that I know that I cannot make changes when I am offline. 

-	Given user has no internet connection 
When the user tries to change settings like the city and time range
Then the user should see an error

#### FEATURE: DATA VISUALIZATION #####
##### Scenario 1: Show a chart with the number of upcoming events in each city ######
-	As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city

-	Given user wants to see the number of upcoming events in a chart 
When the user filters by city
Then the user should see a chart with the number of upcoming events in each city


#### Dependencies: ####
- "@testing-library/jest-dom": "^5.14.1",
- "@testing-library/react": "^11.2.7",
- "@testing-library/user-event": "^12.8.3",
- "atatus-spa": "^4.3.2",
- "axios": "^0.21.1",
- "googleapis": "^59.0.0",
- "nprogress": "^0.2.0",
- "react": "^17.0.2",
- "react-dom": "^17.0.2",
- "react-scripts": "4.0.3",
- "recharts": "^2.1.3",
- "web-vitals": "^0.2.4",
- "workbox-background-sync": "^5.1.4",
- "workbox-broadcast-update": "^5.1.4",
- "workbox-cacheable-response": "^5.1.4",
- "workbox-core": "^5.1.4",
- "workbox-expiration": "^5.1.4",
- "workbox-google-analytics": "^5.1.4",
- "workbox-navigation-preload": "^5.1.4",
- "workbox-precaching": "^5.1.4",
- "workbox-range-requests": "^5.1.4",
- "workbox-routing": "^5.1.4",
- "workbox-strategies": "^5.1.4",
- "workbox-streams": "^5.1.4"


#### Dev-Dependencies: ####
- "@wojtekmaj/enzyme-adapter-react-17": "^0.6.3",
- "enzyme": "^3.11.0",
- "gh-pages": "^3.2.3",
- "jest-cucumber": "^3.0.1",
- "puppeteer": "^10.2.0"

###### Install Dependencies ######
- npm install

###### Run the App ######
- npm run start

###### Deploy the App ######
- npm run deploy

##### Screenshot of Example Features #####
###### Chart ######
![chart png](public/meet_app_chart.png)
###### Events ######
![events png](public/meet_app_events.png)

#### Author: ####
:camel: Rina Ong-Oehme

#### Acknowledgements: ####
Treasure Kabareebe

