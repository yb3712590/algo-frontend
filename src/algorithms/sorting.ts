import { AlgorithmFrame } from "../types";

function frameFrom(
  array: number[],
  line: number,
  note: string,
  activeIndices: number[] = [],
  swappedIndices: number[] = [],
  sortedIndices: number[] = [],
  pivotIndex: number | null = null
): AlgorithmFrame {
  return {
    array: [...array],
    activeIndices,
    swappedIndices,
    sortedIndices,
    pivotIndex,
    line,
    note
  };
}

export function generateBubbleSortFrames(input: number[]): AlgorithmFrame[] {
  const arr = [...input];
  const frames: AlgorithmFrame[] = [];
  const sortedIndices = new Set<number>();

  frames.push(frameFrom(arr, 1, "Initialize array for bubble sort."));

  for (let i = 0; i < arr.length - 1; i += 1) {
    frames.push(frameFrom(arr, 2, `Pass ${i + 1} starts.`, [], [], [...sortedIndices]));

    for (let j = 0; j < arr.length - 1 - i; j += 1) {
      frames.push(
        frameFrom(
          arr,
          4,
          `Compare index ${j} and ${j + 1}.`,
          [j, j + 1],
          [],
          [...sortedIndices]
        )
      );

      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        frames.push(
          frameFrom(
            arr,
            5,
            `Swap ${arr[j + 1]} and ${arr[j]}.`,
            [j, j + 1],
            [j, j + 1],
            [...sortedIndices]
          )
        );
      }
    }

    sortedIndices.add(arr.length - 1 - i);
    frames.push(
      frameFrom(
        arr,
        2,
        `Pass ${i + 1} ends. Index ${arr.length - 1 - i} fixed.`,
        [],
        [],
        [...sortedIndices]
      )
    );
  }

  sortedIndices.add(0);
  frames.push(frameFrom(arr, 6, "Sorting completed.", [], [], [...sortedIndices]));
  return frames;
}

export function generateQuickSortFrames(input: number[]): AlgorithmFrame[] {
  const arr = [...input];
  const frames: AlgorithmFrame[] = [];
  const sortedIndices = new Set<number>();

  frames.push(frameFrom(arr, 1, "Initialize array for quick sort."));

  function partition(low: number, high: number): number {
    const pivot = arr[high];
    let i = low - 1;
    frames.push(
      frameFrom(
        arr,
        8,
        `Choose index ${high} as pivot (${pivot}).`,
        [],
        [],
        [...sortedIndices],
        high
      )
    );

    for (let j = low; j < high; j += 1) {
      frames.push(
        frameFrom(
          arr,
          10,
          `Compare A[${j}] = ${arr[j]} with pivot.`,
          [j, high],
          [],
          [...sortedIndices],
          high
        )
      );

      if (arr[j] <= pivot) {
        i += 1;
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        frames.push(
          frameFrom(
            arr,
            12,
            `Move A[${j}] to left partition by swapping ${i} and ${j}.`,
            [i, j],
            [i, j],
            [...sortedIndices],
            high
          )
        );
      }
    }

    const temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    frames.push(
      frameFrom(
        arr,
        13,
        `Place pivot to final index ${i + 1}.`,
        [i + 1, high],
        [i + 1, high],
        [...sortedIndices],
        i + 1
      )
    );
    return i + 1;
  }

  function quickSort(low: number, high: number): void {
    if (low > high) {
      return;
    }
    if (low === high) {
      sortedIndices.add(low);
      frames.push(
        frameFrom(
          arr,
          2,
          `Single element at index ${low}, already sorted.`,
          [low],
          [],
          [...sortedIndices]
        )
      );
      return;
    }

    frames.push(
      frameFrom(arr, 2, `Recurse on range [${low}, ${high}].`, [], [], [...sortedIndices])
    );
    const pivotIndex = partition(low, high);
    sortedIndices.add(pivotIndex);
    frames.push(
      frameFrom(
        arr,
        3,
        `Pivot fixed at ${pivotIndex}. Continue left and right ranges.`,
        [],
        [],
        [...sortedIndices],
        pivotIndex
      )
    );
    quickSort(low, pivotIndex - 1);
    quickSort(pivotIndex + 1, high);
  }

  quickSort(0, arr.length - 1);

  for (let i = 0; i < arr.length; i += 1) {
    sortedIndices.add(i);
  }
  frames.push(frameFrom(arr, 5, "Sorting completed.", [], [], [...sortedIndices]));
  return frames;
}
