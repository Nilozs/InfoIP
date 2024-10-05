import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyipPage } from './myip.page';

describe('MyipPage', () => {
  let component: MyipPage;
  let fixture: ComponentFixture<MyipPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
