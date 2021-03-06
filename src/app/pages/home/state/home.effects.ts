import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromHomeActions from "./home.actions";
import { WeatherService } from "src/app/shared/services/weather.service";

@Injectable()
export class HomeEffects{

   loadCurrentWeather$ = createEffect(()=>this.actions$
     .pipe(
       ofType(fromHomeActions.loadCurrentWeather),
       mergeMap(({query}) => this.weatherService.getCityWeatherByQuery(query)),
       catchError((err, caught$) => {
           this.store.dispatch(fromHomeActions.loadCurrentWeatherFailled());
           return caught$;
       }),
       map((entity:any) => fromHomeActions.loadCurrentWeatherSucess({entity})), 
      ),
    );

    constructor(private actions$:Actions,
                private store: Store,
                private weatherService: WeatherService){
    }
}
