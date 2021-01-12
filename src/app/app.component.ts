import { Component, OnInit,  VERSION } from '@angular/core';

@Component({
  selector: 'appRoot',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  gradi : number= -6;
  temperature : number[]=[];
  constructor(){}
  ngOnInit(){
    console.log(this.gradi)
  }
  add(){
    this.temperature.push((this.gradi));
    console.log((this.temperature));
  }
  delElement(indice){
    console.log(indice);
    this.temperature.splice(indice,1);

  }
}
