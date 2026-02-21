'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "98c55537a003c54f92a92cca1ef8bc4c",
"assets/AssetManifest.bin.json": "9fccaf77cbbd5b2037f26d925dd68793",
"assets/assets/fonts/BoxIcons.ttf": "92ba7cbb384d35ae4858f9b59d8fc373",
"assets/assets/fonts/FontAwesome.ttf": "de6bf66865cf2734984feeeb9c638a3a",
"assets/assets/fonts/Nunito-Bold.ttf": "91019ffb3b1df640e444b34e5a73dfc3",
"assets/assets/fonts/Nunito-Regular.ttf": "0c890be2af0d241a2387ad2c4c16af2c",
"assets/assets/fonts/OctIcons.ttf": "71c7d381e58ae844420306f7a3bbbe5a",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/icons/adobe.svg": "a7237b79d8ed1e0de60bfc8e1163bb41",
"assets/assets/icons/api.svg": "22126e2226068e7a503342a6dfa98076",
"assets/assets/icons/app-store.svg": "213f60bed985e030b5be30034c10e805",
"assets/assets/icons/appstore.svg": "88b556a61d56b4206c5ce35093416c39",
"assets/assets/icons/bootstrap.svg": "ed7996c91bc1e96999f856108c7d59ec",
"assets/assets/icons/call.svg": "d2bd76f14bbebdb345af258b3e7c74d5",
"assets/assets/icons/css3.svg": "d14adc9690fb37fafb8db10234d9c135",
"assets/assets/icons/dart.svg": "5a486f285c3d4167b6dfea55aad140f7",
"assets/assets/icons/figma.svg": "d7c351770456a3a11a0bc74b7bc5b7f0",
"assets/assets/icons/firebase.svg": "c525317ba1011024985140a956b044f3",
"assets/assets/icons/flutter.svg": "a020c38a0d805ce6f8a12e05e042a321",
"assets/assets/icons/gitlab.svg": "1cdec9b13a0dcf203813304f17538ef5",
"assets/assets/icons/google-play.svg": "2a81333da7f8295047b1b0364b5c6648",
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
"assets/assets/icons/shorebird.svg": "ab2c749d283993c6357d06e0ec1a6215",
"assets/assets/icons/sql.svg": "bedd705dfde371a2412499206a10572e",
"assets/assets/icons/windows.svg": "d5ca5e17006261852b4bb4661609d060",
"assets/assets/icons/wordpress.svg": "7d8cf86724cb40cb138f2e6e9706b5b2",
"assets/assets/images/logo.png": "e9f7313442fe1bb48daeb44563a4092e",
"assets/assets/images/logo.svg": "0a11206a732dd137e6eab2e1bc070a00",
"assets/assets/images/profile-picture.jpg": "f34fe33bfc0a874f360e93c7ac2ddab6",
"assets/assets/images/spinner.apng": "7c48f9dd9da1a6b7f26300b99dcbdac9",
"assets/assets/images/Spinner2.apng": "bd3b465456e2536514fc0723c535c060",
"assets/assets/projects/dr1.jpg": "ee280a99bacdf77a8a224903eb761961",
"assets/assets/projects/dr2.jpg": "788cad0ec58fd6cf14772064f912c199",
"assets/assets/projects/dr3.jpg": "4d7195ea6435594d7b9722ca64a03602",
"assets/assets/projects/dr4.jpg": "94fdb5586ee7fa5f8b5d37e871b7a11e",
"assets/assets/projects/dr5.jpg": "540dbc5849ece6a75abc782b96a8c472",
"assets/assets/projects/dr6.jpg": "a54fde19895068c6b95ee78fb2c2f75b",
"assets/assets/projects/ed1.jpg": "f5e3ea49e5d6269f505b4b7da896a468",
"assets/assets/projects/ed2.jpg": "e49294e8682cd35878cd25baf2e8f2a5",
"assets/assets/projects/ed3.jpg": "7e627de466cf865e921bd741c6bb18d0",
"assets/assets/projects/ed4.jpg": "9db9b8bae0b5b688796ca443a2f28a2a",
"assets/assets/projects/ed5.jpg": "98e786adfd244d8d674ebd4106c806aa",
"assets/assets/projects/ed6.jpg": "9fbdcdea7bcb5b387a65fd55ec69a46c",
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
"assets/assets/projects/sy1.jpg": "6892a0b0454ca629a30023da346282cb",
"assets/assets/projects/sy2.jpg": "e2ff39936ac2cd2aad61bcdef4207a12",
"assets/assets/projects/sy3.jpg": "2d5d52294f2f35cdc314225fc00597bf",
"assets/assets/projects/sy4.jpg": "8f8b743d0b634bbc61a4b7b1989fcb20",
"assets/assets/projects/tv1.png": "d46a312a555924688a04e202cd6deaa1",
"assets/assets/projects/tv2.png": "c09ba3b921cc30c041aec2e49c01767e",
"assets/assets/projects/vf1.jpg": "687e0eb651f04368930102a2d6d8b25f",
"assets/assets/projects/vf2.jpg": "b49cb24a527ea54b40496b6d583fb7bf",
"assets/assets/projects/vf3.jpg": "1ce86e1a6680054374b8c82a985eaf45",
"assets/assets/projects/vf4.jpg": "7bc7dccb34e95be42a18d783c4d63aae",
"assets/assets/projects/vv1.jpg": "82c07f32d1a73a1ac34b2cec821f1776",
"assets/assets/projects/vv2.jpg": "e89276174654007aea7ef955f638445c",
"assets/assets/projects/vv3.jpg": "25370919c33df3eec4fb9b49349a43e9",
"assets/assets/projects/vv4.jpg": "4f7731b5381f9a17ec9b1f28d875cd0b",
"assets/assets/projects/vv5.jpg": "b988c5d89b267bf33fd0c0e3f21bf3a5",
"assets/assets/projects/vv6.jpg": "9b4a253e3953c37f3a8a29624952ad94",
"assets/assets/projects/vv7.jpg": "4cd476177802c9e9db4b55fd79638f66",
"assets/assets/projects/vv8.jpg": "560446db01691062e5bd17f399fabb86",
"assets/assets/projects/vv9.jpg": "4c060592c5b870ee70a3154120aa6a7c",
"assets/assets/projects/yb1.jpg": "51cbae2775cf0982b1e5ec151c5e40d5",
"assets/assets/projects/yb2.jpg": "a0b91cb0cc36b3a03b8eab43abf7a880",
"assets/assets/projects/yb3.jpg": "0f0fbf509129a1a42e47ada79d1a9484",
"assets/assets/projects/yb4.jpg": "e9dd3d983bbd8c310a304e10db17ae87",
"assets/assets/projects/yb5.jpg": "2e32b2942a59c3f88b332fd1f26e181d",
"assets/assets/projects/yb6.jpg": "88b88a86e3288ad10c4f7f2cd4f397c5",
"assets/assets/projects/yb7.jpg": "68e94cb83bb29ec1650b74569cd67de6",
"assets/assets/translations/en.json": "5dd2af8e52008fea20396c74802229b6",
"assets/FontManifest.json": "cfeb7fd7be6ceee32bb293abe4918e07",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "72c0d11e37f27da9dde2e118763f6778",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "9fe54893d61c0d63ef55ef749bf691ba",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "5b588090f73e3a0f6869d5419ebde03b",
"icons/Icon-192.png": "3d6fd59efbbfc67d1c94ad91a32db0f8",
"icons/Icon-512.png": "1fa3fc5a8ed06fe5de0bcf1656a6ff65",
"icons/Icon-maskable-192.png": "3d6fd59efbbfc67d1c94ad91a32db0f8",
"icons/Icon-maskable-512.png": "1fa3fc5a8ed06fe5de0bcf1656a6ff65",
"index.html": "d59f7ef351736607981d3a18fae58fed",
"/": "d59f7ef351736607981d3a18fae58fed",
"main.dart.js": "492ee10407203303d5ff5fecc7b17f2d",
"manifest.json": "3c00bfb5fa6c03e5efff656e896ed43c",
"splash/img/dark-1x.png": "1ee3c59ae43aa2e5e69dd79f881daf69",
"splash/img/dark-2x.png": "2547f591892e58b6ff88c36a88f94bd3",
"splash/img/dark-3x.png": "cf031a6e8a1af2b6ddd714f6ef780717",
"splash/img/dark-4x.png": "519b85abe50290b5e5db40db89ad6c24",
"splash/img/light-1x.png": "1ee3c59ae43aa2e5e69dd79f881daf69",
"splash/img/light-2x.png": "2547f591892e58b6ff88c36a88f94bd3",
"splash/img/light-3x.png": "cf031a6e8a1af2b6ddd714f6ef780717",
"splash/img/light-4x.png": "519b85abe50290b5e5db40db89ad6c24",
"version.json": "17fb1083785f37899accac07ab1b3f38"};
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
