export interface IArrayValue {
    readonly title: string;
    readonly value: any;
}
export declare class ArrayValue implements IArrayValue {
    readonly title: string;
    readonly value: any;
    constructor(title?: string, value?: any);
}
