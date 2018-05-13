import { Component, OnInit} from '@angular/core';
declare var google:any;
@Component({
  selector: 'chart',
  templateUrl: './google-chart.component.html'
})
export class GoogleChartComponent implements OnInit {
  private static googleLoaded:any;

  constructor(){

  }

  ngOnInit() {
    if(!GoogleChartComponent.googleLoaded) {
      GoogleChartComponent.googleLoaded = true;
      google.charts.load('current',  { packages: ['corechart'] });
    }
    google.charts.setOnLoadCallback(() => this.drawGraph());
  }

  drawGraph(){
  }

  createPieChart(element:any):any {
      return new google.visualization.PieChart(element);
  }

  createDataTable(array:any[]):any {
      return google.visualization.arrayToDataTable(array);
  }
}
