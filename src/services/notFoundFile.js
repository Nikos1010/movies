exports.notFoundFile = (file) => {
  if (!file) file = []

  const content = !file.length
    ? { error: 'Not File Found' }
    : file

  const statusCode = !file.length ? 404 : 200

  return { content, statusCode }
}
