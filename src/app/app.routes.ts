import { Routes } from '@angular/router';
import { HomeComponent } from './component/app-home/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { MainComponent } from './component/main/main.component';
import { LoginComponent } from './component/app-home/login/login.component';
// import { CollegeComponent } from './component/college/college.component';
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
import { AdminHomeComponent } from './component/Controls/Admin/App_Admin_pages/admin-home/admin-home.component';
import { AddManagerComponent } from './component/Controls/Admin/App_Admin_pages/add-manager/add-manager.component';
import { UpdateManagerComponent } from './component/Controls/Admin/App_Admin_pages/update-manager/update-manager.component';
import { DeleteManagerComponent } from './component/Controls/Admin/App_Admin_pages/delete-manager/delete-manager.component';
import { adminGuardGuard } from './guard/admin-guard.guard';
import { DoctorHomeComponent } from './component/Controls/doctor/doctor-home/doctor-home.component';
import { doctorGuardGuard } from './guard/doctor-guard.guard';
import { FormSubjectComponent } from './component/Controls/Admin/form-subject/form-subject.component';
import { FormAddUserComponent } from './component/Controls/Admin/form-add-user/form-add-user.component';
import { FormUpdateUserComponent } from './component/Controls/Admin/form-update-user/form-update-user.component';
import { FormDeleteUserComponent } from './component/Controls/Admin/form-delete-user/form-delete-user.component';
import { FormUpdateYourDataComponent } from './component/Controls/form-update-your-data/form-update-your-data.component';
import { NoticesComponent } from './component/Controls/doctor/notices/notices.component';
import { UpdateManagerByDoctorComponent } from './component/Controls/doctor/update-manager-by-doctor/update-manager-by-doctor.component';
import { DeleteManagerByDoctorComponent } from './component/Controls/doctor/delete-manager-by-doctor/delete-manager-by-doctor.component';
import { FormAddDepartmentComponent } from './component/Controls/Admin/form-add-department/form-add-department.component';
import { FormUpdateDepartmentComponent } from './component/Controls/Admin/form-update-department/form-update-department.component';
import { FormDeleteDepartmentComponent } from './component/Controls/Admin/form-delete-department/form-delete-department.component';
import { FormAddYearComponent } from './component/Controls/Admin/form-add-year/form-add-year.component';
import { FormDeleteYearComponent } from './component/Controls/Admin/form-delete-year/form-delete-year.component';
import { FormUpdateYearComponent } from './component/Controls/Admin/form-update-year/form-update-year.component';
import { StudentMainHomeComponent } from './component/Controls/student/student-main-home/student-main-home.component';
import { studentGuardGuard } from './guard/student-guard.guard';

export const routes: Routes = [
  {path:"", redirectTo:"",pathMatch:'full'},
  {path:"",component:MainComponent,children:[
    {path:"",component:HomeComponent , title:"جامعة سوهاج"},
    {path:"login",component:LoginComponent , title:"Login"},
    {path:"college/:id",loadChildren: () => import('./component/college/college.component').then(m => m.CollegeComponent), title:"College"},
  ]},
  {path:"student", component:StudentDashboardComponent , title:"Student Dashboard",canActivate:[authGuardGuard],children:[
      {path:"", redirectTo:"student",pathMatch:'full'},
      {path:"student",component:StudentMainHomeComponent , title:"Student",canActivate:[studentGuardGuard]},

      {path:"summarymanager",component:SummaryManagerComponent , title:"Summary Manager",canActivate:[studentGuardGuard],children:[
        {path:"", redirectTo:"summaryhome",pathMatch:'full'},
        {path:"summaryhome",component:SummaryHomeComponent , title:"Summary Home",canActivate:[authGuardGuard]},
        {path:"summaryform",component:SummaryFormComponent , title:"Summary Form",canActivate:[authGuardGuard]},
      ]},

      {path:"reviewmanager",component:ReviewManagerComponent , title:"Review Manager",canActivate:[studentGuardGuard],children:[
        {path:"", redirectTo:"reviewhome",pathMatch:'full'},
        {path:"reviewhome",component:ReviewHomeComponent , title:"Review Home",canActivate:[authGuardGuard]},
        {path:"reviewform",component:ReviewFormComponent , title:"Review Form",canActivate:[authGuardGuard]},
      ]},

      {path:"testmanager",component:TestManagerComponent , title:"Test Manager",canActivate:[studentGuardGuard],children:[
        {path:"", redirectTo:"testhome",pathMatch:'full'},
        {path:"testhome",component:TestHomeComponent , title:"Test Home",canActivate:[authGuardGuard]},
        {path:"testform",component:TestFormComponent , title:"Test Form",canActivate:[authGuardGuard]},
      ]},

      {path:"exammanager",component:ExamManagerComponent , title:"Exam Manager",canActivate:[studentGuardGuard],children:[
        {path:"", redirectTo:"examhome",pathMatch:'full'},
        {path:"examhome",component:ExamHomeComponent , title:"Exam Home",canActivate:[authGuardGuard]},
        {path:"examform",component:ExamFormComponent , title:"Exam Form",canActivate:[authGuardGuard]},
      ]},
  ]},
  {path:"Admin",component:AdminDashboardComponent , title:"Admin Dashboard",canActivate:[authGuardGuard],children:[
    {path:"", redirectTo:"admin",pathMatch:'full'},
      {path:"admin",component:AdminHomeComponent , title:"Admin",canActivate:[adminGuardGuard]},
      {path:"addManager",component:AddManagerComponent , title:"Add Manager",canActivate:[adminGuardGuard]},
      {path:"updateManager",component:UpdateManagerComponent , title:"Update Manager",canActivate:[adminGuardGuard]},
      {path:"deleteManager",component:DeleteManagerComponent , title:"Delete Manager",canActivate:[adminGuardGuard]},
      {path:"addCollege",component:FormAddCollegeComponent , title:"Add College",canActivate:[adminGuardGuard]},
      {path:"updateCollege",component:FormUpdateCollegeComponent , title:"Update College",canActivate:[adminGuardGuard]},
      {path:"deleteCollege",component:FormDeleteCollegeComponent , title:"Delete College",canActivate:[adminGuardGuard]},

      {path:"addDepartment",component:FormAddDepartmentComponent , title:"Add Department",canActivate:[adminGuardGuard]},
      {path:"updateDepartment",component:FormUpdateDepartmentComponent , title:"Update Department",canActivate:[adminGuardGuard]},
      {path:"deleteDepartment",component:FormDeleteDepartmentComponent , title:"Delete Department",canActivate:[adminGuardGuard]},

      {path:"addYear",component:FormAddYearComponent , title:"Add Year",canActivate:[adminGuardGuard]},
      {path:"updateYear",component:FormUpdateYearComponent , title:"Update Year",canActivate:[adminGuardGuard]},
      {path:"deleteYear",component:FormDeleteYearComponent , title:"Delete Year",canActivate:[adminGuardGuard]},

      {path:"addSubject",component:FormSubjectComponent , title:"Add Subject",canActivate:[adminGuardGuard]},
      {path:"updateSubject",component:FormUpdateSubjectComponent , title:"Update Subject",canActivate:[adminGuardGuard]},
      {path:"deleteSubject",component:FormDeleteSubjectComponent , title:"Delete Subject",canActivate:[adminGuardGuard]},

      {path:"addUser",component:FormAddUserComponent , title:"Add User",canActivate:[adminGuardGuard]},
      {path:"updateUser",component:FormUpdateUserComponent , title:"Update User",canActivate:[adminGuardGuard]},
      {path:"deleteUser",component:FormDeleteUserComponent , title:"Delete User",canActivate:[adminGuardGuard]},
    ]},
  {path:"Doctor",component:DoctorDashboardComponent , title:"Doctor Dashboard",canActivate:[authGuardGuard],children:[
    {path:"", redirectTo:"doctor",pathMatch:'full'},
    {path:"doctor",component:DoctorHomeComponent , title:"Doctor",canActivate:[doctorGuardGuard]},
    {path:"updatedoctor",component:UpdateManagerByDoctorComponent , title:"Update Manager",canActivate:[doctorGuardGuard]},
    {path:"deletedoctor",component:DeleteManagerByDoctorComponent , title:"Delete Manager",canActivate:[doctorGuardGuard]},
    {path:"notices",component:NoticesComponent , title:"Notices",canActivate:[authGuardGuard]},
  ]},
  {path:"updatesummary",component:UpdateSummaryComponent , title:"Update Summary",canActivate:[authGuardGuard]},
  {path:"updatereviews",component:UpdateReviewComponent , title:"Update Review",canActivate:[authGuardGuard]},
  {path:"updatetests",component:UpdateTestComponent , title:"Update Test",canActivate:[authGuardGuard]},
  {path:"updateexams",component:UpdateExamComponent , title:"Update Exam",canActivate:[authGuardGuard]},

    {path:"updateYourData",component:FormUpdateYourDataComponent , title:"Update Your Data",canActivate:[authGuardGuard]},
  {path:"**",component:ErrorComponent , title:"not found"}
];
