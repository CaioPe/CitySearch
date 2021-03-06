import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CityWeather } from 'src/app/shared/models/weather.model';

import * as fromHomeActions from '../../state/home.actions';
import * as fromHomeSelector from '../../state/home.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})

export class HomePage implements OnInit {

  cityWeather$: Observable<CityWeather>;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  searchControl: FormControl;
  text: string;

  constructor(private store:Store) { 
  }

  ngOnInit(){
    this.searchControl = new FormControl('', Validators.required);

    this.cityWeather$ = this.store.pipe(select(fromHomeSelector.selectCurrentWeather));
    this.loading$ = this.store.pipe(select(fromHomeSelector.selectCurrentWeatherLoading));
    this.error$ = this.store.pipe(select(fromHomeSelector.selectCurrentWeatherError));
  }

  doSearch()  {
    const query = this.searchControl.value;
    this.store.dispatch(fromHomeActions.loadCurrentWeather({query}));
  }

}
