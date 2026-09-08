/**
 * @file E2E Tests - api
 * @module docmark-extension-slash-comment/tests/e2e/api
 */

import * as testSubject from '@flex-development/docmark-extension-slash-comment'
import { describe, expect, it } from 'vitest'

describe('e2e:docmark-extension-slash-comment', () => {
  it('should expose public api', () => {
    expect(Object.keys(testSubject)).toMatchSnapshot()
  })
})
