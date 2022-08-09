import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountsService } from '../accounts.service';

@Component({
    selector: 'app-edit-account',
    templateUrl: './edit-account.component.html',
    styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {
    data: any = {
        accountNum: null,
        bank: '',
        branch: '',
        accountType: '',
        status: true,
    };
    id?: string;

    constructor(private accountsService: AccountsService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this._getStudentAccountInfo();
    }

    private _getStudentAccountInfo(): void {
        this.id = this.route.snapshot.params['id'];

        this.accountsService.getAccountByID(this.id!).subscribe((res) => {
            if (res.status !== 'success') return;

            this.data = {
                ...res.data!,
                status: res.data!.status === 'active',
                studentID: res.data!.studentID._id
            };
        })
    }

    onSubmit(): void {
        this.data.status = this.data.status ? 'active' : 'inactive';

        this.accountsService.updateAccount(this.id!, this.data).subscribe((res) => {
            if (res.status === 'success') this.router.navigate(['/accounts', this.data.studentID]);
        })
    }
}
