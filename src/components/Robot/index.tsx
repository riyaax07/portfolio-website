import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, Environment } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLoading } from "../../context/LoadingProvider";
import { setProgress } from "../Loading";

gsap.registerPlugin(ScrollTrigger);

function RobotModel({ onLoaded }: { onLoaded: () => void }) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/models/RobotExpressive.glb");
  const { actions } = useAnimations(animations, group);
  const reported = useRef(false);

  useEffect(() => {
    if (!reported.current) {
      reported.current = true;
      onLoaded();
    }
    const clipName = actions["Wave"] ? "Wave" : Object.keys(actions)[0];
    const action = clipName ? actions[clipName] : null;
    action?.reset().fadeIn(0.5).play();
    return () => {
      action?.fadeOut(0.5);
    };
  }, [actions, onLoaded]);

  useEffect(() => {
    if (!group.current) return;
    const triggers: ScrollTrigger[] = [];

    // tl1: hero section — rotate robot and slide the whole div left (CSS %)
    // exactly mirroring the original template's approach
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
      .fromTo(group.current.rotation, { y: 0 }, { y: 0.7, duration: 1 }, 0)
      .fromTo(".character-model", { x: 0 }, { x: "-25%", duration: 1 }, 0);
    if (tl1.scrollTrigger) triggers.push(tl1.scrollTrigger);

    // tl2: about section — move camera-like z depth + slight rotation
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "center 55%",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    tl2
      .to(group.current.rotation, { y: 0.92, x: 0.12, duration: 1 }, 0)
      .fromTo(".character-model", { x: "-25%" }, { x: "-4%", duration: 1 }, 0);
    if (tl2.scrollTrigger) triggers.push(tl2.scrollTrigger);

    // tl3: whatIDO — slide the WHOLE canvas div upward off-screen using CSS y%.
    // This is exactly how the original template "stops" the character —
    // it doesn't freeze a fixed element, it slides the box above the viewport.
    // When you scroll back up, it slides back down naturally.
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".whatIDO",
        start: "top top",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
    tl3
      .fromTo(
        ".character-model",
        { y: "0%" },
        { y: "-100%", duration: 4, ease: "none", delay: 1 },
        0
      )
      .to(group.current.rotation, { x: -0.04, duration: 2, delay: 1 }, 0);
    if (tl3.scrollTrigger) triggers.push(tl3.scrollTrigger);

    return () => {
      triggers.forEach((t) => t.kill());
      // Reset CSS transforms so hot-reload doesn't leave stale values
      gsap.set(".character-model", { clearProps: "all" });
    };
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.03;
    }
  });

  return <primitive ref={group} object={scene} scale={0.5} position={[0, -1.6, 0]} />;
}

const Robot = () => {
  const { setLoading } = useLoading();
  const progressRef = useRef<ReturnType<typeof setProgress> | null>(null);

  useEffect(() => {
    progressRef.current = setProgress((value) => setLoading(value));
    return () => {
      progressRef.current?.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoaded = () => {
    progressRef.current?.loaded();
  };

  return (
    <div className="character-model robot-model">
      <Canvas camera={{ position: [0, 0.5, 4], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 2]} intensity={1.2} />
        <Suspense fallback={null}>
          <RobotModel onLoaded={handleLoaded} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
};

useGLTF.preload("/models/RobotExpressive.glb");

export default Robot;