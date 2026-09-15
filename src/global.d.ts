import type en from '../messages/en.json'

/**
 * Makes next-intl aware of every translation key that actually exists.
 *
 * What this buys you:
 *   - VS Code autocompletes translation keys as you type t("...")
 *   - A misspelled key becomes a build error instead of the literal text
 *     "team.roels.captain" appearing on the live site.
 *
 * The key list comes from messages/en.json, so English is the reference language.
 * Add a key there first, then to messages/fr.json.
 */
declare global {
  interface IntlMessages extends Messages {}
}

type Messages = typeof en

export {}
