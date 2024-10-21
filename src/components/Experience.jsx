import React from "react";
import { Model } from "./Model";
import { Model1 } from "./Model1";
import { Billboard, Html, Text } from "@react-three/drei";

const Experience = ({ hovered, setHoverred }) => {
  return (
    <>
      <group>
        <Model
          // scale={0.1}
          position-y={-1}
          rotation-y={-Math.PI / 2}
          hovered={hovered}
          setHoverred={setHoverred}
        />
      </group>
      {/* <Model1 position-y={-1} /> */}
    </>
  );
};

export default Experience;
