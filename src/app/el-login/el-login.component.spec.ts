import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElLoginComponent } from './el-login.component';

describe('ElLoginComponent', () => {
  let component: ElLoginComponent;
  let fixture: ComponentFixture<ElLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
