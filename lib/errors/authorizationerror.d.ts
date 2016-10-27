/**
 * `AuthorizationError` error.
 *
 * AuthorizationError represents an error in response to an authorization
 * request.  For details, refer to RFC 6749, section 4.1.2.1.
 *
 * References:
 *   - [The OAuth 2.0 Authorization Framework](http://tools.ietf.org/html/rfc6749)
 */
declare class AuthorizationError extends Error {
  message: string;
  code: string;
  uri?: string;
  status: number;
  constructor (message: string, code?: string, uri?: string, status?: number);
}

export = AuthorizationError;
