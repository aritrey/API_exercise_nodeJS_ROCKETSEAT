# Nodejs - Exercise

RocketSeat BootCamp - NodeJS Exercise

## Features

- Runs an fully working API using Express
- returns response for following routes:<br /><br />
    - [**GET**  *'/repositories'*]: shows a list of all repositories<br />
    returns json: ```Array<{"id": uuid, title: string, url: string, techs: Array<string>, likes: number }>```<br /><br />
    - [**POST**  *'/repositories'*]: creates a new repository; <br />
        requires body: ```{title: string, url: string, techs: Array<string> }```<br />
        returns json: ```{"id": uuid, title: string, url: string, techs: Array<string>, likes: number }``` *(likes is initialized with: 0)*<br /><br />
    - [**PUT**  *'/repositories/:id'*]: updates the repository with the mentioned id <br />
     requires body: ```{title: string, url: string, techs: Array<string> }```<br />
       returns json: ```{"id": uuid, title: string, url: string, techs: Array<string>, likes: number }```<br /><br />
    - [**PUT**  *'/repositories/:id'*]: deletes the repository with the mentioned id<br /><br />
    - [**POST**  *'/repositories/:id/like'*]: adds one more like to the repository with the mentioned id<br />
      returns json: ```{"id": uuid, title: string, url: string, techs: Array<string>, likes: number }```<br /><br />
- Returns Error for invalid requests
- a fitting frontend can be found here: [mobile](https://github.com/aritrey/react-native_exercise "mobile"), [desktop](https://github.com/aritrey/reactjs_exercise "desktop")
