import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPortfolio';

  constructor(private translate: TranslateService){

  }
  switchLanguage(lang: 'sk' | 'en'){
    this.translate.use(lang);
  }
}
