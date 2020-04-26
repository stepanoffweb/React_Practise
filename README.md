# React_Practise
Training tasks on React</br>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In every app directory (in repository's separate  branch), you can run:

### `npm instal`
To install all needed dependences

### `npm start`
Runs the app in the development mode.

### `npm run build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

# Interactive map with markers from JSON data
* сервисы в основе проекта
  * https://open.ottawa.ca/datasets/skateboard-parks/geoservice?geometry=-77.077%2C45.154%2C-74.466%2C45.492
  * https://www.gps-coordinates.net/
  * https://www.npmjs.com/package/react-map-gl
	WebGL-powered, fully open source library for making modern web maps. You may load map data from Mapbox's own service, which is 
free until a certain level of traffic is exceeded; or you can create and host your own map data using one of the many open source 
tools.
	*There are several ways to provide a token to your app, as showcased in some of the example folders:
		- Provide a mapboxApiAccessToken prop to the map component
		- Set the MapboxAccessToken environment variable (or set REACT_APP_MAPBOX_ACCESS_TOKEN if you are using Create React App)
		- Provide it in the URL, e.g ?access_token=TOKEN
		- Provide mapboxApiUrl prop to the map component to override the default mapbox API URL
But we would recommend using something like dotenv and put your key in an untracked .env file, that will then expose it as a 
process.env variable, with much less leaking risks.
  * Создание токенов для пользования картами
 https://account.mapbox.com/
