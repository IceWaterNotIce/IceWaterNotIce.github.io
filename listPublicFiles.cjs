const fs = require('fs')
const path = require('path')

function getFilesRecursively(folderPath,FolderName, arrFileExt) {
  const files = []

  function traverseDirectory(currentPath) {
    const directoryContents = fs.readdirSync(currentPath)

    directoryContents.forEach((item) => {
      const itemPath = path.join(currentPath, item)
      const isDirectory = fs.statSync(itemPath).isDirectory()

      if (isDirectory) {
        traverseDirectory(itemPath) // Recursively traverse subdirectories
      } else {
        // check if the file path includes the folder name
        if (itemPath.includes(FolderName) && arrFileExt.includes(itemPath.split('.').pop())) {
          files.push({
            name: item,
            path: itemPath
          })
        }
      }
    })
  }

  traverseDirectory(folderPath)

  return files
}

const publicFolderPath = path.join(__dirname, 'public') // Replace 'public' with the actual path to your public folder

const CG_ModelingImageList = getFilesRecursively(publicFolderPath,'CG_Modeling', ['png', 'gif'])
const CG_ModelingImageJsonContent = JSON.stringify(CG_ModelingImageList, null, 2)
fs.writeFile('public/CG_ModelingImageFiles.json', CG_ModelingImageJsonContent, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('File list for CG_Modeling has been created')
})

const CG_ModelingFbxList = getFilesRecursively(publicFolderPath,'CG_Modeling', ['fbx'])
const CG_ModelingFbxJsonContent = JSON.stringify(CG_ModelingFbxList, null, 2)
fs.writeFile('public/CG_ModelingFbxFiles.json', CG_ModelingFbxJsonContent, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('File list for CG_Modeling has been created')
})

