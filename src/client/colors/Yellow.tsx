import React from "react";
import { useMutation, useQuery } from "react-query";
import axios, { AxiosError } from "axios";
import {YellowResponseBody} from "../../server/colors/yellow";

type YellowColor = {
  initialColor: string
};

type YellowColorHex = {
};

export const Yellow: React.FC<YellowColor> = ({ initialColor }) => {
  const [color, setColor] = React.useState<string>("yellow");

  const { data, error } = useQuery({
    queryKey: ["yellow"],
    queryFn: async () => {
      const response = await axios.get<YellowResponseBody>("/yellow");
      const data = response.data;
      return data;
    },
  });

  const mutate = useMutation({
    mutationKey: ["yellowhex"],
    mutationFn: async () => {
      const response = await axios.post("/yellow", {
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
