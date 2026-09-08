/**
 * @file Unit Tests - slashComment
 * @module docmark-extension-slash-comment/tests/unit/slashComment
 */

import { describe, expect, it } from 'vitest'
import testSubject from '../slash-comment.mts'

describe('unit:slashComment', () => {
  it('should be named comment construct', () => {
    expect(testSubject).to.have.property('continuation')
    expect(testSubject).to.have.property('name').be.a('string')
    expect(testSubject).toMatchSnapshot()
  })
})
