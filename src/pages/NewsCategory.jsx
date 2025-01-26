import React from 'react';
import Layout from '../components/Layout';
import { useParams, useLocation } from 'react-router-dom';
import { getNewsEndpoint } from '../api/guardianApi';
import useFetch from '../utils/hooks/useFetch';
import { getAdaptedData } from '../api/adaptors';
import NewsCardList from '../components/NewsCardList';
import PaginationBootstrap from '../components/Pagination';

function NewsCategory() {
  let { idCategory } = useParams();

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  let pageNumber = query.get('page');

  if (!pageNumber) {
    pageNumber = 1;
  }
  const categoryUrl = getNewsEndpoint(idCategory, pageNumber, 20);
  const categoryData = useFetch(categoryUrl);
  const adaptedData = getAdaptedData(categoryData);

  return (
    <div>
      <Layout>
        <h1 className='text-uppercase mt-4'>{idCategory}</h1>
        <NewsCardList newslist={adaptedData} />
        <PaginationBootstrap />
      </Layout>
    </div>
  );
}

export default NewsCategory;
