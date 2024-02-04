'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "35aae5fc5ee35d1bf2d30403ca4ab58e",
"assets/AssetManifest.json": "9a5213e45db647bb6a7ccf04a1dd4451",
"assets/assets/fonts/Gordita_Bold.otf": "78dd25235fa4006f25693d3cd8933469",
"assets/assets/fonts/Gordita_Light.otf": "d55f9bfad764c6fb5c9b8e9f75e1ab56",
"assets/assets/fonts/Gordita_Medium.otf": "2a23af3d8545de5786416ee382d5d66a",
"assets/assets/fonts/Gordita_Regular.otf": "8f8fc889a9739732e20d1de9a01919f6",
"assets/assets/fonts/Gordita_Thin.otf": "dc93ae52e18e464660f04f1429cd1156",
"assets/assets/fonts/KlankIcons.ttf": "3a54b01d874b5685b9381b23c705eed3",
"assets/assets/fonts/SF-Pro-Text/SF-Pro-Text-Black.otf": "82d5f38559f66d19b968066608f4a489",
"assets/assets/fonts/SF-Pro-Text/SF-Pro-Text-BlackItalic.otf": "774fc2cdd8f7b73b4d092b7c4b787486",
"assets/assets/fonts/SF-Pro-Text/SF-Pro-Text-Bold.otf": "88b6e0b21919fa6abb7899faa1571f01",
"assets/assets/fonts/SF-Pro-Text/SF-Pro-Text-BoldItalic.otf": "41a00af026a7270048deaacc3bdb9271",
"assets/assets/fonts/SF-Pro-Text/SF-Pro-Text-Heavy.otf": "fadde3407f7fb52b942bd5bac0ba042c",
"assets/assets/fonts/SF-Pro-Text/SF-Pro-Text-HeavyItalic.otf": "a6e4377c5221bb478d11f5e5f812a319",
"assets/assets/fonts/SF-Pro-Text/SF-Pro-Text-Light.otf": "753fc9d460f7722614e34fe61ed1c073",
"assets/assets/fonts/SF-Pro-Text/SF-Pro-Text-LightItalic.otf": "28d8d0b1c702c1efb4598f16bab0a5b1",
"assets/assets/fonts/SF-Pro-Text/SF-Pro-Text-Medium.otf": "ded5efe3e8ec62553c3b10f4edd4ca8d",
"assets/assets/fonts/SF-Pro-Text/SF-Pro-Text-MediumItalic.otf": "499ca95e4b95de800de70051bb81219b",
"assets/assets/fonts/SF-Pro-Text/SF-Pro-Text-Regular.otf": "a07152f3f0c03589a75b218b2c6536cb",
"assets/assets/fonts/SF-Pro-Text/SF-Pro-Text-RegularItalic.otf": "b1be36c491043eda634143b39bf1cf8c",
"assets/assets/fonts/SF-Pro-Text/SF-Pro-Text-Semibold.otf": "9a7c849b216648913f216d20a21e9aae",
"assets/assets/fonts/SF-Pro-Text/SF-Pro-Text-SemiboldItalic.otf": "919f7cd048eca041b9ff1fd06c6d9981",
"assets/assets/fonts/SF-Pro-Text/SF-Pro-Text-Thin.otf": "603fb2d8c5af2435e1532bf0d64b9a56",
"assets/assets/fonts/SF-Pro-Text/SF-Pro-Text-ThinItalic.otf": "df5de52b409e873b53540e79eb916f6b",
"assets/assets/fonts/SF-Pro-Text/SF-Pro-Text-Ultralight.otf": "5e3e5fd76b8d6b729b1b806755472068",
"assets/assets/fonts/SF-Pro-Text/SF-Pro-Text-UltralightItalic.otf": "f13eca0f8b8af1975e6468626d195e4e",
"assets/assets/images/icon512-2.png": "e9a98c54338bc8bc9559e3009429141d",
"assets/assets/images/icon512.png": "6a298944e51bb3bc3bbebb839e5f0162",
"assets/assets/images/sider_bar.png": "423cfa5381436885150b57fb63559fd0",
"assets/FontManifest.json": "d65e38fd8157f5aa2c0573f5c843e474",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "469cb10dbbc8b0aef4296ac5099c4c95",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_credit_card/font/halter.ttf": "4e081134892cd40793ffe67fdc3bed4e",
"assets/packages/flutter_credit_card/icons/amex.png": "f75cabd609ccde52dfc6eef7b515c547",
"assets/packages/flutter_credit_card/icons/chip.png": "5728d5ac34dbb1feac78ebfded493d69",
"assets/packages/flutter_credit_card/icons/discover.png": "62ea19837dd4902e0ae26249afe36f94",
"assets/packages/flutter_credit_card/icons/elo.png": "ffd639816704b9f20b73815590c67791",
"assets/packages/flutter_credit_card/icons/hipercard.png": "921660ec64a89da50a7c82e89d56bac9",
"assets/packages/flutter_credit_card/icons/mastercard.png": "7e386dc6c169e7164bd6f88bffb733c7",
"assets/packages/flutter_credit_card/icons/rupay.png": "a10fbeeae8d386ee3623e6160133b8a8",
"assets/packages/flutter_credit_card/icons/unionpay.png": "87176915b4abdb3fcc138d23e4c8a58a",
"assets/packages/flutter_credit_card/icons/visa.png": "f6301ad368219611958eff9bb815abfe",
"assets/packages/flutter_iconly/fonts/IconlyBroken.ttf": "541df649654f074a25833daa64e246f3",
"assets/packages/flutter_iconly/fonts/IconlyLight.ttf": "25d014c0a013024ffb898071af3bff6c",
"assets/packages/flutter_iconly/fonts/iconly_bold.ttf": "20ae062785ef7ebe5d2eaaf4ddbb8e3a",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "d2c4aac67a43efbac1fd09782af3b18b",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/icon192.png": "402b976e7cc0f47fd3c5c68dbabf016b",
"icons/icon512.png": "6a298944e51bb3bc3bbebb839e5f0162",
"index.html": "d2d944a2ed5808249134076d5456f4a4",
"/": "d2d944a2ed5808249134076d5456f4a4",
"main.dart.js": "491889aef0078f9b05c2f6b3a919d834",
"manifest.json": "6db035e06cb5af346ed6cd14a3694884",
"version.json": "065d2f34f6adda65236244b77a5e3efd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
