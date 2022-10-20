import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverId = 10;
  serverStatus = 'offlane';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offlane';
  }

  ngOnInit(): void {}

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus.includes('offlane') ? 'red' : 'green';
  }
}
