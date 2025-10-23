'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "08ee3cbc1143fdac571cd6a88d40db5d",
"assets/AssetManifest.bin.json": "d482fa0da19d87337e4929a83dfd733c",
"assets/AssetManifest.json": "c40ae3fae9f4b83a91455a7fb0465aea",
"assets/assets/fonts/BoxIcons.ttf": "92ba7cbb384d35ae4858f9b59d8fc373",
"assets/assets/fonts/FontAwesome.ttf": "de6bf66865cf2734984feeeb9c638a3a",
"assets/assets/fonts/Nunito-Bold.ttf": "91019ffb3b1df640e444b34e5a73dfc3",
"assets/assets/fonts/Nunito-Regular.ttf": "0c890be2af0d241a2387ad2c4c16af2c",
"assets/assets/fonts/OctIcons.ttf": "71c7d381e58ae844420306f7a3bbbe5a",
"assets/assets/icons/adobe.svg": "a7237b79d8ed1e0de60bfc8e1163bb41",
"assets/assets/icons/api.svg": "22126e2226068e7a503342a6dfa98076",
"assets/assets/icons/appstore.svg": "88b556a61d56b4206c5ce35093416c39",
"assets/assets/icons/bootstrap.svg": "ed7996c91bc1e96999f856108c7d59ec",
"assets/assets/icons/call.svg": "d2bd76f14bbebdb345af258b3e7c74d5",
"assets/assets/icons/css3.svg": "d14adc9690fb37fafb8db10234d9c135",
"assets/assets/icons/dart.svg": "5a486f285c3d4167b6dfea55aad140f7",
"assets/assets/icons/figma.svg": "d7c351770456a3a11a0bc74b7bc5b7f0",
"assets/assets/icons/firebase.svg": "c525317ba1011024985140a956b044f3",
"assets/assets/icons/flutter.svg": "a020c38a0d805ce6f8a12e05e042a321",
"assets/assets/icons/gitlab.svg": "1cdec9b13a0dcf203813304f17538ef5",
"assets/assets/icons/html-5.svg": "3943f1c52922f542c0f48de338d9e3fd",
"assets/assets/icons/javascript.svg": "8983f5304a7bbbd97b42a99190bf9f4e",
"assets/assets/icons/linkedin.svg": "851c8f79cc35e82536df38f27fd6c985",
"assets/assets/icons/linux.svg": "a0f20aee4b9cbfe6b3ee46ca7dca6e18",
"assets/assets/icons/live.svg": "0d0e612ad32b67026ed65f2b1e66fbbf",
"assets/assets/icons/mail.svg": "0b8fbbf976aae7348664dd2f9bde6562",
"assets/assets/icons/map.svg": "81c59c8eb006ae95998bf66f4dd0099d",
"assets/assets/icons/payment.svg": "74ff90a4c80253222bd2f30ab6e88ef4",
"assets/assets/icons/paypal.svg": "3abf5fd5bdf93665e7ef183b463c695d",
"assets/assets/icons/php.svg": "fce82f6e604b440c4afc566357417a8c",
"assets/assets/icons/playstore.svg": "c4605eef338bbed41aba5e412e42ec7f",
"assets/assets/icons/screen.svg": "621145db64c4e82cc0668a17154c0d1b",
"assets/assets/icons/sdk.svg": "a1c113755817ebba873170d3caade9e8",
"assets/assets/icons/sql.svg": "bedd705dfde371a2412499206a10572e",
"assets/assets/icons/windows.svg": "d5ca5e17006261852b4bb4661609d060",
"assets/assets/icons/wordpress.svg": "7d8cf86724cb40cb138f2e6e9706b5b2",
"assets/assets/images/logo.png": "e9f7313442fe1bb48daeb44563a4092e",
"assets/assets/images/logo.svg": "0a11206a732dd137e6eab2e1bc070a00",
"assets/assets/images/profile-picture.jpg": "f88bc3eadedab1e968e5ce6cb4221d37",
"assets/assets/images/spinner.apng": "7c48f9dd9da1a6b7f26300b99dcbdac9",
"assets/assets/images/Spinner2.apng": "bd3b465456e2536514fc0723c535c060",
"assets/assets/projects/dr1.jpg": "ee280a99bacdf77a8a224903eb761961",
"assets/assets/projects/dr2.jpg": "788cad0ec58fd6cf14772064f912c199",
"assets/assets/projects/dr3.jpg": "4d7195ea6435594d7b9722ca64a03602",
"assets/assets/projects/dr4.jpg": "94fdb5586ee7fa5f8b5d37e871b7a11e",
"assets/assets/projects/dr5.jpg": "540dbc5849ece6a75abc782b96a8c472",
"assets/assets/projects/dr6.jpg": "a54fde19895068c6b95ee78fb2c2f75b",
"assets/assets/projects/ed1.jpg": "a69d68ff80fed057a9ec72f00d670de0",
"assets/assets/projects/ed2.jpg": "aaa885dea3a9d21b9173e80d32d75d68",
"assets/assets/projects/ed3.jpg": "bb2c5158ad4a86cf65877dc5ca41862b",
"assets/assets/projects/ed4.jpg": "abd77b6775c92532c63b8504ab8f33cf",
"assets/assets/projects/ed5.jpg": "bc333fca59b274e5b4c4a30ab419ac7f",
"assets/assets/projects/hd1.jpg": "f09dfd8016b09b1ab446d494d52c07c0",
"assets/assets/projects/hd2.jpg": "58ef254a3ca28771bbf09c4fc402f69d",
"assets/assets/projects/hd3.jpg": "5e16c5650f4e96b0237e4fd94eb4c04f",
"assets/assets/projects/hd4.jpg": "e0d7ff8e73567b1715c0507ea56d5eaa",
"assets/assets/projects/hd5.jpg": "63b52a7f739553f006f0197a07fd5de2",
"assets/assets/projects/hd6.jpg": "1c5a3c8bd7bf09627ee1a2ceb337b7fa",
"assets/assets/projects/hf1.jpg": "c0f8b878ce7b50de85a524e827e11648",
"assets/assets/projects/hf2.jpg": "709f62c3ae75e5683ecc0209da6c495b",
"assets/assets/projects/hf3.jpg": "a783cfa56b6cc7dd551cb2cda00cb3e9",
"assets/assets/projects/hf4.jpg": "0703bdce1f3321db1b4d61fdc8ab5591",
"assets/assets/projects/hf5.jpg": "ad34812942ff0e45dda3053e9a1610a4",
"assets/assets/projects/ka1.jpg": "cceb7c5f6bb45c73c2088152419b2218",
"assets/assets/projects/ka2.jpg": "3fb5fd5f5db4508362cb2bddc95bf6b8",
"assets/assets/projects/ka3.jpg": "9f0ec3f86e447a97b627020637ef6d28",
"assets/assets/projects/ka4.jpg": "d90f70329742a8ce2ae16320fc246775",
"assets/assets/projects/ka5.jpg": "4bad9db35efc418638732b66204911a8",
"assets/assets/projects/ka6.jpg": "afe673b21da83459c1049b154dfae7f1",
"assets/assets/projects/kv1.jpg": "03aa2bff8260932e9ba541321dea94ee",
"assets/assets/projects/kv2.jpg": "0cda78393761ab9cc105544bd73ca0d6",
"assets/assets/projects/kv3.jpg": "e9937567aafb461a4d4ac9d4d0810f68",
"assets/assets/projects/kv4.jpg": "112d5dc0170b1246f7f28888283909c1",
"assets/assets/projects/kv5.jpg": "6e6ba77bad2100dcec0d94dded837f06",
"assets/assets/projects/kv6.jpg": "4b3c6fef35c6875696f9ef3dd3fdcfbf",
"assets/assets/projects/kv7.jpg": "806e3aec291ba9d89519a8792daec0d4",
"assets/assets/projects/pos1.jpg": "4d0930b87ea302dc9a16ae6d3d1a3303",
"assets/assets/projects/pos2.jpg": "9ff921851ea04a0e9dc825ac28c8dad2",
"assets/assets/projects/pos3.jpg": "0dcad7065e1bfbbf0d8c81c9436fb73e",
"assets/assets/projects/rb1.jpg": "23a4466625054a10a9d3d81980ce13bd",
"assets/assets/projects/rb2.jpg": "8a3cef9fad7796aeba515852956df58f",
"assets/assets/projects/rb3.jpg": "ebf2d6ed23ef4b319cfca523f76e1dcf",
"assets/assets/projects/res1.png": "65704b41d38b4227401333c9e6f5120d",
"assets/assets/projects/res2.png": "3885a2797472c785226fc37586e2e854",
"assets/assets/projects/res3.png": "f1ce09ee8ce35aa3437ce70f43b5abed",
"assets/assets/projects/res4.png": "ec2e4d11e17eddac37d9b5f6b1fd35ca",
"assets/assets/projects/sl1.png": "fb1b27fb0c31cd775b7452c1f4401f02",
"assets/assets/projects/sl2.png": "27c1e1e3c7f83b1297a7a35b2a987c4f",
"assets/assets/projects/sl3.png": "6190422d580ae97f0bd0c5011b330b5a",
"assets/assets/projects/sl4.png": "e9b87c742f6e791a69d2d0ecaa605b77",
"assets/assets/projects/sl5.png": "229df0a36d1241b8d1c0627eb4dc7b8d",
"assets/assets/projects/sm1.png": "a7780fe9d330edde0d32b69039795051",
"assets/assets/projects/sm2.png": "ffbb9796b4e87082cee9d1acc3f2c17e",
"assets/assets/projects/sm3.png": "56480835e79b12472a3a042c35fc8110",
"assets/assets/projects/sm4.png": "1ea4b12ab6520635e5077de6dc2960e6",
"assets/assets/projects/tv1.png": "d46a312a555924688a04e202cd6deaa1",
"assets/assets/projects/tv2.png": "c09ba3b921cc30c041aec2e49c01767e",
"assets/assets/projects/vf1.jpg": "687e0eb651f04368930102a2d6d8b25f",
"assets/assets/projects/vf2.jpg": "b49cb24a527ea54b40496b6d583fb7bf",
"assets/assets/projects/vf3.jpg": "1ce86e1a6680054374b8c82a985eaf45",
"assets/assets/projects/vf4.jpg": "7bc7dccb34e95be42a18d783c4d63aae",
"assets/assets/projects/vv1.jpg": "bc1aea1db38db4f9a578e9add16bf665",
"assets/assets/projects/vv2.jpg": "831bb718dc3e2ed218af050f4063b0b9",
"assets/assets/projects/vv3.jpg": "f010eff80b5397ffebed30ad169c2efe",
"assets/assets/projects/vv4.jpg": "b2d6d837652c29af49a1f598f88a7a0f",
"assets/assets/projects/vv5.jpg": "8d74556e5e0d6de50eb7fa75b508b9cf",
"assets/assets/projects/vv6.jpg": "b77fbc53bc2eac47ac5e22ef43d65266",
"assets/assets/projects/vv7.jpg": "0c152a7e2693210bbfce820aa0aee88c",
"assets/assets/projects/vv8.jpg": "a9d2165833d50c41fb21588b5bc76c65",
"assets/assets/projects/vv9.jpg": "4c060592c5b870ee70a3154120aa6a7c",
"assets/assets/projects/yb1.jpg": "51cbae2775cf0982b1e5ec151c5e40d5",
"assets/assets/projects/yb2.jpg": "a0b91cb0cc36b3a03b8eab43abf7a880",
"assets/assets/projects/yb3.jpg": "0f0fbf509129a1a42e47ada79d1a9484",
"assets/assets/projects/yb4.jpg": "e9dd3d983bbd8c310a304e10db17ae87",
"assets/assets/projects/yb5.jpg": "2e32b2942a59c3f88b332fd1f26e181d",
"assets/assets/projects/yb6.jpg": "88b88a86e3288ad10c4f7f2cd4f397c5",
"assets/assets/projects/yb7.jpg": "68e94cb83bb29ec1650b74569cd67de6",
"assets/assets/translations/en.json": "95fd7b0656f89ada9b8012429b316b7b",
"assets/FontManifest.json": "0361baae30adca8ebc149077152a854a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "f1212c3195a66f26afce4bbd60bfc9ac",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "9fe54893d61c0d63ef55ef749bf691ba",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "11c16d780dca4eed76ea217cd54314db",
"icons/Icon-192.png": "3d6fd59efbbfc67d1c94ad91a32db0f8",
"icons/Icon-512.png": "1fa3fc5a8ed06fe5de0bcf1656a6ff65",
"icons/Icon-maskable-192.png": "3d6fd59efbbfc67d1c94ad91a32db0f8",
"icons/Icon-maskable-512.png": "1fa3fc5a8ed06fe5de0bcf1656a6ff65",
"index.html": "680dbd32aff38893daa79738f3a0f5ce",
"/": "680dbd32aff38893daa79738f3a0f5ce",
"main.dart.js": "201c8035294bb91def77f043d56fd7f6",
"manifest.json": "3c00bfb5fa6c03e5efff656e896ed43c",
"splash/img/dark-1x.png": "1ee3c59ae43aa2e5e69dd79f881daf69",
"splash/img/dark-2x.png": "2547f591892e58b6ff88c36a88f94bd3",
"splash/img/dark-3x.png": "cf031a6e8a1af2b6ddd714f6ef780717",
"splash/img/dark-4x.png": "519b85abe50290b5e5db40db89ad6c24",
"splash/img/light-1x.png": "1ee3c59ae43aa2e5e69dd79f881daf69",
"splash/img/light-2x.png": "2547f591892e58b6ff88c36a88f94bd3",
"splash/img/light-3x.png": "cf031a6e8a1af2b6ddd714f6ef780717",
"splash/img/light-4x.png": "519b85abe50290b5e5db40db89ad6c24",
"version.json": "74f80ac8e98b6ba209e4eb96eb7f918f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
