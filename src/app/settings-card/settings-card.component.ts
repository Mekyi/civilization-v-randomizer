import { Component, OnInit } from '@angular/core';
import { GameSettingsService } from '../game-settings.service';

import { catchError, map, tap, skipWhile } from 'rxjs/operators';

@Component({
  selector: 'app-settings-card',
  templateUrl: './settings-card.component.html',
  styleUrls: ['./settings-card.component.scss']
})
export class SettingsCardComponent implements OnInit {

  availableSettings = [];
  currentSettings = [];

  constructor(private gameSettingsService: GameSettingsService) { }

  ngOnInit() {
    this.getAvailableSettings();
  }

  getAvailableSettings(): void {
    this.gameSettingsService.getJson()
            .subscribe(res => {
              if (res) {
                this.availableSettings = res.gameSettings;
                this.randomizeSettings();
              }
            });
  }

  randomizeSettings(): void {
    this.randomizeParameter('civilizations');
    this.randomizeParameter('victoryTypes');
    this.randomizeParameter('mapTypes');
    this.randomizeParameter('mapSize');
    this.randomizeParameter('difficulty');
    this.randomizeParameter('gamePace');

    console.log(this.currentSettings);
  }

  randomizeParameter(key: string) {
    let randomizedParameter;
    const currentParameter = this.availableSettings[key];

    randomizedParameter = this.availableSettings[key]
            [this.getRandomInt(currentParameter.length)];
    this.currentSettings.push(randomizedParameter);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
