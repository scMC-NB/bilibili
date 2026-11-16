var _0x54833d = Object.create;
var _0x4389c7 = Object.defineProperty;
var _0x2fab1d = Object.getOwnPropertyDescriptor;
var _0x10eb3c = Object.getOwnPropertyNames;
var _0x3a99f5 = Object.getPrototypeOf;
var _0x302aaf = Object.prototype.hasOwnProperty;
var _0x54b242 = (_0x22b777, _0xb350e5, _0x347e55) => _0xb350e5 in _0x22b777 ? _0x4389c7(_0x22b777, _0xb350e5, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x347e55
}) : _0x22b777[_0xb350e5] = _0x347e55;
var _0x49ede8 = (_0x1aee4d, _0x1d5886, _0xe6753, _0x23f1d7) => {
  if (_0x1d5886 && typeof _0x1d5886 === "object" || typeof _0x1d5886 === "function") {
    for (let _0x2f2098 of _0x10eb3c(_0x1d5886)) {
      if (!_0x302aaf.call(_0x1aee4d, _0x2f2098) && _0x2f2098 !== _0xe6753) {
        _0x4389c7(_0x1aee4d, _0x2f2098, {
          get: () => _0x1d5886[_0x2f2098],
          enumerable: !(_0x23f1d7 = _0x2fab1d(_0x1d5886, _0x2f2098)) || _0x23f1d7.enumerable
        });
      }
    }
  }
  return _0x1aee4d;
};
var _0x2469c7 = (_0x5062d3, _0x14f74e, _0xe77d7f) => {
  _0xe77d7f = _0x5062d3 != null ? _0x54833d(_0x3a99f5(_0x5062d3)) : {};
  return _0x49ede8(_0x14f74e || !_0x5062d3 || !_0x5062d3.__esModule ? _0x4389c7(_0xe77d7f, "default", {
    value: _0x5062d3,
    enumerable: true
  }) : _0xe77d7f, _0x5062d3);
};
var _0x45d8d1 = (_0x3c0f36, _0x1c96f8, _0x5dc8e2) => {
  _0x54b242(_0x3c0f36, typeof _0x1c96f8 !== "symbol" ? _0x1c96f8 + "" : _0x1c96f8, _0x5dc8e2);
  return _0x5dc8e2;
};
var _0x31b399 = require("electron");
var _0x1c6653 = require("path");
var _0xce9625 = require("crypto");
var _0x4f5755 = require("electron");
var _0x85da99 = require("path");
var _0x169835 = require("fs-extra");
var _0x2c81f2 = (0, _0x85da99.join)(_0x4f5755.app.getPath("userData"), ".runtime");
var _0x4fbeb1 = (_0x1acbc4 = false) => {
  let _0xf638d8 = {};
  let _0x4e8732 = false;
  if ((0, _0x169835.existsSync)(_0x2c81f2)) {
    try {
      _0xf638d8 = JSON.parse((0, _0x169835.readFileSync)(_0x2c81f2, {
        encoding: "utf-8"
      }) || "{}");
      _0x4e8732 = true;
    } catch (_0x5d08ee) {
      global.appLog?.info("Get runtime info error, err:", _0x5d08ee.message, _0x5d08ee.stack);
      _0x4e8732 = false;
    }
  }
  if (_0x1acbc4 && !_0x4e8732) {
    try {
      global.appLog?.info("Init .runtion config file");
      (0, _0x169835.writeFileSync)(_0x2c81f2, "{}");
    } catch {}
  }
  return _0xf638d8;
};
var _0x419d16 = _0x1ef3b1 => {
  try {
    const _0x4d659c = _0x4fbeb1();
    (0, _0x169835.writeFileSync)(_0x2c81f2, JSON.stringify({
      ..._0x4d659c,
      ..._0x1ef3b1
    }, null, 2));
  } catch {}
};
var _0x1e2976 = () => {
  _0x419d16({
    localServer: ""
  });
};
var _0x52a2ad = require("electron");
var _0x2506ca = _0x2469c7(require("path"));
var _0x46dff8 = require("electron");
var _0x572b1a = require("@bilibili/b-utils-core");
var _0x213f35 = _0x21f6da => {
  ;
  ["x", "y", "width", "height"].forEach(_0x1cfaf0 => {
    if ((0, _0x572b1a.isNum)(_0x21f6da[_0x1cfaf0])) {
      _0x21f6da[_0x1cfaf0] = Math.round(_0x21f6da[_0x1cfaf0]);
    }
  });
  return _0x21f6da;
};
var _0xc9b2df = ({
  width: _0x3c15b7,
  height: _0x182d50
}) => {
  const _0x333d62 = _0x46dff8.screen.getPrimaryDisplay().bounds;
  const {
    x: _0x35f82f,
    y: _0x305882,
    width: _0x5af1db,
    height: _0x4bedf9
  } = _0x333d62;
  const _0x321b19 = _0x3c15b7 > _0x5af1db ? 0 : (_0x5af1db - _0x3c15b7) / 2 + _0x35f82f;
  const _0x20fab2 = _0x182d50 > _0x4bedf9 ? 0 : (_0x4bedf9 - _0x182d50) / 2 + _0x305882;
  return _0x213f35({
    x: _0x321b19,
    y: _0x20fab2,
    width: _0x3c15b7,
    height: _0x182d50,
    displayBounds: _0x333d62
  });
};
var _0x1a1795 = require("rxjs");
var _0x5e7d34 = class {
  constructor(_0x8a24f1, _0x45a0d3) {
    this.storeService = _0x8a24f1;
    _0x45d8d1(this, "config");
    _0x45d8d1(this, "state");
    _0x45d8d1(this, "winRef");
    _0x45d8d1(this, "stateChangeTimer", null);
    _0x45d8d1(this, "stateUpdateDelay", 200);
    _0x45d8d1(this, "handleStateChange", () => {
      clearTimeout(this.stateChangeTimer);
      this.stateChangeTimer = setTimeout(() => this.updateState(), this.stateUpdateDelay);
    });
    _0x45d8d1(this, "handleCloseWindow", () => this.updateState());
    _0x45d8d1(this, "handleWindowClosed", () => {
      this.unmanage();
      this.updateState();
    });
    this.config = _0x45a0d3;
    const _0x523bf3 = this.storeService.getWindowState(this.config.windowName);
    this.state = _0x213f35(_0x523bf3);
    this.checkWindowStatus();
  }
  get x() {
    return this.state.x;
  }
  get y() {
    return this.state.y;
  }
  get width() {
    return this.state.width;
  }
  get height() {
    return this.state.height;
  }
  get displayBounds() {
    return this.state.displayBounds;
  }
  get isMaximized() {
    return this.state.isMaximized;
  }
  get isFullScreen() {
    return this.state.isFullScreen;
  }
  checkWindowStatus(_0x36714a = false) {
    const _0x3baaca = this.isWindowStatusValid();
    if (!_0x3baaca) {
      this.resetStateToDefault();
    } else if (this.hasBounds() && this.state.displayBounds) {
      const _0x3bc0cc = _0x52a2ad.screen.getAllDisplays().some(_0x1cc95c => this.windowWithinBounds(_0x1cc95c.bounds));
      if (!_0x3bc0cc) {
        this.resetStateToDefault();
      }
    }
    if (_0x36714a && this.winRef) {
      const _0x49a8ae = _0x213f35(this.state);
      this.winRef.setBounds(_0x49a8ae);
    }
  }
  resetStateToDefault() {
    const {
      defaultWidth: _0x406562,
      defaultHeight: _0x12ce0e,
      isTopRight: _0x4763a2
    } = this.config;
    if (_0x4763a2) {
      const _0x19eb5f = _0x52a2ad.screen.getPrimaryDisplay().bounds;
      this.state = {
        x: _0x19eb5f.x + (_0x19eb5f.width - _0x406562) - 20,
        y: _0x19eb5f.y,
        width: _0x406562,
        height: _0x12ce0e,
        displayBounds: _0x19eb5f
      };
    } else {
      this.state = _0xc9b2df({
        width: _0x406562,
        height: _0x12ce0e
      });
    }
  }
  resetAndUpdateWindowState() {
    if (this.winRef) {
      this.resetStateToDefault();
      const _0xf96de0 = _0x213f35(this.state);
      this.winRef.setBounds(_0xf96de0);
    }
  }
  manage(_0x33ecb1, _0x1bd96c = false) {
    if (this.state.isFullScreen || this.state.isMaximized) {
      this.state.isFullScreen = false;
      if (this.state.isMaximized && this.config.keepMaximum) {
        if (this.config.onInit$ && !_0x1bd96c) {
          this.config.onInit$.pipe((0, _0x1a1795.take)(1)).subscribe(() => this.maximizeWindow(_0x33ecb1));
        } else {
          _0x33ecb1.once("show", () => this.maximizeWindow(_0x33ecb1));
        }
      } else {
        this.state.isMaximized = false;
        this.resetStateToDefault();
      }
      this.storeService.setWindowState(this.config.windowName, this.state);
    }
    _0x33ecb1.on("resize", this.handleStateChange);
    _0x33ecb1.on("move", this.handleStateChange);
    _0x33ecb1.on("close", this.handleCloseWindow);
    _0x33ecb1.on("closed", this.handleWindowClosed);
    this.winRef = _0x33ecb1;
  }
  unmanage() {
    this.updateState();
    if (this.winRef) {
      this.winRef.removeListener("resize", this.handleStateChange);
      this.winRef.removeListener("move", this.handleStateChange);
      clearTimeout(this.stateChangeTimer);
      this.winRef.removeListener("close", this.handleCloseWindow);
      this.winRef.removeListener("closed", this.handleWindowClosed);
      this.winRef = null;
    }
  }
  updateState(_0x3becdb) {
    _0x3becdb = _0x3becdb || this.winRef;
    if (!_0x3becdb) {
      return;
    }
    try {
      const _0x4c918d = _0x213f35(_0x3becdb.getBounds());
      if (this.isNormalWindow(_0x3becdb)) {
        this.state.x = _0x4c918d.x;
        this.state.y = _0x4c918d.y;
        this.state.width = _0x4c918d.width;
        this.state.height = _0x4c918d.height;
      }
      this.state.isMaximized = _0x3becdb.isMaximized();
      this.state.isFullScreen = _0x3becdb.isFullScreen();
      this.state.displayBounds = _0x52a2ad.screen.getDisplayMatching(_0x4c918d).bounds;
    } catch (_0xbc8d71) {}
    this.storeService.setWindowState(this.config.windowName, this.state);
  }
  isWindowStatusValid() {
    return this.state && (this.hasBounds() || this.state.isMaximized || this.state.isFullScreen);
  }
  hasBounds() {
    return this.state && Number.isInteger(this.state.x) && Number.isInteger(this.state.y) && Number.isInteger(this.state.width) && this.state.width > 0 && Number.isInteger(this.state.height) && this.state.height > 0;
  }
  windowWithinBounds(_0x406c9c) {
    return this.state.x >= _0x406c9c.x && this.state.y >= _0x406c9c.y && this.state.x + this.state.width <= _0x406c9c.x + _0x406c9c.width && this.state.y + this.state.height <= _0x406c9c.y + _0x406c9c.height;
  }
  isNormalWindow(_0x44a591) {
    return !_0x44a591.isMaximized() && !_0x44a591.isMinimized() && !_0x44a591.isFullScreen();
  }
  maximizeWindow(_0x242956) {
    if (!_0x242956.isDestroyed() && !_0x242956.isMaximized()) {
      _0x242956.maximize();
    }
  }
};
var _0x132f64 = "-----BEGIN CERTIFICATE-----\nMIIEPzCCAyegAwIBAgIUJVg1qdKcUuryV+2IxAn9teS5qu0wDQYJKoZIhvcNAQEL\nBQAwga0xCzAJBgNVBAYTAkNOMREwDwYDVQQIDAhTaGFuZ0hhaTERMA8GA1UEBwwI\nU2hhbmdIYWkxLzAtBgNVBAoMJlNoYW5naGFpIEJpbGliaWxpIFRlY2hub2xvZ3kg\nQ28uLCBMdGQuMREwDwYDVQQLDAhiaWxpYmlsaTEPMA0GA1UEAwwGYmlsaXBjMSMw\nIQYJKoZIhvcNAQkBFhRzaGVudGFvQGJpbGliaWxpLmNvbTAgFw0yMzEwMjQwNTIy\nMTNaGA8yMTIzMDkzMDA1MjIxM1owga0xCzAJBgNVBAYTAkNOMREwDwYDVQQIDAhT\naGFuZ0hhaTERMA8GA1UEBwwIU2hhbmdIYWkxLzAtBgNVBAoMJlNoYW5naGFpIEJp\nbGliaWxpIFRlY2hub2xvZ3kgQ28uLCBMdGQuMREwDwYDVQQLDAhiaWxpYmlsaTEP\nMA0GA1UEAwwGYmlsaXBjMSMwIQYJKoZIhvcNAQkBFhRzaGVudGFvQGJpbGliaWxp\nLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALX2g7x/HZjGQ60a\nh6p9+GxdF8W+r+aGQD71yn419X5NoqzwCnuffDYj3snBhRu0pgh8v7P/UYc5Ll+n\nyQlpVwUzHHyKjBbn9uK1F54cLVP4wKo7Ketd+FTngM0lWQaFexYDHACgfMNVSH1r\nHbjwRYlHfCtNW4Igrc0zWIWzYoi1A1r0JzIu3Newd8qJ8a7RJ7toMk0hVHdHgHhC\n28XNsR8uveS+rRAYCcF5nTRuU8TX2UHh0geLho95DPkfRvJKm+YJbusNqgKygnTC\n/8y1lqdmM5F6mGVjcTuXOJSkvW2gXiqjAHk6BvbT6vxXCRzc42CMyk6YffN7qSL5\nZc8QU1MCAwEAAaNTMFEwHQYDVR0OBBYEFNCVw8dStnHz5VY1MEIDI8dPR9t2MB8G\nA1UdIwQYMBaAFNCVw8dStnHz5VY1MEIDI8dPR9t2MA8GA1UdEwEB/wQFMAMBAf8w\nDQYJKoZIhvcNAQELBQADggEBAAiisyz9WJNmyYthp7hRHxt8ptV8UefFOVt1oJfE\nuicHBoXBCWKOb2sYbJUOnpPQrCGTLxa0sDUXu1OvwJP2YrKhbiW4ZLefWlVM/Rx0\nJpcbbVvrR5puMfwxKrW5HT+Uafq/bFe/fJPTdHmLU9vAqkAcqZxrPhNjz1O88wp4\ntuyLcVxHcwr4ZvHFcCMo+Gkph76QY8clcOtyTF3p3U2HCFGu3I8WvJcEexjjanx6\nztZgsc9zCVdDWS5RFsEMXPj9+vTvLuo1S6z0UhMnKo4yYBCb/6gmJRJMrZ7beifP\niVFRvhO43BAkKW04hRC/nsliqcedqetuZbpTjq98g9eEDow=\n-----END CERTIFICATE-----\n";
var _0xfdfdc1 = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC19oO8fx2YxkOt\nGoeqffhsXRfFvq/mhkA+9cp+NfV+TaKs8Ap7n3w2I97JwYUbtKYIfL+z/1GHOS5f\np8kJaVcFMxx8iowW5/bitReeHC1T+MCqOynrXfhU54DNJVkGhXsWAxwAoHzDVUh9\nax248EWJR3wrTVuCIK3NM1iFs2KItQNa9CcyLtzXsHfKifGu0Se7aDJNIVR3R4B4\nQtvFzbEfLr3kvq0QGAnBeZ00blPE19lB4dIHi4aPeQz5H0bySpvmCW7rDaoCsoJ0\nwv/MtZanZjORephlY3E7lziUpL1toF4qowB5Ogb20+r8Vwkc3ONgjMpOmH3ze6ki\n+WXPEFNTAgMBAAECggEBAJjgXPvAPIh/gppr4LFwFohMik18EOL3xgBfltoE0ZVk\n+pibL+N/Med2qZYOfZuyYZBd5t3+U2vtsbVyDShYFWFr+LH14Q7ZooYEKayP9dFH\n++7JuEVj9OC4g3FXwH0HJktvH1azfz7JZxbgKN+ZFoLoyTzESG6CsCLn0aa6+Lzr\nFRPqLM8TRZKjfl5dYy6z8nEVWWA+ow1MTsaEq0aNpeBsYePjz/181jpQV5OrQe/+\nl/LqzUU53iSOU1ZAoruhzeJ0/aGfYjG/QdphNWuK6a2590kETxWoDiz7Z1m82Vx6\n1FrOY5Dr8/+dzgFLdrQkKz+DGpUlnnA+6wGw6K7MlUECgYEA2QfmC8AoHf5Du4K/\nS6JpnczvqxwTEXPMKwMNDRAxXmXyvi2PszkpLGwvP2pZYlK6D20FtOW1uVtp5jiN\nyQ0J42P83KlYQeBNvV7flgSZW7ImO8u5JO8UybbNelu+B/OKqSR9ZoHXZRzG4bYU\nlaKQxIoXG6l7IieDN0TLPgv6EfMCgYEA1qKsuh+M61EFSosIPb5fhvg/2/TeizDm\nZRvG8Zju/e6tikewGW0XLRVb1trSBFu6Ijf41QsTZRxh37FjYRPN/XF6sRHpr3Ni\nRmaQch+0BcQaU4v+WSbCnGR9nyi3O8hCPC713UrusNfokXRf6z5ARtLvDwfBU2tQ\nDCLtMmypsSECgYEAqm/chj/agWtrr7cHGZOrU8RcN0kt5FfG78ROnIKp8pMnZZiM\nMFhkcEFpfWi8V03WVkTs5Vo8MxuJ98VT+57ktBGSw4uuBtXq1xvJhJuKAAvQoMbl\nWA71iU+o4D1p5/6nVxuT60tuZzaJLTp7weNPwzka2ptnWrQjBOVeoxRux2cCgYAD\n7u09Z/CcK1rud8fJ4eA8R/ZboIwnftjqB21I5iWTD7msbA3lGWOwVtDdChuJKukp\nUV9FADP1yWRdxhFtKQDAYUD/V7Wxmmq1oZGKFdylsmdNGqapmZU9anYG4ach+FSG\nZ9HnoUTohrxjVf+f/v8MjTcGTn0Te0b3QfiY0Pb3IQKBgFhRUMasW/MnIFg1IfYU\nkVtMEJpajml9tEEQ91bBr29bCxl+nM2bM9yjb6LQU0vYTyWNn3zS/LOa3gSbOC/i\nc+3fmiI6TpouNE1eBva6kKyvmqC4dwD6aTEHokfhuMFYZQbVC8IGuhEQuN9OIM9x\nTQg6mubcOzaGBUeTmeZTkCpb\n-----END PRIVATE KEY-----\n";
var _0x2a4bd9 = require("rxjs");
var _0x39dd91 = {
  windowName: "mainWindow",
  defaultWidth: 1180,
  defaultHeight: 730,
  minWidth: 1080,
  minHeight: 658,
  keepMaximum: true,
  onInit$: new _0x2a4bd9.Subject()
};
var _0x16f5cb = ["3gp", "asf", "avi", "f4v", "hevc", "m2ts", "m2v", "m4v", "mjpeg", "mkv", "mov", "mp4", "mpeg", "mpg", "mts", "mxf", "ogv", "rm", "swf", "ts", "vob", "webm", "wmv", "wtv4", "flv", "rmvb", "m3u8"];
var _0x12e791 = require("https");
var _0xd2b325 = require("child_process");
var _0x316599 = _0x2469c7(require("node-fetch"));
var _0x5404cb = _0x2469c7(require("express"));
var _0x19f68d = _0x2469c7(require("electron-log"));
var _0x25f1c2 = _0x2469c7(require("electron-store"));
var _0x5cc82e = _0x2469c7(require("events"));
var _0x4ae6a9 = _0x2469c7(require("vm"));
var _0x5e36f8 = _0x2469c7(require("semver"));
var _0x30d4f5 = require("fs-extra");
var _0x1145ea = "1.19.0";
var _0x492722 = "1001019000";
var _0x1015ec = "10010190002609201055";
var _0x485553 = false;
var _0x5200a8 = require("url");
_0x19f68d.default.transports.file.maxSize = 5242880;
var _0x448191 = _0x19f68d.default.scope("AppIndex");
if (!global.biliAppInitTime) {
  global.biliAppInitTime = Date.now();
}
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.env.NUT_JS_DISABLE_DEFAULT_KEYBOARD_PROVIDER = "";
process.env.NUT_JS_DISABLE_DEFAULT_CLIPBOARD_PROVIDER = "1";
process.env.NUT_JS_DISABLE_DEFAULT_SCREEN_PROVIDER = "1";
process.env.NUT_JS_DISABLE_DEFAULT_WINDOW_PROVIDER = "1";
process.on("uncaughtException", _0x113066 => {
  _0x448191.error("Process uncaughtException!", _0x113066.stack);
});
process.stdout.on("error", function (_0x356597) {
  if (_0x356597.code == "EPIPE") {
    _0x448191.error("Error: write EPIPE");
  }
});
module.exports = async () => {
  const _0x260427 = global;
  _0x260427.appLog = _0x448191;
  _0x448191.info("Starting...");
  if (!_0x260427.processArgvPrinted) {
    _0x448191.info("Process argv", JSON.stringify(process.argv || []));
  }
  const _0x1eb82b = process.argv[2] || process.argv[1];
  const _0x40f0fa = !!process.platform.match(/(harmony|ohos)/i);
  const _0x5960e9 = !_0x31b399.app.isPackaged && !_0x40f0fa;
  const _0x35c8fe = _0x29f7c7 => (0, _0xce9625.createHash)("md5").update(_0x29f7c7).digest("hex");
  _0x260427.runtimeConf = _0x4fbeb1(true);
  _0x260427.APP_HASH_CODE = _0x260427.runtimeConf.hashCode || _0x35c8fe(String(Math.random()));
  const _0x36eed0 = _0x260427.runtimeConf.localServer || "";
  if (_0x36eed0) {
    let _0x1c3480 = _0x36eed0 + "/active-app?token=" + _0x260427.APP_HASH_CODE;
    if (_0x1eb82b) {
      if (_0x1eb82b.startsWith("bilipc")) {
        const _0x31775f = encodeURIComponent(_0x1eb82b);
        _0x1c3480 = _0x36eed0 + "/active-app?dlink=" + _0x31775f + "&token=" + _0x260427.APP_HASH_CODE;
      } else if (_0x16f5cb.some(_0x2ea4b1 => _0x1eb82b.toLowerCase().endsWith("." + _0x2ea4b1)) && (0, _0x30d4f5.existsSync)(_0x1eb82b)) {
        const _0x1e169d = encodeURIComponent(_0x1eb82b);
        _0x1c3480 = _0x36eed0 + "/play-local?vpath=" + _0x1e169d + "&token=" + _0x260427.APP_HASH_CODE;
      }
    }
    (0, _0x316599.default)(_0x1c3480, {
      timeout: 5000
    }).then(() => {
      _0x448191.info("Exist instance focused!");
      process.exit(1);
    }).catch(() => {
      _0x448191.info("Creating new instance!");
      _0x1e2976();
      if (_0x5960e9) {
        const _0x3e2b58 = +"3032" || 3032;
        (0, _0x316599.default)("http://localhost:" + _0x3e2b58 + "/restart").then();
      } else {
        _0x31b399.app.relaunch();
        _0x31b399.app.exit();
      }
    });
  } else {
    if (!_0x31b399.app.requestSingleInstanceLock()) {
      _0x31b399.app.quit();
    }
    if (_0x260427.runtimeConf.enableCrashReport) {
      _0x31b399.crashReporter.start({
        productName: "BiliBiliPC",
        companyName: "哔哩哔哩",
        compress: false,
        uploadToServer: false
      });
    }
    if (_0x260427.runtimeConf.customEnvs) {
      Object.keys(_0x260427.runtimeConf.customEnvs).forEach(_0x47b628 => {
        process.env[_0x47b628] = _0x260427.runtimeConf.customEnvs[_0x47b628];
      });
    }
    if (_0x5e36f8.default.gt(process.versions.electron, "23.0.0")) {
      _0x31b399.protocol.registerSchemesAsPrivileged([{
        scheme: "local",
        privileges: {
          standard: true,
          secure: true,
          corsEnabled: true
        }
      }]);
    }
    _0x260427.bootstrapEvents = new _0x5cc82e.default();
    const _0x472bcf = _0x5960e9 || _0x485553;
    const _0x33639f = _0x31b399.app.getPath("userData");
    const _0x5489d9 = +"3031" || 3031;
    const _0x3ef472 = "bilipc.bilibili.com";
    const _0x3b90fa = _0x35c8fe("biliPc");
    const _0x4a9a63 = new _0x25f1c2.default({
      name: "settings",
      encryptionKey: _0x3b90fa
    });
    const _0x4eed07 = _0x4a9a63.store;
    const _0xdba48c = _0x4a96b7 => _0x4eed07[_0x4a96b7];
    const _0x1f935d = _0xdba48c("CUSTOM_CONFIG_STORE") || {};
    const _0xc59c7c = process.platform === "win32";
    const _0x20066b = process.platform === "darwin";
    const _0x3f33d1 = process.platform === "linux";
    const _0x32b76e = !!process.arch.match(/^arm/i);
    const _0x3c54f8 = (0, _0x1c6653.join)(__dirname, "assets/images/logo.ico");
    const _0x1501b7 = "https://www.bilibili.com";
    const _0x4552ad = "https://www.bilibili.com/client";
    _0x31b399.app.on("open-url", (_0x17dc18, _0x475a7c) => {
      _0x448191.info("DeepLink url:", _0x475a7c);
      _0x260427.deepLinkUrl = _0x475a7c;
      _0x260427.bootstrapEvents.emit("deepLink", _0x475a7c);
    });
    _0x31b399.app.on("open-file", (_0x5cfc55, _0x5b8950) => {
      _0x448191.info("Open file:", _0x5b8950);
      if (_0x16f5cb.some(_0x397232 => _0x5b8950.toLowerCase().endsWith("." + _0x397232)) && (0, _0x30d4f5.existsSync)(_0x5b8950)) {
        _0x260427.openFilePath = _0x5b8950;
        _0x260427.bootstrapEvents.emit("openFile", _0x5b8950);
      }
    });
    if (_0x1eb82b) {
      if (_0x1eb82b.startsWith("bilipc")) {
        _0x448191.info("DeepLink url:", _0x1eb82b);
        _0x260427.deepLinkUrl = _0x1eb82b;
        _0x260427.bootstrapEvents.emit("deepLink", _0x1eb82b);
      } else if (_0x16f5cb.some(_0x330658 => _0x1eb82b.toLowerCase().endsWith("." + _0x330658)) && (0, _0x30d4f5.existsSync)(_0x1eb82b)) {
        _0x448191.info("Open file:", _0x1eb82b);
        _0x260427.openFilePath = _0x1eb82b;
        _0x260427.bootstrapEvents.emit("openFile", _0x1eb82b);
      }
    }
    await new Promise(async _0x5c479f => {
      const _0xfd2b8 = (0, _0x5404cb.default)();
      _0xfd2b8.all("*", (_0x302163, _0x3dd4f6, _0x52c046) => {
        if (_0x302163.hostname === _0x3ef472) {
          return _0x52c046();
        }
        const {
          origin: _0xe572bf,
          Origin: _0x307d21,
          referer: _0x3ab759,
          Referer: _0x3dcc55
        } = _0x302163.headers;
        if ((_0xe572bf || _0x307d21) !== _0x1501b7 && (_0x3ab759 || _0x3dcc55) !== _0x4552ad) {
          return _0x3dd4f6.status(200).send("你喜欢的视频都在B站：<a href=\"" + _0x1501b7 + "\">" + _0x1501b7 + "</a>");
        } else {
          return _0x52c046();
        }
      });
      try {
        const _0x22f3f1 = (0, _0x1c6653.join)(_0x33639f, "resource", ".temp");
        if ((0, _0x30d4f5.existsSync)(_0x22f3f1)) {
          (0, _0x30d4f5.removeSync)(_0x22f3f1);
        }
        (0, _0x30d4f5.mkdirSync)(_0x22f3f1, {
          recursive: true
        });
        const _0x5a01eb = (0, _0x1c6653.join)(__dirname, "../render/index.html");
        const _0x1b129e = (0, _0x1c6653.join)(_0x22f3f1, ".bili.html");
        if (!_0x5960e9 || (0, _0x30d4f5.existsSync)(_0x5a01eb)) {
          (0, _0x30d4f5.copyFileSync)(_0x5a01eb, _0x1b129e);
          _0x448191.info("Resource permision ok.");
        }
      } catch (_0x63b4ae) {
        _0x448191.error("Cp temp resource error.", _0x63b4ae.message);
        _0x260427.runtimeConf.restrict = true;
        _0x419d16({
          restrict: true
        });
        if (process.platform === "win32") {
          _0x448191.info("Elevate restart...");
          const _0x41b805 = (0, _0x1c6653.join)((0, _0x1c6653.dirname)(_0x31b399.app.getAppPath()), "elevate.exe");
          (0, _0xd2b325.execFile)(_0x41b805, [_0x31b399.app.getPath("exe")], (_0x3ec16d, _0x7eafe6, _0x4f3027) => {
            if (_0x3ec16d || _0x4f3027) {
              _0x448191.error("Elevate restart error: " + (_0x3ec16d.message || _0x4f3027));
              return;
            }
            _0x448191.info("Elevate restart stdout: " + _0x7eafe6);
            _0x31b399.app.quit();
          });
          return;
        }
      }
      _0xfd2b8.use(_0x5404cb.default.static((0, _0x1c6653.join)(__dirname, "../render")));
      const _0x41801a = (0, _0x12e791.createServer)({
        cert: _0x132f64,
        key: _0xfdfdc1
      }, _0xfd2b8).listen(0, () => {
        _0x260427.localAppPort = _0x41801a.address().port;
        _0x448191.info("App server ready:", _0x260427.localAppPort);
        _0x5c479f(1);
      });
    });
    if (_0x260427.runtimeConf.disableGpu || _0x1f935d.disableGpu || _0xdba48c("DISABLE_GPU")) {
      if (_0x260427.runtimeConf.disableGpu || _0x1f935d.disableGpu) {
        _0x448191.info("Force disable GPU!");
      }
      _0x448191.info("Set disable GPU");
      _0x31b399.app.disableHardwareAcceleration();
      _0x31b399.app.commandLine.appendSwitch("disable-gpu");
      _0x31b399.app.commandLine.appendSwitch("disable-software-rasterizer");
      _0x260427.isGpuDisabled = true;
    }
    if (_0x1f935d.disableHttp2) {
      _0x31b399.app.commandLine.appendSwitch("disable-http2");
    }
    if (_0xdba48c("USE_MEDIA_SESSION") === false) {
      _0x31b399.app.commandLine.appendSwitch("disable-features", "HardwareMediaKeyHandling,MediaSessionService");
    }
    _0x31b399.app.commandLine.appendSwitch("--no-sandbox");
    _0x31b399.app.commandLine.appendSwitch("enable-features", "SharedArrayBuffer");
    _0x31b399.app.commandLine.appendSwitch("enable-features", "PlatformHEVCDecoderSupport");
    const _0x1ea28f = _0x5960e9 && !_0x1f935d.isDevBuiltRender ? _0x5489d9 : _0x260427.localAppPort;
    _0x31b399.app.commandLine.appendSwitch("host-rules", "MAP " + _0x3ef472 + " localhost:" + _0x1ea28f);
    if (_0xc59c7c && _0x32b76e && _0x5e36f8.default.lt(process.versions.electron, "23.0.0")) {
      _0x31b399.app.commandLine.appendSwitch("enable-gpu-rasterization");
    }
    if (_0x260427.runtimeConf.customSwitches) {
      _0x448191.info("Add custom switches:", JSON.stringify(_0x260427.runtimeConf.customSwitches));
      Object.keys(_0x260427.runtimeConf.customSwitches).forEach(_0x510836 => {
        _0x31b399.app.commandLine.appendSwitch(_0x510836, _0x260427.runtimeConf.customSwitches[_0x510836] || undefined);
      });
    }
    _0x31b399.app.setAppUserModelId("com.bilibili.bilibiliPC");
    _0x31b399.app.once("gpu-info-update", () => _0x260427.isGpuInfoUpdated = true);
    await _0x31b399.app.whenReady();
    _0x260427.appReadyTime = Date.now();
    _0x260427.setAppProxy = async ({
      enableSystemProxy: _0x1bd692,
      enableProxyAgent: _0x3c74db,
      proxyAgentUrl: _0xa7cffe
    }) => {
      const _0x51699e = _0x31b399.session.defaultSession;
      const _0x2a2d2d = _0x31b399.session.fromPartition("minilogin");
      const _0x46fe74 = ["<local>", "localhost", "127.0.0.1", "[::1]", _0x3ef472].join(",");
      const _0x47ba30 = "https://" + _0x3ef472 + "/index.html";
      try {
        if (_0x1bd692) {
          await _0x51699e.setProxy({
            mode: "system",
            proxyBypassRules: _0x46fe74
          });
          _0x2a2d2d.setProxy({
            mode: "system",
            proxyBypassRules: _0x46fe74
          });
          _0x448191.info("SystemProxy enabled!");
          if (_0x5e36f8.default.gt(process.versions.electron, "23.0.0")) {
            let _0x38bcc2 = await _0x51699e.resolveProxy(_0x47ba30);
            if (!_0x38bcc2.match(/direct/i)) {
              const _0x5e81b9 = await _0x51699e.resolveProxy(_0x1501b7);
              const _0x195f72 = (_0x42dd2d = "") => {
                return _0x42dd2d.split(";").map(_0x44209b => {
                  const _0x45bcba = _0x44209b.trim();
                  if (/^DIRECT$/i.test(_0x45bcba)) {
                    return "direct://";
                  }
                  const _0x175357 = /^(PROXY|HTTPS|SOCKS|SOCKS4|SOCKS5)\s+(.+)$/i.exec(_0x45bcba);
                  if (!_0x175357) {
                    return "";
                  }
                  const _0x5f13f6 = {
                    PROXY: "http",
                    HTTPS: "https",
                    SOCKS: "socks5",
                    SOCKS4: "socks4",
                    SOCKS5: "socks5"
                  };
                  return _0x5f13f6[_0x175357[1].toUpperCase()] + "://" + _0x175357[2];
                }).filter(Boolean).join(",");
              };
              const _0x49da14 = _0x195f72(_0x5e81b9);
              if (_0x49da14) {
                _0x448191.warn("SystemProxy local bypass ignored, use fixed proxy with bypass:", _0x49da14);
                const _0x3106d5 = {
                  mode: "fixed_servers",
                  proxyRules: _0x49da14,
                  proxyBypassRules: _0x46fe74
                };
                await _0x51699e.setProxy(_0x3106d5);
                await _0x51699e.closeAllConnections();
                _0x2a2d2d.setProxy(_0x3106d5);
                _0x2a2d2d.closeAllConnections();
                _0x38bcc2 = await _0x51699e.resolveProxy(_0x47ba30);
              }
            }
            _0x448191.info("Local proxy resolve:", _0x38bcc2);
          }
        } else if (_0x3c74db && _0xa7cffe?.match(/^https?:\/\//)) {
          await _0x51699e.setProxy({
            proxyRules: _0xa7cffe,
            proxyBypassRules: _0x46fe74
          });
          _0x2a2d2d.setProxy({
            proxyRules: _0xa7cffe,
            proxyBypassRules: _0x46fe74
          });
          _0x448191.info("Enable proxy:", _0xa7cffe);
        } else {
          await _0x51699e.setProxy({
            mode: "direct",
            proxyRules: "direct://"
          });
          _0x2a2d2d.setProxy({
            mode: "direct",
            proxyRules: "direct://"
          });
        }
      } catch (_0x578300) {
        _0x448191.error("Set app proxy error.", _0x578300?.message || _0x578300);
      }
    };
    _0x260427.setAppProxy(_0x1f935d);
    if (_0x260427.runtimeConf.disableDefaultTemp) {
      try {
        const _0x537b06 = (0, _0x1c6653.join)(_0x33639f, "Tempfiles");
        (0, _0x30d4f5.ensureDirSync)(_0x537b06);
        _0x31b399.app.setPath("temp", _0x537b06);
        _0x448191.info("Disable default tempdir!");
      } catch (_0x5e3b14) {
        _0x448191.error("Set temp path error.", _0x5e3b14.message);
      }
    }
    _0x31b399.protocol.registerHttpProtocol("local", (_0x430220, _0x5ec7a8) => {
      const _0x35044c = _0x260427.localServer || "http://localhost:22331";
      const _0x4624f5 = _0x430220.url.substr(8);
      _0x5ec7a8({
        url: _0x35044c + "/" + _0x4624f5 + "?token=" + _0x260427.APP_HASH_CODE
      });
    });
    const _0x33687e = !!_0xdba48c("IS_CONFIG_DEV");
    const _0x461c91 = () => {
      const _0x4a0a63 = _0x4a9a63.get("MAIN_WINDOW_THEME") || "light";
      const _0x2b4a0b = _0x4a0a63 === "dark" || _0x4a0a63 === "system" && _0x31b399.nativeTheme.shouldUseDarkColors;
      if (_0x2b4a0b) {
        return "dark";
      } else {
        return "light";
      }
    };
    _0x31b399.ipcMain.on("app/getTheme", (_0x8a793a, _0x5e43b5 = "MainWindowTheme") => {
      if (_0x5e43b5 === "PlayerWindowTheme") {
        const _0x1f8a0b = _0x4a9a63.get("PLAYER_WINDOW_THEME") || "dark";
        _0x8a793a.returnValue = _0x1f8a0b === "followMain" ? _0x461c91() : _0x1f8a0b;
      } else {
        _0x8a793a.returnValue = _0x461c91();
      }
    });
    _0x31b399.ipcMain.on("app/getInitInfo", _0x5590fb => {
      const _0xfddfff = {
        IS_MAC: _0x20066b,
        IS_WIN: _0xc59c7c,
        IS_LINUX: _0x3f33d1,
        IS_DEV: _0x5960e9,
        IS_RELEASE: !_0x485553,
        IS_DEV_M: _0x485553 || _0x33687e,
        APP_VERSION: _0x1145ea,
        JSB_PRELOAD_URL: (0, _0x5200a8.pathToFileURL)((0, _0x1c6653.join)(__dirname, "assets/bili-inject.js")).href,
        appId: 112,
        platform: _0xc59c7c ? 4 : _0x20066b ? 8 : _0x3f33d1 ? 9 : 4
      };
      _0x5590fb.returnValue = _0xfddfff;
      return _0xfddfff;
    });
    _0x31b399.ipcMain.on("app/mainProcessReady", _0x5c427a => _0x5c427a.returnValue = !!_0x260427.isMainProcessReady);
    _0x448191.info("Creating main window!");
    const _0x406e40 = _0x4e1f0b => {
      return JSON.parse(_0xdba48c("WINDOW_STATES")?.[_0x4e1f0b] || "{}");
    };
    const _0x2dac82 = new _0x5e7d34({
      getWindowState: _0x406e40
    }, _0x39dd91);
    const {
      x: _0x1e5f9f,
      y: _0x561f48,
      width: _0x496269,
      height: _0x5d7dc8
    } = _0x2dac82;
    const {
      minWidth: _0x2e96bd,
      minHeight: _0x140a85
    } = _0x39dd91;
    const _0x256f75 = _0x2dac82.isMaximized && _0x39dd91.keepMaximum;
    const _0x4adefd = new _0x31b399.BrowserWindow({
      x: _0x1e5f9f,
      y: _0x561f48,
      width: _0x496269,
      height: _0x5d7dc8,
      minWidth: _0x2e96bd,
      minHeight: _0x140a85,
      show: false,
      titleBarStyle: "hidden",
      autoHideMenuBar: true,
      alwaysOnTop: true,
      fullscreenable: false,
      trafficLightPosition: {
        x: 5,
        y: 5
      },
      ...(_0xc59c7c ? {
        resizable: false
      } : {}),
      ...(_0xc59c7c ? {
        icon: _0x3c54f8
      } : {}),
      webPreferences: {
        webviewTag: true,
        webSecurity: false,
        nodeIntegration: true,
        preload: (0, _0x1c6653.join)(__dirname, "assets/bili-bridge.js"),
        devTools: _0x472bcf || _0x33687e,
        ..._0x260427.runtimeConf.exWebPreferences
      }
    });
    _0x260427.mainWindow = _0x4adefd;
    _0x4adefd.removeMenu();
    _0x4adefd.isHidden = true;
    const _0x573bd2 = _0x4adefd.webContents.getUserAgent().replace(/bilibili\//, "bilibili_pc/");
    _0x260427.DEFAULT_USER_AGENT = _0x573bd2 + " build/" + _0x492722;
    _0x4adefd.webContents.setUserAgent(_0x260427.DEFAULT_USER_AGENT);
    let _0x1933de = _0xdba48c("SELECTED_FIRST");
    if (typeof _0x1933de === "undefined") {
      _0x1933de = !!_0xdba48c("FF_SELECTED_FIRST");
    }
const _0x328c2a = _0x1933de || !!_0xdba48c("SELECTED_EXIT");
_0x4adefd.loadURL(require('url').format({ pathname: require('path').join(__dirname, "../render/index.html"), protocol: "file:", slashes: true }) + (_0x328c2a ? "#page/selected" : ""));
// 拦截视频点击，召唤本地黑底播放器
_0x4adefd.webContents.setWindowOpenHandler(({ url }) => {
    if (url.includes("bilibili.com/video/")) {
        const bvid = url.split('/video/')[1].split('?')[0];
        
        const playerWindow = new (require('electron').BrowserWindow)({
            width: 1280,
            height: 720,
            titleBarStyle: "hidden",
            autoHideMenuBar: true,
            backgroundColor: '#000000',
            webPreferences: {
                webSecurity: false,
                nodeIntegration: true,
                devTools: true,
                preload: require('path').join(__dirname, "assets/bili-bridge.js")
            }
        });

        // 强行注入假桥接，防止 Vue 黑屏
        playerWindow.webContents.on('dom-ready', () => {
            playerWindow.webContents.executeJavaScript(`
                if (!window.biliBridgePc) {
                    window.biliBridgePc = {
                        callNativeSync: function(api) {
                            if (api === "app/getTheme") return "dark";
                            return ""; 
                        },
                        callNative: function() { return Promise.resolve(); }
                    };
                }
            `);
        });

        // 带上防盗链
        playerWindow.webContents.session.webRequest.onBeforeSendHeaders((details, callback) => {
            details.requestHeaders['Referer'] = 'https://www.bilibili.com/';
            details.requestHeaders['Origin'] = 'https://www.bilibili.com';
            callback({ requestHeaders: details.requestHeaders });
        });

        // 加载本地播放器
        const playerPath = require('url').format({ 
            pathname: require('path').join(__dirname, "../render/player.html"), 
            protocol: "file:", 
            slashes: true 
        });
        playerWindow.loadURL(playerPath + "#/video/" + bvid);
        
        return { action: 'deny' }; 
    }
    return { action: 'deny' };
});
    if ((_0x472bcf || _0x33687e) && _0x1f935d.isOpenMainDevTools) {
      _0x4adefd.webContents.closeDevTools();
      setTimeout(() => {
        _0x4adefd.webContents.openDevTools();
      }, 200);
    }
    _0x4adefd.webContents.session.setCertificateVerifyProc((_0x3fe4c3, _0x15fe58) => {
      if (_0x3fe4c3.certificate.data === _0x132f64) {
        return _0x15fe58(0);
      }
      _0x15fe58(-3);
    });
    _0x4adefd.webContents.once("dom-ready", () => {
      _0x448191.info("Main window dom-ready!");
      _0x31b399.session.defaultSession.setUserAgent(_0x260427.DEFAULT_USER_AGENT);
      setTimeout(() => {
        if ((!_0x260427.deepLinkUrl || !_0x260427.deepLinkUrl.includes("/page/player")) && !_0x260427.openFilePath) {
          _0x4adefd.show();
          _0x4adefd.setResizable(true);
          if (_0x256f75 && !_0x4adefd.isMaximized()) {
            _0x4adefd.maximize();
          }
          ;
          _0x4adefd.isShowed = true;
          _0x4adefd.isHidden = false;
        }
        _0x4adefd.setAlwaysOnTop(false);
        _0x260427.splashReadyTime = Date.now();
        setTimeout(_0x3d5111, 100);
      }, 100);
    });
    const _0x3d5111 = () => {
      let _0x5e1d93 = "";
      let _0x27d1da;
      let _0x224a9a;
      const _0x60a21c = "APP_BUILD_CODE";
      const _0x578b4a = "MAIN_HASH_CACHE";
      const _0xba3713 = _0x2b50a6 => "(function(module, exports, require, __dirname, __filename){" + _0x2b50a6 + "})";
      const _0x1fe0dc = _0x1b8887 => {
        const _0x418852 = (0, _0xce9625.createHash)("md5");
        _0x418852.update(_0x1b8887);
        _0x418852.update(_0x1015ec);
        _0x418852.update(process.versions.electron);
        return _0x418852.digest("hex");
      };
      const _0xaa1e6e = () => {
        const [_0x41261a, _0x15a61e] = "bilibili.chears".split(".");
        return {
          key: (0, _0xce9625.createHash)("md5").update(_0x41261a).digest(),
          iv: (0, _0xce9625.createHash)("md5").update(_0x15a61e).digest()
        };
      };
      const _0x367b44 = _0x2e156e => {
        const {
          key: _0x502ab4,
          iv: _0x35e149
        } = _0xaa1e6e();
        const _0x5a0b5c = (0, _0xce9625.createCipheriv)("aes-128-cbc", _0x502ab4, _0x35e149);
        return Buffer.concat([_0x5a0b5c.update(Buffer.from(_0x2e156e, "utf8")), _0x5a0b5c.final()]);
      };
      const _0x5b038f = _0x1f623e => {
        const {
          key: _0x534f64,
          iv: _0x362d0f
        } = _0xaa1e6e();
        const _0x1a7972 = (0, _0xce9625.createDecipheriv)("aes-128-cbc", _0x534f64, _0x362d0f);
        return Buffer.concat([_0x1a7972.update(_0x1f623e), _0x1a7972.final()]).toString("utf8");
      };
      if (_0x472bcf) {
        _0x5e1d93 = "require('./app.js')";
        _0x260427.decriptedTime = Date.now();
      } else {
        const _0x2efcfe = (0, _0x1c6653.join)(_0x33639f, "resource", ".biliapp");
        const _0x3d7e63 = (0, _0x1c6653.join)(_0x33639f, "resource", ".bilijsc");
        if (_0xdba48c(_0x60a21c) === _0x1015ec) {
          try {
            const _0x57fd36 = _0xdba48c(_0x578b4a);
            if (_0x57fd36 && (0, _0x30d4f5.existsSync)(_0x2efcfe) && (0, _0x30d4f5.existsSync)(_0x3d7e63)) {
              const _0x4997b7 = _0x5b038f((0, _0x30d4f5.readFileSync)(_0x2efcfe));
              if (_0x1fe0dc(_0x4997b7) === _0x57fd36) {
                _0x5e1d93 = _0x4997b7;
                _0x27d1da = (0, _0x30d4f5.readFileSync)(_0x3d7e63);
                _0x260427.decriptedTime = Date.now();
                _0x448191.info("Use main cache!");
              }
            }
          } catch (_0x59b730) {
            _0x448191.error("Read main cache error.", _0x59b730.message);
          }
        }
        if (!_0x27d1da) {
          const _0x113b47 = (0, _0x1c6653.join)(__dirname, ".bilipcapp".replace("pc", ""));
          const [_0x482ca3, _0x1f1487] = "哔哩.干杯".split(".");
          const _0x1df922 = (0, _0x30d4f5.readFileSync)(_0x113b47, "utf8");
          const _0x3d4c41 = Buffer.from(_0x1df922.substr(0, _0x1df922.length - 32), "hex");
          const _0x1c0f03 = (0, _0xce9625.createDecipheriv)("aes-256-gcm", _0x35c8fe(_0x482ca3), _0x35c8fe(_0x1f1487));
          _0x1c0f03.setAuthTag(Buffer.from(_0x1df922.substr(-32), "hex"));
          const _0x3ad056 = Buffer.concat([_0x1c0f03.update(_0x3d4c41), _0x1c0f03.final()]);
          _0x5e1d93 = _0x3ad056.toString("utf-8");
          _0x224a9a = new _0x4ae6a9.default.Script(_0xba3713(_0x5e1d93), {
            filename: "biliapp.js",
            produceCachedData: true
          });
          if (_0x224a9a.cachedDataProduced) {
            try {
              _0x4a9a63.set(_0x60a21c, _0x1015ec);
              _0x4a9a63.set(_0x578b4a, _0x1fe0dc(_0x5e1d93));
              (0, _0x30d4f5.writeFileSync)(_0x2efcfe, _0x367b44(_0x5e1d93));
              (0, _0x30d4f5.writeFileSync)(_0x3d7e63, _0x224a9a.cachedData);
              _0x27d1da = _0x224a9a.cachedData;
              _0x448191.info("Main cache saved!");
            } catch (_0xa8ab1b) {
              _0x448191.error("Save main cache error.", _0xa8ab1b.message);
            }
          }
          _0x260427.decriptedTime = Date.now();
        }
      }
      if (_0x27d1da) {
        _0x224a9a = new _0x4ae6a9.default.Script(_0xba3713(_0x5e1d93), {
          filename: "biliapp.js",
          cachedData: _0x27d1da
        });
      } else if (!_0x224a9a) {
        _0x224a9a = new _0x4ae6a9.default.Script(_0xba3713(_0x5e1d93));
      }
      _0x224a9a.runInThisContext()(module, exports, require, __dirname, __filename);
      if (_0x27d1da) {
        if (_0x224a9a.cachedDataRejected) {
          _0x448191.warn("Main cache rejected!");
          _0x4a9a63.set(_0x60a21c, "");
          _0x4a9a63.set(_0x578b4a, "");
        } else {
          _0x448191.log("Main cache accepted!");
        }
      }
      _0x260427.isFiredByEntry = true;
      _0x260427.bootstrapBiliApp();
      _0x260427.isMainProcessReady = true;
      _0x260427.mainWindow.webContents.send("app/mainProcessReady");
    };
  }
};