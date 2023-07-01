import http from '../request';

export function getDate() {
  return http.get('https://jsonplaceholder.typicode.com/posts');
}
