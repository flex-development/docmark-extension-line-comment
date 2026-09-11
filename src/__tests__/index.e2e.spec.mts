/**
 * @file E2E Tests - api
 * @module docmark-extension-shell/tests/e2e/api
 */

import * as testSubject from '@flex-development/docmark-extension-shell'
import { describe, expect, it } from 'vitest'

describe('e2e:docmark-extension-shell', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
