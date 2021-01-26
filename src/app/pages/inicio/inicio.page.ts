import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] =[
    {
      icon: 'language-outline',
      name: 'inicio.menu.LENGUAJE',
      redirectTo: '/lenguaje'
    },
    {
      icon: 'card-outline',
      name: 'inicio.menu.DEMOSTRACION',
      redirectTo: '/demostracion'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
