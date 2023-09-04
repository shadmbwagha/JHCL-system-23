import { Component} from '@angular/core';
import { ConnectorModel, DataBinding,Diagram, HierarchicalTree, LayoutModel, NodeModel, SnapConstraints, SnapSettingsModel } from '@syncfusion/ej2-angular-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';
Diagram.Inject(DataBinding, HierarchicalTree);
export interface EmployeeInfo {
  Name: string,
  Role: string,
  Rank: string
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
      { content: (defaultnode.data as  EmployeeInfo).Name +"\n("+ (defaultnode.data as  EmployeeInfo).Role+ ")", style: { color: "white" }}
      //{ content: (defaultnode.data as DataInfo)['FirstName'], style: { color: "white" }}
    ];
    if((defaultnode.data as  EmployeeInfo).Rank === "rank0"){
      defaultnode.style = { fill: '#6f409f', strokeColor: 'Transparent', strokeWidth: 1  };
    }
    else if((defaultnode.data as  EmployeeInfo).Rank === "rank1"){
      defaultnode.style = { fill: '#048785', strokeColor: 'Transparent', strokeWidth: 1 };
    }
    else if((defaultnode.data as  EmployeeInfo).Rank === "rank2"){
      defaultnode.style = { fill: '#CC4628 ', strokeColor: 'Transparent', strokeWidth: 1  };
    }
    else if((defaultnode.data as  EmployeeInfo).Rank === "rank3"){
      defaultnode.style = { fill: '#81848A ', strokeColor: 'Transparent', strokeWidth: 1  };
    }
    else{
          defaultnode.style = { fill: '#81848A', strokeColor: 'Transparent', strokeWidth: 1  };

    }
    return defaultnode;

  }
  public layoutSettings: LayoutModel = {
    type: "OrganizationalChart"
  }
  public employeeData: Object[] = [
    { Name: "Elizabeth", Role: "Director", Rank: "rank0" },
    { Name: "Christina", ReportingPerson: "Elizabeth", Role: "Manager", Rank:"rank1"},
    { Name: "Yoshi", ReportingPerson: "Christina", Role: "Lead", Rank: "rank2"},
    { Name: "Philip", ReportingPerson: "Christina", Role: "SalesExecutive", Rank: "rank2"},
    { Name: "John", ReportingPerson: "Yoshi", Role: "Engineer", Rank: "rank3"},
    { Name: "James", ReportingPerson: "Yoshi", Role: "Engineer", Ran: "rank3" },
    { Name: "Robert", ReportingPerson: "Christina", Role: "Lead", Rank: "rank2" },
    { Name: "David", ReportingPerson: "Elizabeth", Role: "Engineer", Rank: "rank3" },
    { Name: "Yang", ReportingPerson: "Elizabeth", Role: "Manager", Rank:"rank1" },
    { Name: "Roland", ReportingPerson: "Yang", Role: "Lead", Rank: "rank2" },
    { Name: "Paul", ReportingPerson: "Roland", Role: "Engineer", Rank: "rank3" },
    { Name: "Yvonne", ReportingPerson: "Yang", Role: "Lead", Rank: "rank2"},
    { Name: "Jack", ReportingPerson: "Yvonne", Role: "Engineer", Rank: "rank3" }
  ];

  public  jsonDataSourceSettings: Object = {
    id : "Name",
    parentId: "ReportingPerson",
    dataSource: new DataManager(this.employeeData as JSON[])
  };

}
