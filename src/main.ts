import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import '@fontsource/poppins';
import '@fontsource-variable/sen';
import '@fontsource/roboto';
import '@fontsource-variable/geologica';
import '@fontsource-variable/montserrat';
import '@fontsource-variable/fraunces';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
