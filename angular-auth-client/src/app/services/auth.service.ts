import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, firstValueFrom, Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  readonly API_URL = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) { }

  isAuthenticated(): boolean {
    const token: string | null = localStorage.getItem('authToken');
    return token !== null;
  }

  authenticate(): Observable<User> {
    const storedToken: string | null = localStorage.getItem('authToken');
    
    if (storedToken === null) {
      throw null;
    }
    const options = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${storedToken}`
      })
    };
    // console.log('fetching user data', options)
    // console.log(user);
    return this.http.get<User>(`${this.API_URL}/auth/verify`, options);
    
  }

  register(name: string, email: string, password: string): Observable<User> {

    const user: User = new User(
      null,
      name,
      email,
      password,
      []
    );

    return this.http.post<User>(`${this.API_URL}/auth/signup`, user);
          
  }

  login(email: string, password: string): Observable<any> {

    const body = {
      email,
      password
    };

    return this.http.post<any>(`${this.API_URL}/auth/login`, body);
    // return this.http.post<any>(`${this.API_URL}/demo`, body);
        
  }

  logout(): void {
      // Remove user from local storage to log user out
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
  }
}
