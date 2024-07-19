export const helpers = {
  enum: {
    getEnumKeyByValue<T>(enumObj: T, value: number | string): string | null {
      const keys = Object.keys(enumObj!).filter((k) => isNaN(Number(k)));

      for (const key of keys) {
        if (enumObj[key as keyof T] === value) {
          return key;
        }
      }

      return null;
    },
  },
};
