import React from "react";
import { useMutation, useQuery } from "react-query";
import axios, { AxiosError } from "axios";

type GreenColor = {
};

type GreenColorHex = {
};

export const Green = ({initialColor}: {initialColor: string}) => {
  const [color, setColor] = React.useState("green");

  const { data, error } = useQuery({
    queryKey: ["green"],
    queryFn: async () => {
      const response = await axios.get("/green");
      const data = response.data;
      return data;
    },
  });

  const mutate = useMutation({
    mutationKey: ["greenhex"],
    mutationFn: async () => {
      const response = await axios.post("/green", {
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

  const classFromEndpoint = data?.color ?? initialColor;

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
