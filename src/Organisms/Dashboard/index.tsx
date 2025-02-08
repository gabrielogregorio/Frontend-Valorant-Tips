'use client';
import { useCallback, useEffect, useState } from 'react';
import { CardDash } from '../../Molecules/CardDash';
import { plainPromise } from '../../shared/utils/plainPromise';
import { ApiService } from '../../shared/services/ApiService';
import { ApiError } from '../../shared/services/ApiError';
import { useHandleState } from '../../shared/hooks/useHandleState';
import { formatI18n } from '../../libs/i18n';
import { formatNumbers } from '../../shared/utils/formatNumbers';
import { NotFound } from '../../Molecules/NotFound';
import { Skeleton } from '../../Molecules/Skeleton';
import { ErrorMessage } from '../../Molecules/ErrorMessage';
import { Button } from '../../Molecules/Button';

const styleVarianteStyles = [
  'bg-primary',
  'bg-secondary',
  'bg-accent-radiant',
  'bg-accent-rose',
  'bg-accent-purple',
  'bg-feedback-error-hard',
  'bg-accent-pacific-blue',
];

type DashboardItem = { key: string; value: number };
type DashboardItems = DashboardItem[];

export const Dashboard = () => {
  const { setErrorMessage, setIsLoading, isLoading, errorMessage } = useHandleState({ startLoading: true });
  const [data, setData] = useState<DashboardItems>([]);

  const fetchDashboard = useCallback(async () => {
    setErrorMessage('');
    setIsLoading(true);
    const result = await plainPromise(() => ApiService.get<DashboardItems>('/dashboards'));

    if (result.error || !result.data?.data) {
      const errorMessage = result.error instanceof ApiError ? result.error.message : formatI18n('message.anyError');

      setErrorMessage(errorMessage);
      setIsLoading(false);
      return;
    }

    setData(result.data.data);

    setIsLoading(false);
  }, [setErrorMessage, setIsLoading]);

  useEffect(() => {
    fetchDashboard();
  }, [fetchDashboard]);

  if (isLoading) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-3xl">
        <Skeleton className="w-[160] h-[126]" />
        <Skeleton className="w-[160] h-[126]" />
        <Skeleton className="w-[160] h-[126]" />
        <Skeleton className="w-[160] h-[126]" />
        <Skeleton className="w-[160] h-[126]" />
        <Skeleton className="w-[160] h-[126]" />
        <Skeleton className="w-[160] h-[126]" />
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="flex gap-3xl flex-col justify-center items-center">
        <ErrorMessage text={errorMessage} />
        <Button onClick={() => fetchDashboard()} className="w-full">
          {formatI18n('button.tryAgain')}
        </Button>
      </div>
    );
  }

  if (data.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-wrap gap-3xl justify-center">
      {data.map((item, index) => {
        return (
          <CardDash
            className={styleVarianteStyles[index] || styleVarianteStyles[0]}
            title={formatI18n(`label.dashboard.${item.key}`)}
            key={item.key}
            value={formatNumbers(item.value)}
          />
        );
      })}
    </div>
  );
};
