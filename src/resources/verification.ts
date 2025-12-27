// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Verification extends APIResource {
  /**
   * Verify a Nigerian National Identification Number (NIN) and return verification
   * status.
   *
   * @example
   * ```ts
   * const response = await client.verification.verifyNin({
   *   number_nin: '12345678901',
   * });
   * ```
   */
  verifyNin(
    body: VerificationVerifyNinParams,
    options?: RequestOptions,
  ): APIPromise<VerificationVerifyNinResponse> {
    return this._client.post('/verification/vnin', { body, ...options });
  }
}

export interface VerificationVerifyNinResponse {
  dob?: string;

  full_name?: string;

  gender?: string;

  number_nin?: string;

  /**
   * Verification status
   */
  status?: string;
}

export interface VerificationVerifyNinParams {
  /**
   * The 11-digit Nigerian National Identification Number
   */
  number_nin: string;
}

export declare namespace Verification {
  export {
    type VerificationVerifyNinResponse as VerificationVerifyNinResponse,
    type VerificationVerifyNinParams as VerificationVerifyNinParams,
  };
}
