import { ɵSWITCH_ELEMENT_REF_FACTORY__POST_R3__ } from '@angular/core';
import { createAction, props} from '@ngrx/store';

export const loadCurrentWeather = createAction(
'[Home] Load Current Weather',
props<{ query: string }>(), 
);

export const loadCurrentWeatherSucess = createAction(
    '[Weather API] Load Current Weather Sucess',
    props<{entity: any}>(),
);

export const loadCurrentWeatherFailled = createAction(
    '[Weather API] Load Current Weather Failed',
);