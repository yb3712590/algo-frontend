interface CodePanelProps {
  title: string;
  lines: string[];
  currentLine: number;
  isSynchronized: boolean;
}

export function CodePanel({ title, lines, currentLine, isSynchronized }: CodePanelProps) {
  return (
    <section className="rounded-2xl border border-ink/10 bg-white/90 p-4 shadow-soft">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-semibold text-ink">代码讲解</h3>
        <span className="rounded-md bg-ink/5 px-2 py-1 text-xs text-ink/65">
          {isSynchronized ? "与动画同步高亮" : "本章相关算法片段"}
        </span>
      </div>
      <p className="mb-3 text-sm text-ink/70">{title}</p>

      <div className="code-shell">
        <div className="code-shell-top">
          <span />
          <span />
          <span />
        </div>
        <div className="pretty-scroll max-h-[340px] overflow-y-auto p-3">
          {lines.map((line, idx) => {
            const lineNo = idx + 1;
            const active = isSynchronized && lineNo === currentLine;
            return (
              <div
                key={`${line}-${lineNo}`}
                className={`grid grid-cols-[34px_1fr] gap-3 rounded-md px-2 py-0.5 font-mono text-xs leading-6 ${
                  active ? "bg-sun/20 text-sun" : "text-white/90"
                }`}
              >
                <span className="text-right text-white/40">{lineNo}</span>
                <span>{line}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
