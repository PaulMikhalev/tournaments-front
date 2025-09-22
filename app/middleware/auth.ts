export default defineNuxtRouteMiddleware(async (to) => {
  if (typeof window === 'undefined') return

  try {
    const { getToken, clearToken, api } = useApi()
    const token = getToken()

    if (!token) {
      return navigateTo(`/login?redirect=${encodeURIComponent(to.fullPath)}`)
    }

    try {
      await api('/auth/me')
    } catch (error: any) {
      clearToken()
      throw error
    }
  } catch (err: any) {
    return navigateTo(`/login?redirect=${encodeURIComponent(to.fullPath)}`)
  }
})
