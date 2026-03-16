import { generateBubbleSortFrames, generateQuickSortFrames } from "../algorithms/sorting";
import {
  ChapterTopic,
  ClrsPart,
  FigureType,
  IndustryHighlight,
  VisualizationAlgorithmId,
  VisualizationDefinition
} from "../types";
import { CHAPTER_NOTES_DIGEST } from "./chapterNotesDigest";

interface RawChapter extends Omit<ChapterTopic, "conceptNarrative" | "industryHighlights" | "sourceNotes"> {}

export const VISUALIZATIONS: Record<VisualizationAlgorithmId, VisualizationDefinition> = {
  "bubble-sort": {
    id: "bubble-sort",
    name: "冒泡排序（第2章示例）",
    pseudocode: [
      "bubbleSort(A):",
      "  for i = 0 to n - 2:",
      "    for j = 0 to n - 2 - i:",
      "      if A[j] > A[j + 1]:",
      "        swap(A[j], A[j + 1])",
      "  return A"
    ],
    generateFrames: generateBubbleSortFrames
  },
  "quick-sort": {
    id: "quick-sort",
    name: "快速排序（第7章）",
    pseudocode: [
      "quickSort(A, low, high):",
      "  if low < high:",
      "    p = partition(A, low, high)",
      "    quickSort(A, low, p - 1)",
      "    quickSort(A, p + 1, high)",
      "",
      "partition(A, low, high):",
      "  pivot = A[high]",
      "  i = low - 1",
      "  for j = low to high - 1:",
      "    if A[j] <= pivot:",
      "      i += 1; swap(A[i], A[j])",
      "  swap(A[i + 1], A[high]); return i + 1"
    ],
    generateFrames: generateQuickSortFrames
  }
};

export const CLRS_PARTS: ClrsPart[] = [
  {
    id: "part-1",
    title: "第一部分 基础知识",
    chapters: ["ch-01", "ch-02", "ch-03", "ch-04", "ch-05"]
  },
  {
    id: "part-2",
    title: "第二部分 排序和顺序统计量",
    chapters: ["ch-06", "ch-07", "ch-08", "ch-09"]
  },
  {
    id: "part-3",
    title: "第三部分 数据结构",
    chapters: ["ch-10", "ch-11", "ch-12", "ch-13", "ch-14"]
  },
  {
    id: "part-4",
    title: "第四部分 高级设计和分析技术",
    chapters: ["ch-15", "ch-16", "ch-17"]
  },
  {
    id: "part-5",
    title: "第五部分 高级数据结构",
    chapters: ["ch-18", "ch-19", "ch-20", "ch-21"]
  },
  {
    id: "part-6",
    title: "第六部分 图算法",
    chapters: ["ch-22", "ch-23", "ch-24", "ch-25", "ch-26"]
  },
  {
    id: "part-7",
    title: "第七部分 算法问题选编",
    chapters: [
      "ch-27",
      "ch-28",
      "ch-29",
      "ch-30",
      "ch-31",
      "ch-32",
      "ch-33",
      "ch-34",
      "ch-35"
    ]
  },
  {
    id: "part-8",
    title: "第八部分 附录：数学基础知识",
    chapters: ["app-a", "app-b", "app-c", "app-d"]
  }
];

const FIGURE_BY_CHAPTER: Partial<Record<string, FigureType>> = {
  "ch-06": "heap-tree",
  "ch-10": "stack-queue",
  "ch-12": "bst",
  "ch-13": "red-black-tree",
  "ch-15": "dp-grid",
  "ch-16": "greedy-interval",
  "ch-18": "btree",
  "ch-21": "disjoint-set",
  "ch-22": "graph-traversal",
  "ch-23": "mst",
  "ch-24": "shortest-path",
  "ch-26": "max-flow",
  "ch-32": "string-match"
};

const CHAPTER_PSEUDOCODE: Partial<Record<string, string[]>> = {
  "ch-03": [
    "compareGrowth(f, g):",
    "  choose c1, c2, n0",
    "  if c1*g(n) <= f(n) <= c2*g(n), n >= n0:",
    "    return Theta(g(n))"
  ],
  "ch-04": [
    "divideAndConquer(problem):",
    "  if small(problem): return directSolve(problem)",
    "  subProblems = split(problem)",
    "  subAnswers = solve each subProblem recursively",
    "  return combine(subAnswers)"
  ],
  "ch-05": [
    "randomizedPartition(A, low, high):",
    "  p = random(low, high)",
    "  swap(A[p], A[high])",
    "  return partition(A, low, high)"
  ],
  "ch-06": [
    "heapSort(A):",
    "  buildMaxHeap(A)",
    "  for end = n - 1 downto 1:",
    "    swap(A[0], A[end])",
    "    heapSize -= 1; maxHeapify(A, 0)"
  ],
  "ch-08": [
    "countingSort(A, k):",
    "  count frequencies in C[0..k]",
    "  build prefix sums in C",
    "  fill output array in reverse order"
  ],
  "ch-09": [
    "randomizedSelect(A, low, high, i):",
    "  q = randomizedPartition(A, low, high)",
    "  recurse into side containing i-th order statistic"
  ],
  "ch-11": [
    "hashInsert(T, key, value):",
    "  index = hash(key)",
    "  put (key, value) into bucket/index",
    "",
    "hashSearch(T, key):",
    "  probe bucket/index until key found or absent"
  ],
  "ch-12": [
    "treeSearch(x, key):",
    "  if x == NIL or x.key == key: return x",
    "  if key < x.key: return treeSearch(x.left, key)",
    "  return treeSearch(x.right, key)"
  ],
  "ch-13": [
    "rbInsert(T, z):",
    "  insert z as BST node, color RED",
    "  while parent(z) is RED:",
    "    rotate and recolor by cases",
    "  root.color = BLACK"
  ],
  "ch-15": [
    "for i = 0..m: dp[i][0] = i",
    "for j = 0..n: dp[0][j] = j",
    "for i = 1..m, j = 1..n:",
    "  dp[i][j] = min(delete, insert, replace)"
  ],
  "ch-16": [
    "intervalSchedule(tasks):",
    "  sort by finish time",
    "  greedily pick compatible intervals"
  ],
  "ch-21": [
    "findSet(x):",
    "  if x.parent != x: x.parent = findSet(x.parent)",
    "  return x.parent",
    "",
    "union(x, y): link(findSet(x), findSet(y))"
  ],
  "ch-22": [
    "BFS(G, s):",
    "  enqueue s",
    "  while queue not empty:",
    "    u = dequeue()",
    "    visit each unvisited neighbor of u"
  ],
  "ch-23": [
    "Kruskal(G):",
    "  sort edges by weight",
    "  for edge in edges:",
    "    if findSet(u) != findSet(v):",
    "      add edge and union(u, v)"
  ],
  "ch-24": [
    "Dijkstra(G, s):",
    "  initialize dist and min-priority queue",
    "  repeatedly extract min vertex u",
    "  relax all outgoing edges of u"
  ],
  "ch-25": [
    "for k = 1..n:",
    "  for i = 1..n:",
    "    for j = 1..n:",
    "      dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])"
  ],
  "ch-26": [
    "FordFulkerson(G, s, t):",
    "  while exists augmenting path p:",
    "    augment flow along p by bottleneck(p)"
  ],
  "ch-30": [
    "FFT(a):",
    "  split into even/odd parts",
    "  recurse and combine with roots of unity"
  ],
  "ch-31": [
    "gcd(a, b):",
    "  while b != 0: (a, b) = (b, a mod b)",
    "  return a"
  ],
  "ch-32": [
    "computePrefix(P):",
    "  compute pi[] for pattern P",
    "",
    "KMP(T, P):",
    "  use pi[] to skip repeated comparisons"
  ],
  "ch-34": [
    "proveNPC(X):",
    "  show X is in NP",
    "  reduce known NP-complete Y to X",
    "  prove reduction correctness"
  ],
  "ch-35": [
    "approximate(problem):",
    "  build feasible solution quickly",
    "  prove approximation ratio against optimum"
  ]
};

const CHAPTER_INDUSTRY: Partial<Record<string, IndustryHighlight[]>> = {
  "ch-01": [
    { domain: "云平台架构", detail: "算法选型会直接影响资源扩容成本。", tone: "sea" },
    { domain: "交易系统", detail: "延迟量级差异会转化为业务收益差异。", tone: "berry" }
  ],
  "ch-06": [
    { domain: "实时调度", detail: "优先队列可稳定维护最高优先级任务。", tone: "sun" },
    { domain: "推荐系统", detail: "Top-K 候选集合常用堆维护。", tone: "sea" }
  ],
  "ch-15": [
    { domain: "智能客服", detail: "编辑距离与序列 DP 用于相似匹配。", tone: "sun" },
    { domain: "供应链优化", detail: "多阶段决策问题可映射为 DP。", tone: "sea" }
  ],
  "ch-24": [
    { domain: "导航系统", detail: "最短路用于路径规划与重规划。", tone: "sea" },
    { domain: "物流调度", detail: "多节点配送可转化为图最短路问题。", tone: "berry" }
  ],
  "ch-26": [
    { domain: "网络带宽分配", detail: "链路容量约束天然映射最大流。", tone: "sun" },
    { domain: "广告预算分发", detail: "资源分配可抽象为流网络优化。", tone: "ink" }
  ]
};

const RAW_CHAPTERS: RawChapter[] = [
  {
    id: "ch-01",
    partId: "part-1",
    chapterLabel: "第1章",
    title: "算法在计算中的作用",
    summary: "建立“正确性 + 性能 + 可扩展性”的算法评估基线。",
    keyIdeas: ["算法与程序的区别", "输入规模影响", "性能指标前置"],
    applications: ["系统选型", "容量规划", "性能评审"],
    explanation: "算法不仅是实现细节，更是系统长期成本和稳定性的核心变量。"
  },
  {
    id: "ch-02",
    partId: "part-1",
    chapterLabel: "第2章",
    title: "算法基础",
    summary: "通过循环不变式与归纳证明建立可验证的算法思维。",
    keyIdeas: ["循环不变式", "终止性", "正确性证明"],
    applications: ["算法教学", "代码审计", "边界测试设计"],
    explanation: "本章是算法学习地基，重点是把“直觉正确”升级为“可证明正确”。",
    complexity: { best: "O(n)", avg: "O(n²)", worst: "O(n²)", space: "O(1)" },
    visualizationId: "bubble-sort"
  },
  {
    id: "ch-03",
    partId: "part-1",
    chapterLabel: "第3章",
    title: "函数的增长",
    summary: "使用渐进符号统一复杂度表达，比较算法随规模增长的表现。",
    keyIdeas: ["大 O / Ω / Θ", "主导项", "复杂度比较"],
    applications: ["技术评审", "成本估算", "容量规划"],
    explanation: "复杂度是跨实现细节比较算法优劣的通用语言。"
  },
  {
    id: "ch-04",
    partId: "part-1",
    chapterLabel: "第4章",
    title: "分治策略",
    summary: "将问题拆分为子问题并递归求解，再合并为全局答案。",
    keyIdeas: ["递归边界", "分解与合并", "递归式分析"],
    applications: ["并行计算", "外部排序", "图像处理"],
    explanation: "分治是高性能算法中最常见的问题拆解框架之一。"
  },
  {
    id: "ch-05",
    partId: "part-1",
    chapterLabel: "第5章",
    title: "概率分析和随机算法",
    summary: "通过概率与期望分析描述算法在随机化策略下的稳定表现。",
    keyIdeas: ["期望复杂度", "随机化策略", "对抗输入规避"],
    applications: ["随机快排", "在线采样", "安全输入防退化"],
    explanation: "随机算法关注长期统计稳定性，而非每次执行都最优。"
  },
  {
    id: "ch-06",
    partId: "part-2",
    chapterLabel: "第6章",
    title: "堆排序",
    summary: "利用堆结构实现稳定上界 O(n log n) 的原地排序。",
    keyIdeas: ["堆性质", "build-heap", "heapify"],
    applications: ["优先队列", "Top-K", "任务调度"],
    explanation: "堆排序兼具理论稳定性与工程实用性。",
    complexity: { best: "O(n log n)", avg: "O(n log n)", worst: "O(n log n)", space: "O(1)" }
  },
  {
    id: "ch-07",
    partId: "part-2",
    chapterLabel: "第7章",
    title: "快速排序",
    summary: "以 partition 为核心实现平均性能优秀的排序算法。",
    keyIdeas: ["基准选择", "双指针分区", "递归深度控制"],
    applications: ["通用排序", "批处理排序", "内存排序"],
    explanation: "快速排序在实践中常作为高性能排序基线。",
    complexity: { best: "O(n log n)", avg: "O(n log n)", worst: "O(n²)", space: "O(log n)" },
    visualizationId: "quick-sort"
  },
  {
    id: "ch-08",
    partId: "part-2",
    chapterLabel: "第8章",
    title: "线性时间排序",
    summary: "在特定键值约束下，以非比较方式达到线性时间排序。",
    keyIdeas: ["计数排序", "桶排序", "基数排序"],
    applications: ["日志排序", "评分排序", "编号排序"],
    explanation: "线性排序适合值域受限或位结构明确的输入。",
    complexity: { best: "O(n + k)", avg: "O(n + k)", worst: "O(n + k)", space: "O(n + k)" }
  },
  {
    id: "ch-09",
    partId: "part-2",
    chapterLabel: "第9章",
    title: "中位数和顺序统计量",
    summary: "不做完整排序，直接求第 i 小元素与中位数。",
    keyIdeas: ["随机选择", "顺序统计", "线性选择"],
    applications: ["分位点分析", "Top-K 查询", "异常值检测"],
    explanation: "选择算法通过减少不必要排序步骤获得更高效率。"
  },
  {
    id: "ch-10",
    partId: "part-3",
    chapterLabel: "第10章",
    title: "基本数据结构",
    summary: "栈、队列、链表等基础结构决定算法操作边界。",
    keyIdeas: ["操作语义", "结构选择", "复杂度权衡"],
    applications: ["消息队列", "链表重排", "表达式求值"],
    explanation: "数据结构常常决定算法的上限和实现复杂度。"
  },
  {
    id: "ch-11",
    partId: "part-3",
    chapterLabel: "第11章",
    title: "散列表",
    summary: "哈希映射支持高吞吐查找与更新。",
    keyIdeas: ["哈希函数", "冲突处理", "负载因子"],
    applications: ["缓存系统", "索引结构", "频次统计"],
    explanation: "散列表的工程性能高度依赖映射分布与扩容策略。"
  },
  {
    id: "ch-12",
    partId: "part-3",
    chapterLabel: "第12章",
    title: "二叉搜索树",
    summary: "在有序约束下支持查找、插入和删除。",
    keyIdeas: ["中序有序性", "树高影响", "删除修复"],
    applications: ["有序容器", "范围检索", "排名查询"],
    explanation: "BST 是平衡树与高级有序结构的基础。"
  },
  {
    id: "ch-13",
    partId: "part-3",
    chapterLabel: "第13章",
    title: "红黑树",
    summary: "通过旋转和着色维持树高在对数级。",
    keyIdeas: ["旋转", "重着色", "平衡修复"],
    applications: ["标准库有序容器", "数据库索引", "系统内核结构"],
    explanation: "红黑树在动态有序场景中兼顾性能和更新代价。"
  },
  {
    id: "ch-14",
    partId: "part-3",
    chapterLabel: "第14章",
    title: "数据结构的扩张",
    summary: "通过增强字段扩展查询能力与统计能力。",
    keyIdeas: ["增强字段", "局部维护", "区间结构"],
    applications: ["区间查询", "秩统计", "在线维护"],
    explanation: "增强结构强调低维护成本下的高查询价值。"
  },
  {
    id: "ch-15",
    partId: "part-4",
    chapterLabel: "第15章",
    title: "动态规划",
    summary: "利用重叠子问题和最优子结构把指数问题降为多项式问题。",
    keyIdeas: ["状态设计", "转移方程", "记忆化"],
    applications: ["编辑距离", "背包问题", "序列匹配"],
    explanation: "DP 的核心难点是状态语义和转移边界。"
  },
  {
    id: "ch-16",
    partId: "part-4",
    chapterLabel: "第16章",
    title: "贪心算法",
    summary: "每步做局部最优选择，并证明导向全局最优。",
    keyIdeas: ["贪心选择性质", "交换论证", "可行性维护"],
    applications: ["调度问题", "编码压缩", "资源选择"],
    explanation: "贪心成功的前提是严格证明，而不是经验直觉。"
  },
  {
    id: "ch-17",
    partId: "part-4",
    chapterLabel: "第17章",
    title: "摊还分析",
    summary: "将偶发高成本平摊到操作序列，得到长期平均开销。",
    keyIdeas: ["聚合分析", "记账法", "势能法"],
    applications: ["动态扩容", "并查集分析", "索引维护"],
    explanation: "摊还分析用于解释“偶尔慢但总体快”的结构。"
  },
  {
    id: "ch-18",
    partId: "part-5",
    chapterLabel: "第18章",
    title: "B树",
    summary: "面向外存系统的多路平衡搜索树，减少磁盘 I/O。",
    keyIdeas: ["高扇出", "页结构", "分裂合并"],
    applications: ["数据库索引", "文件系统", "对象存储元数据"],
    explanation: "B 树是外存数据结构设计的经典代表。"
  },
  {
    id: "ch-19",
    partId: "part-5",
    chapterLabel: "第19章",
    title: "斐波那契堆",
    summary: "通过延迟合并优化堆操作的摊还复杂度。",
    keyIdeas: ["懒惰合并", "级联切割", "摊还优化"],
    applications: ["图算法优化", "复杂优先队列", "理论算法研究"],
    explanation: "斐波那契堆在理论性能上优势显著。"
  },
  {
    id: "ch-20",
    partId: "part-5",
    chapterLabel: "第20章",
    title: "van Emde Boas树",
    summary: "在有界整数宇宙中实现 O(log log U) 查询与更新。",
    keyIdeas: ["键空间递归", "分簇结构", "超快前驱后继"],
    applications: ["整数集合索引", "调度系统", "高频查询引擎"],
    explanation: "vEB 树是典型的空间换时间结构。"
  },
  {
    id: "ch-21",
    partId: "part-5",
    chapterLabel: "第21章",
    title: "用于不相交集合的数据结构",
    summary: "并查集支持高效合并与连通性查询。",
    keyIdeas: ["路径压缩", "按秩合并", "近常数均摊复杂度"],
    applications: ["联通分量", "Kruskal", "关系分组"],
    explanation: "并查集是动态图连通性问题的基础工具。"
  },
  {
    id: "ch-22",
    partId: "part-6",
    chapterLabel: "第22章",
    title: "基本的图算法",
    summary: "BFS 与 DFS 构成图算法基础遍历框架。",
    keyIdeas: ["图遍历", "访问标记", "连通性分析"],
    applications: ["依赖分析", "关系图搜索", "状态传播"],
    explanation: "图遍历是多数图算法的入口能力。"
  },
  {
    id: "ch-23",
    partId: "part-6",
    chapterLabel: "第23章",
    title: "最小生成树",
    summary: "在保持连通的前提下最小化边权总和。",
    keyIdeas: ["安全边", "Kruskal", "Prim"],
    applications: ["网络建设", "骨架提取", "聚类预处理"],
    explanation: "MST 是贪心思想在图上的经典应用。"
  },
  {
    id: "ch-24",
    partId: "part-6",
    chapterLabel: "第24章",
    title: "单源最短路径",
    summary: "从源点出发计算到其他节点的最短距离。",
    keyIdeas: ["松弛操作", "优先队列", "路径恢复"],
    applications: ["导航规划", "物流路径", "网络路由"],
    explanation: "单源最短路是图算法在工程中最常见的落地问题之一。"
  },
  {
    id: "ch-25",
    partId: "part-6",
    chapterLabel: "第25章",
    title: "所有结点对的最短路径问题",
    summary: "预计算任意两点间最短路，适合高频查询。",
    keyIdeas: ["Floyd-Warshall", "矩阵 DP", "多源分析"],
    applications: ["全局时延矩阵", "网络评估", "路径缓存"],
    explanation: "APSP 在“查询远多于更新”场景中价值很高。"
  },
  {
    id: "ch-26",
    partId: "part-6",
    chapterLabel: "第26章",
    title: "最大流",
    summary: "在容量约束下最大化从源点到汇点的流量。",
    keyIdeas: ["残量网络", "增广路径", "最小割定理"],
    applications: ["带宽分配", "资源调度", "匹配问题"],
    explanation: "最大流是组合优化中最通用的建模工具之一。"
  },
  {
    id: "ch-27",
    partId: "part-7",
    chapterLabel: "第27章",
    title: "多线程算法",
    summary: "并行模型下的算法设计与代价分析。",
    keyIdeas: ["工作量", "跨度", "同步成本"],
    applications: ["并行计算", "高性能服务", "批处理加速"],
    explanation: "并行算法关键在任务拆分与同步控制。"
  },
  {
    id: "ch-28",
    partId: "part-7",
    chapterLabel: "第28章",
    title: "矩阵运算",
    summary: "矩阵运算是图算法与数值计算的共通基础。",
    keyIdeas: ["矩阵乘法", "分块优化", "线性代数表达"],
    applications: ["科学计算", "图计算", "特征计算"],
    explanation: "矩阵是把复杂关系转为统一计算接口的关键抽象。"
  },
  {
    id: "ch-29",
    partId: "part-7",
    chapterLabel: "第29章",
    title: "线性规划",
    summary: "在线性约束下优化目标函数。",
    keyIdeas: ["可行域", "极点最优", "优化建模"],
    applications: ["排产", "预算分配", "物流优化"],
    explanation: "线性规划是算法与运筹结合的重要桥梁。"
  },
  {
    id: "ch-30",
    partId: "part-7",
    chapterLabel: "第30章",
    title: "多项式与快速傅里叶变换",
    summary: "用 FFT 加速多项式运算和卷积计算。",
    keyIdeas: ["频域变换", "分治合并", "卷积优化"],
    applications: ["信号处理", "图像处理", "大整数乘法"],
    explanation: "FFT 是结构化分解思想的代表算法。"
  },
  {
    id: "ch-31",
    partId: "part-7",
    chapterLabel: "第31章",
    title: "数论算法",
    summary: "围绕整除、同余、素性展开的高效算法体系。",
    keyIdeas: ["欧几里得算法", "模运算", "素性检测"],
    applications: ["密码学", "签名系统", "哈希构造"],
    explanation: "数论算法在安全计算中应用广泛。"
  },
  {
    id: "ch-32",
    partId: "part-7",
    chapterLabel: "第32章",
    title: "字符串匹配",
    summary: "高效定位模式串在文本中的出现位置。",
    keyIdeas: ["KMP", "Rabin-Karp", "前缀函数"],
    applications: ["搜索引擎", "日志检索", "序列分析"],
    explanation: "字符串匹配的本质是减少失配后的重复比较。"
  },
  {
    id: "ch-33",
    partId: "part-7",
    chapterLabel: "第33章",
    title: "计算几何学",
    summary: "将空间问题离散化并高效求解。",
    keyIdeas: ["扫描线", "凸包", "相交判断"],
    applications: ["GIS", "图形引擎", "路径规划"],
    explanation: "计算几何把空间直觉转化为可验证算法流程。"
  },
  {
    id: "ch-34",
    partId: "part-7",
    chapterLabel: "第34章",
    title: "NP完全性",
    summary: "通过归约建立问题难度分类与可解边界。",
    keyIdeas: ["P/NP/NPC", "多项式归约", "复杂性边界"],
    applications: ["问题评估", "算法路线决策", "近似策略选择"],
    explanation: "NP 完全性帮助我们在工程中明确“何时求最优，何时求可用”。"
  },
  {
    id: "ch-35",
    partId: "part-7",
    chapterLabel: "第35章",
    title: "近似算法",
    summary: "在难问题上提供可证明误差界的可行解。",
    keyIdeas: ["近似比", "可证明界", "多项式可行策略"],
    applications: ["路径优化", "覆盖问题", "调度优化"],
    explanation: "近似算法是复杂问题工程落地的实用路径。"
  },
  {
    id: "app-a",
    partId: "part-8",
    chapterLabel: "附录A",
    title: "求和",
    summary: "复杂度推导中常见的求和与界限估计技巧。",
    keyIdeas: ["等差求和", "等比求和", "积分近似"],
    applications: ["循环分析", "递归分析", "上界证明"],
    explanation: "求和是复杂度分析中的基础数学工具。"
  },
  {
    id: "app-b",
    partId: "part-8",
    chapterLabel: "附录B",
    title: "集合等离散数学内容",
    summary: "离散数学语言是算法建模与证明的基础。",
    keyIdeas: ["集合关系", "映射", "逻辑表达"],
    applications: ["问题建模", "形式化证明", "定义规范"],
    explanation: "离散数学帮助把业务问题转化为可求解形式。"
  },
  {
    id: "app-c",
    partId: "part-8",
    chapterLabel: "附录C",
    title: "计数与概率",
    summary: "组合计数与概率工具支撑随机算法分析。",
    keyIdeas: ["排列组合", "期望", "概率界"],
    applications: ["随机算法", "风险估计", "抽样分析"],
    explanation: "概率工具既服务理论分析，也服务工程评估。"
  },
  {
    id: "app-d",
    partId: "part-8",
    chapterLabel: "附录D",
    title: "矩阵",
    summary: "矩阵知识是高级算法推导的重要底座。",
    keyIdeas: ["矩阵运算", "向量空间", "特征结构"],
    applications: ["数值计算", "图算法", "优化模型"],
    explanation: "矩阵是多类算法共通的数学表达。"
  }
];

function buildConceptNarrative(chapter: RawChapter): string[] {
  const ideaText = chapter.keyIdeas.join("、");
  const appText = chapter.applications.join("、");
  return [
    `问题定位：${chapter.summary} 这意味着本章不仅关心“能否求解”，也关心“规模扩大后是否仍然稳定”。`,
    `方法主线：围绕 ${ideaText} 展开，建议先理解定义，再做小规模手推，最后映射到代码结构。`,
    `工程落地：${chapter.explanation} 在真实项目中，典型应用包括 ${appText}。`
  ];
}

function buildIndustryHighlights(chapter: RawChapter): IndustryHighlight[] {
  const fixed = CHAPTER_INDUSTRY[chapter.id];
  if (fixed) {
    return fixed;
  }
  const tones: IndustryHighlight["tone"][] = ["sea", "sun", "berry"];
  return chapter.applications.slice(0, 3).map((app, index) => ({
    domain: app,
    detail: `该领域常将“${chapter.title}”用于关键性能或稳定性优化。`,
    tone: tones[index % tones.length]
  }));
}

export const CHAPTERS: ChapterTopic[] = RAW_CHAPTERS.map((chapter) => {
  const digest = CHAPTER_NOTES_DIGEST[chapter.id];
  return {
    ...chapter,
    keyIdeas: digest?.keyIdeas ?? chapter.keyIdeas,
    applications: digest?.applications ?? chapter.applications,
    figureType: chapter.figureType ?? FIGURE_BY_CHAPTER[chapter.id],
    pseudocode: chapter.pseudocode ?? CHAPTER_PSEUDOCODE[chapter.id],
    conceptNarrative: digest?.narrative ?? buildConceptNarrative(chapter),
    industryHighlights: buildIndustryHighlights(chapter),
    sourceNotes: digest?.sourceNotes
  };
});

export const CHAPTER_BY_ID: Record<string, ChapterTopic> = Object.fromEntries(
  CHAPTERS.map((chapter) => [chapter.id, chapter])
);

export const DEFAULT_CHAPTER_ID = "ch-02";
