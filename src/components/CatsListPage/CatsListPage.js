import React, { useState, useEffect } from "react";
import CatCard from "../catCard/CatCard";
import Header from "../header/Header";
import Pagination from "../pagination/Pagination";
import "./CatsListPage.scss";

const CatsListPage = () => {
  const [catsList, setCatsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCatsList = async () => {
    const response = await fetch(
      `https://api.thecatapi.com/v1/breeds/?limit=10&page=${currentPage}`
    );
    const results = await response.json();
    setCatsList(results);
  };

  useEffect(() => {
    fetchCatsList();
  }, [currentPage]);

  return (
    <>
      <Header />
      <div className="cats-list-page">
        {catsList.map((cat) => {
          return (
            <CatCard
              breed={cat.name}
              desc={cat.description}
              image={cat.image?.url}
              wiki={cat.wikipedia_url}
            />
          );
        })}
        <div className="row pagination-container">
          <Pagination
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </>
  );
};

export default CatsListPage;
