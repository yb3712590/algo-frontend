import { ChapterTopic, IndustryHighlight } from "../types";

interface ExplanationPanelProps {
  chapter: ChapterTopic;
}

const toneClass: Record<IndustryHighlight["tone"], string> = {
  sun: "text-sun",
  sea: "text-sea",
  berry: "text-berry",
  ink: "text-ink"
};

export function ExplanationPanel({ chapter }: ExplanationPanelProps) {
  return (
    <section className="rounded-2xl border border-ink/10 bg-white/90 p-5 shadow-soft">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-xl font-bold text-ink">概念讲解</h3>
        <span className="rounded-md bg-ink/5 px-2 py-1 text-xs text-ink/65">
          {chapter.chapterLabel} · {chapter.title}
        </span>
      </div>

      <p className="mt-3 text-base leading-7 text-ink/85">{chapter.summary}</p>

      <div className="mt-4 space-y-3">
        {chapter.conceptNarrative.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-7 text-ink/80">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-5 rounded-xl bg-mist/70 p-4">
        <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/60">关键概念</h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {chapter.keyIdeas.map((item) => (
            <span key={item} className="rounded-lg bg-white/80 px-3 py-1.5 text-sm text-ink/85">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-ink/10 bg-white/80 p-4">
        <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/60">生产应用领域</h4>
        <div className="mt-3 space-y-2">
          {chapter.industryHighlights.map((item) => (
            <p key={`${item.domain}-${item.detail}`} className="text-sm leading-6 text-ink/80">
              <span className={`font-semibold ${toneClass[item.tone]}`}>{item.domain}</span>
              <span>：{item.detail}</span>
            </p>
          ))}
        </div>
      </div>

      {chapter.complexity && (
        <div className="mt-5 rounded-xl bg-ink/[0.04] p-4">
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/60">复杂度参考</h4>
          <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-ink/85">
            <span>最好时间</span>
            <span>{chapter.complexity.best}</span>
            <span>平均时间</span>
            <span>{chapter.complexity.avg}</span>
            <span>最坏时间</span>
            <span>{chapter.complexity.worst}</span>
            <span>空间复杂度</span>
            <span>{chapter.complexity.space}</span>
          </div>
        </div>
      )}

      {chapter.sourceNotes && chapter.sourceNotes.length > 0 && (
        <div className="mt-5 rounded-xl bg-sea/10 p-4">
          <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-sea">笔记来源</h4>
          <div className="mt-2 space-y-1">
            {chapter.sourceNotes.map((notePath) => (
              <p key={notePath} className="font-mono text-xs leading-5 text-ink/75">
                {notePath}
              </p>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
