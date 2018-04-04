import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map, catchError} from 'rxjs/operators';
import { LoaderProvider } from './loader';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class RestProvider {
    private prod = 'https://easy-lunch-tmp.herokuapp.com';
    private test = 'http://192.168.1.15:5000';
    private apiUrl = 'https://easy-lunch-tmp.herokuapp.com/api/restaurants';
    private apiUrlMeal = this.prod + '/api/meal?id=';
    private apiUrlPostBooking = this.prod + '/api/booking';
    private apiUrlPostCommand = this.prod + '/api/command';
    private apiUtlGetSingleResto = this.prod + '/api/restaurants/';
    private apiUrlGetAllBookingUser = this.prod + '/api/command?iduser=';
    private apiUrlGetCodeByBooking = this.prod + '/api/code/';


    // private apiUrl = 'http://192.168.1.15:5000/api/restaurants?lat=44.880630&lon=-0.687052&meter=100000';

    constructor(public http: HttpClient,private loader: LoaderProvider) {
        console.log('Hello RestProvider Provider');
    }


////    Function to get the restaurants from the API

    getRestaurants(): Observable<{}> {
        return this.http.get(this.apiUrl).pipe(
            map(this.extractData),
            catchError(this.handleError)
        );
    }

    getMeals(id): Observable<{}> {
        return this.http.get(this.apiUrlMeal + id).pipe(
            map(this.extractData),
            catchError(this.handleError)
        );
    }


    postCommand(arg):Observable<string> {
        return this.http.post(this.apiUrlPostCommand, arg).pipe(
            map(this.extractData2),
            catchError(this.handleError)
        );
    }


    postBooking(arg): Observable<any> {
        return this.http.post(this.apiUrlPostBooking,arg).pipe(

            map(this.extractData2),
            catchError(this.handleError)
        );
    }

    getCodeByBookingId(arg): Observable<any>
    {
        let url=this.apiUrlGetCodeByBooking

            console.log("urL ---> "+url)
        url+=arg
        console.log("urL ---> "+url)
        return this.http.get(url).pipe(
            map(this.extractData2),
            catchError(this.handleError)
        );
    }

    getRestaurantWithCode(arg): Observable<any> {
        let url = this.apiUtlGetSingleResto + arg;
        console.log("URL --> " + url)
        return this.http.get(url).pipe(
            map(this.extractData),
            catchError(this.handleError)
        );
    }

    getCommandWithIdUser(arg): Observable<any> {
        //this.loader.show();
        let url = this.apiUrlGetAllBookingUser + arg;
        console.log("URL --> " + url)
        return this.http.get(url).pipe(
            map(this.extractData),
            catchError(this.handleError)
        );
    }


     extractData2(res: Response) {
        //this.loader.hide();
        let body = ((<any>res).data);
        // Another way, is to explicitly tell TypeScript that we’re not interested in doing strict type checking
        return body;
    }


     extractData(res: Response) {
        //this.loader.hide();
        console.log("extractData");
        let body = (<any>res).data;
        // Another way, is to explicitly tell TypeScript that we’re not interested in doing strict type checking
        return body || {};
    }

     handleError(error: Response | any) {
        //this.loader.hide();
        let errMsg: string;
        if (error instanceof Response) {
            const err = error || '';
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}