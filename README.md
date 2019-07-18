# Geocoding App 

Single page application showing a map and allowing to see two chosen locations, marked on the map with markers. The map shows Germany by default. Zoom out to see other locations. Look for cities, neighborhoods, sightseeing attractions etc. Page will display the type of the object and its geographical coordinates. 

<<<<<<< HEAD
## [Frontend](https://github.com/RadekKosiada/geo-app-frontend)
=======
## Frontend 
>>>>>>> 185b469c3d09fa4b1ded661389256bdee56c962a

### Built with
* React.js
* React-Leaflet
* Axios

### UI Design 
Relates to the mockup, but some UX friendly solutions have been added to direct user's behavior.
Once the search query is submitted, input and Submit button disappears. The place of the input is taken by the name of the location. 
When the coordinates are displayed two new buttons are added to the UI: Edit and Delete. They disappear after deleting the location and the Submit button is back.
User cannot and will not do both Submit or Edit/Delete and UI doesn't need to be filled with them neither user needs to be distracted by necessary elements. 
After submitting a new query previous set of data is removed from the page, 'waiting for data' is displayed until new information is received and shown. 
Additional hover effects on buttons; 

### Further steps:
* Adding unit and integration tests;
* Refactoring of App.js, mainly to get rid of some repetitions in if blocks, that check which locations/input should be updated;
 
<<<<<<< HEAD
## [Backend](https://github.com/RadekKosiada/geo-app-backend)

=======
## Backend
>>>>>>> 185b469c3d09fa4b1ded661389256bdee56c962a

### Built with:
* Node.js;
* Express.js;
* Axios;
* Body Parser;

* Coordinates and geocoding provided by [opencagedata.com API](opencagedata.com) 