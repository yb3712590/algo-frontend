import { useEffect, useState } from "react";
import { CodePanel } from "./components/CodePanel";
import { ExplanationPanel } from "./components/ExplanationPanel";
import { Sidebar } from "./components/Sidebar";
import { VisualCanvas } from "./components/VisualCanvas";
import { CHAPTER_BY_ID, DEFAULT_CHAPTER_ID, VISUALIZATIONS } from "./data/algorithms";
import { AlgorithmFrame } from "./types";

type SpeedLevel = "slow" | "medium" | "fast";

const SPEED_MS: Record<SpeedLevel, number> = {
  slow: 1000,
  medium: 600,
  fast: 280
};

function createRandomArray(length = 18): number[] {
  return Array.from({ length }, () => Math.floor(Math.random() * 90) + 10);
}

export default function App() {
  const [selectedChapterId, setSelectedChapterId] = useState(DEFAULT_CHAPTER_ID);
  const [sourceArray, setSourceArray] = useState<number[]>(() => createRandomArray());
  const [frames, setFrames] = useState<AlgorithmFrame[]>([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [speed, setSpeed] = useState<SpeedLevel>("medium");
  const [isPlaying, setIsPlaying] = useState(false);

  const selectedChapter = CHAPTER_BY_ID[selectedChapterId];
  const selectedVisualization = selectedChapter.visualizationId
    ? VISUALIZATIONS[selectedChapter.visualizationId]
    : null;

  const hasAnimatedVisualization = Boolean(selectedVisualization);
  const hasStaticFigure = Boolean(selectedChapter.figureType);
  const hasAnyVisual = hasAnimatedVisualization || hasStaticFigure;
  const codeLines = selectedVisualization?.pseudocode ?? selectedChapter.pseudocode ?? null;
  const hasCodePanel = Boolean(codeLines && codeLines.length > 0);
  const hasSplitPanels = hasAnyVisual && hasCodePanel;

  const currentFrame = frames[stepIndex] ?? {
    array: sourceArray,
    activeIndices: [],
    swappedIndices: [],
    sortedIndices: [],
    pivotIndex: null,
    line: 1,
    note: "初始化中..."
  };

  useEffect(() => {
    if (!hasAnimatedVisualization || !selectedVisualization) {
      setFrames([
        {
          array: sourceArray,
          activeIndices: [],
          swappedIndices: [],
          sortedIndices: [],
          pivotIndex: null,
          line: 1,
          note: "静态图示章节"
        }
      ]);
      setStepIndex(0);
      setIsPlaying(false);
      return;
    }

    const nextFrames = selectedVisualization.generateFrames(sourceArray);
    setFrames(nextFrames);
    setStepIndex(0);
    setIsPlaying(false);
  }, [hasAnimatedVisualization, selectedVisualization, sourceArray]);

  useEffect(() => {
    if (!hasAnimatedVisualization || !isPlaying || frames.length <= 1) {
      return;
    }
    if (stepIndex >= frames.length - 1) {
      setIsPlaying(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setStepIndex((current) => Math.min(current + 1, frames.length - 1));
    }, SPEED_MS[speed]);

    return () => window.clearTimeout(timer);
  }, [hasAnimatedVisualization, isPlaying, stepIndex, frames, speed]);

  function handleTogglePlay(): void {
    if (!hasAnimatedVisualization) {
      return;
    }
    if (stepIndex >= frames.length - 1) {
      setStepIndex(0);
      setIsPlaying(true);
      return;
    }
    setIsPlaying((prev) => !prev);
  }

  function handleReset(): void {
    setIsPlaying(false);
    setStepIndex(0);
  }

  function handlePrev(): void {
    if (!hasAnimatedVisualization) {
      return;
    }
    setIsPlaying(false);
    setStepIndex((current) => Math.max(current - 1, 0));
  }

  function handleNext(): void {
    if (!hasAnimatedVisualization) {
      return;
    }
    setIsPlaying(false);
    setStepIndex((current) => Math.min(current + 1, frames.length - 1));
  }

  function handleShuffle(): void {
    if (!hasAnimatedVisualization) {
      return;
    }
    setSourceArray(createRandomArray());
  }

  return (
    <div className="min-h-screen bg-canvas px-4 py-5 text-ink md:px-6">
      <div className="mx-auto grid max-w-[1450px] gap-4 lg:grid-cols-[340px_minmax(0,1fr)]">
        <Sidebar selectedChapterId={selectedChapterId} onSelectChapter={setSelectedChapterId} />

        <main className="space-y-4">
          <header className="rounded-2xl border border-ink/10 bg-white/80 px-4 py-3 shadow-soft backdrop-blur">
            <h2 className="text-lg font-bold">
              {selectedChapter.chapterLabel} · {selectedChapter.title}
            </h2>
            <p className="mt-1 text-sm text-ink/75">{selectedChapter.summary}</p>
          </header>

          <ExplanationPanel chapter={selectedChapter} />

          {(hasAnyVisual || hasCodePanel) && (
            <section
              className={
                hasSplitPanels
                  ? "grid gap-4 xl:grid-cols-[minmax(0,1.3fr)_minmax(360px,0.9fr)]"
                  : "space-y-4"
              }
            >
              {hasAnyVisual && (
                <VisualCanvas
                  title={selectedVisualization ? selectedVisualization.name : `${selectedChapter.title} 图示`}
                  frame={currentFrame}
                  visualizationMode={hasAnimatedVisualization ? "animated" : "static"}
                  figureType={selectedChapter.figureType}
                  isPlaying={isPlaying}
                  currentStep={stepIndex}
                  totalSteps={frames.length}
                  speed={speed}
                  onTogglePlay={handleTogglePlay}
                  onReset={handleReset}
                  onPrev={handlePrev}
                  onNext={handleNext}
                  onSpeedChange={setSpeed}
                  onShuffleData={handleShuffle}
                />
              )}

              {hasCodePanel && codeLines && (
                <CodePanel
                  title={selectedChapter.title}
                  lines={codeLines}
                  currentLine={currentFrame.line}
                  isSynchronized={hasAnimatedVisualization}
                />
              )}
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
