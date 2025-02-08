import { useState } from 'react';

export const useHandleState = ({ startLoading = false }: { startLoading?: boolean } = {}) => {
  const [isLoading, setIsLoading] = useState(startLoading);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState('');

  return {
    isLoading,
    setIsLoading,
    errorMessage,
    setErrorMessage,
    success,
    setSuccess,
  };
};
