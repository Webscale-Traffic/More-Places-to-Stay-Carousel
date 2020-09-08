import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 500 },
    { duration: '30s', target: 200 },
    { duration: '20s', target: 100 },
  ],
};

export default function() {
  let res1 = http.get('http://localhost:3004');
  check(res1, { 'status was 200': r => r.status == 200 });

  let res2 = http.get('http://localhost:3004/properties');
  check(res2, { 'status was 200': r => r.status == 200 });

  sleep(1);
}