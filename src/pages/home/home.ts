import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';

import {RestProvider} from '../../providers/rest/rest';
import L from 'leaflet';

import {AndroidPermissions} from '@ionic-native/android-permissions';

import {Slides} from 'ionic-angular';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable';

import {Geolocation} from '@ionic-native/geolocation';

import {MenuPage} from '../menu/menu';
import {Storage} from "@ionic/storage";


@Component({
    selector: 'page-home',
    templateUrl: 'home.html',

})


////////        Display Data in view        ////////


export class HomePage {


    @ViewChild('map') mapContainer: ElementRef;


    ////    Add variable for holds data

    observable: any;
    map: any;
    restaurant: any;
    errorMessage: string;
    currentIndex: number;
    mapPin: any;
    pinID: number[];
    sliding: any;
    NbPers: string;
    Schedule: string;
    allPin: any;
    date: Date;
    markerArray: any[];
    formatnbPers: string;
    formatSchedule: string;
    latitude: string;
    longitude: string;
    positionFound: boolean;
    mapLoad: boolean;
    mod: boolean;

    scheduleBtText: string;
    nbPersBtText: string;

    dateTime: any;
    timeOut: boolean;

    nbTryLocation:number

    @ViewChild(Slides) slides: Slides;


    constructor(public navCtrl: NavController, public rest: RestProvider, private storage: Storage, private androidPermissions: AndroidPermissions, private geolocation: Geolocation, private toastCtrl: ToastController) {
        this.cleanStorage()
        this.nbTryLocation=0;
        this.mapPin = this.mapPin || [];
        this.pinID = this.pinID || [];
        this.markerArray = this.markerArray || []
        this.NbPers = null;
        this.Schedule = null;
        this.sliding = false;
        this.formatnbPers = "none"
        this.formatSchedule = "none"
        this.mapLoad = false;        // HH:mm
        //HH
        this.positionFound = false;
        this.currentIndex = 0;
        this.allPin = this.allPin || [];
        this.mod = false;

        this.scheduleBtText = "A quelle heure ?"
        this.nbPersBtText = "Pour combien ?"

        this.dateTime = new Date();
        this.timeOut = false;

    }

    ionViewDidLoad() {
        //this.checkForTimeOut();
        this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            console.log("LAT --> " + resp.coords.latitude);
            console.log("LON --> " + resp.coords.longitude);
        }).catch((error) => {
            console.log('Error getting location', error);
        });


        this.loadmap();
        this.getRestaurants();

    }

    ionViewDidEnter() {
        //CHECK AND REQUEST IF NECESSARY PERMISSION FOR POSITION

        // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(
        //     result => console.log('Has permission?',result.hasPermission),
        //     err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION)
        // );

        if (!this.map)
            this.loadmap();
        console.log("JE passe bien par IONDIDENTER")
        //this.getRestaurants();
    }


    slideChanged() {
        console.log("Tu as slidé !");
        this.currentIndex = this.slides.getActiveIndex();
        console.log("Current index is ", this.currentIndex)
        let marker = this.mapPin[this.currentIndex]
        console.log("SIZE SLIDE --> " + this.slides.length())

        this.moveMarker(marker)
        console.log("SIZE ARRAY --> " + this.pinID.length)

    }


    openMenu(i) {
        console.log("J'ai cliqué sur le --> " + i)
        console.log("NBPERS --> " + this.NbPers)
        console.log("Schedule --> " + this.Schedule)

        let obj = this.restaurant[i]
        console.log("ID cc  --> " + obj)
        this.storage.set('id_restaurant', obj.id)
        this.storage.set('create_booking', true)
        if (this.Schedule != null) {
            console.log("JE SET SCHEDULE " + this.Schedule)
            this.storage.set('schedule', this.Schedule)

        }
        if (this.NbPers != null) {
            console.log("JE SET NBPERS " + this.NbPers)
            let nbpers = this.NbPers.substring(0, this.NbPers.length - 3)
            this.storage.set('nbPers', nbpers)

        }

        this.navCtrl.push(MenuPage, {

            img: obj.picture,
            address: obj.address,
            name: obj.name,
            desc: obj.description,
            city: obj.city


        });
        console.log("well play tu as ouvert la page menu");
    }


    ////     Create a function for animated pin restaurants when slide is active


    moveMarker(pin) {
        if (pin) {
            let newIcon = L.icon({
                iconUrl: 'assets/icon/pin.svg',
                iconSize: [60, 80],
                iconAnchor: [30, 80],
                popupAnchor: [0, -15]
            });

            let forkIcon = L.icon({
                iconUrl: 'assets/icon/pin.svg',
                iconSize: [37.5, 50],
                iconAnchor: [18.75, 50],
                popupAnchor: [0, -15]
            });
            console.log("FUCKING INDEX --> " + this.slides.getPreviousIndex())

            this.mapPin[this.slides.getPreviousIndex()].setIcon(forkIcon);
            pin.bounce({duration: 500, height: 100});
            pin.setIcon(newIcon);
        }


    }


    ////     Function to initialize map   -   we using leaflet with mapbox

    loadmap() {
        this.map = L.map("map", {zoomControl: false});
        L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2Frb3UiLCJhIjoiY2pkMXNjamlxMGNvazM0cXF5d2FnazM1MiJ9.7CivBv0jVrL9YJem_YZ1AQ', {
            attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(this.map);
        this.tryLocate()

        this.map.on('locationfound', (e) => {
            console.log(e);
            this.locationfound(e);

        }).on('locationerror', (err) => {
            console.log(err.message);
            console.log("erreur de localisation");
            this.tryLocate();

        }).on('load', (e) => {
            console.log("MAP LOAD ")
            this.mapLoad = true;
            this.initMarker();
        })

    }

    tryLocate() {
        this.map.locate({
            setView: true,
            maxZoom: 10,
            timeout: 2000
        })

    }


    locationfound = (e) => {
        console.log("POSITION --> " + e)
        this.positionFound = true;
        this.latitude = e.latitude;
        this.longitude = e.longitude;
        this.initMarker();
    }

    initMarker() {
        if (this.positionFound && this.mapLoad) {
            let pulsingIcon = L.divIcon({
                iconSize: [30, 30],
                iconAnchor: [15, 15],
                popupAnchor: [10, 0],
                shadowSize: [0, 0],
                className: 'css-icona',
                html: '<div id="c" <div class="s"></div> </div>'
            });
            let marker: any = L.marker([this.latitude, this.longitude], {icon: pulsingIcon});

            this.allPin.push(marker);
            this.markerArray.push(marker);
            console.log("position found --> " + this.positionFound)
            console.log("this map --> " + this.map)
            console.log("mapload --> " + this.mapLoad)
            this.map.addLayer(marker);
            // this.zoomOnNearestResto()

        }else if(!this.positionFound){
            if(this.nbTryLocation>1)
            this.initMarkerOffLine();
            else
                this.nbTryLocation++

        }
    }


    initMarkerOffLine(){
        console.log("TRY !!!")
        this.latitude = "44.849104";
        this.longitude = "-0.571037";
        let marker: any = L.marker([this.latitude, this.longitude]);
        this.allPin.push(marker);
        this.markerArray.push(marker);

        var latlng = L.latLng(this.latitude, this.longitude);
        this.map.setView(latlng, 12);

    }

    ////     Create a function for calling the restaurants from the provider

    getRestaurants() {

        console.log("getRestaurants");
        this.rest.getRestaurants()
            .subscribe(
                restaurant => {

                    this.restaurant = restaurant;
                    console.log("this.formatData in getRestaurants");
                    this.formatData();
                },
                error => this.errorMessage = <any>error);

    }


    ////     Create a function for link pin with slide

    onAddLayer(event) {
        this.pinID.push(event.target._leaflet_id);
    }

    validateSchedule() {
        console.log("SCHEDULE")
        this.scheduleBtText = this.Schedule


    }

    validateNbPers() {

        this.nbPersBtText = this.NbPers.substring(0, 2)
        console.log("NbPERS")


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
        console.log("formatData")
        ///  Create custom icon

        var forkIcon = L.icon({
            iconUrl: 'assets/icon/pin.svg',
            iconSize: [37.5, 50],
            iconAnchor: [18.75, 50],
            popupAnchor: [0, -15]
        });

        var newIcon = L.icon({
            iconUrl: 'assets/icon/pin.svg',
            iconSize: [60, 80],
            iconAnchor: [30, 80],
            popupAnchor: [0, -15]
        });
        ///   Diplay marker on map

        let array = this.restaurant;

        console.log("JE PLACE MES PINS")
        this.observable = IntervalObservable.create(10).subscribe((i) => {

            if (i > array.length - 1) {


                if (!this.observable.isStopped) {
                    this.observable.unsubscribe();
                }
                // setTimeout(() => {
                    this.zoomOnNearestResto()
                // },800)

                return false;
            }


            let pin = L.marker([array[i].lat, array[i].lon], {
                icon: i == 0 ? newIcon : forkIcon
                , bounceOnAdd: true, bounceOnAddOptions: {duration: 800, height: 200}
            })

            pin.on('add', event => {
                this.onAddLayer(event)
            })

            pin.addTo(this.map);

            pin.on('click', event => {
                this.onClickLayer(event)
            });

            if (i === 0) {
                console.log("JE ZOOM ON FIRST RESTO " + array[i].name)
                this.markerArray.push(pin)
                // this.zoomOnNearestResto()
            }

            this.mapPin.push(pin);


        })


    }

    private zoomOnNearestResto() {

        console.log("ZOOM ON NEAREST --> "+this.markerArray.length)
        // if (this.markerArray.length == 2) {
            console.log(this.markerArray.length)
            setTimeout(() => {
                    var group = L.featureGroup(this.markerArray); //add markers array to featureGroup

                    var buttonContainer = document.getElementById("btn-container");
                    var topMaxPos = buttonContainer.offsetTop + buttonContainer.offsetHeight;
                    var slidesContainer = document.getElementById("slides");
                    var bottomMaxPos = slidesContainer.offsetTop - 170;

                    this.map.fitBounds(group.getBounds(), {
                            paddingTopLeft: [0, topMaxPos],
                            paddingBottomRight: [0, bottomMaxPos]
                        }
                    );

//                    this.map.setZoom(this.map.getZoom()-1);
                    this.map.zoomOut(25)
                }

                , 1000);

        // }

    }

    private cleanStorage() {

        this.storage.remove('menuID')
        this.storage.remove('menuMealID')
        this.storage.remove('total')
        this.storage.remove('nbPers')
        this.storage.remove('schedule')
        this.storage.remove('idMeals')
        this.storage.remove('id_command')
        this.storage.remove('create_booking')
        this.storage.remove('special')


    }

    // Désactivate button picker if time is over 11:30 am
    checkForTimeOut() {
        console.log("IL EST -------> " + this.dateTime.getHours());
        if (this.dateTime.getHours() >= 11 && this.dateTime.getMinutes() >= 30 || this.dateTime.getHours >= 12) {
            this.timeOut = true;
            this.displayError();
        } else {
            this.timeOut = false;
        }
    }

    displayError() {
        let toast = this.toastCtrl.create({
            message: 'Les commandes ne sont plus possibles après 11h30, merci de votre compréhension.',
            showCloseButton: true,
            closeButtonText: "X",
            dismissOnPageChange: true,
            position: 'middle'
        });
        toast.present();
    }

}
