import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem } from "../actions";

export default function ListItem({ content, id }) {
  const dispatch = useDispatch();
  const onDeleteItem = () => {
    dispatch(deleteItem(id));
  };
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-10">
          <h3 className="mb-0">{content}</h3>
        </div>
        <button
          onClick={onDeleteItem}
          type="button"
          className="col btn btn-danger"
        >
          Удалить
        </button>
      </div>
    </li>
  );
}
