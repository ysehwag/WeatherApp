import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getForcast(city:string){
    console.log(city)
    return this.http.get(`https://api.apixu.com/v1/forecast.json?key=390d8081bcde41c5abd72714191904&q=${city}&days=7`);
  }
}
