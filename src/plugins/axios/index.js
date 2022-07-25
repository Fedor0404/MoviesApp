import axios from 'axios';
import interceptors from './interceptors';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

interceptors(instance);

export default instance;

function digitalRoot(n) {
  while (n.toString().length > 1) {
    const arr = [...n.toString()].map(Number);
    const sum = String(arr.reduce((a, b) => a + b, 0));
    n = sum;
  }
  console.log(n);
  return n;
}

digitalRoot(16);
