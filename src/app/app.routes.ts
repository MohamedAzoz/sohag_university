import { Routes } from '@angular/router';
import { HomeComponent } from './component/app-home/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { MainComponent } from './component/main/main.component';
import { LoginComponent } from './component/app-home/login/login.component';
import { CollegeComponent } from './component/college/college.component';
import { MainDashboardComponent } from './component/Controls/main-dashboard/main-dashboard.component';
import { FormAddCollegeComponent } from './component/Controls/Admin/form-add-college/form-add-college.component';
import { FormUpdateCollegeComponent } from './component/Controls/Admin/form-update-college/form-update-college.component';
import { FormDeleteCollegeComponent } from './component/Controls/Admin/form-delete-college/form-delete-college.component';
import { FormUpdateSubjectComponent } from './component/Controls/Admin/form-update-subject/form-update-subject.component';
import { FormDeleteSubjectComponent } from './component/Controls/Admin/form-delete-subject/form-delete-subject.component';
import { authGuardGuard } from './guard/auth-guard.guard';
import { StudentDashboardComponent } from './component/Controls/student-dashboard/student-dashboard.component';
import { DoctorDashboardComponent } from './component/Controls/doctor-dashboard/doctor-dashboard.component';
import { AdminDashboardComponent } from './component/Controls/admin-dashboard/admin-dashboard.component';
import { SummaryManagerComponent } from './component/Controls/student/Manager/summary-manager/summary-manager.component';
import { ReviewManagerComponent } from './component/Controls/student/Manager/review-manager/review-manager.component';
import { TestManagerComponent } from './component/Controls/student/Manager/test-manager/test-manager.component';
import { ExamManagerComponent } from './component/Controls/student/Manager/exam-manager/exam-manager.component';

export const routes: Routes = [
  {path:"", redirectTo:"",pathMatch:'full'},
  {path:"",component:MainComponent,children:[
    {path:"",component:HomeComponent , title:"جامعة سوهاج"},
    {path:"login",component:LoginComponent , title:"login"},
    {path:"college/:id", component:CollegeComponent , title:"College"},
  ]},
  {path:"Dashboard", component:MainDashboardComponent , title:"Dashboard",canActivate:[authGuardGuard],children:[
    {path:"Admin",component:AdminDashboardComponent , title:"Admin",canActivate:[authGuardGuard]},
    {path:"student",component:StudentDashboardComponent , title:"student",canActivate:[authGuardGuard]},
    {path:"Doctor",component:DoctorDashboardComponent , title:"Doctor",canActivate:[authGuardGuard]},
    {path:"summarymanager",component:SummaryManagerComponent , title:"Summary Manager",canActivate:[authGuardGuard]},
    {path:"reviewmanager",component:ReviewManagerComponent , title:"Review Manager",canActivate:[authGuardGuard]},
    {path:"testmanager",component:TestManagerComponent , title:"Test Manager",canActivate:[authGuardGuard]},
    {path:"exammanager",component:ExamManagerComponent , title:"Exam Manager",canActivate:[authGuardGuard]},
    {path:"addCollege",component:FormAddCollegeComponent , title:"addCollege",canActivate:[authGuardGuard]},
    {path:"updateCollege",component:FormUpdateCollegeComponent , title:"updateCollege",canActivate:[authGuardGuard]},
    {path:"deleteCollege",component:FormDeleteCollegeComponent , title:"deleteCollege",canActivate:[authGuardGuard]},

    {path:"updateSubject",component:FormUpdateSubjectComponent , title:"updateSubject",canActivate:[authGuardGuard]},
    {path:"deleteSubject",component:FormDeleteSubjectComponent , title:"deleteSubject",canActivate:[authGuardGuard]},
  ]},
  // {path:"",component:HomeComponent , title:""},
  {path:"**",component:ErrorComponent , title:"not found"}
];
