import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';
import L from 'leaflet';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/interval';

// import { trigger, state, style, transition, animate } from '@angular/animations';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
  // animations: [

    //Animation here ...
  //   trigger('elementState', [
  //     state('inactive', style({
  //       backgroundColor: '#eee',
  //       transform: 'scale(1)'
  //     })),
  //     state('active', style({
  //       backgroundColor: '#cfd8dc',
  //       transform: 'scale(1.1)'
  //     })),
  //     transition('inactive => active', animate('100ms ease-in')),
  //     transition('active => inactive', animate('100ms ease-out'))
  //   ])

  // ]

})


  
////////        Display Data in view        ////////

  
export class HomePage {

  @ViewChild('map') mapContainer: ElementRef;
////    Add variable for holds data

  map: any;
  restaurant: any;
  errorMessage: string;
  bgImage: any;
 
  state = 'opaque';
  
  makeInactive() {
    this.state = 'inactive';
  }

  makeActive() {
    this.state = 'active';
  }

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



////     Create map object and add base map tiles from Leaflet and attribution info to 'map' div

  ///  Create custom icon    
    
  var pulsingIcon = L.divIcon({
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [10, 0],
    shadowSize: [0, 0],
    className: 'css-icon',
    html: '<div id="c" <div class="s"></div> </div>'
  }); 

    
    this.map = L.map("map", { zoomControl:false });
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2Frb3UiLCJhIjoiY2pkMXNjamlxMGNvazM0cXF5d2FnazM1MiJ9.7CivBv0jVrL9YJem_YZ1AQ', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 10
    }).on('locationfound', (e) => {
      let marker: any = L.marker([e.latitude, e.longitude], { icon: pulsingIcon });
        
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
    
  var forkIcon = L.icon({
    iconUrl: '../../assets/imgs/pin.png',
    // iconSize: [38, 95], // size of the icon
    popupAnchor: [0,-15]
  });
    
    
  ///   Diplay marker on map

    let array = this.restaurant;

    for (var value of array) {
        L.marker([value.lat, value.lon], { icon: forkIcon, bounceOnAdd: true, bounceOnAddOptions: { duration: 800, height: 200 } }).addTo(this.map);
    }

    // this.restaurant.forEach(element => {
      
       
        //   .on('add', (e) => {
        //   this.mapPin.set(e.target._leaflet_id,element.id);

        // })
        //   .on("click", function (event) { 
        //     console.log("ID RESTO --> "+this.mapPin.get(event.target._leaflet_id));
        //    })
        // }, 400);
      
    // });
   
  }

  slideToResto(e) {
    console.log('tu as cliqué '+e._leaflet_id);
}
  
}



