import { Component, OnInit,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // created a new event so its feature that we press on click is available on app.component
  //  so it can listen to the click and decide which page will display
@Output()  featureSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

}
