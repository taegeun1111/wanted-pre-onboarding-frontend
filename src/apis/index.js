import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop/',
  // baseURL: 'http://localhost:8000',
});