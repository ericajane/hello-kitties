import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take, map } from 'rxjs/operators';


@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})

export class CounterComponent {
    name = 'Angular';
  rxjsValue$: Observable<number>;

  ngOnInit() {
    this.rxjsValue$ = interval(1000).pipe(map(r => r + 1));
  }
}
