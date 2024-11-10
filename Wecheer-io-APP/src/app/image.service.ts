import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {ImageEvent} from './image-info.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = 'https://nbj45p0i11.execute-api.ap-southeast-1.amazonaws.com/Prod/api/image';

  constructor(private http: HttpClient) { }

  getLastImageEvent(): Observable<ImageEvent> {
    return this.http.get<ImageEvent>(this.apiUrl);
  }
}
