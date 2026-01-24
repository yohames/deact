/** @vitest-environment jsdom */
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App.jsx'

describe('App counter', () => {
  it('shows initial count and increments on click', () => {
    render(<App />)

    const button = screen.getByRole('button', { name: /count is/i })
    expect(button.textContent).toContain('count is 0')

    fireEvent.click(button)
    expect(button.textContent).toContain('count is 1')
  })
  
  it('renders Vite and React links with correct hrefs updated', () => {
    render(<App />)

    const viteImgCandidates = screen.getAllByAltText(/Vite logo/i)
    const reactImgCandidates = screen.getAllByAltText(/React logo/i)

    const viteLink = viteImgCandidates
      .map((img) => img.closest('a'))
      .find((a) => a && a.getAttribute('href') === 'https://vite.dev')

    const reactLink = reactImgCandidates
      .map((img) => img.closest('a'))
      .find((a) => a && a.getAttribute('href') === 'https://react.dev')

    expect(Boolean(viteLink)).toBe(true)
    expect(Boolean(reactLink)).toBe(true)
  })
});