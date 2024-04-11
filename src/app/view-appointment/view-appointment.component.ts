import { Component, OnInit } from "@angular/core";
import { UserService } from "../_services";

@Component({
  selector: "app-view-appointment",
  templateUrl: "./view-appointment.component.html",
  styleUrls: ["./view-appointment.component.css"],
})
export class ViewAppointmentComponent implements OnInit {
  appointments: any;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getfitnessdata().subscribe(
      (data: any[]) => {
        this.appointments = data;
      },
      (error) => {
        console.error("There was an error!", error);
      }
    );
  }

  deleteAppointment() {}

  editAppointment() {}
}
