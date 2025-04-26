/**
 * Subscriptions API Service Client
 * @description This class includes methods for typical REST resource operations.
 */
import http from "../../shared/services/http-common.js";

export class SubscriptionsApiService {
  constructor() {
    this.userApiService = new UsersApiService();
  }
  async create(localResource) {
    const response = await http.post('/subscriptions', localResource);
    return response.data;
  }
  async getAll() {
    const response = await http.get('/subscriptions');
    return response.data;
  }
  async getById(id) {
    const response = await http.get(`/subscriptions/${id}`);
    return response.data;
  }
  async updateSubscriptionStatus(subscriptionId, statusId) {
    const response = await http.put(`/subscriptions/${subscriptionId}/status/${statusId}`);
    return response.data;
  }
}