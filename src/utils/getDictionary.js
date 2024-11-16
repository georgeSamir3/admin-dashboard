// Third-party Imports
import 'server-only'

const dictionaries = {
  en: () => import('@/data/dictionaries/en.json').then(module => module.default),
  fr: () => import('@/data/dictionaries/fr.json').then(module => module.default),
  ar: () => import('@/data/dictionaries/ar.json').then(module => module.default)
}

// export const getDictionary = async locale => dictionaries[locale]()
export const getDictionary = async locale => {
  const selectedLocale = dictionaries[locale] ? locale : 'en' // Default to 'en' if locale is unavailable
  return dictionaries[selectedLocale]()
}
