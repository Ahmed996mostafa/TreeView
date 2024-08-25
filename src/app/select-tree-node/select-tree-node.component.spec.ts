import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTreeNodeComponent } from './select-tree-node.component';

describe('SelectTreeNodeComponent', () => {
  let component: SelectTreeNodeComponent;
  let fixture: ComponentFixture<SelectTreeNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectTreeNodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
