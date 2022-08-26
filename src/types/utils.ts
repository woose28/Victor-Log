export type MappedKeyToUnion<T> = T extends { [key: string]: infer K } ? K : never;
