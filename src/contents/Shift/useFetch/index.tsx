import React from "react";

const useFetch = ({
  url,
  fetcher
}: {
  url: string;
  fetcher: (req?: any) => void;
}) => {
  const [data, setData] = React.useState<any>(null);
  const [error, setError] = React.useState<any>(null);
  const [isLoading, setIsloading] = React.useState<boolean>(false);
  const [isOnline, setIsOnline] = React.useState<boolean>(true);

  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return { data, error, isLoading };
};

export default useFetch;

export const statusBar = () => {
  const [isOnline, setIsOnline] = React.useState<boolean>(true);

  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
};
