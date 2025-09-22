export const useApi = () => {
  const config = useRuntimeConfig()
  const base = `${String(config.public.apiBase || '').replace(/\/+$/, '')}/api`
  
  // VueUse для работы с localStorage и cookies
  const accessToken = useLocalStorage('access_token', '')
  const cookies = useCookie('access_token', {
    default: () => '',
    maxAge: 7 * 24 * 60 * 60, // 7 дней
    sameSite: 'lax',
    secure: false, // для localhost
    httpOnly: false // для доступа с клиента
  })

  const getToken = () => {
    // Приоритет: localStorage -> cookie
    const lsToken = accessToken.value
    const cookieToken = cookies.value
    return lsToken || cookieToken || null
  }

  const setToken = (token: string) => {
    accessToken.value = token
    cookies.value = token
  }

  const clearToken = () => {
    accessToken.value = ''
    cookies.value = ''
  }

  const api = async (url: string, options: any = {}) => {
    const token = getToken()
    
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers
    }
    
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }
    
    return $fetch(base + url, {
      ...options,
      headers,
      credentials: 'include'
    })
  }

  return { 
    api, 
    getToken, 
    setToken, 
    clearToken,
    accessToken: readonly(accessToken)
  }
}
