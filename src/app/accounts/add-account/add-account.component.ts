import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../accounts.service';

@Component({
    selector: 'app-add-account',
    templateUrl: './add-account.component.html',
    styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

    data: any = {
        accountNum: null,
        bank: '',
        branch: '',
        accountType: '',
        status: true,
    };

    constructor(private accountsService: AccountsService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit(): void {
        this.data.studentID = this.route.snapshot.queryParams['student_id'];
    }

    onSubmit(): void {
        this.data.status = this.data.status ? 'active' : 'inactive';

        this.accountsService.createAccount(this.data).subscribe((res) => {
            if (res.status === 'success') this.location.back();
        })
    }

}
