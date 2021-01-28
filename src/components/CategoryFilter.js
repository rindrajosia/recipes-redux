import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';
import { getCategoriesList } from '../redux/selectors';
import { CATEGORY_FILTERS, URL } from '../constants';

const CategoryFilter = ({
  filter, categoriesData, fetchCategories, handleFilterChange,
}) => {
  useEffect(() => {
    fetchCategories(URL.CATEGORIES);
  }, [fetchCategories]);

  return (
    <>
      {categoriesData.loading && <h2>Loading</h2> }
      {categoriesData.error && <h2>{categoriesData.error}</h2> }
      {
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
      }
    </>
  );
};

CategoryFilter.propTypes = {
  filter: PropTypes.string,
  categoriesData: PropTypes.instanceOf(Object).isRequired,
  fetchCategories: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

CategoryFilter.defaultProps = {
  filter: CATEGORY_FILTERS.ALL,
};

const mapStateToProps = state => {
  const { filter } = state;
  const categoriesData = getCategoriesList(state);
  return { filter, categoriesData };
};

export default connect(
  mapStateToProps,
  { fetchCategories },
)(CategoryFilter);
