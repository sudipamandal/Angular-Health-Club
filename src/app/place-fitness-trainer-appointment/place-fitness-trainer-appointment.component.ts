import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../_services/user.service";

export class Fitness {
  constructor(
    public firstname: string,
    public lastname: string,
    public age: number,
    public email: string,
    public phonenumber: number,
    public streetaddress: string,
    public addressLine2: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public trainerPreference: string,
    public physiotherapist: boolean,
    public packages: string,
    public inr: number,
    public paisa: number
  ) {}
}

@Component({
  selector: "app-place-fitness-trainer-appointment",
  templateUrl: "./place-fitness-trainer-appointment.component.html",
  styleUrls: ["./place-fitness-trainer-appointment.component.css"],
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {
  fitnessForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.fitnessForm = this.fb.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      age: ["", Validators.required],
      phonenumber: ["", Validators.required],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
        ],
      ],
      streetaddress: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      country: ["", Validators.required],
      pincode: ["", Validators.required],
      trainerpreference: [""],
      physiotherapist: [""],
      packages: [""],
      inr: ["", Validators.required],
      paisa: ["", Validators.required],
    });
  }

  onSubmit() {
    if (this.fitnessForm.valid) {
      const appointmentDetails = new Fitness(
        this.fitnessForm.value.firstname,
        this.fitnessForm.value.lastname,
        this.fitnessForm.value.age,
        this.fitnessForm.value.email,
        this.fitnessForm.value.phonenumber,
        this.fitnessForm.value.streetaddress,
        this.fitnessForm.value.addressLine2,
        this.fitnessForm.value.city,
        this.fitnessForm.value.state,
        this.fitnessForm.value.country,
        this.fitnessForm.value.pincode,
        this.fitnessForm.value.trainerPreference,
        this.fitnessForm.value.physiotherapist === "yes",
        this.fitnessForm.value.packages,
        this.fitnessForm.value.inr,
        this.fitnessForm.value.paisa
      );
      // TODO: Implement actual submission logic here, for now we just log to console
      console.log(appointmentDetails);
      alert("Appointment submitted successfully!");
    } else {
      alert("Please fill all the required fields correctly.");
    }

    if (this.fitnessForm.valid) {
      this.userService.postfitnessdata(this.fitnessForm.value).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
