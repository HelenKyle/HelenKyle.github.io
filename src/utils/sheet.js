import Papa from 'papaparse'

const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ5bOJumF5u-9OCud0WZFAj4fnAmuWMq4lT4S40fdeS-j9QTGDpBabTwvq5xxFtmCziGuOWVTjNtMZ6/pub?output=csv'

export async function fetchArtworks() {
  const res = await fetch(SHEET_URL)
  const text = await res.text()
  const { data } = Papa.parse(text, { header: true, skipEmptyLines: true })
  return data
}
