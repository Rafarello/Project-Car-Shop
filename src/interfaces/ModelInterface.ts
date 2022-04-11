/* eslint-disable */

interface Model <T> {
  create(obj: T): Promise<T>,
  read(): Promise<T[]>,
  readOne(id_: string): Promise<T | null>,
  update(): Promise<T[]>,
  delete(id: string): Promise<T | null>,
}

export {
  Model,
};

/* eslint-enable */
