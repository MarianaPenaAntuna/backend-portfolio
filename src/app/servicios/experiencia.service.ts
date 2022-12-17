import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

private baseUrl = "http://localhost:8080/experiencias";

constructor(private httpClient:HttpClient ) {}

public getExperiencias(): Observable<Experiencia[]>{
  return this.httpClient.get<Experiencia[]>(this.baseUrl+'/traer');
}

public saveExperiencia(experiencia: Experiencia): Observable<any>{
  return this.httpClient.post<any>(this.baseUrl+'/crear', experiencia);
}

public getUnaExperiencia(id: string): Observable<any>{
  return this.httpClient.get(this.baseUrl+'/'+id);
}

public editExperiencia(id: string, experiencia: Experiencia):Observable<any>{
  return this.httpClient.put<any>(this.baseUrl+'/editar/'+id, experiencia);
}

public deleteExperiencia(id:string):Observable<any>{
  return this.httpClient.delete<any>(this.baseUrl+`/borrar/${id}`);
}

} 
