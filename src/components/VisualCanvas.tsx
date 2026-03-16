import { motion } from "framer-motion";
import { ChapterFigure } from "./ChapterFigure";
import { AlgorithmFrame, FigureType } from "../types";

type SpeedLevel = "slow" | "medium" | "fast";

interface VisualCanvasProps {
  title: string;
  frame: AlgorithmFrame;
  visualizationMode: "animated" | "static";
  figureType?: FigureType;
  isPlaying: boolean;
  currentStep: number;
  totalSteps: number;
  speed: SpeedLevel;
  onTogglePlay: () => void;
  onReset: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSpeedChange: (speed: SpeedLevel) => void;
  onShuffleData: () => void;
}

const SPEED_LABELS: Record<SpeedLevel, string> = {
  slow: "慢",
  medium: "中",
  fast: "快"
};

function barColor(index: number, frame: AlgorithmFrame): string {
  if (frame.swappedIndices.includes(index)) {
    return "bg-berry";
  }
  if (frame.pivotIndex === index) {
    return "bg-sun";
  }
  if (frame.activeIndices.includes(index)) {
    return "bg-ink";
  }
  if (frame.sortedIndices.includes(index)) {
    return "bg-sea";
  }
  return "bg-sea/65";
}

export function VisualCanvas({
  title,
  frame,
  visualizationMode,
  figureType,
  isPlaying,
  currentStep,
  totalSteps,
  speed,
  onTogglePlay,
  onReset,
  onPrev,
  onNext,
  onSpeedChange,
  onShuffleData
}: VisualCanvasProps) {
  const isAnimated = visualizationMode === "animated";
  const disabledPrev = currentStep <= 0;
  const disabledNext = currentStep >= totalSteps - 1;
  const maxValue = Math.max(...frame.array, 1);

  return (
    <section className="rounded-2xl border border-ink/10 bg-white/90 p-4 shadow-soft">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-base font-semibold text-ink">{title}</h3>
        <span className="rounded-lg bg-ink/5 px-2 py-1 text-xs text-ink/70">
          {isAnimated ? frame.note : "静态图示"}
        </span>
      </div>

      {isAnimated && (
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onTogglePlay}
            className="rounded-lg bg-sea px-4 py-2 text-sm font-semibold text-white hover:bg-sea/90"
          >
            {isPlaying ? "暂停" : "开始"}
          </button>
          <button
            type="button"
            onClick={onReset}
            className="rounded-lg border border-ink/20 px-3 py-2 text-sm text-ink hover:bg-ink/5"
          >
            重置
          </button>
          <button
            type="button"
            onClick={onPrev}
            disabled={disabledPrev}
            className="rounded-lg border border-ink/20 px-3 py-2 text-sm text-ink disabled:cursor-not-allowed disabled:opacity-40 hover:bg-ink/5"
          >
            上一步
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={disabledNext}
            className="rounded-lg border border-ink/20 px-3 py-2 text-sm text-ink disabled:cursor-not-allowed disabled:opacity-40 hover:bg-ink/5"
          >
            下一步
          </button>
          <button
            type="button"
            onClick={onShuffleData}
            className="rounded-lg border border-sun/40 bg-sun/15 px-3 py-2 text-sm text-ink hover:bg-sun/25"
          >
            重新生成数据
          </button>
          <span className="ml-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink/55">速度</span>
          {(Object.keys(SPEED_LABELS) as SpeedLevel[]).map((level) => {
            const active = level === speed;
            return (
              <button
                key={level}
                type="button"
                onClick={() => onSpeedChange(level)}
                className={`rounded-md px-3 py-1.5 text-sm ${
                  active ? "bg-ink text-white" : "bg-ink/10 text-ink hover:bg-ink/15"
                }`}
              >
                {SPEED_LABELS[level]}
              </button>
            );
          })}
          <span className="ml-auto text-sm text-ink/70">
            进度：{Math.min(currentStep + 1, totalSteps)} / {totalSteps}
          </span>
        </div>
      )}

      <div className="rounded-xl bg-gradient-to-b from-mist to-white p-3">
        {isAnimated ? (
          <div className="h-[360px]">
            <div className="flex h-full items-end gap-1">
              {frame.array.map((value, index) => (
                <motion.div
                  key={`${index}-${value}`}
                  layout
                  transition={{ type: "spring", stiffness: 240, damping: 22 }}
                  className={`${barColor(index, frame)} relative flex-1 rounded-t-md`}
                  style={{ height: `${Math.max((value / maxValue) * 100, 3)}%` }}
                >
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-ink/70">
                    {value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          figureType && <ChapterFigure figureType={figureType} />
        )}
      </div>

      {isAnimated && (
        <div className="mt-3 flex flex-wrap gap-3 text-xs text-ink/70">
          <span>深色：当前比较</span>
          <span>红色：当前交换</span>
          <span>橙色：Pivot</span>
          <span>绿色：已就位</span>
        </div>
      )}
    </section>
  );
}
