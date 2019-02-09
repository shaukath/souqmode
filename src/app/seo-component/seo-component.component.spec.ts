import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoComponentComponent } from './seo-component.component';

describe('SeoComponentComponent', () => {
  let component: SeoComponentComponent;
  let fixture: ComponentFixture<SeoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
