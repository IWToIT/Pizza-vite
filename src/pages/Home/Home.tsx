import React from 'react';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/redux/store';
import { Categories } from '@/components/Categories';
import { Sort } from '@/components/Sort';
import { PizzaBlock } from '@/components/PizzaBlock';
import Skeleton from '@/components/PizzaBlock/Skeleton';
import { sortList } from '@/components/Sort/Sort';
import { selectFilter } from '@/redux/filter/selectors';
import { selectPizzaData } from '@/redux/pizza/selectors';
import { setCategoryId, setFilters } from '@/redux/filter/slice';
import { fetchPizzas } from '@/redux/pizza/asyncActions';
import { SearchPizzaParams } from '@/redux/pizza/types';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMounted = React.useRef(false);

  const { items, status } = useSelector(selectPizzaData);
  const { categoryId, sort, searchValue } = useSelector(selectFilter);

  const onChangeCategory = React.useCallback((id: number) => {
    dispatch(setCategoryId(id));
  }, []);

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? String(categoryId) : '';
    const search = searchValue;

    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        search,
      }),
    );

    window.scrollTo(0, 0);
  };

  // Если изменили параметры и был первый рендер
  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     const params = {
  //       categoryId: categoryId > 0 ? categoryId : null,
  //       sortProperty: sort?.sortProperty,
  //       currentPage,
  //     };

  //     const queryString = qs.stringify(params, { skipNulls: true });

  //     navigate(`/?${queryString}`);
  //   }
  // }, [categoryId, sort?.sortProperty, searchValue, currentPage, navigate]);

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue]);

  // Парсим параметры при первом рендере
  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1));
  //     const sort = sortList.find(
  //       (obj) => obj.sortProperty === params.sortProperty,
  //     );
  //     if (sort) {
  //       params.sort = sort;
  //     }
  //     dispatch(setFilters(params));
  //   }
  //   isMounted.current = true;
  // }, []);

  const pizzas = items.map((obj: any) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top" data-testid="content-element">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>Попробуйте повторить попытку позже.</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}
    </div>
  );
};

export default Home;
