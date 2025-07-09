/**
 * Metrics API Service Client
 * @description This class includes methods for typical REST resource operations.
 */
import http from "../../shared/services/http-common.js";

export class MetricsApiService {

  async create(resource) {
    await http.post(`/metrics`, resource);
  } 
}