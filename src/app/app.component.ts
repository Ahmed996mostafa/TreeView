import { Component } from '@angular/core';
import { CMLItemGroupDto } from './tree-view/tree-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TreeView';
  CMLItemGroups:CMLItemGroupDto[]=[];
  ngOnInit(): void {
  this.CMLItemGroups = [
    {
      Id: 1,
      parentCMItemGroupId: null,
      groupCode: 'GRP001',
      localeCMItemGroupName: 'Electronics',
      latinCMItemGroupName: 'Electronics',
      cmItemGroupTreeLevel: 1,
     
      childs: [
        {
          Id: 2,
          parentCMItemGroupId: 1,
          groupCode: 'GRP001-01',
          localeCMItemGroupName: 'Mobile Phones',
          latinCMItemGroupName: 'Mobile Phones',
          cmItemGroupTreeLevel: 2,
        
          childs: [
            {
              Id: 3,
              parentCMItemGroupId: 2,
              groupCode: 'GRP001-01-01',
              localeCMItemGroupName: 'Smartphones',
              latinCMItemGroupName: 'Smartphones',
              cmItemGroupTreeLevel: 3,
              isExpanded: false,
              childs: [],
              Name: 'Smartphones'
            }
          ],
          Name: 'Mobile Phones'
        },
        {
          Id: 4,
          parentCMItemGroupId: 1,
          groupCode: 'GRP001-02',
          localeCMItemGroupName: 'Laptops',
          latinCMItemGroupName: 'Laptops',
          cmItemGroupTreeLevel: 2,
        
          childs: [],
          Name: 'Laptops'
        }
      ],
      Name: 'Electronics'
    },
    {
      Id: 5,
      parentCMItemGroupId: null,
      groupCode: 'GRP002',
      localeCMItemGroupName: 'Home Appliances',
      latinCMItemGroupName: 'Home Appliances',
      cmItemGroupTreeLevel: 1,
    
      childs: [
        {
          Id: 6,
          parentCMItemGroupId: 5,
          groupCode: 'GRP002-01',
          localeCMItemGroupName: 'Refrigerators',
          latinCMItemGroupName: 'Refrigerators',
          cmItemGroupTreeLevel: 2,
         
          childs: [],
          Name: 'Refrigerators'
        },
        {
          Id: 7,
          parentCMItemGroupId: 5,
          groupCode: 'GRP002-02',
          localeCMItemGroupName: 'Washing Machines',
          latinCMItemGroupName: 'Washing Machines',
          cmItemGroupTreeLevel: 2,
         
          childs: [],
          Name: 'Washing Machines'
        }
      ],
      Name: 'Home Appliances'
    }
  ];
}
}
