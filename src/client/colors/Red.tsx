import React from "react";
import { useMutation, useQuery } from "react-query";
import axios, { AxiosError } from "axios";

type RedColor = {
  color: "red" | string;
};

type RedColorHex = {
  colorHex: string;
};

export const Red = ({initialColor}: {initialColor: string}) => {
  const [color, setColor] = React.useState<string>("red");

  const { data, error } = useQuery<
    RedColor,
    AxiosError<{ colorError: string }>
  >({
    queryKey: ["red"],
    queryFn: async () => {
      const response = await axios.get<RedColor>("/red");
      const data = response.data;
      console.log(data);
      return data;
    },
  });

  const mutate = useMutation<any, AxiosError<{ colorError: string }>>({
    mutationKey: ["redhex"],
    mutationFn: async () => {
      const response = await axios.post<RedColorHex, any, RedColor>("/red", {
        color,
      });
      const data = response.data;
      const { colorHex } = data;
      setColor(colorHex);
    },
  });

  const onClickHandler = () => {
    mutate.mutate();
  };

  if (error) {
    return <div>{error.response?.data.colorError}</div>;
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
