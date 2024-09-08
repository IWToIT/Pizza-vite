import React from 'react';
import { categories } from '@/utils/consts';

export type CategoriesProps = {
  value: number;
  onChangeCategory: (index: number) => void;
};

const Categories: React.FC<CategoriesProps> = React.memo(({ value, onChangeCategory }) => {
  return (
    <div className="categories" data-testid="cat-element">
      <ul className="categories__list">
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={`categories__list-item${value === i ? '--active' : ''}`}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
