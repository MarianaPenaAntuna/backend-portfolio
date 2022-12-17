import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class EncabezadoService {
  
private apiServerUrl = "http://localhost:8080/personas/";

  constructor(private http: HttpClient) {}

  getPersonas():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.apiServerUrl+ "traer")
  }

    public updatePersona(persona: Persona):Observable<Persona>{
      return this.http.put<Persona>(`${this.apiServerUrl}/personas/editar`, persona)
    }
}

