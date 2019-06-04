import NotImplementedError from '../misc/NotImplementedError'

export default class FileSystemInterface {
  directoryListing() {
    throw NotImplementedError(this.__proto__.constructor.name, 'directoryListing')
  }


}
