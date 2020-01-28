import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(public apiService: ApiService) { }

  get(qeury: any): Observable<any> {
    return this.apiService.get('/dota2/hero/_search', qeury);
  }
  post(params: any): Observable<any> {
    return this.apiService.post(`/dota2/hero/${params.id}`, params);
  }
}
