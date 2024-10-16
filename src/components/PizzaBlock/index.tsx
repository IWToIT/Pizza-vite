import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItemById } from '@/redux/cart/selectors';
import { RootState } from '@/redux/store';
import { addItem } from '@/redux/cart/slice';
import { CartItem } from '@/redux/cart/types';
import { typeNames } from '@/utils/consts';

export type PizzaBlockProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
  rating: number;
};

export const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) => selectCartItemById(state, id));
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  console.log(cartItem);

  const generateUniqueId: CartItem = (id: string, type: string, size: number) => {
    return `${id}_${type}_${size}`;
  };

  const onClickAdd = () => {
    const uniqueId = generateUniqueId(id, activeType, activeSize);
    const item: CartItem = {
      id: uniqueId,
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
      count: cartItem?.count || 1,
    };
    dispatch(addItem(item));
    console.log(item);
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <Link key={id} to={`/pizza/${id}`}>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
          <h4 className="pizza-block__title">{title}</h4>
        </Link>
        <ul className="pizza-block__type">
          {types.map(typeId => (
            <li
              key={typeId}
              onClick={() => setActiveType(typeId)}
              className={`pizza-block__type-item${activeType === typeId ? '--active' : ''}`}
            >
              {typeNames[typeId]}
            </li>
          ))}
        </ul>
        <ul className="pizza-block__size">
          {sizes.map((size, sizeIndex) => (
            <li
              key={size}
              onClick={() => setActiveSize(sizeIndex)}
              className={`pizza-block__size-item${activeSize === sizeIndex ? '--active' : ''}`}
            >
              {size} см
            </li>
          ))}
        </ul>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} руб.</div>
          <button onClick={onClickAdd} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>В корзину</span>
          </button>
        </div>
      </div>
    </div>
  );
};
