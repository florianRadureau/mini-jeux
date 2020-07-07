import { Component, EventEmitter, HostListener, Input, OnInit, Output, Self } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {
  @Input() title = '';
  @Output() onPressed = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click')
  onClick() {
    this.onPressed.emit();
  }

}
