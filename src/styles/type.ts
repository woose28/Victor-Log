import { MappedKeyToUnion } from 'types/utils';
import COLOR from 'styles/color';

export type AvailableColor = MappedKeyToUnion<typeof COLOR>;
export type FontSize = 10 | 11 | 12 | 14 | 16 | 20 | 24 | 32 | 40 | 48 | 70;
