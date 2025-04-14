import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {
  bookingForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router,private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      members: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      diningType: ['', Validators.required]
    });
  }


  onSubmit(): void {
    this.submitted = true;
    if (this.bookingForm.invalid) {
      return;
    }
    this.bookingService.saveBooking(this.bookingForm.value).subscribe(
      (response: any) => { 
        alert('Booking Successful!');
        this.router.navigate(['/booking']);
      },
      (error: any) => {  // Specify the type of error
        console.error('Error saving booking data', error);
      }
    );
  }
}
