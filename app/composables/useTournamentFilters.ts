import type { Tournament } from '~/types/tournament'

export interface GameOption {
  label: string
  value: string
}

export const useTournamentFilters = () => {
  const selectedGame = ref('')
  const searchQuery = ref('')

  // Опции игр для фильтра
  const gameOptions: GameOption[] = [
    { label: 'Все игры', value: '' },
    { label: 'Soulcalibur VI', value: 'Soulcalibur VI' },
    { label: 'Counter-Strike 2', value: 'Counter-Strike 2' },
    { label: 'Dota 2', value: 'Dota 2' },
    { label: 'Valorant', value: 'Valorant' },
    { label: 'League of Legends', value: 'League of Legends' }
  ]

  // Функция фильтрации турниров
  const filterTournaments = (tournaments: Tournament[]) => {
    let filtered = tournaments

    // Фильтр по игре
    if (selectedGame.value) {
      filtered = filtered.filter(tournament => tournament.game === selectedGame.value)
    }

    // Фильтр по поисковому запросу
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      filtered = filtered.filter(tournament => 
        tournament.title.toLowerCase().includes(query) ||
        tournament.game.toLowerCase().includes(query)
      )
    }

    return filtered
  }

  // Сброс фильтров
  const resetFilters = () => {
    selectedGame.value = ''
    searchQuery.value = ''
  }

  return {
    selectedGame,
    searchQuery,
    gameOptions,
    filterTournaments,
    resetFilters
  }
}
