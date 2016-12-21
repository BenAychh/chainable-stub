import { SinonSpy, spy } from "sinon";

export class InitialObject implements IResult {
  public _calls: PropertyKey[] = [];
  public _spies: ISpies = { };
  [key: string]: string | PropertyKey[] | {
    [key: string]: SinonSpy;
  };
}

export interface IResult {
  _calls: PropertyKey[];
  _spies: ISpies;
  [key: string]: string | PropertyKey[] | ISpies;
}

export interface ISpies {
  [key: string]: SinonSpy;
}

export const proxy = new Proxy(new InitialObject(), {
  get(obj, key) {
    if (key in obj || typeof obj === "symbol") {
      return obj[key];
    }
    obj._calls.push(key);
    if (!obj._spies[key]) {
      obj._spies[key] = spy();
    }
    return (...args: PropertyKey[]) => {
      obj._spies[key](...args);
      return proxy;
    };
  },
});
