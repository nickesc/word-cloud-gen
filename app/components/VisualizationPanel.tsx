import type {Keyword} from "../types";
import * as THREE from "three";
import {Canvas} from "@react-three/fiber";
import {Text, Billboard, OrbitControls} from "@react-three/drei";
import {useRef, useMemo} from "react";
import "./VisualizationPanel.css";

function hashString(input: string): number {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
        hash = (hash * 31 + input.charCodeAt(i)) | 0;
    }
    return Math.abs(hash);
}

function seeded01(seed: number): number {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function Wordcloud({keywords}: {keywords: Keyword[]}) {
    const groupRef = useRef<THREE.Group>(null);

    const points = useMemo(() => {
        const p = new Float32Array(keywords.length * 3);
        const spread = 30;

        for (let i = 0; i < keywords.length; i++) {
            const keyword = keywords[i];
            const seed = hashString(`${keyword.keyword}:${keyword.score}:${i}`);

            p[i * 3] = (seeded01(seed + 1) - 0.5) * spread; // X
            p[i * 3 + 1] = (seeded01(seed + 2) - 0.5) * spread; // Y
            p[i * 3 + 2] = (seeded01(seed + 3) - 0.5) * spread; // Z
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
            <Text scale={[size / 20, size / 20, size / 20]}>{keyword.keyword}</Text>
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
