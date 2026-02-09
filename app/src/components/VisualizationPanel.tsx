import type {Keyword} from "../types";
import * as THREE from "three";
import {Canvas} from "@react-three/fiber";
import {Text, Billboard, OrbitControls} from "@react-three/drei";
import {useRef, useMemo} from "react";

function Wordcloud({keywords}: {keywords: Keyword[]}) {
    const groupRef = useRef<THREE.Group>(null);

    const points = useMemo(() => {
        const p = new Float32Array(keywords.length * 3);
        for (let i = 0; i < keywords.length; i++) {
            const t = i * 2.399963229728653;
            const radius = 1.2 + i * 0.06;
            p[i * 3] = Math.cos(t) * radius; // X
            p[i * 3 + 1] = (i - keywords.length / 2) * 0.08; // Y
            p[i * 3 + 2] = Math.sin(t) * radius; // Z
        }
        return p;
    }, [keywords]);

    return (
        <group ref={groupRef}>
            {keywords.map((k, i) => (
                <Word
                    key={`${k.keyword}-${k.score}`}
                    keyword={k}
                    position={[points[i * 3], points[i * 3 + 1], points[i * 3 + 2]]}
                    size={k.score}
                />
            ))}
        </group>
    );
}

function Word({keyword, position, size}: {keyword: Keyword; position: [number, number, number]; size: number}) {
    return (
        <Billboard position={position}>
            <Text scale={[size / 10, size / 10, size / 10]}>
                {keyword.keyword}
            </Text>
        </Billboard>
    );
}

function VisualizationPanel({keywords}: {keywords: Keyword[]}) {
    return (
        <section id="visualization-panel">
            <Canvas camera={{position: [0, 0, 15], fov: 55}}>
                <Wordcloud keywords={keywords} />
                <OrbitControls makeDefault target={[0, 0, 0]} />
            </Canvas>
        </section>
    );
}

export default VisualizationPanel;
