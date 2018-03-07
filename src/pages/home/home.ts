import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';
import L from 'leaflet';

import { Slides } from 'ionic-angular';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
// import { trigger, state, style, transition, animate } from '@angular/animations';

import { MenuPage } from '../menu/menu';


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

  @ViewChild(Slides) slides: Slides;
  ////    Add variable for holds data

  map: any;
  restaurant: any;
  errorMessage: string;
    currentIndex:number;
  mapPin: any;
  pinID: number[];
  sliding: any;


  ////    TEST ANIMATION

  // state = 'opaque';

  // makeInactive() {
  //   this.state = 'inactive';
  // }

  // makeActive() {
  //   this.state = 'active';
  // }


  constructor(public navCtrl: NavController, public rest: RestProvider) {

    this.mapPin = this.mapPin || [];
    this.pinID = this.pinID || [];

    this.sliding = false;
    this.currentIndex=0;
  }

  ionViewDidEnter() {
      if (!this.map)
    this.loadmap();
      console.log("JE passe bien par IONDIDENTER")
  }

  ionViewDidLoad() {
    console.log("JE passe bien par là")
      this.getRestaurants();
  }




  slideChanged() {
    console.log("Tu as slidé !");
    this.currentIndex = this.slides.getActiveIndex();
    console.log("Current index is ", this.currentIndex)
    let marker = this.mapPin[this.currentIndex]
    console.log("SIZE SLIDE --> "+this.slides.length())
    if(this.currentIndex==this.slides.length()-1)
    this.slides.lockSwipeToNext(true)
else
this.slides.lockSwipeToNext(false)

    this.moveMarker(marker)
    console.log("SIZE ARRAY --> " + this.pinID.length)
  }



  openMenu() {
    this.navCtrl.push(MenuPage, {
    img:this.restaurant[this.currentIndex].picture,
      address:this.restaurant[this.currentIndex].address,
      name:this.restaurant[this.currentIndex].name,
      desc:this.restaurant[this.currentIndex].desc

    });
    console.log("well play tu as ouvert la page menu");
  }


  ////     Create a function for animated pin restaurants when slide is active



  moveMarker(pin) {
    let newIcon = L.icon({
      iconUrl: '../../assets/icon/pin2.png',
      // iconSize: [38, 95],
      popupAnchor: [0, -15]
    });

    let forkIcon = L.icon({
      iconUrl: '../../assets/icon/pin.png',
      // iconSize: [38, 95],
      popupAnchor: [0, -15]
    });
    console.log("FUCKING INDEX --> "+this.slides.getPreviousIndex())

      this.mapPin[this.slides.getPreviousIndex()].setIcon(forkIcon);


    pin.bounce({ duration: 500, height: 100 });
    pin.setIcon(newIcon);

  }




  ////     Function to initialize map   -   we using leaflet with mapbox

  loadmap() {
    
    ////     Create map object and add base map tiles from Leaflet and attribution info to 'map' div

    ///  Create custom icon

    // let pulsingIcon = L.divIcon({
    //   iconSize: [30, 30],
    //   iconAnchor: [15, 15],
    //   popupAnchor: [10, 0],
    //   shadowSize: [0, 0],
    //   className: 'css-icon',
    //   html: '<div id="c" <div class="s"></div> </div>'
    // });

    ///

    this.map = L.map("map", { zoomControl: false });
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2Frb3UiLCJhIjoiY2pkMXNjamlxMGNvazM0cXF5d2FnazM1MiJ9.7CivBv0jVrL9YJem_YZ1AQ', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 10
    }).on('locationfound', (e)=>{this.locationfound(e)}).on('locationerror', (err) => {
      alert(err.message);
    })

  }



  locationfound=(e)=>
  {
      let pulsingIcon = L.divIcon({
          iconSize: [30, 30],
          iconAnchor: [15, 15],
          popupAnchor: [10, 0],
          shadowSize: [0, 0],
          className: 'css-icon',
          html: '<div id="c" <div class="s"></div> </div>'
      });
      let marker: any = L.marker([e.latitude, e.longitude], { icon: pulsingIcon });

      this.map.addLayer(marker);
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



  ////     Create a function for link pin with slide

  onAddLayer(event) {
    this.pinID.push(event.target._leaflet_id);


    console.log("SIZE ARRAY --> " + this.pinID.length)
  }


  onClickLayer(event) {

    console.log("ID RESTO --> " + event.target._leaflet_id);
    // if(this.pinID.indexOf(event.target._leaflet_id)==-1)
    // this.pinID.push(event.target._leaflet_id);
    let index = this.pinID.indexOf(event.target._leaflet_id)
    this.slides.slideTo(index)
    console.log("INDEX --> " + this.pinID.indexOf(event.target._leaflet_id))
  }



  ////    Function to display marker restaurant on the map


  formatData() {

    ///  Create custom icon

    var forkIcon = L.icon({
      iconUrl: '../../assets/icon/pin.png',
      // iconSize: [38, 95],
      popupAnchor: [0, -15]
    });

    var newIcon = L.icon({
      iconUrl: '../../assets/icon/pin2.png',
      // iconSize: [38, 95],
      popupAnchor: [0, -15]
    });
    ///   Diplay marker on map

    let array = this.restaurant;
    // for (let i = 0; i < array.length; i++){
      // console.log(i)
      // if (i == 0) {
      //   console.log("toot")
      //   let pin = L.marker([array[i].lat, array[i].lon], { icon: forkIcon, bounceOnAdd: true, bounceOnAddOptions: { duration: 800, height: 200 } })
      //   .on('add', event => {
      //     this.onAddLayer(event, pin);
      //   }).bindPopup(array[i].name).addTo(this.map);
      // pin.on('click', event => {
      //   this.onClickLayer(event)
      // });
      // } else {

        IntervalObservable.create(10).subscribe((i) => {
          if (i > 4) {
            return false;
          }

          let pin = L.marker([array[i].lat, array[i].lon], { icon: i==0?newIcon:forkIcon
            , bounceOnAdd: true, bounceOnAddOptions: { duration: 800, height: 200 } })
            .on('add', event => {

              this.onAddLayer(event)


            }).addTo(this.map);
          pin.on('click', event => {
            this.onClickLayer(event)
          });


          this.mapPin.push(pin);


        })

  }
}
