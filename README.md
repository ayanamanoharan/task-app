# task-app

This is simple taskmanager application.in this prioect add task,edit task,viewtodaytask ,view weektask.
Frontend : HTML
           CSS
           JAVASCRIPT
           REACT
           
Backend  : Nodejs
           (Express)

Database :MySQL           
# how to run 
      clone this repository to your pc
      open cmd in root folder

 To run frontend:

<!--     client-frontend -->
    
          $ cd client
          $  npm i
          $ npm start
          
 how to run backend:
<!--      server-backend -->

   connect MySQL with xampp opened   apache and MySQL start then run,
    
      $ cd server
      $ npm i
      $ npm start
   read to run
   Api requests:-
          get -localhost:5000/api-tasks -To fetch tasks,
          post -localhost:5000/api-tasks - To create tasks, 
          patch -localhost:5000/api-tasks/id -To updated tasks with id in the parameter,
          delete -localhost:5000/api-tasks/id -To delete tasks with id in the parameter,
   
