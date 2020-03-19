(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/CitySelect"],{

/***/ 312:
/*!********************************************************************************************!*\
  !*** C:/Users/lvniao/Desktop/projects/iot/demo/main.js?{"page":"components%2FCitySelect"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _CitySelect = _interopRequireDefault(__webpack_require__(/*! ./components/CitySelect.vue */ 313));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_CitySelect.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 313:
/*!***************************************************************************!*\
  !*** C:/Users/lvniao/Desktop/projects/iot/demo/components/CitySelect.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CitySelect_vue_vue_type_template_id_720caddc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CitySelect.vue?vue&type=template&id=720caddc& */ 314);
/* harmony import */ var _CitySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CitySelect.vue?vue&type=script&lang=js& */ 316);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CitySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _CitySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _CitySelect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CitySelect.vue?vue&type=style&index=0&lang=css& */ 318);
/* harmony import */ var _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 14);






/* normalize component */

var component = Object(_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CitySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CitySelect_vue_vue_type_template_id_720caddc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CitySelect_vue_vue_type_template_id_720caddc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/lvniao/Desktop/projects/iot/demo/components/CitySelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 314:
/*!**********************************************************************************************************!*\
  !*** C:/Users/lvniao/Desktop/projects/iot/demo/components/CitySelect.vue?vue&type=template&id=720caddc& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_template_id_720caddc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./CitySelect.vue?vue&type=template&id=720caddc& */ 315);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_template_id_720caddc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_template_id_720caddc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 315:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lvniao/Desktop/projects/iot/demo/components/CitySelect.vue?vue&type=template&id=720caddc& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  var l0 = _vm.__map(_vm.cities, function(group, __i0__) {
    var g0 = group.group.toUpperCase()
    return {
      $orig: _vm.__get_orig(group),
      g0: g0
    }
  })

  var l1 = _vm.__map(_vm.cities, function(group, __i2__) {
    var g1 = group.group.toUpperCase()
    return {
      $orig: _vm.__get_orig(group),
      g1: g1
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
        l1: l1
      }
    }
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 316:
/*!****************************************************************************************************!*\
  !*** C:/Users/lvniao/Desktop/projects/iot/demo/components/CitySelect.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./CitySelect.vue?vue&type=script&lang=js& */ 317);
/* harmony import */ var _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 317:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lvniao/Desktop/projects/iot/demo/components/CitySelect.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



























var _vuex = __webpack_require__(/*! vuex */ 16);function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =
{
  data: function data() {
    return {
      cities: [{
        "group": "a",
        "cities": [{
          "id": 35,
          "pid": 2,
          "city_code": "101220601",
          "city_name": "安庆",
          "post_code": "246000",
          "area_code": "0556",
          "ctime": "2019-07-11 17:30:10",
          "pinyin": "anqing" },
        {
          "id": 111,
          "pid": 7,
          "city_code": "101260301",
          "city_name": "安顺",
          "post_code": "561000",
          "area_code": "0851",
          "ctime": "2019-07-11 17:30:45",
          "pinyin": "anshun" },
        {
          "id": 258,
          "pid": 18,
          "city_code": "101081213",
          "city_name": "阿拉善盟",
          "post_code": "750306",
          "area_code": "0483",
          "ctime": "2019-07-11 17:04:03",
          "pinyin": "alashanmeng" },
        {
          "id": 323,
          "pid": 25,
          "city_code": "101271901",
          "city_name": "阿坝",
          "post_code": "624000",
          "area_code": "0837",
          "ctime": "2019-07-11 17:04:11",
          "pinyin": "aba" },
        {
          "id": 344,
          "pid": 27,
          "city_code": "101140701",
          "city_name": "阿里",
          "post_code": "859000",
          "area_code": "0897",
          "ctime": "2019-07-11 17:04:15",
          "pinyin": "ali" }] },

      {
        "group": "b",
        "cities": [{
          "id": 36,
          "pid": 2,
          "city_code": "101220201",
          "city_name": "蚌埠",
          "post_code": "233000",
          "area_code": "0552",
          "ctime": "2019-07-11 17:30:10",
          "pinyin": "bangbu" },
        {
          "id": 50,
          "pid": 2,
          "city_code": "101220901",
          "city_name": "亳州",
          "post_code": "236800",
          "area_code": "0558",
          "ctime": "2019-07-11 17:30:12",
          "pinyin": "bozhou" },
        {
          "id": 98,
          "pid": 6,
          "city_code": "101301001",
          "city_name": "百色",
          "post_code": "533000",
          "area_code": "0776",
          "ctime": "2019-07-11 17:30:35",
          "pinyin": "baise" },
        {
          "id": 99,
          "pid": 6,
          "city_code": "101301301",
          "city_name": "北海",
          "post_code": "536000",
          "area_code": "0779",
          "ctime": "2019-07-11 17:30:37",
          "pinyin": "beihai" },
        {
          "id": 112,
          "pid": 7,
          "city_code": "101260701",
          "city_name": "毕节",
          "post_code": "551700",
          "area_code": "0857",
          "ctime": "2019-07-11 17:30:45",
          "pinyin": "bijie" },
        {
          "id": 138,
          "pid": 9,
          "city_code": "101090201",
          "city_name": "保定",
          "post_code": "071000",
          "area_code": "0312",
          "ctime": "2019-07-11 17:30:49",
          "pinyin": "baoding" },
        {
          "id": 212,
          "pid": 14,
          "city_code": "101060601",
          "city_name": "白城",
          "post_code": "137000",
          "area_code": "0436",
          "ctime": "2019-07-11 17:31:20",
          "pinyin": "baicheng" },
        {
          "id": 213,
          "pid": 14,
          "city_code": "101060901",
          "city_name": "白山",
          "post_code": "134300",
          "area_code": "0439",
          "ctime": "2019-07-11 17:31:20",
          "pinyin": "baishan" },
        {
          "id": 259,
          "pid": 18,
          "city_code": "101080811",
          "city_name": "巴彦淖尔",
          "post_code": "015000",
          "area_code": "0478",
          "ctime": "2019-07-11 17:31:48",
          "pinyin": "bayannaoer" },
        {
          "id": 260,
          "pid": 18,
          "city_code": "101080201",
          "city_name": "包头",
          "post_code": "014000",
          "area_code": "0472",
          "ctime": "2019-07-11 17:31:48",
          "pinyin": "baotou" },
        {
          "id": 284,
          "pid": 21,
          "city_code": "101121101",
          "city_name": "滨州",
          "post_code": "256600",
          "area_code": "0543",
          "ctime": "2019-07-11 17:31:56",
          "pinyin": "binzhou" },
        {
          "id": 312,
          "pid": 23,
          "city_code": "101110901",
          "city_name": "宝鸡",
          "post_code": "721000",
          "area_code": "0917",
          "ctime": "2019-07-11 17:32:09",
          "pinyin": "baoji" },
        {
          "id": 324,
          "pid": 25,
          "city_code": "101270901",
          "city_name": "巴中",
          "post_code": "636600",
          "area_code": "0827",
          "ctime": "2019-07-11 17:32:15",
          "pinyin": "bazhong" },
        {
          "id": 353,
          "pid": 28,
          "city_code": "101130609",
          "city_name": "巴音郭楞",
          "post_code": "841000",
          "area_code": "0996",
          "ctime": "2019-07-11 17:04:19",
          "pinyin": "bayinguoleng" },
        {
          "id": 354,
          "pid": 28,
          "city_code": "101131604",
          "city_name": "博尔塔拉",
          "post_code": "833400",
          "area_code": "0909",
          "ctime": "2019-07-11 17:04:20",
          "pinyin": "boertala" },
        {
          "id": 370,
          "pid": 29,
          "city_code": "101290501",
          "city_name": "保山",
          "post_code": "678000",
          "area_code": "0875",
          "ctime": "2019-07-11 17:32:26",
          "pinyin": "baoshan" }] },

      {
        "group": "c",
        "cities": [{
          "id": 38,
          "pid": 2,
          "city_code": "101221701",
          "city_name": "池州",
          "post_code": "247100",
          "area_code": "0566",
          "ctime": "2019-07-11 17:30:10",
          "pinyin": "chizhou" },
        {
          "id": 39,
          "pid": 2,
          "city_code": "101221101",
          "city_name": "滁州",
          "post_code": "239000",
          "area_code": "0550",
          "ctime": "2019-07-11 17:30:10",
          "pinyin": "chuzhou" },
        {
          "id": 77,
          "pid": 5,
          "city_code": "101281501",
          "city_name": "潮州",
          "post_code": "521000",
          "area_code": "0768",
          "ctime": "2019-07-11 17:30:21",
          "pinyin": "chaozhou" },
        {
          "id": 100,
          "pid": 6,
          "city_code": "101300201",
          "city_name": "崇左",
          "post_code": "532200",
          "area_code": "0771",
          "ctime": "2019-07-11 17:30:37",
          "pinyin": "chongzuo" },
        {
          "id": 139,
          "pid": 9,
          "city_code": "101090701",
          "city_name": "沧州",
          "post_code": "061000",
          "area_code": "0317",
          "ctime": "2019-07-11 17:30:49",
          "pinyin": "cangzhou" },
        {
          "id": 198,
          "pid": 13,
          "city_code": "101250601",
          "city_name": "常德",
          "post_code": "415000",
          "area_code": "0736",
          "ctime": "2019-07-11 17:31:14",
          "pinyin": "changde" },
        {
          "id": 199,
          "pid": 13,
          "city_code": "101250501",
          "city_name": "郴州",
          "post_code": "423000",
          "area_code": "0735",
          "ctime": "2019-07-11 17:31:15",
          "pinyin": "chenzhou" },
        {
          "id": 210,
          "pid": 14,
          "city_code": "101060101",
          "city_name": "长春",
          "post_code": "130000",
          "area_code": "0431",
          "ctime": "2019-07-11 17:31:19",
          "pinyin": "changchun" },
        {
          "id": 222,
          "pid": 15,
          "city_code": "101191101",
          "city_name": "常州",
          "post_code": "213000",
          "area_code": "0519",
          "ctime": "2019-07-11 17:31:25",
          "pinyin": "changzhou" },
        {
          "id": 261,
          "pid": 18,
          "city_code": "101080601",
          "city_name": "赤峰",
          "post_code": "024000",
          "area_code": "0476",
          "ctime": "2019-07-11 17:31:48",
          "pinyin": "chifeng" },
        {
          "id": 321,
          "pid": 25,
          "city_code": "101270101",
          "city_name": "成都",
          "post_code": "610000",
          "area_code": "028",
          "ctime": "2019-07-11 17:32:14",
          "pinyin": "chengdu" }] },

      {
        "group": "d",
        "cities": [{
          "id": 63,
          "pid": 4,
          "city_code": "101160201",
          "city_name": "定西",
          "post_code": "743000",
          "area_code": "0932",
          "ctime": "2019-07-11 17:30:14",
          "pinyin": "dingxi" },
        {
          "id": 78,
          "pid": 5,
          "city_code": "101281601",
          "city_name": "东莞",
          "post_code": "523000",
          "area_code": "0769",
          "ctime": "2019-07-11 17:30:22",
          "pinyin": "dongguan" },
        {
          "id": 167,
          "pid": 11,
          "city_code": "101050901",
          "city_name": "大庆",
          "post_code": "163000",
          "area_code": "0459",
          "ctime": "2019-07-11 17:31:04",
          "pinyin": "daqing" },
        {
          "id": 168,
          "pid": 11,
          "city_code": "101050701",
          "city_name": "大兴安岭",
          "post_code": "165000",
          "area_code": "0457",
          "ctime": "2019-07-11 17:03:57",
          "pinyin": "daxinganling" },
        {
          "id": 248,
          "pid": 17,
          "city_code": "101070601",
          "city_name": "丹东",
          "post_code": "118000",
          "area_code": "0415，+86-415",
          "ctime": "2019-07-11 17:31:41",
          "pinyin": "dandong" },
        {
          "id": 285,
          "pid": 21,
          "city_code": "101120401",
          "city_name": "德州",
          "post_code": "253000",
          "area_code": "0534",
          "ctime": "2019-07-11 17:31:57",
          "pinyin": "dezhou" },
        {
          "id": 325,
          "pid": 25,
          "city_code": "101270601",
          "city_name": "达州",
          "post_code": "635000",
          "area_code": "0818",
          "ctime": "2019-07-11 17:32:15",
          "pinyin": "dazhou" },
        {
          "id": 326,
          "pid": 25,
          "city_code": "101272001",
          "city_name": "德阳",
          "post_code": "618000",
          "area_code": "0838",
          "ctime": "2019-07-11 17:32:16",
          "pinyin": "deyang" },
        {
          "id": 373,
          "pid": 29,
          "city_code": "101291501",
          "city_name": "德宏",
          "post_code": "678400",
          "area_code": "0692",
          "ctime": "2019-07-11 17:04:27",
          "pinyin": "dehong" },
        {
          "id": 374,
          "pid": 29,
          "city_code": "101291305",
          "city_name": "迪庆",
          "post_code": "674400",
          "area_code": "0887",
          "ctime": "2019-07-11 17:04:29",
          "pinyin": "diqing" }] },

      {
        "group": "e",
        "cities": [{
          "id": 181,
          "pid": 12,
          "city_code": "101200301",
          "city_name": "鄂州",
          "post_code": "436000",
          "area_code": "0711",
          "ctime": "2019-07-11 17:31:08",
          "pinyin": "ezhou" },
        {
          "id": 262,
          "pid": 18,
          "city_code": "101080701",
          "city_name": "鄂尔多斯",
          "post_code": "017000",
          "area_code": "0477",
          "ctime": "2019-07-11 17:31:50",
          "pinyin": "eerduosi" }] },

      {
        "group": "f",
        "cities": [{
          "id": 40,
          "pid": 2,
          "city_code": "101220801",
          "city_name": "阜阳",
          "post_code": "236000",
          "area_code": "0558",
          "ctime": "2019-07-11 17:30:10",
          "pinyin": "fuyang" },
        {
          "id": 52,
          "pid": 3,
          "city_code": "101230101",
          "city_name": "福州",
          "post_code": "350000",
          "area_code": "0591",
          "ctime": "2019-07-11 17:30:12",
          "pinyin": "fuzhou" },
        {
          "id": 79,
          "pid": 5,
          "city_code": "101280800",
          "city_name": "佛山",
          "post_code": "528000",
          "area_code": "0757",
          "ctime": "2019-07-11 17:30:22",
          "pinyin": "foshan" },
        {
          "id": 101,
          "pid": 6,
          "city_code": "101301401",
          "city_name": "防城港",
          "post_code": "538000",
          "area_code": "0770",
          "ctime": "2019-07-11 17:30:37",
          "pinyin": "fangchenggang" },
        {
          "id": 233,
          "pid": 16,
          "city_code": "101240401",
          "city_name": "抚州",
          "post_code": "344000",
          "area_code": "0794",
          "ctime": "2019-07-11 17:31:34",
          "pinyin": "fuzhou" },
        {
          "id": 250,
          "pid": 17,
          "city_code": "101070901",
          "city_name": "阜新",
          "post_code": "123000",
          "area_code": "0418，+86-418",
          "ctime": "2019-07-11 17:31:44",
          "pinyin": "fuxin" }] },

      {
        "group": "g",
        "cities": [{
          "id": 75,
          "pid": 5,
          "city_code": "101280101",
          "city_name": "广州",
          "post_code": "510000",
          "area_code": "020",
          "ctime": "2019-07-11 17:30:21",
          "pinyin": "guangzhou" },
        {
          "id": 97,
          "pid": 6,
          "city_code": "101300501",
          "city_name": "桂林",
          "post_code": "541000",
          "area_code": "0773",
          "ctime": "2019-07-11 17:30:34",
          "pinyin": "guilin" },
        {
          "id": 102,
          "pid": 6,
          "city_code": "101300801",
          "city_name": "贵港",
          "post_code": "537100",
          "area_code": "0775",
          "ctime": "2019-07-11 17:30:38",
          "pinyin": "guigang" },
        {
          "id": 110,
          "pid": 7,
          "city_code": "101260101",
          "city_name": "贵阳",
          "post_code": "550000",
          "area_code": "0851",
          "ctime": "2019-07-11 17:30:45",
          "pinyin": "guiyang" },
        {
          "id": 234,
          "pid": 16,
          "city_code": "101240701",
          "city_name": "赣州",
          "post_code": "341000",
          "area_code": "0797",
          "ctime": "2019-07-11 17:31:34",
          "pinyin": "ganzhou" },
        {
          "id": 270,
          "pid": 19,
          "city_code": "101170401",
          "city_name": "固原",
          "post_code": "756000",
          "area_code": "0954",
          "ctime": "2019-07-11 17:31:53",
          "pinyin": "guyuan" },
        {
          "id": 275,
          "pid": 20,
          "city_code": "101150507",
          "city_name": "果洛",
          "post_code": "814000",
          "area_code": "0975",
          "ctime": "2019-07-11 17:04:06",
          "pinyin": "guoluo" },
        {
          "id": 327,
          "pid": 25,
          "city_code": "101271801",
          "city_name": "甘孜",
          "post_code": "626700",
          "area_code": "0836",
          "ctime": "2019-07-11 17:04:12",
          "pinyin": "ganzi" },
        {
          "id": 329,
          "pid": 25,
          "city_code": "101272101",
          "city_name": "广元",
          "post_code": "628000",
          "area_code": "0839",
          "ctime": "2019-07-11 17:32:17",
          "pinyin": "guangyuan" }] },

      {
        "group": "h",
        "cities": [{
          "id": 41,
          "pid": 2,
          "city_code": "101221201",
          "city_name": "淮北",
          "post_code": "235000",
          "area_code": "0561",
          "ctime": "2019-07-11 17:30:11",
          "pinyin": "huaibei" },
        {
          "id": 42,
          "pid": 2,
          "city_code": "101220401",
          "city_name": "淮南",
          "post_code": "232000",
          "area_code": "0554",
          "ctime": "2019-07-11 17:30:11",
          "pinyin": "huainan" },
        {
          "id": 80,
          "pid": 5,
          "city_code": "101281201",
          "city_name": "河源",
          "post_code": "517000",
          "area_code": "0762",
          "ctime": "2019-07-11 17:30:22",
          "pinyin": "heyuan" },
        {
          "id": 81,
          "pid": 5,
          "city_code": "101280301",
          "city_name": "惠州",
          "post_code": "516000",
          "area_code": "0752",
          "ctime": "2019-07-11 17:30:23",
          "pinyin": "huizhou" },
        {
          "id": 103,
          "pid": 6,
          "city_code": "101301201",
          "city_name": "河池",
          "post_code": "547000",
          "area_code": "0778",
          "ctime": "2019-07-11 17:30:39",
          "pinyin": "hechi" },
        {
          "id": 104,
          "pid": 6,
          "city_code": "101300701",
          "city_name": "贺州",
          "post_code": "542800",
          "area_code": "0774",
          "ctime": "2019-07-11 17:30:41",
          "pinyin": "hezhou" },
        {
          "id": 119,
          "pid": 8,
          "city_code": "101310101",
          "city_name": "海口",
          "post_code": "570100",
          "area_code": "0898",
          "ctime": "2019-07-11 17:30:46",
          "pinyin": "haikou" },
        {
          "id": 142,
          "pid": 9,
          "city_code": "101090801",
          "city_name": "衡水",
          "post_code": "053000",
          "area_code": "0318",
          "ctime": "2019-07-11 17:30:49",
          "pinyin": "hengshui" },
        {
          "id": 152,
          "pid": 10,
          "city_code": "101181201",
          "city_name": "鹤壁",
          "post_code": "458000",
          "area_code": "0392",
          "ctime": "2019-07-11 17:30:55",
          "pinyin": "hebi" },
        {
          "id": 166,
          "pid": 11,
          "city_code": "101050101",
          "city_name": "哈尔滨",
          "post_code": "150000",
          "area_code": "0451",
          "ctime": "2019-07-11 17:31:04",
          "pinyin": "haerbin" },
        {
          "id": 169,
          "pid": 11,
          "city_code": "101051201",
          "city_name": "鹤岗",
          "post_code": "154100",
          "area_code": "0468",
          "ctime": "2019-07-11 17:31:04",
          "pinyin": "hegang" },
        {
          "id": 170,
          "pid": 11,
          "city_code": "101050601",
          "city_name": "黑河",
          "post_code": "164300",
          "area_code": "0456",
          "ctime": "2019-07-11 17:31:05",
          "pinyin": "heihe" },
        {
          "id": 182,
          "pid": 12,
          "city_code": "101200501",
          "city_name": "黄冈",
          "post_code": "438000",
          "area_code": "0713",
          "ctime": "2019-07-11 17:31:08",
          "pinyin": "huanggang" },
        {
          "id": 183,
          "pid": 12,
          "city_code": "101200601",
          "city_name": "黄石",
          "post_code": "435000",
          "area_code": "0714",
          "ctime": "2019-07-11 17:31:09",
          "pinyin": "huangshi" },
        {
          "id": 201,
          "pid": 13,
          "city_code": "101251201",
          "city_name": "怀化",
          "post_code": "418000",
          "area_code": "0745",
          "ctime": "2019-07-11 17:31:16",
          "pinyin": "huaihua" },
        {
          "id": 251,
          "pid": 17,
          "city_code": "101071401",
          "city_name": "葫芦岛",
          "post_code": "125000",
          "area_code": "0429",
          "ctime": "2019-07-11 17:31:44",
          "pinyin": "huludao" },
        {
          "id": 257,
          "pid": 18,
          "city_code": "101080101",
          "city_name": "呼和浩特",
          "post_code": "010000",
          "area_code": "0471",
          "ctime": "2019-07-11 17:31:47",
          "pinyin": "huhehaote" },
        {
          "id": 276,
          "pid": 20,
          "city_code": "101150804",
          "city_name": "海北",
          "post_code": "812200",
          "area_code": "0970",
          "ctime": "2019-07-11 17:04:07",
          "pinyin": "haibei" },
        {
          "id": 277,
          "pid": 20,
          "city_code": "101150207",
          "city_name": "海东",
          "post_code": "810699",
          "area_code": "0972",
          "ctime": "2019-07-11 17:31:54",
          "pinyin": "haidong" },
        {
          "id": 280,
          "pid": 20,
          "city_code": "101150305",
          "city_name": "黄南",
          "post_code": "811300",
          "area_code": "0973",
          "ctime": "2019-07-11 17:04:08",
          "pinyin": "huangnan" },
        {
          "id": 287,
          "pid": 21,
          "city_code": "101121001",
          "city_name": "菏泽",
          "post_code": "274000",
          "area_code": "0530",
          "ctime": "2019-07-11 17:31:57",
          "pinyin": "heze" },
        {
          "id": 313,
          "pid": 23,
          "city_code": "101110801",
          "city_name": "汉中",
          "post_code": "723000",
          "area_code": "0916",
          "ctime": "2019-07-11 17:32:10",
          "pinyin": "hanzhong" },
        {
          "id": 382,
          "pid": 30,
          "city_code": "101210101",
          "city_name": "杭州",
          "post_code": "310000",
          "area_code": "0571",
          "ctime": "2019-07-11 17:32:28",
          "pinyin": "hangzhou" },
        {
          "id": 383,
          "pid": 30,
          "city_code": "101210201",
          "city_name": "湖州",
          "post_code": "313000",
          "area_code": "0572",
          "ctime": "2019-07-11 17:32:29",
          "pinyin": "huzhou" }] },

      {
        "group": "j",
        "cities": [{
          "id": 65,
          "pid": 4,
          "city_code": "101161401",
          "city_name": "嘉峪关",
          "post_code": "735100",
          "area_code": "0937",
          "ctime": "2019-07-11 17:30:15",
          "pinyin": "jiayuguan" },
        {
          "id": 66,
          "pid": 4,
          "city_code": "101160601",
          "city_name": "金昌",
          "post_code": "737100",
          "area_code": "0935",
          "ctime": "2019-07-11 17:30:15",
          "pinyin": "jinchang" },
        {
          "id": 67,
          "pid": 4,
          "city_code": "101160801",
          "city_name": "酒泉",
          "post_code": "735000",
          "area_code": "0937",
          "ctime": "2019-07-11 17:30:15",
          "pinyin": "jiuquan" },
        {
          "id": 82,
          "pid": 5,
          "city_code": "101281101",
          "city_name": "江门",
          "post_code": "529000",
          "area_code": "0750",
          "ctime": "2019-07-11 17:30:25",
          "pinyin": "jiangmen" },
        {
          "id": 83,
          "pid": 5,
          "city_code": "101281901",
          "city_name": "揭阳",
          "post_code": "522000",
          "area_code": "0663",
          "ctime": "2019-07-11 17:30:26",
          "pinyin": "jieyang" },
        {
          "id": 154,
          "pid": 10,
          "city_code": "101181101",
          "city_name": "焦作",
          "post_code": "454150",
          "area_code": "0391",
          "ctime": "2019-07-11 17:30:56",
          "pinyin": "jiaozuo" },
        {
          "id": 171,
          "pid": 11,
          "city_code": "101051101",
          "city_name": "鸡西",
          "post_code": "158100",
          "area_code": "0467",
          "ctime": "2019-07-11 17:31:05",
          "pinyin": "jixi" },
        {
          "id": 172,
          "pid": 11,
          "city_code": "101050401",
          "city_name": "佳木斯",
          "post_code": "154000",
          "area_code": "0454",
          "ctime": "2019-07-11 17:31:05",
          "pinyin": "jiamusi" },
        {
          "id": 184,
          "pid": 12,
          "city_code": "101201401",
          "city_name": "荆门",
          "post_code": "448000",
          "area_code": "0724",
          "ctime": "2019-07-11 17:31:09",
          "pinyin": "jingmen" },
        {
          "id": 236,
          "pid": 16,
          "city_code": "101240801",
          "city_name": "景德镇",
          "post_code": "333000",
          "area_code": "0798",
          "ctime": "2019-07-11 17:31:34",
          "pinyin": "jingdezhen" },
        {
          "id": 252,
          "pid": 17,
          "city_code": "101070701",
          "city_name": "锦州",
          "post_code": "121000",
          "area_code": "（+86）0416",
          "ctime": "2019-07-11 17:31:45",
          "pinyin": "jinzhou" },
        {
          "id": 282,
          "pid": 21,
          "city_code": "101120101",
          "city_name": "济南",
          "post_code": "250000",
          "area_code": "0531",
          "ctime": "2019-07-11 17:31:56",
          "pinyin": "jinan" },
        {
          "id": 288,
          "pid": 21,
          "city_code": "101120701",
          "city_name": "济宁",
          "post_code": "272000",
          "area_code": "0537",
          "ctime": "2019-07-11 17:31:58",
          "pinyin": "jining" },
        {
          "id": 302,
          "pid": 22,
          "city_code": "101100601",
          "city_name": "晋城",
          "post_code": "048000",
          "area_code": "0356",
          "ctime": "2019-07-11 17:32:07",
          "pinyin": "jincheng" },
        {
          "id": 303,
          "pid": 22,
          "city_code": "101100401",
          "city_name": "晋中",
          "post_code": "030600",
          "area_code": "0354",
          "ctime": "2019-07-11 17:32:07",
          "pinyin": "jinzhong" },
        {
          "id": 384,
          "pid": 30,
          "city_code": "101210301",
          "city_name": "嘉兴",
          "post_code": "314000",
          "area_code": "0573",
          "ctime": "2019-07-11 17:32:29",
          "pinyin": "jiaxing" },
        {
          "id": 385,
          "pid": 30,
          "city_code": "101210901",
          "city_name": "金华",
          "post_code": "321000",
          "area_code": "0579",
          "ctime": "2019-07-11 17:32:29",
          "pinyin": "jinhua" }] },

      {
        "group": "k",
        "cities": [{
          "id": 366,
          "pid": 29,
          "city_code": "101290101",
          "city_name": "昆明",
          "post_code": "650000",
          "area_code": "0871",
          "ctime": "2019-07-11 17:32:25",
          "pinyin": "kunming" }] },

      {
        "group": "l",
        "cities": [{
          "id": 44,
          "pid": 2,
          "city_code": "101221501",
          "city_name": "六安",
          "post_code": "237000",
          "area_code": "0564",
          "ctime": "2019-07-11 17:30:11",
          "pinyin": "liuan" },
        {
          "id": 53,
          "pid": 3,
          "city_code": "101230701",
          "city_name": "龙岩",
          "post_code": "364000",
          "area_code": "0597",
          "ctime": "2019-07-11 17:30:12",
          "pinyin": "longyan" },
        {
          "id": 61,
          "pid": 4,
          "city_code": "101160101",
          "city_name": "兰州",
          "post_code": "730000",
          "area_code": "0931",
          "ctime": "2019-07-11 17:30:14",
          "pinyin": "lanzhou" },
        {
          "id": 105,
          "pid": 6,
          "city_code": "101300401",
          "city_name": "来宾",
          "post_code": "546100",
          "area_code": "0772",
          "ctime": "2019-07-11 17:30:41",
          "pinyin": "laibin" },
        {
          "id": 106,
          "pid": 6,
          "city_code": "101300301",
          "city_name": "柳州",
          "post_code": "545000",
          "area_code": "0772",
          "ctime": "2019-07-11 17:30:41",
          "pinyin": "liuzhou" },
        {
          "id": 113,
          "pid": 7,
          "city_code": "101260803",
          "city_name": "六盘水",
          "post_code": "553000",
          "area_code": "0858",
          "ctime": "2019-07-11 17:30:46",
          "pinyin": "liupanshui" },
        {
          "id": 143,
          "pid": 9,
          "city_code": "101090601",
          "city_name": "廊坊",
          "post_code": "065000",
          "area_code": "0316",
          "ctime": "2019-07-11 17:30:51",
          "pinyin": "langfang" },
        {
          "id": 149,
          "pid": 10,
          "city_code": "101180901",
          "city_name": "洛阳",
          "post_code": "471000",
          "area_code": "0379",
          "ctime": "2019-07-11 17:30:53",
          "pinyin": "luoyang" },
        {
          "id": 164,
          "pid": 10,
          "city_code": "101181501",
          "city_name": "漯河",
          "post_code": "462000",
          "area_code": "0395",
          "ctime": "2019-07-11 17:31:02",
          "pinyin": "luohe" },
        {
          "id": 202,
          "pid": 13,
          "city_code": "101250801",
          "city_name": "娄底",
          "post_code": "417000",
          "area_code": "0738",
          "ctime": "2019-07-11 17:31:17",
          "pinyin": "loudi" },
        {
          "id": 214,
          "pid": 14,
          "city_code": "101060701",
          "city_name": "辽源",
          "post_code": "136200",
          "area_code": "0437",
          "ctime": "2019-07-11 17:31:21",
          "pinyin": "liaoyuan" },
        {
          "id": 224,
          "pid": 15,
          "city_code": "101191001",
          "city_name": "连云港",
          "post_code": "222002",
          "area_code": "国际:518；国内:0518",
          "ctime": "2019-07-11 17:31:27",
          "pinyin": "lianyungang" },
        {
          "id": 289,
          "pid": 21,
          "city_code": "101121601",
          "city_name": "莱芜",
          "post_code": "271100",
          "area_code": "0634",
          "ctime": "2019-07-11 17:31:59",
          "pinyin": "laiwu" },
        {
          "id": 290,
          "pid": 21,
          "city_code": "101121701",
          "city_name": "聊城",
          "post_code": "252000",
          "area_code": "0635",
          "ctime": "2019-07-11 17:32:00",
          "pinyin": "liaocheng" },
        {
          "id": 291,
          "pid": 21,
          "city_code": "101120901",
          "city_name": "临沂",
          "post_code": "276000",
          "area_code": "0539",
          "ctime": "2019-07-11 17:32:01",
          "pinyin": "linyi" },
        {
          "id": 304,
          "pid": 22,
          "city_code": "101100701",
          "city_name": "临汾",
          "post_code": "041000",
          "area_code": "0357",
          "ctime": "2019-07-11 17:32:07",
          "pinyin": "linfen" },
        {
          "id": 305,
          "pid": 22,
          "city_code": "101101100",
          "city_name": "吕梁",
          "post_code": "033000",
          "area_code": "0358",
          "ctime": "2019-07-11 17:32:08",
          "pinyin": "lvliang" },
        {
          "id": 330,
          "pid": 25,
          "city_code": "101271401",
          "city_name": "乐山",
          "post_code": "614000",
          "area_code": "0833",
          "ctime": "2019-07-11 17:32:18",
          "pinyin": "leshan" },
        {
          "id": 331,
          "pid": 25,
          "city_code": "101271601",
          "city_name": "凉山",
          "post_code": "615000",
          "area_code": "0834",
          "ctime": "2019-07-11 17:04:13",
          "pinyin": "liangshan" },
        {
          "id": 341,
          "pid": 25,
          "city_code": "101271001",
          "city_name": "泸州",
          "post_code": "646000",
          "area_code": "0830",
          "ctime": "2019-07-11 17:32:22",
          "pinyin": "luzhou" },
        {
          "id": 343,
          "pid": 27,
          "city_code": "101140101",
          "city_name": "拉萨",
          "post_code": "850000",
          "area_code": "0891",
          "ctime": "2019-07-11 17:32:22",
          "pinyin": "lasa" },
        {
          "id": 369,
          "pid": 29,
          "city_code": "101291401",
          "city_name": "丽江",
          "post_code": "674100",
          "area_code": "0888",
          "ctime": "2019-07-11 17:32:26",
          "pinyin": "lijiang" },
        {
          "id": 376,
          "pid": 29,
          "city_code": "101291101",
          "city_name": "临沧",
          "post_code": "677000",
          "area_code": "0883",
          "ctime": "2019-07-11 17:32:27",
          "pinyin": "lincang" },
        {
          "id": 386,
          "pid": 30,
          "city_code": "101210801",
          "city_name": "丽水",
          "post_code": "323000",
          "area_code": "0578",
          "ctime": "2019-07-11 17:32:29",
          "pinyin": "lishui" }] },

      {
        "group": "m",
        "cities": [{
          "id": 45,
          "pid": 2,
          "city_code": "101220501",
          "city_name": "马鞍山",
          "post_code": "243000",
          "area_code": "0555",
          "ctime": "2019-07-11 17:30:11",
          "pinyin": "maanshan" },
        {
          "id": 84,
          "pid": 5,
          "city_code": "101282001",
          "city_name": "茂名",
          "post_code": "525000",
          "area_code": "0668",
          "ctime": "2019-07-11 17:30:26",
          "pinyin": "maoming" },
        {
          "id": 85,
          "pid": 5,
          "city_code": "101280401",
          "city_name": "梅州",
          "post_code": "514021",
          "area_code": "0753",
          "ctime": "2019-07-11 17:30:27",
          "pinyin": "meizhou" },
        {
          "id": 173,
          "pid": 11,
          "city_code": "101050301",
          "city_name": "牡丹江",
          "post_code": "157000",
          "area_code": "0453",
          "ctime": "2019-07-11 17:31:06",
          "pinyin": "mudanjiang" },
        {
          "id": 322,
          "pid": 25,
          "city_code": "101270401",
          "city_name": "绵阳",
          "post_code": "621000",
          "area_code": "0816",
          "ctime": "2019-07-11 17:32:14",
          "pinyin": "mianyang" }] },

      {
        "group": "n",
        "cities": [{
          "id": 54,
          "pid": 3,
          "city_code": "101230901",
          "city_name": "南平",
          "post_code": "353000",
          "area_code": "0599",
          "ctime": "2019-07-11 17:30:12",
          "pinyin": "nanping" },
        {
          "id": 55,
          "pid": 3,
          "city_code": "101230301",
          "city_name": "宁德",
          "post_code": "352000",
          "area_code": "0593",
          "ctime": "2019-07-11 17:30:13",
          "pinyin": "ningde" },
        {
          "id": 96,
          "pid": 6,
          "city_code": "101300101",
          "city_name": "南宁",
          "post_code": "530000",
          "area_code": "0771",
          "ctime": "2019-07-11 17:30:33",
          "pinyin": "nanning" },
        {
          "id": 155,
          "pid": 10,
          "city_code": "101180701",
          "city_name": "南阳",
          "post_code": "473000",
          "area_code": "0377",
          "ctime": "2019-07-11 17:30:56",
          "pinyin": "nanyang" },
        {
          "id": 219,
          "pid": 15,
          "city_code": "101190101",
          "city_name": "南京",
          "post_code": "210000",
          "area_code": "025",
          "ctime": "2019-07-11 17:31:22",
          "pinyin": "nanjing" },
        {
          "id": 225,
          "pid": 15,
          "city_code": "101190501",
          "city_name": "南通",
          "post_code": "226000",
          "area_code": "0513",
          "ctime": "2019-07-11 17:31:28",
          "pinyin": "nantong" },
        {
          "id": 333,
          "pid": 25,
          "city_code": "101270501",
          "city_name": "南充",
          "post_code": "637000",
          "area_code": "0817",
          "ctime": "2019-07-11 17:32:19",
          "pinyin": "nanchong" },
        {
          "id": 334,
          "pid": 25,
          "city_code": "101271201",
          "city_name": "内江",
          "post_code": "641000",
          "area_code": "0832",
          "ctime": "2019-07-11 17:32:19",
          "pinyin": "neijiang" },
        {
          "id": 347,
          "pid": 27,
          "city_code": "101140601",
          "city_name": "那曲",
          "post_code": "852000",
          "area_code": "0896",
          "ctime": "2019-07-11 17:04:16",
          "pinyin": "naqu" },
        {
          "id": 367,
          "pid": 29,
          "city_code": "101291201",
          "city_name": "怒江",
          "post_code": "673200",
          "area_code": "0886",
          "ctime": "2019-07-11 17:04:26",
          "pinyin": "nujiang" },
        {
          "id": 387,
          "pid": 30,
          "city_code": "101210401",
          "city_name": "宁波",
          "post_code": "315000",
          "area_code": "0574",
          "ctime": "2019-07-11 17:32:30",
          "pinyin": "ningbo" }] },

      {
        "group": "p",
        "cities": [{
          "id": 56,
          "pid": 3,
          "city_code": "101230401",
          "city_name": "莆田",
          "post_code": "351100",
          "area_code": "0594",
          "ctime": "2019-07-11 17:30:13",
          "pinyin": "putian" },
        {
          "id": 70,
          "pid": 4,
          "city_code": "101160301",
          "city_name": "平凉",
          "post_code": "744000",
          "area_code": "0933",
          "ctime": "2019-07-11 17:30:16",
          "pinyin": "pingliang" },
        {
          "id": 156,
          "pid": 10,
          "city_code": "101180501",
          "city_name": "平顶山",
          "post_code": "467000",
          "area_code": "0375",
          "ctime": "2019-07-11 17:30:57",
          "pinyin": "pingdingshan" },
        {
          "id": 238,
          "pid": 16,
          "city_code": "101240901",
          "city_name": "萍乡",
          "post_code": "337000",
          "area_code": "0799",
          "ctime": "2019-07-11 17:31:36",
          "pinyin": "pingxiang" },
        {
          "id": 254,
          "pid": 17,
          "city_code": "101071301",
          "city_name": "盘锦",
          "post_code": "124000",
          "area_code": "0427",
          "ctime": "2019-07-11 17:31:46",
          "pinyin": "panjin" },
        {
          "id": 335,
          "pid": 25,
          "city_code": "101270201",
          "city_name": "攀枝花",
          "post_code": "617000",
          "area_code": "0812",
          "ctime": "2019-07-11 17:32:20",
          "pinyin": "panzhihua" },
        {
          "id": 368,
          "pid": 29,
          "city_code": "101290901",
          "city_name": "普洱",
          "post_code": "665000",
          "area_code": "0879",
          "ctime": "2019-07-11 17:32:26",
          "pinyin": "puer" }] },

      {
        "group": "q",
        "cities": [{
          "id": 57,
          "pid": 3,
          "city_code": "101230501",
          "city_name": "泉州",
          "post_code": "362000",
          "area_code": "0595",
          "ctime": "2019-07-11 17:30:13",
          "pinyin": "quanzhou" },
        {
          "id": 71,
          "pid": 4,
          "city_code": "101160401",
          "city_name": "庆阳",
          "post_code": "745000",
          "area_code": "0934",
          "ctime": "2019-07-11 17:30:16",
          "pinyin": "qingyang" },
        {
          "id": 86,
          "pid": 5,
          "city_code": "101281301",
          "city_name": "清远",
          "post_code": "511500",
          "area_code": "0763",
          "ctime": "2019-07-11 17:30:28",
          "pinyin": "qingyuan" },
        {
          "id": 107,
          "pid": 6,
          "city_code": "101301101",
          "city_name": "钦州",
          "post_code": "535000",
          "area_code": "0777",
          "ctime": "2019-07-11 17:30:42",
          "pinyin": "qinzhou" },
        {
          "id": 115,
          "pid": 7,
          "city_code": "101260413",
          "city_name": "黔南",
          "post_code": "558000",
          "area_code": "0854",
          "ctime": "2019-07-11 17:03:44",
          "pinyin": "qiannan" },
        {
          "id": 116,
          "pid": 7,
          "city_code": "101260906",
          "city_name": "黔西南",
          "post_code": "562400",
          "area_code": "0859",
          "ctime": "2019-07-11 17:03:45",
          "pinyin": "qianxinan" },
        {
          "id": 144,
          "pid": 9,
          "city_code": "101091101",
          "city_name": "秦皇岛",
          "post_code": "066000",
          "area_code": "0335",
          "ctime": "2019-07-11 17:30:51",
          "pinyin": "qinhuangdao" },
        {
          "id": 174,
          "pid": 11,
          "city_code": "101051002",
          "city_name": "七台河",
          "post_code": "154600",
          "area_code": "0464",
          "ctime": "2019-07-11 17:31:07",
          "pinyin": "qitaihe" },
        {
          "id": 175,
          "pid": 11,
          "city_code": "101050201",
          "city_name": "齐齐哈尔",
          "post_code": "161000",
          "area_code": "0452",
          "ctime": "2019-07-11 17:31:07",
          "pinyin": "qiqihaer" },
        {
          "id": 283,
          "pid": 21,
          "city_code": "101120201",
          "city_name": "青岛",
          "post_code": "266000",
          "area_code": "0532",
          "ctime": "2019-07-11 17:31:56",
          "pinyin": "qingdao" },
        {
          "id": 377,
          "pid": 29,
          "city_code": "101290401",
          "city_name": "曲靖",
          "post_code": "655000",
          "area_code": "0874",
          "ctime": "2019-07-11 17:32:27",
          "pinyin": "qujing" },
        {
          "id": 392,
          "pid": 30,
          "city_code": "101211001",
          "city_name": "衢州",
          "post_code": "324000",
          "area_code": "0570",
          "ctime": "2019-07-11 17:32:31",
          "pinyin": "quzhou" }] },

      {
        "group": "r",
        "cities": [{
          "id": 292,
          "pid": 21,
          "city_code": "101121501",
          "city_name": "日照",
          "post_code": "276800",
          "area_code": "0633",
          "ctime": "2019-07-11 17:32:02",
          "pinyin": "rizhao" }] },

      {
        "group": "s",
        "cities": [{
          "id": 46,
          "pid": 2,
          "city_code": "101220701",
          "city_name": "宿州",
          "post_code": "234000",
          "area_code": "0557",
          "ctime": "2019-07-11 17:30:11",
          "pinyin": "suzhou" },
        {
          "id": 58,
          "pid": 3,
          "city_code": "101230801",
          "city_name": "三明",
          "post_code": "365000",
          "area_code": "0598",
          "ctime": "2019-07-11 17:30:13",
          "pinyin": "sanming" },
        {
          "id": 76,
          "pid": 5,
          "city_code": "101280601",
          "city_name": "深圳",
          "post_code": "518000",
          "area_code": "0755",
          "ctime": "2019-07-11 17:30:21",
          "pinyin": "shenzhen" },
        {
          "id": 87,
          "pid": 5,
          "city_code": "101280501",
          "city_name": "汕头",
          "post_code": "515000",
          "area_code": "0754",
          "ctime": "2019-07-11 17:30:28",
          "pinyin": "shantou" },
        {
          "id": 88,
          "pid": 5,
          "city_code": "101282101",
          "city_name": "汕尾",
          "post_code": "516600",
          "area_code": "0660",
          "ctime": "2019-07-11 17:30:29",
          "pinyin": "shanwei" },
        {
          "id": 89,
          "pid": 5,
          "city_code": "101280201",
          "city_name": "韶关",
          "post_code": "512000",
          "area_code": "0751",
          "ctime": "2019-07-11 17:30:29",
          "pinyin": "shaoguan" },
        {
          "id": 120,
          "pid": 8,
          "city_code": "101310201",
          "city_name": "三亚",
          "post_code": "572000",
          "area_code": "0898",
          "ctime": "2019-07-11 17:30:46",
          "pinyin": "sanya" },
        {
          "id": 137,
          "pid": 9,
          "city_code": "101090101",
          "city_name": "石家庄",
          "post_code": "050000",
          "area_code": "0311",
          "ctime": "2019-07-11 17:30:48",
          "pinyin": "shijiazhuang" },
        {
          "id": 157,
          "pid": 10,
          "city_code": "101181701",
          "city_name": "三门峡",
          "post_code": "472000",
          "area_code": "0398",
          "ctime": "2019-07-11 17:30:58",
          "pinyin": "sanmenxia" },
        {
          "id": 158,
          "pid": 10,
          "city_code": "101181001",
          "city_name": "商丘",
          "post_code": "476000",
          "area_code": "0370",
          "ctime": "2019-07-11 17:30:58",
          "pinyin": "shangqiu" },
        {
          "id": 176,
          "pid": 11,
          "city_code": "101051301",
          "city_name": "双鸭山",
          "post_code": "155100",
          "area_code": "0469",
          "ctime": "2019-07-11 17:31:07",
          "pinyin": "shuangyashan" },
        {
          "id": 177,
          "pid": 11,
          "city_code": "101050501",
          "city_name": "绥化",
          "post_code": "152000",
          "area_code": "0455",
          "ctime": "2019-07-11 17:31:07",
          "pinyin": "suihua" },
        {
          "id": 188,
          "pid": 12,
          "city_code": "101201101",
          "city_name": "十堰",
          "post_code": "442000",
          "area_code": "0719",
          "ctime": "2019-07-11 17:31:11",
          "pinyin": "shiyan" },
        {
          "id": 189,
          "pid": 12,
          "city_code": "101201301",
          "city_name": "随州",
          "post_code": "441300",
          "area_code": "0722",
          "ctime": "2019-07-11 17:31:11",
          "pinyin": "suizhou" },
        {
          "id": 215,
          "pid": 14,
          "city_code": "101060401",
          "city_name": "四平",
          "post_code": "136000",
          "area_code": "0434",
          "ctime": "2019-07-11 17:31:21",
          "pinyin": "siping" },
        {
          "id": 216,
          "pid": 14,
          "city_code": "101060801",
          "city_name": "松原",
          "post_code": "138000",
          "area_code": "0438",
          "ctime": "2019-07-11 17:31:21",
          "pinyin": "songyuan" },
        {
          "id": 220,
          "pid": 15,
          "city_code": "101190401",
          "city_name": "苏州",
          "post_code": "215000",
          "area_code": "0512",
          "ctime": "2019-07-11 17:31:23",
          "pinyin": "suzhou" },
        {
          "id": 226,
          "pid": 15,
          "city_code": "101191301",
          "city_name": "宿迁",
          "post_code": "223800",
          "area_code": "0527",
          "ctime": "2019-07-11 17:31:29",
          "pinyin": "suqian" },
        {
          "id": 243,
          "pid": 17,
          "city_code": "101070101",
          "city_name": "沈阳",
          "post_code": "110000",
          "area_code": "024",
          "ctime": "2019-07-11 17:31:39",
          "pinyin": "shenyang" },
        {
          "id": 271,
          "pid": 19,
          "city_code": "101170201",
          "city_name": "石嘴山",
          "post_code": "753000",
          "area_code": "0952",
          "ctime": "2019-07-11 17:31:54",
          "pinyin": "shizuishan" },
        {
          "id": 306,
          "pid": 22,
          "city_code": "101100901",
          "city_name": "朔州",
          "post_code": "036000",
          "area_code": "0349",
          "ctime": "2019-07-11 17:32:08",
          "pinyin": "shuozhou" },
        {
          "id": 314,
          "pid": 23,
          "city_code": "101110601",
          "city_name": "商洛",
          "post_code": "726000",
          "area_code": "0914",
          "ctime": "2019-07-11 17:32:10",
          "pinyin": "shangluo" },
        {
          "id": 336,
          "pid": 25,
          "city_code": "101270701",
          "city_name": "遂宁",
          "post_code": "629000",
          "area_code": "0825",
          "ctime": "2019-07-11 17:32:20",
          "pinyin": "suining" },
        {
          "id": 349,
          "pid": 27,
          "city_code": "101140301",
          "city_name": "山南",
          "post_code": "856000",
          "area_code": "0893",
          "ctime": "2019-07-11 17:32:23",
          "pinyin": "shannan" },
        {
          "id": 388,
          "pid": 30,
          "city_code": "101210507",
          "city_name": "绍兴",
          "post_code": "312000",
          "area_code": "0575",
          "ctime": "2019-07-11 17:32:30",
          "pinyin": "shaoxing" }] },

      {
        "group": "t",
        "cities": [{
          "id": 47,
          "pid": 2,
          "city_code": "101221301",
          "city_name": "铜陵",
          "post_code": "244000",
          "area_code": "0562",
          "ctime": "2019-07-11 17:30:12",
          "pinyin": "tongling" },
        {
          "id": 72,
          "pid": 4,
          "city_code": "101160901",
          "city_name": "天水",
          "post_code": "741000",
          "area_code": "0938",
          "ctime": "2019-07-11 17:30:17",
          "pinyin": "tianshui" },
        {
          "id": 145,
          "pid": 9,
          "city_code": "101090501",
          "city_name": "唐山",
          "post_code": "063000",
          "area_code": "0315",
          "ctime": "2019-07-11 17:30:51",
          "pinyin": "tangshan" },
        {
          "id": 227,
          "pid": 15,
          "city_code": "101191201",
          "city_name": "泰州",
          "post_code": "225300",
          "area_code": "0523",
          "ctime": "2019-07-11 17:31:30",
          "pinyin": "taizhou" },
        {
          "id": 264,
          "pid": 18,
          "city_code": "101080501",
          "city_name": "通辽",
          "post_code": "028000",
          "area_code": "0475",
          "ctime": "2019-07-11 17:31:51",
          "pinyin": "tongliao" },
        {
          "id": 293,
          "pid": 21,
          "city_code": "101120801",
          "city_name": "泰安",
          "post_code": "271000",
          "area_code": "0538",
          "ctime": "2019-07-11 17:32:03",
          "pinyin": "taian" },
        {
          "id": 299,
          "pid": 22,
          "city_code": "101100101",
          "city_name": "太原",
          "post_code": "030000",
          "area_code": "0351",
          "ctime": "2019-07-11 17:32:06",
          "pinyin": "taiyuan" },
        {
          "id": 315,
          "pid": 23,
          "city_code": "101111001",
          "city_name": "铜川",
          "post_code": "727000",
          "area_code": "0919",
          "ctime": "2019-07-11 17:32:10",
          "pinyin": "tongchuan" },
        {
          "id": 389,
          "pid": 30,
          "city_code": "101210601",
          "city_name": "台州",
          "post_code": "318000",
          "area_code": "0576",
          "ctime": "2019-07-11 17:32:30",
          "pinyin": "taizhou" }] },

      {
        "group": "w",
        "cities": [{
          "id": 73,
          "pid": 4,
          "city_code": "101160501",
          "city_name": "武威",
          "post_code": "733000",
          "area_code": "0935",
          "ctime": "2019-07-11 17:30:18",
          "pinyin": "wuwei" },
        {
          "id": 108,
          "pid": 6,
          "city_code": "101300601",
          "city_name": "梧州",
          "post_code": "543000",
          "area_code": "0774",
          "ctime": "2019-07-11 17:30:43",
          "pinyin": "wuzhou" },
        {
          "id": 179,
          "pid": 12,
          "city_code": "101200101",
          "city_name": "武汉",
          "post_code": "430000",
          "area_code": "027",
          "ctime": "2019-07-11 17:31:08",
          "pinyin": "wuhan" },
        {
          "id": 221,
          "pid": 15,
          "city_code": "101190201",
          "city_name": "无锡",
          "post_code": "214000",
          "area_code": "0510",
          "ctime": "2019-07-11 17:31:24",
          "pinyin": "wuxi" },
        {
          "id": 265,
          "pid": 18,
          "city_code": "101080301",
          "city_name": "乌海",
          "post_code": "016000",
          "area_code": "0473",
          "ctime": "2019-07-11 17:31:52",
          "pinyin": "wuhai" },
        {
          "id": 266,
          "pid": 18,
          "city_code": "101080405",
          "city_name": "乌兰察布",
          "post_code": "012000",
          "area_code": "0474",
          "ctime": "2019-07-11 17:31:53",
          "pinyin": "wulanchabu" },
        {
          "id": 272,
          "pid": 19,
          "city_code": "101170301",
          "city_name": "吴忠",
          "post_code": "751100",
          "area_code": "0953",
          "ctime": "2019-07-11 17:31:54",
          "pinyin": "wuzhong" },
        {
          "id": 294,
          "pid": 21,
          "city_code": "101121301",
          "city_name": "威海",
          "post_code": "264200",
          "area_code": "0631",
          "ctime": "2019-07-11 17:32:03",
          "pinyin": "weihai" },
        {
          "id": 295,
          "pid": 21,
          "city_code": "101120601",
          "city_name": "潍坊",
          "post_code": "261000",
          "area_code": "0536",
          "ctime": "2019-07-11 17:32:03",
          "pinyin": "weifang" },
        {
          "id": 316,
          "pid": 23,
          "city_code": "101110501",
          "city_name": "渭南",
          "post_code": "714000",
          "area_code": "0913",
          "ctime": "2019-07-11 17:32:11",
          "pinyin": "weinan" },
        {
          "id": 390,
          "pid": 30,
          "city_code": "101210701",
          "city_name": "温州",
          "post_code": "325000",
          "area_code": "0577",
          "ctime": "2019-07-11 17:32:30",
          "pinyin": "wenzhou" }] },

      {
        "group": "x",
        "cities": [{
          "id": 49,
          "pid": 2,
          "city_code": "101221401",
          "city_name": "宣城",
          "post_code": "242000",
          "area_code": "0563",
          "ctime": "2019-07-11 17:30:12",
          "pinyin": "xuancheng" },
        {
          "id": 59,
          "pid": 3,
          "city_code": "101230201",
          "city_name": "厦门",
          "post_code": "361000",
          "area_code": "0592",
          "ctime": "2019-07-11 17:30:13",
          "pinyin": "xiamen" },
        {
          "id": 160,
          "pid": 10,
          "city_code": "101180601",
          "city_name": "信阳",
          "post_code": "464000",
          "area_code": "0376",
          "ctime": "2019-07-11 17:31:00",
          "pinyin": "xinyang" },
        {
          "id": 191,
          "pid": 12,
          "city_code": "101200701",
          "city_name": "咸宁",
          "post_code": "437000",
          "area_code": "0715",
          "ctime": "2019-07-11 17:31:13",
          "pinyin": "xianning" },
        {
          "id": 193,
          "pid": 12,
          "city_code": "101200401",
          "city_name": "孝感",
          "post_code": "432000",
          "area_code": "0712",
          "ctime": "2019-07-11 17:31:13",
          "pinyin": "xiaogan" },
        {
          "id": 205,
          "pid": 13,
          "city_code": "101251509",
          "city_name": "湘西",
          "post_code": "416000",
          "area_code": "0743",
          "ctime": "2019-07-11 17:04:00",
          "pinyin": "xiangxi" },
        {
          "id": 228,
          "pid": 15,
          "city_code": "101190801",
          "city_name": "徐州",
          "post_code": "221000",
          "area_code": "0516",
          "ctime": "2019-07-11 17:31:30",
          "pinyin": "xuzhou" },
        {
          "id": 240,
          "pid": 16,
          "city_code": "101241001",
          "city_name": "新余",
          "post_code": "338000",
          "area_code": "0790",
          "ctime": "2019-07-11 17:31:36",
          "pinyin": "xinyu" },
        {
          "id": 268,
          "pid": 18,
          "city_code": "101081108",
          "city_name": "兴安盟",
          "post_code": "137400",
          "area_code": "0482",
          "ctime": "2019-07-11 17:04:05",
          "pinyin": "xinganmeng" },
        {
          "id": 274,
          "pid": 20,
          "city_code": "101150101",
          "city_name": "西宁",
          "post_code": "810000",
          "area_code": "0971",
          "ctime": "2019-07-11 17:31:54",
          "pinyin": "xining" },
        {
          "id": 307,
          "pid": 22,
          "city_code": "101101001",
          "city_name": "忻州",
          "post_code": "034000",
          "area_code": "0350",
          "ctime": "2019-07-11 17:32:08",
          "pinyin": "xinzhou" },
        {
          "id": 317,
          "pid": 23,
          "city_code": "101110200",
          "city_name": "咸阳",
          "post_code": "712000",
          "area_code": "029",
          "ctime": "2019-07-11 17:32:12",
          "pinyin": "xianyang" },
        {
          "id": 379,
          "pid": 29,
          "city_code": "101291602",
          "city_name": "西双版纳",
          "post_code": "666100",
          "area_code": "0691",
          "ctime": "2019-07-11 17:04:30",
          "pinyin": "xishuangbanna" }] },

      {
        "group": "y",
        "cities": [{
          "id": 90,
          "pid": 5,
          "city_code": "101281801",
          "city_name": "阳江",
          "post_code": "529500",
          "area_code": "0662",
          "ctime": "2019-07-11 17:30:30",
          "pinyin": "yangjiang" },
        {
          "id": 91,
          "pid": 5,
          "city_code": "101281401",
          "city_name": "云浮",
          "post_code": "527300",
          "area_code": "0766",
          "ctime": "2019-07-11 17:30:30",
          "pinyin": "yunfu" },
        {
          "id": 109,
          "pid": 6,
          "city_code": "101300901",
          "city_name": "玉林",
          "post_code": "537000",
          "area_code": "0775",
          "ctime": "2019-07-11 17:30:43",
          "pinyin": "yulin" },
        {
          "id": 194,
          "pid": 12,
          "city_code": "101200901",
          "city_name": "宜昌",
          "post_code": "443000",
          "area_code": "0717",
          "ctime": "2019-07-11 17:31:13",
          "pinyin": "yichang" },
        {
          "id": 206,
          "pid": 13,
          "city_code": "101250700",
          "city_name": "益阳",
          "post_code": "413000",
          "area_code": "0737",
          "ctime": "2019-07-11 17:31:17",
          "pinyin": "yiyang" },
        {
          "id": 207,
          "pid": 13,
          "city_code": "101251401",
          "city_name": "永州",
          "post_code": "425000",
          "area_code": "0746",
          "ctime": "2019-07-11 17:31:17",
          "pinyin": "yongzhou" },
        {
          "id": 218,
          "pid": 14,
          "city_code": "101060306",
          "city_name": "延边",
          "post_code": "133000",
          "area_code": "0433",
          "ctime": "2019-07-11 17:04:02",
          "pinyin": "yanbian" },
        {
          "id": 229,
          "pid": 15,
          "city_code": "101190701",
          "city_name": "盐城",
          "post_code": "224000",
          "area_code": "0515",
          "ctime": "2019-07-11 17:31:31",
          "pinyin": "yancheng" },
        {
          "id": 230,
          "pid": 15,
          "city_code": "101190601",
          "city_name": "扬州",
          "post_code": "225000",
          "area_code": "0514",
          "ctime": "2019-07-11 17:31:32",
          "pinyin": "yangzhou" },
        {
          "id": 241,
          "pid": 16,
          "city_code": "101240501",
          "city_name": "宜春",
          "post_code": "336000",
          "area_code": "0795",
          "ctime": "2019-07-11 17:31:37",
          "pinyin": "yichun" },
        {
          "id": 242,
          "pid": 16,
          "city_code": "101241101",
          "city_name": "鹰潭",
          "post_code": "335000",
          "area_code": "0701",
          "ctime": "2019-07-11 17:31:38",
          "pinyin": "yingtan" },
        {
          "id": 256,
          "pid": 17,
          "city_code": "101070801",
          "city_name": "营口",
          "post_code": "115000",
          "area_code": "-417",
          "ctime": "2019-07-11 17:31:46",
          "pinyin": "yingkou" },
        {
          "id": 269,
          "pid": 19,
          "city_code": "101170101",
          "city_name": "银川",
          "post_code": "750000",
          "area_code": "0951",
          "ctime": "2019-07-11 17:31:53",
          "pinyin": "yinchuan" },
        {
          "id": 281,
          "pid": 20,
          "city_code": "101150601",
          "city_name": "玉树",
          "post_code": "815000",
          "area_code": "0976",
          "ctime": "2019-07-11 17:04:10",
          "pinyin": "yushu" },
        {
          "id": 296,
          "pid": 21,
          "city_code": "101120501",
          "city_name": "烟台",
          "post_code": "264000",
          "area_code": "0535",
          "ctime": "2019-07-11 17:32:04",
          "pinyin": "yantai" },
        {
          "id": 308,
          "pid": 22,
          "city_code": "101100301",
          "city_name": "阳泉",
          "post_code": "045000",
          "area_code": "0353",
          "ctime": "2019-07-11 17:32:08",
          "pinyin": "yangquan" },
        {
          "id": 309,
          "pid": 22,
          "city_code": "101100801",
          "city_name": "运城",
          "post_code": "044000",
          "area_code": "国际:359；国内:0359",
          "ctime": "2019-07-11 17:32:09",
          "pinyin": "yuncheng" },
        {
          "id": 318,
          "pid": 23,
          "city_code": "101110300",
          "city_name": "延安",
          "post_code": "716000",
          "area_code": "0911",
          "ctime": "2019-07-11 17:32:13",
          "pinyin": "yanan" },
        {
          "id": 319,
          "pid": 23,
          "city_code": "101110401",
          "city_name": "榆林",
          "post_code": "719000",
          "area_code": "0912",
          "ctime": "2019-07-11 17:32:14",
          "pinyin": "yulin" },
        {
          "id": 337,
          "pid": 25,
          "city_code": "101271701",
          "city_name": "雅安",
          "post_code": "625000",
          "area_code": "0835",
          "ctime": "2019-07-11 17:32:20",
          "pinyin": "yaan" },
        {
          "id": 338,
          "pid": 25,
          "city_code": "101271101",
          "city_name": "宜宾",
          "post_code": "644000",
          "area_code": "0831",
          "ctime": "2019-07-11 17:32:20",
          "pinyin": "yibin" },
        {
          "id": 380,
          "pid": 29,
          "city_code": "101290701",
          "city_name": "玉溪",
          "post_code": "653100",
          "area_code": "0877",
          "ctime": "2019-07-11 17:32:28",
          "pinyin": "yuxi" }] },

      {
        "group": "z",
        "cities": [{
          "id": 60,
          "pid": 3,
          "city_code": "101230601",
          "city_name": "漳州",
          "post_code": "363000",
          "area_code": "0596",
          "ctime": "2019-07-11 17:30:14",
          "pinyin": "zhangzhou" },
        {
          "id": 74,
          "pid": 4,
          "city_code": "101160701",
          "city_name": "张掖",
          "post_code": "734000",
          "area_code": "0936",
          "ctime": "2019-07-11 17:30:19",
          "pinyin": "zhangye" },
        {
          "id": 92,
          "pid": 5,
          "city_code": "101281001",
          "city_name": "湛江",
          "post_code": "524000",
          "area_code": "0759",
          "ctime": "2019-07-11 17:30:30",
          "pinyin": "zhanjiang" },
        {
          "id": 93,
          "pid": 5,
          "city_code": "101280901",
          "city_name": "肇庆",
          "post_code": "526000",
          "area_code": "0758",
          "ctime": "2019-07-11 17:30:30",
          "pinyin": "zhaoqing" },
        {
          "id": 95,
          "pid": 5,
          "city_code": "101280701",
          "city_name": "珠海",
          "post_code": "519000",
          "area_code": "0756",
          "ctime": "2019-07-11 17:30:32",
          "pinyin": "zhuhai" },
        {
          "id": 118,
          "pid": 7,
          "city_code": "101260201",
          "city_name": "遵义",
          "post_code": "563100",
          "area_code": "0851",
          "ctime": "2019-07-11 17:30:46",
          "pinyin": "zunyi" },
        {
          "id": 147,
          "pid": 9,
          "city_code": "101090301",
          "city_name": "张家口",
          "post_code": "075000",
          "area_code": "0313",
          "ctime": "2019-07-11 17:30:52",
          "pinyin": "zhangjiakou" },
        {
          "id": 148,
          "pid": 10,
          "city_code": "101180101",
          "city_name": "郑州",
          "post_code": "450000",
          "area_code": "0371",
          "ctime": "2019-07-11 17:30:53",
          "pinyin": "zhengzhou" },
        {
          "id": 162,
          "pid": 10,
          "city_code": "101181401",
          "city_name": "周口",
          "post_code": "466000",
          "area_code": "0394",
          "ctime": "2019-07-11 17:31:01",
          "pinyin": "zhoukou" },
        {
          "id": 163,
          "pid": 10,
          "city_code": "101181601",
          "city_name": "驻马店",
          "post_code": "463000",
          "area_code": "0396",
          "ctime": "2019-07-11 17:31:01",
          "pinyin": "zhumadian" },
        {
          "id": 197,
          "pid": 13,
          "city_code": "101251101",
          "city_name": "张家界",
          "post_code": "427000",
          "area_code": "0744",
          "ctime": "2019-07-11 17:31:14",
          "pinyin": "zhangjiajie" },
        {
          "id": 209,
          "pid": 13,
          "city_code": "101250301",
          "city_name": "株洲",
          "post_code": "412000",
          "area_code": "0731",
          "ctime": "2019-07-11 17:31:18",
          "pinyin": "zhuzhou" },
        {
          "id": 231,
          "pid": 15,
          "city_code": "101190301",
          "city_name": "镇江",
          "post_code": "212000",
          "area_code": "0511",
          "ctime": "2019-07-11 17:31:32",
          "pinyin": "zhenjiang" },
        {
          "id": 273,
          "pid": 19,
          "city_code": "101170501",
          "city_name": "中卫",
          "post_code": "755000",
          "area_code": "0955",
          "ctime": "2019-07-11 17:31:54",
          "pinyin": "zhongwei" },
        {
          "id": 297,
          "pid": 21,
          "city_code": "101121401",
          "city_name": "枣庄",
          "post_code": "277100",
          "area_code": "0632",
          "ctime": "2019-07-11 17:32:06",
          "pinyin": "zaozhuang" },
        {
          "id": 298,
          "pid": 21,
          "city_code": "101120301",
          "city_name": "淄博",
          "post_code": "255000",
          "area_code": "0533",
          "ctime": "2019-07-11 17:32:06",
          "pinyin": "zibo" },
        {
          "id": 340,
          "pid": 25,
          "city_code": "101270301",
          "city_name": "自贡",
          "post_code": "643000",
          "area_code": "0813",
          "ctime": "2019-07-11 17:32:22",
          "pinyin": "zigong" },
        {
          "id": 381,
          "pid": 29,
          "city_code": "101291001",
          "city_name": "昭通",
          "post_code": "657000",
          "area_code": "0870",
          "ctime": "2019-07-11 17:32:28",
          "pinyin": "zhaotong" },
        {
          "id": 391,
          "pid": 30,
          "city_code": "101211101",
          "city_name": "舟山",
          "post_code": "316000",
          "area_code": "0580",
          "ctime": "2019-07-11 17:32:31",
          "pinyin": "zhoushan" }] }],


      currentCity: '正在定位...',
      scrollTop: 0,
      showSearch: false,
      searchResult: [] };

  },
  onLoad: function onLoad(e) {
    var _this = this;
    uni.getLocation({
      type: 'wgs84',
      success: function success(res) {
        if (res.errMsg == "getLocation:ok") {
          uni.request({
            url: "http://api.map.baidu.com/geocoder?output=json&location=".concat(res.latitude, ",%20").concat(res.longitude, "&key=37492c0ee6f924cb5e934fa08c6b1676"),
            success: function success(res) {
              _this.currentCity = res.data.result.addressComponent.city;
            } });

        }
      } });

  },
  computed: _objectSpread({},
  (0, _vuex.mapState)(["modifyAddress"])),

  methods: _objectSpread({},
  (0, _vuex.mapMutations)(["setModifyAddress"]), {
    selectCity: function selectCity(city, cityid) {
      this.$store.commit("setModifyAddress", {
        id: this.modifyAddress.id,
        addr: this.modifyAddress.addr,
        city: city,
        cityid: cityid });

      uni.navigateBack();
    },
    gotoCategory: function gotoCategory(id, flag) {

      var _this = this;
      if (id == '#') {
        _this.scrollTop = 0;
      }
      var query = uni.createSelectorQuery().in(this);
      query.select("#" + id).fields({
        rect: true,
        size: true,
        scrollOffset: true },
      function (res) {
        _this.scrollTop = _this.scrollTop + res.top - 45 - uni.getSystemInfoSync().statusBarHeight;
        _this.$nextTick(function () {
          if (!flag) {
            _this.gotoCategory(id, true);
          }
        });
      }).exec();
    },
    search: function search(e) {
      if (e.detail.value && e.detail.value.length > 0) {
        this.showSearch = true;
        this.searchResult = [];
        for (var i = 0; i < this.cities.length; i++) {var _this$searchResult;
          (_this$searchResult = this.searchResult).push.apply(_this$searchResult, _toConsumableArray(this.cities[i].cities.filter(function (x) {return x.pinyin.startsWith(e.detail.value);})));
        }
        console.log(this.searchResult.length);
      } else {
        this.showSearch = false;
      }
    } }) };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 318:
/*!************************************************************************************************************!*\
  !*** C:/Users/lvniao/Desktop/projects/iot/demo/components/CitySelect.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./CitySelect.vue?vue&type=style&index=0&lang=css& */ 319);
/* harmony import */ var _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 319:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lvniao/Desktop/projects/iot/demo/components/CitySelect.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[312,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/CitySelect.js.map