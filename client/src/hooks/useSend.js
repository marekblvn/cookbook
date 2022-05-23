import { useState } from "react";
import { unknownError } from "../errors/common.error";

const useSend = (sendFunc, errors = []) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const resetError = () => setError(null);

  async function send(params = [], successCb, errorCb) {
    resetError();
    setLoading(true);
    const res = await sendFunc(...params);
    setLoading(false);

    if (!res.ok) {
      const code = res.data?.code;

      const knownError = errors.find((e) => e.code === code);
      if (!knownError) {
        errorCb && errorCb(unknownError);
        return setError(unknownError);
      }

      errorCb && errorCb(knownError);

      return setError(knownError);
    }

    successCb();

    setData(res.data);
  }

  return {
    data,
    setData,
    loading,
    error,
    send,
  };
};

export default useSend;
