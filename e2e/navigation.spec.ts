import { test, expect } from '@playwright/test'
import { mockApi } from './fixtures/api'

test.beforeEach(async ({ page }) => {
  await mockApi(page)
})

test('sidebar is visible on desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 })
  await page.goto('/')
  await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible()
})

test('sidebar nav links are present', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 })
  await page.goto('/')
  const nav = page.getByRole('navigation', { name: 'Main navigation' })
  await expect(nav.getByRole('link', { name: /Home/i })).toBeVisible()
  await expect(nav.getByRole('link', { name: /Standings/i })).toBeVisible()
  await expect(nav.getByRole('link', { name: /Scores/i })).toBeVisible()
})

test('navigating to /standings shows standings page', async ({ page }) => {
  await page.goto('/standings')
  await expect(page.getByText('League Standings')).toBeVisible()
})

test('404 page shows for unknown route', async ({ page }) => {
  await page.goto('/this-does-not-exist')
  await expect(page.getByText('Page not found')).toBeVisible()
  await expect(page.getByRole('heading', { name: /page not found/i })).toBeVisible()
})

test('404 page go home button navigates to /', async ({ page }) => {
  await page.goto('/unknown-route')
  await page.getByRole('button', { name: 'Go home' }).click()
  await expect(page).toHaveURL('/')
})

test('search page shows search input', async ({ page }) => {
  await page.goto('/search')
  await expect(page.getByRole('searchbox', { name: /Search matches/i })).toBeVisible()
})
