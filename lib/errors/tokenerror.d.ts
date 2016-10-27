/**
 * `TokenError` error.
 *
 * TokenError represents an error received from a token endpoint.  For details,
 * refer to RFC 6749, section 5.2.
 *
 * References:
 *   - [The OAuth 2.0 Authorization Framework](http://tools.ietf.org/html/rfc6749)
 */
declare class TokenError extends Error {
  message: string;
  code: string;
  uri?: string;
  status: number;
  constructor (message: string, code?: string, uri?: string, status?: number);
}

export = TokenError;
