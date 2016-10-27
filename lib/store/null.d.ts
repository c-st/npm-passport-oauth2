declare class NullStore {
  store (req: NullStore.Request, cb: (err?: Error | null, state?: string) => void): void;
  verify (req: NullStore.Request, providedState: string, cb: (err: Error | null, ok: boolean) => void, state?: { message: string }): void;
}

declare namespace NullStore {
  export interface Request {}
}

export = NullStore;
