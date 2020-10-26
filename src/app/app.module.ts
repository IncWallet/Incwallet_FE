import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbWindowModule,
  NbTabsetModule,
} from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { PagesSharedModule } from './pages/pages-shared.module';
import { GlobalErrorHandler } from './infrastructure/global-error-handler';
import { HttpErrorInterceptor } from './infrastructure/http-error-interceptor';
import { ToastrModule } from 'ngx-toastr';
import { SharedService } from './infrastructure/service/shared.service';
import { AuthGuard } from './infrastructure/auth.guard';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    PagesSharedModule,
    NbTabsetModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    TranslateModule.forRoot(),
    ToastrModule.forRoot({
        timeOut: 4000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        autoDismiss: true,
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
  ],
  providers: [
    [
      SharedService,
    ],
    AuthGuard,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
