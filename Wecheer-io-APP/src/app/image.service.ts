import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {ImageEvent} from './image-info.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl = 'http://localhost:5000/api/image';

  constructor(private http: HttpClient) { }

  getLastImageEvent(): Observable<ImageEvent> {
    return this.http.get<ImageEvent>(this.apiUrl);
  }
}
