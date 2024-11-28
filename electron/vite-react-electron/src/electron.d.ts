// electron.d.ts
export interface IElectronAPI {
    // 定义你的API方法
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async: (...args: any[]) => Promise<any>;
}

declare global {
    interface Window {
        electron: IElectronAPI;
    }
}