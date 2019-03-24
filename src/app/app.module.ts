import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material';
import { GameSettingsService } from './game-settings.service';
import { HttpClientModule } from '@angular/common/http';
import { SettingsCardComponent } from './settings-card/settings-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [GameSettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
