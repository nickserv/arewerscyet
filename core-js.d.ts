module 'core-js/proposals/array-grouping-v2' {
  global {
    interface ObjectConstructor {
      groupBy<T>(
        items: Iterable<T>,
        callbackfn: (value: T, index: number) => string,
      ): Record<string, T[]>
    }

    interface MapConstructor {
      groupBy<T, U>(
        items: Iterable<T>,
        callbackfn: (value: T, index: number) => U,
      ): Map<U, T[]>
    }
  }
}
