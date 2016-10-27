import _Strategy = require('./strategy');
import _AuthorizationError = require('./errors/authorizationerror');
import _TokenError = require('./errors/tokenerror');
import _InternalOAuthError = require('./errors/internaloautherror');

declare module './strategy' {
  export const Strategy: typeof _Strategy;
  export const AuthorizationError: typeof _AuthorizationError;
  export const TokenError: typeof _TokenError;
  export const InternalOAuthError: typeof _InternalOAuthError;
}

export = _Strategy;
