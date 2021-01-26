import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';
import { getCategoriesList } from '../redux/selectors';
import { FILTER, CATEGORY_FILTERS } from '../constants';

const CategoryFilter = ({ filter, categoriesData, fetchCategories, handleFilterChange }) => {
  useEffect (() => {
    fetchCategories();
  }, [fetchCategories]);
  
  return (
    <>
      {categoriesData.loading ? (
        <h2>Loading</h2>
      ) : categoriesData.error ? (
        <h2>{categoriesData.error}</h2>
      ) : (
          <select className="select" value={filter} onChange={e => { handleFilterChange(e.target.value); }} id="category" name="category" required>
            <option key={Math.floor(Math.random() * 10000)} value="All">
              All
            </option>
            {categoriesData.categories.map(category => (
              <option key={category.idCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
      )}
    </>
  )
};

const mapStateToProps = state => {
  const { filter } = state;
  const categoriesData = getCategoriesList(state);
  return { filter, categoriesData };
};

export default connect(
  mapStateToProps,
  { fetchCategories }
)(CategoryFilter);
