export interface ChapterNotesDigest {
  narrative: string[];
  keyIdeas?: string[];
  applications?: string[];
  sourceNotes: string[];
}

export const CHAPTER_NOTES_DIGEST: Record<string, ChapterNotesDigest> = {
  "ch-03": {
    narrative: [
      "LeetCode 笔记在复杂度章节里把“问题规模 n 与运行成本”的关系拆成可操作步骤：先确定基本操作，再估算执行次数，最后用渐进符号表达主导增长项。这比只背 O 表更贴近工程评审流程。",
      "在分析过程中，重点不是逐行算常数，而是抓住最高阶项与增长趋势。笔记特别强调了加法法则与乘法法则：顺序代码取量级最大项，嵌套结构则做量级相乘。",
      "在工程场景里，这套方法可以直接用于容量评估和性能预算：例如数据规模翻倍时，O(n log n) 与 O(n^2) 的成本差会快速放大，直接影响服务成本和 SLA 稳定性。"
    ],
    sourceNotes: [
      "src/leetcode-notes-main/docs/ch01/01.01/01.01.02-Algorithm-Complexity.md"
    ]
  },
  "ch-04": {
    narrative: [
      "递归与分治章节把“拆分-求解-合并”明确成流程模板：先定义递归边界，再把原问题切成结构相同的子问题，最后通过合并步骤恢复全局答案。",
      "笔记中强调分治分析的关键是递归式而不是代码行数。只要写出 T(n) 与子问题规模关系，就能用递归树或主定理判断整体量级。",
      "在真实开发中，分治思想常用于大文件处理、并行任务拆分和批处理流水线，尤其适合“单任务很重但可独立拆块”的场景。"
    ],
    sourceNotes: [
      "src/leetcode-notes-main/docs/ch04/04.02/04.02.01-Recursive-Algorithm.md",
      "src/leetcode-notes-main/docs/ch04/04.02/04.02.05-Divide-And-Conquer-Algorithm.md"
    ]
  },
  "ch-05": {
    narrative: [
      "随机化思想在笔记里常和快速排序放在一起解释：固定选基准值容易被构造坏输入，而随机选基准值可以显著降低持续退化的概率。",
      "这类算法的核心不是“每次都最优”，而是用期望复杂度换取整体稳定性。也就是说，单次运行可能波动，但长期统计表现更可控。",
      "在生产中，这种策略尤其适合面向外部输入的服务：当输入分布不可预测时，随机化通常能提升平均吞吐和尾部延迟表现。"
    ],
    sourceNotes: [
      "src/leetcode-notes-main/docs/ch01/01.03/01.03.08-Array-Quick-Sort.md"
    ]
  },
  "ch-06": {
    narrative: [
      "堆排序笔记先从堆结构本身讲起：堆是完全二叉树，可用数组高效存储，并通过下标关系 O(1) 定位父子节点。",
      "算法层面分为两步：先 build-heap 把原数组整理成最大堆，再反复把堆顶与末尾交换并执行 shift-down 恢复堆性质。",
      "笔记对 push / pop / shift-up / shift-down 的细节写得很完整，这让我们能把“排序算法”自然延伸到“优先队列”这种在线场景。"
    ],
    sourceNotes: [
      "src/leetcode-notes-main/docs/ch01/01.03/01.03.09-Array-Heap-Sort.md",
      "src/leetcode-notes-main/docs/ch02/02.04/02.04.04-Priority-Queue.md"
    ]
  },
  "ch-07": {
    narrative: [
      "快速排序笔记把 partition 过程画成了逐步交换的轨迹：双指针从两端向中间收缩，通过比较与交换把元素分配到 pivot 两侧。",
      "复杂度分析部分明确区分了三种情况：最坏 O(n^2)、平均 O(n log n)、最好 O(n log n)。并且给出随机选 pivot 的改进动机。",
      "从工程角度看，这一章的价值在于“策略组合”：随机化基准、尾递归优化、对子区间切换插入排序，通常会一起出现。"
    ],
    sourceNotes: [
      "src/leetcode-notes-main/docs/ch01/01.03/01.03.08-Array-Quick-Sort.md"
    ]
  },
  "ch-08": {
    narrative: [
      "线性排序相关笔记把计数排序、桶排序、基数排序放在同一框架下解释：它们都借助“键值范围或位数结构”绕开比较排序下界。",
      "计数排序实现里，前缀和数组用于定位元素最终位置，逆序回填则保证稳定性。这一细节对后续基数排序非常关键。",
      "这类方法适用于键值范围可控的数据流，例如日志等级、评分、编号批处理；但当值域过大时，空间开销会变成主要限制。"
    ],
    sourceNotes: [
      "src/leetcode-notes-main/docs/ch01/01.03/01.03.11-Array-Counting-Sort.md",
      "src/leetcode-notes-main/docs/ch01/01.03/01.03.12-Array-Bucket-Sort.md",
      "src/leetcode-notes-main/docs/ch01/01.03/01.03.13-Array-Radix-Sort.md"
    ]
  },
  "ch-10": {
    narrative: [
      "基础结构章节在笔记中强调了“操作语义优先于数据形态”：栈服务于后进先出，队列服务于先进先出，链表服务于局部插删。",
      "同一个问题用不同结构会得到完全不同的时间分布，例如数组适合随机访问，链表适合频繁重连，队列适合层序推进。",
      "工程实践里，先确定访问模式再选结构，通常比“先写代码再调优”更高效，也更容易获得稳定复杂度。"
    ],
    sourceNotes: [
      "src/leetcode-notes-main/docs/ch02/02.02/02.02.01-Stack-Basic.md",
      "src/leetcode-notes-main/docs/ch02/02.04/02.04.01-Queue-Basic.md",
      "src/leetcode-notes-main/docs/ch02/02.01/02.01.01-Linked-List-Basic.md"
    ]
  },
  "ch-11": {
    narrative: [
      "哈希章节把核心问题讲得很实用：不是“会不会用 map”，而是如何在冲突、负载因子、扩容策略之间做稳定性权衡。",
      "笔记从键映射机制、冲突处理到典型题目都覆盖了“常数复杂度背后的前提条件”，帮助避免把 O(1) 当成绝对结论。",
      "在高并发服务里，哈希结构常用于索引、缓存和统计聚合；这时分布质量和扩容抖动往往比算法本身更影响体验。"
    ],
    sourceNotes: [
      "src/leetcode-notes-main/docs/ch03/03.01/03.01.01-Hash-Table.md"
    ]
  },
  "ch-12": {
    narrative: [
      "BST 笔记把查找、插入、删除统一在“有序性约束”下理解：左子树小于根，右子树大于根，因此中序遍历天然有序。",
      "实现难点主要在删除：当目标节点有两个子树时，需要在前驱/后继替换后再做结构修复，保证整棵树仍满足有序性。",
      "这章对后续平衡树学习非常关键，因为平衡树可以看作是在 BST 基础上增加约束与修复规则。"
    ],
    sourceNotes: [
      "src/leetcode-notes-main/docs/ch03/03.04/03.04.01-Binary-Search-Tree.md"
    ]
  },
  "ch-15": {
    narrative: [
      "动态规划笔记按“状态定义 -> 转移方程 -> 初始化 -> 遍历顺序”组织，强调先把状态语义写清楚，再落代码。",
      "从记忆化搜索到线性 DP、背包、区间 DP、树形 DP，内容体现的是同一思想：把重复子问题的计算结果缓存复用。",
      "在业务场景里，DP 常用于“多约束最优决策”，例如预算分配、路径规划、编辑距离匹配。难点通常不是代码，而是状态建模是否完整。"
    ],
    sourceNotes: [
      "src/leetcode-notes-main/docs/ch05/05.01/05.01.01-Dynamic-Programming-Basic.md",
      "src/leetcode-notes-main/docs/ch05/05.01/05.01.04-Memoization.md",
      "src/leetcode-notes-main/docs/ch05/05.02/05.02.01-Linear-DP-01.md",
      "src/leetcode-notes-main/docs/ch05/05.03/05.03.01-Knapsack-Problem-01.md",
      "src/leetcode-notes-main/docs/ch05/05.04/05.04.01-Interval-DP.md",
      "src/leetcode-notes-main/docs/ch05/05.04/05.04.05-Tree-DP.md"
    ]
  },
  "ch-16": {
    narrative: [
      "贪心章节的重点是“选择依据要可证明”，不是每一步都看起来最优就够。笔记通过区间类问题展示了排序后逐步选择的套路。",
      "这类算法通常具备很高实现效率，但前提是能证明局部决策不会破坏全局最优或可行性。",
      "工程中常见用途包括调度、资源分配和压缩编码；如果证明条件不足，就应回到 DP 或搜索框架。"
    ],
    sourceNotes: [
      "src/leetcode-notes-main/docs/ch04/04.04/04.04.01-Greedy-Algorithm.md"
    ]
  },
  "ch-21": {
    narrative: [
      "并查集笔记围绕两类核心操作展开：find 查询代表元，union 合并集合。通过路径压缩与按秩合并，可获得近似常数的均摊复杂度。",
      "它非常适合处理动态连通性问题，尤其是在边不断加入时判断两个节点是否属于同一联通分量。",
      "很多图算法（例如 Kruskal）都把并查集作为基础模块，因而这章是图算法工程化落地的重要准备。"
    ],
    sourceNotes: [
      "src/leetcode-notes-main/docs/ch03/03.05/03.05.01-Union-Find.md"
    ]
  },
  "ch-22": {
    narrative: [
      "图遍历笔记把 BFS 和 DFS 的适用场景分得很清楚：BFS 擅长最短层级与最少步数，DFS 擅长结构枚举与回溯搜索。",
      "实现上，BFS 的关键是队列推进与层级边界，DFS 的关键是递归边界和访问标记，二者都依赖“避免重复访问”的状态维护。",
      "在复杂业务中，图遍历常作为基础模块嵌入更大流程，如依赖分析、权限传播、关系网络搜索。"
    ],
    sourceNotes: [
      "src/leetcode-notes-main/docs/ch02/02.05/02.05.01-BFS.md",
      "src/leetcode-notes-main/docs/ch02/02.03/02.03.01-DFS.md"
    ]
  },
  "ch-23": {
    narrative: [
      "最小生成树在笔记体系中可由“贪心 + 并查集”自然拼出 Kruskal 思路：按边权排序，遇到不成环的边就加入答案。",
      "该过程本质上是不断选择安全边，并用并查集高效维护连通关系，避免显式回路检测带来的高开销。",
      "在工程应用里，MST 常用于网络骨干构建和低成本连通规划，属于图算法中很容易落地的一类。"
    ],
    sourceNotes: [
      "src/leetcode-notes-main/docs/ch04/04.04/04.04.01-Greedy-Algorithm.md",
      "src/leetcode-notes-main/docs/ch03/03.05/03.05.01-Union-Find.md"
    ]
  },
  "ch-24": {
    narrative: [
      "单源最短路在笔记中虽没有集中成章，但 BFS、优先队列和图遍历模块已经覆盖了核心构件：图表示、松弛思路、最短路径逐步收敛。",
      "当边权为非负时，可结合优先队列实现更高效的最短路框架；当是无权图时，BFS 本身就是天然的最短步数算法。",
      "这类算法广泛用于导航、路径推荐和网络路由。工程重点通常是图规模控制与增量更新，而不只是单次求解。"
    ],
    sourceNotes: [
      "src/leetcode-notes-main/docs/ch02/02.05/02.05.01-BFS.md",
      "src/leetcode-notes-main/docs/ch02/02.04/02.04.04-Priority-Queue.md",
      "src/leetcode-notes-main/docs/ch02/02.06/02.06.01-Graph-Topological-Sorting.md"
    ]
  },
  "ch-32": {
    narrative: [
      "字符串匹配笔记从朴素匹配、Rabin-Karp 到 KMP 逐层展开，重点解释了“失配后如何复用已匹配信息”这一性能关键。",
      "KMP 的本质是构建前缀函数（next / pi 数组），让模式串指针在失配时跳转到可复用状态，而不是回退主串指针。",
      "在生产系统中，这套思想常用于检索、日志过滤和文本风控。模式越多、文本越长，预处理带来的收益越明显。"
    ],
    sourceNotes: [
      "src/leetcode-notes-main/docs/ch03/03.02/03.02.04-String-Brute-Force.md",
      "src/leetcode-notes-main/docs/ch03/03.02/03.02.05-String-Rabin-Karp.md",
      "src/leetcode-notes-main/docs/ch03/03.02/03.02.06-String-KMP.md"
    ]
  }
};
