import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LenguajePage } from './lenguaje.page';

describe('LenguajePage', () => {
  let component: LenguajePage;
  let fixture: ComponentFixture<LenguajePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenguajePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LenguajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
