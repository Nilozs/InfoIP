import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchIpPage } from './search-ip.page';

describe('SearchIpPage', () => {
  let component: SearchIpPage;
  let fixture: ComponentFixture<SearchIpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchIpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
