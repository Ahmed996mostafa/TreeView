import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TreeNode } from '../tree-view/tree-view.component';

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
  value: number | null = null;
  isDisable: boolean = false;
  onChange = (value: number | null) => {};
  onTouched = () => {};

  writeValue(obj: any): void {
    if (typeof obj === 'number') {
      this.value = obj;
    } else {
      this.value = null;
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

  
  OnNodeSelect(selectedNode: TreeNode): void {
    this.value = selectedNode.Id;
    console.log(selectedNode.Name);
    this.onChange(this.value);
  }
}

