import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header, [app-header]',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  @Input() isSidebarOpen!: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  changeSidebarStatus() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.toggle.emit(this.isSidebarOpen);
  }
}
