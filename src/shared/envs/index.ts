const processInvalidCharsInEnvs = (env = ''): string => {
  return (
    env
      ?.toString()
      .replace(/[\n\r]/g, '')
      .trim() || ''
  );
};

export const NEXT_PUBLIC_API_HOST = processInvalidCharsInEnvs(process.env.NEXT_PUBLIC_API_HOST);
