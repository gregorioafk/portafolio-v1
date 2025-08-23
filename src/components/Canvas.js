// import React, { Suspense } from "react";
// import { OrbitControls } from "@react-three/drei";
// import { Model } from "./Model";
// import { Canvas } from "@react-three/fiber";

// export const ModelRender = () => {
//   return (
//     <div>
//       <Canvas
//         camera={{ position: [1, 0, 12.25], fov: 15 }}
//         // eventPrefix="screen"
//         style={{
//           backgroundColor: "#142615",
//           "@media (min-width: 320px)": {
//             width: "30rem",
//             height: "30rem",
//           },
//           "@media (min-width: 700px)": {
//             width: "10rem",
//             height: "10rem",
//           },
//         }}
//       >
//         <ambientLight intensity={1.25} />
//         <ambientLight intensity={0.1} />
//         <directionalLight intensity={0.4} />
//         <Suspense>
//           <Model position={[0.025, -0.9, 1]} />
//         </Suspense>
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// };
