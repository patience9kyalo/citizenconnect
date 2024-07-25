import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AuthGuard } from './Guards/auth.guard';
import { IncidentComponent } from './incident/incident.component';
import { ReportsComponent } from './reports/reports.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { AdminreportsComponent } from './adminreports/adminreports.component';
import { ChatComponent } from './chat/chat.component';
import { ViewsComponent } from './views/views.component';
import { ViewssummaryComponent } from './viewssummary/viewssummary.component';
import { PollQuestionComponent } from './poll-question/poll-question.component';
import { DisplayPollsComponent } from './display-polls/display-polls.component';


export const routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'adminhome', component: AdminhomeComponent },
    { path: 'adminusers', component: AdminusersComponent },
    { path: 'adminreport', component: AdminreportsComponent },
    { path: 'chat ai', component: ChatComponent },
    { path: 'views', component: ViewsComponent },
    { path: 'viewssummary', component: ViewssummaryComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'forgotpassword', component: ForgotpasswordComponent, canActivate:[AuthGuard] },
    { path: 'report', component: IncidentComponent, canActivate:[AuthGuard] },
    { path: 'reports', component: ReportsComponent, canActivate:[AuthGuard] },
    { path: 'addpolls', component: PollQuestionComponent, canActivate:[AuthGuard] },
    { path: 'polls', component: DisplayPollsComponent, canActivate:[AuthGuard] },
    { path: 'gvnincidents', component: ReportsComponent, canActivate:[AuthGuard] },
    { path: 'logout', component: HomeComponent },
    { path: '**', component: HomeComponent }
    
];
