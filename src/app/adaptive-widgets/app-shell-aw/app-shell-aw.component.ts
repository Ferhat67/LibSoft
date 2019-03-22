import { Component, Input, OnInit } from '@angular/core';
import { AdaptiveWidget, AdaptationAction, AdaptationController } from 'cobaui';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {UserService} from '../../services/user.service';


export interface MenuItem {
  label: string;
  icon: string;
  path?: string;
  hidden?: boolean;
}

@Component({
  selector: 'app-shell-aw',
  templateUrl: './app-shell-aw.component.html',
  styleUrls: ['./app-shell-aw.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        transform: 'translateX(0%)'
      })),
      state('closed', style({
        opacity: 0,
        transform: 'translateX(-30%)'
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
    trigger('openCloseRight', [
      state('open', style({
        opacity: 1,
        transform: 'translateX(0%)'
      })),
      state('closed', style({
        opacity: 0,
        transform: 'translateX(30%)'
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ])
  ]
})
export class AppShellAWComponent extends AdaptiveWidget implements OnInit {

  @Input('title') title = "";
  @Input('menuItems') menuItems: MenuItem[];
  @Input('color') set HeaderColor(color: string) {
    this.headerColor.background = color || "#00205b";
  }

  isOpen: boolean;
  menuRight: boolean = false;

  menuMode: string = 'normal';
  headerColor: any = { background: "#00205b" };
  sidebarOpen: boolean = false;

  classes = {
    sidebar: {"d-block": false, "order-last": false, "dark-theme": false, "overlay": false},
    toggle: {"order-last": false},
    menu: {"dark-theme": false},
    header: {"dark-theme": false},
    content: {"dark-theme": false},
  };

  constructor(ac: AdaptationController, public userService: UserService) {
    super(ac, "AppShellAW");
  }

  ngOnInit() {
  }

  adapt(action: AdaptationAction) {
    switch (action.name) {
      case "SET_MENU_POSITION":
        const positionRight = action.params.position === 'right';
        this.menuRight = positionRight;
        this.classes.sidebar["sidebar-right"] = positionRight;
        this.classes.toggle["order-last"] = positionRight;
        break;
      case "COMPACT_MODE":
        const active: boolean = action.params.active;
        this.menuMode = (active) ? 'compact' : 'normal';
        break;
      case "SET_DARK_THEME":
        this.classes.sidebar["dark-theme"] = action.params.active;
        this.classes.header["dark-theme"] = action.params.active;
        this.classes.content["dark-theme"] = action.params.active;
        this.classes.menu["dark-theme"] = action.params.active;
        break;
      // LibSoft extension
      case "HIDE_ITEMS":
        const indexes: number[] = action.params.indexes;
        this.menuItems.forEach((item,index) => {
          if (indexes && indexes.includes(index))
            item.hidden = true;
          else
            item.hidden = false;
        });
        break;
    }
  }

  getMenuItems() {
    return this.menuItems.filter(item => !item.hidden);
  }

  toggleSidebar() {
    if (this.sidebarOpen) {
      this.sidebarOpen = false;
      this.classes.sidebar["sidebar-closed"] = true;
      this.classes.sidebar["sidebar-open"] = false;
      this.classes.sidebar["d-block"] = false;
      this.isOpen = false;
      //this.classes.sidebar["d-none"] = true;
      //this.classes.sidebar["overlay"] = false;
    }
    else {
      this.sidebarOpen = true;
      this.isOpen = true;
      this.classes.sidebar["sidebar-open"] = true;
      this.classes.sidebar["sidebar-closed"] = false;
      this.classes.sidebar["d-block"] = true;
      //this.classes.sidebar["d-none"] = false;
      //this.classes.sidebar["overlay"] = true;
    }
  }
}
