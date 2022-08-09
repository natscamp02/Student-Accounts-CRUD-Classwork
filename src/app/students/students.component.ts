import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentsService } from './students.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnDestroy {
    students: Student[] = [];

    subscriptions?: Subscription;

    constructor(private studentsService: StudentsService, private router: Router) { }

    // API Methods
    private getStudentsFromAPI(): void {
        const stuSub = this.studentsService.getAllStudents().subscribe(res => {
            if (res.status !== 'success') return;

            this.students = res.data!;
        });

        this.subscriptions?.add(stuSub);
    }

    deleteStudent(id: string) {
        let confirmation = window.confirm('Are you sure you want to delete this student?');
        if (!confirmation) return;

        this.studentsService.deleteStudent(id).subscribe(() => {
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.onSameUrlNavigation = 'reload';
            this.router.navigateByUrl('/students');
        })
    }

    // Lifecycle hooks
    ngOnInit(): void {
        this.getStudentsFromAPI();
    }

    ngOnDestroy(): void {

    }
}
