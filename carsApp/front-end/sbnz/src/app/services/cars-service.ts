import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../env/environment';
import { CarCreate } from '../model/carCreate';
import { RentRequest } from '../model/rentRequest';
import { BuyRequest } from '../model/buyRequest';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}

  registerCar(arrangement: CarCreate): Observable<any> {
    return this.http.post<any>(environment.apiHost + 'cars', arrangement);
  }

  getAllCars(): Observable<any> {
    return this.http.get<any>(environment.apiHost + 'cars/all');
  }

  rentRequestCreate(r: RentRequest): Observable<any> {
    return this.http.post<any>(environment.apiHost + 'rents', r);
  }

  cancelRRequest(r: RentRequest): Observable<any> {
    return this.http.post<any>(environment.apiHost + 'rents/cancel', r);
  }

  returnRRequest(r: RentRequest): Observable<any> {
    return this.http.post<any>(environment.apiHost + 'rents/returnRenting', r);
  }

  getAllRentRequests(): Observable<any> {
    return this.http.get<any>(environment.apiHost + 'rents/all');
  }

  getSus(): Observable<any> {
    return this.http.get<any>(environment.apiHost + 'rents/suspiciousUsers');
  }

  getAllRentRequestsByUser(id: number): Observable<any> {
    return this.http.get<any>(environment.apiHost + 'rents/all/' + id);
  }

  createBuyRequest(buyRequest: BuyRequest): Observable<any> {
    return this.http.post<any>(
      environment.apiHost + 'buy-requests',
      buyRequest
    );
  }

  getBuyRequestsByUser(userId: number): Observable<any> {
    return this.http.get<any>(
      `${environment.apiHost}buy-requests/user/${userId}`
    );
  }

  payBuyRequest(requestId: number, amount: number): Observable<any> {
    return this.http.post<any>(
      environment.apiHost + `buy-requests/pay/${requestId}`,
      null,
      {
        params: {
          amount: amount.toString(),
        },
      }
    );
  }
}
