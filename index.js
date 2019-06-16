const fs = require('fs')
const path = require('path')
const md5 = require('md5')
const svgIcon2Font = require('svgicon2font').svgIcon2Font

class SVGIcon2FontWebpackPlugin {
  options = null
  fileMd5 = null
  constructor (options) {
    this.options = options
  }

  getFileList () {
    let fileList = fs.readdirSync(this.options.entry)
    return fileList
  }

  checkFileChange () {
    if (this.fileMd5 === null) return true
    let fileList = this.getFileList()
    // check is file count change
    if (fileList.length !== Object.keys(this.fileMd5).length) return true

    // check is new file in the dir
    for (let fileName of fileList) {
      if (this.fileMd5[fileName] === undefined) {
        return true
      }
    }

    // check file md5 value
    let filePath = this.options.entry
    for (let fileName of fileList) {
      if (md5(fs.readFileSync(path.join(filePath, fileName))) !== this.fileMd5[fileName]) {
        return true
      }
    }
    return false
  }

  setFileMd5 () {
    let fileList = this.getFileList()
    let filePath = this.options.entry
    this.fileMd5 = {}
    for (let fileName of fileList) {
      this.fileMd5[fileName] = md5(fs.readFileSync(path.join(filePath, fileName)))
    }
  }

  apply (compiler) {
    compiler.hooks.beforeCompile.tapAsync('SVGIcon2FontWebpackPlugin',
      (params, callback) => {
        if (this.checkFileChange()) {
          this.setFileMd5()
          svgIcon2Font(this.options).then(
            callback()
          )
        } else {
          callback()
        }
      })
  }
}

module.exports = SVGIcon2FontWebpackPlugin
