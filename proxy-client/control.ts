// Copyright © 2021 The Radicle Upstream Contributors
//
// This file is part of radicle-upstream, distributed under the GPLv3
// with Radicle Linking Exception. For full terms see the included
// LICENSE file.

import type { Fetcher, RequestOptions } from "./fetcher";

interface ProjectCreateParams {
  name: string;
  description: string;
  defaultBranch: string;
}

export class Control {
  private fetcher: Fetcher;

  public constructor(fetcher: Fetcher) {
    this.fetcher = fetcher;
  }

  public async reset(options?: RequestOptions): Promise<void> {
    return this.fetcher.fetchOkNoContent({
      method: "GET",
      path: "control/reset",
      options,
    });
  }

  public async seal(options?: RequestOptions): Promise<void> {
    return this.fetcher.fetchOkNoContent({
      method: "GET",
      path: "control/seal",
      options,
    });
  }

  public async projectCreate(
    params: ProjectCreateParams,
    options?: RequestOptions
  ): Promise<void> {
    return this.fetcher.fetchOkNoContent({
      method: "POST",
      path: "control/create-project",
      body: params,
      options,
    });
  }
}
