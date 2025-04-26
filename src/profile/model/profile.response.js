export class ProfileResponse {
  constructor({id, fullName, phone, documentNumber, dateOfBirth, userId, photoUrl}) {
    this.id = id;
    this.fullName = fullName;
    this.name = fullName.split(' ')[0];
    this.fatherName = fullName.split(' ')[1];
    this.motherName = fullName.split(' ')[2];
    this.phone = phone;
    this.documentNumber = documentNumber;
    this.dateOfBirth = dateOfBirth;
    this.userId = userId;
    this.photoUrl = photoUrl;
  }
}