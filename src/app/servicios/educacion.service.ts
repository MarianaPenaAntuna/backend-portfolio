import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../components/interfaceEducacion';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private baseUrl = "http://localhost:8080/educaciones/traer";

  constructor(private httpClient:HttpClient ) {}
  
  getEducacionesList(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(`${this.baseUrl}`);
  }

}