(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/device/deviceDetail"],{

/***/ 128:
/*!**************************************************************************************************!*\
  !*** C:/Users/lvniao/Desktop/projects/iot/demo/main.js?{"page":"pages%2Fdevice%2FdeviceDetail"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _deviceDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/device/deviceDetail.vue */ 129));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_deviceDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 129:
/*!*******************************************************************************!*\
  !*** C:/Users/lvniao/Desktop/projects/iot/demo/pages/device/deviceDetail.vue ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deviceDetail_vue_vue_type_template_id_3eebb4f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deviceDetail.vue?vue&type=template&id=3eebb4f1& */ 130);
/* harmony import */ var _deviceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deviceDetail.vue?vue&type=script&lang=js& */ 132);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _deviceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _deviceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _deviceDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deviceDetail.vue?vue&type=style&index=0&lang=css& */ 134);
/* harmony import */ var _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _deviceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _deviceDetail_vue_vue_type_template_id_3eebb4f1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _deviceDetail_vue_vue_type_template_id_3eebb4f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/lvniao/Desktop/projects/iot/demo/pages/device/deviceDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 130:
/*!**************************************************************************************************************!*\
  !*** C:/Users/lvniao/Desktop/projects/iot/demo/pages/device/deviceDetail.vue?vue&type=template&id=3eebb4f1& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceDetail_vue_vue_type_template_id_3eebb4f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./deviceDetail.vue?vue&type=template&id=3eebb4f1& */ 131);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceDetail_vue_vue_type_template_id_3eebb4f1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceDetail_vue_vue_type_template_id_3eebb4f1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 131:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lvniao/Desktop/projects/iot/demo/pages/device/deviceDetail.vue?vue&type=template&id=3eebb4f1& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var m0 = _vm.shortName(_vm.selectDevice.deviceComment)
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0
      }
    }
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 132:
/*!********************************************************************************************************!*\
  !*** C:/Users/lvniao/Desktop/projects/iot/demo/pages/device/deviceDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./deviceDetail.vue?vue&type=script&lang=js& */ 133);
/* harmony import */ var _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 133:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lvniao/Desktop/projects/iot/demo/pages/device/deviceDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;































































































































































var _vuex = __webpack_require__(/*! vuex */ 16);
var _device = __webpack_require__(/*! @/api/device */ 31);var _data$computed$mounte;function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default = (_data$computed$mounte = {

  data: function data() {
    return {
      quality: [
      "优", "良", "轻度污染", "中度污染", "重度污染", "严重污染"],

      deviceStatus: {},
      paramWidth: 40,
      LifeparamWidth: 60,
      Runtimeleft: 0,
      LifeTimeleft: 0,
      paramLength: 4,
      RuntimeparamLength: 4,
      LifeTimeLength: 4,
      paramDispLength: 4,
      LifeTimeparamDispLength: 4,
      width: 0,
      parameterWidth: 0,
      arguementWidth: 0,
      left: {
        FilterLifeTimePercent: 0,
        Runtime: 0,
        LifeTime: 0 } };


  },
  computed: _objectSpread({},
  (0, _vuex.mapState)(["selectDevice"])),

  mounted: function mounted() {

  },
  onLoad: function onLoad() {var _this = this;

    (0, _device.getDevice)(this.selectDevice.deviceName).then(function (res) {
      _this.deviceStatus = {};
      if (res.data.data && res.data.data.datas && res.data.data.datas.length > 0) {
        for (var i = 0; i < res.data.data.datas.length; i++) {
          var data = res.data.data.datas[i];
          _this.deviceStatus[data.identifier] = data.value;
        }
      }
      // this.deviceStatus.workMode = this.deviceStatus.workMode == "手动" ? false:true;
      // this.deviceStatus.sleepMode = this.deviceStatus.sleepMode == "开" ? true:false;
      // this.deviceStatus.timeEnable = this.deviceStatus.timeEnable == "未启用" ? false:true;
      // this.deviceStatus.windSpeed = this.deviceStatus.windSpeed != "null" ? parseInt(this.deviceStatus.windSpeed):0;
      // this.deviceStatus.powerSwitch = false;
      var FilterLifeTimePercent = {};
      FilterLifeTimePercent.isArray = true;
      FilterLifeTimePercent.name = "FilterLifeTimePercent";
      FilterLifeTimePercent.unit = '%';
      FilterLifeTimePercent.title = "滤芯剩余";
      FilterLifeTimePercent.left = 0;
      FilterLifeTimePercent.value = [];
      for (var prop in _this.deviceStatus) {
        if (prop.indexOf("FilterLifeTimePercent") > -1) {
          FilterLifeTimePercent.value.push(_this.deviceStatus[prop]);
        }
      }
      FilterLifeTimePercent.length = FilterLifeTimePercent.value.length;
      if (FilterLifeTimePercent.value.length > 0) {
        _this.deviceStatus.FilterLifeTimePercent = FilterLifeTimePercent;
      }

      var Runtime = {};
      Runtime.name = "Runtime";
      Runtime.isArray = true;
      Runtime.unit = 'h';
      Runtime.title = "运行时间";
      Runtime.left = 0;
      Runtime.value = [];
      for (var _prop in _this.deviceStatus) {
        if (_prop.indexOf("Runtime") > -1) {
          Runtime.value.push(_this.deviceStatus[_prop]);
        }
      }
      Runtime.length = Runtime.value.length;
      if (Runtime.value.length > 0) {
        _this.deviceStatus.Runtime = Runtime;
      }

      var LifeTime = {};
      LifeTime.name = "LifeTime";
      LifeTime.unit = 'h';
      LifeTime.left = 0;
      LifeTime.title = "滤芯剩余时间";
      LifeTime.isArray = true;
      LifeTime.value = [];
      for (var _prop2 in _this.deviceStatus) {
        if (_prop2.indexOf("FilterLifeTimeDays") > -1) {
          LifeTime.value.push(_this.deviceStatus[_prop2]);
        }
      }
      LifeTime.length = LifeTime.value.length;
      if (LifeTime.value.length > 0) {
        _this.deviceStatus.LifeTime = LifeTime;
      }

      if (_this.deviceStatus.hasOwnProperty("TVOC")) {
        _this.deviceStatus.dispTVOC = {
          value: parseFloat(_this.deviceStatus.TVOC).toFixed(4),
          isArray: false,
          title: "TVOC_VOC浓度",
          unit: 'mg/m³' };

      }

      if (_this.deviceStatus.hasOwnProperty("WaterShortageStatus")) {
        _this.deviceStatus.dispWaterShortageStatus = {
          value: _this.deviceStatus.WaterShortageStatus == "0" ? "缺水" : "缺水",
          isArray: false,
          title: "加湿缺水状态",
          unit: '' };

      }

      var dispParameters = [];
      if (_this.deviceStatus.hasOwnProperty("FilterLifeTimePercent")) {
        dispParameters.push("FilterLifeTimePercent");
      }
      if (_this.deviceStatus.hasOwnProperty("dispTVOC")) {
        dispParameters.push("dispTVOC");
      }
      if (_this.deviceStatus.hasOwnProperty("Runtime")) {
        dispParameters.push("Runtime");
      }
      if (_this.deviceStatus.hasOwnProperty("dispWaterShortageStatus")) {
        dispParameters.push("dispWaterShortageStatus");
      }
      if (_this.deviceStatus.hasOwnProperty("LifeTime")) {
        dispParameters.push("LifeTime");
      }
      if (dispParameters.length > 0) {
        _this.deviceStatus.dispParameters = dispParameters;
        _this.deviceStatus.dispParametersRow = [];
        for (var j = 0; j < _this.deviceStatus.dispParameters.length / 2; j++) {
          _this.deviceStatus.dispParametersRow.push(j);
        }
      }


      _this.deviceStatus.HCHO = _this.deviceStatus.hasOwnProperty("HCHO") ? parseFloat(_this.deviceStatus.HCHO).toFixed(4) : null;


      if (_this.deviceStatus.hasOwnProperty("PowerSwitch")) {
        _this.deviceStatus.PowerSwitch = _this.deviceStatus.PowerSwitch ? true : false;
      } else {
        _this.deviceStatus.PowerSwitch = null;
      }

      if (_this.deviceStatus.hasOwnProperty("WindSpeed")) {
        _this.deviceStatus.WindSpeed = _this.deviceStatus.WindSpeed ? _this.deviceStatus.WindSpeed : 0;
      } else {
        _this.deviceStatus.WindSpeed = null;
      }

      if (_this.deviceStatus.hasOwnProperty("WorkMode")) {
        _this.deviceStatus.WorkMode = _this.deviceStatus.WorkMode ? true : false;
      } else {
        _this.deviceStatus.WorkMode = null;
      }

      if (_this.deviceStatus.hasOwnProperty("IonsSwitch")) {
        _this.deviceStatus.IonsSwitch = _this.deviceStatus.IonsSwitch ? true : false;
      } else {
        _this.deviceStatus.IonsSwitch = null;
      }

      if (_this.deviceStatus.hasOwnProperty("ChildLockSwitch")) {
        _this.deviceStatus.ChildLockSwitch = _this.deviceStatus.ChildLockSwitch ? true : false;
      } else {
        _this.deviceStatus.ChildLockSwitch = null;
      }

      if (_this.deviceStatus.hasOwnProperty("LocalTimer")) {
        _this.deviceStatus.LocalTimer = _this.deviceStatus.LocalTimer ? true : false;
      } else {
        _this.deviceStatus.LocalTimer = null;
      }

      if (_this.deviceStatus.hasOwnProperty("SleepMode")) {
        _this.deviceStatus.SleepMode = _this.deviceStatus.SleepMode ? true : false;
      } else {
        _this.deviceStatus.SleepMode = null;
      }

      if (_this.deviceStatus.hasOwnProperty("Humidified")) {
        _this.deviceStatus.Humidified = _this.deviceStatus.Humidified ? true : false;
      } else {
        _this.deviceStatus.Humidified = null;
      }

      _this.$store.commit('setSelectDeviceProperty', { deviceStatus: _this.deviceStatus });
    });
  } }, _defineProperty(_data$computed$mounte, "mounted", function mounted()
{var _this2 = this;
  uni.createSelectorQuery().select('.device-detail').boundingClientRect(function (e) {
    _this2.parameterWidth = e.width / 2 - 10;
    _this2.arguementWidth = (_this2.parameterWidth - 10 - 10) / 2;
  }).exec();
}), _defineProperty(_data$computed$mounte, "onUnload", function onUnload()
{
  console.log("onUnload");
}), _defineProperty(_data$computed$mounte, "methods", _objectSpread({

  moveToLeft: function moveToLeft(e, index) {
    var left = this.left[e.name];
    if (left < 0) {
      console.log(left);
      left = left + this.arguementWidth;
    }
    if (left == 0) {
      left = 0;
    }
    this.left[e.name] = left;


  },
  shortName: function shortName(name) {
    if (name && name.length > 4) {
      return name.substr(0, 4) + "...";
    }
    return name;
  },
  moveToRight: function moveToRight(e, index) {
    var left = this.left[e.name];
    if (left <= -1 * (e.value.length - 2) * this.arguementWidth) {
      left = -1 * (e.value.length - 2) * this.arguementWidth;
    } else {
      left = left - this.arguementWidth;
    }
    this.left[e.name] = left;
  },
  RuntimemoveToLeft: function RuntimemoveToLeft() {
    if (this.Runtimeleft < 0) {
      this.Runtimeleft += this.paramWidth;
    }
    if (this.Runtimeleft == 0) {
      this.Runtimeleft = 0;
    }


  },
  RuntimemoveToRight: function RuntimemoveToRight() {
    if (this.Runtimeleft <= -1 * (this.RuntimeparamLength - this.paramDispLength) * this.paramWidth) {
      this.Runtimeleft = -1 * (this.RuntimeparamLength - this.paramDispLength) * this.paramWidth;
    } else {
      this.Runtimeleft -= this.paramWidth;
    }
  },

  LifeTimemoveToLeft: function LifeTimemoveToLeft() {
    if (this.LifeTimeleft < 0) {
      this.LifeTimeleft += this.LifeparamWidth;
    }
    if (this.LifeTimeleft == 0) {
      this.LifeTimeleft = 0;
    }


  },
  LifeTimemoveToRight: function LifeTimemoveToRight() {
    if (this.LifeTimeleft <= -1 * (this.LifeTimeparamLength - this.LifeTimeparamDispLength) * this.LifeparamWidth) {
      this.LifeTimeleft = -1 * (this.LifeTimeparamLength - this.LifeTimeparamDispLength) * this.LifeparamWidth;
    } else {
      this.LifeTimeleft -= this.LifeparamWidth;
    }
  },

  saveDevice: function saveDevice() {
    uni.request({
      url: 'http://39.98.107.68:8000/Api/AirPurifierDetails',
      dataType: 'json',
      method: 'PUT',
      data: this.selectDevice,
      success: function success(res) {
      } });

  } },
(0, _vuex.mapMutations)([
"setSelectDeviceProperty"]), {

  switchWorkMode: function switchWorkMode() {
    this.deviceStatus.WorkMode =
    this.deviceStatus.WorkMode == true ? false : true;
    this.$store.commit('setSelectDeviceProperty', { deviceStatus: this.deviceStatus });
  },
  switchSpeed: function switchSpeed() {
    var speed = this.deviceStatus.WindSpeed;
    this.deviceStatus.WindSpeed = (speed + 1) % 6;
    this.$store.commit('setSelectDeviceProperty', { deviceStatus: this.deviceStatus });
  },
  switchIonsSwitch: function switchIonsSwitch() {
    this.deviceStatus.IonsSwitch =
    !this.deviceStatus.IonsSwitch;
    this.$store.commit('setSelectDeviceProperty', { deviceStatus: this.deviceStatus });
  },
  switchHumidified: function switchHumidified() {
    this.deviceStatus.Humidified =
    !this.deviceStatus.Humidified;
    this.$store.commit('setSelectDeviceProperty', { deviceStatus: this.deviceStatus });
  },
  switchChildLock: function switchChildLock() {
    this.deviceStatus.ChildLockSwitch =
    !this.deviceStatus.ChildLockSwitch;
    this.$store.commit('setSelectDeviceProperty', { deviceStatus: this.deviceStatus });
  },
  switchSleep: function switchSleep() {
    this.deviceStatus.SleepMode =
    !this.deviceStatus.SleepMode;
    this.$store.commit('setSelectDeviceProperty', { deviceStatus: this.deviceStatus });
  },
  switchClock: function switchClock() {
    //this.$store.commit("setSelectDeviceClock", true)
    this.deviceStatus.LocalTimer = true;
    this.$store.commit('setSelectDeviceProperty', { deviceStatus: this.deviceStatus });
    uni.navigateTo({
      url: './setTimer' });

  },
  shutdown: function shutdown() {
    this.deviceStatus.PowerSwitch =
    !this.deviceStatus.PowerSwitch;
    this.$store.commit("setSelectDeviceProperty", { deviceStatus: this.deviceStatus });
  },
  goToSubscribe: function goToSubscribe() {
    uni.navigateTo({
      url: './subscribe' });

  } })), _data$computed$mounte);exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 134:
/*!****************************************************************************************************************!*\
  !*** C:/Users/lvniao/Desktop/projects/iot/demo/pages/device/deviceDetail.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./deviceDetail.vue?vue&type=style&index=0&lang=css& */ 135);
/* harmony import */ var _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_deviceDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 135:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lvniao/Desktop/projects/iot/demo/pages/device/deviceDetail.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[128,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/device/deviceDetail.js.map