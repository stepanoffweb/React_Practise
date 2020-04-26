import React, {useState, useEffect} from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import * as parkData from './data/skate-parks.json'

const App = () => {
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 45.4211,
        longitude: -75.6903,
        zoom: 10})
    const [selectedPark, setSelectedPark] = useState(null)
    useEffect(() => {
        const listener = (e) => {
            if (e.key === 'Escape') {
                setSelectedPark(null)
            }
        }
        window.addEventListener('keydown', listener)
        return () => {
            window.removeEventListener("keydown", listener)
        }
    }, [])

    return (
        <div>
            <ReactMapGL {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            mapStyle = {"mapbox://styles/ivanstapanoff/ck9hbyvvh4lff1in0f61mcu6y"}
            onViewportChange={viewport =>{
                // console.log(viewport)
                 setViewport(viewport)}}
              >
              {parkData.features.map(park => (
                  <Marker key={park.attributes.PARK_ID} latitude={park.geometry.y} longitude={park.geometry.x} >

                  <button onClick={(e) => {
                      e.preventDefault()
                      setSelectedPark(park)
                  }} className="btn"><img className="img" src="./skatepark.svg" /></button>
                  </Marker>
              ))}
              {selectedPark ? (<Popup latitude={selectedPark.geometry.y} longitude={selectedPark.geometry.x} onClose={() =>
            setSelectedPark(null)} >
                    <h1>{selectedPark.attributes.NAME} </h1>
                    <p>{selectedPark.attributes.DESCRIPTION} </p>
                </Popup>) : null}
              </ReactMapGL>

        </div>
    )
}

export default App
