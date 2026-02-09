import type {Keyword} from "../types";
import * as THREE from "three";
import {Canvas} from "@react-three/fiber";
//import type {ThreeElements} from "@react-three/fiber";
import {Text, Billboard} from "@react-three/drei";
import {useRef, useMemo} from "react";

function Wordcloud({keywords}: {keywords: Keyword[]}) {
    const groupRef = useRef<THREE.Group>(null);

    const points = useMemo(() => {
        const p = new Float32Array(keywords.length);
        for (let i = 0; i < keywords.length; i++) {
            p[i * 3] = (Math.random() - 0.5) * 10; // X
            p[i * 3 + 1] = (Math.random() - 0.5) * 10; // Y
            p[i * 3 + 2] = (Math.random() - 0.5) * 10; // Z
        }
        return p;
    }, [keywords]);

    return (
        <group ref={groupRef}>
            {keywords.map((k, i) => (
                <Word keyword={k} position={[points[i * 3], points[i * 3 + 1], points[i * 3 + 2]]} />
            ))}
        </group>
    );
}

function Word({keyword, position}: {keyword: Keyword; position: [number, number, number]}) {
    return (
        <Billboard key={`${keyword.keyword}-${keyword.score}`}>
            <Text position={position}>{keyword.keyword}</Text>
        </Billboard>
    );
}

function VisualizationPanel({keywords, url}: {keywords: Keyword[]; url: string}) {
    return (
        <section id="visualization-panel">
            <Canvas camera={{position: [0, 0, 0]}}>
                <mesh>
                    <meshBasicMaterial color="red" />
                    <Wordcloud keywords={keywords} />
                </mesh>
            </Canvas>
        </section>
    );
}

export default VisualizationPanel;
