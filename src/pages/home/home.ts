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
  bgImage: any;
  
  
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
      // marker.on('add', () => {
      //   console.log("coucou")
      //   this.doAnimations()
      //   // putting this in setInterval so it runs forever
      //   setInterval(() => {
      //     this.doAnimations()
      //   }, 5000)
      // })
        
      this.map.addLayer(marker);
    }).on('locationerror', (err) => {
      alert(err.message);
      })
     
  }

  // doAnimations() {
  //    var myIcon: any = document.querySelector('.my-icon')
    
  //   setTimeout(function () {
  //       myIcon.style.width = '50px'
  //       myIcon.style.height = '50px'
  //       myIcon.style.marginLeft = '-25px'
  //       myIcon.style.marginTop = '-25px'
  //     }, 1000)
  
  //     setTimeout(function(){
  //       myIcon.style.borderRadius = '10%'
  //       myIcon.style.backgroundColor = 'skyblue'
  //     }, 2000)
  
  //     setTimeout(function(){
  //       myIcon.style.width = '30px'
  //       myIcon.style.height = '30px'
  //       myIcon.style.borderRadius = '50%'
  //       myIcon.style.marginLeft = '-15px'
  //       myIcon.style.marginTop = '-15px'
  //     }, 3000)
  // }


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
    
    this.restaurant.forEach(element => {
      L.marker([element.lat, element.lon], { icon: forkIcon }).addTo(this.map).bindPopup(element.name);
    
    });

  }
  
}



