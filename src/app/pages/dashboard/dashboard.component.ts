import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@core/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {

  data$ = this.dashboardService.data$;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit(): void {

  }

}
