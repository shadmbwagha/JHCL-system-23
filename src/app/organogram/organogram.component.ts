import { Component} from '@angular/core';
import { ConnectorModel, DataBinding,Diagram, HierarchicalTree, LayoutModel, NodeModel, SnapConstraints, SnapSettingsModel } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';
Diagram.Inject(DataBinding, HierarchicalTree);
export interface EmployeeInfo {
  Name: string,
  Role: string
}
export interface DataInfo {
  [key : string]: string
}

@Component({
  selector: 'app-organogram',
  templateUrl: './organogram.component.html',
  styleUrls: ['./organogram.component.css']
})
export class OrganogramComponent {
  title = 'angular-diagram';
  public RemoteDataSource: Object = {
    id: 'EmployeeID',
    parentId: 'ReportsTo',
    dataSource: new DataManager(
      { url: 'https://mvc.syncfusion.com/Services/Northwnd.svc/', crossDomain: true },
      new Query().from('Employees').select('EmployeeID,ReportsTo,FirstName').take(9)
    )

  };
  public RemoveGridLines: SnapSettingsModel = { constraints: SnapConstraints.None};
  public defaultConnectorValues(defaultconnector: ConnectorModel): ConnectorModel {
    defaultconnector.type = "Orthogonal";
    defaultconnector.style = { strokeColor: '#6f409f', strokeWidth: 2 };
    defaultconnector.targetDecorator = { style : { fill: '#6f409f', strokeColor: '#6f409f' }};
    return defaultconnector;

  }
  public defaultNodeValues(defaultnode: NodeModel): NodeModel{
    defaultnode.height = 50;
    defaultnode.width = 100;
    defaultnode.annotations = [
      { content: (defaultnode.data as  EmployeeInfo).Name, style: { color: "white" }}
      //{ content: (defaultnode.data as DataInfo)['FirstName'], style: { color: "white" }}
    ];
    defaultnode.style = { fill: '#048785', strokeColor: 'Transparent', strokeWidth: 1  };
    return defaultnode;

  }
  public layoutSettings: LayoutModel = {
    type: "OrganizationalChart"
  }
  public employeeData: Object[] = [
    { Name: "Elizabeth", Role: "Director" },
    { Name: "Christina", ReportingPerson: "Elizabeth", Role: "Manager" },
    { Name: "Yoshi", ReportingPerson: "Christina", Role: "Lead" },
    { Name: "Philip", ReportingPerson: "Christina", Role: "SalesExecutive" },
    { Name: "John", ReportingPerson: "Yoshi", Role: "Engineer" },
    { Name: "James", ReportingPerson: "Yoshi", Role: "Engineer" },
    { Name: "Robert", ReportingPerson: "Christina", Role: "Lead" },
    { Name: "David", ReportingPerson: "Elizabeth", Role: "Engineer" },
    { Name: "Yang", ReportingPerson: "Elizabeth", Role: "Manager" },
    { Name: "Roland", ReportingPerson: "Yang", Role: "Lead" },
    { Name: "Paul", ReportingPerson: "Roland", Role: "Engineer" },
    { Name: "Yvonne", ReportingPerson: "Yang", Role: "Lead" },
    { Name: "Jack", ReportingPerson: "Yvonne", Role: "Engineer" }
  ];

  public  jsonDataSourceSettings: Object = {
    id : "Name",
    parentId: "ReportingPerson",
    dataSource: new DataManager(this.employeeData as JSON[])
  };

}
