import { Component, OnInit } from '@angular/core';
import { Flight } from './flight';
import { FlightService } from './flight.service';
@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css'],
})
export class FlightComponent implements OnInit {
  myImage:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVtDW6C65Xb6_W-ot54cP-h1bz8vh3K7QuzQ&usqp=CAU"
  flights = [];
  model = new Flight();
  constructor(private flightService: FlightService) {}
  ngOnInit() {
    this.getAllFlights();
  }
  getAllFlights() {
    this.flightService.getAllFlightService().subscribe((x: any[]) => {
      this.flights = x;
    });
  }
  editFlight(id) {
    this.flightService
      .getFlightService(id)
      .subscribe((data: any) => (this.model = data));
  }
  deleteFlight(id: any) {
    this.flightService.deleteFlightService(id).subscribe((data) => {
      this.getAllFlights();
    });
  }
  addFlight() {
    alert(JSON.stringify(this.model));
    if (!this.model.id) {
      alert(JSON.stringify(this.model));
      this.flightService.createFlightService(this.model).subscribe((data) => {
        this.getAllFlights();
        this.model = new Flight();
      });
    } else {
      alert(JSON.stringify(this.model));
      this.flightService
        .updateFlightService(this.model.id, this.model)
        .subscribe((data) => {
          this.getAllFlights();
          this.model = new Flight();
        });
    }
  }
}
