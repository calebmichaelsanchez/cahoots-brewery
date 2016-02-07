import React, { Component } from "react";
import ReactDOM from "react-dom";
import helpers from "../../utils/helpers";

class BeerLocatorItem extends Component {
  constructor(props) {
    super(props);
    this.initMap = this.initMap.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    let { title, items } = nextProps;
    this.initMap(items, title);
  }
  initMap(markerArray, title) {
    let { extend } = helpers;
    let map;
    let mapContainer = ReactDOM.findDOMNode(this.refs.map);
    let bounds = new google.maps.LatLngBounds();
    let image = {
      url: "/assets/images/map/pin.png",
      size: new google.maps.Size(48, 80),
      scaledSize: new google.maps.Size(24, 40),
    }
    let mapOptions = {
      center: {lat: 41.8333925, lng: -88.0123393},
      zoom: 8,
      mapTypeId: 'roadmap',
      scrollwheel: false,
      styles: [
        {
          "stylers": [
            { "saturation": -100 },
            { "visibility": "simplified" },
            { "lightness": -50 },
            { "weight": 0.3 },
            { "gamma": .6 }
          ]
        }
      ]
    }
    let markers = markerArray;
    let infoWindow = new google.maps.InfoWindow(), marker, i;
    map = new google.maps.Map(mapContainer, mapOptions);

    for(i = 0; i < markers.length; i++) {
      var position = new google.maps.LatLng(markers[i]["location"].mapLat, markers[i]["location"].mapLng);
      bounds.extend(position);
      marker = new google.maps.Marker({
        position: position,
        map: map,
        title: markers[i]["title"],
        animation: google.maps.Animation.DROP,
        icon: image
      });

      let html = '<div class="info-wrapper"><div class="info">';
      html += '<h5 class="info-title">' + markers[i]["location"]["addressTitle"] + '</h5>';
      html += '<p class="info-address">' + markers[i]["location"]["addressLine1"] + '</p>';
      html += '<p class="info-address">' + markers[i]["location"]["addressLine2"] + '</p></div>';
      html += '<div class="info"><h5 class="info-title">' + title + '</h5>';
      html += '</div></div>'

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function () {
          infoWindow.setContent(html);
          infoWindow.open(map, marker);
        }
      })(marker, i));

      map.fitBounds(bounds);
    }
  }
  render() {
    return (
      <div ref="map" className="map"></div>
    );
  }
}

export default BeerLocatorItem;
