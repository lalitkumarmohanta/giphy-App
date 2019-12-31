import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GpyService {
  apiKey = environment.apikey;
  mainUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  public getAllGpy(limit: string, offset: string, rating: string, lang: string, searchStr: string): Observable<any> {
    let params = new HttpParams()
      .set('q', searchStr)
      .set('limit', limit)
      .set('offset', offset)
      .set('rating', rating)
      .set('lang', lang);
    const newUrl = `${this.mainUrl}/search?api_key=${this.apiKey}`;
    return this.http.get(newUrl, { params });
  }
  public getGpyById(id: string): Observable<any> {
    const url = `${this.mainUrl}/${id}?api_key=${this.apiKey}`
    return this.http.get(url);
  }
}
