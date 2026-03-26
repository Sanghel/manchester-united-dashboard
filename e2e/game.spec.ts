import { test, expect } from '@playwright/test'
import { mockApi } from './fixtures/api'

test.beforeEach(async ({ page }) => {
  await mockApi(page)
})

test('game page shows match statistics', async ({ page }) => {
  await page.goto('/game/1')
  await expect(page.getByRole('region', { name: 'Match statistics' })).toBeVisible()
  await expect(page.getByText('Possession')).toBeVisible()
  await expect(page.getByText('Shots', { exact: true })).toBeVisible()
})

test('game page shows back button', async ({ page }) => {
  await page.goto('/game/1')
  await expect(page.getByLabel('Go back')).toBeVisible()
})

test('game page shows error for unknown match', async ({ page }) => {
  await page.goto('/game/9999')
  await expect(page.getByText('Stats not available')).toBeVisible()
})

test('back button navigates away', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByLabel('Score board')).toBeVisible()
  await page.goto('/game/1')
  await page.getByLabel('Go back').click()
  // Should navigate back (to home or previous page)
  await expect(page).not.toHaveURL('/game/1')
})
