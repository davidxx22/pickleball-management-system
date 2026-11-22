import { businessConfig } from '../config/business.js';
import { mockDashboard } from '../data/mock-data.js';
import { generatePreviewSlots } from './booking-preview.js';

/** The only data boundary used by the UI.
 * Backend handoff: implement these async methods with fetch, validate the
 * payload, preserve this view-model shape, and change source to 'api'.
 * No authentication, booking writes, payments, or live subscriptions exist yet.
 */
export const repository = {
  async getBusiness() { return structuredClone(businessConfig); },
  async getDashboard() { return structuredClone(mockDashboard); },
  async getBookingSlots(input) { return generatePreviewSlots(businessConfig, mockDashboard, input); },
};
