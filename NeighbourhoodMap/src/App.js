import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {

  state = {
    venues: [],
  }

  componentDidMount() {
    this.getVenues();
  }

  getVenues = () => {
    // crucial requirements: question mark at the end of the endpoint AND the version of API!!! is not mentioned in the documentation
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const params = {
      client_id: "NQP3F20FS1JOJ5FZXA1CUH4FW5OTGBWISMZIFCTS445UMQGM",
      client_secret: "4SLVNWYUGSPE0HEZVRQFLEDIN1VWOOZTQDASK2EDKDS0I1U0",
      query: "food",
      ll: "54.7,20.4",
      v: "20180323",
    }
// learn more about axios.get arguments and URLSearchParams- what does this concatenation mean?
    axios.get(endPoint + new URLSearchParams(params))
      .then(response=>{
        this.setState({
          venues: response.data.response.groups[0].items
          // below is weird for me because changed state must invoke the rerendering automatically
        }, this.renderMap());
      })
      .catch(error=> {
        console.log('ERROR! ' + error);
      })
  }

  renderMap = () => {
    this.loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&callback=initMap");
    // converting callback initMap into a window object so that script googlemaps can render it
    window.initMap = this.initMap;
  }

  loadScript = (url) => {
    let index = document.getElementsByTagName('script')[0];
    let script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
  }

  initMap = () => {
    let infowindow = new window.google.maps.InfoWindow();
    let Mymap = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 54.7104, lng: 20.4522 },
      zoom: 13
    })

    this.state.venues.map(myVenue => {
      let marker = new window.google.maps.Marker({
        position: { lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
        map: Mymap,
        title: myVenue.venue.name
      });

     let contentString = `${myVenue.venue.name}`;

      marker.addListener('click', function () {
        infowindow.setContent(contentString);
        infowindow.open(Mymap, marker);
      });
    })
  }

  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    );
  }
}

export default App;
