import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Observable, BehaviorSubject, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { Flight } from '../model/flight.model';
import { FlightService } from './flight.service';

export class FlightsDataSource implements DataSource<Flight> {

    private flightsSubject = new BehaviorSubject<Flight[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor( private flightservice: FlightService ) {}

    connect(collectionViewer: CollectionViewer): Observable<Flight[]> {
        return this.flightsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.flightsSubject.complete();
        this.loadingSubject.complete();
    }

    getFlights() {
        this.loadingSubject.next(true);

        this.flightservice.getAllFlights().pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(flights => this.flightsSubject.next(flights));
    }
}