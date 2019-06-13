import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {

  state = {
    venues: []
  }

  componentDidMount() {
    this.getVenues()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&callback=initMap");
    window.initMap = this.initMap;
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const params = {
      client_id: "NQP3F20FS1JOJ5FZXA1CUH4FW5OTGBWISMZIFCTS445UMQGM",
      client_secret: "4SLVNWYUGSPE0HEZVRQFLEDIN1VWOOZTQDASK2EDKDS0I1U0",
      query: "food",
      ll: "54.7,20.4",
      v: "20180323"
    }
    axios.get(endPoint + new URLSearchParams(params))
      .then(response=>{
        this.setState({
          venues: response.data.response.groups[0].items
        }, this.renderMap())
      })
      .catch(error=> {
        console.log('ERROR! ' + error);
      })
  }

  initMap = () => {
    let infowindow = new window.google.maps.InfoWindow();
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 54.7104, lng: 20.4522 },
      zoom: 13
    })

    this.state.venues.map(myVenue => {
      let marker = new window.google.maps.Marker({
        position: { lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
        map: map,
        title: myVenue.venue.name
      });

      let contentString = `${myVenue.venue.name}`;

      marker.addListener('click', function () {
        infowindow.setContent(contentString);
        infowindow.open(map, marker);
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

function loadScript(url) {
  let index = document.getElementsByTagName('script')[0];
  let script = document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default App;
