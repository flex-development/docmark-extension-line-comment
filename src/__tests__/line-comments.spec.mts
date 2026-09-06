/**
 * @file Unit Tests - lineComments
 * @module docmark-extension-line-comment/tests/unit/lineComments
 */

import { describe, expect, it } from 'vitest'
import testSubject from '../line-comments.mts'

describe('unit:lineComments', () => {
  it('should be extension', () => {
    expect(testSubject).toMatchSnapshot()
  })
})
