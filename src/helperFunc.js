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

export const randomString = (length, chars) => {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

export const date = new Date().toJSON().slice(0,10).replace(/-/g,'/');