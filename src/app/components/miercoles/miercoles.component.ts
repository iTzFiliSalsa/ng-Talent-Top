import { Component, OnInit } from '@angular/core';
import { DayService } from '../../services/days.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { forkJoin } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-miercoles',
  templateUrl: './miercoles.component.html',
  styleUrls: ['./miercoles.component.css'],
  providers: [DayService]
})
export class MiercolesComponent implements OnInit {

  
  public array: Array<any>;
  public description: Array<any>;
  public charging:boolean;
  public request: boolean;
  public courses:any;
  public dia:string;
  public datos;

  constructor(
    public _dayService:DayService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {

    this.array = [];
    this.description = [];
    this.dia = "Desconferencias del dia miercoles";
    this.charging = true;
    this.request = true;
    this.courses = {};
  }

  ngOnInit(): void {
    this.cursos();
  }

  cursos(){
    this._dayService.cursos("4", "miercoles").subscribe(
      response => {
        this.charging = false;
        this.datos = response.cursos;
        console.log(this.datos);
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

  click(event, id, curso){
    event.target.classList.toggle('imagenactiva');
    this.verificar(id, curso);
    console.log(this.array);
  }

  verificar(id, curso){
    if(this.array.length == 0){
      this.description.push(curso);
      this.array.push(id)
    }else{
      var i:number;
      var a:boolean = false;
      for(i = 0; i<this.array.length; i++){
        if(this.array[i] == id){
          a = true;
          this.array.splice(i,1);
          this.description.splice(i,1);
          break;
        }
      }
      if(!a){
        this.array.push(id);
        this.description.push(curso);
      }
    }
  }

  confirm(){
    let funciones = [];

    this.array.forEach(idCurso => {
      let curso = {
        idAlumno: 3,
        idCurso: idCurso
      };
      funciones.push(this._dayService.saveCurso(curso));
    });

    forkJoin(...funciones).subscribe(
      response => {
        this.request = false;
        setTimeout(()=> {
          $("#waitModal").modal('hide');
          this._router.navigate(['home']);
        }, 1500);
      },
      error =>{
        console.log(<any>error)
      }
    );
  }
}
