import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isStatistics:Boolean=true

  constructor(private electronService: ElectronService) { }

  ngOnInit(): void { }

  resize(e :Event, size : string){
    e.preventDefault();
    this.electronService.ipcRenderer.send('resize', size);
  }

}
