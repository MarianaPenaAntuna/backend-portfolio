import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  porcentaje: number = 80
  nombre: string = "comunicación";
  
  constructor() { }

  ngOnInit(): void {
  }

}
