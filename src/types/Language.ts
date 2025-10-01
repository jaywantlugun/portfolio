export const Language = {
    ENGLISH: "english",
    HINDI: "hindi",
} as const;

export type Language = typeof Language[keyof typeof Language];