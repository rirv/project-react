import { useEffect } from "react";

const Loading = () => {
  useEffect(() => {
    return () => {
      console.log ("La lista ya cargo");
    };
  }, []);
  return <div>Cargando...</div>;
};

export default Loading;