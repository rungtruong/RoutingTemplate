import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemMoiNhanVienComponent } from './them-moi-nhan-vien.component';

describe('ThemMoiNhanVienComponent', () => {
  let component: ThemMoiNhanVienComponent;
  let fixture: ComponentFixture<ThemMoiNhanVienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemMoiNhanVienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemMoiNhanVienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
