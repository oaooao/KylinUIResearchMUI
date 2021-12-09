export const f = (a: string, b: number) => () => {

}

type F = typeof f;

type B = Parameters<F>[1];

export interface X {
    (...s: string[]): void;

    (...n: number[]): void;
}

export const x: X = (s) => {
    console.log(s);
}