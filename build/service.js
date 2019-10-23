"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(require("webdriver-image-comparison/build/base"));

var _saveScreen = _interopRequireDefault(require("webdriver-image-comparison/build/commands/saveScreen"));

var _checkScreen = _interopRequireDefault(require("webdriver-image-comparison/build/commands/checkScreen"));

var _saveElement = _interopRequireDefault(require("webdriver-image-comparison/build/commands/saveElement"));

var _checkElement = _interopRequireDefault(require("webdriver-image-comparison/build/commands/checkElement"));

var _saveFullPageScreen = _interopRequireDefault(require("webdriver-image-comparison/build/commands/saveFullPageScreen"));

var _checkFullPageScreen = _interopRequireDefault(require("webdriver-image-comparison/build/commands/checkFullPageScreen"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class WdioImageComparisonService extends _base.default {
  constructor(options) {
    super(options);
  }
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   *
   * @param {Array.<Object>} capabilities list of capabilities details
   */


  before(capabilities) {
    const instanceData = (0, _utils.getInstanceData)(capabilities);
    const folders = this.folders;
    const defaultOptions = this.defaultOptions;
    /**
     * Saves an image of an element
     */

    browser.addCommand('saveElement', function (element, tag, saveElementOptions = {}) {
      return (0, _saveElement.default)({
        executor: this.execute.bind(browser),
        screenShot: this.takeScreenshot.bind(browser)
      }, instanceData, (0, _utils.getFolders)(saveElementOptions, folders), element, tag, {
        wic: defaultOptions,
        method: saveElementOptions
      });
    });
    /**
     * Saves an image of a viewport
     */

    browser.addCommand('saveScreen', function (tag, saveScreenOptions = {}) {
      return (0, _saveScreen.default)({
        executor: this.execute.bind(browser),
        screenShot: this.takeScreenshot.bind(browser)
      }, instanceData, (0, _utils.getFolders)(saveScreenOptions, folders), tag, {
        wic: defaultOptions,
        method: saveScreenOptions
      });
    });
    /**
     * Saves an image of the complete screen
     */

    browser.addCommand('saveFullPageScreen', function (tag, saveFullPageScreenOptions = {}) {
      return (0, _saveFullPageScreen.default)({
        executor: this.execute.bind(browser),
        screenShot: this.takeScreenshot.bind(browser)
      }, instanceData, (0, _utils.getFolders)(saveFullPageScreenOptions, folders), tag, {
        wic: defaultOptions,
        method: saveFullPageScreenOptions
      });
    });
    /**
     * Compare an image of an element
     */

    browser.addCommand('checkElement', function (element, tag, checkElementOptions = {}) {
      return (0, _checkElement.default)({
        executor: this.execute.bind(browser),
        screenShot: this.takeScreenshot.bind(browser)
      }, instanceData, (0, _utils.getFolders)(checkElementOptions, folders), element, tag, {
        wic: defaultOptions,
        method: checkElementOptions
      });
    });
    /**
     * Compares an image of a viewport
     */

    browser.addCommand('checkScreen', function (tag, checkScreenOptions = {}) {
      return (0, _checkScreen.default)({
        executor: this.execute.bind(browser),
        screenShot: this.takeScreenshot.bind(browser)
      }, instanceData, (0, _utils.getFolders)(checkScreenOptions, folders), tag, {
        wic: defaultOptions,
        method: checkScreenOptions
      });
    });
    /**
     * Compares an image of the complete screen
     */

    browser.addCommand('checkFullPageScreen', function (tag, checkFullPageOptions = {}) {
      return (0, _checkFullPageScreen.default)({
        executor: this.execute.bind(browser),
        screenShot: this.takeScreenshot.bind(browser)
      }, instanceData, (0, _utils.getFolders)(checkFullPageOptions, folders), tag, {
        wic: defaultOptions,
        method: checkFullPageOptions
      });
    });
  }

}

exports.default = WdioImageComparisonService;