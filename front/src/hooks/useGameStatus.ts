import { useEffect } from "react";
import useMiniville, { useMinivilleRoom } from "../zustand/miniville";

const useGameStatus = (id: string | undefined) => {
  const url = import.meta.env.VITE_API_URL + `/room/sse/${id}`;
  const { setter: gameSetter } = useMiniville();
  const { setter: roomSetter } = useMinivilleRoom();

  useEffect(() => {
    if (!id) return;
    const eventSource = new EventSource(url);

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data && data.gameStatus) {
        gameSetter(data);
      } else {
        roomSetter(data);
      }

      return () => {
        eventSource.close();
      };
    };
  }, [id]);
};

export default useGameStatus;
