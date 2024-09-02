import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import useMiniville, { useMinivilleRoom } from "../zustand/miniville";

const useGameStatus = (id: string | undefined) => {
  const queryClient = useQueryClient();
  const url = `http://localhost:8000/api/room/sse/${id}`;
  const { setter } = useMiniville();
  const { setter: roomSetter } = useMinivilleRoom();

  useEffect(() => {
    if (!id) return;
    const eventSource = new EventSource(url);

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data && data.gameStatus) {
        queryClient.setQueryData(
          ["SSE_DATA"],
          () => setter(data.gameStatus),
          data,
        );
      } else {
        queryClient.setQueryData(["SSE_DATA"], () => roomSetter(data));
      }

      return () => {
        eventSource.close();
      };
    };
  }, [id, queryClient]);

  return useQuery({
    queryKey: ["SSE_DATA"],
    enabled: false,
  });
};

export default useGameStatus;
