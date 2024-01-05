import React from 'react';
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';

const ModifyPage = () => {
  const navigate = useNavigate();
  const { tno } = useParams();
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();
  const page = urlSearchParams.get('page') ? parseInt(urlSearchParams.get('page')) : 1;
  const size = urlSearchParams.get('size') ? parseInt(urlSearchParams.get('size')) : 10;

  const queryStr = createSearchParams({ page, size }).toString();

  const handleClickDelete = _tno => {
    console.log('삭제함');
    navigate({ pathname: `/todo/read/${tno}`, search: queryStr });
  };
  const handleClickComplete = _tno => {
    console.log('수정함');
  };
  const handleClickCancel = _tno => {
    console.log('취소함');
  };
  return (
    <h1>
      ModifyPage
      <button onClick={handleClickDelete}>삭제</button>
      <button onClick={handleClickComplete}>수정</button>
      <button onClick={handleClickCancel}>취소</button>
    </h1>
  );
};

export default ModifyPage;
