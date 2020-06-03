# Interactive map with markers from JSON data
* сервисы в основе проекта
  * https://open.ottawa.ca/datasets/skateboard-parks/geoservice?geometry=-77.077%2C45.154%2C-74.466%2C45.492
  * https://www.gps-coordinates.net/  
  * https://www.npmjs.com/package/react-map-gl
	--*WebGL-powered, fully open source library for making modern web maps. You may load map data from Mapbox's own service, which is 
free until a certain level of traffic is exceeded; or you can create and host your own map data using one of the many open source 
tools.*
  * Создание токенов для пользования картами  https://account.mapbox.com/
</br>
* **There are several ways to provide a token to your app, as showcased in some of the example folders:**
	* Provide a mapboxApiAccessToken prop to the map component
	* Set the MapboxAccessToken environment variable (or set REACT_APP_MAPBOX_ACCESS_TOKEN if you are using Create React App)
	* Provide it in the URL, e.g ?access_token=TOKEN	
	* Provide mapboxApiUrl prop to the map component to override the default mapbox API URL
But we would recommend using something like dotenv and put your key in an untracked .env file, that will then expose it as a 
process.env variable, with much less leaking risks.
 
## How does it work:
  - clone/download the repo branch </br>
  - go into /map_gl
  - `npm install`</br>
  - `npm start`</br>
