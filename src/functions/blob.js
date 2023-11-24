export const toBlob = async (url) => {
  const response = await fetch(url)
  return await response.blob()
}

export const toFile = (blob, fileName) => new File([blob], fileName, { type: blob.type })
