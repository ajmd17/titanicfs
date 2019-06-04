import FileSystemInterface from '../shared/FileSystemInterface'

export default class DirectoryFileSystemInterface extends FileSystemInterface {
  constructor(path = './') {
    this.path = path
  }
}
