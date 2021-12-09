import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // see if the user.service is working

  it('fetch data from user service', () => {
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(component.user.name).toBe(userService.user.name)
  });
  // should show user info on the webpage when logged in
  it('should show user info on the webpage when logged in', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement.querySelector('p')

    expect(compiled.textContent).toContain(component.user.name)
    
  });

  // should not show user when not logged in
  it('should not show user name when not logged in', () => {
    component.isLoggedIn = false;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement.querySelector('p')

    expect(compiled.textContent).not.toContain(component.user.name)
    
  });

  it('should store data property from data storage', waitForAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
    expect(component.data).toBe('Data')
    })
  }));
});
