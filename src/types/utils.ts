type MappedKeyToUnion<T> = T extends { [key: string]: infer K } ? K : never;

type PickType<T extends { [key: string]: unknown }, U extends keyof T> = Pick<T, U>[U];

export { MappedKeyToUnion, PickType };
