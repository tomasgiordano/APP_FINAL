import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemostracionPage } from './demostracion.page';

describe('DemostracionPage', () => {
  let component: DemostracionPage;
  let fixture: ComponentFixture<DemostracionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemostracionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemostracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
