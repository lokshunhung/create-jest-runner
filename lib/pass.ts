import toTestResult from './toTestResult';
import type { TestDetail } from './types';

interface Options {
  start: number;
  end: number;
  test: TestDetail;
}

export default function pass({ start, end, test }: Options) {
  return toTestResult({
    stats: {
      failures: 0,
      pending: 0,
      passes: 1,
      todo: 0,
      start,
      end,
    },
    skipped: false,
    tests: [{ duration: end - start, ...test }],
    jestTestPath: test.path,
  });
}
