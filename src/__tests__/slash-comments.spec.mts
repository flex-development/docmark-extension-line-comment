/**
 * @file Unit Tests - slashComments
 * @module docmark-extension-slash-comment/tests/unit/slashComments
 */

import { describe, expect, it } from 'vitest'
import testSubject from '../slash-comments.mts'

describe('unit:slashComments', () => {
  it('should be extension', () => {
    expect(testSubject).toMatchSnapshot()
  })
})
