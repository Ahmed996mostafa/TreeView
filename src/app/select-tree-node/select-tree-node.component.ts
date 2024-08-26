import { Component,  forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TreeNode } from '../tree-view/tree-view.component';
import { ConnectedPosition } from '@angular/cdk/overlay';


@Component({
  selector: 'app-select-tree-node',
  templateUrl: './select-tree-node.component.html',
  styleUrl: './select-tree-node.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectTreeNodeComponent),
      multi: true
    }
  ]
})
export class SelectTreeNodeComponent implements ControlValueAccessor {
  @Input() Items: TreeNode[] = [];
  SelectedId: number | null = null;
  isDisable: boolean = false;
  SelectedName: string = '';
  detailsOpen=false
  onChange = (value: number | null) => {};
  onTouched = () => {};

 

  positions: ConnectedPosition[] = [
    {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top',
   
    },
    {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top',
     
    }
  ];

  writeValue(obj: any): void {
    if (typeof obj === 'number') {
      if(obj!=-1){
        this.SelectedId = obj;
      } 
    } else {
      this.SelectedId = null;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisable = isDisabled;
  }

  openList(){
    this.detailsOpen = !this.detailsOpen
  }


  OnNodeSelect(selectedNode: TreeNode): void {
    if(selectedNode.id==-1){
      this.SelectedId = null;
    }
    else{
      this.SelectedId = selectedNode.id;
    }
    //this.SelectedId = selectedNode.Id;
    this.SelectedName = selectedNode.name;
    console.log(selectedNode.name);
    this.onChange(this.SelectedId);
    this.detailsOpen = false; 
  }


 
}

