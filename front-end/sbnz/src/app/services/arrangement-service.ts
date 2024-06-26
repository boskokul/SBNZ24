import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArrangementCreate } from '../model/arrangement-create';
import { Observable } from 'rxjs';
import { environment } from '../env/environment';
import { TripCreate } from '../model/trip-create';
import { ArrangementReservationCreate } from '../model/arrangement-reservation-create';
import { ArrangementGradeCreate } from '../model/arrangement-grade-create';
import { ArrangementReservationResponseDTO } from '../model/arrangement-reservation-responce';
import { ArrangementRecommendation } from '../model/arrangment-recommendation';
import { UserPreferences } from '../model/user-preferences';

@Injectable({
  providedIn: 'root',
})
export class ArrangementService {
  constructor(private http: HttpClient) {}

  registerArrangement(arrangement: ArrangementCreate): Observable<any> {
    return this.http.post<any>(
      environment.apiHost + 'arrangements',
      arrangement
    );
  }

  getAllWithTrips(): Observable<any> {
    return this.http.get<any>(
      environment.apiHost + 'arrangements/allWithTrips'
    );
  }

  addTrip(t: TripCreate): Observable<any> {
    return this.http.post<any>(environment.apiHost + 'trips', t);
  }

  createArrangementReservation(arrangementReservation: ArrangementReservationCreate): Observable<any> {
    return this.http.post<any>(
      environment.apiHost + 'arrangementReservations',
      arrangementReservation
    );
  }

  rateArrangement(arrangementGrade: ArrangementGradeCreate) : Observable<any> {
    return this.http.post<any>(
      environment.apiHost + 'arrangementGrades',
      arrangementGrade
    )
  }

  calculateArrangementPrice(id: number): Observable<any> {
    return this.http.put<any>(
      environment.apiHost + 'arrangementReservations/' + id,
      id
    )
  }

  getReservationsByUserId(userId: number): Observable<ArrangementReservationResponseDTO[]> {
    return this.http.get<ArrangementReservationResponseDTO[]>(
      environment.apiHost + 'arrangementReservations/user/' + userId
    );
  }

  getArrangementRecommendationsWithoutUser(): Observable<ArrangementRecommendation[]> {
    return this.http.get<ArrangementRecommendation[]>(
      environment.apiHost + 'arrangements/homepageRecommendations'
    )
  }

  getArrangementRecommendationsWithUser(userId: number): Observable<ArrangementRecommendation[]> {
    return this.http.get<ArrangementRecommendation[]>(
      environment.apiHost + 'arrangements/'+userId+'/loggedUserRecommendations'
    )
  }

  getUserPreferencesByUserId(userId: number): Observable<UserPreferences> {
    return this.http.get<UserPreferences>(
      environment.apiHost + 'user/preferences/' + userId
    );
  }

  createUserPreferences(userId: number, userPreferences: UserPreferences): Observable<UserPreferences> {
    return this.http.post<UserPreferences>(
      environment.apiHost + 'user/preferences/' + userId,
      userPreferences
    );
  }

}
