import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from './account';
import { AccountsService } from './accounts.service';

@Component({
    selector: 'app-accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

    public account?: Account;
    student_id!: string;

    constructor(private accountsService: AccountsService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this._getStudentAccountInfo();
    }

    private _getStudentAccountInfo(): void {
        this.student_id = this.route.snapshot.params['student_id'];
        this.accountsService.getAccountByStudentID(this.student_id).subscribe((res) => {
            if (res.status === 'success') this.account = res.data!;
        })
    }

    deleteAccountInfo() {
        let confirmation = window.confirm('Are you sure you want to delete this account?');
        if (!confirmation) return;

        this.accountsService.deleteAccount(this.account!._id).subscribe((res) => {
            this.router.navigateByUrl('/students');
        })
    }
}
