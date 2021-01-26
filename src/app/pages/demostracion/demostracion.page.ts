import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demostracion',
  templateUrl: './demostracion.page.html',
  styleUrls: ['./demostracion.page.scss'],
})
export class DemostracionPage implements OnInit {

  list: any[]= [
    {
      'img': "/assets/frutas/banana.jpg",
      'text': "demostracion.demo.listado.UNO"
    },
    {
      'img': "/assets/frutas/manzana.jpg",
      'text': "demostracion.demo.listado.DOS"
    },
    {
      'img': "/assets/frutas/naranja.jpg",
      'text': "demostracion.demo.listado.TRES"
    },
    {
      'img': "/assets/frutas/melon.jpeg",
      'text': "demostracion.demo.listado.CUATRO"
    },
    {
      'img': "/assets/frutas/cereza.jfif",
      'text': "demostracion.demo.listado.CINCO"
    },
    {
      'img': "/assets/frutas/frutilla.jfif",
      'text': "demostracion.demo.listado.SEIS"
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
