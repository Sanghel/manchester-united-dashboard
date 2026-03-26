import { test, expect } from '@playwright/test'
import { mockApi } from './fixtures/api'

test.beforeEach(async ({ page }) => {
  await mockApi(page)
})

test('home page has a banner landmark', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('banner')).toBeVisible()
})

test('home page title is set', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/manchester united|mu dashboard|sports/i)
})

test('score board region is labelled', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('region', { name: 'Score board' })).toBeVisible()
})

test('standings table is labelled', async ({ page }) => {
  await page.goto('/standings')
  await expect(page.getByRole('table', { name: 'League standings' })).toBeVisible()
})

test('header logo link has aria-label', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('link', { name: /Manchester United Dashboard home/i })).toBeVisible()
})

test('game page stats region is labelled', async ({ page }) => {
  await page.goto('/game/1')
  await expect(page.getByRole('region', { name: 'Match statistics' })).toBeVisible()
})
