import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TPizza, SearchPizzaParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';
import { pizzaData } from '@/utils/consts';

export const fetchPizzas = createAsyncThunk<TPizza[], SearchPizzaParams>(
  'pizza/fetchPizzasStatus',
  async params => {
    const { sortBy, order, category, search } = params;
    const { data } = await axios.get<TPizza[]>(`${pizzaData}`, {
      params: pickBy(
        {
          category,
          sortBy,
          order,
          search,
        },
        identity,
      ),
    });

    return data;
  },
);
