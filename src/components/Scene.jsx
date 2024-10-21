import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experience from './Experience'
import { AccumulativeShadows, ContactShadows, Environment, OrbitControls, RandomizedLight, Stage } from '@react-three/drei'

const Scene = ({hovered, setHoverred}) => {
  return (
    <Canvas flat camera={{position:[0,1.5,6.5], fov:35}} shadows>
        <color attach={"background"} args={["#FDFDFD"]} />
        <Experience hovered={hovered} setHoverred={setHoverred} />
        {/* <Stage adjustCamera={false} /> */}
        <Environment files={"https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_08_1k.hdr"} environmentIntensity={1} />
        {/* <Environment preset='city' /> */}
        {/* <ContactShadows position-y={-1} opacity={.5} blur={2} /> */}
        <AccumulativeShadows position={[0, -1, 0]} frames={70} alphaTest={.7} scale={15}>
          <RandomizedLight amount={10} radius={15} ambient={.8} position={[1, 5, -1]} />
        </AccumulativeShadows>
        <OrbitControls maxPolarAngle={Math.PI/2.3} />
    </Canvas>
  )
}

export default Scene