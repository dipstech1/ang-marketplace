import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

enum TEHEM_CLASS {
  DARK_THEME = 'dark-theme',
  LIGHT_THEME = 'light-theme'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitchService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {

    this.setTheme(this.isLightMode);

    console.log(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  }



  get isLightMode(): boolean {

    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

  }


  setTheme(isLightMode: boolean) {

    const theme = isLightMode ? TEHEM_CLASS.LIGHT_THEME : TEHEM_CLASS.DARK_THEME;

    this.removeThemeClass(!isLightMode ? TEHEM_CLASS.LIGHT_THEME : TEHEM_CLASS.DARK_THEME);

    this.document.body.classList.add(theme);

  }


  private removeThemeClass(theme: TEHEM_CLASS) {

    if (this.document.body.classList.contains(theme)) {
      this.document.body.classList.remove(theme);
    }
  }

  toggle(checked:boolean) {

    this.setTheme(checked)
  }
}
