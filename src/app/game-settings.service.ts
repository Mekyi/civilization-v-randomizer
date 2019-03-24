import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap, skipWhile } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class GameSettingsService {

  constructor(private http: HttpClient) { }

  getJson() {
    return this.http.get('./assets/gameSettings.json').pipe(
      map(res => res)
      );
  }
}
