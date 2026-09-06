/**
 * @file lineComments
 * @module docmark-extension-line-comment/lineComments
 */

import { codes } from '@flex-development/docmark-util-symbol'
import type { NormalizedExtension } from '@flex-development/docmark-util-types'
import lineComment from './line-comment.mts'

/**
 * The line comment syntax extension.
 *
 * @see {@linkcode NormalizedExtension}
 *
 * @const {NormalizedExtension} lineComments
 */
const lineComments: NormalizedExtension = {
  source: { [codes.slash]: lineComment }
}

export default lineComments
