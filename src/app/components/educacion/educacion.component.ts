import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from '../interfaceEducacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  
  educaciones: Educacion[] = [];

  constructor(private educacionService : EducacionService) { }

 ngOnInit(): void {
    this.getEducaciones()
  }

    private getEducaciones(){
      this.educacionService.getEducacionesList().subscribe(data =>{
        this.educaciones = data
      })
    }

}

