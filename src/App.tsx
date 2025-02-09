import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Cart = lazy(() => import('./pages/Cart').then(module => ({ default: module.Cart })));
const Payment = lazy(() => import('./pages/Payment').then(module => ({ default: module.Payment })));
const FullPizza = lazy(() =>
  import('./pages/FullPizza').then(module => ({ default: module.FullPizza })),
);
const NotFound = lazy(() =>
  import('./pages/NotFound').then(module => ({ default: module.NotFound })),
);
import './scss/app.scss';
import MainLayout from './layouts/MainLayout';

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />}>
            <Route path="payment" element={<Payment onSubmit={() => {}} />} />
          </Route>
          <Route path="pizza/:id" element={<FullPizza />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
