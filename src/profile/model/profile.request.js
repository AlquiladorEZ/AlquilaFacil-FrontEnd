export class ProfileRequest {
  constructor({name, fatherName, motherName, phone, documentNumber, dateOfBirth, userId, photoUrl}) {
    this.name = name;
    this.fatherName = fatherName;
    this.motherName = motherName;
    this.phone = phone;
    this.documentNumber = documentNumber;
    this.dateOfBirth = dateOfBirth;
    this.userId = userId;
    this.photoUrl = photoUrl;
  }
}