(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/CitySelect"],{

/***/ 296:
/*!********************************************************************************************!*\
  !*** C:/Users/lvniao/Desktop/projects/iot/demo/main.js?{"page":"components%2FCitySelect"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _CitySelect = _interopRequireDefault(__webpack_require__(/*! ./components/CitySelect.vue */ 297));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_CitySelect.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 297:
/*!***************************************************************************!*\
  !*** C:/Users/lvniao/Desktop/projects/iot/demo/components/CitySelect.vue ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CitySelect_vue_vue_type_template_id_720caddc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CitySelect.vue?vue&type=template&id=720caddc& */ 298);
/* harmony import */ var _CitySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CitySelect.vue?vue&type=script&lang=js& */ 300);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CitySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _CitySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _CitySelect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CitySelect.vue?vue&type=style&index=0&lang=css& */ 302);
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

/***/ 298:
/*!**********************************************************************************************************!*\
  !*** C:/Users/lvniao/Desktop/projects/iot/demo/components/CitySelect.vue?vue&type=template&id=720caddc& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_template_id_720caddc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./CitySelect.vue?vue&type=template&id=720caddc& */ 299);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_template_id_720caddc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_template_id_720caddc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 299:
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

/***/ 300:
/*!****************************************************************************************************!*\
  !*** C:/Users/lvniao/Desktop/projects/iot/demo/components/CitySelect.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./CitySelect.vue?vue&type=script&lang=js& */ 301);
/* harmony import */ var _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 301:
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
          "label": "阿坝Aba0837",
          "name": "阿坝",
          "pinyin": "aba",
          "zip": "0837" },
        {
          "label": "阿克苏Akesu0997",
          "name": "阿克苏",
          "pinyin": "akesu",
          "zip": "0997" },
        {
          "label": "阿拉善盟Alashanmeng0483",
          "name": "阿拉善盟",
          "pinyin": "alashanmeng",
          "zip": "0483" },
        {
          "label": "阿勒泰Aletai0906",
          "name": "阿勒泰",
          "pinyin": "aletai",
          "zip": "0906" },
        {
          "label": "阿里Ali0897",
          "name": "阿里",
          "pinyin": "ali",
          "zip": "0897" },
        {
          "label": "安康Ankang0915",
          "name": "安康",
          "pinyin": "ankang",
          "zip": "0915" },
        {
          "label": "安庆Anqing0556",
          "name": "安庆",
          "pinyin": "anqing",
          "zip": "0556" },
        {
          "label": "鞍山Anshan0412",
          "name": "鞍山",
          "pinyin": "anshan",
          "zip": "0412" },
        {
          "label": "安顺Anshun0853",
          "name": "安顺",
          "pinyin": "anshun",
          "zip": "0853" },
        {
          "label": "安阳Anyang0372",
          "name": "安阳",
          "pinyin": "anyang",
          "zip": "0372" },
        {
          "label": "阿城Acheng0451",
          "name": "阿城",
          "pinyin": "acheng",
          "zip": "0451" },
        {
          "label": "安福Anfu0796",
          "name": "安福",
          "pinyin": "anfu",
          "zip": "0796" },
        {
          "label": "安吉Anji0572",
          "name": "安吉",
          "pinyin": "anji",
          "zip": "0572" },
        {
          "label": "安宁Anning0871",
          "name": "安宁",
          "pinyin": "anning",
          "zip": "0871" },
        {
          "label": "安丘Anqiu0536",
          "name": "安丘",
          "pinyin": "anqiu",
          "zip": "0536" },
        {
          "label": "安溪Anxi0595",
          "name": "安溪",
          "pinyin": "anxi",
          "zip": "0595" },
        {
          "label": "安义Anyi0791",
          "name": "安义",
          "pinyin": "anyi",
          "zip": "0791" },
        {
          "label": "安远Anyuan0797",
          "name": "安远",
          "pinyin": "anyuan",
          "zip": "0797" }] },


      {
        "group": "b",
        "cities": [{
          "label": "北京Beijing010",
          "name": "北京",
          "pinyin": "beijing",
          "zip": "010" },
        {
          "label": "白城Baicheng0436",
          "name": "白城",
          "pinyin": "baicheng",
          "zip": "0436" },
        {
          "label": "百色Baise0776",
          "name": "百色",
          "pinyin": "baise",
          "zip": "0776" },
        {
          "label": "白山Baishan0439",
          "name": "白山",
          "pinyin": "baishan",
          "zip": "0439" },
        {
          "label": "白银Baiyin0943",
          "name": "白银",
          "pinyin": "baiyin",
          "zip": "0943" },
        {
          "label": "蚌埠Bangbu0552",
          "name": "蚌埠",
          "pinyin": "bangbu",
          "zip": "0552" },
        {
          "label": "保定Baoding0312",
          "name": "保定",
          "pinyin": "baoding",
          "zip": "0312" },
        {
          "label": "宝鸡Baoji0917",
          "name": "宝鸡",
          "pinyin": "baoji",
          "zip": "0917" },
        {
          "label": "保山Baoshan0875",
          "name": "保山",
          "pinyin": "baoshan",
          "zip": "0875" },
        {
          "label": "包头Baotou0472",
          "name": "包头",
          "pinyin": "baotou",
          "zip": "0472" },
        {
          "label": "巴彦淖尔Bayannaoer0478",
          "name": "巴彦淖尔",
          "pinyin": "bayannaoer",
          "zip": "0478" },
        {
          "label": "巴音郭楞Bayinguoleng0996",
          "name": "巴音郭楞",
          "pinyin": "bayinguoleng",
          "zip": "0996" },
        {
          "label": "巴中Bazhong0827",
          "name": "巴中",
          "pinyin": "bazhong",
          "zip": "0827" },
        {
          "label": "北海Beihai0779",
          "name": "北海",
          "pinyin": "beihai",
          "zip": "0779" },
        {
          "label": "本溪Benxi0414",
          "name": "本溪",
          "pinyin": "benxi",
          "zip": "0414" },
        {
          "label": "毕节Bijie0857",
          "name": "毕节",
          "pinyin": "bijie",
          "zip": "0857" },
        {
          "label": "滨州Binzhou0543",
          "name": "滨州",
          "pinyin": "binzhou",
          "zip": "0543" },
        {
          "label": "博尔塔拉Boertala0909",
          "name": "博尔塔拉",
          "pinyin": "boertala",
          "zip": "0909" },
        {
          "label": "亳州Bozhou0558",
          "name": "亳州",
          "pinyin": "bozhou",
          "zip": "0558" },
        {
          "label": "宝应Baoying0514",
          "name": "宝应",
          "pinyin": "baoying",
          "zip": "0514" },
        {
          "label": "巴彦Bayan0451",
          "name": "巴彦",
          "pinyin": "bayan",
          "zip": "0451" },
        {
          "label": "滨海Binhai0515",
          "name": "滨海",
          "pinyin": "binhai",
          "zip": "0515" },
        {
          "label": "宾县Binxian0451",
          "name": "宾县",
          "pinyin": "binxian",
          "zip": "0451" },
        {
          "label": "宾阳Binyang0771",
          "name": "宾阳",
          "pinyin": "binyang",
          "zip": "0771" },
        {
          "label": "璧山Bishan023",
          "name": "璧山",
          "pinyin": "bishan",
          "zip": "023" },
        {
          "label": "博爱Boai0391",
          "name": "博爱",
          "pinyin": "boai",
          "zip": "0391" },
        {
          "label": "博罗Boluo0752",
          "name": "博罗",
          "pinyin": "boluo",
          "zip": "0752" },
        {
          "label": "博兴Boxing0543",
          "name": "博兴",
          "pinyin": "boxing",
          "zip": "0543" }] },


      {
        "group": "c",
        "cities": [{
          "label": "重庆Chongqing023",
          "name": "重庆",
          "pinyin": "chongqing",
          "zip": "023" },
        {
          "label": "长春Changchun0431",
          "name": "长春",
          "pinyin": "changchun",
          "zip": "0431" },
        {
          "label": "长沙Changsha0731",
          "name": "长沙",
          "pinyin": "changsha",
          "zip": "0731" },
        {
          "label": "常州Changzhou0519",
          "name": "常州",
          "pinyin": "changzhou",
          "zip": "0519" },
        {
          "label": "成都Chengdu028",
          "name": "成都",
          "pinyin": "chengdu",
          "zip": "028" },
        {
          "label": "沧州Cangzhou0317",
          "name": "沧州",
          "pinyin": "cangzhou",
          "zip": "0317" },
        {
          "label": "常德Changde0736",
          "name": "常德",
          "pinyin": "changde",
          "zip": "0736" },
        {
          "label": "昌都Changdu0895",
          "name": "昌都",
          "pinyin": "changdu",
          "zip": "0895" },
        {
          "label": "昌吉Changji0997",
          "name": "昌吉",
          "pinyin": "changji",
          "zip": "0997" },
        {
          "label": "长治Changzhi0355",
          "name": "长治",
          "pinyin": "changzhi",
          "zip": "0355" },
        {
          "label": "巢湖Chaohu0565",
          "name": "巢湖",
          "pinyin": "chaohu",
          "zip": "0565" },
        {
          "label": "朝阳Chaoyang0421",
          "name": "朝阳",
          "pinyin": "chaoyang",
          "zip": "0421" },
        {
          "label": "潮州Chaozhou0768",
          "name": "潮州",
          "pinyin": "chaozhou",
          "zip": "0768" },
        {
          "label": "承德Chengde0314",
          "name": "承德",
          "pinyin": "chengde",
          "zip": "0314" },
        {
          "label": "郴州Chenzhou0735",
          "name": "郴州",
          "pinyin": "chenzhou",
          "zip": "0735" },
        {
          "label": "赤峰Chifeng0476",
          "name": "赤峰",
          "pinyin": "chifeng",
          "zip": "0476" },
        {
          "label": "池州Chizhou0566",
          "name": "池州",
          "pinyin": "chizhou",
          "zip": "0566" },
        {
          "label": "崇左Chongzuo0771",
          "name": "崇左",
          "pinyin": "chongzuo",
          "zip": "0771" },
        {
          "label": "楚雄Chuxiong0875",
          "name": "楚雄",
          "pinyin": "chuxiong",
          "zip": "0875" },
        {
          "label": "滁州Chuzhou0550",
          "name": "滁州",
          "pinyin": "chuzhou",
          "zip": "0550" },
        {
          "label": "苍南Cangnan0577",
          "name": "苍南",
          "pinyin": "cangnan",
          "zip": "0577" },
        {
          "label": "苍山Cangshan0539",
          "name": "苍山",
          "pinyin": "cangshan",
          "zip": "0539" },
        {
          "label": "曹县Caoxian0530",
          "name": "曹县",
          "pinyin": "caoxian",
          "zip": "0530" },
        {
          "label": "长岛Changdao0535",
          "name": "长岛",
          "pinyin": "changdao",
          "zip": "0535" },
        {
          "label": "长丰Changfeng0551",
          "name": "长丰",
          "pinyin": "changfeng",
          "zip": "0551" },
        {
          "label": "长海Changhai0411",
          "name": "长海",
          "pinyin": "changhai",
          "zip": "0411" },
        {
          "label": "长乐Changle0591",
          "name": "长乐",
          "pinyin": "changle",
          "zip": "0591" },
        {
          "label": "昌乐Changle0536",
          "name": "昌乐",
          "pinyin": "changle",
          "zip": "0536" },
        {
          "label": "常山Changshan0570",
          "name": "常山",
          "pinyin": "changshan",
          "zip": "0570" },
        {
          "label": "常熟Changshu0512",
          "name": "常熟",
          "pinyin": "changshu",
          "zip": "0512" },
        {
          "label": "长泰Changtai0596",
          "name": "长泰",
          "pinyin": "changtai",
          "zip": "0596" },
        {
          "label": "长汀Changting0597",
          "name": "长汀",
          "pinyin": "changting",
          "zip": "0597" },
        {
          "label": "长兴Changxing0572",
          "name": "长兴",
          "pinyin": "changxing",
          "zip": "0572" },
        {
          "label": "昌邑Changyi0536",
          "name": "昌邑",
          "pinyin": "changyi",
          "zip": "0536" },
        {
          "label": "潮安Chaoan0768",
          "name": "潮安",
          "pinyin": "chaoan",
          "zip": "0768" },
        {
          "label": "呈贡Chenggong0871",
          "name": "呈贡",
          "pinyin": "chenggong",
          "zip": "0871" },
        {
          "label": "城口Chengkou023",
          "name": "城口",
          "pinyin": "chengkou",
          "zip": "023" },
        {
          "label": "成武Chengwu0530",
          "name": "成武",
          "pinyin": "chengwu",
          "zip": "0530" },
        {
          "label": "茌平Chiping0635",
          "name": "茌平",
          "pinyin": "chiping",
          "zip": "0635" },
        {
          "label": "崇仁Chongren0794",
          "name": "崇仁",
          "pinyin": "chongren",
          "zip": "0794" },
        {
          "label": "崇义Chongyi0797",
          "name": "崇义",
          "pinyin": "chongyi",
          "zip": "0797" },
        {
          "label": "崇州Chongzhou028",
          "name": "崇州",
          "pinyin": "chongzhou",
          "zip": "028" },
        {
          "label": "淳安Chunan0571",
          "name": "淳安",
          "pinyin": "chunan",
          "zip": "0571" },
        {
          "label": "慈溪Cixi0574",
          "name": "慈溪",
          "pinyin": "cixi",
          "zip": "0574" },
        {
          "label": "从化Conghua020",
          "name": "从化",
          "pinyin": "conghua",
          "zip": "020" },
        {
          "label": "枞阳Congyang0556",
          "name": "枞阳",
          "pinyin": "congyang",
          "zip": "0556" }] },


      {
        "group": "d",
        "cities": [{
          "label": "大连Dalian0411",
          "name": "大连",
          "pinyin": "dalian",
          "zip": "0411" },
        {
          "label": "东莞Dongguan0769",
          "name": "东莞",
          "pinyin": "dongguan",
          "zip": "0769" },
        {
          "label": "大理Dali0872",
          "name": "大理",
          "pinyin": "dali",
          "zip": "0872" },
        {
          "label": "丹东Dandong0415",
          "name": "丹东",
          "pinyin": "dandong",
          "zip": "0415" },
        {
          "label": "大庆Daqing0459",
          "name": "大庆",
          "pinyin": "daqing",
          "zip": "0459" },
        {
          "label": "大同Datong0352",
          "name": "大同",
          "pinyin": "datong",
          "zip": "0352" },
        {
          "label": "大兴安岭Daxinganling0457",
          "name": "大兴安岭",
          "pinyin": "daxinganling",
          "zip": "0457" },
        {
          "label": "达州Dazhou0818",
          "name": "达州",
          "pinyin": "dazhou",
          "zip": "0818" },
        {
          "label": "德宏Dehong0692",
          "name": "德宏",
          "pinyin": "dehong",
          "zip": "0692" },
        {
          "label": "德阳Deyang0838",
          "name": "德阳",
          "pinyin": "deyang",
          "zip": "0838" },
        {
          "label": "德州Dezhou0534",
          "name": "德州",
          "pinyin": "dezhou",
          "zip": "0534" },
        {
          "label": "定西Dingxi0932",
          "name": "定西",
          "pinyin": "dingxi",
          "zip": "0932" },
        {
          "label": "迪庆Diqing0887",
          "name": "迪庆",
          "pinyin": "diqing",
          "zip": "0887" },
        {
          "label": "东营Dongying0546",
          "name": "东营",
          "pinyin": "dongying",
          "zip": "0546" },
        {
          "label": "大丰Dafeng0515",
          "name": "大丰",
          "pinyin": "dafeng",
          "zip": "0515" },
        {
          "label": "岱山Daishan0580",
          "name": "岱山",
          "pinyin": "daishan",
          "zip": "0580" },
        {
          "label": "砀山Dangshan0557",
          "name": "砀山",
          "pinyin": "dangshan",
          "zip": "0557" },
        {
          "label": "当涂Dangtu0555",
          "name": "当涂",
          "pinyin": "dangtu",
          "zip": "0555" },
        {
          "label": "单县Danxian0530",
          "name": "单县",
          "pinyin": "danxian",
          "zip": "0530" },
        {
          "label": "丹阳Danyang0511",
          "name": "丹阳",
          "pinyin": "danyang",
          "zip": "0511" },
        {
          "label": "大埔Dapu0753",
          "name": "大埔",
          "pinyin": "dapu",
          "zip": "0753" },
        {
          "label": "大田Datian0598",
          "name": "大田",
          "pinyin": "datian",
          "zip": "0598" },
        {
          "label": "大邑Dayi028",
          "name": "大邑",
          "pinyin": "dayi",
          "zip": "028" },
        {
          "label": "大余Dayu0797",
          "name": "大余",
          "pinyin": "dayu",
          "zip": "0797" },
        {
          "label": "大足Dazu023",
          "name": "大足",
          "pinyin": "dazu",
          "zip": "023" },
        {
          "label": "德安Dean0792",
          "name": "德安",
          "pinyin": "dean",
          "zip": "0792" },
        {
          "label": "德化Dehua0595",
          "name": "德化",
          "pinyin": "dehua",
          "zip": "0595" },
        {
          "label": "德惠Dehui0431",
          "name": "德惠",
          "pinyin": "dehui",
          "zip": "0431" },
        {
          "label": "登封Dengfeng0371",
          "name": "登封",
          "pinyin": "dengfeng",
          "zip": "0371" },
        {
          "label": "德清Deqing0572",
          "name": "德清",
          "pinyin": "deqing",
          "zip": "0572" },
        {
          "label": "德庆Deqing0758",
          "name": "德庆",
          "pinyin": "deqing",
          "zip": "0758" },
        {
          "label": "德兴Dexing0793",
          "name": "德兴",
          "pinyin": "dexing",
          "zip": "0793" },
        {
          "label": "电白Dianbai0668",
          "name": "电白",
          "pinyin": "dianbai",
          "zip": "0668" },
        {
          "label": "垫江Dianjiang023",
          "name": "垫江",
          "pinyin": "dianjiang",
          "zip": "023" },
        {
          "label": "定南Dingnan0797",
          "name": "定南",
          "pinyin": "dingnan",
          "zip": "0797" },
        {
          "label": "定陶Dingtao0530",
          "name": "定陶",
          "pinyin": "dingtao",
          "zip": "0530" },
        {
          "label": "定远Dingyuan0550",
          "name": "定远",
          "pinyin": "dingyuan",
          "zip": "0550" },
        {
          "label": "东阿Donga0635",
          "name": "东阿",
          "pinyin": "donga",
          "zip": "0635" },
        {
          "label": "东海Donghai0518",
          "name": "东海",
          "pinyin": "donghai",
          "zip": "0518" },
        {
          "label": "东明Dongming0530",
          "name": "东明",
          "pinyin": "dongming",
          "zip": "0530" },
        {
          "label": "东平Dongping0538",
          "name": "东平",
          "pinyin": "dongping",
          "zip": "0538" },
        {
          "label": "东山Dongshan0596",
          "name": "东山",
          "pinyin": "dongshan",
          "zip": "0596" },
        {
          "label": "东台Dongtai0515",
          "name": "东台",
          "pinyin": "dongtai",
          "zip": "0515" },
        {
          "label": "洞头Dongtou0577",
          "name": "洞头",
          "pinyin": "dongtou",
          "zip": "0577" },
        {
          "label": "东乡Dongxiang0794",
          "name": "东乡",
          "pinyin": "dongxiang",
          "zip": "0794" },
        {
          "label": "东阳Dongyang0579",
          "name": "东阳",
          "pinyin": "dongyang",
          "zip": "0579" },
        {
          "label": "东源Dongyuan0762",
          "name": "东源",
          "pinyin": "dongyuan",
          "zip": "0762" },
        {
          "label": "东至Dongzhi0566",
          "name": "东至",
          "pinyin": "dongzhi",
          "zip": "0566" },
        {
          "label": "都昌Duchang0792",
          "name": "都昌",
          "pinyin": "duchang",
          "zip": "0792" },
        {
          "label": "都江堰Dujiangyan028",
          "name": "都江堰",
          "pinyin": "dujiangyan",
          "zip": "028" }] },


      {
        "group": "e",
        "cities": [{
          "label": "鄂尔多斯Eerduosi0477",
          "name": "鄂尔多斯",
          "pinyin": "eerduosi",
          "zip": "0477" },
        {
          "label": "恩施Enshi0718",
          "name": "恩施",
          "pinyin": "enshi",
          "zip": "0718" },
        {
          "label": "鄂州Ezhou0711",
          "name": "鄂州",
          "pinyin": "ezhou",
          "zip": "0711" },
        {
          "label": "恩平Enping0750",
          "name": "恩平",
          "pinyin": "enping",
          "zip": "0750" }] },


      {
        "group": "f",
        "cities": [{
          "label": "佛山Foshan0757",
          "name": "佛山",
          "pinyin": "foshan",
          "zip": "0757" },
        {
          "label": "福州Fuzhou0591",
          "name": "福州",
          "pinyin": "fuzhou",
          "zip": "0591" },
        {
          "label": "防城港Fangchenggang0770",
          "name": "防城港",
          "pinyin": "fangchenggang",
          "zip": "0770" },
        {
          "label": "抚顺Fushun0413",
          "name": "抚顺",
          "pinyin": "fushun",
          "zip": "0413" },
        {
          "label": "阜新Fuxin0418",
          "name": "阜新",
          "pinyin": "fuxin",
          "zip": "0418" },
        {
          "label": "阜阳Fuyang0558",
          "name": "阜阳",
          "pinyin": "fuyang",
          "zip": "0558" },
        {
          "label": "抚州Fuzhou0794",
          "name": "抚州",
          "pinyin": "fuzhou",
          "zip": "0794" },
        {
          "label": "法库Faku024",
          "name": "法库",
          "pinyin": "faku",
          "zip": "024" },
        {
          "label": "繁昌Fanchang0553",
          "name": "繁昌",
          "pinyin": "fanchang",
          "zip": "0553" },
        {
          "label": "方正Fangzheng0451",
          "name": "方正",
          "pinyin": "fangzheng",
          "zip": "0451" },
        {
          "label": "肥城Feicheng0538",
          "name": "肥城",
          "pinyin": "feicheng",
          "zip": "0538" },
        {
          "label": "肥东Feidong0551",
          "name": "肥东",
          "pinyin": "feidong",
          "zip": "0551" },
        {
          "label": "肥西Feixi0551",
          "name": "肥西",
          "pinyin": "feixi",
          "zip": "0551" },
        {
          "label": "费县Feixian0539",
          "name": "费县",
          "pinyin": "feixian",
          "zip": "0539" },
        {
          "label": "丰城Fengcheng0795",
          "name": "丰城",
          "pinyin": "fengcheng",
          "zip": "0795" },
        {
          "label": "丰都Fengdu023",
          "name": "丰都",
          "pinyin": "fengdu",
          "zip": "023" },
        {
          "label": "奉化Fenghua0574",
          "name": "奉化",
          "pinyin": "fenghua",
          "zip": "0574" },
        {
          "label": "奉节Fengjie023",
          "name": "奉节",
          "pinyin": "fengjie",
          "zip": "023" },
        {
          "label": "封开Fengkai0758",
          "name": "封开",
          "pinyin": "fengkai",
          "zip": "0758" },
        {
          "label": "丰顺Fengshun0753",
          "name": "丰顺",
          "pinyin": "fengshun",
          "zip": "0753" },
        {
          "label": "凤台Fengtai0554",
          "name": "凤台",
          "pinyin": "fengtai",
          "zip": "0554" },
        {
          "label": "丰县Fengxian0516",
          "name": "丰县",
          "pinyin": "fengxian",
          "zip": "0516" },
        {
          "label": "奉新Fengxin0795",
          "name": "奉新",
          "pinyin": "fengxin",
          "zip": "0795" },
        {
          "label": "凤阳Fengyang0550",
          "name": "凤阳",
          "pinyin": "fengyang",
          "zip": "0550" },
        {
          "label": "分宜Fenyi0790",
          "name": "分宜",
          "pinyin": "fenyi",
          "zip": "0790" },
        {
          "label": "佛冈Fogang0763",
          "name": "佛冈",
          "pinyin": "fogang",
          "zip": "0763" },
        {
          "label": "福安Fuan0593",
          "name": "福安",
          "pinyin": "fuan",
          "zip": "0593" },
        {
          "label": "福鼎Fuding0593",
          "name": "福鼎",
          "pinyin": "fuding",
          "zip": "0593" },
        {
          "label": "浮梁Fuliang0798",
          "name": "浮梁",
          "pinyin": "fuliang",
          "zip": "0798" },
        {
          "label": "富民Fumin0871",
          "name": "富民",
          "pinyin": "fumin",
          "zip": "0871" },
        {
          "label": "阜南Funan0558",
          "name": "阜南",
          "pinyin": "funan",
          "zip": "0558" },
        {
          "label": "阜宁Funing0515",
          "name": "阜宁",
          "pinyin": "funing",
          "zip": "0515" },
        {
          "label": "福清Fuqing0591",
          "name": "福清",
          "pinyin": "fuqing",
          "zip": "0591" },
        {
          "label": "富阳Fuyang0571",
          "name": "富阳",
          "pinyin": "fuyang",
          "zip": "0571" }] },


      {
        "group": "g",
        "cities": [{
          "label": "广州Guangzhou020",
          "name": "广州",
          "pinyin": "guangzhou",
          "zip": "020" },
        {
          "label": "贵阳Guiyang0851",
          "name": "贵阳",
          "pinyin": "guiyang",
          "zip": "0851" },
        {
          "label": "甘南Gannan0941",
          "name": "甘南",
          "pinyin": "gannan",
          "zip": "0941" },
        {
          "label": "赣州Ganzhou0797",
          "name": "赣州",
          "pinyin": "ganzhou",
          "zip": "0797" },
        {
          "label": "甘孜Ganzi0836",
          "name": "甘孜",
          "pinyin": "ganzi",
          "zip": "0836" },
        {
          "label": "广安Guangan0826",
          "name": "广安",
          "pinyin": "guangan",
          "zip": "0826" },
        {
          "label": "广元Guangyuan0839",
          "name": "广元",
          "pinyin": "guangyuan",
          "zip": "0839" },
        {
          "label": "贵港Guigang0775",
          "name": "贵港",
          "pinyin": "guigang",
          "zip": "0775" },
        {
          "label": "桂林Guilin0773",
          "name": "桂林",
          "pinyin": "guilin",
          "zip": "0773" },
        {
          "label": "果洛Guoluo0975",
          "name": "果洛",
          "pinyin": "guoluo",
          "zip": "0975" },
        {
          "label": "固原Guyuan0954",
          "name": "固原",
          "pinyin": "guyuan",
          "zip": "0954" },
        {
          "label": "赣县Ganxian0797",
          "name": "赣县",
          "pinyin": "ganxian",
          "zip": "0797" },
        {
          "label": "赣榆Ganyu0518",
          "name": "赣榆",
          "pinyin": "ganyu",
          "zip": "0518" },
        {
          "label": "高安Gaoan0795",
          "name": "高安",
          "pinyin": "gaoan",
          "zip": "0795" },
        {
          "label": "藁城Gaocheng0311",
          "name": "藁城",
          "pinyin": "gaocheng",
          "zip": "0311" },
        {
          "label": "高淳Gaochun025",
          "name": "高淳",
          "pinyin": "gaochun",
          "zip": "025" },
        {
          "label": "皋兰Gaolan0931",
          "name": "皋兰",
          "pinyin": "gaolan",
          "zip": "0931" },
        {
          "label": "高陵Gaoling029",
          "name": "高陵",
          "pinyin": "gaoling",
          "zip": "029" },
        {
          "label": "高密Gaomi0536",
          "name": "高密",
          "pinyin": "gaomi",
          "zip": "0536" },
        {
          "label": "高青Gaoqing0533",
          "name": "高青",
          "pinyin": "gaoqing",
          "zip": "0533" },
        {
          "label": "高唐Gaotang0635",
          "name": "高唐",
          "pinyin": "gaotang",
          "zip": "0635" },
        {
          "label": "高要Gaoyao0758",
          "name": "高要",
          "pinyin": "gaoyao",
          "zip": "0758" },
        {
          "label": "高邑Gaoyi0311",
          "name": "高邑",
          "pinyin": "gaoyi",
          "zip": "0311" },
        {
          "label": "高邮Gaoyou0514",
          "name": "高邮",
          "pinyin": "gaoyou",
          "zip": "0514" },
        {
          "label": "高州Gaozhou0668",
          "name": "高州",
          "pinyin": "gaozhou",
          "zip": "0668" },
        {
          "label": "巩义Gongyi0371",
          "name": "巩义",
          "pinyin": "gongyi",
          "zip": "0371" },
        {
          "label": "广昌Guangchang0794",
          "name": "广昌",
          "pinyin": "guangchang",
          "zip": "0794" },
        {
          "label": "广德Guangde0563",
          "name": "广德",
          "pinyin": "guangde",
          "zip": "0563" },
        {
          "label": "广丰Guangfeng0793",
          "name": "广丰",
          "pinyin": "guangfeng",
          "zip": "0793" },
        {
          "label": "广宁Guangning0758",
          "name": "广宁",
          "pinyin": "guangning",
          "zip": "0758" },
        {
          "label": "广饶Guangrao0546",
          "name": "广饶",
          "pinyin": "guangrao",
          "zip": "0546" },
        {
          "label": "光泽Guangze0599",
          "name": "光泽",
          "pinyin": "guangze",
          "zip": "0599" },
        {
          "label": "灌南Guannan0518",
          "name": "灌南",
          "pinyin": "guannan",
          "zip": "0518" },
        {
          "label": "冠县Guanxian0635",
          "name": "冠县",
          "pinyin": "guanxian",
          "zip": "0635" },
        {
          "label": "灌云Guanyun0518",
          "name": "灌云",
          "pinyin": "guanyun",
          "zip": "0518" },
        {
          "label": "贵溪Guixi0701",
          "name": "贵溪",
          "pinyin": "guixi",
          "zip": "0701" },
        {
          "label": "古田Gutian0593",
          "name": "古田",
          "pinyin": "gutian",
          "zip": "0593" },
        {
          "label": "固镇Guzhen0552",
          "name": "固镇",
          "pinyin": "guzhen",
          "zip": "0552" }] },


      {
        "group": "h",
        "cities": [{
          "label": "哈尔滨Haerbin0451",
          "name": "哈尔滨",
          "pinyin": "haerbin",
          "zip": "0451" },
        {
          "label": "海口Haikou0898",
          "name": "海口",
          "pinyin": "haikou",
          "zip": "0898" },
        {
          "label": "邯郸Handan0310",
          "name": "邯郸",
          "pinyin": "handan",
          "zip": "0310" },
        {
          "label": "杭州Hangzhou0571",
          "name": "杭州",
          "pinyin": "hangzhou",
          "zip": "0571" },
        {
          "label": "合肥Hefei0551",
          "name": "合肥",
          "pinyin": "hefei",
          "zip": "0551" },
        {
          "label": "惠州Huizhou0752",
          "name": "惠州",
          "pinyin": "huizhou",
          "zip": "0752" },
        {
          "label": "海北Haibei0970",
          "name": "海北",
          "pinyin": "haibei",
          "zip": "0970" },
        {
          "label": "海东Haidong0972",
          "name": "海东",
          "pinyin": "haidong",
          "zip": "0972" },
        {
          "label": "海南Hainan0974",
          "name": "海南",
          "pinyin": "hainan",
          "zip": "0974" },
        {
          "label": "海西Haixi0977",
          "name": "海西",
          "pinyin": "haixi",
          "zip": "0977" },
        {
          "label": "哈密Hami0902",
          "name": "哈密",
          "pinyin": "hami",
          "zip": "0902" },
        {
          "label": "汉中Hanzhong0916",
          "name": "汉中",
          "pinyin": "hanzhong",
          "zip": "0916" },
        {
          "label": "鹤壁Hebi0392",
          "name": "鹤壁",
          "pinyin": "hebi",
          "zip": "0392" },
        {
          "label": "河池Hechi0778",
          "name": "河池",
          "pinyin": "hechi",
          "zip": "0778" },
        {
          "label": "鹤岗Hegang0468",
          "name": "鹤岗",
          "pinyin": "hegang",
          "zip": "0468" },
        {
          "label": "黑河Heihe0456",
          "name": "黑河",
          "pinyin": "heihe",
          "zip": "0456" },
        {
          "label": "衡水Hengshui0318",
          "name": "衡水",
          "pinyin": "hengshui",
          "zip": "0318" },
        {
          "label": "衡阳Hengyang0734",
          "name": "衡阳",
          "pinyin": "hengyang",
          "zip": "0734" },
        {
          "label": "和田地Hetiandi0903",
          "name": "和田地",
          "pinyin": "hetiandi",
          "zip": "0903" },
        {
          "label": "河源Heyuan0762",
          "name": "河源",
          "pinyin": "heyuan",
          "zip": "0762" },
        {
          "label": "菏泽Heze0530",
          "name": "菏泽",
          "pinyin": "heze",
          "zip": "0530" },
        {
          "label": "贺州Hezhou0774",
          "name": "贺州",
          "pinyin": "hezhou",
          "zip": "0774" },
        {
          "label": "红河Honghe0873",
          "name": "红河",
          "pinyin": "honghe",
          "zip": "0873" },
        {
          "label": "淮安Huaian0517",
          "name": "淮安",
          "pinyin": "huaian",
          "zip": "0517" },
        {
          "label": "淮北Huaibei0561",
          "name": "淮北",
          "pinyin": "huaibei",
          "zip": "0561" },
        {
          "label": "怀化Huaihua0745",
          "name": "怀化",
          "pinyin": "huaihua",
          "zip": "0745" },
        {
          "label": "淮南Huainan0554",
          "name": "淮南",
          "pinyin": "huainan",
          "zip": "0554" },
        {
          "label": "黄冈Huanggang0713",
          "name": "黄冈",
          "pinyin": "huanggang",
          "zip": "0713" },
        {
          "label": "黄南Huangnan0973",
          "name": "黄南",
          "pinyin": "huangnan",
          "zip": "0973" },
        {
          "label": "黄山Huangshan0559",
          "name": "黄山",
          "pinyin": "huangshan",
          "zip": "0559" },
        {
          "label": "黄石Huangshi0714",
          "name": "黄石",
          "pinyin": "huangshi",
          "zip": "0714" },
        {
          "label": "呼和浩特Huhehaote0471",
          "name": "呼和浩特",
          "pinyin": "huhehaote",
          "zip": "0471" },
        {
          "label": "葫芦岛Huludao0429",
          "name": "葫芦岛",
          "pinyin": "huludao",
          "zip": "0429" },
        {
          "label": "呼伦贝尔Hulunbeier0470",
          "name": "呼伦贝尔",
          "pinyin": "hulunbeier",
          "zip": "0470" },
        {
          "label": "湖州Huzhou0572",
          "name": "湖州",
          "pinyin": "huzhou",
          "zip": "0572" },
        {
          "label": "海安Haian0513",
          "name": "海安",
          "pinyin": "haian",
          "zip": "0513" },
        {
          "label": "海丰Haifeng0660",
          "name": "海丰",
          "pinyin": "haifeng",
          "zip": "0660" },
        {
          "label": "海门Haimen0513",
          "name": "海门",
          "pinyin": "haimen",
          "zip": "0513" },
        {
          "label": "海宁Haining0573",
          "name": "海宁",
          "pinyin": "haining",
          "zip": "0573" },
        {
          "label": "海盐Haiyan0573",
          "name": "海盐",
          "pinyin": "haiyan",
          "zip": "0573" },
        {
          "label": "海阳Haiyang0535",
          "name": "海阳",
          "pinyin": "haiyang",
          "zip": "0535" },
        {
          "label": "含山Hanshan0565",
          "name": "含山",
          "pinyin": "hanshan",
          "zip": "0565" },
        {
          "label": "合川Hechuan023",
          "name": "合川",
          "pinyin": "hechuan",
          "zip": "023" },
        {
          "label": "横峰Hengfeng0793",
          "name": "横峰",
          "pinyin": "hengfeng",
          "zip": "0793" },
        {
          "label": "横县Hengxian0771",
          "name": "横县",
          "pinyin": "hengxian",
          "zip": "0771" },
        {
          "label": "和平Heping0762",
          "name": "和平",
          "pinyin": "heping",
          "zip": "0762" },
        {
          "label": "鹤山Heshan0750",
          "name": "鹤山",
          "pinyin": "heshan",
          "zip": "0750" },
        {
          "label": "和县Hexian0565",
          "name": "和县",
          "pinyin": "hexian",
          "zip": "0565" },
        {
          "label": "洪泽Hongze0517",
          "name": "洪泽",
          "pinyin": "hongze",
          "zip": "0517" },
        {
          "label": "华安Huaan0596",
          "name": "华安",
          "pinyin": "huaan",
          "zip": "0596" },
        {
          "label": "桦甸Huadian0423",
          "name": "桦甸",
          "pinyin": "huadian",
          "zip": "0423" },
        {
          "label": "怀集Huaiji0758",
          "name": "怀集",
          "pinyin": "huaiji",
          "zip": "0758" },
        {
          "label": "怀宁Huaining0556",
          "name": "怀宁",
          "pinyin": "huaining",
          "zip": "0556" },
        {
          "label": "怀远Huaiyuan0552",
          "name": "怀远",
          "pinyin": "huaiyuan",
          "zip": "0552" },
        {
          "label": "桓台Huantai0533",
          "name": "桓台",
          "pinyin": "huantai",
          "zip": "0533" },
        {
          "label": "化州Huazhou0668",
          "name": "化州",
          "pinyin": "huazhou",
          "zip": "0668" },
        {
          "label": "惠安Huian0595",
          "name": "惠安",
          "pinyin": "huian",
          "zip": "0595" },
        {
          "label": "会昌Huichang0797",
          "name": "会昌",
          "pinyin": "huichang",
          "zip": "0797" },
        {
          "label": "惠东Huidong0752",
          "name": "惠东",
          "pinyin": "huidong",
          "zip": "0752" },
        {
          "label": "惠来Huilai0663",
          "name": "惠来",
          "pinyin": "huilai",
          "zip": "0663" },
        {
          "label": "惠民Huimin0543",
          "name": "惠民",
          "pinyin": "huimin",
          "zip": "0543" },
        {
          "label": "湖口Hukou0792",
          "name": "湖口",
          "pinyin": "hukou",
          "zip": "0792" },
        {
          "label": "呼兰Hulan0451",
          "name": "呼兰",
          "pinyin": "hulan",
          "zip": "0451" },
        {
          "label": "霍邱Huoqiu0564",
          "name": "霍邱",
          "pinyin": "huoqiu",
          "zip": "0564" },
        {
          "label": "霍山Huoshan0564",
          "name": "霍山",
          "pinyin": "huoshan",
          "zip": "0564" },
        {
          "label": "户县Huxian029",
          "name": "户县",
          "pinyin": "huxian",
          "zip": "029" }] },


      {
        "group": "j",
        "cities": [{
          "label": "焦作Jiaozuo0391",
          "name": "焦作",
          "pinyin": "jiaozuo",
          "zip": "0391" },
        {
          "label": "嘉兴Jiaxing0573",
          "name": "嘉兴",
          "pinyin": "jiaxing",
          "zip": "0573" },
        {
          "label": "吉林Jilin0423",
          "name": "吉林",
          "pinyin": "jilin",
          "zip": "0423" },
        {
          "label": "济南Jinan0531",
          "name": "济南",
          "pinyin": "jinan",
          "zip": "0531" },
        {
          "label": "佳木斯Jiamusi0454",
          "name": "佳木斯",
          "pinyin": "jiamusi",
          "zip": "0454" },
        {
          "label": "江门Jiangmen0750",
          "name": "江门",
          "pinyin": "jiangmen",
          "zip": "0750" },
        {
          "label": "吉安Jian0796",
          "name": "吉安",
          "pinyin": "jian",
          "zip": "0796" },
        {
          "label": "嘉峪关Jiayuguan0937",
          "name": "嘉峪关",
          "pinyin": "jiayuguan",
          "zip": "0937" },
        {
          "label": "揭阳Jieyang0663",
          "name": "揭阳",
          "pinyin": "jieyang",
          "zip": "0663" },
        {
          "label": "金昌Jinchang0935",
          "name": "金昌",
          "pinyin": "jinchang",
          "zip": "0935" },
        {
          "label": "晋城Jincheng0356",
          "name": "晋城",
          "pinyin": "jincheng",
          "zip": "0356" },
        {
          "label": "景德镇Jingdezhen0798",
          "name": "景德镇",
          "pinyin": "jingdezhen",
          "zip": "0798" },
        {
          "label": "荆门Jingmen0724",
          "name": "荆门",
          "pinyin": "jingmen",
          "zip": "0724" },
        {
          "label": "荆州Jingzhou0716",
          "name": "荆州",
          "pinyin": "jingzhou",
          "zip": "0716" },
        {
          "label": "金华Jinhua0579",
          "name": "金华",
          "pinyin": "jinhua",
          "zip": "0579" },
        {
          "label": "济宁Jining0537",
          "name": "济宁",
          "pinyin": "jining",
          "zip": "0537" },
        {
          "label": "晋中Jinzhong0354",
          "name": "晋中",
          "pinyin": "jinzhong",
          "zip": "0354" },
        {
          "label": "锦州Jinzhou0416",
          "name": "锦州",
          "pinyin": "jinzhou",
          "zip": "0416" },
        {
          "label": "九江Jiujiang0792",
          "name": "九江",
          "pinyin": "jiujiang",
          "zip": "0792" },
        {
          "label": "酒泉Jiuquan0937",
          "name": "酒泉",
          "pinyin": "jiuquan",
          "zip": "0937" },
        {
          "label": "鸡西Jixi0467",
          "name": "鸡西",
          "pinyin": "jixi",
          "zip": "0467" },
        {
          "label": "建德Jiande0571",
          "name": "建德",
          "pinyin": "jiande",
          "zip": "0571" },
        {
          "label": "江都Jiangdu0514",
          "name": "江都",
          "pinyin": "jiangdu",
          "zip": "0514" },
        {
          "label": "江津Jiangjin023",
          "name": "江津",
          "pinyin": "jiangjin",
          "zip": "023" },
        {
          "label": "将乐Jiangle0598",
          "name": "将乐",
          "pinyin": "jiangle",
          "zip": "0598" },
        {
          "label": "江山Jiangshan0570",
          "name": "江山",
          "pinyin": "jiangshan",
          "zip": "0570" },
        {
          "label": "姜堰Jiangyan0523",
          "name": "姜堰",
          "pinyin": "jiangyan",
          "zip": "0523" },
        {
          "label": "江阴Jiangyin0510",
          "name": "江阴",
          "pinyin": "jiangyin",
          "zip": "0510" },
        {
          "label": "建湖Jianhu0515",
          "name": "建湖",
          "pinyin": "jianhu",
          "zip": "0515" },
        {
          "label": "建宁Jianning0598",
          "name": "建宁",
          "pinyin": "jianning",
          "zip": "0598" },
        {
          "label": "建瓯Jianou0599",
          "name": "建瓯",
          "pinyin": "jianou",
          "zip": "0599" },
        {
          "label": "建阳Jianyang0599",
          "name": "建阳",
          "pinyin": "jianyang",
          "zip": "0599" },
        {
          "label": "吉安Jian0796",
          "name": "吉安",
          "pinyin": "jian",
          "zip": "0796" },
        {
          "label": "蛟河Jiaohe0423",
          "name": "蛟河",
          "pinyin": "jiaohe",
          "zip": "0423" },
        {
          "label": "蕉岭Jiaoling0753",
          "name": "蕉岭",
          "pinyin": "jiaoling",
          "zip": "0753" },
        {
          "label": "胶南Jiaonan0532",
          "name": "胶南",
          "pinyin": "jiaonan",
          "zip": "0532" },
        {
          "label": "胶州Jiaozhou0532",
          "name": "胶州",
          "pinyin": "jiaozhou",
          "zip": "0532" },
        {
          "label": "嘉善Jiashan0573",
          "name": "嘉善",
          "pinyin": "jiashan",
          "zip": "0573" },
        {
          "label": "嘉祥Jiaxiang0537",
          "name": "嘉祥",
          "pinyin": "jiaxiang",
          "zip": "0537" },
        {
          "label": "揭东Jiedong0663",
          "name": "揭东",
          "pinyin": "jiedong",
          "zip": "0663" },
        {
          "label": "界首Jieshou0558",
          "name": "界首",
          "pinyin": "jieshou",
          "zip": "0558" },
        {
          "label": "揭西Jiexi0663",
          "name": "揭西",
          "pinyin": "jiexi",
          "zip": "0663" },
        {
          "label": "即墨Jimo0532",
          "name": "即墨",
          "pinyin": "jimo",
          "zip": "0532" },
        {
          "label": "靖安Jingan0795",
          "name": "靖安",
          "pinyin": "jingan",
          "zip": "0795" },
        {
          "label": "旌德Jingde0563",
          "name": "旌德",
          "pinyin": "jingde",
          "zip": "0563" },
        {
          "label": "井冈山Jinggangshan0796",
          "name": "井冈山",
          "pinyin": "jinggangshan",
          "zip": "0796" },
        {
          "label": "靖江Jingjiang0523",
          "name": "靖江",
          "pinyin": "jingjiang",
          "zip": "0523" },
        {
          "label": "景宁Jingning0578",
          "name": "景宁",
          "pinyin": "jingning",
          "zip": "0578" },
        {
          "label": "泾县Jingxian0563",
          "name": "泾县",
          "pinyin": "jingxian",
          "zip": "0563" },
        {
          "label": "井陉Jingxing0311",
          "name": "井陉",
          "pinyin": "jingxing",
          "zip": "0311" },
        {
          "label": "金湖Jinhu0517",
          "name": "金湖",
          "pinyin": "jinhu",
          "zip": "0517" },
        {
          "label": "晋江Jinjiang0595",
          "name": "晋江",
          "pinyin": "jinjiang",
          "zip": "0595" },
        {
          "label": "金门Jinmen0595",
          "name": "金门",
          "pinyin": "jinmen",
          "zip": "0595" },
        {
          "label": "晋宁Jinning0871",
          "name": "晋宁",
          "pinyin": "jinning",
          "zip": "0871" },
        {
          "label": "金坛Jintan0519",
          "name": "金坛",
          "pinyin": "jintan",
          "zip": "0519" },
        {
          "label": "金堂Jintang028",
          "name": "金堂",
          "pinyin": "jintang",
          "zip": "028" },
        {
          "label": "进贤Jinxian0791",
          "name": "进贤",
          "pinyin": "jinxian",
          "zip": "0791" },
        {
          "label": "金溪Jinxi0794",
          "name": "金溪",
          "pinyin": "jinxi",
          "zip": "0794" },
        {
          "label": "金乡Jinxiang0537",
          "name": "金乡",
          "pinyin": "jinxiang",
          "zip": "0537" },
        {
          "label": "缙云Jinyun0578",
          "name": "缙云",
          "pinyin": "jinyun",
          "zip": "0578" },
        {
          "label": "金寨Jinzhai0564",
          "name": "金寨",
          "pinyin": "jinzhai",
          "zip": "0564" },
        {
          "label": "晋州Jinzhou0311",
          "name": "晋州",
          "pinyin": "jinzhou",
          "zip": "0311" },
        {
          "label": "吉水Jishui0796",
          "name": "吉水",
          "pinyin": "jishui",
          "zip": "0796" },
        {
          "label": "九江Jiujiang0792",
          "name": "九江",
          "pinyin": "jiujiang",
          "zip": "0792" },
        {
          "label": "九台Jiutai0431",
          "name": "九台",
          "pinyin": "jiutai",
          "zip": "0431" },
        {
          "label": "绩溪Jixi0563",
          "name": "绩溪",
          "pinyin": "jixi",
          "zip": "0563" },
        {
          "label": "济阳Jiyang0531",
          "name": "济阳",
          "pinyin": "jiyang",
          "zip": "0531" },
        {
          "label": "济源Jiyuan0391",
          "name": "济源",
          "pinyin": "jiyuan",
          "zip": "0391" },
        {
          "label": "鄄城Juancheng0530",
          "name": "鄄城",
          "pinyin": "juancheng",
          "zip": "0530" },
        {
          "label": "莒南Junan0539",
          "name": "莒南",
          "pinyin": "junan",
          "zip": "0539" },
        {
          "label": "句容Jurong0511",
          "name": "句容",
          "pinyin": "jurong",
          "zip": "0511" },
        {
          "label": "莒县Juxian0633",
          "name": "莒县",
          "pinyin": "juxian",
          "zip": "0633" },
        {
          "label": "巨野Juye0530",
          "name": "巨野",
          "pinyin": "juye",
          "zip": "0530" }] },


      {
        "group": "k",
        "cities": [{
          "label": "昆明Kunming0871",
          "name": "昆明",
          "pinyin": "kunming",
          "zip": "0871" },
        {
          "label": "开封Kaifeng0378",
          "name": "开封",
          "pinyin": "kaifeng",
          "zip": "0378" },
        {
          "label": "喀什地Kashidi0998",
          "name": "喀什地",
          "pinyin": "kashidi",
          "zip": "0998" },
        {
          "label": "克拉玛依Kelamayi0990",
          "name": "克拉玛依",
          "pinyin": "kelamayi",
          "zip": "0990" },
        {
          "label": "克孜勒Kezile0908",
          "name": "克孜勒",
          "pinyin": "kezile",
          "zip": "0908" },
        {
          "label": "开化Kaihua0570",
          "name": "开化",
          "pinyin": "kaihua",
          "zip": "0570" },
        {
          "label": "开平Kaiping0750",
          "name": "开平",
          "pinyin": "kaiping",
          "zip": "0750" },
        {
          "label": "开县Kaixian023",
          "name": "开县",
          "pinyin": "kaixian",
          "zip": "023" },
        {
          "label": "开阳Kaiyang0851",
          "name": "开阳",
          "pinyin": "kaiyang",
          "zip": "0851" },
        {
          "label": "康平Kangping024",
          "name": "康平",
          "pinyin": "kangping",
          "zip": "024" },
        {
          "label": "垦利Kenli0546",
          "name": "垦利",
          "pinyin": "kenli",
          "zip": "0546" },
        {
          "label": "昆山Kunshan0512",
          "name": "昆山",
          "pinyin": "kunshan",
          "zip": "0512" }] },


      {
        "group": "l",
        "cities": [{
          "label": "兰州Lanzhou0931",
          "name": "兰州",
          "pinyin": "lanzhou",
          "zip": "0931" },
        {
          "label": "柳州Liuzhou0772",
          "name": "柳州",
          "pinyin": "liuzhou",
          "zip": "0772" },
        {
          "label": "洛阳Luoyang0379",
          "name": "洛阳",
          "pinyin": "luoyang",
          "zip": "0379" },
        {
          "label": "来宾Laibin0772",
          "name": "来宾",
          "pinyin": "laibin",
          "zip": "0772" },
        {
          "label": "莱芜Laiwu0634",
          "name": "莱芜",
          "pinyin": "laiwu",
          "zip": "0634" },
        {
          "label": "廊坊Langfang0316",
          "name": "廊坊",
          "pinyin": "langfang",
          "zip": "0316" },
        {
          "label": "拉萨Lasa0891",
          "name": "拉萨",
          "pinyin": "lasa",
          "zip": "0891" },
        {
          "label": "乐山Leshan0833",
          "name": "乐山",
          "pinyin": "leshan",
          "zip": "0833" },
        {
          "label": "凉山Liangshan0834",
          "name": "凉山",
          "pinyin": "liangshan",
          "zip": "0834" },
        {
          "label": "连云港Lianyungang0518",
          "name": "连云港",
          "pinyin": "lianyungang",
          "zip": "0518" },
        {
          "label": "聊城Liaocheng0635",
          "name": "聊城",
          "pinyin": "liaocheng",
          "zip": "0635" },
        {
          "label": "辽阳Liaoyang0419",
          "name": "辽阳",
          "pinyin": "liaoyang",
          "zip": "0419" },
        {
          "label": "辽源Liaoyuan0437",
          "name": "辽源",
          "pinyin": "liaoyuan",
          "zip": "0437" },
        {
          "label": "丽江Lijiang0888",
          "name": "丽江",
          "pinyin": "lijiang",
          "zip": "0888" },
        {
          "label": "临沧Lincang0883",
          "name": "临沧",
          "pinyin": "lincang",
          "zip": "0883" },
        {
          "label": "临汾Linfen0357",
          "name": "临汾",
          "pinyin": "linfen",
          "zip": "0357" },
        {
          "label": "临夏Linxia0930",
          "name": "临夏",
          "pinyin": "linxia",
          "zip": "0930" },
        {
          "label": "临沂Linyi0539",
          "name": "临沂",
          "pinyin": "linyi",
          "zip": "0539" },
        {
          "label": "林芝Linzhi0894",
          "name": "林芝",
          "pinyin": "linzhi",
          "zip": "0894" },
        {
          "label": "丽水Lishui0578",
          "name": "丽水",
          "pinyin": "lishui",
          "zip": "0578" },
        {
          "label": "六安Liuan0564",
          "name": "六安",
          "pinyin": "liuan",
          "zip": "0564" },
        {
          "label": "六盘水Liupanshui0858",
          "name": "六盘水",
          "pinyin": "liupanshui",
          "zip": "0858" },
        {
          "label": "陇南Longnan0939",
          "name": "陇南",
          "pinyin": "longnan",
          "zip": "0939" },
        {
          "label": "龙岩Longyan0597",
          "name": "龙岩",
          "pinyin": "longyan",
          "zip": "0597" },
        {
          "label": "娄底Loudi0738",
          "name": "娄底",
          "pinyin": "loudi",
          "zip": "0738" },
        {
          "label": "漯河Luohe0395",
          "name": "漯河",
          "pinyin": "luohe",
          "zip": "0395" },
        {
          "label": "泸州Luzhou0830",
          "name": "泸州",
          "pinyin": "luzhou",
          "zip": "0830" },
        {
          "label": "吕梁Lvliang0358",
          "name": "吕梁",
          "pinyin": "lvliang",
          "zip": "0358" },
        {
          "label": "来安Laian0550",
          "name": "来安",
          "pinyin": "laian",
          "zip": "0550" },
        {
          "label": "莱西Laixi0532",
          "name": "莱西",
          "pinyin": "laixi",
          "zip": "0532" },
        {
          "label": "莱阳Laiyang0535",
          "name": "莱阳",
          "pinyin": "laiyang",
          "zip": "0535" },
        {
          "label": "莱州Laizhou0535",
          "name": "莱州",
          "pinyin": "laizhou",
          "zip": "0535" },
        {
          "label": "郎溪Langxi0563",
          "name": "郎溪",
          "pinyin": "langxi",
          "zip": "0563" },
        {
          "label": "蓝田Lantian029",
          "name": "蓝田",
          "pinyin": "lantian",
          "zip": "029" },
        {
          "label": "兰溪Lanxi0579",
          "name": "兰溪",
          "pinyin": "lanxi",
          "zip": "0579" },
        {
          "label": "乐安Lean0794",
          "name": "乐安",
          "pinyin": "lean",
          "zip": "0794" },
        {
          "label": "乐昌Lechang0751",
          "name": "乐昌",
          "pinyin": "lechang",
          "zip": "0751" },
        {
          "label": "雷州Leizhou0759",
          "name": "雷州",
          "pinyin": "leizhou",
          "zip": "0759" },
        {
          "label": "乐陵Leling0534",
          "name": "乐陵",
          "pinyin": "leling",
          "zip": "0534" },
        {
          "label": "乐平Leping0798",
          "name": "乐平",
          "pinyin": "leping",
          "zip": "0798" },
        {
          "label": "乐清Leqing0577",
          "name": "乐清",
          "pinyin": "leqing",
          "zip": "0577" },
        {
          "label": "乐亭Leting0315",
          "name": "乐亭",
          "pinyin": "leting",
          "zip": "0315" },
        {
          "label": "连城Liancheng0597",
          "name": "连城",
          "pinyin": "liancheng",
          "zip": "0597" },
        {
          "label": "梁平Liangping023",
          "name": "梁平",
          "pinyin": "liangping",
          "zip": "023" },
        {
          "label": "梁山Liangshan0537",
          "name": "梁山",
          "pinyin": "liangshan",
          "zip": "0537" },
        {
          "label": "莲花Lianhua0799",
          "name": "莲花",
          "pinyin": "lianhua",
          "zip": "0799" },
        {
          "label": "连江Lianjiang0591",
          "name": "连江",
          "pinyin": "lianjiang",
          "zip": "0591" },
        {
          "label": "廉江Lianjiang0759",
          "name": "廉江",
          "pinyin": "lianjiang",
          "zip": "0759" },
        {
          "label": "连南Liannan0763",
          "name": "连南",
          "pinyin": "liannan",
          "zip": "0763" },
        {
          "label": "连平Lianping0762",
          "name": "连平",
          "pinyin": "lianping",
          "zip": "0762" },
        {
          "label": "连山Lianshan0763",
          "name": "连山",
          "pinyin": "lianshan",
          "zip": "0763" },
        {
          "label": "涟水Lianshui0517",
          "name": "涟水",
          "pinyin": "lianshui",
          "zip": "0517" },
        {
          "label": "连州Lianzhou0763",
          "name": "连州",
          "pinyin": "lianzhou",
          "zip": "0763" },
        {
          "label": "辽中Liaozhong024",
          "name": "辽中",
          "pinyin": "liaozhong",
          "zip": "024" },
        {
          "label": "黎川Lichuan0794",
          "name": "黎川",
          "pinyin": "lichuan",
          "zip": "0794" },
        {
          "label": "利津Lijin0546",
          "name": "利津",
          "pinyin": "lijin",
          "zip": "0546" },
        {
          "label": "临安Linan0571",
          "name": "临安",
          "pinyin": "linan",
          "zip": "0571" },
        {
          "label": "灵璧Lingbi0557",
          "name": "灵璧",
          "pinyin": "lingbi",
          "zip": "0557" },
        {
          "label": "灵寿Lingshou0311",
          "name": "灵寿",
          "pinyin": "lingshou",
          "zip": "0311" },
        {
          "label": "陵县Lingxian0534",
          "name": "陵县",
          "pinyin": "lingxian",
          "zip": "0534" },
        {
          "label": "临海Linhai0576",
          "name": "临海",
          "pinyin": "linhai",
          "zip": "0576" },
        {
          "label": "临清Linqing0635",
          "name": "临清",
          "pinyin": "linqing",
          "zip": "0635" },
        {
          "label": "临泉Linquan0558",
          "name": "临泉",
          "pinyin": "linquan",
          "zip": "0558" },
        {
          "label": "临朐Linqu0536",
          "name": "临朐",
          "pinyin": "linqu",
          "zip": "0536" },
        {
          "label": "临沭Linshu0539",
          "name": "临沭",
          "pinyin": "linshu",
          "zip": "0539" },
        {
          "label": "临邑Linyi0534",
          "name": "临邑",
          "pinyin": "linyi",
          "zip": "0534" },
        {
          "label": "溧水Lishui025",
          "name": "溧水",
          "pinyin": "lishui",
          "zip": "025" },
        {
          "label": "柳城Liucheng0772",
          "name": "柳城",
          "pinyin": "liucheng",
          "zip": "0772" },
        {
          "label": "柳江Liujiang0772",
          "name": "柳江",
          "pinyin": "liujiang",
          "zip": "0772" },
        {
          "label": "浏阳Liuyang0731",
          "name": "浏阳",
          "pinyin": "liuyang",
          "zip": "0731" },
        {
          "label": "利辛Lixin0558",
          "name": "利辛",
          "pinyin": "lixin",
          "zip": "0558" },
        {
          "label": "溧阳Liyang0519",
          "name": "溧阳",
          "pinyin": "liyang",
          "zip": "0519" },
        {
          "label": "隆安Longan0771",
          "name": "隆安",
          "pinyin": "longan",
          "zip": "0771" },
        {
          "label": "龙川Longchuan0762",
          "name": "龙川",
          "pinyin": "longchuan",
          "zip": "0762" },
        {
          "label": "龙海Longhai0596",
          "name": "龙海",
          "pinyin": "longhai",
          "zip": "0596" },
        {
          "label": "龙口Longkou0535",
          "name": "龙口",
          "pinyin": "longkou",
          "zip": "0535" },
        {
          "label": "龙门Longmen0752",
          "name": "龙门",
          "pinyin": "longmen",
          "zip": "0752" },
        {
          "label": "龙南Longnan0797",
          "name": "龙南",
          "pinyin": "longnan",
          "zip": "0797" },
        {
          "label": "龙泉Longquan0578",
          "name": "龙泉",
          "pinyin": "longquan",
          "zip": "0578" },
        {
          "label": "龙游Longyou0570",
          "name": "龙游",
          "pinyin": "longyou",
          "zip": "0570" },
        {
          "label": "栾城Luancheng0311",
          "name": "栾城",
          "pinyin": "luancheng",
          "zip": "0311" },
        {
          "label": "栾川Luanchuan0379",
          "name": "栾川",
          "pinyin": "luanchuan",
          "zip": "0379" },
        {
          "label": "滦南Luannan0315",
          "name": "滦南",
          "pinyin": "luannan",
          "zip": "0315" },
        {
          "label": "滦县Luanxian0315",
          "name": "滦县",
          "pinyin": "luanxian",
          "zip": "0315" },
        {
          "label": "陆丰Lufeng0660",
          "name": "陆丰",
          "pinyin": "lufeng",
          "zip": "0660" },
        {
          "label": "陆河Luhe0660",
          "name": "陆河",
          "pinyin": "luhe",
          "zip": "0660" },
        {
          "label": "庐江Lujiang0565",
          "name": "庐江",
          "pinyin": "lujiang",
          "zip": "0565" },
        {
          "label": "罗定Luoding0766",
          "name": "罗定",
          "pinyin": "luoding",
          "zip": "0766" },
        {
          "label": "洛宁Luoning0379",
          "name": "洛宁",
          "pinyin": "luoning",
          "zip": "0379" },
        {
          "label": "罗源Luoyuan0591",
          "name": "罗源",
          "pinyin": "luoyuan",
          "zip": "0591" },
        {
          "label": "鹿泉Luquan0311",
          "name": "鹿泉",
          "pinyin": "luquan",
          "zip": "0311" },
        {
          "label": "禄劝Luquan0871",
          "name": "禄劝",
          "pinyin": "luquan",
          "zip": "0871" },
        {
          "label": "芦溪Luxi0799",
          "name": "芦溪",
          "pinyin": "luxi",
          "zip": "0799" },
        {
          "label": "鹿寨Luzhai0772",
          "name": "鹿寨",
          "pinyin": "luzhai",
          "zip": "0772" }] },


      {
        "group": "m",
        "cities": [{
          "label": "马鞍山Maanshan0555",
          "name": "马鞍山",
          "pinyin": "maanshan",
          "zip": "0555" },
        {
          "label": "茂名Maoming0668",
          "name": "茂名",
          "pinyin": "maoming",
          "zip": "0668" },
        {
          "label": "眉山Meishan028",
          "name": "眉山",
          "pinyin": "meishan",
          "zip": "028" },
        {
          "label": "梅州Meizhou0753",
          "name": "梅州",
          "pinyin": "meizhou",
          "zip": "0753" },
        {
          "label": "绵阳Mianyang0816",
          "name": "绵阳",
          "pinyin": "mianyang",
          "zip": "0816" },
        {
          "label": "牡丹江Mudanjiang0453",
          "name": "牡丹江",
          "pinyin": "mudanjiang",
          "zip": "0453" },
        {
          "label": "马山Mashan0771",
          "name": "马山",
          "pinyin": "mashan",
          "zip": "0771" },
        {
          "label": "梅县Meixian0753",
          "name": "梅县",
          "pinyin": "meixian",
          "zip": "0753" },
        {
          "label": "蒙城Mengcheng0558",
          "name": "蒙城",
          "pinyin": "mengcheng",
          "zip": "0558" },
        {
          "label": "孟津Mengjin0379",
          "name": "孟津",
          "pinyin": "mengjin",
          "zip": "0379" },
        {
          "label": "蒙阴Mengyin0539",
          "name": "蒙阴",
          "pinyin": "mengyin",
          "zip": "0539" },
        {
          "label": "孟州Mengzhou0391",
          "name": "孟州",
          "pinyin": "mengzhou",
          "zip": "0391" },
        {
          "label": "明光Mingguang0550",
          "name": "明光",
          "pinyin": "mingguang",
          "zip": "0550" },
        {
          "label": "明溪Mingxi0598",
          "name": "明溪",
          "pinyin": "mingxi",
          "zip": "0598" },
        {
          "label": "闽侯Minhou0591",
          "name": "闽侯",
          "pinyin": "minhou",
          "zip": "0591" },
        {
          "label": "闽清Minqing0591",
          "name": "闽清",
          "pinyin": "minqing",
          "zip": "0591" },
        {
          "label": "木兰Mulan0451",
          "name": "木兰",
          "pinyin": "mulan",
          "zip": "0451" }] },


      {
        "group": "n",
        "cities": [{
          "label": "南昌Nanchang0791",
          "name": "南昌",
          "pinyin": "nanchang",
          "zip": "0791" },
        {
          "label": "南京Nanjing025",
          "name": "南京",
          "pinyin": "nanjing",
          "zip": "025" },
        {
          "label": "南宁Nanning0771",
          "name": "南宁",
          "pinyin": "nanning",
          "zip": "0771" },
        {
          "label": "南通Nantong0513",
          "name": "南通",
          "pinyin": "nantong",
          "zip": "0513" },
        {
          "label": "宁波Ningbo0574",
          "name": "宁波",
          "pinyin": "ningbo",
          "zip": "0574" },
        {
          "label": "南充Nanchong0817",
          "name": "南充",
          "pinyin": "nanchong",
          "zip": "0817" },
        {
          "label": "南平Nanping0599",
          "name": "南平",
          "pinyin": "nanping",
          "zip": "0599" },
        {
          "label": "南阳Nanyang0377",
          "name": "南阳",
          "pinyin": "nanyang",
          "zip": "0377" },
        {
          "label": "那曲Naqu0896",
          "name": "那曲",
          "pinyin": "naqu",
          "zip": "0896" },
        {
          "label": "内江Neijiang0832",
          "name": "内江",
          "pinyin": "neijiang",
          "zip": "0832" },
        {
          "label": "宁德Ningde0593",
          "name": "宁德",
          "pinyin": "ningde",
          "zip": "0593" },
        {
          "label": "怒江Nujiang0886",
          "name": "怒江",
          "pinyin": "nujiang",
          "zip": "0886" },
        {
          "label": "南安Nanan0595",
          "name": "南安",
          "pinyin": "nanan",
          "zip": "0595" },
        {
          "label": "南澳Nanao0754",
          "name": "南澳",
          "pinyin": "nanao",
          "zip": "0754" },
        {
          "label": "南城Nancheng0794",
          "name": "南城",
          "pinyin": "nancheng",
          "zip": "0794" },
        {
          "label": "南川Nanchuan023",
          "name": "南川",
          "pinyin": "nanchuan",
          "zip": "023" },
        {
          "label": "南丰Nanfeng0794",
          "name": "南丰",
          "pinyin": "nanfeng",
          "zip": "0794" },
        {
          "label": "南靖Nanjing0596",
          "name": "南靖",
          "pinyin": "nanjing",
          "zip": "0596" },
        {
          "label": "南康Nankang0797",
          "name": "南康",
          "pinyin": "nankang",
          "zip": "0797" },
        {
          "label": "南陵Nanling0553",
          "name": "南陵",
          "pinyin": "nanling",
          "zip": "0553" },
        {
          "label": "南雄Nanxiong0751",
          "name": "南雄",
          "pinyin": "nanxiong",
          "zip": "0751" },
        {
          "label": "宁都Ningdu0797",
          "name": "宁都",
          "pinyin": "ningdu",
          "zip": "0797" },
        {
          "label": "宁国Ningguo0563",
          "name": "宁国",
          "pinyin": "ningguo",
          "zip": "0563" },
        {
          "label": "宁海Ninghai0574",
          "name": "宁海",
          "pinyin": "ninghai",
          "zip": "0574" },
        {
          "label": "宁化Ninghua0598",
          "name": "宁化",
          "pinyin": "ninghua",
          "zip": "0598" },
        {
          "label": "宁津Ningjin0534",
          "name": "宁津",
          "pinyin": "ningjin",
          "zip": "0534" },
        {
          "label": "宁乡Ningxiang0731",
          "name": "宁乡",
          "pinyin": "ningxiang",
          "zip": "0731" },
        {
          "label": "宁阳Ningyang0538",
          "name": "宁阳",
          "pinyin": "ningyang",
          "zip": "0538" },
        {
          "label": "农安Nongan0431",
          "name": "农安",
          "pinyin": "nongan",
          "zip": "0431" }] },


      {
        "group": "p",
        "cities": [{
          "label": "盘锦Panjin0427",
          "name": "盘锦",
          "pinyin": "panjin",
          "zip": "0427" },
        {
          "label": "攀枝花Panzhihua0812",
          "name": "攀枝花",
          "pinyin": "panzhihua",
          "zip": "0812" },
        {
          "label": "平顶山Pingdingshan0375",
          "name": "平顶山",
          "pinyin": "pingdingshan",
          "zip": "0375" },
        {
          "label": "平凉Pingliang0933",
          "name": "平凉",
          "pinyin": "pingliang",
          "zip": "0933" },
        {
          "label": "萍乡Pingxiang0799",
          "name": "萍乡",
          "pinyin": "pingxiang",
          "zip": "0799" },
        {
          "label": "普洱Puer0879",
          "name": "普洱",
          "pinyin": "puer",
          "zip": "0879" },
        {
          "label": "莆田Putian0594",
          "name": "莆田",
          "pinyin": "putian",
          "zip": "0594" },
        {
          "label": "濮阳Puyang0393",
          "name": "濮阳",
          "pinyin": "puyang",
          "zip": "0393" },
        {
          "label": "磐安Panan0579",
          "name": "磐安",
          "pinyin": "panan",
          "zip": "0579" },
        {
          "label": "磐石Panshi0423",
          "name": "磐石",
          "pinyin": "panshi",
          "zip": "0423" },
        {
          "label": "沛县Peixian0516",
          "name": "沛县",
          "pinyin": "peixian",
          "zip": "0516" },
        {
          "label": "蓬莱Penglai0535",
          "name": "蓬莱",
          "pinyin": "penglai",
          "zip": "0535" },
        {
          "label": "彭水Pengshui023",
          "name": "彭水",
          "pinyin": "pengshui",
          "zip": "023" },
        {
          "label": "彭泽Pengze0792",
          "name": "彭泽",
          "pinyin": "pengze",
          "zip": "0792" },
        {
          "label": "彭州Pengzhou028",
          "name": "彭州",
          "pinyin": "pengzhou",
          "zip": "028" },
        {
          "label": "平度Pingdu0532",
          "name": "平度",
          "pinyin": "pingdu",
          "zip": "0532" },
        {
          "label": "平和Pinghe0596",
          "name": "平和",
          "pinyin": "pinghe",
          "zip": "0596" },
        {
          "label": "平湖Pinghu0573",
          "name": "平湖",
          "pinyin": "pinghu",
          "zip": "0573" },
        {
          "label": "屏南Pingnan0593",
          "name": "屏南",
          "pinyin": "pingnan",
          "zip": "0593" },
        {
          "label": "平山Pingshan0311",
          "name": "平山",
          "pinyin": "pingshan",
          "zip": "0311" },
        {
          "label": "平潭Pingtan0591",
          "name": "平潭",
          "pinyin": "pingtan",
          "zip": "0591" },
        {
          "label": "平阳Pingyang0577",
          "name": "平阳",
          "pinyin": "pingyang",
          "zip": "0577" },
        {
          "label": "平阴Pingyin0531",
          "name": "平阴",
          "pinyin": "pingyin",
          "zip": "0531" },
        {
          "label": "平邑Pingyi0539",
          "name": "平邑",
          "pinyin": "pingyi",
          "zip": "0539" },
        {
          "label": "平原Pingyuan0534",
          "name": "平原",
          "pinyin": "pingyuan",
          "zip": "0534" },
        {
          "label": "平远Pingyuan0753",
          "name": "平远",
          "pinyin": "pingyuan",
          "zip": "0753" },
        {
          "label": "郫县Pixian028",
          "name": "郫县",
          "pinyin": "pixian",
          "zip": "028" },
        {
          "label": "邳州Pizhou0516",
          "name": "邳州",
          "pinyin": "pizhou",
          "zip": "0516" },
        {
          "label": "鄱阳Poyang0793",
          "name": "鄱阳",
          "pinyin": "poyang",
          "zip": "0793" },
        {
          "label": "浦城Pucheng0599",
          "name": "浦城",
          "pinyin": "pucheng",
          "zip": "0599" },
        {
          "label": "浦江Pujiang0579",
          "name": "浦江",
          "pinyin": "pujiang",
          "zip": "0579" },
        {
          "label": "蒲江Pujiang028",
          "name": "蒲江",
          "pinyin": "pujiang",
          "zip": "028" },
        {
          "label": "普兰店Pulandian0411",
          "name": "普兰店",
          "pinyin": "pulandian",
          "zip": "0411" },
        {
          "label": "普宁Puning0663",
          "name": "普宁",
          "pinyin": "puning",
          "zip": "0663" }] },


      {
        "group": "q",
        "cities": [{
          "label": "青岛Qingdao0532",
          "name": "青岛",
          "pinyin": "qingdao",
          "zip": "0532" },
        {
          "label": "泉州Quanzhou0595",
          "name": "泉州",
          "pinyin": "quanzhou",
          "zip": "0595" },
        {
          "label": "黔东Qiandong0855",
          "name": "黔东",
          "pinyin": "qiandong",
          "zip": "0855" },
        {
          "label": "黔南Qiannan0854",
          "name": "黔南",
          "pinyin": "qiannan",
          "zip": "0854" },
        {
          "label": "黔西南Qianxinan0859",
          "name": "黔西南",
          "pinyin": "qianxinan",
          "zip": "0859" },
        {
          "label": "庆阳Qingyang0934",
          "name": "庆阳",
          "pinyin": "qingyang",
          "zip": "0934" },
        {
          "label": "清远Qingyuan0763",
          "name": "清远",
          "pinyin": "qingyuan",
          "zip": "0763" },
        {
          "label": "秦皇岛Qinhuangdao0335",
          "name": "秦皇岛",
          "pinyin": "qinhuangdao",
          "zip": "0335" },
        {
          "label": "钦州Qinzhou0777",
          "name": "钦州",
          "pinyin": "qinzhou",
          "zip": "0777" },
        {
          "label": "齐齐哈尔Qiqihaer0452",
          "name": "齐齐哈尔",
          "pinyin": "qiqihaer",
          "zip": "0452" },
        {
          "label": "七台河Qitaihe0464",
          "name": "七台河",
          "pinyin": "qitaihe",
          "zip": "0464" },
        {
          "label": "曲靖Qujing0874",
          "name": "曲靖",
          "pinyin": "qujing",
          "zip": "0874" },
        {
          "label": "衢州Quzhou0570",
          "name": "衢州",
          "pinyin": "quzhou",
          "zip": "0570" },
        {
          "label": "迁安Qianan0315",
          "name": "迁安",
          "pinyin": "qianan",
          "zip": "0315" },
        {
          "label": "潜山Qianshan0556",
          "name": "潜山",
          "pinyin": "qianshan",
          "zip": "0556" },
        {
          "label": "铅山Qianshan0793",
          "name": "铅山",
          "pinyin": "qianshan",
          "zip": "0793" },
        {
          "label": "迁西Qianxi0315",
          "name": "迁西",
          "pinyin": "qianxi",
          "zip": "0315" },
        {
          "label": "启东Qidong0513",
          "name": "启东",
          "pinyin": "qidong",
          "zip": "0513" },
        {
          "label": "齐河Qihe0534",
          "name": "齐河",
          "pinyin": "qihe",
          "zip": "0534" },
        {
          "label": "綦江Qijiang023",
          "name": "綦江",
          "pinyin": "qijiang",
          "zip": "023" },
        {
          "label": "祁门Qimen0559",
          "name": "祁门",
          "pinyin": "qimen",
          "zip": "0559" },
        {
          "label": "清流Qingliu0598",
          "name": "清流",
          "pinyin": "qingliu",
          "zip": "0598" },
        {
          "label": "青田Qingtian0578",
          "name": "青田",
          "pinyin": "qingtian",
          "zip": "0578" },
        {
          "label": "清新Qingxin0763",
          "name": "清新",
          "pinyin": "qingxin",
          "zip": "0763" },
        {
          "label": "青阳Qingyang0566",
          "name": "青阳",
          "pinyin": "qingyang",
          "zip": "0566" },
        {
          "label": "庆元Qingyuan0578",
          "name": "庆元",
          "pinyin": "qingyuan",
          "zip": "0578" },
        {
          "label": "庆云Qingyun0534",
          "name": "庆云",
          "pinyin": "qingyun",
          "zip": "0534" },
        {
          "label": "清镇Qingzhen0851",
          "name": "清镇",
          "pinyin": "qingzhen",
          "zip": "0851" },
        {
          "label": "青州Qingzhou0536",
          "name": "青州",
          "pinyin": "qingzhou",
          "zip": "0536" },
        {
          "label": "沁阳Qinyang0391",
          "name": "沁阳",
          "pinyin": "qinyang",
          "zip": "0391" },
        {
          "label": "邛崃Qionglai028",
          "name": "邛崃",
          "pinyin": "qionglai",
          "zip": "028" },
        {
          "label": "栖霞Qixia0535",
          "name": "栖霞",
          "pinyin": "qixia",
          "zip": "0535" },
        {
          "label": "全椒Quanjiao0550",
          "name": "全椒",
          "pinyin": "quanjiao",
          "zip": "0550" },
        {
          "label": "全南Quannan0797",
          "name": "全南",
          "pinyin": "quannan",
          "zip": "0797" },
        {
          "label": "曲阜Qufu0537",
          "name": "曲阜",
          "pinyin": "qufu",
          "zip": "0537" },
        {
          "label": "曲江Qujiang0751",
          "name": "曲江",
          "pinyin": "qujiang",
          "zip": "0751" }] },


      {
        "group": "r",
        "cities": [{
          "label": "日喀则Rikaze0892",
          "name": "日喀则",
          "pinyin": "rikaze",
          "zip": "0892" },
        {
          "label": "日照Rizhao0633",
          "name": "日照",
          "pinyin": "rizhao",
          "zip": "0633" },
        {
          "label": "饶平Raoping0768",
          "name": "饶平",
          "pinyin": "raoping",
          "zip": "0768" },
        {
          "label": "仁化Renhua0751",
          "name": "仁化",
          "pinyin": "renhua",
          "zip": "0751" },
        {
          "label": "融安Rongan0772",
          "name": "融安",
          "pinyin": "rongan",
          "zip": "0772" },
        {
          "label": "荣昌Rongchang023",
          "name": "荣昌",
          "pinyin": "rongchang",
          "zip": "023" },
        {
          "label": "荣成Rongcheng0631",
          "name": "荣成",
          "pinyin": "rongcheng",
          "zip": "0631" },
        {
          "label": "融水Rongshui0772",
          "name": "融水",
          "pinyin": "rongshui",
          "zip": "0772" },
        {
          "label": "如东Rudong0513",
          "name": "如东",
          "pinyin": "rudong",
          "zip": "0513" },
        {
          "label": "如皋Rugao0513",
          "name": "如皋",
          "pinyin": "rugao",
          "zip": "0513" },
        {
          "label": "瑞安Ruian0577",
          "name": "瑞安",
          "pinyin": "ruian",
          "zip": "0577" },
        {
          "label": "瑞昌Ruichang0792",
          "name": "瑞昌",
          "pinyin": "ruichang",
          "zip": "0792" },
        {
          "label": "瑞金Ruijin0797",
          "name": "瑞金",
          "pinyin": "ruijin",
          "zip": "0797" },
        {
          "label": "乳山Rushan0631",
          "name": "乳山",
          "pinyin": "rushan",
          "zip": "0631" },
        {
          "label": "汝阳Ruyang0379",
          "name": "汝阳",
          "pinyin": "ruyang",
          "zip": "0379" },
        {
          "label": "乳源Ruyuan0751",
          "name": "乳源",
          "pinyin": "ruyuan",
          "zip": "0751" }] },


      {
        "group": "s",
        "cities": [{
          "label": "上海Shanghai021",
          "name": "上海",
          "pinyin": "shanghai",
          "zip": "021" },
        {
          "label": "沈阳Shenyang024",
          "name": "沈阳",
          "pinyin": "shenyang",
          "zip": "024" },
        {
          "label": "深圳Shenzhen0755",
          "name": "深圳",
          "pinyin": "shenzhen",
          "zip": "0755" },
        {
          "label": "石家庄Shijiazhuang0311",
          "name": "石家庄",
          "pinyin": "shijiazhuang",
          "zip": "0311" },
        {
          "label": "苏州Suzhou0512",
          "name": "苏州",
          "pinyin": "suzhou",
          "zip": "0512" },
        {
          "label": "三门峡Sanmenxia0398",
          "name": "三门峡",
          "pinyin": "sanmenxia",
          "zip": "0398" },
        {
          "label": "三明Sanming0598",
          "name": "三明",
          "pinyin": "sanming",
          "zip": "0598" },
        {
          "label": "三亚Sanya0899",
          "name": "三亚",
          "pinyin": "sanya",
          "zip": "0899" },
        {
          "label": "商洛Shangluo0914",
          "name": "商洛",
          "pinyin": "shangluo",
          "zip": "0914" },
        {
          "label": "商丘Shangqiu0370",
          "name": "商丘",
          "pinyin": "shangqiu",
          "zip": "0370" },
        {
          "label": "上饶Shangrao0793",
          "name": "上饶",
          "pinyin": "shangrao",
          "zip": "0793" },
        {
          "label": "山南Shannan0893",
          "name": "山南",
          "pinyin": "shannan",
          "zip": "0893" },
        {
          "label": "汕头Shantou0754",
          "name": "汕头",
          "pinyin": "shantou",
          "zip": "0754" },
        {
          "label": "汕尾Shanwei0660",
          "name": "汕尾",
          "pinyin": "shanwei",
          "zip": "0660" },
        {
          "label": "韶关Shaoguan0751",
          "name": "韶关",
          "pinyin": "shaoguan",
          "zip": "0751" },
        {
          "label": "绍兴Shaoxing0575",
          "name": "绍兴",
          "pinyin": "shaoxing",
          "zip": "0575" },
        {
          "label": "邵阳Shaoyang0739",
          "name": "邵阳",
          "pinyin": "shaoyang",
          "zip": "0739" },
        {
          "label": "十堰Shiyan0719",
          "name": "十堰",
          "pinyin": "shiyan",
          "zip": "0719" },
        {
          "label": "石嘴山Shizuishan0952",
          "name": "石嘴山",
          "pinyin": "shizuishan",
          "zip": "0952" },
        {
          "label": "双鸭山Shuangyashan0469",
          "name": "双鸭山",
          "pinyin": "shuangyashan",
          "zip": "0469" },
        {
          "label": "朔州Shuozhou0349",
          "name": "朔州",
          "pinyin": "shuozhou",
          "zip": "0349" },
        {
          "label": "四平Siping0434",
          "name": "四平",
          "pinyin": "siping",
          "zip": "0434" },
        {
          "label": "松原Songyuan0438",
          "name": "松原",
          "pinyin": "songyuan",
          "zip": "0438" },
        {
          "label": "绥化Suihua0455",
          "name": "绥化",
          "pinyin": "suihua",
          "zip": "0455" },
        {
          "label": "遂宁Suining0825",
          "name": "遂宁",
          "pinyin": "suining",
          "zip": "0825" },
        {
          "label": "随州Suizhou0722",
          "name": "随州",
          "pinyin": "suizhou",
          "zip": "0722" },
        {
          "label": "宿迁Suqian0527",
          "name": "宿迁",
          "pinyin": "suqian",
          "zip": "0527" },
        {
          "label": "宿州Suzhou0557",
          "name": "宿州",
          "pinyin": "suzhou",
          "zip": "0557" },
        {
          "label": "三江Sanjiang0772",
          "name": "三江",
          "pinyin": "sanjiang",
          "zip": "0772" },
        {
          "label": "三门Sanmen0576",
          "name": "三门",
          "pinyin": "sanmen",
          "zip": "0576" },
        {
          "label": "诏安Saoan0596",
          "name": "诏安",
          "pinyin": "saoan",
          "zip": "0596" },
        {
          "label": "上高Shanggao0795",
          "name": "上高",
          "pinyin": "shanggao",
          "zip": "0795" },
        {
          "label": "上杭Shanghang0597",
          "name": "上杭",
          "pinyin": "shanghang",
          "zip": "0597" },
        {
          "label": "商河Shanghe0531",
          "name": "商河",
          "pinyin": "shanghe",
          "zip": "0531" },
        {
          "label": "上栗Shangli0799",
          "name": "上栗",
          "pinyin": "shangli",
          "zip": "0799" },
        {
          "label": "上林Shanglin0771",
          "name": "上林",
          "pinyin": "shanglin",
          "zip": "0771" },
        {
          "label": "上饶Shangrao0793",
          "name": "上饶",
          "pinyin": "shangrao",
          "zip": "0793" },
        {
          "label": "上犹Shangyou0797",
          "name": "上犹",
          "pinyin": "shangyou",
          "zip": "0797" },
        {
          "label": "上虞Shangyu0575",
          "name": "上虞",
          "pinyin": "shangyu",
          "zip": "0575" },
        {
          "label": "尚志Shangzhi0451",
          "name": "尚志",
          "pinyin": "shangzhi",
          "zip": "0451" },
        {
          "label": "邵武Shaowu0599",
          "name": "邵武",
          "pinyin": "shaowu",
          "zip": "0599" },
        {
          "label": "绍兴Shaoxing0575",
          "name": "绍兴",
          "pinyin": "shaoxing",
          "zip": "0575" },
        {
          "label": "沙县Shaxian0598",
          "name": "沙县",
          "pinyin": "shaxian",
          "zip": "0598" },
        {
          "label": "嵊泗Shengsi0580",
          "name": "嵊泗",
          "pinyin": "shengsi",
          "zip": "0580" },
        {
          "label": "嵊州Shengzhou0575",
          "name": "嵊州",
          "pinyin": "shengzhou",
          "zip": "0575" },
        {
          "label": "莘县Shenxian0635",
          "name": "莘县",
          "pinyin": "shenxian",
          "zip": "0635" },
        {
          "label": "深泽Shenze0311",
          "name": "深泽",
          "pinyin": "shenze",
          "zip": "0311" },
        {
          "label": "歙县Shexian0559",
          "name": "歙县",
          "pinyin": "shexian",
          "zip": "0559" },
        {
          "label": "射阳Sheyang0515",
          "name": "射阳",
          "pinyin": "sheyang",
          "zip": "0515" },
        {
          "label": "石城Shicheng0797",
          "name": "石城",
          "pinyin": "shicheng",
          "zip": "0797" },
        {
          "label": "石林Shilin0871",
          "name": "石林",
          "pinyin": "shilin",
          "zip": "0871" },
        {
          "label": "石狮Shishi0595",
          "name": "石狮",
          "pinyin": "shishi",
          "zip": "0595" },
        {
          "label": "石台Shitai0566",
          "name": "石台",
          "pinyin": "shitai",
          "zip": "0566" },
        {
          "label": "始兴Shixing0751",
          "name": "始兴",
          "pinyin": "shixing",
          "zip": "0751" },
        {
          "label": "石柱Shizhu023",
          "name": "石柱",
          "pinyin": "shizhu",
          "zip": "023" },
        {
          "label": "寿光Shouguang0536",
          "name": "寿光",
          "pinyin": "shouguang",
          "zip": "0536" },
        {
          "label": "寿宁Shouning0593",
          "name": "寿宁",
          "pinyin": "shouning",
          "zip": "0593" },
        {
          "label": "寿县Shouxian0564",
          "name": "寿县",
          "pinyin": "shouxian",
          "zip": "0564" },
        {
          "label": "双城Shuangcheng0451",
          "name": "双城",
          "pinyin": "shuangcheng",
          "zip": "0451" },
        {
          "label": "双流Shuangliu028",
          "name": "双流",
          "pinyin": "shuangliu",
          "zip": "028" },
        {
          "label": "舒城Shucheng0564",
          "name": "舒城",
          "pinyin": "shucheng",
          "zip": "0564" },
        {
          "label": "舒兰Shulan0423",
          "name": "舒兰",
          "pinyin": "shulan",
          "zip": "0423" },
        {
          "label": "顺昌Shunchang0599",
          "name": "顺昌",
          "pinyin": "shunchang",
          "zip": "0599" },
        {
          "label": "沭阳Shuyang0527",
          "name": "沭阳",
          "pinyin": "shuyang",
          "zip": "0527" },
        {
          "label": "泗洪Sihong0527",
          "name": "泗洪",
          "pinyin": "sihong",
          "zip": "0527" },
        {
          "label": "四会Sihui0758",
          "name": "四会",
          "pinyin": "sihui",
          "zip": "0758" },
        {
          "label": "泗水Sishui0537",
          "name": "泗水",
          "pinyin": "sishui",
          "zip": "0537" },
        {
          "label": "泗县Sixian0557",
          "name": "泗县",
          "pinyin": "sixian",
          "zip": "0557" },
        {
          "label": "泗阳Siyang0527",
          "name": "泗阳",
          "pinyin": "siyang",
          "zip": "0527" },
        {
          "label": "嵩明Songming0871",
          "name": "嵩明",
          "pinyin": "songming",
          "zip": "0871" },
        {
          "label": "松溪Songxi0599",
          "name": "松溪",
          "pinyin": "songxi",
          "zip": "0599" },
        {
          "label": "嵩县Songxian0379",
          "name": "嵩县",
          "pinyin": "songxian",
          "zip": "0379" },
        {
          "label": "松阳Songyang0578",
          "name": "松阳",
          "pinyin": "songyang",
          "zip": "0578" },
        {
          "label": "遂昌Suichang0578",
          "name": "遂昌",
          "pinyin": "suichang",
          "zip": "0578" },
        {
          "label": "遂川Suichuan0796",
          "name": "遂川",
          "pinyin": "suichuan",
          "zip": "0796" },
        {
          "label": "睢宁Suining0516",
          "name": "睢宁",
          "pinyin": "suining",
          "zip": "0516" },
        {
          "label": "濉溪Suixi0561",
          "name": "濉溪",
          "pinyin": "suixi",
          "zip": "0561" },
        {
          "label": "遂溪Suixi0759",
          "name": "遂溪",
          "pinyin": "suixi",
          "zip": "0759" },
        {
          "label": "宿松Susong0556",
          "name": "宿松",
          "pinyin": "susong",
          "zip": "0556" },
        {
          "label": "宿豫Suyu0527",
          "name": "宿豫",
          "pinyin": "suyu",
          "zip": "0527" }] },


      {
        "group": "t",
        "cities": [{
          "label": "天津Tianjin022",
          "name": "天津",
          "pinyin": "tianjin",
          "zip": "022" },
        {
          "label": "台州Taizhou0576",
          "name": "台州",
          "pinyin": "taizhou",
          "zip": "0576" },
        {
          "label": "唐山Tangshan0315",
          "name": "唐山",
          "pinyin": "tangshan",
          "zip": "0315" },
        {
          "label": "塔城地Tachengdi0901",
          "name": "塔城地",
          "pinyin": "tachengdi",
          "zip": "0901" },
        {
          "label": "泰安Taian0538",
          "name": "泰安",
          "pinyin": "taian",
          "zip": "0538" },
        {
          "label": "太原Taiyuan0351",
          "name": "太原",
          "pinyin": "taiyuan",
          "zip": "0351" },
        {
          "label": "泰州Taizhou0523",
          "name": "泰州",
          "pinyin": "taizhou",
          "zip": "0523" },
        {
          "label": "天水Tianshui0938",
          "name": "天水",
          "pinyin": "tianshui",
          "zip": "0938" },
        {
          "label": "铁岭Tieling0410",
          "name": "铁岭",
          "pinyin": "tieling",
          "zip": "0410" },
        {
          "label": "铜川Tongchuan0919",
          "name": "铜川",
          "pinyin": "tongchuan",
          "zip": "0919" },
        {
          "label": "通化Tonghua0435",
          "name": "通化",
          "pinyin": "tonghua",
          "zip": "0435" },
        {
          "label": "通辽Tongliao0475",
          "name": "通辽",
          "pinyin": "tongliao",
          "zip": "0475" },
        {
          "label": "铜陵Tongling0562",
          "name": "铜陵",
          "pinyin": "tongling",
          "zip": "0562" },
        {
          "label": "铜仁Tongren0856",
          "name": "铜仁",
          "pinyin": "tongren",
          "zip": "0856" },
        {
          "label": "吐鲁番Tulufan0995",
          "name": "吐鲁番",
          "pinyin": "tulufan",
          "zip": "0995" },
        {
          "label": "太仓Taicang0512",
          "name": "太仓",
          "pinyin": "taicang",
          "zip": "0512" },
        {
          "label": "太和Taihe0558",
          "name": "太和",
          "pinyin": "taihe",
          "zip": "0558" },
        {
          "label": "泰和Taihe0796",
          "name": "泰和",
          "pinyin": "taihe",
          "zip": "0796" },
        {
          "label": "太湖Taihu0556",
          "name": "太湖",
          "pinyin": "taihu",
          "zip": "0556" },
        {
          "label": "泰宁Taining0598",
          "name": "泰宁",
          "pinyin": "taining",
          "zip": "0598" },
        {
          "label": "台山Taishan0750",
          "name": "台山",
          "pinyin": "taishan",
          "zip": "0750" },
        {
          "label": "泰顺Taishun0577",
          "name": "泰顺",
          "pinyin": "taishun",
          "zip": "0577" },
        {
          "label": "泰兴Taixing0523",
          "name": "泰兴",
          "pinyin": "taixing",
          "zip": "0523" },
        {
          "label": "郯城Tancheng0539",
          "name": "郯城",
          "pinyin": "tancheng",
          "zip": "0539" },
        {
          "label": "唐海Tanghai0315",
          "name": "唐海",
          "pinyin": "tanghai",
          "zip": "0315" },
        {
          "label": "滕州Tengzhou0623",
          "name": "滕州",
          "pinyin": "tengzhou",
          "zip": "0623" },
        {
          "label": "天长Tianchang0550",
          "name": "天长",
          "pinyin": "tianchang",
          "zip": "0550" },
        {
          "label": "天台Tiantai0576",
          "name": "天台",
          "pinyin": "tiantai",
          "zip": "0576" },
        {
          "label": "桐城Tongcheng0556",
          "name": "桐城",
          "pinyin": "tongcheng",
          "zip": "0556" },
        {
          "label": "铜鼓Tonggu0795",
          "name": "铜鼓",
          "pinyin": "tonggu",
          "zip": "0795" },
        {
          "label": "通河Tonghe0451",
          "name": "通河",
          "pinyin": "tonghe",
          "zip": "0451" },
        {
          "label": "铜梁Tongliang023",
          "name": "铜梁",
          "pinyin": "tongliang",
          "zip": "023" },
        {
          "label": "铜陵Tongling0562",
          "name": "铜陵",
          "pinyin": "tongling",
          "zip": "0562" },
        {
          "label": "桐庐Tonglu0571",
          "name": "桐庐",
          "pinyin": "tonglu",
          "zip": "0571" },
        {
          "label": "潼南Tongnan023",
          "name": "潼南",
          "pinyin": "tongnan",
          "zip": "023" },
        {
          "label": "铜山Tongshan0516",
          "name": "铜山",
          "pinyin": "tongshan",
          "zip": "0516" },
        {
          "label": "桐乡Tongxiang0573",
          "name": "桐乡",
          "pinyin": "tongxiang",
          "zip": "0573" },
        {
          "label": "通州Tongzhou0513",
          "name": "通州",
          "pinyin": "tongzhou",
          "zip": "0513" }] },


      {
        "group": "w",
        "cities": [{
          "label": "潍坊Weifang0536",
          "name": "潍坊",
          "pinyin": "weifang",
          "zip": "0536" },
        {
          "label": "威海Weihai0631",
          "name": "威海",
          "pinyin": "weihai",
          "zip": "0631" },
        {
          "label": "武汉Wuhan027",
          "name": "武汉",
          "pinyin": "wuhan",
          "zip": "027" },
        {
          "label": "无锡Wuxi0510",
          "name": "无锡",
          "pinyin": "wuxi",
          "zip": "0510" },
        {
          "label": "渭南Weinan0913",
          "name": "渭南",
          "pinyin": "weinan",
          "zip": "0913" },
        {
          "label": "文山Wenshan0876",
          "name": "文山",
          "pinyin": "wenshan",
          "zip": "0876" },
        {
          "label": "温州Wenzhou0577",
          "name": "温州",
          "pinyin": "wenzhou",
          "zip": "0577" },
        {
          "label": "乌海Wuhai0473",
          "name": "乌海",
          "pinyin": "wuhai",
          "zip": "0473" },
        {
          "label": "芜湖Wuhu0553",
          "name": "芜湖",
          "pinyin": "wuhu",
          "zip": "0553" },
        {
          "label": "乌兰察布Wulanchabu0474",
          "name": "乌兰察布",
          "pinyin": "wulanchabu",
          "zip": "0474" },
        {
          "label": "乌鲁木齐Wulumuqi0991",
          "name": "乌鲁木齐",
          "pinyin": "wulumuqi",
          "zip": "0991" },
        {
          "label": "武威Wuwei0935",
          "name": "武威",
          "pinyin": "wuwei",
          "zip": "0935" },
        {
          "label": "吴忠Wuzhong0953",
          "name": "吴忠",
          "pinyin": "wuzhong",
          "zip": "0953" },
        {
          "label": "梧州Wuzhou0774",
          "name": "梧州",
          "pinyin": "wuzhou",
          "zip": "0774" },
        {
          "label": "瓦房店Wafangdian0411",
          "name": "瓦房店",
          "pinyin": "wafangdian",
          "zip": "0411" },
        {
          "label": "万安Wanan0796",
          "name": "万安",
          "pinyin": "wanan",
          "zip": "0796" },
        {
          "label": "望城Wangcheng0731",
          "name": "望城",
          "pinyin": "wangcheng",
          "zip": "0731" },
        {
          "label": "望江Wangjiang0556",
          "name": "望江",
          "pinyin": "wangjiang",
          "zip": "0556" },
        {
          "label": "万年Wannian0793",
          "name": "万年",
          "pinyin": "wannian",
          "zip": "0793" },
        {
          "label": "万载Wanzai0795",
          "name": "万载",
          "pinyin": "wanzai",
          "zip": "0795" },
        {
          "label": "微山Weishan0537",
          "name": "微山",
          "pinyin": "weishan",
          "zip": "0537" },
        {
          "label": "文成Wencheng0577",
          "name": "文成",
          "pinyin": "wencheng",
          "zip": "0577" },
        {
          "label": "文登Wendeng0631",
          "name": "文登",
          "pinyin": "wendeng",
          "zip": "0631" },
        {
          "label": "翁源Wengyuan0751",
          "name": "翁源",
          "pinyin": "wengyuan",
          "zip": "0751" },
        {
          "label": "温岭Wenling0576",
          "name": "温岭",
          "pinyin": "wenling",
          "zip": "0576" },
        {
          "label": "汶上Wenshang0537",
          "name": "汶上",
          "pinyin": "wenshang",
          "zip": "0537" },
        {
          "label": "温县Wenxian0391",
          "name": "温县",
          "pinyin": "wenxian",
          "zip": "0391" },
        {
          "label": "涡阳Woyang0558",
          "name": "涡阳",
          "pinyin": "woyang",
          "zip": "0558" },
        {
          "label": "五常Wuchang0451",
          "name": "五常",
          "pinyin": "wuchang",
          "zip": "0451" },
        {
          "label": "武城Wucheng0534",
          "name": "武城",
          "pinyin": "wucheng",
          "zip": "0534" },
        {
          "label": "吴川Wuchuan0759",
          "name": "吴川",
          "pinyin": "wuchuan",
          "zip": "0759" },
        {
          "label": "无棣Wudi0543",
          "name": "无棣",
          "pinyin": "wudi",
          "zip": "0543" },
        {
          "label": "五河Wuhe0552",
          "name": "五河",
          "pinyin": "wuhe",
          "zip": "0552" },
        {
          "label": "芜湖Wuhu0553",
          "name": "芜湖",
          "pinyin": "wuhu",
          "zip": "0553" },
        {
          "label": "五华Wuhua0753",
          "name": "五华",
          "pinyin": "wuhua",
          "zip": "0753" },
        {
          "label": "无极Wuji0311",
          "name": "无极",
          "pinyin": "wuji",
          "zip": "0311" },
        {
          "label": "吴江Wujiang0512",
          "name": "吴江",
          "pinyin": "wujiang",
          "zip": "0512" },
        {
          "label": "五莲Wulian0633",
          "name": "五莲",
          "pinyin": "wulian",
          "zip": "0633" },
        {
          "label": "武隆Wulong023",
          "name": "武隆",
          "pinyin": "wulong",
          "zip": "023" },
        {
          "label": "武鸣Wuming0771",
          "name": "武鸣",
          "pinyin": "wuming",
          "zip": "0771" },
        {
          "label": "武宁Wuning0792",
          "name": "武宁",
          "pinyin": "wuning",
          "zip": "0792" },
        {
          "label": "武平Wuping0597",
          "name": "武平",
          "pinyin": "wuping",
          "zip": "0597" },
        {
          "label": "巫山Wushan023",
          "name": "巫山",
          "pinyin": "wushan",
          "zip": "023" },
        {
          "label": "无为Wuwei0565",
          "name": "无为",
          "pinyin": "wuwei",
          "zip": "0565" },
        {
          "label": "巫溪Wuxi023",
          "name": "巫溪",
          "pinyin": "wuxi",
          "zip": "023" },
        {
          "label": "武义Wuyi0579",
          "name": "武义",
          "pinyin": "wuyi",
          "zip": "0579" },
        {
          "label": "武夷山Wuyishan0599",
          "name": "武夷山",
          "pinyin": "wuyishan",
          "zip": "0599" },
        {
          "label": "婺源Wuyuan0793",
          "name": "婺源",
          "pinyin": "wuyuan",
          "zip": "0793" },
        {
          "label": "武陟Wuzhi0391",
          "name": "武陟",
          "pinyin": "wuzhi",
          "zip": "0391" }] },


      {
        "group": "x",
        "cities": [{
          "label": "厦门Xiamen0592",
          "name": "厦门",
          "pinyin": "xiamen",
          "zip": "0592" },
        {
          "label": "西安Xian029",
          "name": "西安",
          "pinyin": "xian",
          "zip": "029" },
        {
          "label": "许昌Xuchang0374",
          "name": "许昌",
          "pinyin": "xuchang",
          "zip": "0374" },
        {
          "label": "徐州Xuzhou0516",
          "name": "徐州",
          "pinyin": "xuzhou",
          "zip": "0516" },
        {
          "label": "襄樊Xiangfan0710",
          "name": "襄樊",
          "pinyin": "xiangfan",
          "zip": "0710" },
        {
          "label": "湘潭Xiangtan0732",
          "name": "湘潭",
          "pinyin": "xiangtan",
          "zip": "0732" },
        {
          "label": "湘西Xiangxi0743",
          "name": "湘西",
          "pinyin": "xiangxi",
          "zip": "0743" },
        {
          "label": "咸宁Xianning0715",
          "name": "咸宁",
          "pinyin": "xianning",
          "zip": "0715" },
        {
          "label": "咸阳Xianyang029",
          "name": "咸阳",
          "pinyin": "xianyang",
          "zip": "029" },
        {
          "label": "孝感Xiaogan0712",
          "name": "孝感",
          "pinyin": "xiaogan",
          "zip": "0712" },
        {
          "label": "锡林郭勒盟Xilinguolemeng0479",
          "name": "锡林郭勒盟",
          "pinyin": "xilinguolemeng",
          "zip": "0479" },
        {
          "label": "兴安盟Xinganmeng0482",
          "name": "兴安盟",
          "pinyin": "xinganmeng",
          "zip": "0482" },
        {
          "label": "邢台Xingtai0319",
          "name": "邢台",
          "pinyin": "xingtai",
          "zip": "0319" },
        {
          "label": "西宁Xining0971",
          "name": "西宁",
          "pinyin": "xining",
          "zip": "0971" },
        {
          "label": "新乡Xinxiang0373",
          "name": "新乡",
          "pinyin": "xinxiang",
          "zip": "0373" },
        {
          "label": "信阳Xinyang0376",
          "name": "信阳",
          "pinyin": "xinyang",
          "zip": "0376" },
        {
          "label": "新余Xinyu0790",
          "name": "新余",
          "pinyin": "xinyu",
          "zip": "0790" },
        {
          "label": "忻州Xinzhou0350",
          "name": "忻州",
          "pinyin": "xinzhou",
          "zip": "0350" },
        {
          "label": "西双版纳Xishuangbanna0691",
          "name": "西双版纳",
          "pinyin": "xishuangbanna",
          "zip": "0691" },
        {
          "label": "宣城Xuancheng0563",
          "name": "宣城",
          "pinyin": "xuancheng",
          "zip": "0563" },
        {
          "label": "峡江Xiajiang0796",
          "name": "峡江",
          "pinyin": "xiajiang",
          "zip": "0796" },
        {
          "label": "夏津Xiajin0534",
          "name": "夏津",
          "pinyin": "xiajin",
          "zip": "0534" },
        {
          "label": "象山Xiangshan0574",
          "name": "象山",
          "pinyin": "xiangshan",
          "zip": "0574" },
        {
          "label": "响水Xiangshui0515",
          "name": "响水",
          "pinyin": "xiangshui",
          "zip": "0515" },
        {
          "label": "仙居Xianju0576",
          "name": "仙居",
          "pinyin": "xianju",
          "zip": "0576" },
        {
          "label": "仙游Xianyou0594",
          "name": "仙游",
          "pinyin": "xianyou",
          "zip": "0594" },
        {
          "label": "萧县Xiaoxian0557",
          "name": "萧县",
          "pinyin": "xiaoxian",
          "zip": "0557" },
        {
          "label": "霞浦Xiapu0593",
          "name": "霞浦",
          "pinyin": "xiapu",
          "zip": "0593" },
        {
          "label": "息烽Xifeng0851",
          "name": "息烽",
          "pinyin": "xifeng",
          "zip": "0851" },
        {
          "label": "新安Xinan0379",
          "name": "新安",
          "pinyin": "xinan",
          "zip": "0379" },
        {
          "label": "新昌Xinchang0575",
          "name": "新昌",
          "pinyin": "xinchang",
          "zip": "0575" },
        {
          "label": "信丰Xinfeng0797",
          "name": "信丰",
          "pinyin": "xinfeng",
          "zip": "0797" },
        {
          "label": "新丰Xinfeng0751",
          "name": "新丰",
          "pinyin": "xinfeng",
          "zip": "0751" },
        {
          "label": "新干Xingan0796",
          "name": "新干",
          "pinyin": "xingan",
          "zip": "0796" },
        {
          "label": "兴国Xingguo0797",
          "name": "兴国",
          "pinyin": "xingguo",
          "zip": "0797" },
        {
          "label": "兴化Xinghua0523",
          "name": "兴化",
          "pinyin": "xinghua",
          "zip": "0523" },
        {
          "label": "兴宁Xingning0753",
          "name": "兴宁",
          "pinyin": "xingning",
          "zip": "0753" },
        {
          "label": "行唐Xingtang0311",
          "name": "行唐",
          "pinyin": "xingtang",
          "zip": "0311" },
        {
          "label": "荥阳Xingyang0371",
          "name": "荥阳",
          "pinyin": "xingyang",
          "zip": "0371" },
        {
          "label": "星子Xingzi0792",
          "name": "星子",
          "pinyin": "xingzi",
          "zip": "0792" },
        {
          "label": "辛集Xinji0311",
          "name": "辛集",
          "pinyin": "xinji",
          "zip": "0311" },
        {
          "label": "新建Xinjian0791",
          "name": "新建",
          "pinyin": "xinjian",
          "zip": "0791" },
        {
          "label": "新津Xinjin028",
          "name": "新津",
          "pinyin": "xinjin",
          "zip": "028" },
        {
          "label": "新乐Xinle0311",
          "name": "新乐",
          "pinyin": "xinle",
          "zip": "0311" },
        {
          "label": "新民Xinmin024",
          "name": "新民",
          "pinyin": "xinmin",
          "zip": "024" },
        {
          "label": "新密Xinmi0371",
          "name": "新密",
          "pinyin": "xinmi",
          "zip": "0371" },
        {
          "label": "新泰Xintai0538",
          "name": "新泰",
          "pinyin": "xintai",
          "zip": "0538" },
        {
          "label": "新兴Xinxing0766",
          "name": "新兴",
          "pinyin": "xinxing",
          "zip": "0766" },
        {
          "label": "新沂Xinyi0516",
          "name": "新沂",
          "pinyin": "xinyi",
          "zip": "0516" },
        {
          "label": "信宜Xinyi0668",
          "name": "信宜",
          "pinyin": "xinyi",
          "zip": "0668" },
        {
          "label": "新郑Xinzheng0371",
          "name": "新郑",
          "pinyin": "xinzheng",
          "zip": "0371" },
        {
          "label": "休宁Xiuning0559",
          "name": "休宁",
          "pinyin": "xiuning",
          "zip": "0559" },
        {
          "label": "秀山Xiushan023",
          "name": "秀山",
          "pinyin": "xiushan",
          "zip": "023" },
        {
          "label": "修水Xiushui0792",
          "name": "修水",
          "pinyin": "xiushui",
          "zip": "0792" },
        {
          "label": "修文Xiuwen0851",
          "name": "修文",
          "pinyin": "xiuwen",
          "zip": "0851" },
        {
          "label": "修武Xiuwu0391",
          "name": "修武",
          "pinyin": "xiuwu",
          "zip": "0391" },
        {
          "label": "寻甸Xundian0871",
          "name": "寻甸",
          "pinyin": "xundian",
          "zip": "0871" },
        {
          "label": "寻乌Xunwu0797",
          "name": "寻乌",
          "pinyin": "xunwu",
          "zip": "0797" },
        {
          "label": "徐闻Xuwen0759",
          "name": "徐闻",
          "pinyin": "xuwen",
          "zip": "0759" },
        {
          "label": "盱眙Xuyi0517",
          "name": "盱眙",
          "pinyin": "xuyi",
          "zip": "0517" }] },


      {
        "group": "y",
        "cities": [{
          "label": "扬州Yangzhou0514",
          "name": "扬州",
          "pinyin": "yangzhou",
          "zip": "0514" },
        {
          "label": "烟台Yantai0535",
          "name": "烟台",
          "pinyin": "yantai",
          "zip": "0535" },
        {
          "label": "雅安Yaan0835",
          "name": "雅安",
          "pinyin": "yaan",
          "zip": "0835" },
        {
          "label": "延安Yanan0911",
          "name": "延安",
          "pinyin": "yanan",
          "zip": "0911" },
        {
          "label": "延边Yanbian0433",
          "name": "延边",
          "pinyin": "yanbian",
          "zip": "0433" },
        {
          "label": "盐城Yancheng0515",
          "name": "盐城",
          "pinyin": "yancheng",
          "zip": "0515" },
        {
          "label": "阳江Yangjiang0662",
          "name": "阳江",
          "pinyin": "yangjiang",
          "zip": "0662" },
        {
          "label": "阳泉Yangquan0353",
          "name": "阳泉",
          "pinyin": "yangquan",
          "zip": "0353" },
        {
          "label": "宜宾Yibin0831",
          "name": "宜宾",
          "pinyin": "yibin",
          "zip": "0831" },
        {
          "label": "宜昌Yichang0717",
          "name": "宜昌",
          "pinyin": "yichang",
          "zip": "0717" },
        {
          "label": "伊春Yichun0458",
          "name": "伊春",
          "pinyin": "yichun",
          "zip": "0458" },
        {
          "label": "宜春Yichun0795",
          "name": "宜春",
          "pinyin": "yichun",
          "zip": "0795" },
        {
          "label": "伊犁哈萨克Yilihasake0999",
          "name": "伊犁哈萨克",
          "pinyin": "yilihasake",
          "zip": "0999" },
        {
          "label": "银川Yinchuan0951",
          "name": "银川",
          "pinyin": "yinchuan",
          "zip": "0951" },
        {
          "label": "营口Yingkou0417",
          "name": "营口",
          "pinyin": "yingkou",
          "zip": "0417" },
        {
          "label": "鹰潭Yingtan0701",
          "name": "鹰潭",
          "pinyin": "yingtan",
          "zip": "0701" },
        {
          "label": "益阳Yiyang0737",
          "name": "益阳",
          "pinyin": "yiyang",
          "zip": "0737" },
        {
          "label": "永州Yongzhou0746",
          "name": "永州",
          "pinyin": "yongzhou",
          "zip": "0746" },
        {
          "label": "岳阳Yueyang0730",
          "name": "岳阳",
          "pinyin": "yueyang",
          "zip": "0730" },
        {
          "label": "玉林Yulin0775",
          "name": "玉林",
          "pinyin": "yulin",
          "zip": "0775" },
        {
          "label": "榆林Yulin0912",
          "name": "榆林",
          "pinyin": "yulin",
          "zip": "0912" },
        {
          "label": "运城Yuncheng0359",
          "name": "运城",
          "pinyin": "yuncheng",
          "zip": "0359" },
        {
          "label": "云浮Yunfu0766",
          "name": "云浮",
          "pinyin": "yunfu",
          "zip": "0766" },
        {
          "label": "玉树Yushu0976",
          "name": "玉树",
          "pinyin": "yushu",
          "zip": "0976" },
        {
          "label": "玉溪Yuxi0877",
          "name": "玉溪",
          "pinyin": "yuxi",
          "zip": "0877" },
        {
          "label": "阳春Yangchun0662",
          "name": "阳春",
          "pinyin": "yangchun",
          "zip": "0662" },
        {
          "label": "阳东Yangdong0662",
          "name": "阳东",
          "pinyin": "yangdong",
          "zip": "0662" },
        {
          "label": "阳谷Yanggu0635",
          "name": "阳谷",
          "pinyin": "yanggu",
          "zip": "0635" },
        {
          "label": "阳山Yangshan0763",
          "name": "阳山",
          "pinyin": "yangshan",
          "zip": "0763" },
        {
          "label": "阳信Yangxin0543",
          "name": "阳信",
          "pinyin": "yangxin",
          "zip": "0543" },
        {
          "label": "阳西Yangxi0662",
          "name": "阳西",
          "pinyin": "yangxi",
          "zip": "0662" },
        {
          "label": "扬中Yangzhong0511",
          "name": "扬中",
          "pinyin": "yangzhong",
          "zip": "0511" },
        {
          "label": "偃师Yanshi0379",
          "name": "偃师",
          "pinyin": "yanshi",
          "zip": "0379" },
        {
          "label": "延寿Yanshou0451",
          "name": "延寿",
          "pinyin": "yanshou",
          "zip": "0451" },
        {
          "label": "兖州Yanzhou0537",
          "name": "兖州",
          "pinyin": "yanzhou",
          "zip": "0537" },
        {
          "label": "伊川Yichuan0379",
          "name": "伊川",
          "pinyin": "yichuan",
          "zip": "0379" },
        {
          "label": "宜丰Yifeng0795",
          "name": "宜丰",
          "pinyin": "yifeng",
          "zip": "0795" },
        {
          "label": "宜黄Yihuang0794",
          "name": "宜黄",
          "pinyin": "yihuang",
          "zip": "0794" },
        {
          "label": "依兰Yilan0451",
          "name": "依兰",
          "pinyin": "yilan",
          "zip": "0451" },
        {
          "label": "宜良Yiliang0871",
          "name": "宜良",
          "pinyin": "yiliang",
          "zip": "0871" },
        {
          "label": "沂南Yinan0539",
          "name": "沂南",
          "pinyin": "yinan",
          "zip": "0539" },
        {
          "label": "英德Yingde0763",
          "name": "英德",
          "pinyin": "yingde",
          "zip": "0763" },
        {
          "label": "颍上Yingshang0558",
          "name": "颍上",
          "pinyin": "yingshang",
          "zip": "0558" },
        {
          "label": "沂水Yishui0539",
          "name": "沂水",
          "pinyin": "yishui",
          "zip": "0539" },
        {
          "label": "义乌Yiwu0579",
          "name": "义乌",
          "pinyin": "yiwu",
          "zip": "0579" },
        {
          "label": "黟县Yixian0559",
          "name": "黟县",
          "pinyin": "yixian",
          "zip": "0559" },
        {
          "label": "宜兴Yixing0510",
          "name": "宜兴",
          "pinyin": "yixing",
          "zip": "0510" },
        {
          "label": "弋阳Yiyang0793",
          "name": "弋阳",
          "pinyin": "yiyang",
          "zip": "0793" },
        {
          "label": "宜阳Yiyang0379",
          "name": "宜阳",
          "pinyin": "yiyang",
          "zip": "0379" },
        {
          "label": "沂源Yiyuan0533",
          "name": "沂源",
          "pinyin": "yiyuan",
          "zip": "0533" },
        {
          "label": "仪征Yizheng0514",
          "name": "仪征",
          "pinyin": "yizheng",
          "zip": "0514" },
        {
          "label": "永安Yongan0598",
          "name": "永安",
          "pinyin": "yongan",
          "zip": "0598" },
        {
          "label": "永川Yongchuan023",
          "name": "永川",
          "pinyin": "yongchuan",
          "zip": "023" },
        {
          "label": "永春Yongchun0595",
          "name": "永春",
          "pinyin": "yongchun",
          "zip": "0595" },
        {
          "label": "永登Yongdeng0931",
          "name": "永登",
          "pinyin": "yongdeng",
          "zip": "0931" },
        {
          "label": "永定Yongding0597",
          "name": "永定",
          "pinyin": "yongding",
          "zip": "0597" },
        {
          "label": "永丰Yongfeng0796",
          "name": "永丰",
          "pinyin": "yongfeng",
          "zip": "0796" },
        {
          "label": "永吉Yongji0423",
          "name": "永吉",
          "pinyin": "yongji",
          "zip": "0423" },
        {
          "label": "永嘉Yongjia0577",
          "name": "永嘉",
          "pinyin": "yongjia",
          "zip": "0577" },
        {
          "label": "永康Yongkang0579",
          "name": "永康",
          "pinyin": "yongkang",
          "zip": "0579" },
        {
          "label": "邕宁Yongning0771",
          "name": "邕宁",
          "pinyin": "yongning",
          "zip": "0771" },
        {
          "label": "永泰Yongtai0591",
          "name": "永泰",
          "pinyin": "yongtai",
          "zip": "0591" },
        {
          "label": "永新Yongxin0796",
          "name": "永新",
          "pinyin": "yongxin",
          "zip": "0796" },
        {
          "label": "永修Yongxiu0792",
          "name": "永修",
          "pinyin": "yongxiu",
          "zip": "0792" },
        {
          "label": "尤溪Youxi0598",
          "name": "尤溪",
          "pinyin": "youxi",
          "zip": "0598" },
        {
          "label": "酉阳Youyang023",
          "name": "酉阳",
          "pinyin": "youyang",
          "zip": "023" },
        {
          "label": "元氏Yuanshi0311",
          "name": "元氏",
          "pinyin": "yuanshi",
          "zip": "0311" },
        {
          "label": "禹城Yucheng0534",
          "name": "禹城",
          "pinyin": "yucheng",
          "zip": "0534" },
        {
          "label": "于都Yudu0797",
          "name": "于都",
          "pinyin": "yudu",
          "zip": "0797" },
        {
          "label": "岳西Yuexi0556",
          "name": "岳西",
          "pinyin": "yuexi",
          "zip": "0556" },
        {
          "label": "余干Yugan0793",
          "name": "余干",
          "pinyin": "yugan",
          "zip": "0793" },
        {
          "label": "玉环Yuhuan0576",
          "name": "玉环",
          "pinyin": "yuhuan",
          "zip": "0576" },
        {
          "label": "余江Yujiang0701",
          "name": "余江",
          "pinyin": "yujiang",
          "zip": "0701" },
        {
          "label": "郁南Yunan0766",
          "name": "郁南",
          "pinyin": "yunan",
          "zip": "0766" },
        {
          "label": "云安Yunan0766",
          "name": "云安",
          "pinyin": "yunan",
          "zip": "0766" },
        {
          "label": "郓城Yuncheng0530",
          "name": "郓城",
          "pinyin": "yuncheng",
          "zip": "0530" },
        {
          "label": "云和Yunhe0578",
          "name": "云和",
          "pinyin": "yunhe",
          "zip": "0578" },
        {
          "label": "云霄Yunxiao0596",
          "name": "云霄",
          "pinyin": "yunxiao",
          "zip": "0596" },
        {
          "label": "云阳Yunyang023",
          "name": "云阳",
          "pinyin": "yunyang",
          "zip": "023" },
        {
          "label": "玉山Yushan0793",
          "name": "玉山",
          "pinyin": "yushan",
          "zip": "0793" },
        {
          "label": "榆树Yushu0431",
          "name": "榆树",
          "pinyin": "yushu",
          "zip": "0431" },
        {
          "label": "鱼台Yutai0537",
          "name": "鱼台",
          "pinyin": "yutai",
          "zip": "0537" },
        {
          "label": "玉田Yutian0315",
          "name": "玉田",
          "pinyin": "yutian",
          "zip": "0315" },
        {
          "label": "余姚Yuyao0574",
          "name": "余姚",
          "pinyin": "yuyao",
          "zip": "0574" },
        {
          "label": "榆中Yuzhong0931",
          "name": "榆中",
          "pinyin": "yuzhong",
          "zip": "0931" }] },


      {
        "group": "z",
        "cities": [{
          "label": "漳州Zhangzhou0596",
          "name": "漳州",
          "pinyin": "zhangzhou",
          "zip": "0596" },
        {
          "label": "郑州Zhengzhou0371",
          "name": "郑州",
          "pinyin": "zhengzhou",
          "zip": "0371" },
        {
          "label": "中山Zhongshan0760",
          "name": "中山",
          "pinyin": "zhongshan",
          "zip": "0760" },
        {
          "label": "珠海Zhuhai0756",
          "name": "珠海",
          "pinyin": "zhuhai",
          "zip": "0756" },
        {
          "label": "枣庄Zaozhuang0623",
          "name": "枣庄",
          "pinyin": "zaozhuang",
          "zip": "0623" },
        {
          "label": "张家界Zhangjiajie0744",
          "name": "张家界",
          "pinyin": "zhangjiajie",
          "zip": "0744" },
        {
          "label": "张家口Zhangjiakou0313",
          "name": "张家口",
          "pinyin": "zhangjiakou",
          "zip": "0313" },
        {
          "label": "张掖Zhangye0936",
          "name": "张掖",
          "pinyin": "zhangye",
          "zip": "0936" },
        {
          "label": "湛江Zhanjiang0759",
          "name": "湛江",
          "pinyin": "zhanjiang",
          "zip": "0759" },
        {
          "label": "肇庆Zhaoqing0758",
          "name": "肇庆",
          "pinyin": "zhaoqing",
          "zip": "0758" },
        {
          "label": "昭通Zhaotong0870",
          "name": "昭通",
          "pinyin": "zhaotong",
          "zip": "0870" },
        {
          "label": "镇江Zhenjiang0511",
          "name": "镇江",
          "pinyin": "zhenjiang",
          "zip": "0511" },
        {
          "label": "中卫Zhongwei0955",
          "name": "中卫",
          "pinyin": "zhongwei",
          "zip": "0955" },
        {
          "label": "周口Zhoukou0394",
          "name": "周口",
          "pinyin": "zhoukou",
          "zip": "0394" },
        {
          "label": "舟山Zhoushan0580",
          "name": "舟山",
          "pinyin": "zhoushan",
          "zip": "0580" },
        {
          "label": "驻马店Zhumadian0396",
          "name": "驻马店",
          "pinyin": "zhumadian",
          "zip": "0396" },
        {
          "label": "株洲Zhuzhou0731",
          "name": "株洲",
          "pinyin": "zhuzhou",
          "zip": "0731" },
        {
          "label": "淄博Zibo0533",
          "name": "淄博",
          "pinyin": "zibo",
          "zip": "0533" },
        {
          "label": "自贡Zigong0813",
          "name": "自贡",
          "pinyin": "zigong",
          "zip": "0813" },
        {
          "label": "资阳Ziyang028",
          "name": "资阳",
          "pinyin": "ziyang",
          "zip": "028" },
        {
          "label": "遵义Zunyi0852",
          "name": "遵义",
          "pinyin": "zunyi",
          "zip": "0852" },
        {
          "label": "赞皇Zanhuang0311",
          "name": "赞皇",
          "pinyin": "zanhuang",
          "zip": "0311" },
        {
          "label": "增城Zengcheng020",
          "name": "增城",
          "pinyin": "zengcheng",
          "zip": "020" },
        {
          "label": "张家港Zhangjiagang0512",
          "name": "张家港",
          "pinyin": "zhangjiagang",
          "zip": "0512" },
        {
          "label": "漳平Zhangping0597",
          "name": "漳平",
          "pinyin": "zhangping",
          "zip": "0597" },
        {
          "label": "漳浦Zhangpu0596",
          "name": "漳浦",
          "pinyin": "zhangpu",
          "zip": "0596" },
        {
          "label": "章丘Zhangqiu0531",
          "name": "章丘",
          "pinyin": "zhangqiu",
          "zip": "0531" },
        {
          "label": "樟树Zhangshu0795",
          "name": "樟树",
          "pinyin": "zhangshu",
          "zip": "0795" },
        {
          "label": "沾化Zhanhua0543",
          "name": "沾化",
          "pinyin": "zhanhua",
          "zip": "0543" },
        {
          "label": "赵县Zhaoxian0311",
          "name": "赵县",
          "pinyin": "zhaoxian",
          "zip": "0311" },
        {
          "label": "招远Zhaoyuan0535",
          "name": "招远",
          "pinyin": "zhaoyuan",
          "zip": "0535" },
        {
          "label": "正定Zhengding0311",
          "name": "正定",
          "pinyin": "zhengding",
          "zip": "0311" },
        {
          "label": "政和Zhenghe0599",
          "name": "政和",
          "pinyin": "zhenghe",
          "zip": "0599" },
        {
          "label": "柘荣Zherong0593",
          "name": "柘荣",
          "pinyin": "zherong",
          "zip": "0593" },
        {
          "label": "中牟Zhongmou0371",
          "name": "中牟",
          "pinyin": "zhongmou",
          "zip": "0371" },
        {
          "label": "忠县Zhongxian023",
          "name": "忠县",
          "pinyin": "zhongxian",
          "zip": "023" },
        {
          "label": "周宁Zhouning0593",
          "name": "周宁",
          "pinyin": "zhouning",
          "zip": "0593" },
        {
          "label": "周至Zhouzhi029",
          "name": "周至",
          "pinyin": "zhouzhi",
          "zip": "029" },
        {
          "label": "庄河Zhuanghe0411",
          "name": "庄河",
          "pinyin": "zhuanghe",
          "zip": "0411" },
        {
          "label": "诸城Zhucheng0536",
          "name": "诸城",
          "pinyin": "zhucheng",
          "zip": "0536" },
        {
          "label": "诸暨Zhuji0575",
          "name": "诸暨",
          "pinyin": "zhuji",
          "zip": "0575" },
        {
          "label": "紫金Zijin0762",
          "name": "紫金",
          "pinyin": "zijin",
          "zip": "0762" },
        {
          "label": "资溪Zixi0794",
          "name": "资溪",
          "pinyin": "zixi",
          "zip": "0794" },
        {
          "label": "邹城Zoucheng0537",
          "name": "邹城",
          "pinyin": "zoucheng",
          "zip": "0537" },
        {
          "label": "邹平Zouping0543",
          "name": "邹平",
          "pinyin": "zouping",
          "zip": "0543" },
        {
          "label": "遵化Zunhua0315",
          "name": "遵化",
          "pinyin": "zunhua",
          "zip": "0315" }] }],




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
    selectCity: function selectCity(city) {
      this.$store.commit("setModifyAddress", {
        id: this.modifyAddress.id,
        addr: this.modifyAddress.addr,
        city: city });

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

/***/ 302:
/*!************************************************************************************************************!*\
  !*** C:/Users/lvniao/Desktop/projects/iot/demo/components/CitySelect.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./CitySelect.vue?vue&type=style&index=0&lang=css& */ 303);
/* harmony import */ var _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_D_Programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_CitySelect_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 303:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lvniao/Desktop/projects/iot/demo/components/CitySelect.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[296,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/CitySelect.js.map