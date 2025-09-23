import type { TournamentDto, Tournament, TournamentStatus } from '~/types/tournament'
import { useApi } from './useApi'

export const useTournaments = () => {
  const tournaments = ref<Tournament[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Функция для преобразования статуса из API в формат компонента
  const mapStatusToTournamentStatus = (apiStatus: string): TournamentStatus => {
    switch (apiStatus) {
      case 'REGISTRATION':
        return 'REGISTRATION'
      case 'LIVE':
        return 'LIVE'
      case 'COMPLETED':
        return 'COMPLETED'
      case 'CANCELLED':
        return 'CANCELLED'
      default:
        return 'REGISTRATION'
    }
  }

  // Функция для получения изображения игры
  const getGameImage = (game: string): string => {
    const gameImages: Record<string, string> = {
      'Soulcalibur VI': 'http://localhost:3845/assets/04ae138ca535efac6364e2aef8861940905afd52.png',
      'Counter-Strike 2': 'http://localhost:3845/assets/b890c61489a080992ad7e99adabb1145e6d59606.png',
      'Dota 2': 'http://localhost:3845/assets/edb346e5c89bf40002647fa0950f13b3c315d1e7.png',
      'Valorant': 'http://localhost:3845/assets/44c786423fd72e67c98aa1a1f3764001cb6b98df.png',
      'League of Legends': 'http://localhost:3845/assets/860dc6bc2b9ea67637fbb0b3b403e100cabd221b.png'
    }
    return gameImages[game] || gameImages['Counter-Strike 2'] || ''
  }

  // Функция для преобразования данных турнира из API
  const transformTournamentData = (tournamentDto: TournamentDto): Tournament => ({
    id: tournamentDto.id,
    title: tournamentDto.title,
    game: tournamentDto.game,
    date: tournamentDto.startDate ? new Date(tournamentDto.startDate).toLocaleDateString('ru-RU') : '',
    prize: tournamentDto.prizePool ? `$${tournamentDto.prizePool}` : '',
    participants: tournamentDto.currentParticipants || 0,
    maxParticipants: tournamentDto.maxParticipants || 16,
    status: mapStatusToTournamentStatus(tournamentDto.status || 'REGISTRATION'),
    progress: 0,
    image: getGameImage(tournamentDto.game)
  })

  // Функция загрузки турниров
  const loadTournaments = async () => {
    isLoading.value = true
    error.value = null
    
    try {
      const { api } = useApi()
      const response = await api('/tournaments', { method: 'GET' })
      
      // API возвращает объект с полями data и pagination
      if (response.success && response.data) {
        const tournamentData = (response.data as any).data || []
        tournaments.value = tournamentData.map(transformTournamentData)
      } else {
        tournaments.value = []
      }
    } catch (e) {
      console.error('Failed to load tournaments', e)
      error.value = 'Ошибка загрузки турниров'
      tournaments.value = []
    } finally {
      isLoading.value = false
    }
  }

  return {
    tournaments,
    isLoading: readonly(isLoading),
    error: readonly(error),
    loadTournaments
  }
}
