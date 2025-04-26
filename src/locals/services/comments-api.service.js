/**
 * Comments API Service Client
 * @description This class includes methods for typical REST resource operations.
 */
import http from "../../shared/services/http-common.js";
import { UsersApiService } from "../../shared/services/users-api.service.js";

export class CommentsApiService {
  constructor() {
    this.userApiService = new UsersApiService();
  }
  async getAllByLocalId(localId) {
    return http.get(`/comments/local/${localId}`).then((response) => {
      if(response.data) {
        return Promise.all(response.data.map(comment => {
          return this.userApiService.getUsernameById(comment.userId).then(usernameResponse => {
            return {
              ...comment,
              userUsername: usernameResponse.data
            };
          });
        }));
      }
      else {
        throw new Error('Comments not found');
      }
    });
  }
  async create(commentResource) {
    const response = await http.post('/comments', commentResource);
    return response.data;
  }
}