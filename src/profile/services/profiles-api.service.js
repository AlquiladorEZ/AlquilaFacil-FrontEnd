/**
 * Profiles API Service Client
 * @description This class includes methods for typical REST resource operations.
 */
import http from "../../shared/services/http-common.js";

export class ProfilesApiService {
  async create(profileResource) {
    const response = await http.post('/profiles', profileResource);
    return response.data;
  }
  async getAll() {
    const response = await http.get('/profiles');
    return response.data;
  }
  async getById(id) {
    const response = await http.get(`/profiles/${id}`);
    return response.data;
  }
  async getByUserId(userId) {
    const response = await http.get(`/profiles/user/${userId}`);
    return response.data;
  } 
  async update(id, profileResource) {
    const response = await http.put(`/profiles/${id}`, profileResource);
    return response.data;
  }
  async isUserSubscribed(userId) {
    const response = await http.get(`/profiles/is-subscribed/${userId}`);
    return response.data;
  }
}