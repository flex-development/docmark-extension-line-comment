/**
 * @file slashComments
 * @module docmark-extension-slash-comment/slashComments
 */

import { codes } from '@flex-development/docmark-util-symbol'
import type { NormalizedExtension } from '@flex-development/docmark-util-types'
import slashComment from './slash-comment.mts'

/**
 * The slash comment syntax extension.
 *
 * @see {@linkcode NormalizedExtension}
 *
 * @const {NormalizedExtension} slashComments
 */
const slashComments: NormalizedExtension = {
  source: { [codes.slash]: slashComment }
}

export default slashComments
