import { FigureType } from "../types";

interface ChapterFigureProps {
  figureType: FigureType;
}

function Node({
  x,
  y,
  label,
  tone = "fill-white"
}: {
  x: number;
  y: number;
  label: string;
  tone?: string;
}) {
  return (
    <>
      <circle cx={x} cy={y} r="14" className={`${tone} stroke-ink/30`} />
      <text x={x} y={y + 4} textAnchor="middle" className="fill-ink text-[10px]">
        {label}
      </text>
    </>
  );
}

function Edge({
  x1,
  y1,
  x2,
  y2,
  highlighted = false
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  highlighted?: boolean;
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      className={highlighted ? "stroke-sun stroke-[2.5]" : "stroke-ink/35 stroke-[1.7]"}
    />
  );
}

function HeapTreeFigure() {
  return (
    <svg viewBox="0 0 420 220" className="h-[320px] w-full">
      <Edge x1={210} y1={36} x2={120} y2={92} />
      <Edge x1={210} y1={36} x2={300} y2={92} />
      <Edge x1={120} y1={92} x2={70} y2={152} />
      <Edge x1={120} y1={92} x2={170} y2={152} />
      <Edge x1={300} y1={92} x2={250} y2={152} />
      <Edge x1={300} y1={92} x2={350} y2={152} />
      <Node x={210} y={36} label="97" tone="fill-sun/45" />
      <Node x={120} y={92} label="76" />
      <Node x={300} y={92} label="61" />
      <Node x={70} y={152} label="42" />
      <Node x={170} y={152} label="33" />
      <Node x={250} y={152} label="28" />
      <Node x={350} y={152} label="11" />
      <text x="10" y="210" className="fill-ink/65 text-xs">
        最大堆示意：父节点总是大于等于子节点
      </text>
    </svg>
  );
}

function StackQueueFigure() {
  return (
    <div className="h-[320px] w-full p-4">
      <div className="grid h-full grid-cols-2 gap-4">
        <div className="rounded-xl border border-ink/20 bg-white/70 p-3">
          <p className="text-sm font-semibold text-ink">栈（LIFO）</p>
          <div className="mt-3 flex h-[220px] flex-col-reverse gap-2">
            {["push 7", "push 4", "push 2"].map((item, idx) => (
              <div
                key={item}
                className={`rounded-md px-3 py-2 text-sm ${
                  idx === 0 ? "bg-sun/35" : "bg-ink/10"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-ink/20 bg-white/70 p-3">
          <p className="text-sm font-semibold text-ink">队列（FIFO）</p>
          <div className="mt-4 flex items-center gap-2">
            {["A", "B", "C", "D"].map((item, idx) => (
              <div
                key={item}
                className={`rounded-md px-4 py-3 text-sm ${idx === 0 ? "bg-sea/35" : "bg-ink/10"}`}
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-ink/60">队头先出，队尾入队</p>
        </div>
      </div>
    </div>
  );
}

function BstFigure({ redBlack = false }: { redBlack?: boolean }) {
  return (
    <svg viewBox="0 0 420 220" className="h-[320px] w-full">
      <Edge x1={210} y1={36} x2={130} y2={92} />
      <Edge x1={210} y1={36} x2={290} y2={92} />
      <Edge x1={130} y1={92} x2={90} y2={152} />
      <Edge x1={130} y1={92} x2={170} y2={152} />
      <Edge x1={290} y1={92} x2={250} y2={152} />
      <Edge x1={290} y1={92} x2={330} y2={152} />
      <Node x={210} y={36} label="20" tone={redBlack ? "fill-berry/50" : "fill-sun/45"} />
      <Node x={130} y={92} label="12" tone={redBlack ? "fill-ink/70" : "fill-white"} />
      <Node x={290} y={92} label="31" tone={redBlack ? "fill-ink/70" : "fill-white"} />
      <Node x={90} y={152} label="7" tone={redBlack ? "fill-berry/50" : "fill-white"} />
      <Node x={170} y={152} label="16" tone={redBlack ? "fill-berry/50" : "fill-white"} />
      <Node x={250} y={152} label="24" tone={redBlack ? "fill-berry/50" : "fill-white"} />
      <Node x={330} y={152} label="38" tone={redBlack ? "fill-berry/50" : "fill-white"} />
      <text x="10" y="210" className="fill-ink/65 text-xs">
        {redBlack ? "红黑树示意：旋转 + 着色维持平衡" : "BST 示意：左子树 < 根 < 右子树"}
      </text>
    </svg>
  );
}

function DpGridFigure() {
  const cells = Array.from({ length: 5 }, (_, r) =>
    Array.from({ length: 6 }, (_, c) => `${r},${c}`)
  );
  const highlighted = new Set(["0,0", "1,1", "2,2", "3,3", "4,4"]);
  return (
    <div className="flex h-[320px] w-full items-center justify-center p-4">
      <div className="grid grid-cols-6 gap-2">
        {cells.flat().map((key) => (
          <div
            key={key}
            className={`h-10 w-10 rounded-md border border-ink/20 text-center text-[11px] leading-10 ${
              highlighted.has(key) ? "bg-sun/35" : "bg-white/80"
            }`}
          >
            {key.split(",").join("/")}
          </div>
        ))}
      </div>
    </div>
  );
}

function GreedyFigure() {
  return (
    <div className="h-[320px] w-full p-5">
      <p className="mb-3 text-sm font-semibold text-ink">区间调度示意（按结束时间贪心）</p>
      <div className="space-y-3">
        {[
          [1, 4, true],
          [3, 5, false],
          [4, 7, true],
          [5, 9, false],
          [8, 11, true]
        ].map(([start, end, pick], idx) => (
          <div key={`${start}-${end}`} className="flex items-center gap-3 text-xs text-ink/70">
            <span className="w-6">{idx + 1}</span>
            <div className="relative h-6 w-full rounded-md bg-ink/5">
              <div
                className={`absolute top-0 h-6 rounded-md ${
                  pick ? "bg-sea/55" : "bg-ink/20"
                }`}
                style={{ left: `${Number(start) * 8}%`, width: `${(Number(end) - Number(start)) * 8}%` }}
              />
            </div>
            <span className={pick ? "text-sea" : ""}>
              [{start}, {end}]
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DisjointSetFigure() {
  return (
    <svg viewBox="0 0 420 220" className="h-[320px] w-full">
      <Edge x1={80} y1={38} x2={80} y2={96} highlighted />
      <Edge x1={80} y1={96} x2={50} y2={154} highlighted />
      <Edge x1={80} y1={96} x2={110} y2={154} highlighted />
      <Edge x1={220} y1={38} x2={220} y2={96} />
      <Edge x1={220} y1={96} x2={190} y2={154} />
      <Edge x1={220} y1={96} x2={250} y2={154} />
      <Edge x1={340} y1={38} x2={340} y2={96} />
      <Node x={80} y={38} label="A" tone="fill-sun/45" />
      <Node x={80} y={96} label="B" />
      <Node x={50} y={154} label="C" />
      <Node x={110} y={154} label="D" />
      <Node x={220} y={38} label="E" tone="fill-sea/45" />
      <Node x={220} y={96} label="F" />
      <Node x={190} y={154} label="G" />
      <Node x={250} y={154} label="H" />
      <Node x={340} y={38} label="I" tone="fill-berry/45" />
      <Node x={340} y={96} label="J" />
      <text x="10" y="210" className="fill-ink/65 text-xs">
        并查集森林：union 后形成连通分组，find 快速回溯根节点
      </text>
    </svg>
  );
}

function GraphFigure({ mode }: { mode: "traversal" | "mst" | "shortest" | "flow" }) {
  return (
    <svg viewBox="0 0 460 260" className="h-[320px] w-full">
      <Edge x1={90} y1={60} x2={200} y2={40} highlighted={mode === "mst" || mode === "shortest"} />
      <Edge x1={200} y1={40} x2={320} y2={70} highlighted={mode === "shortest"} />
      <Edge x1={90} y1={60} x2={80} y2={170} highlighted={mode === "mst"} />
      <Edge x1={80} y1={170} x2={210} y2={180} highlighted={mode === "mst" || mode === "shortest"} />
      <Edge x1={210} y1={180} x2={350} y2={170} highlighted={mode !== "traversal"} />
      <Edge x1={320} y1={70} x2={350} y2={170} highlighted={mode === "flow"} />
      <Node x={90} y={60} label="S" tone="fill-sun/50" />
      <Node x={200} y={40} label="A" />
      <Node x={320} y={70} label="B" />
      <Node x={80} y={170} label="C" />
      <Node x={210} y={180} label="D" />
      <Node x={350} y={170} label="T" tone="fill-sea/55" />
      {mode === "shortest" && (
        <text x="10" y="235" className="fill-ink/65 text-xs">
          最短路示意：高亮边构成 S → A → B → T 的候选路径
        </text>
      )}
      {mode === "mst" && (
        <text x="10" y="235" className="fill-ink/65 text-xs">
          MST 示意：高亮边连接全部节点且总权重最小
        </text>
      )}
      {mode === "traversal" && (
        <text x="10" y="235" className="fill-ink/65 text-xs">
          BFS/DFS 示意：同一图结构下遍历顺序不同
        </text>
      )}
      {mode === "flow" && (
        <text x="10" y="235" className="fill-ink/65 text-xs">
          最大流示意：路径可反复增广，直到残量网络无法继续
        </text>
      )}
    </svg>
  );
}

function BTreeFigure() {
  return (
    <div className="h-[320px] w-full p-5">
      <div className="mx-auto w-[360px] space-y-4">
        <div className="rounded-xl border border-ink/20 bg-sun/30 px-4 py-3 text-center text-sm">[17 | 41]</div>
        <div className="grid grid-cols-3 gap-3">
          {["[3 | 8 | 12]", "[21 | 29 | 35]", "[52 | 68 | 79]"].map((block) => (
            <div key={block} className="rounded-lg border border-ink/20 bg-white/80 px-2 py-3 text-center text-sm">
              {block}
            </div>
          ))}
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-ink/65">B 树节点可容纳多个键，减少树高与磁盘访问次数</p>
    </div>
  );
}

function StringMatchFigure() {
  return (
    <div className="h-[320px] w-full p-4">
      <div className="rounded-xl border border-ink/20 bg-white/80 p-3 font-mono text-sm">
        <p className="text-ink/80">Text: A B A B A C A B A B C</p>
        <p className="mt-2 text-sun">Pattern: A B A B C</p>
        <p className="mt-2 text-ink/60">Prefix: [0, 0, 1, 2, 0]</p>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2 font-mono text-xs">
        {["A", "B", "A", "B", "C"].map((char, idx) => (
          <div key={char + idx} className={`rounded-md py-2 text-center ${idx < 4 ? "bg-sea/25" : "bg-sun/35"}`}>
            {char}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-ink/65">KMP 思想：失配时利用前缀信息跳过重复比较</p>
    </div>
  );
}

export function ChapterFigure({ figureType }: ChapterFigureProps) {
  switch (figureType) {
    case "heap-tree":
      return <HeapTreeFigure />;
    case "stack-queue":
      return <StackQueueFigure />;
    case "bst":
      return <BstFigure />;
    case "red-black-tree":
      return <BstFigure redBlack />;
    case "dp-grid":
      return <DpGridFigure />;
    case "greedy-interval":
      return <GreedyFigure />;
    case "disjoint-set":
      return <DisjointSetFigure />;
    case "graph-traversal":
      return <GraphFigure mode="traversal" />;
    case "mst":
      return <GraphFigure mode="mst" />;
    case "shortest-path":
      return <GraphFigure mode="shortest" />;
    case "max-flow":
      return <GraphFigure mode="flow" />;
    case "btree":
      return <BTreeFigure />;
    case "string-match":
      return <StringMatchFigure />;
    default:
      return null;
  }
}
