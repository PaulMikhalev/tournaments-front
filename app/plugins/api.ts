export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const api = $fetch.create({
    baseURL: config.public.apiBase,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    onRequest({ options }) {
      if (!options.headers) options.headers = {}
      try {
        const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null
        if (token) {
          // @ts-ignore - headers may be Headers | Record
          options.headers.Authorization = `Bearer ${token}`
        }
      } catch (_) {
        // ignore storage errors
      }
    }
  })

  return {
    provide: {
      api
    }
  }
})


