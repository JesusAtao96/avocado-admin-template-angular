import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar, [app-sidebar]',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
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
