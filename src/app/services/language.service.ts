import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from '@ionic/angular';

const LNG_KEY = 'SELECTED_LANGUAGE';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  selected= '';

  constructor(private translate: TranslateService, private storage: Storage, private plt: Platform) { }

  initLang(){
    this.translate.addLangs(['es','en','fr','ru','al','pr']);
    this.translate.setDefaultLang('es');
    this.storage.get(LNG_KEY).then(val => {

      let lang = 'es';
      if(val){
        lang = val;
      }

      this.setLang(lang);
      this.selected = lang; 
    });
  }

  getLang(){
    return [
      { text: 'lenguajes.opciones.INGLES', value: 'en'},
      { text: 'lenguajes.opciones.ESPAÑOL', value: 'es'},
      { text: 'lenguajes.opciones.FRANCES', value: 'fr'},
      { text: 'lenguajes.opciones.RUSO', value: 'ru'},
      { text: 'lenguajes.opciones.ALEMAN', value: 'al'},
      { text: 'lenguajes.opciones.PORTUGUES', value: 'pr'},
    ];
  }

  setLang(lang){
    this.translate.use(lang);
    this.selected = lang;
    this.storage.set(LNG_KEY,lang)
  }
}
