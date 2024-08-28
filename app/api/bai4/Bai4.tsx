"use client"
import axios from 'axios';
import { useState } from 'react';

interface ApiResponse {
  data: any;
}
interface ErrorPageProps {
  statusCode: number;
  message: string;
}

async function fetchData() {
  try {
    const response = await axios.get('https://example.com/invalid-endpoint', {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY_HERE',
      },
    });

    return { data: response.data, statusCode: 200 };
  } catch (error: any) {
    if (error.response) {
      return {
        data: null,
        statusCode: error.response.status,
        message: error.response.status === 404 ? 'Trang không tồn tại' : 'Lỗi máy chủ',
      };
    } else {
      return {
        data: null,
        statusCode: 500,
        message: 'Lỗi máy chủ',
      };
    }
  }
}

export default async function ErrorHandlingPage() {
  const { data, statusCode, message } = await fetchData();

  if (statusCode !== 200) {
    return (
      <div>
        <h1>Lỗi {statusCode}</h1>
        <p>{message}</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Dữ liệu API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
