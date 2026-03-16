import { useEffect, useState } from "react";
import { CHAPTER_BY_ID, CLRS_PARTS } from "../data/algorithms";

interface SidebarProps {
  selectedChapterId: string;
  onSelectChapter: (chapterId: string) => void;
}

export function Sidebar({ selectedChapterId, onSelectChapter }: SidebarProps) {
  const selectedChapter = CHAPTER_BY_ID[selectedChapterId];
  const [openPartId, setOpenPartId] = useState<string>(selectedChapter.partId);

  useEffect(() => {
    setOpenPartId(selectedChapter.partId);
  }, [selectedChapter.partId]);

  return (
    <aside className="rounded-3xl border border-ink/10 bg-mist/80 p-4 shadow-soft backdrop-blur">
      <h1 className="text-xl font-bold text-ink">Algo Visual Lab</h1>
      <p className="mt-1 text-sm text-ink/70">基于《算法导论》目录的交互学习平台</p>
      <p className="mt-2 text-xs text-ink/55">非当前分部章节会自动折叠，保持阅读聚焦。</p>

      <div className="mt-5 space-y-3">
        {CLRS_PARTS.map((part) => {
          const isOpen = openPartId === part.id;
          return (
            <section key={part.id} className="rounded-2xl border border-ink/10 bg-white/60">
              <button
                type="button"
                onClick={() => setOpenPartId(isOpen ? "" : part.id)}
                className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left"
              >
                <span className="text-sm font-semibold text-ink">{part.title}</span>
                <span
                  className={`inline-block text-xs text-ink/60 transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
              {isOpen && (
                <div className="space-y-1 border-t border-ink/10 px-2 py-2">
                  {part.chapters.map((chapterId) => {
                    const chapter = CHAPTER_BY_ID[chapterId];
                    const active = chapterId === selectedChapterId;
                    return (
                      <button
                        key={chapterId}
                        type="button"
                        onClick={() => onSelectChapter(chapterId)}
                        className={`w-full rounded-lg px-2.5 py-2 text-left text-sm transition ${
                          active ? "bg-sea text-white" : "text-ink hover:bg-ink/5"
                        }`}
                      >
                        <span className="mr-2 text-xs opacity-75">{chapter.chapterLabel}</span>
                        <span>{chapter.title}</span>
                        {(chapter.visualizationId || chapter.figureType) && (
                          <span
                            className={`ml-2 rounded-md px-1.5 py-0.5 text-[10px] ${
                              active ? "bg-white/20" : "bg-sun/20 text-ink/75"
                            }`}
                          >
                            图示
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </aside>
  );
}
