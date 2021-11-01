import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxBlocklyEbaoComponent } from './ngx-blocklys.component';


describe('NgxBlocklyEbaoComponent', () => {
  let component: NgxBlocklyEbaoComponent;
  let fixture: ComponentFixture<NgxBlocklyEbaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxBlocklyEbaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBlocklyEbaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
