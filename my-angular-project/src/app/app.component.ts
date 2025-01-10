import { Component } from '@angular/core';
import { GlobalVariableService } from './services/global-variable.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  currentDate: string = ""
  selectedFile: string = "test ppt"
  showGemini: boolean = false
  readonly images = [{
    name: "Centralized-Configuration-Set-Level-Agent-Cache-Sync.png",
    source: "Centralized-Configuration-Set-Level-Agent-Cache-Sync.ppt",
    lastAceesed: "last accessed in Prod MAS machine",
    lastModified: "last modified: 2:57 PM Jan 10"
  }, {
    name: "Customize-Win11-start-menu-layout.png",
    source: "Customize-Win11-start-menu-layout.ppt",
    lastAceesed: "last accessed in Windows 2016 machine",
    lastModified: "last modified: 10:57 PM Jan 10"
  }, {
    name: "Deep-Dive-into-Singleton.png",
    source: "Deep-Dive-into-Singleton.ppt",
    lastAceesed: "last accessed in Windows 11 machine",
    lastModified: "last modified: 12:35 PM Jan 10"
  }, {
    name: "WEM-Agent-Enrollment.png",
    source: "WEM-Agent-Enrollment.ppt",
    lastAceesed: "last accessed in Prod MAS machine",
    lastModified: "last modified: 2:57 PM Jan 9"
  }, {
    name: "WEM-Open.png",
    source: "WEM-Open.ppt",
    lastAceesed: "last accessed in Prod MAS machine",
    lastModified: "last modified: 18:40 PM Jan 8"
  }, {
    name: "WEM-Sharing-Grafana-Sharing.jpg",
    source: "WEM-Sharing-Grafana-Sharing.ppt",
    lastAceesed: "last accessed in Windows 2022 machine",
    lastModified: "last modified: 2:57 PM Jan 8"
  }]

  constructor(public _globalVariableSvc: GlobalVariableService) {
    const now = new Date();
    this.currentDate = now.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  onFileSelected(fileName: string) {
    this.selectedFile = fileName;
    this.showGemini = true;
  }
}
