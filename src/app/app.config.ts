import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { LucideAngularModule, Globe, Search, User, Twitter, Facebook, Linkedin } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(LucideAngularModule.pick({ Globe, Search, User, Twitter, Facebook, Linkedin }))
  ]
};
