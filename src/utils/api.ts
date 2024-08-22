import axios, { AxiosInstance } from "axios";

// 타입 스크립트 타입 선언
const FARMENDAPI: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});