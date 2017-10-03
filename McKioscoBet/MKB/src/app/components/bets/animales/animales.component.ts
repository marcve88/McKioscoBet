import { Component, OnInit } from '@angular/core';

type MyArrayType = Array<{bs: number, cantidad: number}>;


@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})

export class AnimalesComponent implements OnInit {



   MyArrayType = Array<{ bs: number, cantidad: number}>();

   Totalbs:number=0;

  constructor() { }

  ngOnInit() {
  }

  addbet(f:any){
    this.MyArrayType[this.MyArrayType.length]=f.value
    this.Totalbs= Number(this.Totalbs) + Number(f.value.bs);

  }
  sendbet(){
    console.log(this.MyArrayType)
  }

}
