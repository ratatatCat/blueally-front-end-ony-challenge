import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ProjectService } from '../project.service';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'app-project-table',
  templateUrl: './project-table.component.html',
  styleUrls: ['./project-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ProjectTableComponent {
  dataSource = [];
  columns = [
    {
      name: 'id',
      display: 'Request #',
    },
    {
      name: 'title',
      display: 'Project Title',
    },
    {
      name: 'status',
      display: 'Status',
    },
    {
      name: 'start_date',
      display: 'Start Date',
    },
    {
      name: 'active',
      display: 'Active',
    },
    {
      name: 'assignee',
      display: 'Assigned',
    },
    {
      name: 'percent_complete',
      display: '% Complete',
    },
  ];
  columnsToDisplay = this.columns.map((col) => col.name);
  expandedElement: any | null;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getPolicies().subscribe((data: any[]) => {
      console.log(data);
      this.dataSource = data;
    });
  }
}
