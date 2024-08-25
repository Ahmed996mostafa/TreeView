import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.scss'
})
export class TreeViewComponent {
  @Input() nodes: TreeNode[] = [];
  @Output() selectedValue = new EventEmitter<TreeNode>();

  toggle(node: TreeNode, event: Event): void {
  //  event.stopPropagation();
    node.isExpanded = !node.isExpanded;
  }


  selectValue(selectedNode: TreeNode): void {
    this.selectedValue.emit(selectedNode);
  }
}

export class TreeNode {
  isExpanded?: boolean=false;
  childs: any;
  Id: number=0;
  Name: string='';
}

export class CMLItemGroupDto extends TreeNode {
  parentCMItemGroupId?: number | null=null;
  groupCode: string='';
  localeCMItemGroupName: string='';
  latinCMItemGroupName: string='';
  cmItemGroupTreeLevel: number=0;
}