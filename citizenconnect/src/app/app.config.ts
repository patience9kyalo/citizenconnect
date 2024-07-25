import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import {  provideAnimations } from '@angular/platform-browser/animations';

import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore } from '@ngrx/store';
import { AuthEffects } from './State/Effects/auth.effects';
import { authReducer } from './State/Reducers/auth.reducers';
import { provideHttpClient } from '@angular/common/http';
import { IncidentEffects } from './State/Effects/incident.effects';
import { incidentReducer } from './State/Reducers/incident.reducers';
import { PollReducer } from './State/Reducers/polls.reducers';
import { PollEffects } from './State/Effects/polls.effects';
import { viewsReducer } from './State/Reducers/views.reducers';
import { ViewEffects } from './State/Effects/views.effects';
// import { IncidentEffects } from './State/Effects/incident.effects';
// import { incidentReducer } from './State/Reducers/incident.reducers';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
  provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  provideStore({ auth: authReducer, incident: incidentReducer, polls: PollReducer, views: viewsReducer}),
  provideHttpClient(),
  provideEffects([AuthEffects, IncidentEffects, PollEffects, ViewEffects]),
  provideToastr(), provideAnimations()

  ]
};
