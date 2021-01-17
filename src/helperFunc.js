export const findNote = (notes=[], noteId) => {
  return notes.find(note => note.id === noteId)
}
export const findFolder = (folders=[], folderId) => {
  return folders.find(folder => folder.id === folderId)
}

export const getNotes = (notes=[], folderId) => {
  return ((!folderId)
  ? notes
  : notes.filter(note => note.folderId === folderId) 
  )
}