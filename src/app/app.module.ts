import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { FormsModule } from '@angular/forms';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { EditAccountComponent } from './accounts/edit-account/edit-account.component';
import { PhoneNumberPipe } from './shared/phone-number.pipe';

@NgModule({
    declarations: [
        AppComponent,
        StudentsComponent,
        AddStudentComponent,
        EditStudentComponent,
        AccountsComponent,
        AddAccountComponent,
        EditAccountComponent,
        PhoneNumberPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
