import React from 'react';
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';

const ReadPage = () => {
  const navigate = useNavigate();
  const { tno } = useParams();
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();
  const page = urlSearchParams.get('page') ? parseInt(urlSearchParams.get('page')) : 1;
  const size = urlSearchParams.get('size') ? parseInt(urlSearchParams.get('size')) : 10;
  const queryStr = createSearchParams({ page, size }).toString();
  const handleClickModify = _tno => {
    console.log('수정하기 이동');
    navigate({ pathname: `/todo/read/${tno}`, search: queryStr });
  };
  const handleClickList = _tno => {
    console.log('목록보기 이동');
    navigate({ pathname: `/todo/read/${tno}`, search: queryStr });
  };

  return (
    <div>
      <h1>ReadPage {tno}</h1>
      <div>
        <button onClick={handleClickModify()}>수정하기</button>
        <button onClick={handleClickList()}>목록보기</button>
      </div>
    </div>
  );
};

export default ReadPage;
