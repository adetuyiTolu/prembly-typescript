// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Prembly } from '../client';

export abstract class APIResource {
  protected _client: Prembly;

  constructor(client: Prembly) {
    this._client = client;
  }
}
