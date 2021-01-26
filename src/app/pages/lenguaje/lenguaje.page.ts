import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-lenguaje',
  templateUrl: './lenguaje.page.html',
  styleUrls: ['./lenguaje.page.scss'],
})
export class LenguajePage implements OnInit {

  langList : any[] = [];

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.langList = this.languageService.getLang();
  }
  changeLang(event){
    console.log(event);
    this.languageService.setLang(event);
  }
}
