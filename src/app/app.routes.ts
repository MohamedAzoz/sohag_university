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
import { ExamFormComponent } from './component/Controls/student/Forms/exam-form/exam-form.component';
import { ExamHomeComponent } from './component/Controls/student/home_Manager/exam-home/exam-home.component';
import { UpdateExamComponent } from './component/Controls/student/Forms/update-exam/update-exam.component';
import { TestHomeComponent } from './component/Controls/student/home_Manager/test-home/test-home.component';
import { TestFormComponent } from './component/Controls/student/Forms/test-form/test-form.component';
import { UpdateTestComponent } from './component/Controls/student/Forms/update-test/update-test.component';
import { UpdateReviewComponent } from './component/Controls/student/Forms/update-review/update-review.component';
import { ReviewFormComponent } from './component/Controls/student/Forms/review-form/review-form.component';
import { ReviewHomeComponent } from './component/Controls/student/home_Manager/review-home/review-home.component';
import { UpdateSummaryComponent } from './component/Controls/student/Forms/update-summary/update-summary.component';
import { SummaryFormComponent } from './component/Controls/student/Forms/summary-form/summary-form.component';
import { SummaryHomeComponent } from './component/Controls/student/home_Manager/summary-home/summary-home.component';

export const routes: Routes = [
  {path:"", redirectTo:"",pathMatch:'full'},
  {path:"",component:MainComponent,children:[
    {path:"",component:HomeComponent , title:"جامعة سوهاج"},
    {path:"login",component:LoginComponent , title:"Login"},
    {path:"college/:id", component:CollegeComponent , title:"College"},
  ]},
  {path:"Dashboard", component:MainDashboardComponent , title:"Dashboard",canActivate:[authGuardGuard],children:[
    {path:"Admin",component:AdminDashboardComponent , title:"Admin",canActivate:[authGuardGuard]},
    {path:"student",component:StudentDashboardComponent , title:"student",canActivate:[authGuardGuard]},
    {path:"Doctor",component:DoctorDashboardComponent , title:"Doctor",canActivate:[authGuardGuard]},
    {path:"summarymanager",component:SummaryManagerComponent , title:"Summary Manager",canActivate:[authGuardGuard],children:[
      {path:"", redirectTo:"summaryhome",pathMatch:'full'},
      {path:"summaryhome",component:SummaryHomeComponent , title:"Summary Home",canActivate:[authGuardGuard]},
      {path:"summaryform",component:SummaryFormComponent , title:"Summary Form",canActivate:[authGuardGuard]},
      {path:"updatesummary",component:UpdateSummaryComponent , title:"Update Summary",canActivate:[authGuardGuard]},
    ]},
    {path:"reviewmanager",component:ReviewManagerComponent , title:"Review Manager",canActivate:[authGuardGuard],children:[
      {path:"", redirectTo:"reviewhome",pathMatch:'full'},
      {path:"reviewhome",component:ReviewHomeComponent , title:"Review Home",canActivate:[authGuardGuard]},
      {path:"reviewform",component:ReviewFormComponent , title:"Review Form",canActivate:[authGuardGuard]},
      {path:"updatereview",component:UpdateReviewComponent , title:"Update Review",canActivate:[authGuardGuard]},
    ]},
    {path:"testmanager",component:TestManagerComponent , title:"Test Manager",canActivate:[authGuardGuard],children:[
      {path:"", redirectTo:"testhome",pathMatch:'full'},
      {path:"testhome",component:TestHomeComponent , title:"Test Home",canActivate:[authGuardGuard]},
      {path:"testform",component:TestFormComponent , title:"Test Form",canActivate:[authGuardGuard]},
      {path:"updatetest",component:UpdateTestComponent , title:"Update Test",canActivate:[authGuardGuard]},
    ]},
    {path:"exammanager",component:ExamManagerComponent , title:"Exam Manager",canActivate:[authGuardGuard],children:[
      {path:"", redirectTo:"examhome",pathMatch:'full'},
      {path:"examhome",component:ExamHomeComponent , title:"Exam Home",canActivate:[authGuardGuard]},
      {path:"examform",component:ExamFormComponent , title:"Exam Form",canActivate:[authGuardGuard]},
      {path:"updateexam",component:UpdateExamComponent , title:"Update Exam",canActivate:[authGuardGuard]},
    ]},
    {path:"addCollege",component:FormAddCollegeComponent , title:"addCollege",canActivate:[authGuardGuard]},
    {path:"updateCollege",component:FormUpdateCollegeComponent , title:"updateCollege",canActivate:[authGuardGuard]},
    {path:"deleteCollege",component:FormDeleteCollegeComponent , title:"deleteCollege",canActivate:[authGuardGuard]},
    {path:"updateSubject",component:FormUpdateSubjectComponent , title:"updateSubject",canActivate:[authGuardGuard]},
    {path:"deleteSubject",component:FormDeleteSubjectComponent , title:"deleteSubject",canActivate:[authGuardGuard]},
  ]},
  {path:"**",component:ErrorComponent , title:"not found"}
];
