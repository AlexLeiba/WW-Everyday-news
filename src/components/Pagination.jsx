import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { useHistory, useParams } from "react-router-dom";
import styles from "./Pagination.module.css";

export default function PaginationBootstrap() {
  const history = useHistory();
  const { idCategory } = useParams();

  let active;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === Number(active)}
        id={active ? styles.activePagination : null}
        onClick={() => {
          history.push(`/category/${idCategory}?&page=${number}`);

          window.scrollTo({
            behavior: "smooth",
            top: 0,
          });
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Pagination className="d-flex justify-content-center">{items}</Pagination>
    </div>
  );
}
