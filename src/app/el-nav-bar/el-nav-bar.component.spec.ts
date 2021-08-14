import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElNavBarComponent } from './el-nav-bar.component';

describe('ElNavBarComponent', () => {
  let component: ElNavBarComponent;
  let fixture: ComponentFixture<ElNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
