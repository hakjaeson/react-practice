import React, { useEffect, useRef, useState } from 'react';
import { getOne, putOne } from '../../api/productApi';
import Fetching from '../common/Fetching';
import { API_SERVER_HOST } from '../../api/todoApi';
// 서버 이미지 경로 참조를 위해서 활용
const host = API_SERVER_HOST;
//  수정내용을 위한 기본 상태정보
const initState = {
  pno: 0,
  pname: '',
  price: 0,
  pdesc: '',
  delFlag: false,
  files: [],
  uploadFileNames: [],
};

const ProductModifyComponent = ({ pno }) => {
  const [product, setProduct] = useState(initState);
  // 로딩창 보여주기
  const [fetching, setFetching] = useState(false);

  //   수정을 위해서는 초기에 정보를 호출해서 출력 > 수정
  useEffect(() => {
    // 제품 번호에 따른 상세 정보 호출
    // 출력 후 수정
    setFetching(true);
    getOne({ pno, successFn, failFn, errorFn });
  }, [pno]);
  const successFn = result => {
    setFetching(false);
    setProduct(result);
  };
  const failFn = result => {
    setFetching(false);
    console.log(result);
  };
  const errorFn = result => {
    setFetching(false);
    console.log(result);
  };

  // 파일 변경 관련
  // html 태그의 files 참조해야 합니다.
  // html 태그 참조
  const upladRef = useRef(null);
  const handleChangeProduct = e => {
    // e.target.name
    // e.taget.value
    product[e.target.name] = e.target.value;
    setProduct({ ...product });
  };

  // 이미지 목록 삭제 기능
  const deleteImg = imageName => {
    // 실제로 이미지를 수정완료 확인 버튼 누루기 전에
    // 진짜 삭제하면 안되요. 왜냐하면, 취소가능성
    // 화면상에서만 안보이도록 추천
    // product.uploadFileNames 배열에서 제거만한다.
    //  상태 정보의 배열에서만 제거를 한다.
    // 실제 삭제는 아닙니다.
    // 배열의 filter 를 통해 업데이트시도
    // 조건에 따라서 목록을 편닙
    const arr = product.uploadFileNames.filter(item => item !== imageName);
    product.uploadFileNames = arr;
    setProduct({ ...product });
  };
  // 실제 수정 적용
  const handleClickModify = () => {
    // 이미지 업로드 기능 체크
    const files = upladRef.current.files;
    const total = files.length;
    // 이미지 업로드시 FormData 객체
    // 키 append 해야 해요.
    const formData = new FormData();
    for (let i = 0; i < total; i++) {
      formData.append('files', files[i]);
    }
    formData.append('pname', product.pname);
    formData.append('pdesc', product.pdesc);
    formData.append('price', product.price);
    formData.append('delFlag', product.delFlag);
    // 화면에 보여지고 있는 이미지
    for (let i = 0; i < product.uploadFileNames.length; i++) {
      formData.append('uploadFileNames', product.uploadFileNames[i]);
    }
    // 보낼 formData 완료 put 실행
    putOne({
      pno,
      product: formData,
      successFn: successPro,
      failFn: failPro,
      errorFn: errorPro,
    });
  };

  const successPro = result => {
    console.log(result);
  };
  const failPro = result => {
    console.log(result);
  };
  const errorPro = result => {
    console.log(result);
  };

  return (
    <div>
      {/* 모달창 */}
      {fetching ? <Fetching /> : null}
      <div>
        <div>제품명</div>
        <div>
          <input type="text" name="pname" value={product.pname} onChange={e => handleChangeProduct(e)} />
        </div>
      </div>
      <div>
        <div>제품 설명</div>
        <div>
          <input type="text" name="pdesc" value={product.pdesc} onChange={e => handleChangeProduct(e)} />
        </div>
      </div>
      <div>
        <div>제품 가격</div>
        <div>
          <input type="number" name="price" value={product.price} onChange={e => handleChangeProduct(e)} />
        </div>
      </div>

      <div>
        <div>제품 이미지</div>
        <div>
          <input type="file" multiple={true} ref={upladRef} />
        </div>
      </div>

      <div>
        <div>기존 제품 이미지</div>
        <div>
          {product.uploadFileNames.map((item, index) => (
            <div key={index}>
              <button onClick={() => deleteImg(item)}>이미지 삭제</button>
              <img key={index} src={`${host}/api/products/view/s_${item}`} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <button>삭제</button>
        <button onClick={handleClickModify}>수정완료</button>
        <button>목록</button>
      </div>
    </div>
  );
};

export default ProductModifyComponent;
