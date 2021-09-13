# Getting Started

This project is a weather application made with react. It uses [open weather api](https://openweathermap.org/) to display weather information.

## Steps To Install

Create a **.env.local** file at the root folder and add your query strings

    REACT_APP_WEATHER_API = **your weather api key from openweatherapi.com**
    REACT_APP_GOOGLE_MAP_API = **your google places api key for search**

After that in the project directory, you can run:

### `yarn`

This will install the required dependencies

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build Instruction

Open package.json file and update the scripts

//package.json
...
"scripts": {
  "start": "react-scripts start",
  -"build": "react-scripts build && rm -rf exports/build && mv build exports",
  -"push": "yarn build && git add . && git commit -m 'version 1' && git push -u origin master && cd exports && git add . && git commit -m 'version 1' && git push -u origin master && cd .."
},

"scripts": {
  "start": "react-scripts start", + "build": "react-scripts build"
},
...

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Architecture

This project uses react to build the front end logic of the app.

- This project used [Open Weather API](https://openweathermap.org/) for latest weather data.

- [Typescript](https://www.typescriptlang.org/) has been used to generate appropriate types for the components and business logic layer.

- Only [css](https://www.w3.org/Style/CSS/Overview.en.html) is used for styling to make the app logic simple and intact.

- For transitions [React Transition Group](https://reactcommunity.org/react-transition-group/) has been used to give a nice user experience.

- For state management [Redux](https://redux.js.org/) is used along with local react state management --useState-- hook.

## Functionality

- This project is a responsive web app.

- This project can search for weather data for any location the user wants to search either by.

  - City Name
  - City Zipcode

- Shows the 7 Day forecast for the current location selected.

- Implements a temperature converter from Fahrenheit to Celsius and vice versa for the current search.

- Uses the OpenWeatherAPI to show a weather map for the current location for the Clouds, Precipitation and Temperature.

- Displays following information about the weather condition.
  - Location
  - Current weather description (i.e. sunny, cloudy, etc)
  - Current temperature
  - High/low temperature
  - Wind Speed
  - Humidity
  - Pressure
  - Sunrise/Sunset Time
