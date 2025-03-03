import React from "react";
import { useMutation, useQuery } from "react-query";
import axios, { AxiosError } from "axios";

type GreenColor = {
  initialColor: string;
};

type ResponseBodyGreen = { color: string; optionalProp?: number };
type GreenColorHex = {};

export const Green: React.FC<GreenColor> = (props) => {
  
  const initialColor = props.initialColor;
  const [color, setColor] = React.useState("green");

  const { data, error } = useQuery<
    ResponseBodyGreen,
    AxiosError<{ colorError: string }>
  >
  ({
    queryKey: ["green"],
    queryFn: async () => {
      const response = await axios.get<ResponseBodyGreen>("/green");
      const data = response.data;
      return data;
    },
  });

  const mutate = useMutation({
    mutationKey: ["greenhex"],
    mutationFn: async () => {
      const response = await axios.post<ResponseBodyGreen>("/green", {
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
      // className={classFromEndpoint}
      // onClick={onClickHandler}
      // style={{ backgroundColor: color }}
    ></div>
  );
};
