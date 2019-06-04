import * as commandLineArgs from 'command-line-args'
import DirectoryFileSystemInterface from './DirectoryFileSystemInterface'


export default class Server {
  start() {
    const mainDefinitions = [
      { name: 'dir' }
    ]
    const mainOptions = commandLineArgs(mainDefinitions, { stopAtFirstUnknown: true })
    
    function start(path) {
      let fsInterface = new DirectoryFileSystemInterface(path)
    }

    console.log('mainOptions = ', mainOptions)
  }
  //if ()
}
