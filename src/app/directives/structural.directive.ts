import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[structural]'
})
export class StructuralDirective implements OnChanges {

  @Input('structural') public index!: number;
  @Input('structuralPilot') public pilot!: string;
  constructor(
    private readonly vcr: ViewContainerRef,
    private readonly tr: TemplateRef<any>
  ) { }

  ngOnChanges(): void {
    console.log(this.pilot);
    this.hideElements();
  }

  hideElements(): void {
    this.vcr.clear();
    if (this.index % 2 !== 0) {
      this.vcr.createEmbeddedView(this.tr);
    }
  }
}
