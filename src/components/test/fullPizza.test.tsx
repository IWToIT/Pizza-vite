import React from 'react';
import axios from 'axios';
import { render } from './test-utils';
import { screen, waitFor } from '@testing-library/react';
import { FullPizza } from '@/pages/FullPizza';

test('is pizza displayed when data is received successfully', async () => {
  const testData = {
    data: { imageUrl: 'testImageUrl', title: 'testTitle', price: 'testPrice' },
  };
  const title = testData.data.title;
  jest.spyOn(axios, 'get').mockResolvedValue(testData);
  render(<FullPizza />);

  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));

  expect(screen.getByTestId('container-element')).toBeInTheDocument();
  expect(screen.getByTestId('container-element')).toMatchSnapshot();
  expect(screen.getByAltText(title)).toBeInTheDocument();
  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText('testPrice руб.')).toBeInTheDocument();
});
