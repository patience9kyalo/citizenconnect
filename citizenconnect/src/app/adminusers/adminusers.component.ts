import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { User } from '../Models/users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminusers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adminusers.component.html',
  styleUrl: './adminusers.component.css'
})

export class AdminusersComponent implements OnInit {
  allUsers: User[] = [];
  approvedUsers: User[] = [];
  notApprovedUsers: User[] = [];

  constructor(private as: AuthService) {}

  ngOnInit(): void {
    this.loadAllUsers();
    this.loadApprovedUsers();
    this.loadNotApprovedUsers();
  }

  loadAllUsers(): void {
    this.as.getUsers().subscribe(
      (users: User[]) => {
        this.allUsers = users;
      },
      error => {
        console.error('Error fetching all users', error);
      }
    );
  }

  loadApprovedUsers(): void {
    this.as.getApprovedUsers().subscribe(
      (users: User[]) => {
        
        this.approvedUsers = users.filter(user => user.IsApproved === 1); // Refresh the user list after approval
      },
      error => {
        console.error('Error approving user', error);
      }
    );
  }
  

  loadNotApprovedUsers(): void {
    this.as.getNotApprovedUsers().subscribe(
      (users: User[]) => {
        this.notApprovedUsers = users.filter(user => user.IsApproved === 0);
      },
      error => {
        console.error('Error fetching not approved users', error);
      }
    );
  }


  deleteUser(Id: string): void {
    this.as.deleteUser(Id).subscribe(() => {
      this.loadAllUsers(); // Refresh the list after deletion
    })
  }

  approveUser(Id: string): void {
    // Implement approve logic here
    console.log('Approving user:');
    this.as.approveUser(Id).subscribe(() => {
      this.loadAllUsers();
      window.location.reload(); // Refresh the user list after approval
    });
  }

  rejectUser(Id: string): void {
    // Implement reject logic here
    console.log('Rejecting user:');
    this.as.rejectUser(Id).subscribe(() => {
      this.loadAllUsers(); // Refresh the user list after rejection
      window.location.reload();
    });
  }
}