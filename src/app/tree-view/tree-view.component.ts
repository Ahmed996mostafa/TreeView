import { Component, ElementRef, EventEmitter, Input, output, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tree-select-dropdown',
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.scss'
})
export class TreeViewComponent {
  @Input() nodes: TreeNode[] = [];
  @Output() selectedValue = new EventEmitter<TreeNode>();
  @Input() inputValue: string = '';
  @Input() isOpen = false;
  @ViewChild('dropdown') dropdown!: ElementRef;
  selectedNode: TreeNode | null = null;

  toggleDropdown(node?: TreeNode, event?: Event) {
    console.log(node?.isExpanded&&node.childs && node.childs.length > 0)
    if (event) {
      event.stopPropagation();
    }
    if (node) {
      node.isExpanded = !node.isExpanded; 
    } else {
      this.isOpen = !this.isOpen; 
    }
  }

  selectNode(node: TreeNode, event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.selectedNode = node; 
    this.inputValue = node.name; 
    this.selectedValue.emit(node); 
    this.isOpen = false; 
    console.log( node.childs && node.childs.length > 0)
  }

 

 
 
}

export class TreeNode {
  isExpanded?: boolean=false;
  childs: any;
  id: number=-1;
  name: string='';

  constructor() {
    this.isExpanded = false;
  }
  
}

export class MMLItemGroupDto extends TreeNode {
  parentMMItemGroupId?: number | null=null;
  groupCode: string='';
  localeMMItemGroupName: string='';
  latinMMItemGroupName: string='';
  mmItemGroupTreeLevel: number=-1;
}