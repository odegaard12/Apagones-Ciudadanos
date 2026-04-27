const rawApiBaseUrl = import.meta.env.VITE_API_BASE_URL || ''

function normalizeBaseUrl(value) {
  return String(value || '').trim().replace(/\/+$/, '')
}

export const API_BASE_URL = normalizeBaseUrl(rawApiBaseUrl)

export function apiUrl(path) {
  const safePath = String(path || '')
  const normalizedPath = safePath.startsWith('/') ? safePath : `/${safePath}`

  if (!API_BASE_URL) {
    return normalizedPath
  }

  return `${API_BASE_URL}${normalizedPath}`
}

export function apiFetch(path, options) {
  return fetch(apiUrl(path), options)
}
