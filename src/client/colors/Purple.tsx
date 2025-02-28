import React from "react";
import { useMutation, useQuery } from "react-query";
import axios, { AxiosError } from "axios";

type PurpleColor = {
};

type PurpleColorHex = {
};

export const Purple: React.FC = () => {
  const [color, setColor] = React.useState("purple");

  const { data, error } = useQuery({
    queryKey: ["purple"],
    queryFn: async () => {
      const response = await axios.get("/purple");
      const data = response.data;
      console.log(data);
      return data;
    },
  });

  const mutate = useMutation({
    mutationKey: ["purplehex"],
    mutationFn: async () => {
      const response = await axios.post("/purple", {
        color,
      });
      const data = response.data;
    },
  });

  const onClickHandler = () => {
    mutate.mutate();
  };

  if (error) {
    // return <div>{error?.response?.data.colorError}</div>;
  }

  const classFromEndpoint = data?.color;

  return classFromEndpoint === color ? (
    <div className={classFromEndpoint} onClick={onClickHandler}></div>
  ) : (
    <div
      className={classFromEndpoint}
      onClick={onClickHandler}
      style={{ backgroundColor: color }}
    ></div>
  );
};
