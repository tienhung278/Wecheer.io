import {Component, OnDestroy, OnInit} from '@angular/core';
import {ImageService} from './image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  imageUrl = '';
  description = '';
  timestamp: Date = new Date();
  lastHourCount = 0;
  interval: any;

  constructor(private imageService: ImageService) {
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.refreshData();
    this.interval = setInterval(() => this.refreshData(), 5000);
  }

  refreshData(): void {
    this.imageService.getLastImageEvent().subscribe(response => {
      this.imageUrl = response.image?.imageUrl;
      this.description = response.image?.description;
      this.timestamp = response.image?.timestamp;
      this.lastHourCount = response.lastHourCount;
    });
  }
}
