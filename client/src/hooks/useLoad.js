import { useEffect, useState } from "react";
import { unknownError } from "../errors/common.error";

const useLoad = (loadFunc, params = [], errors = []) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const resetError = () => setError(null);

  async function load() {
    resetError();
    setLoading(true);
    const res = await loadFunc(...params);
    setLoading(false);

    if (!res.ok) {
      const code = res.data?.code;

      const knownError = errors.find((e) => e.code === code);
      if (!knownError) return setError(unknownError);

      return setError(knownError);
    }

    setData(res.data);
  }

  useEffect(() => {
    if (error) return;

    load();
  }, []);

  const reload = async () => {
    if (error) return;

    await load();
  };

  return {
    data,
    setData,
    loading,
    error,
    reload,
  };
};

export default useLoad;
