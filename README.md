steps to run the application

1 - clone it
2 - npm install
3 - npm start 


description :-

libraries used:- 
    1) Angular Material
    2) AGM

flow :-

    1) app module bootstraps
    2) initializes the routes
    3) Event Module is lazily loaded
    4) Event Module has child routes - a) event-select component and b) events-list component
    5) In event-select component a event can be made and stored into the local storage and side by side stored into a subject (rxjs) to help in caching and reactively fetching data from anywhere without fetching from local storage again and again on component loading.
    6) In events-list component all events are fetched from the local storage and from the subject if present at that time and get rendered on the page.