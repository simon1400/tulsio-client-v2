// middleware.ts (корень проекта)
import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

// eslint-disable-next-line sonarjs/slow-regex, regexp/no-unused-capturing-group
const PUBLIC_FILE = /\.(.*)$/

// Простое кеширование редиректов (5 минут)
let cachedRedirects: Array<{ from: string; to: string }> | null = null
let cacheTimestamp: number | null = null
const CACHE_TIME = 5 * 60 * 1000 // 5 минут

async function fetchRedirects() {
  const now = Date.now()

  if (cachedRedirects && cacheTimestamp && now - cacheTimestamp < CACHE_TIME) {
    return cachedRedirects
  }

  const res = await fetch('https://admin.tulsio.cz/api/redirects')
  const data = await res.json()

  cachedRedirects = data.redirects
  cacheTimestamp = now

  return cachedRedirects
}

export async function middleware(req: NextRequest) {
  const { pathname, locale } = req.nextUrl

  if (pathname.startsWith('/_next') || pathname.includes('/api/') || PUBLIC_FILE.test(pathname)) {
    return
  }

  const redirects = await fetchRedirects()

  const redirectRule = redirects?.find((rule) => rule.from === pathname)

  if (redirectRule) {
    return NextResponse.redirect(new URL(redirectRule.to, req.url), 301)
  }

  // твой существующий редирект для дефолтной локали
  if (locale === 'default') {
    return NextResponse.redirect(new URL(`/cs${pathname}`, req.url))
  }
}
