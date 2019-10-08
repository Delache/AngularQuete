import { Directive, ElementRef, OnInit , Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverIt]'
})
export class HoverItDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
ngOnInit() {

}
@HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
  this.renderer.setStyle(this.elRef.nativeElement, 'color', 'yellow');
}
@HostListener('mouseleave') mouseleave(eventData: Event) {
  this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
}

}

