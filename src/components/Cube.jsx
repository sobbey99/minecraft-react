import { useBox } from "@react-three/cannon";
import * as textures from "../images/textures";

const Cube = ({ position, texture }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));

  const activetexture = textures[texture + "Texture"];
  console.log({ activetexture });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial map={activetexture} attach="material" />
    </mesh>
  );
};

export default Cube;
