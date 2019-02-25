import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {SearchPageComponent} from './pages/search-page.component';
import {ReservationsPageComponent} from './pages/reservations-page.component';
import {AppShellAWComponent} from './adaptive-widgets/app-shell-aw/app-shell-aw.component';
import {FilterListAWComponent} from './adaptive-widgets/filter-list-aw/filter-list-aw.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AdaptationController, CBAUIModule} from 'cbaui';
import {NoolsRuleEngine} from './rule-evaluator/nools.rule-evaluator';
import {NetworkCP} from './context-provider/network-cp.service';
import {LocalRP} from './rule-provider/local-rp.service';
import {CheckPageComponent} from './pages/check-page.component';
import {UserService} from './services/user.service';
import {UserInfoCP} from './context-provider/user-info-cp.service';
import { HideableButtonAWComponent } from './adaptive-widgets/hideable-button-aw/hideable-button-aw.component';
import {ReadPageComponent} from './pages/read-page.component';
import {ScanPageComponent} from './pages/scan-page.component';
import {LogoutPageComponent} from './pages/logout-page.component';
import {CameraInfoCP} from './context-provider/camera-info-cp.service';

const routes: Routes = [
  {
    path: '',
    component: SearchPageComponent
  },
  {
    path: 'check',
    component: CheckPageComponent
  },
  {
    path: 'reservations',
    component: ReservationsPageComponent
  },
  {
    path: 'scan',
    component: ScanPageComponent
  },
  {
    path: 'read/:title',
    component: ReadPageComponent
  },
  {
    path: 'logout',
    component: LogoutPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    ReservationsPageComponent,
    CheckPageComponent,
    ReadPageComponent,
    ScanPageComponent,
    LogoutPageComponent,

    AppShellAWComponent,
    FilterListAWComponent,
    HideableButtonAWComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CBAUIModule,
  ],
  providers: [
    NetworkCP,
    UserInfoCP,
    CameraInfoCP,
    LocalRP,
    NoolsRuleEngine
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(aui: AdaptationController) {
    aui.registerContextProvider(NetworkCP);
    aui.registerContextProvider(UserInfoCP);
    aui.registerContextProvider(CameraInfoCP);
    aui.registerRuleProvider(LocalRP);
    aui.registerRuleEvaluator(NoolsRuleEngine);
  }
}
