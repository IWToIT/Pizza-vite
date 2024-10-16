import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type PaymentFormProps = {
  onSubmit: (formData: PaymentFormData) => void;
};

type PaymentFormData = {
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
  cvv: string;
  amount: number;
};

const Payment: React.FC<PaymentFormProps> = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    cvv: '',
    amount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    console.log(formData);
    navigate('/payment/success');
  };

  return (
    <div className="paymment-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Номер карты</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cardHolderName">Имя держателя карты</label>
          <input
            type="text"
            id="cardHolderName"
            name="cardHolderName"
            value={formData.cardHolderName}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="expiryDate">Срок действия</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="MM/YY"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV-код</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="123"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Сумма</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="100.00"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Оплатить
        </button>
      </form>
      <Link to="/cart" className="button button--outline button--add go-back-btn">
        Вернуться в корзину
      </Link>
    </div>
  );
};

export default Payment;
