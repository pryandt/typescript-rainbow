import React from "react";
import { useMutation, useQuery } from "react-query";
import axios, { AxiosError } from "axios";

type OrangeColor = {
};

type OrangeColorHex = {
};

export const Orange: React.FC = () => {
  const [color, setColor] = React.useState("orange");

  const { data, error } = useQuery({
    queryKey: ["orange"],
    queryFn: async () => {
      const response = await axios.get("/orange");
      const data = response.data;
      console.log(data);
      return data;
    },
  });

  const mutate = useMutation({
    mutationKey: ["orangehex"],
    mutationFn: async () => {
      const response = await axios.post("/orange", {
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
