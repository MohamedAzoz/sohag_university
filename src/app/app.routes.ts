import { Routes } from '@angular/router';
import { HomeComponent } from './component/app-home/home/home.component';
import { ErrorComponent } from './component/error/error.component';
import { MainComponent } from './component/main/main.component';
import { LoginComponent } from './component/app-home/login/login.component';
import { CollegeComponent } from './component/college/college.component';
import { MainDashboardComponent } from './component/Controls/main-dashboard/main-dashboard.component';
import { FormAddUserComponent } from './component/Controls/Admin/form-add-user/form-add-user.component';
import { FormUpdateUserComponent } from './component/Controls/Admin/form-update-user/form-update-user.component';
import { FormDeleteUserComponent } from './component/Controls/Admin/form-delete-user/form-delete-user.component';
import { FormAddCollegeComponent } from './component/Controls/Admin/form-add-college/form-add-college.component';
import { FormUpdateCollegeComponent } from './component/Controls/Admin/form-update-college/form-update-college.component';
import { FormDeleteCollegeComponent } from './component/Controls/Admin/form-delete-college/form-delete-college.component';
import { FormAddYourDataComponent } from './component/Controls/main_Forms/form-add-your-data/form-add-your-data.component';
import { FormUpdateYourDataComponent } from './component/Controls/main_Forms/form-update-your-data/form-update-your-data.component';
import { FormAddContentComponent } from './component/Controls/main_Forms/form-add-content/form-add-content.component';
import { FormUpdateContentComponent } from './component/Controls/main_Forms/form-update-content/form-update-content.component';
import { FormDeleteContentComponent } from './component/Controls/main_Forms/form-delete-content/form-delete-content.component';
import { FormUpdateSubjectComponent } from './component/Controls/Admin/form-update-subject/form-update-subject.component';
import { FormDeleteSubjectComponent } from './component/Controls/Admin/form-delete-subject/form-delete-subject.component';

export const routes: Routes = [
  {path:"", redirectTo:"",pathMatch:'full'},
  {path:"",component:MainComponent,children:[
    {path:"",component:HomeComponent , title:"جامعة سوهاج"},
    {path:"login",component:LoginComponent , title:"login"},
    {path:"college/:id", component:CollegeComponent , title:""},
  ]},
  {path:"Dashboard", component:MainDashboardComponent , title:"Dashboard",children:[
    {path:"addUser",component:FormAddUserComponent , title:"addUser"},
    {path:"updateUser",component:FormUpdateUserComponent , title:"updateUser"},
    {path:"deleteUser",component:FormDeleteUserComponent , title:"deleteUser"},
    {path:"addCollege",component:FormAddCollegeComponent , title:"addCollege"},
    {path:"updateCollege",component:FormUpdateCollegeComponent , title:"updateCollege"},
    {path:"deleteCollege",component:FormDeleteCollegeComponent , title:"deleteCollege"},
    {path:"addData",component:FormAddYourDataComponent , title:"addData"},
    {path:"updateData",component:FormUpdateYourDataComponent , title:"updateData"},
    {path:"addContent",component:FormAddContentComponent , title:"addContent"},
    {path:"updateContent",component:FormUpdateContentComponent , title:"updateContent"},
    {path:"deleteContent",component:FormDeleteContentComponent , title:"deleteContent"},
    {path:"updateSubject",component:FormUpdateSubjectComponent , title:"updateSubject"},
    {path:"deleteSubject",component:FormDeleteSubjectComponent , title:"deleteSubject"},
  ]},
  // {path:"",component:HomeComponent , title:""},
  {path:"**",component:ErrorComponent , title:"not found"}
];
