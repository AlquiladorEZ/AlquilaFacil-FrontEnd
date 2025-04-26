export class ReservationResponse {
  constructor({ id, startDate, endDate, userId, localId }) {
    this.id = id;
    this.startDate = startDate;
    this.endDate = endDate;
    this.userId = userId;
    this.localId = localId;
  }
}