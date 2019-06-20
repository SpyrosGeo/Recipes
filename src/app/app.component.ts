import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
loadedFeature = 'recipe';
//changes the state of the deufalt page that is loaded at start
  onNavigate(feature: string){
    this.loadedFeature = feature;

  }
}
