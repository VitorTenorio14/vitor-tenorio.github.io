import { Directive, ElementRef, AfterViewInit } from '@angular/core';


@Directive({ selector: '[fadeIn]', standalone: true })
export class FadeInDirective implements AfterViewInit {
constructor(private el: ElementRef) {}


ngAfterViewInit() {
const observer = new IntersectionObserver(([entry]) => {
if (entry.isIntersecting) {
entry.target.classList.remove('opacity-0', 'translate-y-6');
entry.target.classList.add('opacity-100', 'translate-y-0');
observer.disconnect();
}
}, { threshold: 0.1 });


observer.observe(this.el.nativeElement);
}
}