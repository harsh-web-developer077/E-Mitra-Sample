/* ============================================================
   केंद्र की जानकारी — सिर्फ़ यही हिस्सा बदलना है
   ============================================================ */
const CONFIG = {
  demo: true,                       // असली जानकारी भरने के बाद false कर दें (ऊपर की पीली पट्टी हट जाएगी)
  ratesAreSample: true,             // दुकान के असली रेट भरने के बाद false कर दें
  name:  { hi: "आपका ई-मित्र केंद्र", en: "Aapka e-Mitra Kendra" },
  place: { hi: "श्री डूंगरगढ़", en: "Sri Dungargarh" },
  phone: "",                        // 10 अंक, जैसे "9812345678"
  whatsapp: "",                     // देश कोड के साथ, जैसे "919812345678"
  instagram: "",                    // हैंडल, @ के बिना
  address: {
    hi: "मुख्य बाज़ार, श्री डूंगरगढ़, ज़िला बीकानेर, राजस्थान 331803",
    en: "Main Bazaar, Sri Dungargarh, Bikaner district, Rajasthan 331803"
  },
  // Google Maps: दुकान की Google Business Profile बनने के बाद उसका लिंक यहाँ डालें
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Sri%20Dungargarh%20Rajasthan",
  mapEmbedUrl: "https://www.google.com/maps?q=Sri%20Dungargarh%20Rajasthan&output=embed",
  // रविवार (0) से शनिवार (6); बंद दिन के लिए null
  hours: [["10:00","14:00"],["09:00","20:00"],["09:00","20:00"],["09:00","20:00"],["09:00","20:00"],["09:00","20:00"],["09:00","20:00"]]
};

const CATS = [
  { id:"cert",   hi:"प्रमाण पत्र",     en:"Certificates" },
  { id:"id",     hi:"पहचान पत्र",      en:"ID cards" },
  { id:"scheme", hi:"योजना व पेंशन",   en:"Schemes & pension" },
  { id:"bill",   hi:"बिल व फ़ॉर्म",     en:"Bills & forms" },
  { id:"shop",   hi:"दुकान की सेवाएँ",  en:"Shop services" }
];

// fee खाली ("") रखने पर "सरकारी दर" दिखेगा; रकम भरने पर ₹ के साथ दिखेगी
const SERVICES = [
  { id:"domicile", cat:"cert", fee:"",
    hi:"मूल निवास प्रमाण पत्र", en:"Domicile (Bonafide) Certificate",
    docs:[
      ["आधार कार्ड","Aadhaar card"],
      ["जन आधार कार्ड","Jan Aadhaar card"],
      ["राशन कार्ड या वोटर आईडी","Ration card or voter ID"],
      ["10 साल से निवास का प्रमाण, जैसे पुरानी मार्कशीट, बिजली बिल या ज़मीन के कागज़","Proof of 10 years' residence, such as an old marksheet, electricity bill or land papers"],
      ["पासपोर्ट साइज़ फ़ोटो","Passport-size photo"],
      ["भरा हुआ आवेदन फ़ॉर्म, दो उत्तरदायी व्यक्तियों से प्रमाणित","Filled application form, attested by two responsible persons"]
    ]},
  { id:"caste", cat:"cert", fee:"",
    hi:"जाति प्रमाण पत्र", en:"Caste Certificate",
    docs:[
      ["आधार कार्ड","Aadhaar card"],
      ["जन आधार कार्ड","Jan Aadhaar card"],
      ["पिता का जाति प्रमाण पत्र या जमाबंदी की नकल","Father's caste certificate or a copy of the jamabandi"],
      ["राशन कार्ड","Ration card"],
      ["पासपोर्ट साइज़ फ़ोटो","Passport-size photo"],
      ["भरा हुआ और प्रमाणित आवेदन फ़ॉर्म","Filled and attested application form"]
    ]},
  { id:"income", cat:"cert", fee:"",
    hi:"आय प्रमाण पत्र", en:"Income Certificate",
    docs:[
      ["आधार कार्ड","Aadhaar card"],
      ["जन आधार कार्ड","Jan Aadhaar card"],
      ["राशन कार्ड","Ration card"],
      ["आय का स्व-घोषणा पत्र, दो सरकारी कर्मचारियों से प्रमाणित","Income self-declaration, attested by two government employees"],
      ["पासपोर्ट साइज़ फ़ोटो","Passport-size photo"]
    ]},
  { id:"birth", cat:"cert", fee:"",
    hi:"जन्म / मृत्यु प्रमाण पत्र", en:"Birth / Death Certificate",
    docs:[
      ["अस्पताल की पर्ची या डिस्चार्ज टिकट","Hospital slip or discharge ticket"],
      ["जन्म के लिए: माता-पिता का आधार कार्ड","For birth: parents' Aadhaar cards"],
      ["मृत्यु के लिए: मृतक और आवेदक का आधार कार्ड","For death: Aadhaar of the deceased and of the applicant"],
      ["जन आधार कार्ड","Jan Aadhaar card"]
    ]},
  { id:"marriage", cat:"cert", fee:"",
    hi:"विवाह पंजीयन", en:"Marriage Registration",
    docs:[
      ["वर और वधू का आधार कार्ड","Aadhaar cards of bride and groom"],
      ["दोनों का आयु प्रमाण: 10वीं की मार्कशीट या जन्म प्रमाण पत्र","Age proof of both: class 10 marksheet or birth certificate"],
      ["शादी का कार्ड","Wedding invitation card"],
      ["शादी की फ़ोटो","Wedding photograph"],
      ["दो गवाहों के पहचान पत्र","ID proof of two witnesses"],
      ["वर और वधू की पासपोर्ट साइज़ फ़ोटो","Passport-size photos of bride and groom"]
    ]},
  { id:"janaadhaar", cat:"id", fee:"",
    hi:"जन आधार कार्ड (नया / सुधार)", en:"Jan Aadhaar Card (new / correction)",
    docs:[
      ["परिवार के सभी सदस्यों का आधार कार्ड","Aadhaar cards of all family members"],
      ["महिला मुखिया की बैंक पासबुक","Bank passbook of the woman head of family"],
      ["राशन कार्ड","Ration card"],
      ["सभी सदस्यों की पासपोर्ट साइज़ फ़ोटो","Passport-size photos of all members"],
      ["चालू मोबाइल नंबर","A working mobile number"]
    ]},
  { id:"pan", cat:"id", fee:"",
    hi:"पैन कार्ड (नया / सुधार)", en:"PAN Card (new / correction)",
    docs:[
      ["आधार कार्ड","Aadhaar card"],
      ["2 पासपोर्ट साइज़ फ़ोटो","2 passport-size photos"],
      ["आधार से जुड़ा मोबाइल, OTP के लिए","Aadhaar-linked mobile, for the OTP"],
      ["सुधार के लिए: पुराना पैन कार्ड","For correction: the old PAN card"]
    ]},
  { id:"voter", cat:"id", fee:"",
    hi:"वोटर आईडी (नया / सुधार)", en:"Voter ID (new / correction)",
    docs:[
      ["आयु प्रमाण: जन्म प्रमाण पत्र या 10वीं की मार्कशीट","Age proof: birth certificate or class 10 marksheet"],
      ["पते का प्रमाण: आधार कार्ड या बिजली बिल","Address proof: Aadhaar card or electricity bill"],
      ["पासपोर्ट साइज़ फ़ोटो","Passport-size photo"],
      ["परिवार के किसी सदस्य का वोटर आईडी नंबर","Voter ID number of a family member"]
    ]},
  { id:"ration", cat:"id", fee:"",
    hi:"राशन कार्ड (नाम जोड़ना / हटाना)", en:"Ration Card (add / remove a name)",
    docs:[
      ["जन आधार कार्ड","Jan Aadhaar card"],
      ["सदस्यों का आधार कार्ड","Aadhaar cards of the members"],
      ["पुराना राशन कार्ड","Existing ration card"],
      ["नाम जोड़ने के लिए: जन्म या विवाह प्रमाण पत्र","To add a name: birth or marriage certificate"]
    ]},
  { id:"pension", cat:"scheme", fee:"",
    hi:"सामाजिक सुरक्षा पेंशन", en:"Social Security Pension",
    docs:[
      ["जन आधार कार्ड","Jan Aadhaar card"],
      ["आधार कार्ड","Aadhaar card"],
      ["बैंक पासबुक","Bank passbook"],
      ["आयु प्रमाण","Age proof"],
      ["विधवा पेंशन के लिए: पति का मृत्यु प्रमाण पत्र","For widow pension: husband's death certificate"]
    ]},
  { id:"scholar", cat:"scheme", fee:"",
    hi:"छात्रवृत्ति आवेदन", en:"Scholarship Application",
    docs:[
      ["जन आधार कार्ड","Jan Aadhaar card"],
      ["पिछली कक्षा की मार्कशीट","Marksheet of the previous class"],
      ["इस साल की फ़ीस रसीद","This year's fee receipt"],
      ["आय प्रमाण पत्र","Income certificate"],
      ["जाति और मूल निवास प्रमाण पत्र, जहाँ लागू हो","Caste and domicile certificates, where applicable"],
      ["छात्र की बैंक पासबुक","Student's bank passbook"]
    ]},
  { id:"kisan", cat:"scheme", fee:"",
    hi:"किसान सेवाएँ (पीएम किसान, फसल बीमा)", en:"Farmer Services (PM-Kisan, crop insurance)",
    docs:[
      ["आधार कार्ड","Aadhaar card"],
      ["जमाबंदी की नकल","Copy of the jamabandi"],
      ["बैंक पासबुक","Bank passbook"],
      ["आधार से जुड़ा मोबाइल","Aadhaar-linked mobile"]
    ]},
  { id:"bills", cat:"bill", fee:"",
    hi:"बिजली और पानी का बिल भुगतान", en:"Electricity & Water Bill Payment",
    docs:[
      ["पुराना बिल, या K नंबर / उपभोक्ता संख्या","An old bill, or the K number / consumer number"]
    ]},
  { id:"forms", cat:"bill", fee:"",
    hi:"सरकारी भर्ती और प्रवेश फ़ॉर्म", en:"Govt. Recruitment & Admission Forms",
    docs:[
      ["फ़ोटो और हस्ताक्षर","Photo and signature"],
      ["सभी मार्कशीट","All marksheets"],
      ["जाति और मूल निवास प्रमाण पत्र","Caste and domicile certificates"],
      ["आधार कार्ड","Aadhaar card"],
      ["चालू मोबाइल नंबर और ईमेल","Working mobile number and email"],
      ["SSO ID, नहीं है तो यहीं बन जाएगी","SSO ID; we can create one here if you don't have it"]
    ]},
  { id:"print", cat:"shop", fee:"",
    hi:"फ़ोटोकॉपी, प्रिंट, लेमिनेशन, पासपोर्ट फ़ोटो", en:"Photocopy, Print, Lamination, Passport Photo",
    docs:[
      ["प्रिंट के लिए फ़ाइल पेन ड्राइव में लाएँ या WhatsApp पर भेजें","For prints, bring the file on a pen drive or send it on WhatsApp"]
    ]}
];

// दुकान की अपनी सेवाओं के रेट (₹ में)। अभी नमूना हैं।
const SHOP_RATES = [
  { hi:"फ़ोटोकॉपी (ब्लैक एंड व्हाइट)", en:"Photocopy (black & white)", unit:["प्रति पेज","per page"],  price:"2" },
  { hi:"प्रिंट (ब्लैक एंड व्हाइट)",    en:"Print (black & white)",     unit:["प्रति पेज","per page"],  price:"5" },
  { hi:"रंगीन प्रिंट",                en:"Colour print",              unit:["प्रति पेज","per page"],  price:"10" },
  { hi:"स्कैन करके WhatsApp या ईमेल", en:"Scan to WhatsApp or email", unit:["प्रति पेज","per page"],  price:"5" },
  { hi:"लेमिनेशन (A4)",              en:"Lamination (A4)",           unit:["प्रति पेज","per page"],  price:"30" },
  { hi:"पासपोर्ट साइज़ फ़ोटो",          en:"Passport-size photos",      unit:["8 फ़ोटो","8 photos"],     price:"50" }
];

const T = {
  hi: {
    demo:"डेमो: केंद्र का नाम, फ़ोन नंबर, समय और रेट नमूना हैं। असली जानकारी मिलते ही बदल दिए जाएँगे।",
    navHome:"होम", navServices:"सेवाएँ", navRates:"शुल्क", navEnquiry:"पूछताछ", navContact:"संपर्क", langBtn:"English",
    titles:{ services:"सेवाएँ और ज़रूरी दस्तावेज़", rates:"शुल्क सूची", enquiry:"पूछताछ", contact:"संपर्क और समय" },
    kicker:"ई-मित्र कियोस्क", boardSay:"प्रमाण पत्र, जन आधार, पेंशन, बिल और सरकारी फ़ॉर्म का काम एक ही काउंटर पर।",
    boardSub:"आने से पहले देख लें कि कौन-से कागज़ लाने हैं, ताकि काम एक बार में हो जाए।",
    ctaServices:"सेवाएँ और ज़रूरी कागज़ देखें", ctaWa:"WhatsApp पर पूछें",
    lblToday:"आज का समय", lblAddress:"पता", lblPhone:"फ़ोन", lblHours:"खुलने का समय", lblMap:"नक्शा",
    catsH:"यहाँ क्या-क्या काम होता है", catsP:"अपने काम का प्रकार चुनें और ज़रूरी कागज़ों की सूची देखें।",
    catCount:n=>n+" सेवाएँ देखें", shopGo:"रेट देखें",
    stepsH:"काम कैसे होता है",
    s1h:"कागज़ तैयार करें", s1p:"सेवाओं की सूची से अपने काम के कागज़ इकट्ठा कर लें।",
    s2h:"केंद्र पर आएँ", s2p:"हम आपका आवेदन ऑनलाइन भरते हैं और रसीद देते हैं।",
    s3h:"रसीद संभालकर रखें", s3p:"प्रमाण पत्र तैयार होने पर रसीद नंबर से ही निकाला जाता है।",
    bandH:"कोई सवाल है?", bandP:"काम शुरू करने से पहले पूछ लें। कागज़ों और शुल्क की पूरी जानकारी मिल जाएगी।",
    bandForm:"पूछताछ फ़ॉर्म भरें", bandRates:"शुल्क सूची देखें",
    servicesH:"सेवाएँ और ज़रूरी दस्तावेज़", servicesP:"सेवा पर दबाएँ और देखें कि साथ में क्या लाना है। जो कागज़ तैयार हो जाए, उस पर निशान लगाते जाएँ।",
    searchLabel:"सेवा खोजें", searchPh:"जैसे: जाति प्रमाण पत्र, पेंशन", all:"सभी",
    docsLabel:"साथ लाएँ", docCount:n=>n+" कागज़", feeGovt:"शुल्क सरकारी दर से", fee:n=>"शुल्क ₹"+n,
    askWa:"इस सेवा के बारे में WhatsApp पर पूछें",
    none:"इस नाम की कोई सेवा सूची में नहीं है। WhatsApp पर पूछ लें, हो सकता है वह काम भी यहाँ होता हो।",
    docsNote:"यह सूची सामान्य जानकारी के लिए है। कुछ मामलों में और कागज़ लग सकते हैं, इसलिए आने से पहले पूछ लें। हर कागज़ की मूल प्रति और एक फ़ोटोकॉपी साथ लाएँ।",
    ratesH:"शुल्क सूची", ratesP:"ई-मित्र सेवाओं का शुल्क सरकार तय करती है। दुकान की अपनी सेवाओं के रेट साथ में दिए हैं।",
    govtH:"ई-मित्र सेवाएँ", shopH:"दुकान की सेवाएँ", colService:"सेवा", colFee:"शुल्क", colUnit:"इकाई", colPrice:"रेट",
    feeGovtShort:"सरकारी दर", sample:"नमूना",
    ratesNote:"हर काम की रसीद दी जाती है। सरकारी दर वाली सेवाओं का शुल्क रसीद पर लिखा आता है।",
    sampleNote:"ये रेट नमूना हैं। केंद्र के असली रेट मिलते ही बदल दिए जाएँगे।",
    enqH:"पूछताछ", enqP:"अपना सवाल लिखें। बटन दबाने पर WhatsApp खुलेगा और आपका संदेश तैयार मिलेगा। भेजना आपको वहीं से है।",
    fName:"आपका नाम", fMobile:"मोबाइल नंबर", fService:"सेवा", fMsg:"संदेश (ज़रूरी नहीं)", fOther:"अन्य / पता नहीं",
    send:"WhatsApp पर संदेश तैयार करें", errName:"अपना नाम लिखें।", errMobile:"10 अंकों का सही मोबाइल नंबर लिखें।",
    enqNote:"इस वेबसाइट पर कोई दस्तावेज़ अपलोड नहीं होता। आधार, पैन और बैंक के कागज़ केंद्र पर ही दिखाएँ।",
    asideH:"सीधे बात करें",
    contactH:"संपर्क और समय", contactP:"दुकान पर आएँ, फ़ोन करें या WhatsApp पर लिखें।",
    copy:"कॉपी करें", copied:"कॉपी हो गया", map:"Google Maps पर रास्ता देखें", mapHint:"नक्शा Google Maps में खुलेगा।", closed:"बंद",
    phoneSoon:"98XXX XXXXX",
    footOwn:n=>"यह "+n+" की अपनी वेबसाइट है। यह राजस्थान सरकार का ई-मित्र पोर्टल नहीं है।", footGov:"सरकारी पोर्टल:",
    openNow:t=>"अभी खुला है · "+t+" तक", closedNow:(d,t)=>"अभी बंद है · "+d+" "+t+" पर खुलेगा", closedLong:"अभी बंद है",
    today:"आज", tomorrow:"कल",
    days:["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"],
    waGeneral:n=>"नमस्ते, मुझे "+n+" से एक जानकारी चाहिए।",
    waService:s=>"नमस्ते, मुझे «"+s+"» का काम करवाना है। कौन-से कागज़ लाने हैं और शुल्क कितना लगेगा?",
    waForm:(n,m,s,x)=>"नमस्ते, मेरा नाम "+n+" है।\nसेवा: "+s+"\nमोबाइल: "+m+(x?"\nसंदेश: "+x:"")
  },
  en: {
    demo:"Demo: the kendra name, phone number, timings and rates are samples and will be replaced with the real details.",
    navHome:"Home", navServices:"Services", navRates:"Fees", navEnquiry:"Enquiry", navContact:"Contact", langBtn:"हिंदी",
    titles:{ services:"Services and required documents", rates:"Fee list", enquiry:"Enquiry", contact:"Contact and hours" },
    kicker:"e-Mitra kiosk", boardSay:"Certificates, Jan Aadhaar, pension, bills and government forms at one counter.",
    boardSub:"Check which papers to bring before you come, so the work gets done in one visit.",
    ctaServices:"See services and required papers", ctaWa:"Ask on WhatsApp",
    lblToday:"TODAY", lblAddress:"ADDRESS", lblPhone:"PHONE", lblHours:"OPENING HOURS", lblMap:"MAP",
    catsH:"What we do here", catsP:"Pick the kind of work you need and see the list of papers to bring.",
    catCount:n=>"See "+n+(n===1?" service":" services"), shopGo:"See rates",
    stepsH:"How it works",
    s1h:"Get your papers ready", s1p:"Collect the papers for your work from the services list.",
    s2h:"Visit the kendra", s2p:"We fill in your application online and give you a receipt.",
    s3h:"Keep the receipt safe", s3p:"When the certificate is ready, it is printed using the receipt number.",
    bandH:"Have a question?", bandP:"Ask before you start. We will tell you the papers and the fee.",
    bandForm:"Fill the enquiry form", bandRates:"See the fee list",
    servicesH:"Services and required documents", servicesP:"Tap a service to see what to bring. Tick each paper off as you get it ready.",
    searchLabel:"Search services", searchPh:"e.g. caste certificate, pension", all:"All",
    docsLabel:"BRING WITH YOU", docCount:n=>n+(n===1?" paper":" papers"), feeGovt:"Fee at the government rate", fee:n=>"Fee ₹"+n,
    askWa:"Ask about this service on WhatsApp",
    none:"No service by that name is on the list. Ask on WhatsApp; we may still be able to do it.",
    docsNote:"This list is general guidance. Some cases need extra papers, so ask before you come. Bring the original and one photocopy of every paper.",
    ratesH:"Fee list", ratesP:"Fees for e-Mitra services are fixed by the government. Rates for the shop's own services are listed alongside.",
    govtH:"e-Mitra services", shopH:"Shop services", colService:"SERVICE", colFee:"FEE", colUnit:"UNIT", colPrice:"RATE",
    feeGovtShort:"Govt. rate", sample:"Sample",
    ratesNote:"You get a receipt for every job. For services at the government rate, the fee is printed on the receipt.",
    sampleNote:"These rates are samples and will be replaced with the kendra's real rates.",
    enqH:"Enquiry", enqP:"Write your question. The button opens WhatsApp with your message ready. You send it from there.",
    fName:"Your name", fMobile:"Mobile number", fService:"Service", fMsg:"Message (optional)", fOther:"Other / not sure",
    send:"Prepare message on WhatsApp", errName:"Enter your name.", errMobile:"Enter a valid 10-digit mobile number.",
    enqNote:"No documents are uploaded on this website. Show Aadhaar, PAN and bank papers at the kendra only.",
    asideH:"Talk to us directly",
    contactH:"Contact and hours", contactP:"Visit the shop, call, or write on WhatsApp.",
    copy:"Copy", copied:"Copied", map:"Get directions on Google Maps", mapHint:"The map opens in Google Maps.", closed:"Closed",
    phoneSoon:"98XXX XXXXX",
    footOwn:n=>"This is "+n+"'s own website. It is not the Government of Rajasthan e-Mitra portal.", footGov:"Government portal:",
    openNow:t=>"Open now · until "+t, closedNow:(d,t)=>"Closed now · opens "+d+" at "+t, closedLong:"Closed now",
    today:"today", tomorrow:"tomorrow",
    days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    waGeneral:n=>"Hello, I need some information from "+n+".",
    waService:s=>"Hello, I need to get «"+s+"» done. Which papers should I bring and what is the fee?",
    waForm:(n,m,s,x)=>"Hello, my name is "+n+".\nService: "+s+"\nMobile: "+m+(x?"\nMessage: "+x:"")
  }
};

/* ---------- state ---------- */
const $ = id => document.getElementById(id);
const all = sel => document.querySelectorAll(sel);
const PAGE = ($("page") && $("page").dataset.page) || "home";
const HOSTED = document.documentElement.hasAttribute("data-hosted");
const FILES = { home:"index.html", services:"services.html", rates:"rates.html", enquiry:"enquiry.html", contact:"contact.html" };

let lang = "hi";
try { const s = localStorage.getItem("emitra-lang"); if (s === "hi" || s === "en") lang = s; } catch (e) {}
if (location.hash === "#en") lang = "en"; else if (location.hash === "#hi") lang = "hi";

let cat = "all", query = "";
try { const c = sessionStorage.getItem("emitra-cat"); if (c) { cat = c; sessionStorage.removeItem("emitra-cat"); } } catch (e) {}
const openSet = new Set(), ticked = new Set();

const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));
const wa = text => "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(text);
const prettyPhone = p => p.replace(/(\d{5})(\d{5})/, "$1 $2");
const pageHref = p => FILES[p] + (lang === "en" ? "#en" : "");

/* ---------- time ---------- */
const mins = t => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
function fmtTime(t) {
  const [h, m] = t.split(":").map(Number), h12 = h % 12 || 12, mm = String(m).padStart(2, "0");
  if (lang === "en") return h12 + ":" + mm + (h < 12 ? " AM" : " PM");
  const part = h < 12 ? "सुबह" : h < 16 ? "दोपहर" : h < 20 ? "शाम" : "रात";
  return part + " " + h12 + ":" + mm;
}
function nowIST() {
  const parts = new Intl.DateTimeFormat("en-GB", { timeZone:"Asia/Kolkata", weekday:"short", hour:"2-digit", minute:"2-digit", hourCycle:"h23" }).formatToParts(new Date());
  const get = k => parts.find(p => p.type === k).value;
  return { day: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(get("weekday")), min: Number(get("hour")) * 60 + Number(get("minute")) };
}
function renderStatus() {
  const L = T[lang], now = nowIST(), today = CONFIG.hours[now.day];
  let open = false, text = L.closedLong;
  if (today && now.min >= mins(today[0]) && now.min < mins(today[1])) { open = true; text = L.openNow(fmtTime(today[1])); }
  else if (today && now.min < mins(today[0])) text = L.closedNow(L.today, fmtTime(today[0]));
  else for (let i = 1; i <= 7; i++) {
    const d = (now.day + i) % 7, h = CONFIG.hours[d];
    if (h) { text = L.closedNow(i === 1 ? L.tomorrow : L.days[d], fmtTime(h[0])); break; }
  }
  all(".js-status").forEach(el => { el.textContent = text; el.className = "status js-status " + (open ? "is-open" : "is-closed"); });
  all(".js-today").forEach(el => { el.textContent = today ? fmtTime(today[0]) + " – " + fmtTime(today[1]) : L.closed; });
  const body = $("hoursBody");
  if (!body) return;
  // Monday first, equal neighbours merged
  const groups = [];
  [1,2,3,4,5,6,0].forEach(d => {
    const key = JSON.stringify(CONFIG.hours[d]), g = groups[groups.length - 1];
    if (g && g.key === key) g.days.push(d); else groups.push({ key, days:[d] });
  });
  body.innerHTML = groups.map(g => {
    const h = CONFIG.hours[g.days[0]], first = L.days[g.days[0]], last = L.days[g.days[g.days.length - 1]];
    return '<tr class="' + (g.days.includes(now.day) ? "today" : "") + '"><th scope="row">' + esc(g.days.length > 1 ? first + " – " + last : first) +
      "</th><td>" + esc(h ? fmtTime(h[0]) + " – " + fmtTime(h[1]) : L.closed) + "</td></tr>";
  }).join("");
}

/* ---------- home ---------- */
function renderCats() {
  const box = $("catTiles"); if (!box) return;
  const L = T[lang];
  box.innerHTML = CATS.map(c => {
    const list = SERVICES.filter(s => s.cat === c.id);
    const names = c.id === "shop" ? list[0][lang] : list.slice(0, 3).map(s => s[lang].replace(/\s*\(.*\)$/, "")).join(lang === "hi" ? ", " : ", ");
    const count = c.id === "shop" ? L.shopGo : L.catCount(list.length);
    const target = c.id === "shop" ? "rates" : "services";
    return '<a class="cat" data-nav="' + target + '" data-cat="' + c.id + '" href="' + pageHref(target) + '"><h3>' + esc(c[lang]) + "</h3><p>" + esc(names) + '</p><span class="go">' + esc(count) + "</span></a>";
  }).join("");
}

/* ---------- services ---------- */
function renderChips() {
  const box = $("chips"); if (!box) return;
  const L = T[lang];
  box.innerHTML = [{ id:"all", hi:L.all, en:L.all }].concat(CATS).map(c =>
    '<button type="button" class="chip" data-cat="' + c.id + '" aria-pressed="' + (cat === c.id) + '">' + esc(c[lang]) + "</button>").join("");
}
function renderServices() {
  const grid = $("svcGrid"); if (!grid) return;
  const L = T[lang], q = query.trim().toLowerCase();
  const list = SERVICES.filter(s => (cat === "all" || s.cat === cat) && (!q || s.hi.toLowerCase().includes(q) || s.en.toLowerCase().includes(q)));
  if (!list.length) { grid.innerHTML = '<p class="none">' + esc(L.none) + "</p>"; return; }
  grid.innerHTML = list.map(s => {
    const fee = s.fee ? L.fee(s.fee) : L.feeGovt;
    const items = s.docs.map((d, i) => {
      const id = "doc-" + s.id + "-" + i;
      return '<li><label for="' + id + '"><input type="checkbox" id="' + id + '"' + (ticked.has(id) ? " checked" : "") + "><span>" + esc(d[lang === "hi" ? 0 : 1]) + "</span></label></li>";
    }).join("");
    return '<details class="svc" data-id="' + s.id + '"' + (openSet.has(s.id) ? " open" : "") + ">" +
      "<summary><h3>" + esc(s[lang]) + '</h3><span class="meta">' + esc(L.docCount(s.docs.length)) + " · " + esc(fee) + "</span></summary>" +
      '<div class="docs"><span class="lbl">' + esc(L.docsLabel) + "</span><ul>" + items + "</ul>" +
      '<a class="ask" target="_blank" rel="noopener" href="' + esc(wa(L.waService(s[lang]))) + '">' + esc(L.askWa) + "</a></div></details>";
  }).join("");
}

/* ---------- rates ---------- */
function renderRates() {
  const g = $("govtRates"), sh = $("shopRates"); if (!g || !sh) return;
  const L = T[lang];
  g.innerHTML = CATS.filter(c => c.id !== "shop").map(c =>
    '<tr class="grp"><th colspan="2" scope="colgroup">' + esc(c[lang]) + "</th></tr>" +
    SERVICES.filter(s => s.cat === c.id).map(s =>
      '<tr><th scope="row">' + esc(s[lang]) + '</th><td class="' + (s.fee ? "price" : "") + '">' + esc(s.fee ? "₹" + s.fee : L.feeGovtShort) + "</td></tr>").join("")
  ).join("");
  sh.innerHTML = SHOP_RATES.map(r =>
    '<tr><th scope="row">' + esc(r[lang]) + '</th><td class="unit">' + esc(r.unit[lang === "hi" ? 0 : 1]) + '</td><td class="price">₹' + esc(r.price) + "</td></tr>").join("");
  $("sampleTag").hidden = !CONFIG.ratesAreSample;
  $("sampleNote").hidden = !CONFIG.ratesAreSample;
}

/* ---------- enquiry ---------- */
function formText() {
  const L = T[lang], sel = $("enqService");
  return L.waForm($("enqName").value.trim(), $("enqMobile").value.trim(), sel.options[sel.selectedIndex].text, $("enqMsg").value.trim());
}
function renderEnquiry() {
  const sel = $("enqService"); if (!sel) return;
  const L = T[lang], keep = sel.value;
  sel.innerHTML = SERVICES.map(s => '<option value="' + s.id + '">' + esc(s[lang]) + "</option>").join("") + '<option value="other">' + esc(L.fOther) + "</option>";
  if (keep) sel.value = keep;
  $("sendBtn").href = wa(formText());
  $("enqErr").hidden = true;
}

/* ---------- contact ---------- */
function renderMap() {
  const box = $("mapBox"); if (!box) return;
  const L = T[lang];
  if (HOSTED && CONFIG.mapEmbedUrl) {
    if (!box.querySelector("iframe")) box.innerHTML = '<iframe loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="' + esc(CONFIG.mapEmbedUrl) + '"></iframe>';
    box.querySelector("iframe").title = L.lblMap + ": " + CONFIG.address[lang];
  } else {
    box.innerHTML = '<div class="map-ph"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 4.5A2.5 2.5 0 1 1 12 11.5 2.5 2.5 0 0 1 12 6.5Z"/></svg>' +
      "<strong>" + esc(CONFIG.name[lang]) + "</strong><span>" + esc(CONFIG.address[lang]) + "</span><span>" + esc(L.mapHint) + "</span></div>";
  }
}

/* ---------- everything that depends on language ---------- */
function renderAll() {
  const L = T[lang], name = CONFIG.name[lang];
  document.documentElement.lang = lang;
  document.title = PAGE === "home" ? name + " · " + CONFIG.place[lang] : L.titles[PAGE] + " · " + name;
  all("[data-t]").forEach(el => { const v = L[el.dataset.t]; if (typeof v === "string") el.textContent = v; });
  $("demoBar").hidden = !CONFIG.demo;
  all(".js-name").forEach(el => { el.textContent = name; });
  all(".js-kicker").forEach(el => { el.textContent = L.kicker + " · " + CONFIG.place[lang]; });
  $("langBtn").textContent = L.langBtn;
  $("footOwn").textContent = L.footOwn(name);
  all(".js-address").forEach(el => { el.textContent = CONFIG.address[lang]; });
  const phoneText = CONFIG.phone ? prettyPhone(CONFIG.phone) : L.phoneSoon;
  all(".js-phone-text").forEach(el => { el.textContent = phoneText; });
  all(".js-wa").forEach(a => { a.href = wa(L.waGeneral(name)); });
  all(".js-map").forEach(a => { a.href = CONFIG.mapUrl; });
  if ($("svcSearch")) $("svcSearch").placeholder = L.searchPh;
  if ($("phoneNum")) {
    const num = $("phoneNum"); num.textContent = phoneText;
    if (CONFIG.phone) num.href = "tel:+91" + CONFIG.phone; else num.removeAttribute("href");
    $("copyBtn").hidden = !CONFIG.phone; $("copyBtn").textContent = L.copy;
    $("igRow").hidden = !CONFIG.instagram;
    if (CONFIG.instagram) { $("igLink").href = "https://www.instagram.com/" + CONFIG.instagram + "/"; $("igLink").textContent = "@" + CONFIG.instagram; }
  }
  renderCats(); renderChips(); renderServices(); renderRates(); renderEnquiry(); renderMap(); renderStatus();
  all("[data-nav]").forEach(a => { a.href = pageHref(a.dataset.nav); });
  all(".top nav a").forEach(a => { if (a.dataset.nav === PAGE) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
}

/* ---------- events ---------- */
const on = (id, ev, fn, cap) => { const el = $(id); if (el) el.addEventListener(ev, fn, cap); };
on("langBtn", "click", () => {
  lang = lang === "hi" ? "en" : "hi";
  try { localStorage.setItem("emitra-lang", lang); } catch (e) {}
  try { history.replaceState(null, "", "#" + lang); } catch (e) {}
  renderAll();
});
on("catTiles", "click", e => {
  const a = e.target.closest("[data-cat]"); if (!a) return;
  try { sessionStorage.setItem("emitra-cat", a.dataset.cat); } catch (err) {}
});
on("svcSearch", "input", e => { query = e.target.value; renderServices(); });
on("chips", "click", e => {
  const b = e.target.closest("[data-cat]"); if (!b) return;
  cat = b.dataset.cat; renderChips(); renderServices();
});
on("svcGrid", "toggle", e => {
  const d = e.target; if (!d.dataset || !d.dataset.id) return;
  if (d.open) openSet.add(d.dataset.id); else openSet.delete(d.dataset.id);
}, true);
on("svcGrid", "change", e => {
  if (e.target.type !== "checkbox") return;
  if (e.target.checked) ticked.add(e.target.id); else ticked.delete(e.target.id);
});
on("enqForm", "input", () => { $("sendBtn").href = wa(formText()); $("enqErr").hidden = true; });
on("enqForm", "submit", e => e.preventDefault());
on("enqMobile", "input", e => { e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10); });
on("sendBtn", "click", e => {
  const L = T[lang], err = $("enqErr");
  let msg = "", focus = null;
  if (!$("enqName").value.trim()) { msg = L.errName; focus = $("enqName"); }
  else if (!/^[6-9]\d{9}$/.test($("enqMobile").value.trim())) { msg = L.errMobile; focus = $("enqMobile"); }
  if (msg) { e.preventDefault(); err.textContent = msg; err.hidden = false; focus.focus(); return; }
  e.currentTarget.href = wa(formText());
});
on("copyBtn", "click", () => {
  const btn = $("copyBtn"), done = () => { btn.textContent = T[lang].copied; setTimeout(() => { btn.textContent = T[lang].copy; }, 1800); };
  const fallback = () => { const r = document.createRange(); r.selectNodeContents($("phoneNum")); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
  try { navigator.clipboard.writeText(CONFIG.phone).then(done, fallback); } catch (e) { fallback(); }
});

renderAll();
setInterval(renderStatus, 60000);

/* ---------- Google के लिए दुकान की जानकारी (सिर्फ़ असली साइट पर, डेमो में नहीं) ---------- */
if (HOSTED && !CONFIG.demo) {
  const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const ld = {
    "@context":"https://schema.org", "@type":"LocalBusiness", name:CONFIG.name.hi, alternateName:CONFIG.name.en,
    address:{ "@type":"PostalAddress", streetAddress:CONFIG.address.en, addressLocality:CONFIG.place.en, addressRegion:"Rajasthan", addressCountry:"IN" },
    openingHoursSpecification: CONFIG.hours.map((h, d) => h && { "@type":"OpeningHoursSpecification", dayOfWeek:dayNames[d], opens:h[0], closes:h[1] }).filter(Boolean)
  };
  if (CONFIG.phone) ld.telephone = "+91" + CONFIG.phone;
  const s = document.createElement("script"); s.type = "application/ld+json"; s.textContent = JSON.stringify(ld);
  document.head.appendChild(s);
}
