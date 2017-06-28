import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstModule } from './first-module/first.module';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormNgModelComponent } from './demo-form-ng-model/demo-form-ng-model.component';
import { AnalyticsService } from './analytics.service';
import {
  AnalyticsImplementation,
  Metric
} from './analytics-demo.interface';
import {
  Http,
  HttpModule
} from '@angular/http';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import {
  YOUTUBE_API_KEY,
  YOUTUBE_API_URL,
  youTubeSearchInjectables
} from './youtube-search.injectables';
import { SearchBoxComponent } from './search-box/search-box.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { MoreHttpRequestsComponent } from './more-http-requests/more-http-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormNgModelComponent,
    SimpleHttpComponent,
    SearchBoxComponent,
    YoutubeSearchComponent,
    MoreHttpRequestsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FirstModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: YOUTUBE_API_KEY,
      useValue: YOUTUBE_API_KEY
    },
    {
      provide: YOUTUBE_API_URL,
      useValue: YOUTUBE_API_URL
    },
    youTubeSearchInjectables,
    {
      provide: 'API_URL',
      useValue: 'Some value in here'
    },
    { // Configurable service sample
      provide: AnalyticsService,
      
      // add our `deps` to specify the factory depencies
      deps: [Http, 'API_URL' ],
      
      // has to match the order of deps parameters
      useFactory(http: Http, apiUrl: string) {
        
        // create an implementation that will log the event
        const loggingImplementation: AnalyticsImplementation = {
          recordEvent: (metric: Metric): void => {
            console.log('The metric is:', metric);
          }
        };
        
        // create our new `AnalyticsService` with the implementation
        return new AnalyticsService(loggingImplementation);
      }
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
