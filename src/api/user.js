import http from '@/axios';

export default {
  login(params) {
    return http.post('/passport/login', params);
  },
};
