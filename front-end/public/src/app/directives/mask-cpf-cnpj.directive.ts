import { Directive, ElementRef, Renderer2, HostListener, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMaskCpfCnpj]'
})
export class MaskCpfCnpjDirective implements OnInit {

  private keyCodesValid: number[] = [
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    48,
    9,
    40,
    38,
    39,
    37,
    8,
    46,
    144
  ];

  @Output()
  cpfCnpjValid: EventEmitter<boolean> = new EventEmitter()

  constructor(private el: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.addMaxLength();
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const keyCode = event.keyCode;
    if (this.keyCodesValid.indexOf(keyCode) == -1) {
      event.preventDefault();
    }
  }

  @HostListener('blur')
  onBlur() {
    if (!this.isCpf() && !this.isCnpj()) {
      this.cpfCnpjValid.emit(false);
      return;
    } 
    if (this.isCpf()) {
      this.addMaxLength();
      this.renderer.setProperty(this.el.nativeElement, 'value', this.maskCpf());
    } else if (this.isCnpj()) {
      this.addMaxLength('18');
      this.renderer.setProperty(this.el.nativeElement, 'value', this.maskCnpj());
    }
    this.cpfCnpjValid.emit(true);
  }

  addMaxLength(maxLength: string = '14') {
    this.renderer.setAttribute(this.el.nativeElement, 'maxlength', maxLength);
  }

  maskCpf() {
    let value: string = this.el.nativeElement.value;
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return value;
  }

  maskCnpj() {
    let value: string = this.el.nativeElement.value;
    value = value.replace(/^(\d{2})(\d)/, '$1.$2');
    value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
    value = value.replace(/(\d{4})(\d)/, '$1-$2');
    return value
  }

  isCpf() {
    return this.el.nativeElement.value.length == 11;
  }

  isCnpj() {
    return this.el.nativeElement.value.length == 14;
  }
}
