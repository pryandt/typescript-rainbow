import React from "react";
import { useMutation, useQuery } from "react-query";
import axios, { AxiosError } from "axios";

type BlueColor = {
};

type BlueColorHex = {
};

export const Blue = ({initialColor}: {initialColor: string}) => {
  const [color, setColor] = React.useState("blue");

  const { data, error } = useQuery({
    queryKey: ["blue"],
    queryFn: async () => {
      const response = await axios.get("/blue");
      const data = response.data;
      return data;
    },
  });

  const mutate = useMutation({
    mutationKey: ["bluehex"],
    mutationFn: async () => {
      const response = await axios.post("/blue", {
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
