import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared.module';
import { HttpListenerInterceptor } from "./common/http-listener.interceptor";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LayoutBaseComponent } from './pages/layout-base/layout-base.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './pages/search/search.component';
import { MessageService } from 'primeng/api';
import { ConvertThousandsPipe } from './pipes/convert-thousands.pipe';
import { TrimPipe } from './pipes/trim.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutBaseComponent,
    FooterComponent,
    SearchComponent,
    ConvertThousandsPipe,
    TrimPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    HttpClientModule,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpListenerInterceptor,
      multi: true,
    },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
