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
  columnsToDisplay = [
    'id',
    'title',
    'status',
    'start_date',
    'active',
    'assignee',
    'percent_complete',
  ];
  expandedElement: any | null;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getPolicies().subscribe((data: any[]) => {
      console.log(data);
      this.dataSource = data;
    });
  }
}
