import React from 'react';
import BasicLayout from '../../layouts/BasicLayout';
import { Outlet, createSearchParams, useNavigate } from 'react-router-dom';

const TodoPage = () => {
  const navigate = useNavigate();

  const queryStr = createSearchParams({ page: 1, size: 10 }).toString();

  const handleClickList = () => {
    navigate({ pathname: 'list', search: queryStr });
  };
  const handleClickAdd = () => {
    navigate({ pathname: 'add', search: queryStr });
  };
  const handleClickRead = () => {
    navigate({ pathname: 'read', search: queryStr });
  };
  const handleClickModify = () => {
    navigate({ pathname: 'modify', search: queryStr });
  };
  return (
    <BasicLayout>
      <div className="todo-wrap">
        <h1>TodoPage</h1>
        <div>
          <button
            onClick={() => {
              handleClickList();
            }}
          >
            List
          </button>
          <button
            onClick={() => {
              handleClickAdd();
            }}
          >
            Add
          </button>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </BasicLayout>
  );
};

export default TodoPage;
