/**
 * @file E2E Tests - api
 * @module docmark-extension-line-comment/tests/e2e/api
 */

import * as testSubject from '@flex-development/docmark-extension-line-comment'
import { describe, expect, it } from 'vitest'

describe('e2e:docmark-extension-line-comment', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject as Record<string, any>)).toMatchSnapshot()
  })
})
