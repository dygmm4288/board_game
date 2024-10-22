import { useEffect } from "react";
import useMiniville from "../zustand/miniville";

const useGameJson = (id: string | number | undefined) => {
  const url = import.meta.env.VITE_API_URL + `/room/sse/${id}`;
  const { setter: gameSetter } = useMiniville();

  const handleOnMessage = (event: MessageEvent) => {
    const data = JSON.parse(event.data);

    if (data && data.game_json) {
      gameSetter(data);
    }
  };

  useEffect(() => {
    if (!id) return;
    const eventSource = new EventSource(url, { withCredentials: true });

    eventSource.addEventListener("message", handleOnMessage);

    return () => {
      if (eventSource.OPEN || eventSource.CONNECTING) eventSource.close();
      eventSource.removeEventListener("message", handleOnMessage);
    };
  }, [id]);
};

export default useGameJson;
