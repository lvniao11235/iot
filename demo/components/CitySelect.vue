<template>
	<scroll-view :scroll-y="true" :scroll-top="scrollTop" class="city-select">
		<navbar :back="true" title="选择城市"></navbar>
		<view class="search">
			<input placeholder="输入城市名称或拼音查询" @input="search" />
		</view>
		<view class="location address-item">{{currentCity}}<label>IP定位</label></view>
		<view v-if="!showSearch">
			<view class="city-category" v-for="group in cities" :key="group.group">
				<view class="category-title address-item" :id="group.group">{{group.group.toUpperCase()}}</view>
				<view @click="selectCity(city.city_name, city.city_code)" class="address-item address-list-item"
					v-for="city in group.cities" :key="city.pinyin">{{city.city_name}}</view>
			</view>
			<view class="city-index" :style="{height:(cities.length * 15) + 'px'}">
				<view @click="gotoCategory('#')">#</view>
				<view @click="gotoCategory(group.group)" 
					v-for="group in cities" :key="group.group">{{group.group.toUpperCase()}}</view>
			</view>
		</view>
		<view class="search-result" v-else>
			<view @click="selectCity(city.city_name)" class="address-item address-list-item"
				v-for="city in searchResult" :key="city.pinyin">{{city.city_name}}</view>
		</view>
	</scroll-view>
</template>

<script>
	//import {cities} from '../static/cities.js'
	import { mapState, mapMutations } from 'vuex';
	export default {
		data() {
			return {
					cities: [{
						"group": "a",
						"cities": [{
								"id": 2,
								"pid": 0,
								"city_code": "",
								"city_name": "安徽",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Anhui"
							}, {
								"id": 33,
								"pid": 0,
								"city_code": "101330101",
								"city_name": "澳门",
								"post_code": "999078",
								"area_code": "+853",
								"ctime": "2019-07-11 17:03:39",
								"pinyin": "Aomen"
							}, {
								"id": 35,
								"pid": 2,
								"city_code": "101220601",
								"city_name": "安庆",
								"post_code": "246000",
								"area_code": "0556",
								"ctime": "2019-07-11 17:30:10",
								"pinyin": "Anqing"
							}, {
								"id": 111,
								"pid": 7,
								"city_code": "101260301",
								"city_name": "安顺",
								"post_code": "561000",
								"area_code": "0851",
								"ctime": "2019-07-11 17:30:45",
								"pinyin": "Anshun"
							}, {
								"id": 151,
								"pid": 10,
								"city_code": "101180201",
								"city_name": "安阳市",
								"post_code": "455000",
								"area_code": "0372",
								"ctime": "2019-07-11 17:30:54",
								"pinyin": "Anyang"
							}, {
								"id": 245,
								"pid": 17,
								"city_code": "101070301",
								"city_name": "鞍山市",
								"post_code": "114000",
								"area_code": "0412",
								"ctime": "2019-07-11 16:24:00",
								"pinyin": "Anshan"
							}, {
								"id": 258,
								"pid": 18,
								"city_code": "101081213",
								"city_name": "阿拉善盟",
								"post_code": "750306",
								"area_code": "0483",
								"ctime": "2019-07-11 17:04:03",
								"pinyin": "Alashanmeng"
							}, {
								"id": 311,
								"pid": 23,
								"city_code": "101110701",
								"city_name": "安康市",
								"post_code": "725000",
								"area_code": "0915",
								"ctime": "2019-07-11 17:32:09",
								"pinyin": "Ankang"
							}, {
								"id": 323,
								"pid": 25,
								"city_code": "101271901",
								"city_name": "阿坝",
								"post_code": "624000",
								"area_code": "0837",
								"ctime": "2019-07-11 17:04:11",
								"pinyin": "Aba"
							}, {
								"id": 344,
								"pid": 27,
								"city_code": "101140701",
								"city_name": "阿里",
								"post_code": "859000",
								"area_code": "0897",
								"ctime": "2019-07-11 17:04:15",
								"pinyin": "Ali"
							}, {
								"id": 351,
								"pid": 28,
								"city_code": "101130801",
								"city_name": "阿克苏市",
								"post_code": "843000",
								"area_code": "0997",
								"ctime": "2019-07-11 17:04:17",
								"pinyin": "Akesu"
							}, {
								"id": 352,
								"pid": 28,
								"city_code": "101130701",
								"city_name": "阿拉尔市",
								"post_code": "843300",
								"area_code": "0997",
								"ctime": "2019-07-11 17:32:24",
								"pinyin": "Alaer"
							}
						]
					}, {
						"group": "b",
						"cities": [{
								"id": 1,
								"pid": 0,
								"city_code": "101010100",
								"city_name": "北京",
								"post_code": "100000",
								"area_code": "010",
								"ctime": "2019-07-11 17:30:06",
								"pinyin": "Beijing"
							}, {
								"id": 36,
								"pid": 2,
								"city_code": "101220201",
								"city_name": "蚌埠",
								"post_code": "233000",
								"area_code": "0552",
								"ctime": "2019-07-11 17:30:10",
								"pinyin": "Bangbu"
							}, {
								"id": 50,
								"pid": 2,
								"city_code": "101220901",
								"city_name": "亳州",
								"post_code": "236800",
								"area_code": "0558",
								"ctime": "2019-07-11 17:30:12",
								"pinyin": "Bozhou"
							}, {
								"id": 62,
								"pid": 4,
								"city_code": "101161301",
								"city_name": "白银市",
								"post_code": "730900",
								"area_code": "0943",
								"ctime": "2019-07-11 17:30:14",
								"pinyin": "Baiyin"
							}, {
								"id": 98,
								"pid": 6,
								"city_code": "101301001",
								"city_name": "百色",
								"post_code": "533000",
								"area_code": "0776",
								"ctime": "2019-07-11 17:30:35",
								"pinyin": "Baise"
							}, {
								"id": 99,
								"pid": 6,
								"city_code": "101301301",
								"city_name": "北海",
								"post_code": "536000",
								"area_code": "0779",
								"ctime": "2019-07-11 17:30:37",
								"pinyin": "Beihai"
							}, {
								"id": 112,
								"pid": 7,
								"city_code": "101260701",
								"city_name": "毕节",
								"post_code": "551700",
								"area_code": "0857",
								"ctime": "2019-07-11 17:30:45",
								"pinyin": "Bijie"
							}, {
								"id": 121,
								"pid": 8,
								"city_code": "101310207",
								"city_name": "白沙县",
								"post_code": "572800",
								"area_code": "0898",
								"ctime": "2019-07-11 17:03:46",
								"pinyin": "Baisha"
							}, {
								"id": 122,
								"pid": 8,
								"city_code": "101310214",
								"city_name": "保亭县",
								"post_code": "572300",
								"area_code": "0898",
								"ctime": "2019-07-11 17:03:47",
								"pinyin": "Baoting"
							}, {
								"id": 138,
								"pid": 9,
								"city_code": "101090201",
								"city_name": "保定",
								"post_code": "071000",
								"area_code": "0312",
								"ctime": "2019-07-11 17:30:49",
								"pinyin": "Baoding"
							}, {
								"id": 212,
								"pid": 14,
								"city_code": "101060601",
								"city_name": "白城",
								"post_code": "137000",
								"area_code": "0436",
								"ctime": "2019-07-11 17:31:20",
								"pinyin": "Baicheng"
							}, {
								"id": 213,
								"pid": 14,
								"city_code": "101060901",
								"city_name": "白山",
								"post_code": "134300",
								"area_code": "0439",
								"ctime": "2019-07-11 17:31:20",
								"pinyin": "Baishan"
							}, {
								"id": 246,
								"pid": 17,
								"city_code": "101070501",
								"city_name": "本溪市",
								"post_code": "117000",
								"area_code": "024",
								"ctime": "2019-07-11 16:24:00",
								"pinyin": "Benxi"
							}, {
								"id": 259,
								"pid": 18,
								"city_code": "101080811",
								"city_name": "巴彦淖尔",
								"post_code": "015000",
								"area_code": "0478",
								"ctime": "2019-07-11 17:31:48",
								"pinyin": "Bayannaoer"
							}, {
								"id": 260,
								"pid": 18,
								"city_code": "101080201",
								"city_name": "包头",
								"post_code": "014000",
								"area_code": "0472",
								"ctime": "2019-07-11 17:31:48",
								"pinyin": "Baotou"
							}, {
								"id": 284,
								"pid": 21,
								"city_code": "101121101",
								"city_name": "滨州",
								"post_code": "256600",
								"area_code": "0543",
								"ctime": "2019-07-11 17:31:56",
								"pinyin": "Binzhou"
							}, {
								"id": 312,
								"pid": 23,
								"city_code": "101110901",
								"city_name": "宝鸡",
								"post_code": "721000",
								"area_code": "0917",
								"ctime": "2019-07-11 17:32:09",
								"pinyin": "Baoji"
							}, {
								"id": 324,
								"pid": 25,
								"city_code": "101270901",
								"city_name": "巴中",
								"post_code": "636600",
								"area_code": "0827",
								"ctime": "2019-07-11 17:32:15",
								"pinyin": "Bazhong"
							}, {
								"id": 353,
								"pid": 28,
								"city_code": "101130609",
								"city_name": "巴音郭楞",
								"post_code": "841000",
								"area_code": "0996",
								"ctime": "2019-07-11 17:04:19",
								"pinyin": "Bayinguoleng"
							}, {
								"id": 354,
								"pid": 28,
								"city_code": "101131604",
								"city_name": "博尔塔拉",
								"post_code": "833400",
								"area_code": "0909",
								"ctime": "2019-07-11 17:04:20",
								"pinyin": "Boertala"
							}, {
								"id": 370,
								"pid": 29,
								"city_code": "101290501",
								"city_name": "保山",
								"post_code": "678000",
								"area_code": "0875",
								"ctime": "2019-07-11 17:32:26",
								"pinyin": "Baoshan"
							}
						]
					}, {
						"group": "c",
						"cities": [{
								"id": 31,
								"pid": 0,
								"city_code": "101040100",
								"city_name": "重庆",
								"post_code": null,
								"area_code": "023",
								"ctime": "2019-07-11 17:30:08",
								"pinyin": "Chongqing"
							}, {
								"id": 37,
								"pid": 3400,
								"city_code": "101220105",
								"city_name": "巢湖市",
								"post_code": "238000",
								"area_code": "0551",
								"ctime": "2019-07-11 17:03:40",
								"pinyin": "Chaohu"
							}, {
								"id": 38,
								"pid": 2,
								"city_code": "101221701",
								"city_name": "池州",
								"post_code": "247100",
								"area_code": "0566",
								"ctime": "2019-07-11 17:30:10",
								"pinyin": "Chizhou"
							}, {
								"id": 39,
								"pid": 2,
								"city_code": "101221101",
								"city_name": "滁州",
								"post_code": "239000",
								"area_code": "0550",
								"ctime": "2019-07-11 17:30:10",
								"pinyin": "Chuzhou"
							}, {
								"id": 77,
								"pid": 5,
								"city_code": "101281501",
								"city_name": "潮州",
								"post_code": "521000",
								"area_code": "0768",
								"ctime": "2019-07-11 17:30:21",
								"pinyin": "Chaozhou"
							}, {
								"id": 100,
								"pid": 6,
								"city_code": "101300201",
								"city_name": "崇左",
								"post_code": "532200",
								"area_code": "0771",
								"ctime": "2019-07-11 17:30:37",
								"pinyin": "Chongzuo"
							}, {
								"id": 123,
								"pid": 8,
								"city_code": "101310206",
								"city_name": "昌江县",
								"post_code": "572700",
								"area_code": "0898",
								"ctime": "2019-07-11 17:03:48",
								"pinyin": "Changjiang"
							}, {
								"id": 124,
								"pid": 8,
								"city_code": "101310204",
								"city_name": "澄迈县",
								"post_code": "571900",
								"area_code": "0898",
								"ctime": "2019-07-11 17:03:49",
								"pinyin": "Chengmai"
							}, {
								"id": 139,
								"pid": 9,
								"city_code": "101090701",
								"city_name": "沧州",
								"post_code": "061000",
								"area_code": "0317",
								"ctime": "2019-07-11 17:30:49",
								"pinyin": "Cangzhou"
							}, {
								"id": 140,
								"pid": 9,
								"city_code": "101090402",
								"city_name": "承德市",
								"post_code": "067000",
								"area_code": "0314",
								"ctime": "2019-07-11 21:24:00",
								"pinyin": "Chengde"
							}, {
								"id": 196,
								"pid": 13,
								"city_code": "101250101",
								"city_name": "长沙市",
								"post_code": "410000",
								"area_code": "0731",
								"ctime": "2019-07-11 21:24:01",
								"pinyin": "Changsha"
							}, {
								"id": 198,
								"pid": 13,
								"city_code": "101250601",
								"city_name": "常德",
								"post_code": "415000",
								"area_code": "0736",
								"ctime": "2019-07-11 17:31:14",
								"pinyin": "Changde"
							}, {
								"id": 199,
								"pid": 13,
								"city_code": "101250501",
								"city_name": "郴州",
								"post_code": "423000",
								"area_code": "0735",
								"ctime": "2019-07-11 17:31:15",
								"pinyin": "Chenzhou"
							}, {
								"id": 210,
								"pid": 14,
								"city_code": "101060101",
								"city_name": "长春",
								"post_code": "130000",
								"area_code": "0431",
								"ctime": "2019-07-11 17:31:19",
								"pinyin": "Changchun"
							}, {
								"id": 222,
								"pid": 15,
								"city_code": "101191101",
								"city_name": "常州",
								"post_code": "213000",
								"area_code": "0519",
								"ctime": "2019-07-11 17:31:25",
								"pinyin": "Changzhou"
							}, {
								"id": 247,
								"pid": 17,
								"city_code": "101071201",
								"city_name": "朝阳市",
								"post_code": "122000",
								"area_code": "0421",
								"ctime": "2019-07-11 16:24:00",
								"pinyin": "Chaoyang"
							}, {
								"id": 261,
								"pid": 18,
								"city_code": "101080601",
								"city_name": "赤峰",
								"post_code": "024000",
								"area_code": "0476",
								"ctime": "2019-07-11 17:31:48",
								"pinyin": "Chifeng"
							}, {
								"id": 300,
								"pid": 22,
								"city_code": "101100501",
								"city_name": "长治市",
								"post_code": "046000",
								"area_code": "0355",
								"ctime": "2019-07-11 17:32:07",
								"pinyin": "Changzhi"
							}, {
								"id": 321,
								"pid": 25,
								"city_code": "101270101",
								"city_name": "成都",
								"post_code": "610000",
								"area_code": "028",
								"ctime": "2019-07-11 17:32:14",
								"pinyin": "Chengdu"
							}, {
								"id": 345,
								"pid": 27,
								"city_code": "101140501",
								"city_name": "昌都市",
								"post_code": "854000",
								"area_code": "0895",
								"ctime": "2019-07-11 17:32:23",
								"pinyin": "Changdou"
							}, {
								"id": 355,
								"pid": 28,
								"city_code": "101130401",
								"city_name": "昌吉市",
								"post_code": "831100",
								"area_code": "0994",
								"ctime": "2019-07-11 17:04:21",
								"pinyin": "Changji"
							}, {
								"id": 371,
								"pid": 29,
								"city_code": "101290801",
								"city_name": "楚雄市",
								"post_code": "675000",
								"area_code": "0878",
								"ctime": "2019-07-11 17:32:26",
								"pinyin": "Chuxiong"
							}
						]
					}, {
						"group": "d",
						"cities": [{
								"id": 63,
								"pid": 4,
								"city_code": "101160201",
								"city_name": "定西",
								"post_code": "743000",
								"area_code": "0932",
								"ctime": "2019-07-11 17:30:14",
								"pinyin": "Dingxi"
							}, {
								"id": 78,
								"pid": 5,
								"city_code": "101281601",
								"city_name": "东莞",
								"post_code": "523000",
								"area_code": "0769",
								"ctime": "2019-07-11 17:30:22",
								"pinyin": "Dongguan"
							}, {
								"id": 125,
								"pid": 8,
								"city_code": "101310209",
								"city_name": "定安县",
								"post_code": "571200",
								"area_code": "0898",
								"ctime": "2019-07-11 17:03:51",
								"pinyin": "Dingan"
							}, {
								"id": 126,
								"pid": 8,
								"city_code": "101310202",
								"city_name": "东方",
								"post_code": "572600",
								"area_code": "0898",
								"ctime": "2019-07-11 17:30:47",
								"pinyin": "Dongfang"
							}, {
								"id": 136,
								"pid": 8,
								"city_code": "101310205",
								"city_name": "儋州",
								"post_code": "571700",
								"area_code": "0898",
								"ctime": "2019-07-11 17:30:48",
								"pinyin": "Danzhou"
							}, {
								"id": 167,
								"pid": 11,
								"city_code": "101050901",
								"city_name": "大庆",
								"post_code": "163000",
								"area_code": "0459",
								"ctime": "2019-07-11 17:31:04",
								"pinyin": "Daqing"
							}, {
								"id": 168,
								"pid": 11,
								"city_code": "101050701",
								"city_name": "大兴安岭",
								"post_code": "165000",
								"area_code": "0457",
								"ctime": "2019-07-11 17:03:57",
								"pinyin": "Daxinganling"
							}, {
								"id": 244,
								"pid": 17,
								"city_code": "101070201",
								"city_name": "大连市",
								"post_code": "116000",
								"area_code": "0411，+86-411",
								"ctime": "2019-07-11 16:24:00",
								"pinyin": "Dalian"
							}, {
								"id": 248,
								"pid": 17,
								"city_code": "101070601",
								"city_name": "丹东",
								"post_code": "118000",
								"area_code": "0415，+86-415",
								"ctime": "2019-07-11 17:31:41",
								"pinyin": "Dandong"
							}, {
								"id": 279,
								"pid": 20,
								"city_code": "101150701",
								"city_name": "德令哈市",
								"post_code": "817000",
								"area_code": "0977",
								"ctime": "2019-07-11 16:24:00",
								"pinyin": "Delingha"
							}, {
								"id": 285,
								"pid": 21,
								"city_code": "101120401",
								"city_name": "德州",
								"post_code": "253000",
								"area_code": "0534",
								"ctime": "2019-07-11 17:31:57",
								"pinyin": "Dezhou"
							}, {
								"id": 286,
								"pid": 21,
								"city_code": "101121201",
								"city_name": "东营区",
								"post_code": "257100",
								"area_code": "0546",
								"ctime": "2019-07-11 17:31:57",
								"pinyin": "Dongying"
							}, {
								"id": 301,
								"pid": 22,
								"city_code": "101100201",
								"city_name": "大同市",
								"post_code": "037000",
								"area_code": "0352",
								"ctime": "2019-07-11 16:24:00",
								"pinyin": "Datong"
							}, {
								"id": 325,
								"pid": 25,
								"city_code": "101270601",
								"city_name": "达州",
								"post_code": "635000",
								"area_code": "0818",
								"ctime": "2019-07-11 17:32:15",
								"pinyin": "Dazhou"
							}, {
								"id": 326,
								"pid": 25,
								"city_code": "101272001",
								"city_name": "德阳",
								"post_code": "618000",
								"area_code": "0838",
								"ctime": "2019-07-11 17:32:16",
								"pinyin": "Deyang"
							}, {
								"id": 372,
								"pid": 29,
								"city_code": "101290201",
								"city_name": "大理市",
								"post_code": "671000",
								"area_code": "0872",
								"ctime": "2019-07-11 17:32:27",
								"pinyin": "Dali"
							}, {
								"id": 373,
								"pid": 29,
								"city_code": "101291501",
								"city_name": "德宏",
								"post_code": "678400",
								"area_code": "0692",
								"ctime": "2019-07-11 17:04:27",
								"pinyin": "Dehong"
							}, {
								"id": 374,
								"pid": 29,
								"city_code": "101291305",
								"city_name": "迪庆",
								"post_code": "674400",
								"area_code": "0887",
								"ctime": "2019-07-11 17:04:29",
								"pinyin": "Diqing"
							}
						]
					}, {
						"group": "e",
						"cities": [{
								"id": 181,
								"pid": 12,
								"city_code": "101200301",
								"city_name": "鄂州",
								"post_code": "436000",
								"area_code": "0711",
								"ctime": "2019-07-11 17:31:08",
								"pinyin": "Ezhou"
							}, {
								"id": 195,
								"pid": 12,
								"city_code": "101201001",
								"city_name": "恩施市",
								"post_code": "445000",
								"area_code": "0718",
								"ctime": "2019-07-11 17:03:58",
								"pinyin": "Enshi"
							}, {
								"id": 262,
								"pid": 18,
								"city_code": "101080701",
								"city_name": "鄂尔多斯",
								"post_code": "017000",
								"area_code": "0477",
								"ctime": "2019-07-11 17:31:50",
								"pinyin": "Eerduosi"
							}
						]
					}, {
						"group": "f",
						"cities": [{
								"id": 3,
								"pid": 0,
								"city_code": "",
								"city_name": "福建",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Fujian"
							}, {
								"id": 40,
								"pid": 2,
								"city_code": "101220801",
								"city_name": "阜阳",
								"post_code": "236000",
								"area_code": "0558",
								"ctime": "2019-07-11 17:30:10",
								"pinyin": "Fuyang"
							}, {
								"id": 52,
								"pid": 3,
								"city_code": "101230101",
								"city_name": "福州",
								"post_code": "350000",
								"area_code": "0591",
								"ctime": "2019-07-11 17:30:12",
								"pinyin": "Fuzhou"
							}, {
								"id": 79,
								"pid": 5,
								"city_code": "101280800",
								"city_name": "佛山",
								"post_code": "528000",
								"area_code": "0757",
								"ctime": "2019-07-11 17:30:22",
								"pinyin": "Foshan"
							}, {
								"id": 101,
								"pid": 6,
								"city_code": "101301401",
								"city_name": "防城港",
								"post_code": "538000",
								"area_code": "0770",
								"ctime": "2019-07-11 17:30:37",
								"pinyin": "Fangchenggang"
							}, {
								"id": 233,
								"pid": 16,
								"city_code": "101240401",
								"city_name": "抚州",
								"post_code": "344000",
								"area_code": "0794",
								"ctime": "2019-07-11 17:31:34",
								"pinyin": "Fuzhou"
							}, {
								"id": 249,
								"pid": 17,
								"city_code": "101070401",
								"city_name": "抚顺市",
								"post_code": "113006",
								"area_code": "024，+86-24",
								"ctime": "2019-07-11 17:31:42",
								"pinyin": "Fushun"
							}, {
								"id": 250,
								"pid": 17,
								"city_code": "101070901",
								"city_name": "阜新",
								"post_code": "123000",
								"area_code": "0418，+86-418",
								"ctime": "2019-07-11 17:31:44",
								"pinyin": "Fuxin"
							}
						]
					}, {
						"group": "g",
						"cities": [{
								"id": 4,
								"pid": 0,
								"city_code": "",
								"city_name": "甘肃",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Gansu"
							}, {
								"id": 5,
								"pid": 0,
								"city_code": "",
								"city_name": "广东",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Guangdong"
							}, {
								"id": 6,
								"pid": 0,
								"city_code": "",
								"city_name": "广西",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Guangxi"
							}, {
								"id": 7,
								"pid": 0,
								"city_code": "",
								"city_name": "贵州",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Guizhou"
							}, {
								"id": 75,
								"pid": 5,
								"city_code": "101280101",
								"city_name": "广州",
								"post_code": "510000",
								"area_code": "020",
								"ctime": "2019-07-11 17:30:21",
								"pinyin": "Guangzhou"
							}, {
								"id": 97,
								"pid": 6,
								"city_code": "101300501",
								"city_name": "桂林",
								"post_code": "541000",
								"area_code": "0773",
								"ctime": "2019-07-11 17:30:34",
								"pinyin": "Guilin"
							}, {
								"id": 102,
								"pid": 6,
								"city_code": "101300801",
								"city_name": "贵港",
								"post_code": "537100",
								"area_code": "0775",
								"ctime": "2019-07-11 17:30:38",
								"pinyin": "Guigang"
							}, {
								"id": 110,
								"pid": 7,
								"city_code": "101260101",
								"city_name": "贵阳",
								"post_code": "550000",
								"area_code": "0851",
								"ctime": "2019-07-11 17:30:45",
								"pinyin": "Guiyang"
							}, {
								"id": 234,
								"pid": 16,
								"city_code": "101240701",
								"city_name": "赣州",
								"post_code": "341000",
								"area_code": "0797",
								"ctime": "2019-07-11 17:31:34",
								"pinyin": "Ganzhou"
							}, {
								"id": 270,
								"pid": 19,
								"city_code": "101170401",
								"city_name": "固原",
								"post_code": "756000",
								"area_code": "0954",
								"ctime": "2019-07-11 17:31:53",
								"pinyin": "Guyuan"
							}, {
								"id": 275,
								"pid": 20,
								"city_code": "101150507",
								"city_name": "果洛",
								"post_code": "814000",
								"area_code": "0975",
								"ctime": "2019-07-11 17:04:06",
								"pinyin": "Guoluo"
							}, {
								"id": 278,
								"pid": 20,
								"city_code": "101150401",
								"city_name": "共和县",
								"post_code": "813000",
								"area_code": "0974",
								"ctime": "2019-07-11 16:24:00",
								"pinyin": "Gonghe"
							}, {
								"id": 327,
								"pid": 25,
								"city_code": "101271801",
								"city_name": "甘孜",
								"post_code": "626700",
								"area_code": "0836",
								"ctime": "2019-07-11 17:04:12",
								"pinyin": "Ganzi"
							}, {
								"id": 328,
								"pid": 25,
								"city_code": "101270801",
								"city_name": "广安市",
								"post_code": "638500",
								"area_code": "+860826",
								"ctime": "2019-07-11 17:32:16",
								"pinyin": "Guangan"
							}, {
								"id": 329,
								"pid": 25,
								"city_code": "101272101",
								"city_name": "广元",
								"post_code": "628000",
								"area_code": "0839",
								"ctime": "2019-07-11 17:32:17",
								"pinyin": "Guangyuan"
							}
						]
					}, {
						"group": "h",
						"cities": [{
								"id": 8,
								"pid": 0,
								"city_code": "",
								"city_name": "海南",
								"post_code": null,
								"area_code": null,
								"ctime": "2019-07-11 17:03:37",
								"pinyin": "Hainan"
							}, {
								"id": 9,
								"pid": 0,
								"city_code": "",
								"city_name": "河北",
								"post_code": null,
								"area_code": null,
								"ctime": "2019-07-11 17:30:06",
								"pinyin": "Hebei"
							}, {
								"id": 10,
								"pid": 0,
								"city_code": "",
								"city_name": "河南",
								"post_code": null,
								"area_code": null,
								"ctime": "2019-07-11 17:30:07",
								"pinyin": "Henan"
							}, {
								"id": 11,
								"pid": 0,
								"city_code": "",
								"city_name": "黑龙江",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Heilongjiang"
							}, {
								"id": 12,
								"pid": 0,
								"city_code": "",
								"city_name": "湖北",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Hubei"
							}, {
								"id": 13,
								"pid": 0,
								"city_code": "",
								"city_name": "湖南",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Hunan"
							}, {
								"id": 41,
								"pid": 2,
								"city_code": "101221201",
								"city_name": "淮北",
								"post_code": "235000",
								"area_code": "0561",
								"ctime": "2019-07-11 17:30:11",
								"pinyin": "Huaibei"
							}, {
								"id": 42,
								"pid": 2,
								"city_code": "101220401",
								"city_name": "淮南",
								"post_code": "232000",
								"area_code": "0554",
								"ctime": "2019-07-11 17:30:11",
								"pinyin": "Huainan"
							}, {
								"id": 43,
								"pid": 2,
								"city_code": "101221001",
								"city_name": "黄山市",
								"post_code": "245000",
								"area_code": "0559",
								"ctime": "2019-07-11 21:23:56",
								"pinyin": "Huangshan"
							}, {
								"id": 80,
								"pid": 5,
								"city_code": "101281201",
								"city_name": "河源",
								"post_code": "517000",
								"area_code": "0762",
								"ctime": "2019-07-11 17:30:22",
								"pinyin": "Heyuan"
							}, {
								"id": 81,
								"pid": 5,
								"city_code": "101280301",
								"city_name": "惠州",
								"post_code": "516000",
								"area_code": "0752",
								"ctime": "2019-07-11 17:30:23",
								"pinyin": "Huizhou"
							}, {
								"id": 103,
								"pid": 6,
								"city_code": "101301201",
								"city_name": "河池",
								"post_code": "547000",
								"area_code": "0778",
								"ctime": "2019-07-11 17:30:39",
								"pinyin": "Hechi"
							}, {
								"id": 104,
								"pid": 6,
								"city_code": "101300701",
								"city_name": "贺州",
								"post_code": "542800",
								"area_code": "0774",
								"ctime": "2019-07-11 17:30:41",
								"pinyin": "Hezhou"
							}, {
								"id": 119,
								"pid": 8,
								"city_code": "101310101",
								"city_name": "海口",
								"post_code": "570100",
								"area_code": "0898",
								"ctime": "2019-07-11 17:30:46",
								"pinyin": "Haikou"
							}, {
								"id": 141,
								"pid": 9,
								"city_code": "101091001",
								"city_name": "邯郸市",
								"post_code": "056000",
								"area_code": "0310",
								"ctime": "2019-07-11 17:30:49",
								"pinyin": "Handan"
							}, {
								"id": 142,
								"pid": 9,
								"city_code": "101090801",
								"city_name": "衡水",
								"post_code": "053000",
								"area_code": "0318",
								"ctime": "2019-07-11 17:30:49",
								"pinyin": "Hengshui"
							}, {
								"id": 152,
								"pid": 10,
								"city_code": "101181201",
								"city_name": "鹤壁",
								"post_code": "458000",
								"area_code": "0392",
								"ctime": "2019-07-11 17:30:55",
								"pinyin": "Hebi"
							}, {
								"id": 166,
								"pid": 11,
								"city_code": "101050101",
								"city_name": "哈尔滨",
								"post_code": "150000",
								"area_code": "0451",
								"ctime": "2019-07-11 17:31:04",
								"pinyin": "Haerbin"
							}, {
								"id": 169,
								"pid": 11,
								"city_code": "101051201",
								"city_name": "鹤岗",
								"post_code": "154100",
								"area_code": "0468",
								"ctime": "2019-07-11 17:31:04",
								"pinyin": "Hegang"
							}, {
								"id": 170,
								"pid": 11,
								"city_code": "101050601",
								"city_name": "黑河",
								"post_code": "164300",
								"area_code": "0456",
								"ctime": "2019-07-11 17:31:05",
								"pinyin": "Heihe"
							}, {
								"id": 182,
								"pid": 12,
								"city_code": "101200501",
								"city_name": "黄冈",
								"post_code": "438000",
								"area_code": "0713",
								"ctime": "2019-07-11 17:31:08",
								"pinyin": "Huanggang"
							}, {
								"id": 183,
								"pid": 12,
								"city_code": "101200601",
								"city_name": "黄石",
								"post_code": "435000",
								"area_code": "0714",
								"ctime": "2019-07-11 17:31:09",
								"pinyin": "Huangshi"
							}, {
								"id": 200,
								"pid": 13,
								"city_code": "101250401",
								"city_name": "衡阳市",
								"post_code": "421000",
								"area_code": "0734",
								"ctime": "2019-07-11 21:24:01",
								"pinyin": "Hengyang"
							}, {
								"id": 201,
								"pid": 13,
								"city_code": "101251201",
								"city_name": "怀化",
								"post_code": "418000",
								"area_code": "0745",
								"ctime": "2019-07-11 17:31:16",
								"pinyin": "Huaihua"
							}, {
								"id": 223,
								"pid": 15,
								"city_code": "101190901",
								"city_name": "淮安市",
								"post_code": "223001",
								"area_code": "0517",
								"ctime": "2019-07-11 21:24:02",
								"pinyin": "Huaian"
							}, {
								"id": 251,
								"pid": 17,
								"city_code": "101071401",
								"city_name": "葫芦岛",
								"post_code": "125000",
								"area_code": "0429",
								"ctime": "2019-07-11 17:31:44",
								"pinyin": "Huludao"
							}, {
								"id": 257,
								"pid": 18,
								"city_code": "101080101",
								"city_name": "呼和浩特",
								"post_code": "010000",
								"area_code": "0471",
								"ctime": "2019-07-11 17:31:47",
								"pinyin": "Huhehaote"
							}, {
								"id": 263,
								"pid": 18,
								"city_code": "101081001",
								"city_name": "呼伦贝尔市",
								"post_code": "021000",
								"area_code": "0470",
								"ctime": "2019-07-11 17:31:50",
								"pinyin": "Hulunbeier"
							}, {
								"id": 276,
								"pid": 20,
								"city_code": "101150804",
								"city_name": "海北",
								"post_code": "812200",
								"area_code": "0970",
								"ctime": "2019-07-11 17:04:07",
								"pinyin": "Haibei"
							}, {
								"id": 277,
								"pid": 20,
								"city_code": "101150207",
								"city_name": "海东",
								"post_code": "810699",
								"area_code": "0972",
								"ctime": "2019-07-11 17:31:54",
								"pinyin": "Haidong"
							}, {
								"id": 280,
								"pid": 20,
								"city_code": "101150305",
								"city_name": "黄南",
								"post_code": "811300",
								"area_code": "0973",
								"ctime": "2019-07-11 17:04:08",
								"pinyin": "Huangnan"
							}, {
								"id": 287,
								"pid": 21,
								"city_code": "101121001",
								"city_name": "菏泽",
								"post_code": "274000",
								"area_code": "0530",
								"ctime": "2019-07-11 17:31:57",
								"pinyin": "Heze"
							}, {
								"id": 313,
								"pid": 23,
								"city_code": "101110801",
								"city_name": "汉中",
								"post_code": "723000",
								"area_code": "0916",
								"ctime": "2019-07-11 17:32:10",
								"pinyin": "Hanzhong"
							}, {
								"id": 356,
								"pid": 28,
								"city_code": "101131201",
								"city_name": "哈密市",
								"post_code": "839000",
								"area_code": "0902",
								"ctime": "2019-07-11 17:32:24",
								"pinyin": "Hami"
							}, {
								"id": 357,
								"pid": 28,
								"city_code": "101131301",
								"city_name": "和田市",
								"post_code": "848000",
								"area_code": "0903",
								"ctime": "2019-07-11 17:04:22",
								"pinyin": "Hetian"
							}, {
								"id": 375,
								"pid": 29,
								"city_code": "101290301",
								"city_name": "红河县",
								"post_code": "654400",
								"area_code": "0873",
								"ctime": "2019-07-11 17:32:27",
								"pinyin": "Honghe"
							}, {
								"id": 382,
								"pid": 30,
								"city_code": "101210101",
								"city_name": "杭州",
								"post_code": "310000",
								"area_code": "0571",
								"ctime": "2019-07-11 17:32:28",
								"pinyin": "Hangzhou"
							}, {
								"id": 383,
								"pid": 30,
								"city_code": "101210201",
								"city_name": "湖州",
								"post_code": "313000",
								"area_code": "0572",
								"ctime": "2019-07-11 17:32:29",
								"pinyin": "Huzhou"
							}
						]
					}, {
						"group": "j",
						"cities": [{
								"id": 14,
								"pid": 0,
								"city_code": "",
								"city_name": "吉林",
								"post_code": null,
								"area_code": null,
								"ctime": "2019-07-11 17:30:07",
								"pinyin": "Jilin"
							}, {
								"id": 15,
								"pid": 0,
								"city_code": "",
								"city_name": "江苏",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Jiangsu"
							}, {
								"id": 16,
								"pid": 0,
								"city_code": "",
								"city_name": "江西",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Jiangxi"
							}, {
								"id": 65,
								"pid": 4,
								"city_code": "101161401",
								"city_name": "嘉峪关",
								"post_code": "735100",
								"area_code": "0937",
								"ctime": "2019-07-11 17:30:15",
								"pinyin": "Jiayuguan"
							}, {
								"id": 66,
								"pid": 4,
								"city_code": "101160601",
								"city_name": "金昌",
								"post_code": "737100",
								"area_code": "0935",
								"ctime": "2019-07-11 17:30:15",
								"pinyin": "Jinchang"
							}, {
								"id": 67,
								"pid": 4,
								"city_code": "101160801",
								"city_name": "酒泉",
								"post_code": "735000",
								"area_code": "0937",
								"ctime": "2019-07-11 17:30:15",
								"pinyin": "Jiuquan"
							}, {
								"id": 82,
								"pid": 5,
								"city_code": "101281101",
								"city_name": "江门",
								"post_code": "529000",
								"area_code": "0750",
								"ctime": "2019-07-11 17:30:25",
								"pinyin": "Jiangmen"
							}, {
								"id": 83,
								"pid": 5,
								"city_code": "101281901",
								"city_name": "揭阳",
								"post_code": "522000",
								"area_code": "0663",
								"ctime": "2019-07-11 17:30:26",
								"pinyin": "Jieyang"
							}, {
								"id": 153,
								"pid": 10,
								"city_code": "101181801",
								"city_name": "济源市",
								"post_code": "459000（或454650）",
								"area_code": "0391",
								"ctime": "2019-07-11 17:30:55",
								"pinyin": "Jiyuan"
							}, {
								"id": 154,
								"pid": 10,
								"city_code": "101181101",
								"city_name": "焦作",
								"post_code": "454150",
								"area_code": "0391",
								"ctime": "2019-07-11 17:30:56",
								"pinyin": "Jiaozuo"
							}, {
								"id": 171,
								"pid": 11,
								"city_code": "101051101",
								"city_name": "鸡西",
								"post_code": "158100",
								"area_code": "0467",
								"ctime": "2019-07-11 17:31:05",
								"pinyin": "Jixi"
							}, {
								"id": 172,
								"pid": 11,
								"city_code": "101050401",
								"city_name": "佳木斯",
								"post_code": "154000",
								"area_code": "0454",
								"ctime": "2019-07-11 17:31:05",
								"pinyin": "Jiamusi"
							}, {
								"id": 184,
								"pid": 12,
								"city_code": "101201401",
								"city_name": "荆门",
								"post_code": "448000",
								"area_code": "0724",
								"ctime": "2019-07-11 17:31:09",
								"pinyin": "Jingmen"
							}, {
								"id": 185,
								"pid": 12,
								"city_code": "101200801",
								"city_name": "荆州市",
								"post_code": "434000",
								"area_code": "0716",
								"ctime": "2019-07-11 17:31:09",
								"pinyin": "Jinzhou"
							}, {
								"id": 211,
								"pid": 14,
								"city_code": "101060201",
								"city_name": "吉林市",
								"post_code": "132000",
								"area_code": "0432",
								"ctime": "2019-07-11 17:04:01",
								"pinyin": "Jilin"
							}, {
								"id": 235,
								"pid": 16,
								"city_code": "101240601",
								"city_name": "吉安市",
								"post_code": "343000",
								"area_code": "0796",
								"ctime": "2019-07-11 21:24:03",
								"pinyin": "Jian"
							}, {
								"id": 236,
								"pid": 16,
								"city_code": "101240801",
								"city_name": "景德镇",
								"post_code": "333000",
								"area_code": "0798",
								"ctime": "2019-07-11 17:31:34",
								"pinyin": "Jingdezhen"
							}, {
								"id": 237,
								"pid": 16,
								"city_code": "101240201",
								"city_name": "九江市",
								"post_code": "332000",
								"area_code": "0792",
								"ctime": "2019-07-11 17:31:35",
								"pinyin": "Jiujiang"
							}, {
								"id": 252,
								"pid": 17,
								"city_code": "101070701",
								"city_name": "锦州",
								"post_code": "121000",
								"area_code": "（+86）0416",
								"ctime": "2019-07-11 17:31:45",
								"pinyin": "Jinzhou"
							}, {
								"id": 282,
								"pid": 21,
								"city_code": "101120101",
								"city_name": "济南",
								"post_code": "250000",
								"area_code": "0531",
								"ctime": "2019-07-11 17:31:56",
								"pinyin": "Jinan"
							}, {
								"id": 288,
								"pid": 21,
								"city_code": "101120701",
								"city_name": "济宁",
								"post_code": "272000",
								"area_code": "0537",
								"ctime": "2019-07-11 17:31:58",
								"pinyin": "Jining"
							}, {
								"id": 302,
								"pid": 22,
								"city_code": "101100601",
								"city_name": "晋城",
								"post_code": "048000",
								"area_code": "0356",
								"ctime": "2019-07-11 17:32:07",
								"pinyin": "Jincheng"
							}, {
								"id": 303,
								"pid": 22,
								"city_code": "101100401",
								"city_name": "晋中",
								"post_code": "030600",
								"area_code": "0354",
								"ctime": "2019-07-11 17:32:07",
								"pinyin": "Jinzhong"
							}, {
								"id": 384,
								"pid": 30,
								"city_code": "101210301",
								"city_name": "嘉兴",
								"post_code": "314000",
								"area_code": "0573",
								"ctime": "2019-07-11 17:32:29",
								"pinyin": "Jiaxing"
							}, {
								"id": 385,
								"pid": 30,
								"city_code": "101210901",
								"city_name": "金华",
								"post_code": "321000",
								"area_code": "0579",
								"ctime": "2019-07-11 17:32:29",
								"pinyin": "Jinhua"
							}
						]
					}, {
						"group": "k",
						"cities": [{
								"id": 150,
								"pid": 10,
								"city_code": "101180801",
								"city_name": "开封市",
								"post_code": "475000",
								"area_code": "(+86)0371",
								"ctime": "2019-07-11 17:30:54",
								"pinyin": "Kaifeng"
							}, {
								"id": 358,
								"pid": 28,
								"city_code": "101130901",
								"city_name": "喀什市",
								"post_code": "844000",
								"area_code": "0998",
								"ctime": "2019-07-11 17:04:24",
								"pinyin": "Kashi"
							}, {
								"id": 359,
								"pid": 28,
								"city_code": "101130201",
								"city_name": "克拉玛依市",
								"post_code": "834000",
								"area_code": "0990",
								"ctime": "2019-07-11 17:32:24",
								"pinyin": "Kelamayi"
							}, {
								"id": 366,
								"pid": 29,
								"city_code": "101290101",
								"city_name": "昆明",
								"post_code": "650000",
								"area_code": "0871",
								"ctime": "2019-07-11 17:32:25",
								"pinyin": "Kunming"
							}
						]
					}, {
						"group": "l",
						"cities": [{
								"id": 17,
								"pid": 0,
								"city_code": "",
								"city_name": "辽宁",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Liaoning"
							}, {
								"id": 44,
								"pid": 2,
								"city_code": "101221501",
								"city_name": "六安",
								"post_code": "237000",
								"area_code": "0564",
								"ctime": "2019-07-11 17:30:11",
								"pinyin": "Liuan"
							}, {
								"id": 53,
								"pid": 3,
								"city_code": "101230701",
								"city_name": "龙岩",
								"post_code": "364000",
								"area_code": "0597",
								"ctime": "2019-07-11 17:30:12",
								"pinyin": "Longyan"
							}, {
								"id": 61,
								"pid": 4,
								"city_code": "101160101",
								"city_name": "兰州",
								"post_code": "730000",
								"area_code": "0931",
								"ctime": "2019-07-11 17:30:14",
								"pinyin": "Lanzhou"
							}, {
								"id": 68,
								"pid": 4,
								"city_code": "101161101",
								"city_name": "临夏市",
								"post_code": "731100",
								"area_code": "0930",
								"ctime": "2019-07-11 17:30:15",
								"pinyin": "Linxia"
							}, {
								"id": 69,
								"pid": 4,
								"city_code": "101161010",
								"city_name": "陇南市",
								"post_code": "746000",
								"area_code": "0939",
								"ctime": "2019-07-11 17:03:41",
								"pinyin": "Longnan"
							}, {
								"id": 105,
								"pid": 6,
								"city_code": "101300401",
								"city_name": "来宾",
								"post_code": "546100",
								"area_code": "0772",
								"ctime": "2019-07-11 17:30:41",
								"pinyin": "Laibin"
							}, {
								"id": 106,
								"pid": 6,
								"city_code": "101300301",
								"city_name": "柳州",
								"post_code": "545000",
								"area_code": "0772",
								"ctime": "2019-07-11 17:30:41",
								"pinyin": "Liuzhou"
							}, {
								"id": 113,
								"pid": 7,
								"city_code": "101260803",
								"city_name": "六盘水",
								"post_code": "553000",
								"area_code": "0858",
								"ctime": "2019-07-11 17:30:46",
								"pinyin": "Liupanshui"
							}, {
								"id": 127,
								"pid": 8,
								"city_code": "101310221",
								"city_name": "乐东县",
								"post_code": "572500",
								"area_code": "0898",
								"ctime": "2019-07-11 17:03:52",
								"pinyin": "Ledong"
							}, {
								"id": 128,
								"pid": 8,
								"city_code": "101310203",
								"city_name": "临高县",
								"post_code": "571800",
								"area_code": "0898",
								"ctime": "2019-07-11 17:03:53",
								"pinyin": "Lingao"
							}, {
								"id": 129,
								"pid": 8,
								"city_code": "101310216",
								"city_name": "陵水县",
								"post_code": "572400",
								"area_code": "0898",
								"ctime": "2019-07-11 17:03:55",
								"pinyin": "Linshui"
							}, {
								"id": 143,
								"pid": 9,
								"city_code": "101090601",
								"city_name": "廊坊",
								"post_code": "065000",
								"area_code": "0316",
								"ctime": "2019-07-11 17:30:51",
								"pinyin": "Langfang"
							}, {
								"id": 149,
								"pid": 10,
								"city_code": "101180901",
								"city_name": "洛阳",
								"post_code": "471000",
								"area_code": "0379",
								"ctime": "2019-07-11 17:30:53",
								"pinyin": "Luoyang"
							}, {
								"id": 164,
								"pid": 10,
								"city_code": "101181501",
								"city_name": "漯河",
								"post_code": "462000",
								"area_code": "0395",
								"ctime": "2019-07-11 17:31:02",
								"pinyin": "Luohe"
							}, {
								"id": 202,
								"pid": 13,
								"city_code": "101250801",
								"city_name": "娄底",
								"post_code": "417000",
								"area_code": "0738",
								"ctime": "2019-07-11 17:31:17",
								"pinyin": "Loudi"
							}, {
								"id": 214,
								"pid": 14,
								"city_code": "101060701",
								"city_name": "辽源",
								"post_code": "136200",
								"area_code": "0437",
								"ctime": "2019-07-11 17:31:21",
								"pinyin": "Liaoyuan"
							}, {
								"id": 224,
								"pid": 15,
								"city_code": "101191001",
								"city_name": "连云港",
								"post_code": "222002",
								"area_code": "国际:518；国内:0518",
								"ctime": "2019-07-11 17:31:27",
								"pinyin": "Lianyungang"
							}, {
								"id": 253,
								"pid": 17,
								"city_code": "101071001",
								"city_name": "辽阳市",
								"post_code": "111000",
								"area_code": "0419",
								"ctime": "2019-07-11 16:24:00",
								"pinyin": "Liaoyang"
							}, {
								"id": 289,
								"pid": 21,
								"city_code": "101121601",
								"city_name": "莱芜",
								"post_code": "271100",
								"area_code": "0634",
								"ctime": "2019-07-11 17:31:59",
								"pinyin": "Laiwu"
							}, {
								"id": 290,
								"pid": 21,
								"city_code": "101121701",
								"city_name": "聊城",
								"post_code": "252000",
								"area_code": "0635",
								"ctime": "2019-07-11 17:32:00",
								"pinyin": "Liaocheng"
							}, {
								"id": 291,
								"pid": 21,
								"city_code": "101120901",
								"city_name": "临沂",
								"post_code": "276000",
								"area_code": "0539",
								"ctime": "2019-07-11 17:32:01",
								"pinyin": "Linyi"
							}, {
								"id": 304,
								"pid": 22,
								"city_code": "101100701",
								"city_name": "临汾",
								"post_code": "041000",
								"area_code": "0357",
								"ctime": "2019-07-11 17:32:07",
								"pinyin": "Linfen"
							}, {
								"id": 305,
								"pid": 22,
								"city_code": "101101100",
								"city_name": "吕梁",
								"post_code": "033000",
								"area_code": "0358",
								"ctime": "2019-07-11 17:32:08",
								"pinyin": "Lvliang"
							}, {
								"id": 330,
								"pid": 25,
								"city_code": "101271401",
								"city_name": "乐山",
								"post_code": "614000",
								"area_code": "0833",
								"ctime": "2019-07-11 17:32:18",
								"pinyin": "Leshan"
							}, {
								"id": 331,
								"pid": 25,
								"city_code": "101271601",
								"city_name": "凉山",
								"post_code": "615000",
								"area_code": "0834",
								"ctime": "2019-07-11 17:04:13",
								"pinyin": "Liangshan"
							}, {
								"id": 341,
								"pid": 25,
								"city_code": "101271001",
								"city_name": "泸州",
								"post_code": "646000",
								"area_code": "0830",
								"ctime": "2019-07-11 17:32:22",
								"pinyin": "Luzhou"
							}, {
								"id": 343,
								"pid": 27,
								"city_code": "101140101",
								"city_name": "拉萨",
								"post_code": "850000",
								"area_code": "0891",
								"ctime": "2019-07-11 17:32:22",
								"pinyin": "Lasa"
							}, {
								"id": 346,
								"pid": 27,
								"city_code": "101140401",
								"city_name": "林芝市",
								"post_code": "860000",
								"area_code": "0894",
								"ctime": "2019-07-11 17:32:23",
								"pinyin": "Linzhi"
							}, {
								"id": 369,
								"pid": 29,
								"city_code": "101291401",
								"city_name": "丽江",
								"post_code": "674100",
								"area_code": "0888",
								"ctime": "2019-07-11 17:32:26",
								"pinyin": "Lijiang"
							}, {
								"id": 376,
								"pid": 29,
								"city_code": "101291101",
								"city_name": "临沧",
								"post_code": "677000",
								"area_code": "0883",
								"ctime": "2019-07-11 17:32:27",
								"pinyin": "Lincang"
							}, {
								"id": 386,
								"pid": 30,
								"city_code": "101210801",
								"city_name": "丽水",
								"post_code": "323000",
								"area_code": "0578",
								"ctime": "2019-07-11 17:32:29",
								"pinyin": "Lishui"
							}
						]
					}, {
						"group": "m",
						"cities": [{
								"id": 45,
								"pid": 2,
								"city_code": "101220501",
								"city_name": "马鞍山",
								"post_code": "243000",
								"area_code": "0555",
								"ctime": "2019-07-11 17:30:11",
								"pinyin": "Maanshan"
							}, {
								"id": 84,
								"pid": 5,
								"city_code": "101282001",
								"city_name": "茂名",
								"post_code": "525000",
								"area_code": "0668",
								"ctime": "2019-07-11 17:30:26",
								"pinyin": "Maoming"
							}, {
								"id": 85,
								"pid": 5,
								"city_code": "101280401",
								"city_name": "梅州",
								"post_code": "514021",
								"area_code": "0753",
								"ctime": "2019-07-11 17:30:27",
								"pinyin": "Meizhou"
							}, {
								"id": 173,
								"pid": 11,
								"city_code": "101050301",
								"city_name": "牡丹江",
								"post_code": "157000",
								"area_code": "0453",
								"ctime": "2019-07-11 17:31:06",
								"pinyin": "Mudanjiang"
							}, {
								"id": 322,
								"pid": 25,
								"city_code": "101270401",
								"city_name": "绵阳",
								"post_code": "621000",
								"area_code": "0816",
								"ctime": "2019-07-11 17:32:14",
								"pinyin": "Mianyang"
							}, {
								"id": 332,
								"pid": 25,
								"city_code": "101271501",
								"city_name": "眉山市",
								"post_code": "620010",
								"area_code": "028",
								"ctime": "2019-07-11 16:24:00",
								"pinyin": "Meishan"
							}
						]
					}, {
						"group": "n",
						"cities": [{
								"id": 18,
								"pid": 0,
								"city_code": "",
								"city_name": "内蒙古",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Neimenggu"
							}, {
								"id": 19,
								"pid": 0,
								"city_code": "",
								"city_name": "宁夏",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Ningxia"
							}, {
								"id": 54,
								"pid": 3,
								"city_code": "101230901",
								"city_name": "南平",
								"post_code": "353000",
								"area_code": "0599",
								"ctime": "2019-07-11 17:30:12",
								"pinyin": "Nanping"
							}, {
								"id": 55,
								"pid": 3,
								"city_code": "101230301",
								"city_name": "宁德",
								"post_code": "352000",
								"area_code": "0593",
								"ctime": "2019-07-11 17:30:13",
								"pinyin": "Ningde"
							}, {
								"id": 96,
								"pid": 6,
								"city_code": "101300101",
								"city_name": "南宁",
								"post_code": "530000",
								"area_code": "0771",
								"ctime": "2019-07-11 17:30:33",
								"pinyin": "Nanning"
							}, {
								"id": 155,
								"pid": 10,
								"city_code": "101180701",
								"city_name": "南阳",
								"post_code": "473000",
								"area_code": "0377",
								"ctime": "2019-07-11 17:30:56",
								"pinyin": "Nanyang"
							}, {
								"id": 219,
								"pid": 15,
								"city_code": "101190101",
								"city_name": "南京",
								"post_code": "210000",
								"area_code": "025",
								"ctime": "2019-07-11 17:31:22",
								"pinyin": "Nanjing"
							}, {
								"id": 225,
								"pid": 15,
								"city_code": "101190501",
								"city_name": "南通",
								"post_code": "226000",
								"area_code": "0513",
								"ctime": "2019-07-11 17:31:28",
								"pinyin": "Nantong"
							}, {
								"id": 232,
								"pid": 16,
								"city_code": "101240101",
								"city_name": "南昌市",
								"post_code": "330000",
								"area_code": "0791",
								"ctime": "2019-07-11 21:24:02",
								"pinyin": "Nanchang"
							}, {
								"id": 333,
								"pid": 25,
								"city_code": "101270501",
								"city_name": "南充",
								"post_code": "637000",
								"area_code": "0817",
								"ctime": "2019-07-11 17:32:19",
								"pinyin": "Nanchong"
							}, {
								"id": 334,
								"pid": 25,
								"city_code": "101271201",
								"city_name": "内江",
								"post_code": "641000",
								"area_code": "0832",
								"ctime": "2019-07-11 17:32:19",
								"pinyin": "Neijiang"
							}, {
								"id": 347,
								"pid": 27,
								"city_code": "101140601",
								"city_name": "那曲",
								"post_code": "852000",
								"area_code": "0896",
								"ctime": "2019-07-11 17:04:16",
								"pinyin": "Naqu"
							}, {
								"id": 367,
								"pid": 29,
								"city_code": "101291201",
								"city_name": "怒江",
								"post_code": "673200",
								"area_code": "0886",
								"ctime": "2019-07-11 17:04:26",
								"pinyin": "Nujiang"
							}, {
								"id": 387,
								"pid": 30,
								"city_code": "101210401",
								"city_name": "宁波",
								"post_code": "315000",
								"area_code": "0574",
								"ctime": "2019-07-11 17:32:30",
								"pinyin": "Ningbo"
							}
						]
					}, {
						"group": "p",
						"cities": [{
								"id": 56,
								"pid": 3,
								"city_code": "101230401",
								"city_name": "莆田",
								"post_code": "351100",
								"area_code": "0594",
								"ctime": "2019-07-11 17:30:13",
								"pinyin": "Putian"
							}, {
								"id": 70,
								"pid": 4,
								"city_code": "101160301",
								"city_name": "平凉",
								"post_code": "744000",
								"area_code": "0933",
								"ctime": "2019-07-11 17:30:16",
								"pinyin": "Pingliang"
							}, {
								"id": 156,
								"pid": 10,
								"city_code": "101180501",
								"city_name": "平顶山",
								"post_code": "467000",
								"area_code": "0375",
								"ctime": "2019-07-11 17:30:57",
								"pinyin": "Pingdingshan"
							}, {
								"id": 165,
								"pid": 10,
								"city_code": "101181301",
								"city_name": "濮阳市",
								"post_code": "457000",
								"area_code": "0393",
								"ctime": "2019-07-11 17:31:04",
								"pinyin": "Puyang"
							}, {
								"id": 238,
								"pid": 16,
								"city_code": "101240901",
								"city_name": "萍乡",
								"post_code": "337000",
								"area_code": "0799",
								"ctime": "2019-07-11 17:31:36",
								"pinyin": "Pingxiang"
							}, {
								"id": 254,
								"pid": 17,
								"city_code": "101071301",
								"city_name": "盘锦",
								"post_code": "124000",
								"area_code": "0427",
								"ctime": "2019-07-11 17:31:46",
								"pinyin": "Panjin"
							}, {
								"id": 335,
								"pid": 25,
								"city_code": "101270201",
								"city_name": "攀枝花",
								"post_code": "617000",
								"area_code": "0812",
								"ctime": "2019-07-11 17:32:20",
								"pinyin": "Panzhihua"
							}, {
								"id": 368,
								"pid": 29,
								"city_code": "101290901",
								"city_name": "普洱",
								"post_code": "665000",
								"area_code": "0879",
								"ctime": "2019-07-11 17:32:26",
								"pinyin": "Puer"
							}
						]
					}, {
						"group": "q",
						"cities": [{
								"id": 20,
								"pid": 0,
								"city_code": "",
								"city_name": "青海",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Qinghai"
							}, {
								"id": 57,
								"pid": 3,
								"city_code": "101230501",
								"city_name": "泉州",
								"post_code": "362000",
								"area_code": "0595",
								"ctime": "2019-07-11 17:30:13",
								"pinyin": "Quanzhou"
							}, {
								"id": 71,
								"pid": 4,
								"city_code": "101160401",
								"city_name": "庆阳",
								"post_code": "745000",
								"area_code": "0934",
								"ctime": "2019-07-11 17:30:16",
								"pinyin": "Qingyang"
							}, {
								"id": 86,
								"pid": 5,
								"city_code": "101281301",
								"city_name": "清远",
								"post_code": "511500",
								"area_code": "0763",
								"ctime": "2019-07-11 17:30:28",
								"pinyin": "Qingyuan"
							}, {
								"id": 107,
								"pid": 6,
								"city_code": "101301101",
								"city_name": "钦州",
								"post_code": "535000",
								"area_code": "0777",
								"ctime": "2019-07-11 17:30:42",
								"pinyin": "Qinzhou"
							}, {
								"id": 114,
								"pid": 7,
								"city_code": "101260506",
								"city_name": "黔东南",
								"post_code": "556000",
								"area_code": "0855",
								"ctime": "2019-07-11 17:03:42",
								"pinyin": "Qiandong"
							}, {
								"id": 115,
								"pid": 7,
								"city_code": "101260413",
								"city_name": "黔南",
								"post_code": "558000",
								"area_code": "0854",
								"ctime": "2019-07-11 17:03:44",
								"pinyin": "Qiannan"
							}, {
								"id": 116,
								"pid": 7,
								"city_code": "101260906",
								"city_name": "黔西南",
								"post_code": "562400",
								"area_code": "0859",
								"ctime": "2019-07-11 17:03:45",
								"pinyin": "Qianxinan"
							}, {
								"id": 130,
								"pid": 8,
								"city_code": "101310211",
								"city_name": "琼海",
								"post_code": "571400",
								"area_code": "0898",
								"ctime": "2019-07-11 17:30:47",
								"pinyin": "Qionghai"
							}, {
								"id": 131,
								"pid": 8,
								"city_code": "101310208",
								"city_name": "琼中",
								"post_code": "572900",
								"area_code": "0898",
								"ctime": "2019-07-11 17:30:47",
								"pinyin": "Qiongzhong"
							}, {
								"id": 144,
								"pid": 9,
								"city_code": "101091101",
								"city_name": "秦皇岛",
								"post_code": "066000",
								"area_code": "0335",
								"ctime": "2019-07-11 17:30:51",
								"pinyin": "Qinhuangdao"
							}, {
								"id": 174,
								"pid": 11,
								"city_code": "101051002",
								"city_name": "七台河",
								"post_code": "154600",
								"area_code": "0464",
								"ctime": "2019-07-11 17:31:07",
								"pinyin": "Qitaihe"
							}, {
								"id": 175,
								"pid": 11,
								"city_code": "101050201",
								"city_name": "齐齐哈尔",
								"post_code": "161000",
								"area_code": "0452",
								"ctime": "2019-07-11 17:31:07",
								"pinyin": "Qiqihaer"
							}, {
								"id": 186,
								"pid": 12,
								"city_code": "101201701",
								"city_name": "潜江市",
								"post_code": "433100",
								"area_code": "0728",
								"ctime": "2019-07-11 17:31:09",
								"pinyin": "Qianjiang"
							}, {
								"id": 283,
								"pid": 21,
								"city_code": "101120201",
								"city_name": "青岛",
								"post_code": "266000",
								"area_code": "0532",
								"ctime": "2019-07-11 17:31:56",
								"pinyin": "Qingdao"
							}, {
								"id": 377,
								"pid": 29,
								"city_code": "101290401",
								"city_name": "曲靖",
								"post_code": "655000",
								"area_code": "0874",
								"ctime": "2019-07-11 17:32:27",
								"pinyin": "Qujing"
							}, {
								"id": 392,
								"pid": 30,
								"city_code": "101211001",
								"city_name": "衢州",
								"post_code": "324000",
								"area_code": "0570",
								"ctime": "2019-07-11 17:32:31",
								"pinyin": "Quzhou"
							}
						]
					}, {
						"group": "r",
						"cities": [{
								"id": 292,
								"pid": 21,
								"city_code": "101121501",
								"city_name": "日照",
								"post_code": "276800",
								"area_code": "0633",
								"ctime": "2019-07-11 17:32:02",
								"pinyin": "Rizhao"
							}, {
								"id": 348,
								"pid": 27,
								"city_code": "101140201",
								"city_name": "日喀则市",
								"post_code": "857000",
								"area_code": "0892",
								"ctime": "2019-07-11 17:32:23",
								"pinyin": "Rikeze"
							}
						]
					}, {
						"group": "s",
						"cities": [{
								"id": 21,
								"pid": 0,
								"city_code": "",
								"city_name": "山东",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Shandong"
							}, {
								"id": 22,
								"pid": 0,
								"city_code": "",
								"city_name": "山西",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Shanxi"
							}, {
								"id": 23,
								"pid": 0,
								"city_code": "",
								"city_name": "陕西",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Shannxi"
							}, {
								"id": 24,
								"pid": 0,
								"city_code": "101020100",
								"city_name": "上海",
								"post_code": "200000",
								"area_code": "021",
								"ctime": "2019-07-11 17:30:08",
								"pinyin": "Shanghai"
							}, {
								"id": 25,
								"pid": 0,
								"city_code": "",
								"city_name": "四川",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Sichuan"
							}, {
								"id": 46,
								"pid": 2,
								"city_code": "101220701",
								"city_name": "宿州",
								"post_code": "234000",
								"area_code": "0557",
								"ctime": "2019-07-11 17:30:11",
								"pinyin": "Suzhou"
							}, {
								"id": 58,
								"pid": 3,
								"city_code": "101230801",
								"city_name": "三明",
								"post_code": "365000",
								"area_code": "0598",
								"ctime": "2019-07-11 17:30:13",
								"pinyin": "Sanming"
							}, {
								"id": 76,
								"pid": 5,
								"city_code": "101280601",
								"city_name": "深圳",
								"post_code": "518000",
								"area_code": "0755",
								"ctime": "2019-07-11 17:30:21",
								"pinyin": "Shenzhen"
							}, {
								"id": 87,
								"pid": 5,
								"city_code": "101280501",
								"city_name": "汕头",
								"post_code": "515000",
								"area_code": "0754",
								"ctime": "2019-07-11 17:30:28",
								"pinyin": "Shantou"
							}, {
								"id": 88,
								"pid": 5,
								"city_code": "101282101",
								"city_name": "汕尾",
								"post_code": "516600",
								"area_code": "0660",
								"ctime": "2019-07-11 17:30:29",
								"pinyin": "Shanwei"
							}, {
								"id": 89,
								"pid": 5,
								"city_code": "101280201",
								"city_name": "韶关",
								"post_code": "512000",
								"area_code": "0751",
								"ctime": "2019-07-11 17:30:29",
								"pinyin": "Shaoguan"
							}, {
								"id": 120,
								"pid": 8,
								"city_code": "101310201",
								"city_name": "三亚",
								"post_code": "572000",
								"area_code": "0898",
								"ctime": "2019-07-11 17:30:46",
								"pinyin": "Sanya"
							}, {
								"id": 137,
								"pid": 9,
								"city_code": "101090101",
								"city_name": "石家庄",
								"post_code": "050000",
								"area_code": "0311",
								"ctime": "2019-07-11 17:30:48",
								"pinyin": "Shijiazhuang"
							}, {
								"id": 157,
								"pid": 10,
								"city_code": "101181701",
								"city_name": "三门峡",
								"post_code": "472000",
								"area_code": "0398",
								"ctime": "2019-07-11 17:30:58",
								"pinyin": "Sanmenxia"
							}, {
								"id": 158,
								"pid": 10,
								"city_code": "101181001",
								"city_name": "商丘",
								"post_code": "476000",
								"area_code": "0370",
								"ctime": "2019-07-11 17:30:58",
								"pinyin": "Shangqiu"
							}, {
								"id": 176,
								"pid": 11,
								"city_code": "101051301",
								"city_name": "双鸭山",
								"post_code": "155100",
								"area_code": "0469",
								"ctime": "2019-07-11 17:31:07",
								"pinyin": "Shuangyashan"
							}, {
								"id": 177,
								"pid": 11,
								"city_code": "101050501",
								"city_name": "绥化",
								"post_code": "152000",
								"area_code": "0455",
								"ctime": "2019-07-11 17:31:07",
								"pinyin": "Suihua"
							}, {
								"id": 187,
								"pid": 12,
								"city_code": "101201201",
								"city_name": "神农架",
								"post_code": "442400",
								"area_code": "0719",
								"ctime": "2019-07-11 21:24:00",
								"pinyin": "Shennongjia"
							}, {
								"id": 188,
								"pid": 12,
								"city_code": "101201101",
								"city_name": "十堰",
								"post_code": "442000",
								"area_code": "0719",
								"ctime": "2019-07-11 17:31:11",
								"pinyin": "Shiyan"
							}, {
								"id": 189,
								"pid": 12,
								"city_code": "101201301",
								"city_name": "随州",
								"post_code": "441300",
								"area_code": "0722",
								"ctime": "2019-07-11 17:31:11",
								"pinyin": "Suizhou"
							}, {
								"id": 203,
								"pid": 13,
								"city_code": "101250901",
								"city_name": "邵阳市",
								"post_code": "422000",
								"area_code": "0739",
								"ctime": "2019-07-11 21:24:01",
								"pinyin": "Shaoyang"
							}, {
								"id": 215,
								"pid": 14,
								"city_code": "101060401",
								"city_name": "四平",
								"post_code": "136000",
								"area_code": "0434",
								"ctime": "2019-07-11 17:31:21",
								"pinyin": "Siping"
							}, {
								"id": 216,
								"pid": 14,
								"city_code": "101060801",
								"city_name": "松原",
								"post_code": "138000",
								"area_code": "0438",
								"ctime": "2019-07-11 17:31:21",
								"pinyin": "Songyuan"
							}, {
								"id": 220,
								"pid": 15,
								"city_code": "101190401",
								"city_name": "苏州",
								"post_code": "215000",
								"area_code": "0512",
								"ctime": "2019-07-11 17:31:23",
								"pinyin": "Suzhou"
							}, {
								"id": 226,
								"pid": 15,
								"city_code": "101191301",
								"city_name": "宿迁",
								"post_code": "223800",
								"area_code": "0527",
								"ctime": "2019-07-11 17:31:29",
								"pinyin": "Suqian"
							}, {
								"id": 239,
								"pid": 16,
								"city_code": "101240301",
								"city_name": "上饶市",
								"post_code": "334000",
								"area_code": "0793",
								"ctime": "2019-07-11 21:24:03",
								"pinyin": "Shangrao"
							}, {
								"id": 243,
								"pid": 17,
								"city_code": "101070101",
								"city_name": "沈阳",
								"post_code": "110000",
								"area_code": "024",
								"ctime": "2019-07-11 17:31:39",
								"pinyin": "Shenyang"
							}, {
								"id": 271,
								"pid": 19,
								"city_code": "101170201",
								"city_name": "石嘴山",
								"post_code": "753000",
								"area_code": "0952",
								"ctime": "2019-07-11 17:31:54",
								"pinyin": "Shizuishan"
							}, {
								"id": 306,
								"pid": 22,
								"city_code": "101100901",
								"city_name": "朔州",
								"post_code": "036000",
								"area_code": "0349",
								"ctime": "2019-07-11 17:32:08",
								"pinyin": "Shuozhou"
							}, {
								"id": 314,
								"pid": 23,
								"city_code": "101110601",
								"city_name": "商洛",
								"post_code": "726000",
								"area_code": "0914",
								"ctime": "2019-07-11 17:32:10",
								"pinyin": "Shangluo"
							}, {
								"id": 336,
								"pid": 25,
								"city_code": "101270701",
								"city_name": "遂宁",
								"post_code": "629000",
								"area_code": "0825",
								"ctime": "2019-07-11 17:32:20",
								"pinyin": "Suining"
							}, {
								"id": 349,
								"pid": 27,
								"city_code": "101140301",
								"city_name": "山南",
								"post_code": "856000",
								"area_code": "0893",
								"ctime": "2019-07-11 17:32:23",
								"pinyin": "Shannan"
							}, {
								"id": 361,
								"pid": 28,
								"city_code": "101130301",
								"city_name": "石河子市",
								"post_code": "832000",
								"area_code": "0993",
								"ctime": "2019-07-11 17:32:25",
								"pinyin": "Shihezi"
							}, {
								"id": 388,
								"pid": 30,
								"city_code": "101210507",
								"city_name": "绍兴",
								"post_code": "312000",
								"area_code": "0575",
								"ctime": "2019-07-11 17:32:30",
								"pinyin": "Shaoxing"
							}
						]
					}, {
						"group": "t",
						"cities": [{
								"id": 26,
								"pid": 0,
								"city_code": "101030100",
								"city_name": "天津",
								"post_code": "300000",
								"area_code": "022",
								"ctime": "2019-07-11 17:30:08",
								"pinyin": "Tianjin"
							}, {
								"id": 34,
								"pid": 0,
								"city_code": "",
								"city_name": "台湾",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Taiwan"
							}, {
								"id": 47,
								"pid": 2,
								"city_code": "101221301",
								"city_name": "铜陵",
								"post_code": "244000",
								"area_code": "0562",
								"ctime": "2019-07-11 17:30:12",
								"pinyin": "Tongling"
							}, {
								"id": 72,
								"pid": 4,
								"city_code": "101160901",
								"city_name": "天水",
								"post_code": "741000",
								"area_code": "0938",
								"ctime": "2019-07-11 17:30:17",
								"pinyin": "Tianshui"
							}, {
								"id": 117,
								"pid": 7,
								"city_code": "101260601",
								"city_name": "铜仁市",
								"post_code": "554300",
								"area_code": "0856",
								"ctime": "2019-07-11 17:30:46",
								"pinyin": "Tongren"
							}, {
								"id": 132,
								"pid": 8,
								"city_code": "101310210",
								"city_name": "屯昌县",
								"post_code": "571600",
								"area_code": "0898",
								"ctime": "2019-07-11 17:03:56",
								"pinyin": "Tunchang"
							}, {
								"id": 145,
								"pid": 9,
								"city_code": "101090501",
								"city_name": "唐山",
								"post_code": "063000",
								"area_code": "0315",
								"ctime": "2019-07-11 17:30:51",
								"pinyin": "Tangshan"
							}, {
								"id": 190,
								"pid": 12,
								"city_code": "101201501",
								"city_name": "天门市",
								"post_code": "431700",
								"area_code": "0728",
								"ctime": "2019-07-11 17:31:12",
								"pinyin": "Tianmen"
							}, {
								"id": 217,
								"pid": 14,
								"city_code": "101060501",
								"city_name": "通化市",
								"post_code": "134000",
								"area_code": "0435",
								"ctime": "2019-07-11 21:24:02",
								"pinyin": "Tonghua"
							}, {
								"id": 227,
								"pid": 15,
								"city_code": "101191201",
								"city_name": "泰州",
								"post_code": "225300",
								"area_code": "0523",
								"ctime": "2019-07-11 17:31:30",
								"pinyin": "Taizhou"
							}, {
								"id": 255,
								"pid": 17,
								"city_code": "101071101",
								"city_name": "铁岭市",
								"post_code": "112000",
								"area_code": "024，+86-24",
								"ctime": "2019-07-11 17:31:46",
								"pinyin": "Tieling"
							}, {
								"id": 264,
								"pid": 18,
								"city_code": "101080501",
								"city_name": "通辽",
								"post_code": "028000",
								"area_code": "0475",
								"ctime": "2019-07-11 17:31:51",
								"pinyin": "Tongliao"
							}, {
								"id": 293,
								"pid": 21,
								"city_code": "101120801",
								"city_name": "泰安",
								"post_code": "271000",
								"area_code": "0538",
								"ctime": "2019-07-11 17:32:03",
								"pinyin": "Taian"
							}, {
								"id": 299,
								"pid": 22,
								"city_code": "101100101",
								"city_name": "太原",
								"post_code": "030000",
								"area_code": "0351",
								"ctime": "2019-07-11 17:32:06",
								"pinyin": "Taiyuan"
							}, {
								"id": 315,
								"pid": 23,
								"city_code": "101111001",
								"city_name": "铜川",
								"post_code": "727000",
								"area_code": "0919",
								"ctime": "2019-07-11 17:32:10",
								"pinyin": "Tongchuan"
							}, {
								"id": 363,
								"pid": 28,
								"city_code": "101130501",
								"city_name": "吐鲁番市",
								"post_code": "838000",
								"area_code": "0995",
								"ctime": "2019-07-11 17:32:25",
								"pinyin": "Tulufan"
							}, {
								"id": 389,
								"pid": 30,
								"city_code": "101210601",
								"city_name": "台州",
								"post_code": "318000",
								"area_code": "0576",
								"ctime": "2019-07-11 17:32:30",
								"pinyin": "Taizhou"
							}
						]
					}, {
						"group": "w",
						"cities": [{
								"id": 48,
								"pid": 2,
								"city_code": "101220301",
								"city_name": "芜湖市",
								"post_code": "241000",
								"area_code": "0553",
								"ctime": "2019-07-11 21:23:57",
								"pinyin": "Wuhu"
							}, {
								"id": 73,
								"pid": 4,
								"city_code": "101160501",
								"city_name": "武威",
								"post_code": "733000",
								"area_code": "0935",
								"ctime": "2019-07-11 17:30:18",
								"pinyin": "Wuwei"
							}, {
								"id": 108,
								"pid": 6,
								"city_code": "101300601",
								"city_name": "梧州",
								"post_code": "543000",
								"area_code": "0774",
								"ctime": "2019-07-11 17:30:43",
								"pinyin": "Wuzhou"
							}, {
								"id": 133,
								"pid": 8,
								"city_code": "101310215",
								"city_name": "万宁",
								"post_code": "571500",
								"area_code": "0898",
								"ctime": "2019-07-11 17:30:47",
								"pinyin": "Wanning"
							}, {
								"id": 134,
								"pid": 8,
								"city_code": "101310212",
								"city_name": "文昌",
								"post_code": "571300",
								"area_code": "0898",
								"ctime": "2019-07-11 17:30:48",
								"pinyin": "Wenchang"
							}, {
								"id": 135,
								"pid": 8,
								"city_code": "101310222",
								"city_name": "五指山",
								"post_code": "572200",
								"area_code": "0898",
								"ctime": "2019-07-11 17:30:48",
								"pinyin": "Wuzhishan"
							}, {
								"id": 179,
								"pid": 12,
								"city_code": "101200101",
								"city_name": "武汉",
								"post_code": "430000",
								"area_code": "027",
								"ctime": "2019-07-11 17:31:08",
								"pinyin": "Wuhan"
							}, {
								"id": 221,
								"pid": 15,
								"city_code": "101190201",
								"city_name": "无锡",
								"post_code": "214000",
								"area_code": "0510",
								"ctime": "2019-07-11 17:31:24",
								"pinyin": "Wuxi"
							}, {
								"id": 265,
								"pid": 18,
								"city_code": "101080301",
								"city_name": "乌海",
								"post_code": "016000",
								"area_code": "0473",
								"ctime": "2019-07-11 17:31:52",
								"pinyin": "Wuhai"
							}, {
								"id": 266,
								"pid": 18,
								"city_code": "101080405",
								"city_name": "乌兰察布",
								"post_code": "012000",
								"area_code": "0474",
								"ctime": "2019-07-11 17:31:53",
								"pinyin": "Wulanchabu"
							}, {
								"id": 272,
								"pid": 19,
								"city_code": "101170301",
								"city_name": "吴忠",
								"post_code": "751100",
								"area_code": "0953",
								"ctime": "2019-07-11 17:31:54",
								"pinyin": "Wuzhong"
							}, {
								"id": 294,
								"pid": 21,
								"city_code": "101121301",
								"city_name": "威海",
								"post_code": "264200",
								"area_code": "0631",
								"ctime": "2019-07-11 17:32:03",
								"pinyin": "Weihai"
							}, {
								"id": 295,
								"pid": 21,
								"city_code": "101120601",
								"city_name": "潍坊",
								"post_code": "261000",
								"area_code": "0536",
								"ctime": "2019-07-11 17:32:03",
								"pinyin": "Weifang"
							}, {
								"id": 316,
								"pid": 23,
								"city_code": "101110501",
								"city_name": "渭南",
								"post_code": "714000",
								"area_code": "0913",
								"ctime": "2019-07-11 17:32:11",
								"pinyin": "Weinan"
							}, {
								"id": 350,
								"pid": 28,
								"city_code": "101130101",
								"city_name": "乌鲁木齐市",
								"post_code": "830001",
								"area_code": "0991",
								"ctime": "2019-07-11 16:24:00",
								"pinyin": "Wulumuqi"
							}, {
								"id": 378,
								"pid": 29,
								"city_code": "101290601",
								"city_name": "文山市",
								"post_code": "663099",
								"area_code": "0876",
								"ctime": "2019-07-11 17:32:28",
								"pinyin": "Wenshan"
							}, {
								"id": 390,
								"pid": 30,
								"city_code": "101210701",
								"city_name": "温州",
								"post_code": "325000",
								"area_code": "0577",
								"ctime": "2019-07-11 17:32:30",
								"pinyin": "Wenzhou"
							}
						]
					}, {
						"group": "x",
						"cities": [{
								"id": 27,
								"pid": 0,
								"city_code": "",
								"city_name": "西藏",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Xizang"
							}, {
								"id": 28,
								"pid": 0,
								"city_code": "",
								"city_name": "新疆",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Xinjiang"
							}, {
								"id": 32,
								"pid": 0,
								"city_code": "101320101",
								"city_name": "香港",
								"post_code": "999077",
								"area_code": "+852",
								"ctime": "2019-07-11 17:03:38",
								"pinyin": "Xianggang"
							}, {
								"id": 49,
								"pid": 2,
								"city_code": "101221401",
								"city_name": "宣城",
								"post_code": "242000",
								"area_code": "0563",
								"ctime": "2019-07-11 17:30:12",
								"pinyin": "Xuancheng"
							}, {
								"id": 59,
								"pid": 3,
								"city_code": "101230201",
								"city_name": "厦门",
								"post_code": "361000",
								"area_code": "0592",
								"ctime": "2019-07-11 17:30:13",
								"pinyin": "Xiamen"
							}, {
								"id": 146,
								"pid": 9,
								"city_code": "101090901",
								"city_name": "邢台市",
								"post_code": "054000",
								"area_code": "0319",
								"ctime": "2019-07-11 17:30:52",
								"pinyin": "Xingtai"
							}, {
								"id": 159,
								"pid": 10,
								"city_code": "101180301",
								"city_name": "新乡市",
								"post_code": "453000",
								"area_code": "0373",
								"ctime": "2019-07-11 17:30:59",
								"pinyin": "Xinxiang"
							}, {
								"id": 160,
								"pid": 10,
								"city_code": "101180601",
								"city_name": "信阳",
								"post_code": "464000",
								"area_code": "0376",
								"ctime": "2019-07-11 17:31:00",
								"pinyin": "Xinyang"
							}, {
								"id": 161,
								"pid": 10,
								"city_code": "101180401",
								"city_name": "许昌市",
								"post_code": "461000",
								"area_code": "0374",
								"ctime": "2019-07-11 17:31:00",
								"pinyin": "Xuchang"
							}, {
								"id": 180,
								"pid": 12,
								"city_code": "101201601",
								"city_name": "仙桃",
								"post_code": "433000",
								"area_code": "0728",
								"ctime": "2019-07-11 17:31:08",
								"pinyin": "Xiantao"
							}, {
								"id": 191,
								"pid": 12,
								"city_code": "101200701",
								"city_name": "咸宁",
								"post_code": "437000",
								"area_code": "0715",
								"ctime": "2019-07-11 17:31:13",
								"pinyin": "Xianning"
							}, {
								"id": 192,
								"pid": 12,
								"city_code": "101200201",
								"city_name": "襄阳",
								"post_code": "441000",
								"area_code": "0710",
								"ctime": "2019-07-11 17:31:13",
								"pinyin": "Xiangyang"
							}, {
								"id": 193,
								"pid": 12,
								"city_code": "101200401",
								"city_name": "孝感",
								"post_code": "432000",
								"area_code": "0712",
								"ctime": "2019-07-11 17:31:13",
								"pinyin": "Xiaogan"
							}, {
								"id": 204,
								"pid": 13,
								"city_code": "101250201",
								"city_name": "湘潭市",
								"post_code": "411100",
								"area_code": "0731",
								"ctime": "2019-07-11 17:31:17",
								"pinyin": "Xiangtan"
							}, {
								"id": 205,
								"pid": 13,
								"city_code": "101251509",
								"city_name": "湘西",
								"post_code": "416000",
								"area_code": "0743",
								"ctime": "2019-07-11 17:04:00",
								"pinyin": "Xiangxi"
							}, {
								"id": 228,
								"pid": 15,
								"city_code": "101190801",
								"city_name": "徐州",
								"post_code": "221000",
								"area_code": "0516",
								"ctime": "2019-07-11 17:31:30",
								"pinyin": "Xuzhou"
							}, {
								"id": 240,
								"pid": 16,
								"city_code": "101241001",
								"city_name": "新余",
								"post_code": "338000",
								"area_code": "0790",
								"ctime": "2019-07-11 17:31:36",
								"pinyin": "Xinyu"
							}, {
								"id": 267,
								"pid": 18,
								"city_code": "101080902",
								"city_name": "锡林郭勒",
								"post_code": "026000",
								"area_code": "0479",
								"ctime": "2019-07-11 17:31:53",
								"pinyin": "Xilinguole"
							}, {
								"id": 268,
								"pid": 18,
								"city_code": "101081108",
								"city_name": "兴安盟",
								"post_code": "137400",
								"area_code": "0482",
								"ctime": "2019-07-11 17:04:05",
								"pinyin": "Xinganmeng"
							}, {
								"id": 274,
								"pid": 20,
								"city_code": "101150101",
								"city_name": "西宁",
								"post_code": "810000",
								"area_code": "0971",
								"ctime": "2019-07-11 17:31:54",
								"pinyin": "Xining"
							}, {
								"id": 307,
								"pid": 22,
								"city_code": "101101001",
								"city_name": "忻州",
								"post_code": "034000",
								"area_code": "0350",
								"ctime": "2019-07-11 17:32:08",
								"pinyin": "Xinzhou"
							}, {
								"id": 310,
								"pid": 23,
								"city_code": "101110101",
								"city_name": "西安市",
								"post_code": "710000",
								"area_code": "029",
								"ctime": "2019-07-11 16:24:00",
								"pinyin": "Xian"
							}, {
								"id": 317,
								"pid": 23,
								"city_code": "101110200",
								"city_name": "咸阳",
								"post_code": "712000",
								"area_code": "029",
								"ctime": "2019-07-11 17:32:12",
								"pinyin": "Xianyang"
							}, {
								"id": 379,
								"pid": 29,
								"city_code": "101291602",
								"city_name": "西双版纳",
								"post_code": "666100",
								"area_code": "0691",
								"ctime": "2019-07-11 17:04:30",
								"pinyin": "Xishuangbanna"
							}
						]
					}, {
						"group": "y",
						"cities": [{
								"id": 29,
								"pid": 0,
								"city_code": "",
								"city_name": "云南",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Yunnan"
							}, {
								"id": 90,
								"pid": 5,
								"city_code": "101281801",
								"city_name": "阳江",
								"post_code": "529500",
								"area_code": "0662",
								"ctime": "2019-07-11 17:30:30",
								"pinyin": "Yangjiang"
							}, {
								"id": 91,
								"pid": 5,
								"city_code": "101281401",
								"city_name": "云浮",
								"post_code": "527300",
								"area_code": "0766",
								"ctime": "2019-07-11 17:30:30",
								"pinyin": "Yunfu"
							}, {
								"id": 109,
								"pid": 6,
								"city_code": "101300901",
								"city_name": "玉林",
								"post_code": "537000",
								"area_code": "0775",
								"ctime": "2019-07-11 17:30:43",
								"pinyin": "Yulin"
							}, {
								"id": 178,
								"pid": 11,
								"city_code": "101050801",
								"city_name": "伊春市",
								"post_code": "153000",
								"area_code": "0458",
								"ctime": "2019-07-11 17:31:07",
								"pinyin": "Yichun"
							}, {
								"id": 194,
								"pid": 12,
								"city_code": "101200901",
								"city_name": "宜昌",
								"post_code": "443000",
								"area_code": "0717",
								"ctime": "2019-07-11 17:31:13",
								"pinyin": "Yichang"
							}, {
								"id": 206,
								"pid": 13,
								"city_code": "101250700",
								"city_name": "益阳",
								"post_code": "413000",
								"area_code": "0737",
								"ctime": "2019-07-11 17:31:17",
								"pinyin": "Yiyang"
							}, {
								"id": 207,
								"pid": 13,
								"city_code": "101251401",
								"city_name": "永州",
								"post_code": "425000",
								"area_code": "0746",
								"ctime": "2019-07-11 17:31:17",
								"pinyin": "Yongzhou"
							}, {
								"id": 208,
								"pid": 13,
								"city_code": "101251001",
								"city_name": "岳阳市",
								"post_code": "414000",
								"area_code": "0730",
								"ctime": "2019-07-11 21:24:02",
								"pinyin": "Yueyang"
							}, {
								"id": 218,
								"pid": 14,
								"city_code": "101060306",
								"city_name": "延边",
								"post_code": "133000",
								"area_code": "0433",
								"ctime": "2019-07-11 17:04:02",
								"pinyin": "Yanbian"
							}, {
								"id": 229,
								"pid": 15,
								"city_code": "101190701",
								"city_name": "盐城",
								"post_code": "224000",
								"area_code": "0515",
								"ctime": "2019-07-11 17:31:31",
								"pinyin": "Yancheng"
							}, {
								"id": 230,
								"pid": 15,
								"city_code": "101190601",
								"city_name": "扬州",
								"post_code": "225000",
								"area_code": "0514",
								"ctime": "2019-07-11 17:31:32",
								"pinyin": "Yangzhou"
							}, {
								"id": 241,
								"pid": 16,
								"city_code": "101240501",
								"city_name": "宜春",
								"post_code": "336000",
								"area_code": "0795",
								"ctime": "2019-07-11 17:31:37",
								"pinyin": "Yichun"
							}, {
								"id": 242,
								"pid": 16,
								"city_code": "101241101",
								"city_name": "鹰潭",
								"post_code": "335000",
								"area_code": "0701",
								"ctime": "2019-07-11 17:31:38",
								"pinyin": "Yingtan"
							}, {
								"id": 256,
								"pid": 17,
								"city_code": "101070801",
								"city_name": "营口",
								"post_code": "115000",
								"area_code": "-417",
								"ctime": "2019-07-11 17:31:46",
								"pinyin": "Yingkou"
							}, {
								"id": 269,
								"pid": 19,
								"city_code": "101170101",
								"city_name": "银川",
								"post_code": "750000",
								"area_code": "0951",
								"ctime": "2019-07-11 17:31:53",
								"pinyin": "Yinchuan"
							}, {
								"id": 281,
								"pid": 20,
								"city_code": "101150601",
								"city_name": "玉树",
								"post_code": "815000",
								"area_code": "0976",
								"ctime": "2019-07-11 17:04:10",
								"pinyin": "Yushu"
							}, {
								"id": 296,
								"pid": 21,
								"city_code": "101120501",
								"city_name": "烟台",
								"post_code": "264000",
								"area_code": "0535",
								"ctime": "2019-07-11 17:32:04",
								"pinyin": "Yantai"
							}, {
								"id": 308,
								"pid": 22,
								"city_code": "101100301",
								"city_name": "阳泉",
								"post_code": "045000",
								"area_code": "0353",
								"ctime": "2019-07-11 17:32:08",
								"pinyin": "Yangquan"
							}, {
								"id": 309,
								"pid": 22,
								"city_code": "101100801",
								"city_name": "运城",
								"post_code": "044000",
								"area_code": "国际:359；国内:0359",
								"ctime": "2019-07-11 17:32:09",
								"pinyin": "Yuncheng"
							}, {
								"id": 318,
								"pid": 23,
								"city_code": "101110300",
								"city_name": "延安",
								"post_code": "716000",
								"area_code": "0911",
								"ctime": "2019-07-11 17:32:13",
								"pinyin": "Yanan"
							}, {
								"id": 319,
								"pid": 23,
								"city_code": "101110401",
								"city_name": "榆林",
								"post_code": "719000",
								"area_code": "0912",
								"ctime": "2019-07-11 17:32:14",
								"pinyin": "Yulin"
							}, {
								"id": 337,
								"pid": 25,
								"city_code": "101271701",
								"city_name": "雅安",
								"post_code": "625000",
								"area_code": "0835",
								"ctime": "2019-07-11 17:32:20",
								"pinyin": "Yaan"
							}, {
								"id": 338,
								"pid": 25,
								"city_code": "101271101",
								"city_name": "宜宾",
								"post_code": "644000",
								"area_code": "0831",
								"ctime": "2019-07-11 17:32:20",
								"pinyin": "Yibin"
							}, {
								"id": 365,
								"pid": 28,
								"city_code": "101131012",
								"city_name": "伊犁",
								"post_code": "835000",
								"area_code": "0999、0901、0906",
								"ctime": "2019-07-11 17:04:25",
								"pinyin": "Yili"
							}, {
								"id": 380,
								"pid": 29,
								"city_code": "101290701",
								"city_name": "玉溪",
								"post_code": "653100",
								"area_code": "0877",
								"ctime": "2019-07-11 17:32:28",
								"pinyin": "Yuxi"
							}
						]
					}, {
						"group": "z",
						"cities": [{
								"id": 30,
								"pid": 0,
								"city_code": "",
								"city_name": "浙江",
								"post_code": null,
								"area_code": null,
								"ctime": null,
								"pinyin": "Zhejiang"
							}, {
								"id": 60,
								"pid": 3,
								"city_code": "101230601",
								"city_name": "漳州",
								"post_code": "363000",
								"area_code": "0596",
								"ctime": "2019-07-11 17:30:14",
								"pinyin": "Zhangzhou"
							}, {
								"id": 74,
								"pid": 4,
								"city_code": "101160701",
								"city_name": "张掖",
								"post_code": "734000",
								"area_code": "0936",
								"ctime": "2019-07-11 17:30:19",
								"pinyin": "Zhangye"
							}, {
								"id": 92,
								"pid": 5,
								"city_code": "101281001",
								"city_name": "湛江",
								"post_code": "524000",
								"area_code": "0759",
								"ctime": "2019-07-11 17:30:30",
								"pinyin": "Zhanjiang"
							}, {
								"id": 93,
								"pid": 5,
								"city_code": "101280901",
								"city_name": "肇庆",
								"post_code": "526000",
								"area_code": "0758",
								"ctime": "2019-07-11 17:30:30",
								"pinyin": "Zhaoqing"
							}, {
								"id": 94,
								"pid": 5,
								"city_code": "101281701",
								"city_name": "中山市",
								"post_code": "528400",
								"area_code": "0760",
								"ctime": "2019-07-11 21:23:58",
								"pinyin": "Zhongshan"
							}, {
								"id": 95,
								"pid": 5,
								"city_code": "101280701",
								"city_name": "珠海",
								"post_code": "519000",
								"area_code": "0756",
								"ctime": "2019-07-11 17:30:32",
								"pinyin": "Zhuhai"
							}, {
								"id": 118,
								"pid": 7,
								"city_code": "101260201",
								"city_name": "遵义",
								"post_code": "563100",
								"area_code": "0851",
								"ctime": "2019-07-11 17:30:46",
								"pinyin": "Zunyi"
							}, {
								"id": 147,
								"pid": 9,
								"city_code": "101090301",
								"city_name": "张家口",
								"post_code": "075000",
								"area_code": "0313",
								"ctime": "2019-07-11 17:30:52",
								"pinyin": "Zhangjiakou"
							}, {
								"id": 148,
								"pid": 10,
								"city_code": "101180101",
								"city_name": "郑州",
								"post_code": "450000",
								"area_code": "0371",
								"ctime": "2019-07-11 17:30:53",
								"pinyin": "Zhengzhou"
							}, {
								"id": 162,
								"pid": 10,
								"city_code": "101181401",
								"city_name": "周口",
								"post_code": "466000",
								"area_code": "0394",
								"ctime": "2019-07-11 17:31:01",
								"pinyin": "Zhoukou"
							}, {
								"id": 163,
								"pid": 10,
								"city_code": "101181601",
								"city_name": "驻马店",
								"post_code": "463000",
								"area_code": "0396",
								"ctime": "2019-07-11 17:31:01",
								"pinyin": "Zhumadian"
							}, {
								"id": 197,
								"pid": 13,
								"city_code": "101251101",
								"city_name": "张家界",
								"post_code": "427000",
								"area_code": "0744",
								"ctime": "2019-07-11 17:31:14",
								"pinyin": "Zhangjiajie"
							}, {
								"id": 209,
								"pid": 13,
								"city_code": "101250301",
								"city_name": "株洲",
								"post_code": "412000",
								"area_code": "0731",
								"ctime": "2019-07-11 17:31:18",
								"pinyin": "Zhuzhou"
							}, {
								"id": 231,
								"pid": 15,
								"city_code": "101190301",
								"city_name": "镇江",
								"post_code": "212000",
								"area_code": "0511",
								"ctime": "2019-07-11 17:31:32",
								"pinyin": "Zhenjiang"
							}, {
								"id": 273,
								"pid": 19,
								"city_code": "101170501",
								"city_name": "中卫",
								"post_code": "755000",
								"area_code": "0955",
								"ctime": "2019-07-11 17:31:54",
								"pinyin": "Zhongwei"
							}, {
								"id": 297,
								"pid": 21,
								"city_code": "101121401",
								"city_name": "枣庄",
								"post_code": "277100",
								"area_code": "0632",
								"ctime": "2019-07-11 17:32:06",
								"pinyin": "Zaozhuang"
							}, {
								"id": 298,
								"pid": 21,
								"city_code": "101120301",
								"city_name": "淄博",
								"post_code": "255000",
								"area_code": "0533",
								"ctime": "2019-07-11 17:32:06",
								"pinyin": "Zibo"
							}, {
								"id": 339,
								"pid": 25,
								"city_code": "101271301",
								"city_name": "资阳市",
								"post_code": "641300",
								"area_code": "028",
								"ctime": "2019-07-11 16:24:00",
								"pinyin": "Ziyang"
							}, {
								"id": 340,
								"pid": 25,
								"city_code": "101270301",
								"city_name": "自贡",
								"post_code": "643000",
								"area_code": "0813",
								"ctime": "2019-07-11 17:32:22",
								"pinyin": "Zigong"
							}, {
								"id": 381,
								"pid": 29,
								"city_code": "101291001",
								"city_name": "昭通",
								"post_code": "657000",
								"area_code": "0870",
								"ctime": "2019-07-11 17:32:28",
								"pinyin": "Zhaotong"
							}, {
								"id": 391,
								"pid": 30,
								"city_code": "101211101",
								"city_name": "舟山",
								"post_code": "316000",
								"area_code": "0580",
								"ctime": "2019-07-11 17:32:31",
								"pinyin": "Zhoushan"
							}
						]
					}
				],
				currentCity:'正在定位...',
				scrollTop:0,
				showSearch:false,
				searchResult:[]
			};
		},
		onLoad(e){
			let _this = this;
			uni.getLocation({
				type: 'wgs84',
				success: function (res) {
					if(res.errMsg == "getLocation:ok"){
						uni.request({
							url:`http://api.map.baidu.com/geocoder?output=json&location=${res.latitude},%20${res.longitude}&key=37492c0ee6f924cb5e934fa08c6b1676`,
							success:res=>{
								_this.currentCity = res.data.result.addressComponent.city;
							}
						})
					}
				}
			})
		},
		computed:{
			...mapState(["modifyAddress"]) 
		},
		methods:{
			...mapMutations(["setModifyAddress"]),
			selectCity(city, cityid){
				this.$store.commit("setModifyAddress", {
					id:this.modifyAddress.id,
					addr:this.modifyAddress.addr,
					city:city,
					cityid:cityid,
				});
				uni.navigateBack();
			},
			gotoCategory(id, flag){
				
				let _this = this;
				if(id == '#'){
					_this.scrollTop = 0;
				}
				const query = uni.createSelectorQuery().in(this)
				query.select("#"+id).fields({
					rect:true,
					size: true,
					scrollOffset: true
				}, res=>{
					_this.scrollTop = _this.scrollTop + res.top - 45 - uni.getSystemInfoSync().statusBarHeight;
					_this.$nextTick(function(){
						if(!flag){
							_this.gotoCategory(id, true)
						}
					})
				}).exec();
			},
			search(e){
				if(e.detail.value && e.detail.value.length > 0){
					this.showSearch = true;
					this.searchResult = [];
					for(let i=0; i< this.cities.length; i++){
						this.searchResult.push(...this.cities[i].cities.filter(x=>x.pinyin.startsWith(e.detail.value)));
					}
					console.log(this.searchResult.length);
				} else {
					this.showSearch = false;
				}
			}
		}
	}
</script>

<style>
	page{
		height:100%;
		width:100%;
		position:relative;
	}
	
	.city-select{
		height:100%;
		width:100%;
		position:relative;
	}
	.city-select .location label{
		color: #D7D7D7;
		display:inline-block;
		margin-left:30px;
	}
	
	.city-select .address-item{
		background-color:#fff;
		height:38px;
		line-height:38px;
		vertical-align:middle;
		color:#333333;
		padding-left:20px;
	}
	
	.city-select .search{
		height:50px;
		background-color:#cfcfcf;
	}
	
	.city-select .category-title{
		height:40px;
		line-height:40px;
		vertical-align:middle;
		background-color:#cfcfcf;
	}
	
	.city-select .search-result{
		border-top:1px solid #cfcfcf;
	}
	.city-select .city-category .address-list-item,
	.city-select .search-result .address-list-item{
		border-bottom:1px solid #cfcfcf;
		background-color:#fff;
		box-sizing:border-box;
	}
	
	.city-select .city-category .address-list-item:last-child{
		border-bottom:none;
	}
	
	.city-select .city-index{
		position:fixed;
		top:0;
		bottom:0;
		right:10px;
		margin:auto;
		width:20px;
	}
	
	.city-select .city-index > view{
		height:15px;
		width:15px;
		line-height:15px;
		vertical-align:middle;
	}
	
	.city-select .search{
		position:relative;
	}
	.city-select .search input{
		background-color:#fff;
		height:30px;
		line-height:30px;
		vertical-align:middle;
		text-align:center;
		width:80%;
		border-radius:15px;
		margin:auto;
		position:relative;
		top:10px;
	}
</style>
