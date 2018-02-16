import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import L from 'leaflet';
import { RestProvider } from '../../providers/rest/rest';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

////////        Display Data in view        ////////

// @Pipe({ name: 'safeHtml' })   
  
export class HomePage {

  @ViewChild('map') mapContainer: ElementRef;
////    Add variable for holds data

  map: any;
  restaurant: any;
  errorMessage: string;
  bgImage: any;
  
  
  constructor(public navCtrl: NavController, public rest: RestProvider, private sanitizer:DomSanitizer) {

  }

  
  ionViewDidEnter() {
    this.loadmap();
  }

  ionViewDidLoad() {
    this.getRestaurants();
  }


////     Function to initialize map   -   we using leaflet with mapbox
  
  loadmap() {
    if (this.map) {
      this.map.remove();
    }


////     Create map object and add base map tiles from Leaflet and attribution info to 'map' div

    this.map = L.map("map", { zoomControl:false });
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2Frb3UiLCJhIjoiY2pkMXNjamlxMGNvazM0cXF5d2FnazM1MiJ9.7CivBv0jVrL9YJem_YZ1AQ', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 10
    }).on('locationfound', (e) => {
      let marker: any = L.marker([e.latitude, e.longitude]).bindPopup("Vous êtes ici").openPopup(); 
      this.map.addLayer(marker);
    }).on('locationerror', (err) => {
      alert(err.message);

      })
     
  }


////     Create a function for calling the restaurants from the provider
  
  getRestaurants() {
   
    this.rest.getRestaurants()
      .subscribe(
        restaurant => {
          this.restaurant = restaurant;
          this.formatData();
        },
      error => this.errorMessage = <any>error);
  }


////    Function to display marker restaurant on the map

  formatData() {

  ///  Create custom icon
    
  var customIcon = L.icon({
    iconUrl: '../../assets/imgs/pin.png',
    // iconSize: [38, 95], // size of the icon
    popupAnchor: [0,-15]
    });
  
    
  ///   Diplay marker on map
    
    this.restaurant.forEach(element => {
      L.marker([element.lat, element.lon],{icon: customIcon}).addTo(this.map).bindPopup(element.name);
});

  }
  
}



