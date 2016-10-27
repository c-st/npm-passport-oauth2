declare class SessionStore {
  constructor (options: { key: string });
  store (req: SessionStore.Request, cb: (err?: Error | null, state?: string) => void): void;
  verify (req: SessionStore.Request, providedState: string, cb: (err: Error | null, ok: boolean, state?: { message: string }) => void): void;
}

declare namespace SessionStore {
  export interface Request {
    session: {
      [key: string]: any;
    };
  }
}

export = SessionStore;
