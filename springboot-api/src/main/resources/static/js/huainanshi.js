(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('huainan', {"type":"FeatureCollection","features":[{"type":"Feature","id":"340405","properties":{"name":"八公山区","cp":[116.841111,32.628229],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AAAB@@AACECCACCC@@NGA@FCHCBA@C\\SAC@ACCEMCACAA@@AA@@A@@@A@AB@@@LF@@L@AEAC@AA@CC@AB@BC@@A@@@BACEB@@A@AAAA@@@A@A@A@A@@@@AA@A@A@CDABABABCC@@@@@@@AED@@AB@@A@I@B@BG@A@CCE@@CDAABABCBCBABAECCBEBABA@A@A@G@@F@D@@ADABAD@@BBC@@AA@C@ABA@AD@B@@ADBFBFBBA@A@@B@@ABAB@B@@AB@@A@EBCACBE@C@ABA@C@A@@A@@@A@A@C@@BA@@BA@AAA@@@A@@AAC@A@@AA@@CCDIB@B@BADABCFCD@BBF@D@DADADABCBCBC@IBC@ABAB@@AD@F@FBB@D@D@BADBDPLFHBHAFOLADBDBFHH@B@@@@@@LLBDBBDDBFB@BAhONGHEBEDQBMFIFEHEBBBB@@BB@@DDBBFHFFDDLGHE@A"],"encodeOffsets":[[119667,33457]]}},{"type":"Feature","id":"340406","properties":{"name":"潘集区","cp":[116.816879,32.782117],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@PCZCDA@EBCDCDAD@BDDF@BNATEBIFABA@GBCDAD@DCBAF@FBDBBAJGNGJCR@JAFABC@CEGAGCAJGZQTKHEHGNGLGHDFBF@FAFEDE@EACCAFCFCLI^Q@CCC@C@CB@LANBDC`SJEFED@hKTCFADA@A@@@@AA@@B@D@B@D@BABABCBABABABAFCBAFIBA@A@C@@BCDAFAD@DBHB@C@I@AAED@F@HKDG@EBCDARCF@BC@AWKAA@AHEHDDBJFHBHBD@BCJID@LHVNBADEFGBC@ICIGIKKKEGCC@MAMAEAGAKCKESKQKIGICI@MDKFKDMDYBQ@CE@IICSCKCGROCOEGGCEA@GBC@AAC@IGEAA@E@A@C@CB@CGICHCJEJ@@ADA@ABKHEDEFAC@BGFKHCCEEEGAACC@@AA@@AAAAGFEFEJANCRAFGFMHgPABA@QFGDE@YFA@AD@BAFAD@BBBDFDD@B@B@FC@KHA@CBA@CBA@E@EVBDBDD@@B@DADABAFAB@D@@@BBB@@@BABA@CBGB@@@AA@EAA@ADCNEJCDABCBA@C@KACAA@@@@ACAEEAA@@BC@A@@C@IBGAEECDED@DBF@DABABA@EDABAD@BABEBAB@DABAB@DA@BB@B@BCH@@C@@@ABAB@DBJDNBH@FAD@BAJABALAB@B@BAB@BBDDBDDLHBBDBDBFBD@DBDBHHBBA@ABCBCDA@BBBD@BDFDHB@DFBF@BABI@@B@R@BDJ@@BBB@PABBBDBJBF@L@DA@C@@DBH@BpMFAHA"],"encodeOffsets":[[119538,33719]]}},{"type":"Feature","id":"340404","properties":{"name":"谢家集区","cp":[116.865354,32.598289],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CICQ@C@G@CEE@CBADEBOBEDE@GDGHGFAX@LBDAFEAGGECC@E@ODI@ECCKIAE@E@EFAF@JBFARIRGTEHEJOPMBECE@CBCFE@GGYAKDCHCDCDEDAH@HDFDFAFI@EAQCAK@ECIIGCEAIBEA@QCMBA@@@A@AAAAA@ABA@CBEBC@E@A@ABKBG@ABCCCCCCG@A@E@CAIAMkBeBkAQBKFOPOXAP@zBJJL^RABGDQDSFCFBFNHJJFL@L@JEFOJGHINCFMHAHBNAFCBM@KFCDCFGFMLCCGECAE@AB@DCHCFAFBL@FCDCBYDEBAHAH@FHAF@@BBFDDDB@DADAFABILCDA@@DB@@BB@D@BB@@@B@@BB@BAB@@AB@@@D@B@B@@@BB@D@B@BAD@F@DADBFAB@@@BA@@@ABABA@@@AB@B@AAAEAEBC@@@ABCB@BAD@B@@BD@AA@@BCBABC@@@C@EH@B@B@B@BAFADAFDABABADADABBBDC@@DF@D@BAHA@J@B@@@BA@@FC@B@@@@@@DDBABABADCB@B@B@@B@@B@B@B@B@@@B@BB@B@BA@DFAB@@B@@@ADA@@BDDB@@BBDBFK@@@KE@@A@@B@B@@@BB@@BB@DBDBFNDD@BBD[T@DABGDEDB@MH@@DDBDDDDFBB@@BABBBDFEFCLGBAB@BC@@FIDIDGHJ@DDAD@B@F@B@FBJHD@BBD@HAB@"],"encodeOffsets":[[119721,33444]]}},{"type":"Feature","id":"340421","properties":{"name":"凤台县","cp":[116.722769,32.705382],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@E@CBCBABC@ABABAB@BA@ABA@A@@AAA@ACCIEGACCA@@ADGJ[@EACCIEIIGKEQGYIUOKMIKGOGEGEQG_GcICJ@FAD@DAFCJ@DABEFCDABCBEBE@MFKDE@I@E@OAEAC@E@GAK@I@KAADBL@J@BBBID@@KBE@CA@B@H@FCDAH@@BBB@B@BBBB@B@B@DA@ABA@A@ABABAB@DAF@HABADAFCDADAD@D@DAD@HAB@BABABC@I@GBEBC@C@ABABAHBJ@B@F@DABABE@KBG@CA@AACSBEBC@GACAA@A@A@CBADAF@@CBEBABABABAB@B@BBD@@ADA@ABC@A@@BA@BB@BBB@BCDAB@B@BHNBAF@B@BD@HBD@HBLODA@CB@B@DAD@D@BBD@@@DC@@D@DDHBFBFBF@F@R@HABBD@@@FBBBD@BAFAB@BABAB@BCBAFABAB@B@@@D@B@DBB@BBBDDBBDBB@@BABA@GDABCD@B@B@BDF@DBBBB@BBBBL@B@B@B@D@BADGFABGDGDABCDA@GBABC@A@CAA@CAEAGAEAA@ABC@G@A@CBA@ABC@ABCDAD@BAB@B@D@FBDBBBBBFDD@BBD@DBD@BBD@D@D@@@D@BCH@D@D@FBH@B@BABEFCFABCFEFAD_^AH@DBBBDBFDF@DBFBF@DBBDDDBBB@BAB@H@DBHADBBBDAD@DAF@B@BDFDBBDBD@BD@DAJAVGLAZG^IXGVExK\\EU|MnKlI\\EXAvAR@TAZARA@AAG@CD@B@@C@KAEAIACAAOBA@AA@@CI@A@Q@AJ@BA@AAECEA@CGCE@AACAAB@DCDABAB@AAGGCACAC@EACACAAAKGCCCAAC@ABA@A@ABABKBABI@ABC@EAGCMAI@CBABA@@D@@@DG@A@AAAB@@CBABA@CBAFABA@ABCBAFCB@BABA@CAE@CFCDCFFHBJAD@@@@BAD@@BBFFDB@B@@B@DBLBD@B@DABADCFIDMBCB@FBB@@B@@HADAB@BA@A@@AA@A@@@CBABEBABC@C@AC@ACACFUF@B@DAB@DAB@LGD@@E@A@ACCCEAA@ABCBE@ABCB@ZEF@HCREAECCAAACKK@@@@@@@AGGAEACBCPKBEAGEGOKACBC@A@C@CAA"],"encodeOffsets":[[119576,33437]]}},{"type":"Feature","id":"340402","properties":{"name":"大通区","cp":[117.052927,32.632066],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@A@ADAJEFABAEAOKICAAAE@CAC@CACAC@KCCGAIAECCCAACAEACACE@CBEFGJGDEBGFU`B@BC@ADGBCBC@U@O@EBCBGLQBABA@ADCLKBC@G@AACCEACEAECCAAECK_@A@E@C@@FG@CAG@A@@@AA@@A@A@A@A@EB@@C@A@AAA@@A@@@@CC@@AEA@@A@@AA@@ECAACACA@@@A@@@@A@@BA@@AA@@@AA@@@@A@@B@@A@@@@@A@@@A@@B@@@@ABA@A@@@A@A@A@CD@@A@A@AACBA@CACAA@AA@@A@@DA@EHA@@BCBABA@A@@@@ACA@@@@A@@@AB@@@BA@@@AA@@A@C@AB@@AB@@@BAAAAA@A@A@A@@@A@A@A@A@@A@@@A@@@@@@A@@A@@@@A@GECAYNGCU@EDADNP@BA@AB@@A@AB@@A@A@@@@@@@AB@@AAA@@@ABA@A@ABC@@@A@@@@@@BA@@@B@@@@B@@@@A@@@A@@@@BCBABA@@@@@@BBB@B@@@@ABCBA@@B@@@BB@@@@@@BADBB@@A@@B@B@@@@@@@@BB@B@BF@DAJABHCFCFCHEHAFBPBVJN@DABBB@B@@@@BB@@B@@D@BBB@@@BFDB@@BB@@@BB@BABA@ADABBD@@@@@D@@B@@D@DBBBC@AB@@BB@@@BABA@@BBBB@@@@ADABAD@@CDAB@@@@EJEF@@@BNB@@@@BB@@@@@@D@@@@@BBB@@@@@B@LB@B@@@F@@@@@J@@@B@@@B@H@BIAC@@@@@A@@@E@CPADCFLFLDHBFBNBNBD@HDLFLLHJDJ@JADEHCFABCBA@EDED@BABBF@DBDBDDDB@DBPBFBLDFBPFD@DDDBFBFALAFADAFCHAD@F@J@FCBA@AAA@A@ABEBCD@F@@@BADBJBFBFA@ADCBCD@D@DBDALA"],"encodeOffsets":[[120009,33521]]}},{"type":"Feature","id":"340403","properties":{"name":"田家庵区","cp":[117.018318,32.644342],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@DEBCDOF@@@B@@@@@D@JB@A@G@A@@@A@@@I@@@@@E@@@AKAA@@@@@A@AA@@@@C@@@@@@@AA@@@@MA@A@@FEFI@@@@BADC@@BCBABC@@@@AAAA@@ABAB@@A@@AA@@BADAA@C@CA@@@@C@@@@ACBABCB@BA@AAA@@A@@AA@EC@A@@AA@A@CA@@@AA@@@@@AAABA@CIMAUAOBEFGDGDEDEAGIBCBE@@A@AAA@@@@@@@@@A@AB@@@AABC@A@@@@A@@A@@@AB@DABA@@@@@AAA@A@@@@B@BADA@A@@B@@@B@@@@@@A@@A@@@B@@A@@@@B@@@D@BAB@B@BA@@B@BB@@BA@@@@@@B@B@@@BAB@@@BAB@@AMOBCFCV@HDZMAAACAIFADCBCAI@GCAACAA@G@EACCAACACCC@C@C@A@C@A@@B@@@@A@A@EB@@AB@AEACCE@ACAACAAAA@@AAACA@AC@@AAA@AAAEA@AA@@@CCAAAA@@@@AA@@ABC@@BA@@AA@@@AA@BAAAB@@CAA@AA@@C@AAAAAAC@@AB@@AA@@@A@@@A@AA@@CAA@@A@@@A@CA@@A@A@C@A@GA@@CAAAA@@AC@AAAAA@AA@AA@AAA@A@A@@AA@@@A@@@A@@@@@@@AC@@AA@@@A@@BEAI@GEEAAEAiB@@BNBJ@D@F@BDHDDDDAD@BAHAL@B@B@FADAF@DAB@BBBBB@B@B@@ABDN@RFBJAFBHDJJFDL@DBBR@FEJEBECGCG@CBCFCDGDCDBLHZ@HEFAD@DDFAFONIPGFSFQHQJEBIAE@EB@F@FBFLJDD@FCJ@P@FDDHFBHEFCBKAW@EBGHCH@HCFAFAPCFAB@DFF@D@H@DDRDJDFHHPFPDHQLDTDJD@JDFR@ZANCLCLENCJ@JDJHRLTL"],"encodeOffsets":[[119852,33469]]}},{"type":"Feature","id":"340422","properties":{"name":"寿县","cp":[116.785349,32.577304],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ECCCCACAYECAGEIAA@BFBJCJGDGHED@DAHBNADK@G@E@K@EBSHCAC@KBGFODGADIBCBGBC@EEGEACAAAACDCHI@OPQCCGCGCCAGCQCOCOAKAWAMCMEGEAECEECIEGEEEECCEEECCEGGCCEIEIGCCGAI@GBG@G@G@ICICGCIIIFC@GBIBMFK@I@GAGAMAGCGCECECGCEC]AEBEJCLBN@`@RAVDVAFCHABGBE@GBEBGDKFGDKDOFMFOF@@@@CBOFEFCDEDGFCBEDEDEDGDEBGBGAI@CBIBGBGBGDGBCBBBB@BHDLBH@DABA@@BCFCNABABC@@B@BBF@D@DBB@BDD@BDBB@@@BBE@DB@D@DEHCHCD@DSPOfJdAVCNOLADEHKlPTAPYTCFJJRFHNHDBDBFFHALIT@JJTAB@TELAJElGHADIJOhSRIHEFANAHAJDNFLNPAFEDEBEFEDADADDFBD@DBFBD@F@FBF@D@DBHLTHb`INbLTBP@^ @^PNDdJ`HRHHFHFHPJLLNVPZJRHLFJHFJDJBD@FI\\CH@BB@DDHBJFDD@BBB@BB@B@BAB@@ABABABAD@BADADAF@@E@EBC@@BABAD@JAD@DADABABCBC@C@CAE@ADCDEBABC@A@AJADCB@DCJKBABEBC@CCACCAE@AE@GB@EBGBGFAZCDADC@EAKBEDEDG@CBAF@DBHFDDNKHEDEDCLEN@DABEAMBGNGDEJMHGPIFE@I@KEKIIMGAEDETERCHCBA]QIKAI@yBOPWPOLERAlBfAlA@@jAFBBBRCJALAVBPDB@B@BA@E@IBEAGAE@IAG@I@IAEEACCDEBCDCBEH@FDDBFAFABCCEEGEEGC@CAE@AAGCCCCCCACCE@CAE@CBE@EBCBGBEDCF@D@FDDDDBFDDBFBHCDEDCBCBGBG@C@CACCGCCAG@CAIAE@CCEAAACECACGECAECGAEAG@C@E@E@C@E@C@CAEBG@CAECCEEE@C@CBONI\\M@CBCAE@C@C@EEECGACCACCCACAGCC@GAE@E@E@GBE@E@EAAEAE@EBA@EDGBC@EBGBCBEBCDCBCBEDAHCDAHAF@D@HCDEFEBEBCBGBCBEBE@C@CBC@C@EBCBE@CBCBEBADCDCFCFADCFADCDCDE@E@GAC@C@CAGAECEAEAECCAECGEGACCC"],"encodeOffsets":[[119839,32776]]}}],"UTF8Encoding":true});}));