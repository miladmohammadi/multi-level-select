/* eslint-disable */
import type { NextPage } from "next";
import { MultiLevelSelect } from "components/multi-select";

const Home: NextPage = () => {
  return (
    <div className={"w-100 flex items-center justify-center"}>
      <MultiLevelSelect
        options={[
          {
            key: 1,
            value: "hexa",
            image: "http://via.placeholder.com/50",
            children: [
              { key: 2, value: "onta", image: "http://via.placeholder.com/50" },
              {
                key: 3,
                value: "onhexa",
                image: "http://via.placeholder.com/50",
              },
              { key: 4, value: "hea", image: "http://via.placeholder.com/50" },
            ],
          },
          {
            key: 5,
            value: "beta",
            image: "http://via.placeholder.com/50",
            children: [
              {
                key: 20,
                value: "octa",
                image: "http://via.placeholder.com/50",
              },
              {
                key: 30,
                value: "fanta",
                image: "http://via.placeholder.com/50",
              },
              {
                key: 40,
                value: "mora",
                image: "http://via.placeholder.com/50",
              },
              {
                key: 40,
                value: "tena",
                image: "http://via.placeholder.com/50",
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Home;
