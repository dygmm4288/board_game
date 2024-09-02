import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

const useGameStatus = (id: string | undefined) => {
  const queryClient = useQueryClient();
  const url = `http://localhost:8000/api/room/sse/${id}`;

  useEffect(() => {
    if (!id) return;
    const eventSource = new EventSource(url);

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);

      queryClient.setQueryData(
        ["SSE_DATA"],
        (oldData: unknown[]) => [...(data(oldData) || [])],
        data,
      );

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
