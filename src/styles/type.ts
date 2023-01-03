import { MappedKeyToUnion } from 'types/utils';
import COLOR from 'styles/color';

type AvailableColor = MappedKeyToUnion<typeof COLOR>;

type FontSize = 10 | 11 | 12 | 14 | 16 | 20 | 24 | 32 | 40 | 48 | 70;

type FontWeight = 'normal' | 'bold' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type ConvertPxToRem = (px: number) => number;

export { AvailableColor, FontSize, FontWeight, ConvertPxToRem };
