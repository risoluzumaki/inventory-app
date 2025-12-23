import { Reservation } from "../entities/reservation";

export interface ReservationRepository {
  create(reservation: Reservation): void;
  findAll(): Reservation[];
}
