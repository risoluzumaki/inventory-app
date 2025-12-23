import { Reservation } from "../../domain/entities/reservation";
import { ReservationRepository } from "../../domain/repositories/reservation.repository";
import { db } from "../../infrastructure/db/db.memo";

export class ReservationRepositoryImpl implements ReservationRepository {
  create(reservation: Reservation): void {
    db.reservations.push(reservation);
    // console.log(db.reservations);
  }

  findAll(): Reservation[] {
    // console.log(db.reservations);
    return db.reservations;
  }
}
