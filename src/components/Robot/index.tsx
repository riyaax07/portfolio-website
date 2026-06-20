import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, Environment } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function RobotModel() {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/models/RobotExpressive.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const clipName = actions["Wave"] ? "Wave" : Object.keys(actions)[0];
    const action = clipName ? actions[clipName] : null;
    action?.reset().fadeIn(0.5).play();
    return () => {
      action?.fadeOut(0.5);
    };
  }, [actions]);

  // Scroll-tied movement: rotates and shifts as you scroll through the page,
  // mirroring how the original character reacted to the landing/about/whatIDO sections.
  useEffect(() => {
    if (!group.current) return;
    const triggers: ScrollTrigger[] = [];

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".landing-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    tl1
      .to(group.current.rotation, { y: 1.2, duration: 1 }, 0)
      .to(group.current.position, { x: -1.2, duration: 1 }, 0);
    if (tl1.scrollTrigger) triggers.push(tl1.scrollTrigger);

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    tl2.to(group.current.position, { y: -3.5, z: -2, duration: 1 }, 0);
    if (tl2.scrollTrigger) triggers.push(tl2.scrollTrigger);

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".whatIDO",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    tl3.to(group.current.rotation, { y: -1.5, duration: 1 }, 0);
    if (tl3.scrollTrigger) triggers.push(tl3.scrollTrigger);

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  // Small idle wobble so it never looks fully frozen between scroll updates
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.03;
    }
  });

  return <primitive ref={group} object={scene} scale={1.4} position={[0, -1.6, 0]} />;
}

const Robot = () => {
  return (
    <div className="robot-model" style={{ width: "100%", height: "100%", minHeight: "400px" }}>
      <Canvas camera={{ position: [0, 0.5, 4], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 2]} intensity={1.2} />
        <Suspense fallback={null}>
          <RobotModel />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

useGLTF.preload("/models/RobotExpressive.glb");

export default Robot;
