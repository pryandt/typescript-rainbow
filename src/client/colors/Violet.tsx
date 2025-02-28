import React from "react";
import { useMutation, useQuery } from "react-query";
import axios, { AxiosError } from "axios";

type VioletColor = {
};

type VioletColorHex = {
};

export const Violet= ({initialColor}: {initialColor: string}) => {
  const [color, setColor] = React.useState("violet");

  const { data, error } = useQuery({
    queryKey: ["violet"],
    queryFn: async () => {
      const response = await axios.get("/violet");
      const data = response.data;
      return data;
    },
  });

  const mutate = useMutation({
    mutationKey: ["violethex"],
    mutationFn: async () => {
      const response = await axios.post("/violet", {
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
