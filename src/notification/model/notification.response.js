export class NotificationResponse {
  constructor({ id, title, content, userId }) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.userId = userId;
  }
}