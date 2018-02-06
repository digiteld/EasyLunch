import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


// Code qui ne fonctionne pas 
@Injectable()
export class RestProvider {
  private apiUrl = 'https://easy-lunch.herokuapp.com/api/restaurants';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getRestaurant(): Observable<{}> {
    return this.http.get(this.apiUrl).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  
  private handleError (error: Response | any) {
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


// Code qui fonctionne 

// @Injectable()
// export class RestProvider {
//   private apiUrl = 'https://restcountries.eu/rest/v2/all';


//   constructor(public http: HttpClient) {
//     console.log('Hello RestProvider Provider');
//   }

//   getCountries(): Observable<{}> {
//     return this.http.get(this.apiUrl).pipe(
//       map(this.extractData),
//       catchError(this.handleError)
//     );
//   }
  
//   private extractData(res: Response) {
//     let body = res;
//     return body || { };
//   }
  
//   private handleError (error: Response | any) {
//     let errMsg: string;
//     if (error instanceof Response) {
//       const err = error || '';
//       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
//     } else {
//       errMsg = error.message ? error.message : error.toString();
//     }
//     console.error(errMsg);
//     return Observable.throw(errMsg);
//   }


// }
