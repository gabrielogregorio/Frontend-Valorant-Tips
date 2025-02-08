export const plainPromise = async <T>(promise: () => Promise<T>) => {
  try {
    return { error: undefined, data: await promise() };
  } catch (err) {
    return { error: err, data: undefined };
  }
};
