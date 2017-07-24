import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  let by 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // trigger change detection cycle for component
    debugElement = fixture.debugElement.query(By.css('p'));
    htmlElement = debugElement.nativeElement;
  });

  it('should display the counter number on screenof the counter', () => {
    // Assert that the text on screen is of Number: 1
    const result = 'Number: 1';
    expect(htmlElement.textContent).toEqual(result);
  });

  it('should increment the counter number by one', () => {
    // Arrange
    const initialValue = component.counter;

    // Act
    component.increment();
    fixture.detectChanges();
    const newValue = component.counter;

    // Assert
    expect(newValue).toBeGreaterThan(initialValue)
  });

  it('should decrement the counter number by one', () => {
    const initialValue = component.counter;
    component.decrement();
    fixture.detectChanges();
    const newValue = component.counter;
    expect(newValue).toBeLessThan(initialValue);
  })

});
