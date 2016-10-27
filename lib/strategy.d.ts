import Strategy = require('passport-strategy');
import Store = require('./store/null');

/**
 * Creates an instance of `OAuth2Strategy`.
 *
 * The OAuth 2.0 authentication strategy authenticates requests using the OAuth
 * 2.0 framework.
 *
 * OAuth 2.0 provides a facility for delegated authentication, whereby users can
 * authenticate using a third-party service such as Facebook.  Delegating in
 * this manner involves a sequence of events, including redirecting the user to
 * the third-party service for authorization.  Once authorization has been
 * granted, the user is redirected back to the application and an authorization
 * code can be used to obtain credentials.
 *
 * Applications must supply a `verify` callback, for which the function
 * signature is:
 *
 *     function(accessToken, refreshToken, profile, done) { ... }
 *
 * The verify callback is responsible for finding or creating the user, and
 * invoking `done` with the following arguments:
 *
 *     done(err, user, info);
 *
 * `user` should be set to `false` to indicate an authentication failure.
 * Additional `info` can optionally be passed as a third argument, typically
 * used to display informational messages.  If an exception occured, `err`
 * should be set.
 *
 * Examples:
 *
 *     passport.use(new OAuth2Strategy({
 *         authorizationURL: 'https://www.example.com/oauth2/authorize',
 *         tokenURL: 'https://www.example.com/oauth2/token',
 *         clientID: '123-456-789',
 *         clientSecret: 'shhh-its-a-secret'
 *         callbackURL: 'https://www.example.net/auth/example/callback'
 *       },
 *       function(accessToken, refreshToken, profile, done) {
 *         User.findOrCreate(..., function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 */
declare class OAuth2Strategy <P extends any> implements Strategy {
  name: string;

  constructor (options: OAuth2Strategy.Options, cb: OAuth2Strategy.VerifyFunction<P>);

  /**
   * Authenticate request by delegating to a service provider using OAuth 2.0.
   */
  authenticate (req: OAuth2Strategy.Request, options: OAuth2Strategy.AuthenticateOptions): void;

  /**
   * Retrieve user profile from service provider.
   *
   * OAuth 2.0-based authentication strategies can overrride this function in
   * order to load the user's profile from the service provider.  This assists
   * applications (and users of those applications) in the initial registration
   * process by automatically submitting required information.
   */
  userProfile (accessToken: string, done: (err: Error | null, profile: P) => void): void;

  /**
   * Return extra parameters to be included in the authorization request.
   *
   * Some OAuth 2.0 providers allow additional, non-standard parameters to be
   * included when requesting authorization.  Since these parameters are not
   * standardized by the OAuth 2.0 specification, OAuth 2.0-based authentication
   * strategies can overrride this function in order to populate these parameters
   * as required by the provider.
   */
  authorizationParams (options: any): { [key: string]: string };

  /**
   * Return extra parameters to be included in the token request.
   *
   * Some OAuth 2.0 providers allow additional, non-standard parameters to be
   * included when requesting an access token.  Since these parameters are not
   * standardized by the OAuth 2.0 specification, OAuth 2.0-based authentication
   * strategies can overrride this function in order to populate these parameters
   * as required by the provider.
   */
  tokenParams (options: any): { [key: string]: string };

  /**
   * Parse error response from OAuth 2.0 endpoint.
   *
   * OAuth 2.0-based authentication strategies can overrride this function in
   * order to parse error responses received from the token endpoint, allowing the
   * most informative message to be displayed.
   *
   * If this function is not overridden, the body will be parsed in accordance
   * with RFC 6749, section 5.2.
   */
  parseErrorResponse (body: string, status: number): Error | null;
}

declare namespace OAuth2Strategy {
  export interface Options extends OAuth2Options {
    authorizationURL: string;
    tokenURL: string;
  }

  export interface OAuth2Options {
    /**
     * URL used to obtain an authorization grant.
     */
    authorizationURL?: string;
    /**
     * URL used to obtain an access token.
     */
    tokenURL?: string;
    /**
     * Identifies client to service provider.
     */
    clientID: string;
    /**
     * Secret used to establish ownership of the client identifer.
     */
    clientSecret: string;
    /**
     * URL to which the service provider will redirect the user after obtaining authorization.
     */
    callbackURL: string;
    /**
     * When `true`, `req` is the first argument to the verify callback (default: `false`).
     */
    passReqToCallback?: boolean;
    scope?: string[];
    scopeSeparator?: string;
    state?: string;
    store?: Store;
    proxy?: boolean;
    skipUserProfile?: boolean;
    customHeaders?: {
      [key: string]: string | string[];
    };
  }

  export interface Request extends Strategy.Request {
    query: {
      [key: string]: string;
    };
  }

  export interface AuthenticateOptions {
    callbackURL: string;
    scope?: string;
    state?: string;
  }

  export interface VerifyFunction <P> {
    (accessToken: string, refreshToken: string, profile: P, done: (err: Error | null, user: any | boolean, info?: any) => void): void;
  }
}

export = OAuth2Strategy;
