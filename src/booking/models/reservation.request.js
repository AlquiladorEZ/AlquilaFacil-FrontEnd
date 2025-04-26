export class ReservationRequest {
  constructor({ startDate, endDate, userId, localId }) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.userId = userId;
    this.localId = localId;
  }
}