module.exports = (url) => {
  if (/agencies/.test(url)) return 'agencies'
  if (/reviews/.test(url)) return 'reviews'
  if (/listings/.test(url)) return 'listings'
  throw new Error('Invalid type')
}