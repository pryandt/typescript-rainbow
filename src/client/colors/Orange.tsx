import React from "react";
import { useMutation, useQuery } from "react-query";
import axios, { AxiosError } from "axios";

type OrangeColor = {
  initialColor: string;
};
type ResponseBodyOrange = { color: string; optionalProp?: number };
type OrangeColorHex = {};

export const Orange: React.FC<OrangeColor> = (props) => {
  const initialColor = props.initialColor;
  const [color, setColor] = React.useState<string>("orange");

  const { data, error } = useQuery<
    ResponseBodyOrange,
    AxiosError<{ colorError: string }>
  >({
    queryKey: ["orange"],
    queryFn: async () => {
      const response = await axios.get<ResponseBodyOrange>("/orange");
      const data = response.data;
      return data;
    },
  });

  const mutate = useMutation({
    mutationKey: ["orangehex"],
    mutationFn: async () => {
      const response = await axios.post<ResponseBodyOrange>("/orange", {
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
