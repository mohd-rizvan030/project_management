import { Component, Input} from '@angular/core';
import { GoogleChartComponent} from './../google-chart/google-chart.component';

@Component({
  selector: 'app-project-chart',
  templateUrl: './project-chart.component.html'
})
export class ProjectChartComponent extends GoogleChartComponent {
  @Input() projectStatus;
  private options;
  private data;
  private chart;
  constructor(){
    super();
  }

  drawGraph(){
    this.data = this.createDataTable([
          ['Task', 'Tasks per Project'],
          ['Done', this.projectStatus["done"]],
          ['In progres', this.projectStatus["inProgress"]],
          ['New',this.projectStatus["new"]],
        ]);

    this.options = {
      title: this.projectStatus["projectName"]
    };

    this.chart = this.createPieChart(document.getElementById('piechart'+this.projectStatus['projectName']));
    this.chart.draw(this.data, this.options);
  }
}
