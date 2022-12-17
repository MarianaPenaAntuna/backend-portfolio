import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia:Experiencia[]=[];
  
  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { }
  isLogged=false;
  
  ngOnInit(): void {
    this. getExperiencias();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else {
      this.isLogged=false;
    }
  }

  getExperiencias():void{
this.experienciaService.getExperiencias().subscribe(
  data => {this.experiencia = data } 
)
  }

eliminar(id: string){
  this.experienciaService.deleteExperiencia(id).subscribe(
    data =>{this.ngOnInit();}
  )
}
  

}
