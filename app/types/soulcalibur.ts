// Soulcalibur 6 character constants and types
export const soulcaliburCharacters = {
  // Main roster characters
  SOPHITIA: 'SOPHITIA',
  CASSANDRA: 'CASSANDRA',
  TAKI: 'TAKI',
  MAXI: 'MAXI',
  KILIK: 'KILIK',
  XIANGHUA: 'XIANGHUA',
  YOSHIMITSU: 'YOSHIMITSU',
  NIGHTMARE: 'NIGHTMARE',
  SIEGFRIED: 'SIEGFRIED',
  RAPHAEL: 'RAPHAEL',
  TALIM: 'TALIM',
  IVY: 'IVY',
  ZASALAMEL: 'ZASALAMEL',
  ASTAROTH: 'ASTAROTH',
  VOLDO: 'VOLDO',
  CERVANTES: 'CERVANTES',
  TIRA: 'TIRA',
  MITSURUGI: 'MITSURUGI',
  SEONG_MIN_NA: 'SEONG MIN-NA',
  
  // DLC characters
  AZWEL: 'AZWEL',
  GROH: 'GROH',
  GERALT: 'GERALT',
  AMY: 'AMY',
  HILDE: 'HILDE',
  HAOHMARU: 'HAOHMARU',
  SETSUKA: 'SETSUKA',
  HWANG: 'HWANG',
  
  // Guest characters
  GERALT_OF_RIVIA: 'GERALT_OF_RIVIA',
  '2B': '2B',
  
  // Custom character
  CUSTOM: 'CUSTOM'
} as const

export type SoulcaliburCharacter = typeof soulcaliburCharacters[keyof typeof soulcaliburCharacters]

// Character display names for UI
export const soulcaliburCharacterNames: Record<SoulcaliburCharacter, string> = {
  [soulcaliburCharacters.SOPHITIA]: 'Sophitia Alexandra',
  [soulcaliburCharacters.CASSANDRA]: 'Cassandra Alexandra',
  [soulcaliburCharacters.TAKI]: 'Taki',
  [soulcaliburCharacters.MAXI]: 'Maxi',
  [soulcaliburCharacters.KILIK]: 'Kilik',
  [soulcaliburCharacters.XIANGHUA]: 'Xianghua',
  [soulcaliburCharacters.YOSHIMITSU]: 'Yoshimitsu',
  [soulcaliburCharacters.NIGHTMARE]: 'Nightmare',
  [soulcaliburCharacters.SIEGFRIED]: 'Siegfried Schtauffen',
  [soulcaliburCharacters.RAPHAEL]: 'Raphael Sorel',
  [soulcaliburCharacters.TALIM]: 'Talim',
  [soulcaliburCharacters.IVY]: 'Ivy Valentine',
  [soulcaliburCharacters.ZASALAMEL]: 'Zasalamel',
  [soulcaliburCharacters.ASTAROTH]: 'Astaroth',
  [soulcaliburCharacters.VOLDO]: 'Voldo',
  [soulcaliburCharacters.CERVANTES]: 'Cervantes de Leon',
  [soulcaliburCharacters.TIRA]: 'Tira',
  [soulcaliburCharacters.AZWEL]: 'Azwel',
  [soulcaliburCharacters.GROH]: 'Grøh',
  [soulcaliburCharacters.SEONG_MIN_NA]: 'Seong Min-Na',
  [soulcaliburCharacters.GERALT]: 'Geralt of Rivia',
  [soulcaliburCharacters.AMY]: 'Amy',
  [soulcaliburCharacters.MITSURUGI]: 'Mitsurugi',
  [soulcaliburCharacters.HILDE]: 'Hilde',
  [soulcaliburCharacters.HWANG]: 'Hwang',
  [soulcaliburCharacters.HAOHMARU]: 'Haohmaru',
  [soulcaliburCharacters.SETSUKA]: 'Setsuka',
  [soulcaliburCharacters.GERALT_OF_RIVIA]: 'Geralt of Rivia',
  [soulcaliburCharacters['2B']]: '2B',
  [soulcaliburCharacters.CUSTOM]: 'Custom Character'
}

// Utility functions
export const getCharacterName = (character: SoulcaliburCharacter): string => {
  return soulcaliburCharacterNames[character] || character
}

export const getAllCharacters = (): SoulcaliburCharacter[] => {
  return Object.values(soulcaliburCharacters)
}

export const characterListInGameOrder: (SoulcaliburCharacter | null)[] = [
  // 1 row
  soulcaliburCharacters.CASSANDRA,
  soulcaliburCharacters.SIEGFRIED,
  soulcaliburCharacters.ZASALAMEL,
  soulcaliburCharacters.NIGHTMARE,
  soulcaliburCharacters.AMY,
  // 2 row
  soulcaliburCharacters['2B'],
  soulcaliburCharacters.XIANGHUA,
  soulcaliburCharacters.MAXI,
  soulcaliburCharacters.SOPHITIA,
  soulcaliburCharacters.ASTAROTH,
  soulcaliburCharacters.IVY,
  soulcaliburCharacters.TIRA,
  // 3 row
  soulcaliburCharacters.HILDE,
  soulcaliburCharacters.YOSHIMITSU,
  soulcaliburCharacters.KILIK,
  null, // empty slot | random | custom char
  soulcaliburCharacters.GROH,
  soulcaliburCharacters.CERVANTES,
  soulcaliburCharacters.SETSUKA,
  // 4 row
  soulcaliburCharacters.HAOHMARU,
  soulcaliburCharacters.TALIM,
  soulcaliburCharacters.MITSURUGI,
  soulcaliburCharacters.GERALT,
  soulcaliburCharacters.TAKI,
  soulcaliburCharacters.AZWEL,
  soulcaliburCharacters.HWANG,
  // 5 row
  soulcaliburCharacters.SEONG_MIN_NA,
  soulcaliburCharacters.RAPHAEL,
  soulcaliburCharacters.VOLDO,
]