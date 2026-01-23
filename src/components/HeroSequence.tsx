import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useSpring } from 'framer-motion';

const FRAME_COUNT = 92;

interface HeroSequenceProps {
    containerRef?: React.RefObject<HTMLElement | null>;
}

export const HeroSequence: React.FC<HeroSequenceProps> = ({ containerRef: externalRef }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const internalRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    // Track either the provided external ref (the tall "track") or fall back to internal
    const { scrollYProgress } = useScroll({
        target: externalRef || internalRef,
        offset: ["start start", "60% start"]
    });

    // Smooth the progress to avoid jittery frame jumps
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 30,
        restDelta: 0.001
    });

    // Preload images
    useEffect(() => {
        let loadedCount = 0;

        const loadImages = async () => {
            const promises = Array.from({ length: FRAME_COUNT }, (_, i) => {
                const img = new Image();
                const index = i + 1;
                img.src = `/hero/hero profikoch (${index}).jpg`;
                return new Promise((resolve) => {
                    img.onload = () => {
                        loadedCount++;
                        setLoadingProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
                        resolve(img);
                    };
                    img.onerror = () => {
                        console.error(`Failed to load frame ${index}`);
                        loadedCount++;
                        setLoadingProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
                        resolve(null);
                    };
                });
            });

            const results = await Promise.all(promises);
            setImages(results.filter((img): img is HTMLImageElement => img !== null));
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    // Draw Logic
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const render = (progress: number) => {
            // Use the actual number of successfully loaded images
            const frameIndex = Math.min(images.length - 1, Math.floor(progress * (images.length - 1)));
            const image = images[frameIndex];

            if (image) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                const hRatio = canvas.width / image.width;
                const vRatio = canvas.height / image.height;
                const ratio = Math.max(hRatio, vRatio);

                const centerShift_x = (canvas.width - image.width * ratio) / 2;
                const centerShift_y = (canvas.height - image.height * ratio) / 2;

                ctx.drawImage(
                    image,
                    0, 0, image.width, image.height,
                    centerShift_x, centerShift_y, image.width * ratio, image.height * ratio
                );
            }
        };

        const unsubscribe = smoothProgress.on("change", (latest) => {
            requestAnimationFrame(() => render(latest));
        });

        // Initial render
        render(smoothProgress.get());

        const handleResize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            render(smoothProgress.get());
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);
        handleResize();

        return () => {
            unsubscribe();
            window.removeEventListener('resize', handleResize);
        };
    }, [images, smoothProgress, isLoaded]);

    if (!isLoaded) {
        return (
            <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary text-background-cream">
                <div className="w-64 h-2 bg-primary-dark/30 rounded-full overflow-hidden border border-support-blue/30">
                    <div
                        className="h-full bg-primary-red transition-all duration-300 ease-out"
                        style={{ width: `${loadingProgress}%` }}
                    />
                </div>
                <p className="mt-4 font-mono text-sm text-support-blue">{loadingProgress}% geladen</p>
            </div>
        );
    }

    return (
        <div ref={internalRef} className="absolute inset-0 overflow-hidden bg-primary">
            <canvas
                ref={canvasRef}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
        </div>
    );
};
