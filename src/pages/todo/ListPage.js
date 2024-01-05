import React from 'react';
import { useSearchParams } from 'react-router-dom';

const ListPage = () => {
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();
  const page = urlSearchParams.get('page') ? parseInt(urlSearchParams.get('page')) : 1;
  const size = urlSearchParams.get('size') ? parseInt(urlSearchParams.get('size')) : 10;

  return (
    <h1>
      ListPage이긴한데 page는 {page} size는 {size}임 ㄹㅇㅋㅋ
    </h1>
  );
};

export default ListPage;
