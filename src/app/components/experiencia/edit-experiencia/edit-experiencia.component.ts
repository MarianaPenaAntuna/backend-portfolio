import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  id: string = "";
  experienciaActualizada: Experiencia ={id:'', lugar:'', puesto:'', imagen: '', fecha:'', descripcion:''}

  constructor(private experienciaService: ExperienciaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.params['id'];
    this.experienciaService.getUnaExperiencia(this.id).subscribe(
      data=>{this.experienciaActualizada=data},
      err=>console.log(err)
    )
  }
   
  guardar(){
    this.experienciaService.editExperiencia(this.id, this.experienciaActualizada).subscribe(
      data=>{
        this.router.navigate([''])
      },
      err=>console.log(err)
    );
  }

}
