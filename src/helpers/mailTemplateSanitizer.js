function stripLegacyLogo (html) {
  if (!html) return html

  // Remove any img tags that reference the legacy Trudesk branding assets
  return html.replace(/<img[^>]+src=["'][^"']*(trudesk[^"']*|td_3@2x\.png)[^"']*["'][^>]*>/gi, '')
}

module.exports = { stripLegacyLogo }