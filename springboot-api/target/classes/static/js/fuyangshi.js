(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([ 'exports', 'echarts' ], factory);
	} else if (typeof exports === 'object'
			&& typeof exports.nodeName !== 'string') {
		factory(exports, require('echarts'));
	} else {
		factory({}, root.echarts);
	}
}
		(
				this,
				function(exports, echarts) {
					var log = function(msg) {
						if (typeof console !== 'undefined') {
							console && console.error && console.error(msg);
						}
					};
					if (!echarts) {
						log('ECharts is not Loaded');
						return;
					}
					if (!echarts.registerMap) {
						log('ECharts Map is not loaded');
						return;
					}
					echarts
							.registerMap(
									'fuyang',
									{
										"type" : "FeatureCollection",
										"features" : [
												{
													"type" : "Feature",
													"id" : "341202",
													"properties" : {
														"name" : "颍州区",
														"cp" : [ 115.813914,
																32.891238 ],
														"childNum" : 3
													},
													"geometry" : {
														"type" : "MultiPolygon",
														"coordinates" : [
																[ "@@@@@@C@@@D@@@" ],
																[ "@@@@@@C@EA@B@@@BB@@AB@@@@@@BBA@BB@@@B@@A" ],
																[ "@@@@AACB@CAB@CC@@AA@@AGBBD@@ABSAI@E@MAE@M@KDKB@@MFIDEBAB@BABEAE@G@EBCBC@EDCDABGDEDGBE@CAGACACAEBCBGBEBGDEBC@E@CAAA@ECGA@CAE@A@CACAA@@@A@@B@BAFAHAH@D@BAB@@@@@@ABA@@B@@A@@@AA@B@@A@@@@B@@@@@B@@A@@B@@A@@@@BB@@@@@A@@BAB@@A@A@@@@@@B@@B@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@B@@@@@@@@@@A@@@@@@@A@@@@@@@@BA@@@@@@B@@@@@@@@@@@@A@ABA@AB@@@@A@@@@@@@AB@@@@A@@@A@A@@@@@AA@@A@@@I@AAABCB@@A@CA@@A@@@@@@@AB@@A@AAC@AB@@@@@BAB@BCBABABA@ABA@CBC@ABCB@BA@@@EBA@A@@BA@A@A@ADCDAFABABA@A@A@C@@@ADAFADAFCBADEDCDCFGBEBCBEBCBG@EACAEBG@CBEDCHCJCDBDAFCDCHEBGBC@G@GAEBCDCD@FDFBDBDDFBBFFDDHFDBFDAF@@@@A@@@@@A@@A@@A@@@@@@@@A@@@@@@A@@@@@AA@@A@@@@@@@@@@A@@A@@@@BA@@@@@@AA@AB@@AA@@@@@@@@A@@@@@A@@@A@@@@@CAA@@@AA@@@@@@A@A@@@A@@@A@@@C@A@@@A@@AA@@BA@@@A@@@A@@@A@@@A@@@A@@@A@@@A@@@A@AB@@@@A@@@AB@@A@A@@@CBA@AAE@I@G@G@CDEBCDCBEDGBCCECAC@CCEACCCACAECG@CACAIACEAACAAECEBEBCDABCFCDG@CBGBCAECCE@CEEGAIAEAAAE@GCC@EAE@G@C@EDAB@@BDBBBH@FBFBFBBDDBB@BBFBD@@@BBDFDHH@@BJBDBJBBFHDDBDDBBBDHDDBBHJTZBDFFBDBBBB@BBBDDBB@B@@@B@@@B@@AD@BB@@B@@BB@B@@BB@D@@BB@@@@@B@@BB@B@@@@@B@@BB@@@@@B@@@@@B@@@@B@@B@@A@@@@B@@@@@BB@@B@BB@@B@@@@BBBD@@@@@@A@A@A@A@AB@@AB@@@BBBDBBB@BBBAB@DAB@D@B@@BBBBDFBBDG@ABA@ABAB@DADBB@BA@@B@@ABCBA@A@ABAAC@CA@@ABADAB@DBB@BADA@ABA@CDABAFDB@DBBBBBBD@B@BBB@BD@D@B@FAD@BABC@E@C@CAC@A@ABABADAFCF@B@@BBBAB@@BBBBBBDFBBBBD@BABEBC@A@ABAB@B@BBB@B@BA@@@C@C@@@A@AB@@@BABBJ@D@B@DADAB@BBDD@@B@B@B@BEBCBCDABAB@DBBBDDDB@@BA@@BABA@C@A@ACCACB@BADEDCBA@AAACC@A@A@AB@D@BBBBB@DAD@B@B@DBDBD@BBB@BADA@A@A@@AABA@AB@FCFAB@F@B@D@JBLBRBLB@@@B@BAB@BCB@@@@B@JDB@FBBB@BAB@BBBBBD@B@D@B@BAFAFAB@D@DAD@BABCBA@CB@D@D@FAD@DAPEFADADANCXI\\ILCVIFAB@DAB@DADADAAI@EAE@ABAAEAGB@BCDA@BD@BD@@@@@@D@@J@@@@@@B@F@@@@@@@F@@A@@@@BC@@@@@EJ@B@@@@@@@@@DB@A@@DCB@DAD@BALALCJALCFADADEDABAF@H@B@DABABE@EBAFEDEBC@A@G@C@ABAHEFCTIDADAD@BBDBDBF@D@LCDCFE@GBCBADAD@D@D@FDLHFBB@D@@AB@@C@AAAGGAA@A@ABABADANAFAFALEAACECACI@ACGAEACCAA@A@EDCBCDEDGBCACCCEACCECE@CACEAG@GAE@GAEAC@EAAE@CDCDC@CDEBE@A" ] ],
														"encodeOffsets" : [
																[ [ 118286,
																		33778 ] ],
																[ [ 118286,
																		33769 ] ],
																[ [ 118708,
																		33548 ] ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "341203",
													"properties" : {
														"name" : "颍东区",
														"cp" : [ 115.858747,
																32.908861 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@HAHAJAHAJAHALCNENAJCFEFAJAFCDAFCFAJALAJCBC@EG@AAEEAGFCF@JFHBF@VDHBNCDCBIFIAGES@CFCJ@@GBG@KIIEEBEDCFAH@FAH@H@FAFAD@F@FCH@DAFAFAHALAH@JAJCHAH@HAH@H@FAH@F@@@@@BBB@@@B@@@B@@@@AB@BABAB@DABAB@B@DA@@@A@@@AB@@@B@@@@@BA@AB@@A@A@@AA@@A@@A@@@AA@AA@@AAB@BC@@@@@A@@AA@@@A@@B@@AB@@A@A@A@@@@AA@C@A@@BA@@@@AA@@@AAA@@BAB@B@@ABA@@@@@A@AFEBC@AB@@@ACB@@@BA@A@@BCBADABCJEBAJEBA@A@ABA@ABCBC@CBCBA@@BCBE@C@A@A@AAC@A@AACCC@AAA@IAK@A@@@A@@AA@AAC@CCEAE@EAA@C@A@CBG@A@G@A@C@C@A@A@E@AAAAACCAAAA@@I@C@G@EEEACCECEECEACAEAEAECGAABCBABABE@AAABC@ADCB@BAH@FAD@BCBAAAA@C@AAAAGKCEEEACABIBEDEBC@A@CACCCECAAAC@C@C@C@AB@B@B@DFLHDFDBB@DADABADGLEBGDMHGBC@A@A@CBCBCDCDADCL@BABC@ABEB@BAFDL@F@DCDABGBCBCBC@A@A@AAAABABC@CACA@CAM@G@EAGAEAEACAAAEGAGAAAAE@C@E@EBCBKJGBGDEBE@A@IAKCC@CBCBKFEBEBMBCBABAB@B@BBBHHBB@B@DA@@BC@A@EAKGECC@C@C@CBABAD@HEFCDKDC@E@CACAAAC@CBCBSJEDGFAB@B@D@H@BADCFEFAB@FAFABCBA@G@E@ABCBCFCBEBKDIBKDKBABC@CBA@CD@@@BAF@BAB@@@D@FA@@B@D@@@@DAFC@DCPEF@B@D@@B@@BA@B@@B@@@B@@B@ADAA@BABBDD@FD@@BBDBB@@B@@B@BBB@DBBBBBD@BBDBDBFBFBD@BBDDHJBBDB@DJHBBFHBBFFBDBBBB@@@@@BC@A@A@A@@ACABDC@@BB@@BA@@BF@@DD@@@BB@BB@BB@@@B@@@@@BBABBA@@BB@B@@BA@E@C@A@ABC@A@A@@HE@@D@@A@@@@B@B@B@@B@@BB@@BC@E@@BD@@DB@@@B@@@B@BBB@@B@H@B@HJ\\FBAB@DXB@FAXT@BFCF@BBNGBC@@B@@@@A@@B@@@DD@BABB@DD@@BB@@@C@@HA@CB@@A@A@@D@@@B@@@@@DC@BFA@@BB@@@@@B@@@BFB@@@B@@BD@B@F@@@C@@ABA@@BA@@DCB@BA@@DA@A@@BB@@@DB@@A@@@@@@B@@B@@@F@@@BF@B@D@F@@D@@@B@D@B" ],
														"encodeOffsets" : [ [
																118714, 33879 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "341204",
													"properties" : {
														"name" : "颍泉区",
														"cp" : [ 115.804525,
																32.924797 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@A@C@A@@@CE@C@A@E@@A@@@E@@@AA@@@@@@@@BA@@C@@AA@@@BCB@@ABA@CD@@AB@@AB@BD@@@E@A@C@@AA@@@A@AE@@A@@@@@A@@AB@AED@@C@@@@@A@@@CB@B@@@DAB@@GD@@@A@@AC@@CAAABC@@C@@@AB@@@@@@AD@HAAM@ADEAES@BW@EWA@CBAEAI[@G@A@G@AA@AAA@@@A@@@A@@CC@@AF@D@@AA@@AA@@@@A@A@A@@B@@@@CF@@GB@B@D@BAB@D@F@B@@AA@A@@AB@AAAB@A@@@@@A@@AAA@@AAA@@C@@CE@@AB@@AA@@AD@ACDB@BB@B@B@D@@A@@@@AAAAACEEAAEGAAIG@CCAAAGICCAAC@EAEACACAAAC@AAAACAA@AAA@@@@AA@CAAA@@ECC@ACBA@ABBBCA@@@@A@@@AA@B@@AA@@@@C@AFEDO@CEDCB@@@@@C@AB@@E@C@@BA@ABECA@@@@@@@@A@I@@F@@@@AD@@@@@BE@@@@@@@E@A@@@@@@@@IC@@@@@@@ACC@@ACBADA@BHBFAB@BBF@FBJCBCBCBA@CBA@EBUJKD[JWJMDCBCBEBOFCBC@EBC@C@A@@DABADABC@CBC@A@EBEBABA@C@A@C@AAAA@ABA@AAAEAA@ICA@@@@@DA@ABA@A@A@@KAQAKAIAC@A@E@A@EBEDA@@BABBB@@@B@BCBABA@AAC@CACAA@A@C@CBA@AAAAC@A@@B@B@BDDBB@BABCDCFABA@BDDD@B@B@DABAB@@AB@@CACCAACAA@ABCBADADAFA@A@A@@@CCAAA@CBCBA@C@I@AAAB@@A@@B@B@@@D@D@@ABA@A@AAA@A@AB@B@BADAFABC@AAAACEAAAAAA@@BAAA@AA@E@EDCBABAB@B@BBD@D@D@FADABC@EBA@C@C@@AAA@A@AACAAAACAA@ECABCB@DAB@BCBABA@CAA@CBAB@BB@@DBDAB@B@BABAD@BA@@@ABA@CACBA@AB@BAB@BCH@@@BABA@A@@DB@@@@@AB@@@@@@@B@BBHDNB@DDBBBB@@BB@BBD@JBBABEDABABCB@@BD@J@D@D@@@F@D@FDJ@BBB@@F@@BBBBBDBBB@@BBBB@@DBDBB@FF@@BBFBDBHBDBFBFBDBHBDBDDFBFBDBDBDDDBBFDD@DDHBD@HDFBHFDFBDBFBF@FBFBH@B@BBBBFFDB@AD@FCBAFEBCB@@C@AA@ECEE@A@A@@@ADCB@P@B@BAB@BCDQBCBCB@B@B@B@BBFHDDFFB@BBB@@AB@BABCBAB@DAB@DAB@FAFCREDCDADCFAJEBA@@FDFBFBDDFDFDD@HHFBFBFFJDFBFDFBDBFDDDDBDBHBB@@DBDADF@B@FBD@B@ABABADCB@B@BBD@BABABCDCB@BBBDBFDHDDBHFF@D@F@D@D@F@D@F@F@HADCBCDCDCDADBHDHBLLTANAFABG@QAIG@MA@@@@@A@ABAB@BA@A@G@@BAB@B@N@H@L@H@BCBAN@B@D@@G@IE@@AAC@EA@AIIA@@@C@KB@L@F@FAB@F@F@F@B@BBD@DAB@@@D@B@@@B@BAD@D@B@@ABADC@@B@J@JAFAFAJAB@" ],
														"encodeOffsets" : [ [
																118714, 33879 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "341222",
													"properties" : {
														"name" : "太和县",
														"cp" : [ 115.627243,
																33.16229 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@EDMFUBCBC@AA@@AA@@ABA@A@@BAB@B@@EBE@CBA@CBA@@DEDCBCFIFIJKHKJMDA@AB@BAB@FBF@F@FBB@FDB@B@B@D@B@DAB@@@D@HBDBB@JBB@B@BALCLCBA@@B@JCDADABAB@D@BA@@BA@CBA@@B@DAD@FABB@AD@DABAB@FA@@BE@ADABABAF@F@BALC@@@ABCBABADCBABA@ADA@@@A@AB@F@DAB@J@DCF@BA@@BABABA@@B@@AB@B@BADABAB@@AB@@AB@B@@ADCB@BA@@B@B@B@@@@@B@B@BB@@B@@@B@BAD@D@B@B@BAD@B@@@BADCBA@ABCBA@A@@BAB@BADCDCBABADCBA@AB@@ADCBABADABABADCBABABCB@@A@A@AB@@@@@D@@@BAB@DADABABA@A@C@A@ADAB@BABABC@ABA@AAA@ABA@EAA@AAAAAAC@A@ADA@A@A@AB@@A@C@A@A@A@AAA@A@CAABA@A@A@ABC@A@A@A@ABABA@ABCBABABABADABA@ABABA@@BA@CBG@ADA@ABA@@AA@CBAB@D@BABABA@ABAAA@A@CBC@AAAAC@@DAD@DABA@A@AAC@AAADA@ABGBACBAAGAMCA@AA@@@C@AB@BABA@ABA@I@EA@CCCA@AAA@AAA@C@AB@BA@ABA@AAAEEACAA@A@C@@BAD@@A@@@EAABG@AB@@ANCB@@A@ABABA@CBC@ABADCBCBA@AA@AAAAA@@A@AEAA@@AACAE@AGFABGHCDSPCDABEF@@ADCBABGFEBABABC@A@CBIBA@CBABCBCDCBABGDMDEBA@EBAA@AAC@@EACCAA@E@CCG@E@E@E@E@EBGBEBCBEDE@GBCBEDEBEDEDCBC@CAEAEACECEAEAGCCCCCCCACAC@G@EBE@EBC@CBEGAGCCACBCDCDADCDGBE@E@C@E@C@C@E@C@E@GECAGCECCAAA@ADADCBABA@AAC@A@ADABCBABAA@C@EAA@E@BCAC@CA@GACACACCECCAEAECEAICEEEAEAGGC@ECECCCEAEAEC@@ABIFEBCDCBCDQFEDEBA@CBA@CBA@ABADABA@@BA@AAA@EECCEGAAA@A@A@A@ADADCRADA@ABA@O@A@CD@B@@@B@BFFFDB@@B@DA@ADEFABEDC@@BCAEEAAAAA@G@EAEAE@EACAEAECAGCE@GACCG@CCCAECACCCACAEAEACCCAGACAEAEACAGACAEAAA@@EEA@CACA@@AAAA@@AACAAAAA@AE@@@@BDB@@@D@F@BBF@HA@A@EBGDEBCBCDCBCBEBEBCDEBCBEDCBGHADCBADCFADAFELAFADADAFCDADEBEDEBGBC@G@CAE@CAGBEBEFAD@DAF@F@D@FADCBCFEF@D@J@HDFBDDHDDBDDBDDBDDDDFBDBD@D@F@DAJCFADADCJADADADADAFDFDFBDFDDDDDFDDJBB@F@BAH@FDF@FADADCFCBADEFCFBJADBD@F@DBH@D@FBD@DBF@F@D@F@FBJ@H@FBD@DAF@BAH@D@F@FCF@DAD@J@FAF@DAHCFADADAHAFADADAFBHDBBFBF@F@FAD@D@D@F@DCDADCFCBEDCBCDIFCBCDGDABEDCDEDEFAFBFFFFBD@DBJ@FBFBFDAD@DEHCDQLIFFHDHBHA@@@AFAFABBBDBBBB@BD@@ADADBB@BBBD@B@BB@@BBBBBF@FBHBFDDHH@@NBJBLDLBN@D@DDFFD@D@D@DEFIDADAFBH@HBHBJFHBFBBABA@EBAJIBAD@DBBDDBDBFBD@DBBDFBF@H@JDDBL@F@D@DEDAD@FDBBBFBP@BB@H@J@F@H@JBL@D@D@F@DBF@HBJBDBFBbDF@FB" ],
														"encodeOffsets" : [ [
																118416, 34392 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "341225",
													"properties" : {
														"name" : "阜南县",
														"cp" : [ 115.590534,
																32.638102 ],
														"childNum" : 2
													},
													"geometry" : {
														"type" : "MultiPolygon",
														"coordinates" : [
																[ "@@@A@@@@@@AC@DA@DB" ],
																[ "@@H@F@FBD@HDF@BBFBJBHBFF@DDFFDDBHADAH@DCDEBADCFAFAFDBBBDFBBDBJBD@DDHBFBDDDBDDF@DBDFDDDHAFCDADCFADCH@H@J@F@BBB@DA@@B@B@@@BA@@B@@@@@BAB@@@B@@@B@@@B@@@B@@@B@@@B@@@B@@@B@@AB@@BB@@@B@D@@@B@@@B@@@B@B@@@@@@@BB@@B@DB@@@@B@@@B@@@@@B@@@@@@@@@BB@@BAB@@B@@@@B@@A@@B@@@@B@@@@@@@@B@@@BB@@@@B@@@@@@@@B@@@@@@B@@@@BB@@@@@B@@@@@BEECCAGECCEEAACEACACCE@EDCDCFAHBH@D@HAFADGDCBEACDCDIDGFCDAH@FADBFBH@DAFADAFAHADEDCFCBCDABEBCBEBC@@D@B@B@B@BABABEDCBCB@B@B@@AB@B@FA@@B@@ADABAD@DAB@BAB@BABADA@ABA@A@@@@BAD@BBB@@@BA@@@@@@B@@@DBB@@@DABABBJ@@@B@@@BB@@@@B@B@@@B@@@@@BA@@@@@@B@@@@@BAB@BAB@@@@@@@@@@@@@@A@@@@B@@A@@@@@@B@@@@@@@B@@@@@@@@@@@@A@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@AA@@@@A@@@@B@B@@@BA@AB@@@@@A@@A@@B@@@@AB@@@@A@@@@@A@@B@@@@ABB@@B@@@@AB@BA@@@@@@BA@A@CBGBGBE@A@AB@@@B@DBDBB@F@DBB@DH@FBBDBF@D@FAHCFAHADAFADBDBHBDBF@HAFCHCBADCFCD@DAFAH@F@FBBA@ABAFAJCNE@@LALCN@F@NBF@J@TBBA@@ACHA@BB@@BD@@DBA@DDABB@@BADG@C@G@A@EFCFCFCFCDCDEBCBE@C@C@EBGAECECE@E@E@G@EAE@EBEDGBADCFEFEFADCBC@CAECCEGACCECCAAAECAAEECCECCCEACCEACACCCACCG@CDCFCFCFAHCD@F@DAFAFAFAPESS_gQG@@C@CDGHIFGBK@A@C@GBEAA@A@EAAEAECEGKCA[cGGCCSEKEIGAEAG@ODU@A@ACAE@MDGBC@GKAACCIEECCAECEESWECAAECC@A@AB@@BBBDFJBB@DBD@FAFAHGJADKLEFCBCAAA@I@MAEACCCACCCCAAAC@CAEAC@CAA@CAA@A@ABCBEBEBKFOFEBEDIHCBCBCBA@EAGGCAAC@E@C@CFEDCFCBA@ABAAAAAAACAG@I@Q@EAA@AA@ABCDEDEBEBC@@@ABA@C@C@AAA@CAC@AAAAAACAA@AAAAA@A@A@A@AAC@E@AAA@EAA@ACCACACA@@AC@AAC@C@A@A@AB@@AB@B@B@@@B@BBD@D@B@B@D@BBF@B@B@B@B@@ABA@A@AACGCEEEACECOIMGAAAAA@A@@BABCFADCDIFEFCD@F@BCBC@OEA@GAKEKGQMECACCAAA@@A@ABC@EDCBEBAB@D@BBBB@B@D@BADAD@DBDBDBBBBDBF@BABC@IBMBC@C@C@A@CBEJENABEDA@C@E@C@G@CDAB@DBF@BABA@EBGBAB@BABBHABCFAFADBDBADF@@AA@B@AA@@AA@BBA@@@CAAHCHENADCHCHABA@EDCBABAB@B@BBD@B@BA@CAA@AB@@AB@BFF@B@@@BABA@C@EAA@ABAB@B@BBD@D@BABCBC@AACAC@E@ABEBGDIDGDEDCBEBCBAB@B@@@B@BD@DB@BBBBD@D@BADABABA@A@A@AA@AAA@@A@A@@B@D@B@@CF@@A@A@CACAA@C@EDA@ABC@AAAA@CA@AAC@A@AB@BBB@BBF@BBDBD@B@B@B@F@D@BAD@@@F@B@BA@CDC@A@A@CAAAACAAEAC@A@@AAEACA@A@A@@@@B@BBD@@ABA@A@C@IAQAQCQCE@IAGAMAIAA@A@@@ABCBA@ABA@@@A@A@@@@A@@DE@ABABA@A@@@AA@@AA@E@AAC@C@EAA@@@A@A@C@A@ABABCBGJA@AB@B@@@B@@BB@@BBBB@BBB@BB@@@@@B@@@FA@@B@@@FBB@@BB@@@@B@@A@@@C@A@ABE@CBC@AB@@A@@B@B@@@BB@B@FDDDBD@B@@@BADCBABA@A@@AAC@CAAAAC@AAABA@AD@B@D@DAB@BE@GBA@A@@@@@GNAJBLJPNVJTHRDBL@JBD@DBDLBDBB@BADCHABCFAFADAFADAD@FAFCH@DBHDDDBJBF@FCFAHADAHCHEJEFGBED@FAF@FAFAHAF@H@D@H@FAF@HAD@F@F@H@FAD@FAD@JAFCD@FAFAF@D@FADAFADAH@DAFCDAFADAD@JCADBHADBFAD@D@DADCDEDABGDAFAD@J@DBHBDDDDDDDFBDBHFBDBDFFDDDDDBBFFDDDDBDDHLDDFFDDDDFFDBFHDBBHCBCDCFCDAFADAFAD@FAD@D@HBDBF@D@D@H@D@DBF@FADBFAD@FCHAFGDEBCDEBCDEBEBAD@DAH@DADAHCDEFCFEBCL" ] ],
														"encodeOffsets" : [
																[ [ 118283,
																		33249 ] ],
																[ [ 118229,
																		33655 ] ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "341221",
													"properties" : {
														"name" : "临泉县",
														"cp" : [ 115.261688,
																33.062698 ],
														"childNum" : 3
													},
													"geometry" : {
														"type" : "MultiPolygon",
														"coordinates" : [
																[ "@@@A@A@@BA@@@A@A@A@A@A@@@AB@@@DCH@F@DADE@AB@BAB@BCB@F@B@@ABAAE@CAE@M@E@AB@DCF@JANAD@D@HENIF@DAH@HALCB@BBFBHFBBB@D@@@BABKBCB@BAD@DBDBDBBBD@D@J@RAH@DAFAR@PAPBd@X@JBHBJBJBBBBH@NBHFJFFHFPFPHDBB@@ABAD@B@D@BADAB@BABC@AB@DHHHHFHDP@J@FBDDDH@BDDB@D@BO@IBM@CAGCI@E@C@AB@FAD@HEB@D@B@DBBDBBB@B@H@BA@@@@@A@@A@@I@@BAD@D@B@B@BD@DBF@BB@B@@@BABADANCNEHA@ABC@C@A@ABAD@DAB@BAFAHCDAFCHCFCFCBECCEA@GBCDEH@DBJDD@FBFAFC@E@E@EDCF@FDF@H@HCBADCDABCBCFG@@@A@CBCBABAD@F@B@@ABAB@B@B@B@@@BA@@BB@@@@DFBBB@@@@CBAB@F@@AB@@@B@@C@AAA@@@CB@@AF@AC@BC@@A@A@@@AAAB@BADAB@BBBBBBDBFCAEEGB@BC@@HBD@BBDB@F@BABAB@B@B@DB@BBD@B@DAB@B@@@B@FBB@D@BAD@LKBA@ABA@CBAB@B@BBBD@B@BAF@B@D@BF@D@B@BBDB@B@D@D@@BBDA@@B@BABAHEBABADAD@FAL@HBD@HDRNBBBB@@BA@@B@@CBCDCB@@C@@@A@@AAA@CBA@AACAAA@@@@@ABABA@@B@B@BBD@DBD@DBBBBAB@B@BA@A@@AACEAAAA@@@A@CBA@CBAAA@AAACAAA@A@@BA@@BAB@B@B@B@@@@@@@ACAA@@@@@AA@@A@AA@@AGB@@C@@@D@HE@A@@@@@A@@@@AA@@@A@@@@@AAA@@C@@BA@@@A@@AAB@A@@@@A@@BA@@A@@@AFBD@BC@CAA@@@AAA@@@AA@@ABC@@@A@@@A@@@AAACCAA@AAAAAACEEACSYGIAACCCGAACAACCCEGAAAIACAI@@GGECAC@A@@ACAE@AAACCAAAEAE@EAGAAAC@@BAFCD@DKFADEFEDCBGBC@CBG@CBCFAFADCFADCFAHCBEDG@EBCAEBC@EAE@C@C@G@C@CAEAC@G@CBC@EBCBEBCBEDCDEDCDAAGCAEGCAEECCCCEECCGKCCCACCECAECACCCCEEACACGECAEACCCCCCACAG@C@IBCBEHCBAFCDCBC@C@CBCAEBCAGBCIDC@CBEBCBEDCBG@CBEBCBEBC@E@EBEBC@EDIBC@EBC@EBG@E@E@C@GBE@EBG@C@G@E@GBEBEBE@EBC@AFEHIFGFGDCBGBEBEDE@IACACCAG@CDGBE@EBCBCBEBCBEDEBADGBC@AAAACCKCAC@IAK@CAGQISMUIOAKBIHM@@AA@@B@@ABABA@AAAAACACAEACAEACCA@CBABCBEDCB@BCB@@@DD@H@BBBB@BABCDCDA@C@AAECA@A@CBC@A@CAAA@CAAKEAA@@ACAC@AAAC@A@A@ABAB@@@B@@DBDDB@BB@DBB@@ABABA@C@C@E@ACCAC@C@CBADADA@ABEAC@E@A@AD@@@D@BABGFCB@B@B@BB@@@@@B@@@@@BBDBBBD@B@D@@ABA@BB@@DB@DBB@BB@B@BCBGFCBABA@@@@BBDBBBDBBAD@HABABA@@@AAAAAAA@A@@B@B@B@F@D@D@B@BBDBBB@DBB@D@BA@@@A@AAC@ABA@@BADADA@@B@BBBBFBBB@@AB@@E@A@A@@B@BAB@B@D@D@B@@B@DBD@BBB@BBBBBBBF@B@@@B@@C@A@C@A@A@A@@A@C@AAAA@CAA@C@A@@B@BDF@B@D@D@B@@@D@B@F@FCDCDGFGFC@CBAAAA@ADCDCHEBC@@@AAA@ACAAAA@E@@@AAA@A@@AA@@@A@AB@@@BBD@F@JBBAD@DA@A@C@CB@@@B@BB@BDDD@FBFABCDAF@B@FBDBFDFBJ@F@DABABCBAB@FAFBH@H@BBBDBHZDNDF@F@FADCBADEBADAFBH@DBBDBFBD@B@FCHCHAJ@F@D@BD@B@BGJCFKFGDCDGJAB@F@DDLFHBD@D@@KJABAFBFBBJBLADB@BAFAHCHCDCBGBKAIAG@SFMFGFAD@HBHAFABCDA@IBCDCB@B@D@BBFBD@BABABCDA@E@QBI@GBE@C@GCGCAAEAA@EBEBEFGFCBCBC@O@OAOBKBGBE@M@SBEBABAB@B@BBBDBRFBBBB@B@DADABCDAFABEB]LKFWBWBMAK@MAG@C@GEIEE@E@CBCFCJGTEDCDGBEBCDCFELADC@E@M@K@IDGBGJEJAHBF@BDBDBJDTJ@BABAHKLEJ@DBB@BXERCB@D@RBB@@@@@@@@B@@@BB@@B@@@@B@B@@@@@B@@D@@@B@@@@@@BB@@@@@@B@BB@@B@B@BBB@B@@@@BEF@@A@A@CB@@AD@@C@AB@@AB@BA@A@AB@D@@@B@@@D@D@JCF@BCDADABCF@BBBBDBDBB@B@@BB@FAB@BA@@DAB@DABCF@BE@CBCDABC@MA@F@HBHFHDFBD@FDLBD@FAFAD@@A@AB@B@B@DBBFBBB@BBBBDB@@@VDJ@B@@B@@BBBF@BB@B@B@BB@BBB@DBBCB@BA@BDBAF@D@B@B@HAD@F@B@BAD@B@BAF@@ABC@@B@BBDBBADA@A@A@CCB@@@A@@D@AA@@FA" ],
																[ "@@HA@@@@@A@@B@@@@AA@@@@@GF@@@@" ],
																[ "@@@A@@@@AA@@AD@@@@D@" ] ],
														"encodeOffsets" : [
																[ [ 117728,
																		33937 ] ],
																[ [ 118286,
																		33778 ] ],
																[ [ 118288,
																		33769 ] ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "341226",
													"properties" : {
														"name" : "颍上县",
														"cp" : [ 116.259122,
																32.637065 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@C@CAC@AAC@CAC@ACCAEAAAAAC@E@C@ABA@ABCDCBAD@BAB@DAB@H@D@BAB@FBHBFBDBB@DBB@D@BAHAB@DCBAHCHCBAHEBC@A@C@A@A@AAKAA@AAAAA@CCE@A@A@ADCBAHCB@BA@AA@CAAACCAA@AAA@C@A@C@@@ABABABEDA@ABABA@ABABE@AACAA@E@@ACBA@G@Q@EAEAEAECG@C@CD@@C@@AC@A@CBC@C@ADAB@PCAK@GAC@GACA@E@ABGM@A@ABADC@AAA@AAAB@@AB@D@BAB@BC@@AC@A@ABABABABABADABADCBCDAB@B@B@DBHBD@FATABD@BDBH@LAF@BABA@C@E@AAIBGBABAD@D@FAHAJ@D@BABA@ABA@GBC@C@CBCBCDCBEBCBA@GBE@CBABABAB@B@BAB@@C@A@AAAAAA@A@AA@@BGDC@E@G@ADBF@LA@@JCAA@A@IAKBCLBJ@L@HBF@D@FBPBF@J@F@LCNEF@FADABADCFEBA@CDIBE@CBC@EDIMC]O@@]AOKSMa_JGaKSYAYJkPOYJQJqXS`a~YVq@oBE]IYcUJgCQIAQXYMSHS_YN]{ILGRg@KjaLGDM\\ARYS`CAYLiDeNMjQdsXSDg@IGOFEBEBEBCBE@C@GDEBEDEDCD@DDHBDDDBDBDDFBDDFDDDFFDBFDBBFBBDDDFBDFHDDBF@DADCDEBEFEFCDABCHAF@FBF@F@H@F@FDFDFBFAH@F@D@DAFADCFCDEDEDEDED@F@B@H@DCHAB@BAFCF@DCDCD@DBFFBD@FBHBF@HBH@FBBD@DDFDFBDDFDDDBHAFCDCDAFCB@B@DBBDBFDH@BDJDBDFBBDADAD@LDJBB@F@FAHCHALIDAFAF@D@F@BBBBBHFHBBDBFBFBHBFBH@N@DBB@BD@DADABBBBBB@B@D@DADAHABADC@C@ECKBE@AFABAD@BA@ADKBCDCDCDADAB@B@D@HANGHCFAHKBCBABC@CAAECGCEK@C@A@ABAD@D@D@D@BBDBDFDDDBB@D@FAFCJABABDFFDFHLBBBBD@B@BBABADC@EBG@ABA@CD@BADBB@BAFABABADBBDHBFBFBFBDDFFFFDDDFBFFH@D@J@@@BBBBDDBBBB@B@F@B@B@D@D@B@H@BAH@D@B@DBB@FBFDF@DBD@BBB@@@B@@@BBL@JBB@BDDBD@B@BBD@B@BHCFAFAH@H@F@F@F@F@JBDAF@FADAFC@EBC@E@CDEHAJAFCDABCHCFAHCFAHAD@FAH@FBFBFDHBFBFDFBHBFBHDF@JDJBLDHBHDFDDDDHBBFDFFDDFB@@DFBBBBB@D@B@DAB@TADADABABABABC" ],
														"encodeOffsets" : [ [
																119189, 33681 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "341282",
													"properties" : {
														"name" : "界首市",
														"cp" : [ 115.362117,
																33.26153 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@JERKDCFG@CBCECEAEAI@CAC@EAEEAEBEFEFCDCFCBAHCDCDAJEDCDAFCDADEBCDC@C@E@C@CBC@E@EAEAECAAGBEBCBCBEBGBCBCDEBG@CBE@E@IBC@CDE@E@E@CBG@ABE@CAC@E@GAI@E@E@C@EAE@CAC@E@CAG@C@EACBCAIDEFEBCDADEBCBC@ECE@EBG@A@EAACIECCCCCECACCECEBEBCBCBCBCDIBCBCDEBI@C@E@CACACCECCACCCCAACCCCGACCE@G@I@CFEDEDABC@E@C@EBE@CBCFEFAHADBF@DBH@D@HAFAFCFABCDCBEBCBCBEFKBEBCDEBCDABCHGDAFCDAFADCFAFADADADCDAFAHCFAB@B@@GAE@A@E@C@@CA@AAA@ACI@E@C@E@@@C@C@IAC@@DABABAFCBAAA@IAC@AAA@@AAAACCA@CMAG@A@A@@@@@@BA@@@@A@@CABAACAC@CAC@AAA@A@@@ABAB@B@@@@BBDBBBB@DAB@BB@@@B@@@DA@CDAD@DA@@@AB@@AAAAQMGCC@GAK@EBC@CBABABGFABABA@@@CBAA@@@C@C@ACAAAA@C@E@@A@C@ABE@A@AACAAA@A@AB@DAB@BABKLC@ABC@A@EAA@@@A@A@CBA@C@AAA@@C@A@ABABA@A@ECAAAC@GA@@ADA@FHBFEDCAAAAAAAA@CBABA@BB@B@@@B@BD@@ABDE@@BA@@D@@BB@B@DA@@@A@@BE@A@AB@D@@A@AACE@@@@AA@@AB@@A@A@A@A@AB@BA@E@C@ABABAD@D@B@@EHADADCBCDABGDG@E@ECE@CD@F@F@FEDEBEAC@ICCAG@CFAD@HFBDDAFEDEDGDEDCBGDEBABA@CBC@AB@B@B@DAD@BGBMFMDCBABAB@@A@A@@AAE@CACA@A@C@C@AB@@@JB@@@@B@@@@ABG@A@A@AAACCAA@C@A@GFC@EBA@@B@D@FDJBH@DAN@JAPD@D@PGD@F@B@BBBFBBBBDARCB@D@BADCB@D@B@@BBDBL@D@@B@D@DCBAB@BBB@@BDPC@AB@@@B@BA@AB@@@@DL@FABABAFADAFAD@H@@FJ@D@@@B@BCB@DC@@BBJBD@BBB@@@D@@B@B@BBBBBBB@LBLBB@BDF@DBF@DBBB@B@D@BCBIBGB@B@@ABBD@DDBDBHBBBBDBBDDBBBBBB@B@FCJ@D@HBDHHHFDDBD@F@B@B@@@B@@@B@@@B@@@BA@@DAB@B@BA@@B@BAB@B@B@@AB@@ABA@AB@BBL@B@B@@@B@B@BBB@B@@@@B@@@BA@BBBFBDBH@DABADAD@FAFBB@BD@BAHCF@B@D@DDJ@HBJFT@BA@CBI@IAEBAB@BBH@FALCRCP@BEBWAO@K@ABABAB@B@B@DNVDDHDBFDFBD@DADCDEHMR@DAJ@L@FDF@BBB@F@B@DABCB@DD@BAB@BBF@@@@@@DBBABAB@@BB@@@BBDDAFC@ADCB@BEB@BA@@B@JBJBBB@F@VBFBH@PA@@@@BC@ABA@@DB@@B@BB@@@BAB@@@@B@@BDA@BBB@BFCBA@@B@@B@@@@BA@@@@B@FAB@BA@@B@B@BA@@@DDHJLHJHBDDD@@B@@B@@@@BB@@@@@BDCDADA@GB@D@D@D@BAFADAHE@E@@@AB@@FB@FC@@BA@EBAB@DDBB@@" ],
														"encodeOffsets" : [ [
																118170, 34310 ] ]
													}
												} ],
										"UTF8Encoding" : true
									});
				}));