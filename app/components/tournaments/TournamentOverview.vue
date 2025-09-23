<template>
  <!-- Tournament Bracket Tab -->
  <TournamentBracket v-if="activeTab === 'bracket'" />
  
  <!-- Stream Tab Content -->
  <TournamentStreamTab v-else-if="activeTab === 'stream'" />

  <!-- Participants Tab Content -->
  <TournamentParticipantsTab v-else-if="activeTab === 'participants'" :tournament="tournament" />

  <!-- Rules Tab Content -->
  <TournamentRulesTab v-else-if="activeTab === 'rules'" />
</template>

<script setup lang="ts">
import TournamentBracket from '~/components/tournaments/TournamentBracket.vue'
import TournamentStreamTab from '~/components/tournaments/TournamentStreamTab.vue'
import TournamentParticipantsTab from '~/components/tournaments/TournamentParticipantsTab.vue'
import TournamentRulesTab from '~/components/tournaments/TournamentRulesTab.vue'
import type { TournamentView } from '~/types/tournament'

const props = defineProps<{
  tournament: TournamentView
  activeTab?: string
}>()
</script>
