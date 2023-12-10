import { Component } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getData().subscribe((result) => {
      this.data = result.sort((a: any, b: any) => a.price - b.price);
    });
  }
}
