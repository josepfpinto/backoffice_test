/** Webpack `stats.json` file structure */
export type dispatchFn = () => void;
export type dispatchFn = (newStatus:boolean) => void;

export type Stats = {
    scripts: string[],
    styles: string[],
}

export type CounterState = {
    value: number,
};

export type AuthStatusState = {
    value: boolean,
    idtoken: string,
    accessToken: string,
};