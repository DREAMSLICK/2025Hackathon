import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatLoadModule } from './mat_load.module';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatLoadModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [[{ provide: APP_BASE_HREF, useValue: '/2025HackathonStaticPages/my-angular-project/' }]],
  bootstrap: [AppComponent]
})
export class AppModule { }
