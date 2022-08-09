import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { EditAccountComponent } from './accounts/edit-account/edit-account.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
    {
        path: 'students',
        children: [
            { path: 'add', component: AddStudentComponent },
            { path: 'edit/:id', component: EditStudentComponent },
            { path: '', component: StudentsComponent },
        ]
    },
    {
        path: 'accounts',
        children: [
            { path: 'add', component: AddAccountComponent },
            { path: 'edit/:id', component: EditAccountComponent },
            { path: ':student_id', component: AccountsComponent },
        ]
    },
    { path: '', redirectTo: '/students', pathMatch: 'full' },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
