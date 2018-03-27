import {ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { Route } from '@angular/router/src/config';
import { MenubarComponent } from './menubar/menubar.component';
import { ChecksComponent } from './checks/checks.component';


import {FacilityInfoComponent} from './facility-info/facility-info.component';
import {FacilityIntTabsComponent} from './facility-info/facility-int-tabs/facility-int-tabs.component';
import { ProposalInfoComponent } from './proposal-info/proposal-info.component';
import { RiskInfoComponent } from './RiskInfo/risk-info/risk-info.component';

export const router: Routes = [
{ path:'', redirectTo:'',pathMatch:'full'},
{ path:'generalinfo', component:GeneralInfoComponent},
{path:'menubar', component:MenubarComponent},
{path:'facility-info',component:FacilityIntTabsComponent},
{path:'checks',component:ChecksComponent},
{path:'proposal-info',component:ProposalInfoComponent},
{path:'risk-info',component:RiskInfoComponent}

];

export const routes:ModuleWithProviders = RouterModule.forRoot(router);
