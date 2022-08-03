
export type stateAsync = 'idle' | 'pending' | 'succeeded' | 'failed';

export interface messageUser {
    message: string;
    type: number;
}

export interface property {
    name: string;
    value:string;
}