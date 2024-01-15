import axios from 'axios';
import { API_SERVER_HOST } from './todoApi';

// 제품 API
const host = `${API_SERVER_HOST}/api/products`;

// 파일 업로드 비동기 통신
export const postAdd = async ({ product, successFn, failFn, errorFn }) => {
  try {
    // 파일 업로드시 준비할 것이 있습니다.
    // 반드시 복수형으로 { headers } 작성 필요
    const header = { headers: { 'Content-Type': 'multipart/form-data' } };
    const res = await axios.post(`${host}/`, product, header);

    const status = res.status.toString();
    if (status.charAt(0) === '2') {
      successFn(res.data);
    } else {
      failFn('전송 오류입니다.');
    }
  } catch (error) {
    errorFn('서버에러에요');
  }
};

// 제품 목록가져오기
export const getList = async ({ param, successFn, failFn, errorFn }) => {
  try {
    const res = await axios.get(`${host}/list`, { params: param });

    const status = res.status.toString();
    if (status.charAt(0) === '2') {
      successFn(res.data);
    } else {
      failFn('목록 호출 오류입니다.');
    }
  } catch (error) {
    errorFn('목록 호출 서버 에러에요');
  }
};
export const getOne = async ({ pno, successFn, failFn, errorFn }) => {
  try {
    const res = await axios.get(`${host}/${pno}`);

    const status = res.status.toString();
    if (status.charAt(0) === '2') {
      successFn(res.data);
    } else {
      failFn('목록 호출 오류입니다.');
    }
  } catch (error) {
    errorFn('목록 호출 서버 에러에요');
  }
};
export const putOne = async ({ pno, product, successFn, failFn, errorFn }) => {
  try {
    const header = { headers: { 'Content-Type': 'multipart/form-data' } };
    const res = await axios.put(`${host}/${pno}`, product, header);
    const status = res.status.toString();
    if (status.charAt(0) === '2') {
      successFn(res.data);
    } else {
      failFn('전송 오류입니다.');
    }
  } catch (error) {
    errorFn('서버에러에요');
  }
};
