import { Component } from '@angular/core';
import { ConnectorModel, DataBinding, Diagram, HierarchicalTree,  LayoutModel, NodeModel } from '@syncfusion/ej2-angular-diagrams';
import { DataManager } from '@syncfusion/ej2-data';
Diagram.Inject(DataBinding, HierarchicalTree);

export interface EmployeeInfo{
  Name: string
}

@Component({
  selector: 'app-organogram-ranks',
  templateUrl: './organogram-ranks.component.html',
  styleUrls: ['./organogram-ranks.component.css']
})
export class OrganogramRanksComponent {
  drag = false;
  public defaultConnectorValues(defaultconnector: ConnectorModel): ConnectorModel {
    defaultconnector.type = "Orthogonal";

    defaultconnector.visible = true;
    return defaultconnector;
  }
  public defaultNodeValues (defaultNode: NodeModel) : NodeModel {
    defaultNode.height = 50;
    defaultNode.width = 100;
    defaultNode.annotations = [
      {
        content: (defaultNode.data as EmployeeInfo).Name
      }
    ]

    return defaultNode;
  }
  public layoutSettings: LayoutModel = {
    type: "OrganizationalChart"
  }
  public employeeData: Object[]=[
    { Name: "1stRank", Role: "Director", Rank:"0"},
    { Name: "2ndRank", ReportingTo:"1stRank", Role: "Managing departments", Rank: "1"},
    { Name: "3ndRank", ReportingTo:"2ndRank", Role: "Managing departments", Rank: "2"},
    { Name: "4ndRank", ReportingTo:"3ndRank", Role: "Managing departments7", Rank: "3"},
    { Name: "5ndRank", ReportingTo:["1stRank", ""], Role: "Managing departments", Rank: "4"}
  ];

  public jsonDatasourceSettings: Object = {
    id: "Name",
    parentId: "ReportingTo",
    root: "Rank",
    dataSource: new DataManager(this.employeeData as JSON[])
  };
}
