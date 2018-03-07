import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class RestProvider {
  private apiUrl = 'https://easy-lunch.herokuapp.com/api/restaurants';
  private apiUrlMeal = 'http://192.168.1.15:5000/api/meal?id=1';
  private apiUrlPostBooking= 'http://192.168.1.15:5000/api/booking'

  // private apiUrl = 'http://192.168.1.15:5000/api/restaurants?lat=44.880630&lon=-0.687052&meter=100000';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  

////    Function to get the restaurants from the API
  
  getRestaurants(): Observable<{}> {
    return this.http.get(this.apiUrl).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  // private loginUrl = 'https://easy-lunch.herokuapp.com/login';

  // addLogin(username: string, password: string): Observable<{}> {
  //   return this.http.post(this.loginUrl, {username:"j", password:"j"}, {
  //     headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
  //   })

  // }

    getMeals(): Observable<{}> {
        return this.http.get(this.apiUrlMeal).pipe(
            map(this.extractData),
            catchError(this.handleError)
        );
    }



    postBooking(body): Observable<{}> {
        return this.http.post(this.apiUrlPostBooking,).pipe(

            catchError(this.handleError)
        );
    }



  private extractData(res: Response) {

    let body = (<any>res).data;
   // Another way, is to explicitly tell TypeScript that we’re not interested in doing strict type checking
    return body || {};
  }

  private handleError(error: Response | any) {
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