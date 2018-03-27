import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { InternalTabsComponent } from './internal-tabs/internal-tabs.component'
import { GeneralInfoComponent } from
  './general-info/general-info.component';
import { routes } from './app.router';
import { CdkTableModule } from '@angular/cdk/table';



import { MtabComponentComponent } from  './mtab-component/mtab-component.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  MatTabsModule, MatSelectModule, MatExpansionModule,
  MatRippleModule
} from '@angular/material';
import { MatCardModule, MatNativeDateModule, MatPaginatorModule, MatDividerModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from
  '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { FacilityInfoComponent } from './facility-info/facility-info.component';
import { AddressDetailsComponent } from './address-details/address-details.component';


//Dialog and MAt 

import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';







//imports by naman
import { DataService } from './services/dataService';
import { TeamComponent } from './proposal-info/team/team.component';
import { ManagementComponent } from './proposal-info/management/management.component';
import { ProfiledialogComponent } from './proposal-info/management/profiledialog/profiledialog.component';
import { ChecksComponent } from './checks/checks.component';
import { PreliminaryComponent } from './checks/preliminary/preliminary.component';
import { EligibilityComponent } from './checks/eligibility/eligibility.component';
import { CustomerComponent } from './checks/customer/customer.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CKEditorModule } from 'ng2-ckeditor';
import { ProposalInfoComponent } from './proposal-info/proposal-info.component';


//imports by shubhash

import { RiskRatingComponent } from './RiskInfo/risk-rating/risk-rating.component';
import { RiskInfoComponent } from './RiskInfo/risk-info/risk-info.component';
import { RiskRatingInternalComponent } from './RiskInfo/risk-rating-internal/risk-rating-internal.component';
import { RiskRatingIfrsComponent } from './RiskInfo/risk-rating-ifrs/risk-rating-ifrs.component';
import { FinParaComponent } from './RiskInfo/RiskRatingInternal/fin-para/fin-para.component';
import { FinTrendsComponent } from './RiskInfo/RiskRatingInternal/fin-trends/fin-trends.component';
import { ManagementRiskComponent } from './RiskInfo/RiskRatingInternal/management-risk/management-risk.component';
import { ContigencyRiskComponent } from './RiskInfo/RiskRatingInternal/contigency-risk/contigency-risk.component';
import { OperationalRiskComponent } from './RiskInfo/RiskRatingInternal/operational-risk/operational-risk.component';
import { IndustryRiskComponent } from './RiskInfo/RiskRatingInternal/industry-risk/industry-risk.component';
import { ScoreSummaryComponent } from './RiskInfo/RiskRatingInternal/score-summary/score-summary.component';
import { AssessmentSqlComponent } from './RiskInfo/assessment-sql/assessment-sql.component';
import { CreditPolicyComponent } from './RiskInfo/credit-policy/credit-policy.component';
import { CreditCheckComponent } from './RiskInfo/credit-check/credit-check.component';
import { AssessmentSqlLimitComponent } from './RiskInfo/assessment-sql-limit/assessment-sql-limit.component';





//facility import--> nishtha
import { FacilityIntTabsComponent } from './facility-info/facility-int-tabs/facility-int-tabs.component';
import { NewExistFacilityComponent } from './facility-info/new-exist-facility/new-exist-facility.component';
import { FacilityRatingComponent } from './facility-info/facility-rating/facility-rating.component';
import { FeedetailComponent } from './facility-info/feedetail/feedetail.component';
import { RepaymentTermsComponent } from './facility-info/repayment-terms/repayment-terms.component';
import { PricingComponent } from './facility-info/pricing/pricing.component';
import { LoanAmmComponent } from './facility-info/loan-amm/loan-amm.component';
import { TermsNdCondnComponent } from './facility-info/terms-nd-condn/terms-nd-condn.component';
import { ExternalAgencyComponent } from './facility-info/external-agency/external-agency.component';
import { OtherBankDataComponent } from './facility-info/other-bank-data/other-bank-data.component';
import { FacilityInfoTabComponent } from './facility-info/facility-info-tab/facility-info-tab.component';
import { BankingReltnTabComponent } from './facility-info/banking-reltn-tab/banking-reltn-tab.component';
import { AddtnlFacilityComponent } from './facility-info/addtnl-facility/addtnl-facility.component';

//import {FormBuilder, FormGroup} from '@angular/forms';
import { ProjectfacilityComponent } from './facility-info/projectfacility/projectfacility.component';

//new add/modify/delete
import { TableDataSource, ValidatorService } from 'angular4-material-table';
import { Component, VERSION, Input, Output, Injectable, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import {

  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';








@NgModule({
  declarations: [


    AppComponent,
    MenubarComponent,
    SidebarComponent,
    GeneralInfoComponent,
    MtabComponentComponent,
    ProposalInfoComponent,
    InternalTabsComponent,
    FacilityInfoComponent,
    AddressDetailsComponent,
    FacilityIntTabsComponent,
    NewExistFacilityComponent,
    FacilityRatingComponent,
    FeedetailComponent,
    RepaymentTermsComponent,
    PricingComponent,
    LoanAmmComponent,
    TermsNdCondnComponent,
    ExternalAgencyComponent,
    OtherBankDataComponent,
    FacilityInfoTabComponent,
    BankingReltnTabComponent,
    AddtnlFacilityComponent,
    ProjectfacilityComponent,

    RiskInfoComponent,
    RiskRatingComponent,

    RiskRatingInternalComponent,
    RiskRatingIfrsComponent,
    FinParaComponent,
    FinTrendsComponent,
    ManagementRiskComponent,
    ContigencyRiskComponent,
    OperationalRiskComponent,
    IndustryRiskComponent,
    ScoreSummaryComponent,
    AssessmentSqlComponent,
    CreditPolicyComponent,
    CreditCheckComponent,
    AssessmentSqlLimitComponent,
    AddressDetailsComponent,
    TeamComponent,
    ManagementComponent,
    ProfiledialogComponent,
    ChecksComponent,
    PreliminaryComponent,
    EligibilityComponent,
    CustomerComponent




  ],
  entryComponents: [ ProfiledialogComponent],

  imports: [
    BrowserModule,
    FormsModule,
    routes,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatCardModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    CKEditorModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,

    NgbModule.forRoot(),
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()

  ],
  exports: [CdkTableModule],
  providers: [DataService],
  bootstrap: [AppComponent]

})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
