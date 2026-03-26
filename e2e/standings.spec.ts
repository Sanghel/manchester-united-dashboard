import { test, expect } from '@playwright/test'
import { mockApi } from './fixtures/api'

test.beforeEach(async ({ page }) => {
  await mockApi(page)
})

test('standings page renders league table', async ({ page }) => {
  await page.goto('/standings')
  await expect(page.getByRole('table', { name: 'League standings' })).toBeVisible()
  await expect(page.getByText('Manchester United')).toBeVisible()
  await expect(page.getByText('Manchester City')).toBeVisible()
})

test('standings page highlights Manchester United row', async ({ page }) => {
  await page.goto('/standings')
  const row = page.getByRole('row').filter({ hasText: 'Manchester United' })
  await expect(row).toBeVisible()
  await expect(row).toHaveAttribute('aria-current', 'true')
})

test('standings table shows column headers', async ({ page }) => {
  await page.goto('/standings')
  await expect(page.getByRole('columnheader', { name: 'Pts' })).toBeVisible()
  await expect(page.getByRole('columnheader', { name: 'W' })).toBeVisible()
  await expect(page.getByRole('columnheader', { name: 'GD' })).toBeVisible()
})
