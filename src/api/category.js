import http from '@/axios';

export default {
  list(params) {
    return http.get('/category/all', params);
  },
};
