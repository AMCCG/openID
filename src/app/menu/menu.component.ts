import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Application',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'Project' },
          ]
        },
        ]
      },
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Sign In', icon: 'pi pi-fw pi-refresh' },
          { label: 'Sign Out', icon: 'pi pi-fw pi-trash' },
        ]
      }
    ];
  }

}
