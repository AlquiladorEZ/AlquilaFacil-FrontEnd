/**
 * Reports API Service Client
 * @description This class includes methods for typical REST resource operations.
 */
import http from "../../shared/services/http-common.js";

export class ReportsApiService {
  async create(reportResource) {
    const response = await http.post('/reports', reportResource);
    return response.data;
  }
  async getByUserId(userId) {
    const response = await http.get(`/reports/get-by-user-id/${userId}`);
    return response.data;
  }
  async getByLocalId(localId) {
    const response = await http.get(`/reports/get-by-local-id/${localId}`);
    return response.data;
  }
  async delete(reportId) {
    const response = await http.delete(`/reports/${reportId}`);
    return response.data;
  }
}