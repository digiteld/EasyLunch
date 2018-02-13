import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import L from 'leaflet';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


////////        Display Data in view        ////////

  
export class HomePage {

  @ViewChild('map') mapContainer: ElementRef;

////    Add variable for holds data

  map: any;
  restaurant: any;
  errorMessage: string;

  constructor(public navCtrl: NavController, public rest: RestProvider) {

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

    this.map = new L.map("map");
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2Frb3UiLCJhIjoiY2pkMXNjamlxMGNvazM0cXF5d2FnazM1MiJ9.7CivBv0jVrL9YJem_YZ1AQ', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 10
    }).on('locationfound', (e) => {
      let marker: any = new L.marker([e.latitude, e.longitude]).bindPopup("Vous êtes ici").openPopup(); 
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

    console.log("All the restaurants"+this.restaurant);
    this.restaurant.forEach(element => {
      L.marker([element.lat, element.lon]).addTo(this.map).bindPopup(element.name, element.description, element.address, element.picture);
    console.log("lat --> " + element.lat);
    console.log("lon --> " + element.lon); 
});

  }
  
}



