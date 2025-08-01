// API Configuration for different environments
const API_CONFIG = {
  development: {
    baseURL: 'http://localhost:8000/api',
  },
  production: {
    baseURL: process.env.REACT_APP_API_URL || 'https://your-backend-domain.railway.app/api',
  }
};

const environment = process.env.NODE_ENV || 'development';
export const API_BASE_URL = API_CONFIG[environment].baseURL;

export default API_CONFIG[environment]; 