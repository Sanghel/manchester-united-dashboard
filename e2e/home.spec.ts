import { test, expect } from '@playwright/test'
import { mockApi } from './fixtures/api'

test.beforeEach(async ({ page }) => {
  await mockApi(page)
})

test('home page shows the header', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('banner')).toBeVisible()
  await expect(page.getByText('MU Dashboard')).toBeVisible()
})

test('home page shows score cards after load', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByLabel('Score board')).toBeVisible()
  await expect(page.getByText('Premier League').first()).toBeVisible()
})

test('home page shows live match badge', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('LIVE').first()).toBeVisible()
})

test('clicking a score card navigates to game page', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByLabel('Score board')).toBeVisible()
  // Click the first interactive score card
  const cards = page.locator('[role="button"]')
  await cards.first().click()
  await expect(page).toHaveURL(/\/game\/\d+/)
  await expect(page.getByText('Match Statistics')).toBeVisible()
})
