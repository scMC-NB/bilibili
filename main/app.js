
const Module = require('module');
const originalRequire = Module.prototype.require;
Module.prototype.require = function (moduleName) {
    try {
        return originalRequire.apply(this, arguments);
    } catch (e) {
        if (e.code === 'MODULE_NOT_FOUND') {
            // 遇到找不到的包，返回一个万能代理，不管调用什么方法都不报错
            return new Proxy({}, {
                get: () => () => {}
            });
        }
        throw e;
    }
};
var bP = Object.create;
var bQ = Object.defineProperty;
var bR = Object.getOwnPropertyDescriptor;
var bS = Object.getOwnPropertyNames;
var bT = Object.getPrototypeOf;
var bU = Object.prototype.hasOwnProperty;
var bV = (g, h, i) => h in g ? bQ(g, h, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: i
}) : g[h] = i;
var bW = (g, h) => function i() {
  if (g) {
    h = (0, g[bS(g)[0]])(g = 0);
  }
  return h;
};
var bX = (g, h) => function i() {
  if (!h) {
    (0, g[bS(g)[0]])((h = {
      exports: {}
    }).exports, h);
  }
  return h.exports;
};
var bY = (g, h) => {
  for (var i in h) {
    bQ(g, i, {
      get: h[i],
      enumerable: true
    });
  }
};
var bZ = (g, h, i, j) => {
  if (h && typeof h === "object" || typeof h === "function") {
    for (let l of bS(h)) {
      if (!bU.call(g, l) && l !== i) {
        bQ(g, l, {
          get: () => h[l],
          enumerable: !(j = bR(h, l)) || j.enumerable
        });
      }
    }
  }
  return g;
};
var c0 = (g, h, i) => {
  bZ(g, h, "default");
  return i && bZ(i, h, "default");
};
var c1 = (g, h, i) => {
  i = g != null ? bP(bT(g)) : {};
  return bZ(h || !g || !g.__esModule ? bQ(i, "default", {
    value: g,
    enumerable: true
  }) : i, g);
};
var c2 = g => bZ(bQ({}, "__esModule", {
  value: true
}), g);
var c3 = (g, h, i) => {
  bV(g, typeof h !== "symbol" ? h + "" : h, i);
  return i;
};
var c4;
var c5;
var c6 = bW({
  ""() {
    c4 = c1(require("electron-log"));
    c5 = class {
      constructor(g) {
        c3(this, "log");
        this.log = c4.default.scope(g);
      }
      getErrStack(g) {
        if (g instanceof Error) {
          return g.stack || g.message;
        } else {
          return g;
        }
      }
      formatError(g) {
        if (g instanceof Error) {
          return g;
        } else {
          return new Error(g);
        }
      }
    };
  }
});
var c7;
var c8;
var c9 = bW({
  ""() {
    c6();
    c7 = require("electron");
    c8 = class extends c5 {
      constructor(g, h) {
        super(h);
        this.configService = g;
        this.logScope = h;
      }
      getScopeWindowId(g) {
        return this.configService[g]?.id || NaN;
      }
      getSenderWindowId(g) {
        return c7.BrowserWindow.fromWebContents(g.sender)?.id || NaN;
      }
      getSenderWindow(g) {
        return c7.BrowserWindow.fromWebContents(g.sender);
      }
    };
  }
});
var ca;
var cb = bW({
  ""() {
    c6();
    ca = class extends c5 {
      constructor(h) {
        super(h);
      }
    };
  }
});
var cc;
var cd;
var ce;
var cf = bW({
  ""() {
    cc = require("events");
    cd = class extends cc.EventEmitter {
      emit(h, i, ...j) {
        const [k] = this.listeners("ipc-message");
        if (k) {
          return Reflect.apply(k, this, [h, i, ...j]);
        }
      }
    };
    ce = new cd();
  }
});
var cg = bX({
  ""(g) {
    'use strict';

    var i = g && g.__decorate || function (l, m, n, o) {
      var q = arguments.length;
      var t = q < 3 ? m : o === null ? o = Object.getOwnPropertyDescriptor(m, n) : o;
      var u;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        t = Reflect.decorate(l, m, n, o);
      } else {
        for (var w = l.length - 1; w >= 0; w--) {
          if (u = l[w]) {
            t = (q < 3 ? u(t) : q > 3 ? u(m, n, t) : u(m, n)) || t;
          }
        }
      }
      if (q > 3 && t) {
        Object.defineProperty(m, n, t);
      }
      return t;
    };
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.AllExceptionsFilter = undefined;
    var j = require("@nestjs/common");
    var k = class l {
      catch(m, n) {
        throw m;
      }
    };
    k = i([(0, j.Catch)()], k);
    g.AllExceptionsFilter = k;
  }
});
var ch;
var ci;
var cj;
var ck;
var cl;
var cm;
var cn;
var co;
var cp;
var cq;
var cr;
var cs;
var ct;
var cu;
var cv = bW({
  ""() {
    ch = "1.19.0";
    ci = "1001019000";
    cj = "10010190002609201055";
    ck = "official";
    cl = false;
    cm = false;
    cn = "1393487";
    co = "28612153";
    cp = "win";
    cq = 900000;
    cr = false;
    cs = NaN;
    ct = false;
    cu = false;
  }
});
var cw = {};
bY(cw, {
  formatRectangle: () => cB,
  getWindowDefaultState: () => cC,
  isResourceUrl: () => cE,
  resolve: () => cA,
  sleep: () => cD
});
var cx;
var cy;
var cz;
var cA;
var cB;
var cC;
var cD;
var cE;
var cF = bW({
  ""() {
    cx = c1(require("path"));
    cy = require("electron");
    cz = require("@bilibili/b-utils-core");
    cA = (...h) => cx.default.resolve(cy.app.getAppPath(), ...h);
    cB = h => {
      ;
      ["x", "y", "width", "height"].forEach(i => {
        if ((0, cz.isNum)(h[i])) {
          h[i] = Math.round(h[i]);
        }
      });
      return h;
    };
    cC = ({
      width: h,
      height: i
    }) => {
      const j = cy.screen.getPrimaryDisplay().bounds;
      const {
        x: k,
        y: l,
        width: m,
        height: n
      } = j;
      const o = h > m ? 0 : (m - h) / 2 + k;
      const q = i > n ? 0 : (n - i) / 2 + l;
      return cB({
        x: o,
        y: q,
        width: h,
        height: i,
        displayBounds: j
      });
    };
    cD = (h = 0) => {
      return new Promise(i => setTimeout(() => i(true), h));
    };
    cE = h => {
      return /\.(exe|dmg|apk|rar|zip|gz|tar)/i.test(h);
    };
  }
});
function cG(g, h) {
  const i = (0, cQ.createHash)("md5").update(g).digest("hex");
  if (h) {
    return i.substring(0, h);
  } else {
    return i;
  }
}
function cH(g, h, i) {
  const k = (0, cQ.createCipheriv)("aes-256-gcm", h, i);
  const l = Buffer.concat([k.update(Buffer.from(g, "utf-8")), k.final()]);
  const m = k.getAuthTag();
  const n = l.toString("hex");
  const o = m.toString("hex");
  return {
    encrypted: n,
    authTag: o
  };
}
function cI(g, h, i, j) {
  const k = Buffer.from(h, "hex");
  const l = Buffer.from(g, "hex");
  const m = (0, cQ.createDecipheriv)("aes-256-gcm", i, j);
  m.setAuthTag(k);
  const n = Buffer.concat([m.update(l), m.final()]);
  return n.toString("utf-8");
}
function cJ(g, h, i, j = "hex") {
  try {
    const k = (0, cQ.createCipheriv)("aes-128-cbc", h, i);
    return k.update(g, "utf8", j) + k.final(j);
  } catch (l) {
    return JSON.stringify(l);
  }
}
function cK(g, h, i, j = "hex") {
  try {
    const k = (0, cQ.createDecipheriv)("aes-128-cbc", h, i);
    return k.update(g, j, "utf8") + k.final("utf8");
  } catch (l) {
    return JSON.stringify(l);
  }
}
function cL(g) {
  return Buffer.from(g, "utf-8").toString("base64");
}
function cM(g) {
  return Buffer.from(g, "base64").toString("utf-8");
}
function cN(g, h) {
  const i = (0, cR.readFileSync)(g);
  const j = (0, cQ.createHash)("sha256");
  j.update(i);
  const k = j.digest("hex");
  if (h) {
    return k.substring(0, h);
  } else {
    return k;
  }
}
function cO(g, h) {
  return new Promise((i, j) => {
    const k = (0, cQ.createHash)("sha256");
    const l = (0, cR.createReadStream)(g);
    l.on("error", m => j(m));
    l.on("data", m => k.update(m));
    l.on("end", () => {
      const m = k.digest("hex");
      i(h ? m.substring(0, h) : m);
    });
  });
}
function cP(g) {
  const i = (0, cS.join)(g, "package.json");
  const j = {
    ...require(i)
  };
  delete j.keywords;
  delete j.dependencies;
  const k = JSON.stringify(j, null, 2);
  let l = cG(k);
  l += cN((0, cS.join)(g, "README.md"));
  const m = (0, cT.sync)((0, cS.join)(g, "main/**/*.js"));
  m.push(...(0, cT.sync)((0, cS.join)(g, "render/*.html"), {
    ignore: ["**/render/license.html"]
  }));
  try {
    m.forEach(n => {
      if ((0, cR.statSync)(n).isFile()) {
        l += cN(n);
      }
    });
  } catch (n) {}
  return cG("bilibili-" + l);
}
var cQ;
var cR;
var cS;
var cT;
var cU = bW({
  ""() {
    cQ = require("crypto");
    cR = require("fs");
    cS = require("path");
    cT = require("glob");
  }
});
var cV;
var cW;
var cX;
var cY = bW({
  ""() {
    cV = require("electron");
    cF();
    cW = require("rxjs");
    cX = class {
      constructor(h, i) {
        this.storeService = h;
        c3(this, "config");
        c3(this, "state");
        c3(this, "winRef");
        c3(this, "stateChangeTimer", null);
        c3(this, "stateUpdateDelay", 200);
        c3(this, "handleStateChange", () => {
          clearTimeout(this.stateChangeTimer);
          this.stateChangeTimer = setTimeout(() => this.updateState(), this.stateUpdateDelay);
        });
        c3(this, "handleCloseWindow", () => this.updateState());
        c3(this, "handleWindowClosed", () => {
          this.unmanage();
          this.updateState();
        });
        this.config = i;
        const j = this.storeService.getWindowState(this.config.windowName);
        this.state = cB(j);
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
      checkWindowStatus(h = false) {
        const j = this.isWindowStatusValid();
        if (!j) {
          this.resetStateToDefault();
        } else if (this.hasBounds() && this.state.displayBounds) {
          const k = cV.screen.getAllDisplays().some(l => this.windowWithinBounds(l.bounds));
          if (!k) {
            this.resetStateToDefault();
          }
        }
        if (h && this.winRef) {
          const m = cB(this.state);
          this.winRef.setBounds(m);
        }
      }
      resetStateToDefault() {
        const {
          defaultWidth: h,
          defaultHeight: i,
          isTopRight: j
        } = this.config;
        if (j) {
          const k = cV.screen.getPrimaryDisplay().bounds;
          this.state = {
            x: k.x + (k.width - h) - 20,
            y: k.y,
            width: h,
            height: i,
            displayBounds: k
          };
        } else {
          this.state = cC({
            width: h,
            height: i
          });
        }
      }
      resetAndUpdateWindowState() {
        if (this.winRef) {
          this.resetStateToDefault();
          const h = cB(this.state);
          this.winRef.setBounds(h);
        }
      }
      manage(h, i = false) {
        if (this.state.isFullScreen || this.state.isMaximized) {
          this.state.isFullScreen = false;
          if (this.state.isMaximized && this.config.keepMaximum) {
            if (this.config.onInit$ && !i) {
              this.config.onInit$.pipe((0, cW.take)(1)).subscribe(() => this.maximizeWindow(h));
            } else {
              h.once("show", () => this.maximizeWindow(h));
            }
          } else {
            this.state.isMaximized = false;
            this.resetStateToDefault();
          }
          this.storeService.setWindowState(this.config.windowName, this.state);
        }
        h.on("resize", this.handleStateChange);
        h.on("move", this.handleStateChange);
        h.on("close", this.handleCloseWindow);
        h.on("closed", this.handleWindowClosed);
        this.winRef = h;
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
      updateState(h) {
        h = h || this.winRef;
        if (!h) {
          return;
        }
        try {
          const i = cB(h.getBounds());
          if (this.isNormalWindow(h)) {
            this.state.x = i.x;
            this.state.y = i.y;
            this.state.width = i.width;
            this.state.height = i.height;
          }
          this.state.isMaximized = h.isMaximized();
          this.state.isFullScreen = h.isFullScreen();
          this.state.displayBounds = cV.screen.getDisplayMatching(i).bounds;
        } catch (j) {}
        this.storeService.setWindowState(this.config.windowName, this.state);
      }
      isWindowStatusValid() {
        return this.state && (this.hasBounds() || this.state.isMaximized || this.state.isFullScreen);
      }
      hasBounds() {
        return this.state && Number.isInteger(this.state.x) && Number.isInteger(this.state.y) && Number.isInteger(this.state.width) && this.state.width > 0 && Number.isInteger(this.state.height) && this.state.height > 0;
      }
      windowWithinBounds(h) {
        return this.state.x >= h.x && this.state.y >= h.y && this.state.x + this.state.width <= h.x + h.width && this.state.y + this.state.height <= h.y + h.height;
      }
      isNormalWindow(h) {
        return !h.isMaximized() && !h.isMinimized() && !h.isFullScreen();
      }
      maximizeWindow(h) {
        if (!h.isDestroyed() && !h.isMaximized()) {
          h.maximize();
        }
      }
    };
  }
});
async function cZ(g) {
  return new Promise(function (i, j) {
    if (!dt) {
      i({
        code: 0,
        msg: "system illegal"
      });
      return;
    }
    if (!g || !g.key) {
      j({
        code: -1,
        msg: "need key"
      });
      return;
    }
    if (!g.type) {
      g.type = "REG_SZ";
    }
    if (!g.data) {
      g.data = "";
    }
    let k = "reg add \"" + g.key + "\" ";
    if (g.name) {
      k += "/v \"" + g.name + "\" /t \"" + g.type + "\" /d \"" + g.data + "\" /f";
    } else {
      k += "/ve /t \"" + g.type + "\" /d \"" + g.data + "\" /f";
    }
    (0, d2.exec)(k, {
      encoding: "binary"
    }, (l, m, n) => {
      if (l) {
        j({
          code: -1,
          msg: d4.decode(n)
        });
      } else {
        i({
          code: 0,
          msg: d4.decode(m)
        });
      }
    });
  });
}
async function d0(g) {
  return new Promise(function (h, i) {
    if (!dt) {
      return h({
        code: 0,
        msg: "system illegal"
      });
    }
    if (!g || !g.key) {
      return i("need key & name");
    }
    let j = "reg delete \"" + g.key + "\" ";
    if (g.name) {
      j += "/ve /f";
    } else {
      j += "/v \"" + g.name + "\" /f";
    }
    (0, d2.exec)(j, {
      encoding: "binary"
    }, (k, l, m) => {
      if (k) {
        i({
          code: -1,
          msg: d4.decode(m)
        });
      } else {
        h({
          code: 0,
          msg: d4.decode(l)
        });
      }
    });
  });
}
async function d1(g) {
  return new Promise(function (i, j) {
    var k = {
      DlOut: function (m, n) {
        return m === n;
      }
    };
    if (!dt) {
      return i("system illegal");
    }
    const l = "reg query \"" + g + "\"";
    (0, d2.exec)(l, {
      encoding: "binary"
    }, (m, n, o) => {
      if (m) {
        return j(d4.decode(o));
      }
      const q = d4.decode(n);
      const r = d5(g);
      if (q.indexOf(r) === -1) {
        return i(q);
      }
      const t = q.split("\r\n");
      if (!t || !t.length) {
        return i(q);
      }
      const u = {};
      for (const z of t) {
        if (!z) {
          continue;
        }
        if (z.indexOf(r) > -1) {
          continue;
        }
        const A = z.indexOf("REG_");
        if (!A) {
          continue;
        }
        const B = z.split(/\s+/);
        let C;
        let D;
        let E;
        if (B.length > 3) {
          C = B[1].replace(/(^\s*)|(\s*$)/g, "");
          D = B[2].replace(/(^\s*)|(\s*$)/g, "");
          E = B[3].replace(/(^\s*)|(\s*$)/g, "");
        }
        u[C] = {
          type: D,
          data: E
        };
      }
      return i(u);
    });
  });
}
var d2;
var d3;
var d4;
var d5;
var d6 = bW({
  ""() {
    d2 = require("child_process");
    d3 = c1(require("iconv-lite"));
    fP();
    d4 = {
      decode: h => d3.default.decode(Buffer.from(h, "binary"), "cp936")
    };
    d5 = h => {
      if (!dt) {
        return "";
      }
      if (h.indexOf("HKCU") === 0) {
        return h.replace(/HKCU/g, "HKEY_CURRENT_USER");
      }
      if (h.indexOf("HKLM") === 0) {
        return h.replace(/HKLM/g, "HKEY_LOCAL_MACHINE");
      }
    };
  }
});
var d7;
var d8;
var d9;
var da;
var db;
var dc;
var dd;
var de;
var df;
var dg = bW({
  ""() {
    d7 = require("electron");
    d8 = require("path");
    d9 = require("fs-extra");
    da = (0, d8.join)(d7.app.getPath("userData"), ".runtime");
    db = (h = false) => {
      let i = {};
      let j = false;
      if ((0, d9.existsSync)(da)) {
        try {
          i = JSON.parse((0, d9.readFileSync)(da, {
            encoding: "utf-8"
          }) || "{}");
          j = true;
        } catch (k) {
          global.appLog?.info("Get runtime info error, err:", k.message, k.stack);
          j = false;
        }
      }
      if (h && !j) {
        try {
          global.appLog?.info("Init .runtion config file");
          (0, d9.writeFileSync)(da, "{}");
        } catch {}
      }
      return i;
    };
    dc = h => {
      try {
        const i = db();
        (0, d9.writeFileSync)(da, JSON.stringify({
          ...i,
          ...h
        }, null, 2));
      } catch {}
    };
    dd = () => {
      return db().localServer || "";
    };
    de = h => {
      dc({
        localServer: h
      });
    };
    df = () => {
      dc({
        localServer: ""
      });
    };
  }
});
var dh;
var di;
var dj;
var dk;
var dl = bW({
  ""() {
    dh = c1(require("ip"));
    cU();
    di = (h, j) => {
      let k = "";
      if (h.length < j) {
        for (let l = 0; l < j - h.length; l++) {
          k += "0";
        }
      }
      return k + h;
    };
    dj = h => {
      let j = "";
      for (let k = 0; k < h; k++) {
        j += parseInt(String(Math.random() * 16)).toString(16).toUpperCase();
      }
      return di(j, h);
    };
    dk = () => {
      const h = [7, 3, 3, 3, 10];
      const i = dj(h[0]);
      const j = dj(h[2]);
      const k = dj(h[3]);
      const l = dj(h[4]);
      const m = new Date().getFullYear().toString().slice(-2);
      const n = di((new Date().getMonth() + 1).toString(), 2);
      const o = di(new Date().getDate().toString(), 2);
      const q = di(new Date().getHours().toString(), 2);
      const r = 0;
      const t = "" + r + m + n + o + q;
      const u = dh.default.address();
      const w = cJ(u, cG("key", 16), cG("iv", 16), "base64").replace("==", "");
      return "" + i + j + k + l + t + w;
    };
  }
});
var dm = {};
bY(dm, {
  WinStateKeeper: () => cX,
  addRegValue: () => cZ,
  base64Decode: () => cM,
  base64Encode: () => cL,
  bigFileHash: () => cO,
  cipher: () => cJ,
  decipher: () => cK,
  decrypt: () => cI,
  delRegValue: () => d0,
  encrypt: () => cH,
  fileHash: () => cN,
  formatRectangle: () => cB,
  genBuvid4: () => dk,
  getAppHash: () => cP,
  getLocalServer: () => dd,
  getRunTimeConf: () => db,
  getWindowDefaultState: () => cC,
  isResourceUrl: () => cE,
  listRegValues: () => d1,
  md5Hash: () => cG,
  removeLocalServer: () => df,
  resolve: () => cA,
  setLocalServer: () => de,
  setRunTimeConf: () => dc,
  sleep: () => cD
});
var dn = bW({
  ""() {
    cF();
    cU();
    cY();
    d6();
    dg();
    dl();
  }
});
var dp;
var dq;
var dr;
var ds;
var dt;
var du;
var dv;
var dw;
var dz;
var dA;
var dB;
var dC;
var dD;
var dE;
var dF;
var dG;
var dH;
var dI;
var dJ;
var dK;
var dL;
var dM;
var dN;
var dO;
var dP;
var dQ;
var dR;
var dS;
var dT;
var dU;
var dV;
var dW;
var dX;
var dY;
var dZ;
var e0;
var e1;
var e2;
var e3;
var e4;
var e5;
var e6;
var e7;
var e8;
var e9;
var ea;
var eb;
var ec;
var ed;
var ee;
var ef;
var eg;
var eh;
var ei;
var ej;
var ek;
var el;
var em;
var en;
var eo;
var ep;
var eq;
var er;
var es;
var eu;
var ew;
var ex;
var ey;
var ez;
var eA;
var eB;
var eC;
var eD;
var eE;
var eF;
var eG;
var eH;
var eI;
var eJ;
var eK;
var eL;
var eM;
var eN;
var eO;
var eP;
var eQ;
var eR;
var eS;
var eT;
var eU;
var eV;
var eW;
var eX;
var eY;
var eZ;
var f0;
var f1;
var f2;
var f3;
var f4;
var f5;
var f6;
var f7;
var f8;
var f9;
var fa;
var fb;
var fc;
var fd;
var fe;
var ff;
var fg;
var fh;
var fi;
var fj;
var fk;
var fl;
var fm;
var fn;
var fo;
var fp;
var fq = bW({
  ""() {
    dp = require("electron");
    dq = require("path");
    dn();
    dr = require("os");
    cv();
    ds = require("fs-extra");
    dt = process.platform === "win32";
    du = process.platform === "darwin";
    dv = process.platform === "linux";
    dw = !!process.platform.match(/(harmony|ohos)/i);
    dz = !dp.app.isPackaged && !dw;
    dA = dp.app.isPackaged || dw;
    dB = !!process.arch.match(/^arm/i);
    dC = false;
    dD = false;
    dE = false;
    dF = false;
    if (dt) {
      const [h, i, j] = (0, dr.release)().split(".").map(Number);
      if (h === 6) {
        if (i === 1) {
          dC = true;
        } else if (i === 2 || i === 3) {
          dD = true;
        }
      }
      dE = h === 10 && i === 0 && j < 22000;
      dF = h > 10 || h === 10 && i === 0 && j >= 22000;
    }
    dG = dC;
    dH = dD;
    dI = dC || dD;
    dJ = dE;
    dK = dF;
    dL = cG("bilibili", 16);
    dM = cG("pcclient", 16);
    dN = 1000;
    dO = 300000;
    dP = 604800000;
    dQ = 900000;
    dR = 1800000;
    dS = 1800000;
    dT = 60000;
    dU = 3600000;
    dV = 3600000;
    dW = 43200000;
    dX = 300000;
    dY = 604800000;
    dZ = 60000;
    e0 = 22331;
    e1 = "127.0.0.1";
    e2 = +"3032" || 3032;
    e3 = +"3031" || 3031;
    e4 = "http://localhost:" + e3;
    e5 = "bilipc.bilibili.com";
    e6 = "https://" + e5;
    e7 = (0, dq.resolve)(__dirname, (dz ? "../../src/" : "../") + "render/");
    e8 = "aa1e74ee4874176e";
    e9 = "qweQWE123";
    ea = ["yz-hp-pc"];
    eb = ["yz-hp-pc", "yz-huawei-pc"];
    ec = du ? (0, dq.resolve)(__dirname, "assets/images/MacTemplate.png") : (0, dq.resolve)(__dirname, "assets/images/WinTemplate.png");
    ed = (0, dq.resolve)(__dirname, "assets/protos/infoc_app_event.proto");
    ee = "https://www.bilibili.com";
    ef = "https://www.biligame.com";
    eg = "https://www.bilibili.com/client";
    eh = "https://www.bilibili.com";
    ei = "https://www.bilibili.com/v/minilogin/minilogin2";
    ej = "https://www.bilibili.com/v/minilogin/bigvip";
    ek = "https://www.bilibili.com/blackboard/activity-mqigCKpQUG.html";
    el = "https://member.bilibili.com/york/videoup?platform=PC_APP";
    em = "https://live.bilibili.com/desktop/xxx";
    en = "https://live.bilibili.com/p/html/web-hime/index.html";
    eo = {
      uploadLog: {
        csUp: true,
        debounce: 5,
        wlUp: true,
        v: 1,
        mids: [],
        buvids: []
      },
      popLogin: {
        isPopAtStart: false,
        isPopAtWakeUp: false,
        isPopAtPlaying: false,
        isPopAtLogout: false,
        popAtPlayingTimes: -1,
        popAtPlayingFirst: 10,
        popAtPlayingDuration: 10
      }
    };
    ep = ["bilibili.com", "hdslb.com", "bilivideo.com", "bilivideo.cn", "szbdyd.com", "biliimg.com", "biliapi.net", "biligame.com"];
    eq = [...ep, "bilibili.co"];
    er = () => {
      return [...eq, ...(global.CONF_BILI_DOMAINS || [])];
    };
    es = ["mainWindow", "playerWindow", "loginWindow", "loginRiskWindow", "uploadWindow", "liveNowWindow", "liveRoomWindow", "appLogWindow", "testWindow", "universalWindow", "biliPetWindow"];
    eu = ["loginWindow", "loginRiskWindow", "uploadWindow", "liveNowWindow", "liveRoomWindow", "appLogWindow", "testWindow", "universalWindow"];
    ew = ["error", "warn", "info", "verbose", "debug", "silly", "log"];
    ex = ["buvid3", "mobi_app", "platform", "device", "device_id"];
    ey = ["appkey", "device_name"];
    ez = "HKCU\\Software\\huandian.com\\pc";
    eA = "HKLM\\Software\\huandian.com\\pc";
    eB = "HKCU\\Software\\BiliBili\\BiliPC";
    eC = "HKLM\\Software\\BiliBili\\BiliPC";
    eD = (0, dr.homedir)();
    eE = (0, dq.resolve)(__dirname, "../");
    eF = (0, dq.join)(__dirname, "assets/images/logo.ico");
    eG = dp.app.getPath("exe");
    eH = (0, dq.dirname)(eG);
    eI = dp.app.getAppPath();
    eJ = (0, dq.dirname)(eI);
    eK = dp.app.getPath("userData");
    eL = dp.app.getPath("logs");
    eM = (0, dq.join)(eL, "main.log");
    eN = (0, dq.join)(eK, "Utilities");
    eO = (0, dq.join)(eK, "resource");
    eP = (0, dq.join)(eH, "versions");
    eQ = eO;
    try {
      if ((0, ds.existsSync)(eP)) {
        (0, ds.writeFileSync)((0, dq.join)(eP, ".testFixed"), String(Math.random()));
        eQ = eP;
      }
    } catch (k) {}
    eR = eQ;
    eS = (0, dq.join)(eK, "Tempfiles");
    eT = (0, dq.join)(eN, "accounts");
    eU = dp.app.getVersion();
    eV = {
      updateZipPath: (0, dq.join)(eR, "update.zip"),
      updateAsarPath: (0, dq.join)(eR, "update.asar"),
      versionInfoPath: (0, dq.join)(eR, ".version"),
      getResourceAsarPath: l => (0, dq.join)(eR, cG(l, 16) + ".asar")
    };
    eW = "";
    try {
      eW = dp.app.getPath("videos");
    } catch (l) {
      try {
        eW = dp.app.getPath("downloads");
      } catch (m) {
        eW = eD;
      }
    }
    eX = (0, dq.join)(eW, "bilibili");
    dc({
      defaultDownloadPath: eX
    });
    eY = (0, dq.join)(eK, ".config");
    eZ = (0, dq.join)(eK, "player/");
    f0 = (0, dq.join)(eK, "player/core.js");
    f1 = (0, dq.join)(eK, "player/core-dl.js");
    f2 = "./assets/lib/core.js";
    f3 = /(https?:)?\/\/s1\.hdslb\.com\/bfs\/static\/jinkela\/long\/font\//g;
    f4 = (0, dq.join)(eK, "fonts");
    f5 = [{
      id: "Default",
      name: "系统默认",
      isDefaultFont: false,
      isReady: true,
      path: "",
      cssFile: "",
      zipPath: "",
      url: "",
      dataFont: "",
      hrefs: []
    }, {
      id: "HarmonyOS",
      name: "HarmonyOS Sans",
      isDefaultFont: true,
      isReady: false,
      dataFont: "harmonyos_font",
      path: (0, dq.join)(f4, "HarmonyOS"),
      cssFile: (0, dq.join)(f4, "HarmonyOS/regular.css"),
      zipPath: (0, dq.join)(f4, "HarmonyOS_font.zip"),
      url: "https://s1.hdslb.com/bfs/static/jinkela/long/font/HarmonyOS_font.zip",
      hrefs: ["https://s1.hdslb.com/bfs/static/jinkela/long/font/medium.css", "https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css"]
    }];
    ({
      chrome: f6 = "108.0.5359.215",
      electron: f7 = "22.3.27"
    } = process.versions || {});
    f8 = (n = false) => {
      const o = n ? "bili_browser" : "bilibili_pc";
      if (dt) {
        return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) " + o + "/" + ch + " Chrome/" + f6 + " Electron/" + f7 + " Safari/537.36 build/" + ci;
      } else {
        return "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) " + o + "/" + ch + " Chrome/" + f6 + " Electron/" + f7 + " Safari/537.36 build/" + ci;
      }
    };
    f9 = global.DEFAULT_USER_AGENT || f8();
    fa = {
      win: {
        ia32: "https://activity.hdslb.com/blackboard/maxfiles/67f81d55007a355c8b03dac36d2680ad/1688039367271.zip",
        x64: "https://activity.hdslb.com/blackboard/maxfiles/67f81d55007a355c8b03dac36d2680ad/1688039416898.zip"
      },
      mac: {
        arm64: "https://activity.hdslb.com/blackboard/maxfiles/67f81d55007a355c8b03dac36d2680ad/1678878765423.zip",
        x64: "https://activity.hdslb.com/blackboard/maxfiles/67f81d55007a355c8b03dac36d2680ad/1678878795966.zip"
      },
      linux: {
        ia32: "https://activity.hdslb.com/blackboard/maxfiles/67f81d55007a355c8b03dac36d2680ad/1678878825204.zip",
        x64: "https://activity.hdslb.com/blackboard/maxfiles/67f81d55007a355c8b03dac36d2680ad/1678878844230.zip"
      }
    };
    fb = (0, dq.join)(eK, "ffmpeg");
    fc = dt ? (0, dq.join)(fb, "ffmpeg.zip") : (0, dq.join)(fb, "ffmpeg.zip");
    fd = dt ? (0, dq.join)(fb, "ffmpeg.exe") : (0, dq.join)(fb, "ffmpeg");
    fe = fd.replace(/\s/g, "\\ ");
    ff = (0, dq.join)(__dirname, "setfta.exe");
    fg = (0, dq.join)(eN, "setfta.exe");
    fh = fg.replace(/\s/g, "\\ ");
    fi = {
      win: {
        arm64: "https://activity.hdslb.com/blackboard/static/20240927/f87fc7ea98282a4dd48ec7743044b0bf/dfMcV50L5j.dll",
        x64: "https://activity.hdslb.com/blackboard/static/20240927/f87fc7ea98282a4dd48ec7743044b0bf/ph2mIbbSFS.dll"
      },
      mac: {
        arm64: "https://activity.hdslb.com/blackboard/static/20240927/f87fc7ea98282a4dd48ec7743044b0bf/qY48JIlocW.dylib",
        x64: "https://activity.hdslb.com/blackboard/static/20240927/f87fc7ea98282a4dd48ec7743044b0bf/zaj5qiY9en.dylib"
      }
    };
    fj = (0, dq.join)(eN, "widevinecdm.dll");
    fk = (0, dq.join)(eN, "libwidevinecdm.dylib");
    fl = "\\weixin\\shell\\open\\command";
    fm = "\\xweixin\\shell\\open\\command";
    fn = "\\WeChatMiniProgram\\shell\\open\\command";
    fo = "/Applications/WeChat.app";
    fp = "/Applications/Weixin.app";
  }
});
var fr;
var fs;
var ft;
var fu;
var fv;
var fw;
var fx;
var fy;
var fz;
var fA;
var fB;
var fC;
var fD;
var fE;
var fF;
var fG = bW({
  ""() {
    fr = require("rxjs");
    fs = {
      windowName: "mainWindow",
      defaultWidth: 1180,
      defaultHeight: 730,
      minWidth: 1080,
      minHeight: 658,
      keepMaximum: true,
      onInit$: new fr.Subject()
    };
    ft = {
      windowName: "minMainWindow",
      defaultWidth: 600,
      defaultHeight: 360,
      minWidth: 370,
      minHeight: 222
    };
    fu = {
      width: 600,
      height: 360
    };
    fv = {
      windowName: "playerWindow",
      defaultWidth: 1086,
      defaultHeight: 660,
      minWidth: 300,
      minHeight: 180
    };
    fw = {
      windowName: "minPlayerWindow",
      defaultWidth: 600,
      defaultHeight: 360,
      minWidth: 300,
      minHeight: 180
    };
    fx = {
      width: 500,
      height: 300
    };
    fy = {
      windowName: "loginWindow",
      defaultWidth: 860,
      defaultHeight: 480
    };
    fz = {
      windowName: "liveNowWindow",
      defaultWidth: 1340,
      defaultHeight: 730,
      minWidth: 1340,
      minHeight: 730
    };
    fA = {
      windowName: "liveRoomWindow",
      defaultWidth: 1120,
      defaultHeight: 678,
      minWidth: 1120,
      minHeight: 678
    };
    fB = {
      windowName: "uploadWindow",
      defaultWidth: 1086,
      defaultHeight: 660,
      minWidth: 860,
      minHeight: 480
    };
    fC = {
      windowName: "universalWindow",
      defaultWidth: 1280,
      defaultHeight: 750,
      minWidth: 368,
      minHeight: 480
    };
    fD = {
      windowName: "appLogWindow",
      defaultWidth: 980,
      defaultHeight: 600,
      minWidth: 500,
      minHeight: 300
    };
    fE = {
      windowName: "testWindow",
      defaultWidth: 1000,
      defaultHeight: 600,
      minWidth: 600,
      minHeight: 400
    };
    fF = {
      windowName: "biliPetWindow",
      defaultWidth: 240,
      defaultHeight: 300,
      minWidth: 240,
      minHeight: 300,
      isTopRight: true
    };
  }
});
var fH;
var fI;
var fJ = bW({
  ""() {
    fH = ["3gp", "asf", "avi", "f4v", "hevc", "m2ts", "m2v", "m4v", "mjpeg", "mkv", "mov", "mp4", "mpeg", "mpg", "mts", "mxf", "ogv", "rm", "swf", "ts", "vob", "webm", "wmv", "wtv4", "flv", "rmvb", "m3u8"];
    fI = ["3gp", "mp4", "ogv", "f4v", "webm", "mov", "mkv"];
  }
});
var fK;
var fL;
var fM;
var fN = bW({
  ""() {
    fK = [/^https?:\/\/.*game.bilibili.com\/.*/, /^https?:\/\/.*\.biligame.com\/.*/, /^https?:\/\/itunes.apple.com\/.*/, /^https?:\/\/store.steampowered.com\/.*/];
    fL = ["//service.weibo.com/share/share.php", "//tieba.baidu.com/f/commit/share/openShareApi", "//sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey", "//connect.qq.com/widget/shareqq/index.html", "//www.bilibili.com/v/newbie/entry", "//www.bilibili.com/blackroom/releaseexame.html", "//passport.bilibili.com/site/site.html", "//account.bilibili.com/site/identification.html", "//www.bilibili.com/judgement/apply", "//www.bilibili.com/pc/community/copyright/role", "//www.bilibili.com/h5/community/copyright/init", "//www.bilibili.com/v/copyright/intro/"];
    fM = [/^https?:\/\/.*?passport.bilibili.com\/.*/];
  }
});
var fO = {};
bY(fO, {
  AB_FLAG_REPORT_TIME: () => dW,
  ACCOUNTS_DIR: () => eT,
  API_REFERER: () => eg,
  APPLOG_WINDOW: () => fD,
  APP_ASAR_PATH: () => eI,
  APP_CLOSABLE_WINDOWS: () => eu,
  APP_CODE_DIR: () => eE,
  APP_EXE_DIR: () => eH,
  APP_EXE_PATH: () => eG,
  APP_FFMPEG_DIR: () => fb,
  APP_FONTS_DIR: () => f4,
  APP_KEY: () => e8,
  APP_LOG_DIR: () => eL,
  APP_LOG_FILE: () => eM,
  APP_RESOURCE_DIR: () => eR,
  APP_RES_DIR: () => eJ,
  APP_TRAY_ICON_PATH: () => ec,
  APP_VERSION: () => ch,
  APP_WINDOWS: () => es,
  BAN_MEDIA_SESSION_CHIDS: () => ea,
  BETA_WE_CHAT_PATH: () => fp,
  BETA_WE_CHAT_REGEDIT_PATH: () => fm,
  BILI_DOMAINS: () => eq,
  BILI_GAME_URL: () => ef,
  BILI_PET_WINDOW: () => fF,
  BILI_PLAYER_DIR: () => eZ,
  BILI_SERVERS: () => ep,
  BILI_URL: () => ee,
  BUILD: () => ci,
  BUILD_CODE: () => cj,
  BUY_BIG_VIP_URL: () => ej,
  CHID: () => ck,
  COOKIE_CACHE_TIME: () => dO,
  CUSTOM_CONF_FILE: () => eY,
  CUSTOM_COOKIES: () => ex,
  DEFAULT_APP_CONFIG: () => eo,
  DEFAULT_DOWNLOAD_PATH: () => eX,
  DEFAULT_REGEDIT_PATH: () => ez,
  DEFAULT_REGEDIT_PATH_OLD: () => eB,
  DEFAULT_SERVER_PORT: () => e0,
  DEFAULT_USER_AGENT: () => f9,
  DEMO_WINDOW: () => fE,
  DEV_SERVER: () => e4,
  FALL_ASLEEP_TIME: () => cq,
  FAWKES_BUILD_ID: () => cn,
  FAWKES_JOB_ID: () => co,
  FEEDBACK_URL: () => ek,
  FFMPEG_EXE: () => fd,
  FFMPEG_EXE_: () => fe,
  FFMPEG_URLS: () => fa,
  FFMPEG_ZIP: () => fc,
  FIXED_RES_DIR: () => eP,
  FONTS_BFS_PTN: () => f3,
  FONTS_LIST: () => f5,
  GAIA_FP_REPORT_TIME: () => dV,
  HELP_URL: () => eh,
  INSTALL_VERSION: () => eU,
  INTERACTIVE_PWD: () => e9,
  IS_ARM: () => dB,
  IS_DEV: () => dz,
  IDM: () => cm,
  IS_FREEZE_VERSION: () => cr,
  IS_LINUX: () => dv,
  IS_MAC: () => du,
  IS_OHOS: () => dw,
  IS_PRE_INSTALL: () => cl,
  IS_PROD: () => dA,
  IS_SHOW_REPORT_LOG: () => cu,
  IS_WIN: () => dt,
  IS_WIN10: () => dJ,
  IS_WIN11: () => dK,
  IS_WIN7: () => dG,
  IS_WIN7OR8: () => dI,
  IS_WIN8: () => dH,
  LIVE_NOW_PAGE_URL: () => en,
  LIVE_NOW_WINDOW: () => fz,
  LIVE_ROOM_URL_TPL: () => em,
  LIVE_ROOM_WINDOW: () => fA,
  LM_REGEDIT_PATH: () => eA,
  LM_REGEDIT_PATH_OLD: () => eC,
  LOCAL_DOMAIN: () => e5,
  LOCAL_FILE_HOST: () => e6,
  LOCAL_SERVER_HOST: () => e1,
  LOCAL_VIDEO_EXTS: () => fH,
  LOGIN_CUSTOM_COOKIES: () => ey,
  LOGIN_URL: () => ei,
  LOGIN_WINDOW: () => fy,
  LOG_TYPES: () => ew,
  MAIN_PORT: () => e2,
  MAIN_WINDOW: () => fs,
  MAIN_WINDOW_ALLOW_OPEN_URLS: () => fK,
  MINI_MAIN_RESET: () => fu,
  MINI_MAIN_WINDOW: () => ft,
  MINI_PLAYER_RESET: () => fx,
  MINI_PLAYER_WINDOW: () => fw,
  NO_POP_LOGIN_AT_START: () => ct,
  OS_HOME_DIR: () => eD,
  PERFORMANCE_REPORT_TIME: () => dU,
  PLATFORM: () => cp,
  PLAYER_DEFAULT_PATH: () => f2,
  PLAYER_DL_PATH: () => f1,
  PLAYER_JS_PATH: () => f0,
  PLAYER_WINDOW: () => fv,
  PLAYER_WINDOW_ALLOW_OPEN_URLS: () => fL,
  POLLING_INJECT_CODE_TIME: () => dS,
  POLLING_PLAYER_CONFIG_TIME: () => dR,
  POLLING_REMOTE_CONFIG_TIME: () => dQ,
  POP_LOGIN_DURATION: () => cs,
  PROTO_PATH: () => ed,
  PWD_IV: () => dM,
  PWD_KEY: () => dL,
  QUIT_STAY_TIME: () => dN,
  RENDER_FILE_BASE: () => e7,
  RENDER_PORT: () => e3,
  RESOURCE_DIR: () => eO,
  RISK_WINDOW_ALLOW_OPEN_URLS: () => fM,
  SCHEME_OPENID_KEEP_TIME: () => dZ,
  SETFTA_EXE: () => fg,
  SETFTA_EXE_: () => fh,
  SETFTA_EXE_SRC: () => ff,
  SHOW_LICENSE_CHIDS: () => eb,
  SUPPORT_EXTS: () => fI,
  SYSTEM_FP_KEEP_TIME: () => dP,
  TAKE_SAMPLE_INTERVAL: () => dT,
  TEMPFILES_DIR: () => eS,
  UNIVERSAL_WINDOW: () => fC,
  UPDATE_INFO: () => eV,
  UPLOAD_CRASH_LOG_TIME: () => dY,
  UPLOAD_MAIN_LOG_TIME: () => dX,
  UPLOAD_PAGE_URL: () => el,
  UPLOAD_WINDOW: () => fB,
  USER_DATA_DIR: () => eK,
  UTILITIES_DIR: () => eN,
  WE_CHAT_MINI_PROGRAM_REGEDIT_PATH: () => fn,
  WE_CHAT_PATH: () => fo,
  WE_CHAT_REGEDIT_PATH: () => fl,
  WIDEVINE_MAC_DLL: () => fk,
  WIDEVINE_URLS: () => fi,
  WIDEVINE_WIN_DLL: () => fj,
  WIN_APP_ICON: () => eF,
  getBiliDomains: () => er,
  getUserAgent: () => f8
});
var fP = bW({
  ""() {
    cv();
    fq();
    fG();
    fJ();
    fN();
  }
});
var fQ;
var fR;
var fS;
var fT;
var fU;
var fV = bW({
  ""() {
    fQ = g => {
      return g.trim().toLowerCase().replace(/^\.+|\.+$/g, "");
    };
    fR = g => {
      try {
        return new URL(g).protocol === "file:";
      } catch {
        return g.startsWith("file");
      }
    };
    fS = g => {
      try {
        const h = new URL(g);
        if (!["http:", "https:"].includes(h.protocol)) {
          return "";
        }
        return fQ(h.hostname);
      } catch {
        return "";
      }
    };
    fT = (g, h) => {
      const j = fQ(g);
      if (!j) {
        return false;
      }
      return h.some(k => {
        const l = fQ(k);
        return l && (j === l || j.endsWith("." + l));
      });
    };
    fU = (g, h) => {
      const i = fS(g);
      return !!i && fT(i, h);
    };
  }
});
function fW(g, h, i) {
  return function (k, l, m) {
    const n = m.value;
    m.value = function (o) {
      const q = w => {
        this.log.error(w);
        throw new Error(w);
      };
      if (h && !this.configService.isDevMode) {
        return q("Call error API: " + g);
      }
      const r = o[0];
      const t = r?.sender;
      const u = t?.getURL();
      if (u && !["app/isDevMode", "app/version"].includes(g)) {
        const w = er();
        if (!fR(u) && !fU(u, w)) {
          r.returnValue = "Invalid call!";
          return q("Invalid call, method: " + g + ", url: " + u);
        }
      }
      if (i.length) {
        if (i.every(z => es.includes(z))) {
          const z = this.getSenderWindowId?.(r);
          const A = i.map(B => this.getScopeWindowId?.(B));
          if (A.some(B => B === z)) {
            return n.apply(this, o);
          }
        } else {
        }
      }
      return n.apply(this, o);
    };
    return m;
  };
}
function fX(g, h) {
  const i = h?.devOnly;
  const j = h?.scope;
  const k = (0, g2.isArr)(h?.scopes) ? h.scopes : [];
  if (j) {
    k.push(j);
  }
  const l = (0, g2.unique)(k);
  const m = h?.withSync;
  const n = (0, g2.isBol)(h?.withAsync) ? h.withAsync : true;
  if (m) {
    g0.ipcMain.on(g, (...q) => ce.emit(g, true, ...q));
  }
  if (n) {
    g0.ipcMain.handle(g, (...q) => ce.emit(g, false, ...q));
  }
  const o = new g1.AllExceptionsFilter();
  return (0, fY.applyDecorators)((0, fY.UseFilters)(o), fW(g, i, l), (0, fZ.MessagePattern)(g));
}
var fY;
var fZ;
var g0;
var g1;
var g2;
var g3 = bW({
  ""() {
    fY = require("@nestjs/common");
    fZ = require("@nestjs/microservices");
    g0 = require("electron");
    cf();
    g1 = c1(cg());
    fP();
    g2 = require("@bilibili/b-utils-core");
    fV();
  }
});
var g4 = bX({
  ""(g) {
    'use strict';

    var i = g && g.__decorate || function (n, o, q, t) {
      var u = arguments.length;
      var w = u < 3 ? o : t === null ? t = Object.getOwnPropertyDescriptor(o, q) : t;
      var z;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        w = Reflect.decorate(n, o, q, t);
      } else {
        for (var A = n.length - 1; A >= 0; A--) {
          if (z = n[A]) {
            w = (u < 3 ? z(w) : u > 3 ? z(o, q, w) : z(o, q)) || w;
          }
        }
      }
      if (u > 3 && w) {
        Object.defineProperty(o, q, w);
      }
      return w;
    };
    var j = g && g.__importDefault || function (n) {
      if (n && n.__esModule) {
        return n;
      } else {
        return {
          default: n
        };
      }
    };
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.GlobalExceptionsFilter = undefined;
    var k = require("@nestjs/common");
    var l = j(require("electron-log"));
    var m = class n {
      constructor() {
        c3(this, "log", l.default.scope("GlobalExceptionsFilter"));
      }
      catch(o, q) {
        this.log.error(o.stack);
        throw new Error(o.message);
      }
    };
    m = i([(0, k.Catch)()], m);
    g.GlobalExceptionsFilter = m;
  }
});
var g5;
var g6;
var g7;
var g8 = bW({
  ""() {
    g5 = require("@nestjs/microservices");
    g6 = require("@nestjs/common");
    cf();
    g7 = class extends g5.Server {
      constructor() {
        super(...arguments);
        c3(this, "logger", new g6.Logger(g7.name));
      }
      async onMessage(h, i, ...j) {
        const k = this.messageHandlers.get(h);
        if (!k) {
          return this.logger.warn("No handlers for channel " + h);
        }
        try {
          if (h !== "report/reportCustomData") {
            this.logger.debug((i ? "CallNativeSync:" : "CallNative:") + " " + h);
          }
          return {
            data: await k(j)
          };
        } catch (m) {
          this.logger.error(m);
          return {
            error: m
          };
        }
      }
      close() {}
      listen(h) {
        ce.on("ipc-message", this.onMessage.bind(this));
        h();
      }
    };
  }
});
var g9 = {};
bY(g9, {
  AppLog: () => c5,
  BaseController: () => c8,
  BaseService: () => ca,
  IpcInvoke: () => fX,
  IpcTransport: () => g7
});
var ga = bW({
  ""() {
    c6();
    c9();
    cb();
    g3();
    c0(g9, c1(g4()));
    g8();
  }
});
var gb = bW({
  ""() {}
});
var gc = bW({
  ""() {}
});
var gd = bW({
  ""() {}
});
var ge = bW({
  ""() {}
});
var gf = bW({
  ""() {}
});
var gg = bW({
  ""() {}
});
var gh = bW({
  ""() {}
});
var gi;
var gj;
var gk = bW({
  ""() {
    gi = (h => {
      h[h.OTHER = 0] = "OTHER";
      h[h.PV = 1] = "PV";
      h[h.CLICK = 2] = "CLICK";
      h[h.APPEAR = 3] = "APPEAR";
      h[h.PAGEVIEW = 1] = "PAGEVIEW";
      h[h.EXPOSURE = 3] = "EXPOSURE";
      h[h.SYSTEM = 4] = "SYSTEM";
      h[h.TRACKER = 5] = "TRACKER";
      h[h.CUSTOM = 7] = "CUSTOM";
      h[h.COMPATIBLE = 8] = "COMPATIBLE";
      h[h.PLAYER = 9] = "PLAYER";
      return h;
    })(gi || {});
    gj = (h => {
      h[h.UNKNOWN = 0] = "UNKNOWN";
      h[h.WIFI = 1] = "WIFI";
      h[h.CELLULAR = 2] = "CELLULAR";
      h[h.OFFLINE = 3] = "OFFLINE";
      h[h.OTHERNET = 4] = "OTHERNET";
      h[h.ETHERNET = 5] = "ETHERNET";
      return h;
    })(gj || {});
  }
});
var gl = bW({
  ""() {}
});
var gm;
var gn = bW({
  ""() {
    gm = (h => {
      h[h.LACK_AUDIO = 4003] = "LACK_AUDIO";
      h[h.PGC_PLAYVIEW_NOT_PLAYABLE = 7901] = "PGC_PLAYVIEW_NOT_PLAYABLE";
      h[h.PC_CLIENT_CACHE_VIDEO_FILE_NOT_FOUND = 8002] = "PC_CLIENT_CACHE_VIDEO_FILE_NOT_FOUND";
      h[h.PC_CLIENT_CACHE_AUDIO_FILE_NOT_FOUND = 8003] = "PC_CLIENT_CACHE_AUDIO_FILE_NOT_FOUND";
      h[h.PC_CLIENT_CACHE_VIDEO_FILE_HEADER_ERROR = 8004] = "PC_CLIENT_CACHE_VIDEO_FILE_HEADER_ERROR";
      h[h.PC_CLIENT_CACHE_VIDEO_FILE_DATA_MISSING = 8005] = "PC_CLIENT_CACHE_VIDEO_FILE_DATA_MISSING";
      h[h.PC_CLIENT_CACHE_AUDIO_FILE_DATA_MISSING = 8006] = "PC_CLIENT_CACHE_AUDIO_FILE_DATA_MISSING";
      h[h.PC_CLIENT_CACHE_MEDIA_FILE_INTEGRITY_ERROR = 8007] = "PC_CLIENT_CACHE_MEDIA_FILE_INTEGRITY_ERROR";
      h[h.PC_CLIENT_CACHE_RANGE_READ_ERROR = 8008] = "PC_CLIENT_CACHE_RANGE_READ_ERROR";
      h[h.PC_CLIENT_CACHE_NO_PLAYABLE_VIDEO_STREAM = 8009] = "PC_CLIENT_CACHE_NO_PLAYABLE_VIDEO_STREAM";
      h[h.PC_CLIENT_CACHE_CODEC_UNSUPPORTED = 8010] = "PC_CLIENT_CACHE_CODEC_UNSUPPORTED";
      return h;
    })(gm || {});
  }
});
var go;
var gp = bW({
  ""() {
    go = class {
      constructor() {
        c3(this, "isShowLocalPlayerSetting");
        c3(this, "isEnableBiliPet");
        c3(this, "isStartUpShowBiliPet");
        c3(this, "isFullScreenBorderless");
        c3(this, "playerWindowTheme");
      }
    };
  }
});
var gq;
var gr = bW({
  ""() {
    gq = class {
      constructor() {
        c3(this, "showReportLog");
        c3(this, "disableGpu");
        c3(this, "disableHttp2");
        c3(this, "disableSystemFp");
        c3(this, "fallAsleepTime");
        c3(this, "noPopPrivacyPolicy");
        c3(this, "noPopLoginAtStart");
        c3(this, "popLoginDuration");
        c3(this, "popAtPlayingFirst");
        c3(this, "uploadPageUrl");
        c3(this, "liveNowPageUrl");
        c3(this, "liveRoomId");
        c3(this, "liveRoomUrlTpl");
        c3(this, "liveRoomBlancUrl");
        c3(this, "isFawkesFFTest");
        c3(this, "isRemoteConfigPre");
        c3(this, "customAbInfo");
        c3(this, "customSettings");
        c3(this, "proxyAgentUrl");
        c3(this, "enableProxyAgent");
        c3(this, "enableSystemProxy");
        c3(this, "isTestLogReport");
        c3(this, "isDevBuiltRender");
        c3(this, "isDevBiliPetWindow");
        c3(this, "ignorePatchUpdate");
        c3(this, "isDisableAppBrowser");
        c3(this, "isShowAppBrowserDevBtn");
        c3(this, "color");
        c3(this, "isOpenMainDevTools");
      }
    };
  }
});
var gs = bW({
  ""() {}
});
var gt = bW({
  ""() {}
});
var gu = bW({
  ""() {}
});
var gv = bW({
  ""() {}
});
var gw = bW({
  ""() {}
});
var gx = bW({
  ""() {}
});
var gy = {};
bY(gy, {
  CustomConfig: () => gq,
  ERROR_CODE: () => gm,
  GeneralConfig: () => go,
  ReportEventCategory: () => gi,
  RuntimeNetWork: () => gj
});
var gz = bW({
  ""() {
    gb();
    gc();
    gd();
    ge();
    gf();
    gg();
    gh();
    gk();
    gl();
    gn();
    gp();
    gr();
    gs();
    gt();
    gu();
    gv();
    gw();
    gx();
  }
});
var gA = bW({
  ""() {}
});
var gB = bW({
  ""() {}
});
var gC = bW({
  ""() {}
});
var gD = bW({
  ""() {}
});
var gE;
var gF;
var gG = bW({
  ""() {
    gE = require("electron");
    gF = class {
      constructor() {
        c3(this, "cpu");
        c3(this, "memory");
        c3(this, "sampleTime", Date.now());
        c3(this, "processMetrics");
        this.processMetrics = gE.app.getAppMetrics();
        this.cpu = this.processMetrics.reduce((h, i) => h + i.cpu.percentCPUUsage, 0);
        this.memory = this.processMetrics.reduce((h, i) => h + i.memory.workingSetSize, 0);
      }
    };
  }
});
var gH = bW({
  ""() {}
});
var gI = {};
bY(gI, {
  CustomConfig: () => gq,
  ERROR_CODE: () => gm,
  GeneralConfig: () => go,
  ProcessMetricSample: () => gF,
  ReportEventCategory: () => gi,
  RuntimeNetWork: () => gj
});
var gJ = bW({
  ""() {
    gz();
    gA();
    gB();
    gC();
    gD();
    gG();
    gH();
  }
});
var gK = bX({
  ""(g) {
    'use strict';

    var h = {
      RMudH: "object",
      UWQUv: function (D, E, F, G) {
        return D(E, F, G);
      },
      NtwJs: "systemFp",
      cZZan: "windowOpenedUrls",
      iNLlF: "defaultGameDownloadPath",
      VDLni: function (D, E, F, G) {
        return D(E, F, G);
      },
      VobTG: "isMainWindowShowed",
      ozkAN: function (D, E, F, G) {
        return D(E, F, G);
      },
      SvXLd: function (D, E, F, G) {
        return D(E, F, G);
      },
      bRThZ: "liveNowWindow",
      JeRvd: function (D, E, F, G) {
        return D(E, F, G);
      },
      Xrkvb: function (D, E, F, G) {
        return D(E, F, G);
      },
      aLIfh: "loginWindowLiving$",
      Kwkrg: "forcusMainWindow$",
      rSUSz: function (D, E, F, G) {
        return D(E, F, G);
      },
      BHjMT: function (D, E, F, G) {
        return D(E, F, G);
      },
      QdsVk: "timeoutOfAppSleepCheck",
      JMaPq: "timeoutOfFirstPush",
      ZgVRs: "intervalOfReportGaiaFp",
      NGAdc: "proxyHandler",
      NibqO: function (D, E) {
        return D || E;
      },
      eDBdP: "mac",
      BEqGb: "Failed to remove temp files:",
      Ootip: function (D, E) {
        return D(E);
      },
      sLRBk: function (D, E) {
        return D(E);
      },
      kntxO: "@nestjs/common",
      VYtgt: "@bilibili/b-utils-core"
    };
    var i = g && g.__decorate || function (D, E, F, G) {
      var H = arguments.length;
      var I = H < 3 ? E : G === null ? G = Object.getOwnPropertyDescriptor(E, F) : G;
      var J;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        I = Reflect.decorate(D, E, F, G);
      } else {
        for (var K = D.length - 1; K >= 0; K--) {
          if (J = D[K]) {
            I = (H < 3 ? J(I) : H > 3 ? J(E, F, I) : J(E, F)) || I;
          }
        }
      }
      if (H > 3 && I) {
        Object.defineProperty(E, F, I);
      }
      return I;
    };
    var j = g && g.__metadata || function (D, E) {
      if (typeof Reflect === h.RMudH && typeof Reflect.metadata === "function") {
        return Reflect.metadata(D, E);
      }
    };
    var k = g && g.__importDefault || function (D) {
      if (D && D.__esModule) {
        return D;
      } else {
        return {
          default: D
        };
      }
    };
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.ConfigService = undefined;
    var l = require(h.kntxO);
    ga();
    var m = c2(g9);
    var n = require("rxjs");
    var o = require(h.VYtgt);
    dn();
    var q = h.sLRBk(c2, dm);
    var r = require("electron");
    var t = require("fs-extra");
    gJ();
    var u = c2(gI);
    fP();
    var w = c2(fO);
    var z = require("path");
    var A = k(require("os"));
    var B = k(require("semver"));
    var C = class D extends m.BaseService {
      constructor() {
        super("ConfigService");
        h.UWQUv(c3, this, "isConfigDev", false);
        c3(this, "runtimeConfig", global.runtimeConf || (0, q.getRunTimeConf)());
        c3(this, "appConfig", w.DEFAULT_APP_CONFIG);
        c3(this, "injectCodeConfig", {
          codes: []
        });
        c3(this, "generalConfig", {});
        c3(this, "generalConfigKeys", Object.keys(new u.GeneralConfig()));
        h.UWQUv(c3, this, "customConfig", {});
        c3(this, "customConfigKeys", Object.keys(new u.CustomConfig()));
        h.UWQUv(c3, this, "hashCode", global.APP_HASH_CODE || "");
        c3(this, "_localPort", w.DEFAULT_SERVER_PORT);
        c3(this, "proxyAgent_", null);
        c3(this, "errorPageUrl", w.LOCAL_FILE_HOST + "/failed.html");
        c3(this, "_buvid", "");
        c3(this, "deviceName", A.default.hostname());
        c3(this, h.NtwJs, null);
        c3(this, "gaiaFp", null);
        c3(this, "sysVersion", "");
        c3(this, "deviceId", "");
        c3(this, "build", w.BUILD);
        c3(this, "chid", w.CHID);
        c3(this, "macAddress", "");
        c3(this, "sessionId", (0, o.randomId)(18));
        c3(this, "appStartTime", global.biliAppInitTime || Date.now());
        c3(this, "appReadyTime", global.appReadyTime || Date.now());
        c3(this, "appAwakeTime", Date.now());
        c3(this, "appQuitTime", Date.now());
        c3(this, "appActiveTime", Date.now());
        c3(this, "appDeactiveTime", Date.now());
        c3(this, "fontList", w.FONTS_LIST);
        c3(this, "abTestInfo", {});
        c3(this, "abTestConf", {});
        c3(this, "isSystemDarkTheme", r.nativeTheme.shouldUseDarkColors);
        c3(this, "appUserAgent", w.DEFAULT_USER_AGENT);
        c3(this, "openPlayerParams", null);
        c3(this, "allowOpenUrls", {});
        c3(this, "autoUpdateInfo", null);
        c3(this, "catchCloseWinIds", []);
        c3(this, "isMainWindowMini", false);
        c3(this, "appHeartbeatCount", 0);
        c3(this, h.cZZan, {});
        c3(this, "universalParams", {});
        c3(this, "isGamepadEnabled", false);
        c3(this, h.iNLlF, "");
        h.VDLni(c3, this, "powerSaveBlockerId", null);
        c3(this, "appWebviewIds", []);
        c3(this, "logoutMid", "");
        c3(this, "isAppActive", false);
        c3(this, "isAppQuited", false);
        c3(this, "isAppReady", false);
        c3(this, "isAppSlept", false);
        c3(this, "isAppSleeping", false);
        c3(this, "isSplashWindowReady", false);
        c3(this, "isMainWindowReady", false);
        c3(this, "isRenderRestricted", global.isRenderRestricted);
        c3(this, h.VobTG, false);
        h.ozkAN(c3, this, "isSearchPageReady", false);
        c3(this, "isPlayerWindowReady", false);
        h.SvXLd(c3, this, "isPlayerWindowPined", false);
        c3(this, "isHideByBossShortcut", false);
        c3(this, "isAppSilentInstall", false);
        c3(this, "isPrivacyPolicyAccepted", false);
        c3(this, "isReportStatusInited", false);
        c3(this, "isForceCloseWindows", false);
        c3(this, "isIncrementPatchReady", false);
        c3(this, "isAppConfigReady", false);
        c3(this, "isInitPlayerWinFirst", false);
        c3(this, "isOpenedByLocalVido", false);
        c3(this, "isOnLoginFetch", false);
        c3(this, "isHitLoginRisk", false);
        c3(this, "isLiveRoomWindowOpened", false);
        c3(this, "isBiliPetWindowPined", true);
        c3(this, "isGameServiceReady", false);
        c3(this, "mainWindow", null);
        c3(this, "playerWindow", null);
        c3(this, "loginWindow", null);
        c3(this, "loginRiskWindow", null);
        c3(this, "uploadWindow", null);
        c3(this, h.bRThZ, null);
        c3(this, "liveRoomWindow", null);
        c3(this, "liveRoomGpView", null);
        h.JeRvd(c3, this, "appLogWindow", null);
        c3(this, "testWindow", null);
        c3(this, "universalWindow", null);
        c3(this, "universalView", null);
        c3(this, "universalGpView", null);
        c3(this, "biliPetWindow", null);
        c3(this, "buvidReady$", new n.Subject());
        c3(this, "appReady$", new n.Subject());
        c3(this, "localServerReady$", new n.Subject());
        c3(this, "appHeartbeat$", new n.Subject());
        h.Xrkvb(c3, this, "createDefaultWindows$", new n.Subject());
        c3(this, "authCookiesChange$", new n.Subject());
        c3(this, "userLoginChange$", new n.Subject());
        h.UWQUv(c3, this, "themeChange$", new n.Subject());
        c3(this, "authOriginsChange$", new n.Subject());
        c3(this, h.aLIfh, new n.Subject());
        c3(this, "loginWinStatusChange$", new n.Subject());
        c3(this, h.Kwkrg, new n.Subject());
        c3(this, "openMainWindowPage$", new n.Subject());
        c3(this, "openPlayerWindow$", new n.Subject());
        c3(this, "reportFpInfo$", new n.Subject());
        c3(this, "splashWindowReady$", new n.Subject());
        c3(this, "mainWindowReady$", new n.Subject());
        c3(this, "mainWindowEventsReady$", new n.BehaviorSubject(false));
        c3(this, "splashWindowFirstReady$", new n.Subject());
        c3(this, "mainWindowFirstReady$", new n.Subject());
        c3(this, "mainWindowInitShow$", new n.Subject());
        h.rSUSz(c3, this, "focusPlayerWindow$", new n.Subject());
        c3(this, "reloadPlayerWindow$", new n.Subject());
        c3(this, "searchPageReady$", new n.Subject());
        c3(this, "playerWindowReady$", new n.Subject());
        c3(this, "appActiveChange$", new n.Subject());
        c3(this, "biliDownloadReady$", new n.Subject());
        h.JeRvd(c3, this, "downloadPathChange$", new n.Subject());
        c3(this, "gameDownloadPathChange$", new n.Subject());
        c3(this, "wakeUpBiliApp$", new n.Subject());
        c3(this, "requestPopLoginWindow$", new n.Subject());
        c3(this, "playingWinStatusChange$", new n.Subject());
        c3(this, "appConfigUpdated$", new n.Subject());
        c3(this, "dlParallelNumChange$", new n.Subject());
        c3(this, "onQuitingApp$", new n.Subject());
        h.BHjMT(c3, this, "beforeQuitApp$", new n.Subject());
        c3(this, "abTestInfoChange$", new n.Subject());
        c3(this, "abTestConfChange$", new n.Subject());
        c3(this, "appSleepChange$", new n.Subject());
        c3(this, "acceptPrivacyPolicy$", new n.Subject());
        c3(this, "autoUpdateInfoReady$", new n.Subject());
        c3(this, "onNewExpPlayerReady$", new n.Subject());
        c3(this, "watchAppLogChange$", new n.Subject());
        c3(this, "onOpenInBrowser$", new n.Subject());
        c3(this, "openOrFocusUniversalWindow$", new n.Subject());
        c3(this, "downloadChangeEvent$", new n.Subject());
        c3(this, "switchAccount$", new n.Subject());
        c3(this, "loginSub", null);
        c3(this, "popLoginSub", null);
        c3(this, "deepLinkSub", null);
        c3(this, "mainWinInitShowSub", null);
        c3(this, h.QdsVk, null);
        c3(this, "timeoutOfAppSleep", null);
        c3(this, "timeoutOfPopLogin", null);
        c3(this, "timeoutOfPopLoginCheck", null);
        c3(this, "timeoutOfPopLoginFirst", null);
        c3(this, "timeoutOfUrlSchemeOpen", null);
        h.Xrkvb(c3, this, "timeoutOfReqInteractive", null);
        c3(this, "timeoutOfNotification", null);
        c3(this, h.JMaPq, null);
        c3(this, "intervalOfAppHeartbeat", null);
        c3(this, "intervalOfAppUpdateCheck", null);
        c3(this, "intervalOfAppRemoteConfig", null);
        c3(this, "intervalOfPlayerConfig", null);
        c3(this, "intervalOfInjectCodeConfig", null);
        c3(this, "intervalOfMiniMainMouse", null);
        c3(this, "intervalOfMiniPlayerMouse", null);
        c3(this, "intervalOfAbFlagReport", null);
        c3(this, "intervalOfTakeSamples", null);
        c3(this, "intervalOfEnquireNotify", null);
        c3(this, "intervalOfReportLog", null);
        c3(this, h.ZgVRs, null);
        c3(this, "intervalOfBiliPetHover", null);
        c3(this, "intervalOfBiliPetMove", null);
        c3(this, "_biliAuthOrigins", [w.LOCAL_FILE_HOST, ...(w.IS_DEV ? [w.DEV_SERVER] : [])]);
        c3(this, h.NGAdc, () => {
          const F = this;
          return {
            get: function (G, H) {
              return G[H];
            },
            set: function (G, H, I) {
              G[H] = I;
              if (H === "length") {
                F.authOriginsChange$.next();
              }
              return true;
            }
          };
        });
        c3(this, "biliAuthOrigins", new Proxy(this._biliAuthOrigins, this.proxyHandler()));
        this.beforeQuitApp$.subscribe(() => this.handleBeforeQuitApp());
        this.onQuitingApp$.subscribe(() => this.handleQuitingApp());
        this.intervalOfAppHeartbeat = setInterval(() => {
          this.appHeartbeat$.next(++this.appHeartbeatCount);
        }, 1000);
      }
      get isDevMode() {
        return w.IDM || this.isConfigDev;
      }
      set localPort(E) {
        global.localServer = "http://localhost:" + E;
        this._localPort = E;
      }
      get localPort() {
        return this._localPort;
      }
      get localServer() {
        return "http://localhost:" + this.localPort;
      }
      get proxyAgent() {
        const {
          enableSystemProxy: E,
          enableProxyAgent: F
        } = this.customConfig;
        if (h.NibqO(E, F)) {
          return this.proxyAgent_;
        } else {
          return null;
        }
      }
      set proxyAgent(E) {
        this.proxyAgent_ = E;
      }
      get buvid() {
        return this._buvid;
      }
      set buvid(E) {
        this._buvid = E;
        if (E && E !== "failed") {
          this.buvidReady$.next();
        }
      }
      get isCanReportPrivate() {
        return this.isPrivacyPolicyAccepted || w.IS_WIN && !this.isAppSilentInstall || w.IS_LINUX;
      }
      get ffmpegPath() {
        if ((0, t.existsSync)(w.FFMPEG_EXE)) {
          return w.FFMPEG_EXE;
        } else {
          return "";
        }
      }
      get biliServerDomains() {
        return [...w.BILI_SERVERS, ...(this.appConfig.appServers || [])];
      }
      getAppInfo() {
        return {
          app_id: 112,
          version: w.APP_VERSION,
          install_version: w.INSTALL_VERSION,
          build: this.build,
          fawkes_id: w.FAWKES_JOB_ID,
          chid: this.chid,
          mobi_app: "pc_electron",
          platform: w.IS_WIN ? 4 : w.IS_MAC ? 8 : w.IS_LINUX ? 9 : 4,
          device_id: this.deviceId,
          device: w.IS_WIN ? "win" : w.IS_MAC ? h.eDBdP : w.IS_LINUX ? "linux" : "win",
          platform_: "web",
          buvid: this.buvid,
          electron: process.versions.electron,
          chromium: process.versions.chrome,
          nodejs: process.versions.node,
          sys_version: this.sysVersion,
          is_win7or8: w.IS_WIN7OR8,
          is_win10: w.IS_WIN10,
          is_win11: w.IS_WIN11,
          is_arm: w.IS_ARM
        };
      }
      updateAppConfig(E) {
        Object.assign(this.appConfig, E);
        global.CONF_BILI_DOMAINS = this.appConfig.biliDomains || [];
      }
      checkIsAppForceUpdate(E = true) {
        if (w.IS_DEV) {
          return false;
        }
        if (!this.autoUpdateInfo && E) {
          return true;
        }
        const {
          forceUpdate: F
        } = this.autoUpdateInfo || {};
        if (F && B.default.lte(w.APP_VERSION, F)) {
          return true;
        }
        return false;
      }
      getDefaultGameDownloadPath(E = false) {
        if (this.defaultGameDownloadPath) {
          return this.defaultGameDownloadPath;
        }
        let F = "";
        if (w.IS_WIN) {
          try {
            if ((0, t.existsSync)("D:\\")) {
              F = "D:\\BiliGame";
            } else if ((0, t.existsSync)("C:\\")) {
              F = "C:\\BiliGame";
            }
            if (E) {
              (0, t.ensureDirSync)(F);
            }
          } catch (H) {
            F = (0, z.join)(w.OS_HOME_DIR, "BiliGame");
          }
        } else {
          F = (0, z.join)(w.OS_HOME_DIR, "BiliGame");
        }
        this.defaultGameDownloadPath = F;
        return F;
      }
      handleBeforeQuitApp() {
        this.log.info("Clearing...");
        r.BrowserWindow.getAllWindows().forEach(E => E.hide());
        try {
          (0, t.removeSync)(w.TEMPFILES_DIR);
        } catch (E) {
          this.log.error(h.BEqGb, E);
        }
      }
      handleQuitingApp() {
        this.log.info("App quitting...");
        this.isForceCloseWindows = true;
        (0, q.setRunTimeConf)({
          localServer: "",
          reportSuccess: false
        });
        if (this.powerSaveBlockerId) {
          r.powerSaveBlocker.stop(this.powerSaveBlockerId);
          this.powerSaveBlockerId = null;
        }
        this.loginSub?.unsubscribe();
        this.popLoginSub?.unsubscribe();
        this.deepLinkSub?.unsubscribe();
        this.mainWinInitShowSub?.unsubscribe();
        h.Ootip(clearTimeout, this.timeoutOfAppSleepCheck);
        clearTimeout(this.timeoutOfAppSleep);
        clearTimeout(this.timeoutOfPopLogin);
        clearTimeout(this.timeoutOfPopLoginCheck);
        clearTimeout(this.timeoutOfPopLoginFirst);
        clearTimeout(this.timeoutOfUrlSchemeOpen);
        clearTimeout(this.timeoutOfReqInteractive);
        clearTimeout(this.timeoutOfNotification);
        h.Ootip(clearTimeout, this.timeoutOfFirstPush);
        clearInterval(this.intervalOfAppHeartbeat);
        clearInterval(this.intervalOfAppUpdateCheck);
        clearInterval(this.intervalOfAppRemoteConfig);
        clearInterval(this.intervalOfPlayerConfig);
        clearInterval(this.intervalOfInjectCodeConfig);
        clearInterval(this.intervalOfMiniMainMouse);
        clearInterval(this.intervalOfMiniPlayerMouse);
        h.sLRBk(clearInterval, this.intervalOfAbFlagReport);
        clearInterval(this.intervalOfTakeSamples);
        clearInterval(this.intervalOfEnquireNotify);
        clearInterval(this.intervalOfReportLog);
        clearInterval(this.intervalOfReportGaiaFp);
        clearInterval(this.intervalOfBiliPetHover);
        clearInterval(this.intervalOfBiliPetMove);
        this.catchCloseWinIds = [];
      }
      assignConsts(E) {
        E.APP_VERSION = w.APP_VERSION;
        E.BUILD = w.BUILD;
        E.BUILD_CODE = w.BUILD_CODE;
        E.CHID = w.CHID;
        E.IS_PRE_INSTALL = w.IS_PRE_INSTALL;
        E.IDM = w.IDM;
        E.FAWKES_BUILD_ID = w.FAWKES_BUILD_ID;
        E.FAWKES_JOB_ID = w.FAWKES_JOB_ID;
        E.PLATFORM = w.PLATFORM;
        E.FALL_ASLEEP_TIME = w.FALL_ASLEEP_TIME;
        E.IS_FREEZE_VERSION = w.IS_FREEZE_VERSION;
        E.POP_LOGIN_DURATION = w.POP_LOGIN_DURATION;
        E.NO_POP_LOGIN_AT_START = w.NO_POP_LOGIN_AT_START;
        E.IS_SHOW_REPORT_LOG = w.IS_SHOW_REPORT_LOG;
        E.IS_DEV = w.IS_DEV;
        E.IS_MAC = w.IS_MAC;
        E.IS_WIN = w.IS_WIN;
        E.IS_LINUX = w.IS_LINUX;
        E.IS_ARM = w.IS_ARM;
        E.IS_OHOS = w.IS_OHOS;
        E.FONTS_LIST = w.FONTS_LIST;
        E.DEFAULT_APP_CONFIG = w.DEFAULT_APP_CONFIG;
        E.DEFAULT_SERVER_PORT = w.DEFAULT_SERVER_PORT;
        E.DEFAULT_USER_AGENT = w.DEFAULT_USER_AGENT;
        E.LOCAL_FILE_HOST = w.LOCAL_FILE_HOST;
        E.FFMPEG_EXE = w.FFMPEG_EXE;
        E.INSTALL_VERSION = w.INSTALL_VERSION;
        E.DEV_SERVER = w.DEV_SERVER;
        E.BILI_SERVERS = w.BILI_SERVERS;
        E.APP_RESOURCE_DIR = w.APP_RESOURCE_DIR;
      }
    };
    C = i([(0, l.Injectable)(), j("design:paramtypes", [])], C);
    g.ConfigService = C;
  }
});
var gL = {};
bY(gL, {
  EventsBase: () => gN
});
var gM;
var gN;
var gO = bW({
  ""() {
    ga();
    gM = require("electron");
    gN = class extends ca {
      constructor(g, h) {
        super(g);
        this.configService = h;
      }
      sendEventToAllWindows(g, ...h) {
        if (this.configService.isAppReady) {
          gM.BrowserWindow.getAllWindows().forEach(l => l.webContents.send(g, ...h));
          const {
            universalView: i,
            universalGpView: j,
            liveRoomGpView: k
          } = this.configService;
          [i, j, k].forEach(l => l?.webContents?.send(g, ...h));
          if (this.configService.appWebviewIds.length) {
            this.configService.appWebviewIds.forEach((l, m) => {
              const n = gM.webContents.fromId(l);
              if (n) {
                n.send(g, ...h);
              } else {
                this.configService.appWebviewIds.splice(m, 1);
              }
            });
          }
        }
      }
      sendEventToWindow(g, h, i = {
        data: null
      }) {
        g?.webContents?.send(h, i);
        const j = g?.getBrowserViews?.() || [];
        if (j.length) {
          j.forEach(k => k.webContents.send(h, i));
        }
      }
    };
  }
});
var gP = bX({
  ""(g) {
    'use strict';

    var h = {
      dMBkN: function (q, r, t) {
        return q(r, t);
      },
      FHPIt: function (q, r) {
        return q === r;
      },
      ErXrk: "window/mainWindowThemeChange",
      sgJeh: "events/followUsers",
      AkhPR: "events/beforeAppQuit",
      OreDs: "events/addWatchLater",
      uSfxN: "auth/userInfoChange",
      tCKkT: "config/systemFontChange",
      YMLCY: "window/playerWindowVisibleChange",
      agyCR: "game/actionEvent",
      qgZLJ: "events/playerParamsChange",
      uyKTC: "window/playerWindowPinChange",
      zbZuz: "window/mainWindowMouseLeave",
      GkKFZ: "system/appLogChange",
      stsaY: "@bilibili/mission-control",
      HaQkj: "window/biliPetResetModel"
    };
    var i = g && g.__decorate || function (q, t, u, w) {
      var z = arguments.length;
      var A = z < 3 ? t : w === null ? w = Object.getOwnPropertyDescriptor(t, u) : w;
      var B;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        A = Reflect.decorate(q, t, u, w);
      } else {
        for (var C = q.length - 1; C >= 0; C--) {
          if (B = q[C]) {
            A = (z < 3 ? B(A) : z > 3 ? B(t, u, A) : h.dMBkN(B, t, u)) || A;
          }
        }
      }
      if (z > 3 && A) {
        Object.defineProperty(t, u, A);
      }
      return A;
    };
    var j = g && g.__metadata || function (q, r) {
      if (typeof Reflect === "object" && h.FHPIt(typeof Reflect.metadata, "function")) {
        return Reflect.metadata(q, r);
      }
    };
    var k;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.EventsService = undefined;
    var l = require("@nestjs/common");
    gO();
    var m = c2(gL);
    var n = gK();
    var o = class q extends m.EventsBase {
      constructor(r) {
        super("EventsService", r);
        c3(this, "configService");
        this.configService = r;
        this.configService.beforeQuitApp$.subscribe(() => {
          this.emitBeforeAppQuit();
        });
        this.configService.abTestInfoChange$.subscribe(() => {
          this.emitAbTestInfoChange();
        });
        this.configService.abTestConfChange$.subscribe(() => {
          this.emitAbTestConfChange();
        });
        this.configService.appConfigUpdated$.subscribe(() => {
          this.emitRemoteConfigChange(this.configService.appConfig);
        });
        this.configService.acceptPrivacyPolicy$.subscribe(() => {
          this.emitAcceptPrivacyPolicy();
        });
      }
      emitUserLogin() {
        this.log.info("Login successful!");
        this.sendEventToAllWindows("auth/userLogin");
        this.sendEventToAllWindows("auth/userLoginChange", {
          data: true
        });
      }
      emitUserLogout() {
        this.log.info("Logout successful!");
        this.sendEventToAllWindows("auth/userLogout");
        this.sendEventToAllWindows("auth/userLoginChange", {
          data: false
        });
      }
      emitAppThemeChange(r) {
        this.configService.themeChange$.next(r);
        this.sendEventToAllWindows("config/themeChange", {
          data: r
        });
        this.sendEventToAllWindows(h.ErXrk, {
          data: null
        });
      }
      emitFollowUsersChange(r, t) {
        if (r) {
          this.sendEventToAllWindows(h.sgJeh, {
            data: {
              uids: t
            }
          });
        } else {
          this.sendEventToAllWindows("events/unfollowUsers", {
            data: {
              uids: t
            }
          });
        }
        this.sendEventToAllWindows("events/followUsersChange", {
          data: {
            follow: r,
            uids: t
          }
        });
      }
      emitBeforeAppQuit() {
        this.sendEventToAllWindows(h.AkhPR, {
          data: null
        });
      }
      emitAddWatchLater(r) {
        this.sendEventToAllWindows(h.OreDs, {
          data: r
        });
      }
      emitAcceptPrivacyPolicy() {
        this.sendEventToAllWindows("auth/acceptPrivacyPolicy", {
          data: null
        });
      }
      emitAppInfoChange() {
        this.sendEventToAllWindows("auth/appInfoChange", {
          data: null
        });
      }
      emitUserInfoChange(r) {
        this.sendEventToAllWindows(h.uSfxN, {
          data: r
        });
      }
      emitBigVipPaySuccess() {
        this.sendEventToAllWindows("auth/bigVipPaySuccess", {
          data: null
        });
      }
      emitFontsInfoChange() {
        this.sendEventToAllWindows("system/fontsInfoChange", {
          data: null
        });
      }
      emitSystemFontChange(r) {
        this.sendEventToAllWindows(h.tCKkT, {
          data: r
        });
      }
      emitHideByBossShortcut() {
        this.sendEventToAllWindows("events/hideByBossShortcut", {
          data: null
        });
      }
      emitShowByBossShortcut() {
        this.sendEventToAllWindows("events/showByBossShortcut", {
          data: null
        });
      }
      emitAbTestInfoChange() {
        this.sendEventToAllWindows("system/abTestInfoChange", {
          data: this.configService.abTestInfo
        });
      }
      emitAbTestConfChange() {
        this.sendEventToAllWindows("system/abTestConfChange", {
          data: this.configService.abTestConf
        });
      }
      emitRemoteConfigChange(r) {
        this.sendEventToAllWindows("config/remoteConfigChange", {
          data: r
        });
      }
      emitCustomConfigChange(r) {
        this.sendEventToAllWindows("config/customConfigChange", {
          data: r
        });
      }
      emitGeneralConfigChange(r) {
        this.sendEventToAllWindows("config/generalConfigChange", {
          data: r
        });
      }
      emitPlayerWindowVisibleChange(r) {
        this.sendEventToAllWindows(h.YMLCY, {
          data: r
        });
      }
      emitGamepadSettingsChange(r) {
        this.sendEventToAllWindows("system/gamepadSettingsChange", {
          data: r
        });
      }
      emitWindowClosed() {
        this.sendEventToAllWindows("events/windowClosed", {
          data: null
        });
      }
      emitWindowStatusChange() {
        this.sendEventToAllWindows("events/windowStatusChange", {
          data: null
        });
      }
      emitResetWindowState() {
        this.sendEventToAllWindows("window/resetWindowState", {
          data: null
        });
      }
      emitGameStatusChange(r) {
        this.sendEventToAllWindows("game/statusChange", {
          data: r
        });
      }
      emitGameProgressChange(r) {
        this.sendEventToAllWindows("game/progressChange", {
          data: r
        });
      }
      emitGameActionEvent(r) {
        this.sendEventToAllWindows(h.agyCR, {
          data: r
        });
      }
      emitGameServiceReady() {
        this.sendEventToAllWindows("game/gameServiceReady", {
          data: null
        });
      }
      emitDownloadParallelNumChange(r) {
        this.sendEventToWindow(this.configService.mainWindow, "config/dlParallelNumChange", {
          data: r
        });
      }
      emitDownloadInfoChange() {
        this.sendEventToWindow(this.configService.mainWindow, "config/downloadInfoChange", {
          data: null
        });
      }
      emitQuitByCloseMainChange(r) {
        this.sendEventToWindow(this.configService.mainWindow, "config/quitByCloseMainChange", {
          data: r
        });
      }
      emitOpenMainWindowPage(r) {
        this.sendEventToWindow(this.configService.mainWindow, "events/goToPage", {
          data: r
        });
      }
      emitUpdateDownload(r) {
        this.sendEventToWindow(this.configService.mainWindow, "update/downloadProgress", {
          data: r
        });
      }
      emitUpdateInfo(r) {
        this.sendEventToWindow(this.configService.mainWindow, "update/updateInfo", {
          data: r
        });
      }
      emitPlayerParamsChange(r) {
        this.sendEventToWindow(this.configService.playerWindow, h.qgZLJ, {
          data: r
        });
      }
      emitPlayerWindowPinChange(r) {
        this.sendEventToWindow(this.configService.playerWindow, h.uyKTC, {
          data: r
        });
      }
      emitPlayerWindowRecover() {
        this.sendEventToWindow(this.configService.playerWindow, "window/playerWindowRecover", {
          data: null
        });
      }
      emitPlayerWindowMiniChange(r) {
        this.sendEventToWindow(this.configService.mainWindow, "window/playerWindowMiniChange", {
          data: r
        });
        this.sendEventToWindow(this.configService.playerWindow, "window/playerWindowMiniChange", {
          data: r
        });
      }
      emitPlayerWindowMouseLeave() {
        this.sendEventToWindow(this.configService.playerWindow, "window/playerWindowMouseLeave", {
          data: null
        });
      }
      emitMainWindowMiniChange(r) {
        this.sendEventToWindow(this.configService.mainWindow, "window/mainWindowMiniChange", {
          data: r
        });
        this.sendEventToWindow(this.configService.playerWindow, "window/mainWindowMiniChange", {
          data: r
        });
      }
      emitMainWindowMouseLeave() {
        this.sendEventToWindow(this.configService.mainWindow, h.zbZuz, {
          data: null
        });
      }
      emitLiveRoomWindowVisibleChange(r) {
        this.sendEventToWindow(this.configService.mainWindow, "window/liveRoomWindowVisibleChange", {
          data: r
        });
      }
      emitDownloadTaskListEvent(r) {
        this.sendEventToWindow(this.configService.mainWindow, "download/taskListEvent", {
          data: r
        });
      }
      emitDownloadItemListEvent(r) {
        this.sendEventToWindow(this.configService.mainWindow, "download/itemListEvent", {
          data: r
        });
      }
      emitDownloadStatusChange(r) {
        this.sendEventToWindow(this.configService.mainWindow, "download/statusChange", {
          data: r
        });
      }
      emitDownloadProgressChange(r) {
        this.sendEventToWindow(this.configService.mainWindow, "download/progressChange", {
          data: r
        });
      }
      emitDownloadItemDone(r) {
        this.sendEventToWindow(this.configService.mainWindow, "download/downloadItemDone", {
          data: r
        });
      }
      emitReceiveNewMessages(r) {
        this.sendEventToWindow(this.configService.mainWindow, "events/newMessages", {
          data: r
        });
      }
      emitQuitDialogPopedChange(r) {
        this.sendEventToWindow(this.configService.mainWindow, "config/quitDialogPopedChange", {
          data: r
        });
      }
      emitIncrementPatchReady(r) {
        this.sendEventToWindow(this.configService.mainWindow, "update/incrementPatchReady", {
          data: r
        });
      }
      emitNewVersionUpdated() {
        this.sendEventToWindow(this.configService.mainWindow, "update/newVersionUpdated", {
          data: null
        });
      }
      emitReportDownloadSize(r) {
        this.sendEventToWindow(this.configService.mainWindow, "download/reportDownloadSize", {
          data: r
        });
      }
      emitSavePlayerLog(r) {
        this.sendEventToWindow(this.configService.mainWindow, "events/savePlayerLog", {
          data: r
        });
      }
      emitAppLogChange(r) {
        this.sendEventToWindow(this.configService.appLogWindow, h.GkKFZ, {
          data: r
        });
      }
      emitUniversalParamsChange(r) {
        this.sendEventToWindow(this.configService.universalWindow, "window/universalParamsChange", {
          data: r
        });
      }
      emitUniversalVisibleChange(r) {
        this.sendEventToWindow(this.configService.mainWindow, "window/universalVisibleChange", {
          data: r
        });
      }
      emitBiliPetVisibleChange(r) {
        this.sendEventToWindow(this.configService.mainWindow, "window/biliPetVisibleChange", {
          data: r
        });
      }
      emitAppLogIsCanInteractiveChange(r) {
        this.sendEventToWindow(this.configService.appLogWindow, "system/isCanInteractiveChange", {
          data: r
        });
      }
      emitMousePositionChange(r) {
        this.sendEventToWindow(this.configService.biliPetWindow, "window/mousePosition", {
          data: r
        });
      }
      emitResetBiliPetModel() {
        this.sendEventToWindow(this.configService.biliPetWindow, h.HaQkj, {
          data: null
        });
      }
      emitGamepadLiveAction(r) {
        this.sendEventToWindow(this.configService.liveRoomWindow, "system/gamepadAction", {
          data: r
        });
      }
      emitGamepadLiveInfo(r) {
        this.sendEventToWindow(this.configService.liveRoomGpView, "system/gamepadLiveInfo", {
          data: r
        });
      }
      emitAccountsChange() {
        this.sendEventToWindow(this.configService.mainWindow, "auth/accountsChange", {
          data: null
        });
      }
    };
    o = i([(0, l.Injectable)(), j("design:paramtypes", [typeof (k = typeof n.ConfigService !== "undefined" && n.ConfigService) === "function" ? k : Object])], o);
    g.EventsService = o;
  }
});
var gQ = {};
bY(gQ, {
  AB_TEST_CONF: () => hy,
  AB_TEST_CONFIG: () => hz,
  AB_TEST_CONFIG_ENV: () => hA,
  APP_CONFIG_STORE: () => ht,
  AUTH_COOKIES: () => gU,
  AUTH_COOKIES_CACHE: () => gV,
  AUTO_START_DOWNLOAD: () => hm,
  BOSS_SHORTCUT_INFO: () => hd,
  BUVID: () => h2,
  BUVID_CACHE: () => h3,
  BUVID_MARK: () => ho,
  CHID: () => h4,
  CHID_CACHE: () => h5,
  CUSTOM_CONFIG_STORE: () => hr,
  DISABLE_GPU: () => hf,
  DL_PARALLEL_NUM: () => hx,
  DOWNLOAD_NO_SLEEP: () => hn,
  DOWNLOAD_PATH: () => hk,
  FFMPEG_EXE_INFO: () => hC,
  FF_SELECTED_FIRST: () => hh,
  GAIA_FP: () => h0,
  GAIA_FP_CACHE: () => h1,
  GAMEPAD_SETTINGS: () => hI,
  GAME_DOWNLOAD_PATH: () => hl,
  GENERAL_CONFIG_STORE: () => hH,
  INITIAL_VERSION: () => hv,
  IS_CONFIG_DEV: () => h8,
  IS_FORCE_RELAUNCH: () => hK,
  IS_SHOW_CONSOLE_LOG: () => hE,
  IS_WX_INSTALLED: () => hL,
  LATEST_VERSION: () => hw,
  LOCAL_PLAYER_BACKUP: () => hG,
  MAIN_WINDOW_THEME: () => hb,
  PLAYER_EXP_DATA: () => hB,
  PLAYER_WINDOW_MODE: () => he,
  PLAYER_WINDOW_THEME: () => hc,
  QUIT_BY_CLOSE_MAIN: () => hj,
  QUIT_DIALOG_POPED: () => hu,
  REFRESH_TOKEN: () => h6,
  REFRESH_TOKEN_CACHE: () => h7,
  SAVED_ACCOUNTS: () => hJ,
  SELECTED_EXIT: () => hi,
  SELECTED_FIRST: () => hg,
  STORE_ENCRYPT: () => gT,
  STORE_TAG: () => gS,
  STORE_VAL: () => gR,
  SYSTEM_FONT_ID: () => hq,
  SYSTEM_FP: () => gY,
  SYSTEM_FP_CACHE: () => gZ,
  SYSTEM_FP_TIME: () => hp,
  TEMP_DEV_PWD: () => h9,
  UPLOAD_LOG_INFO: () => hF,
  UPLOAD_MAIN_LOG_TIME: () => hs,
  USER_INFO: () => gW,
  USER_INFO_CACHE: () => gX,
  USE_MEDIA_SESSION: () => hD,
  WINDOW_STATES: () => ha
});
var gR;
var gS;
var gT;
var gU;
var gV;
var gW;
var gX;
var gY;
var gZ;
var h0;
var h1;
var h2;
var h3;
var h4;
var h5;
var h6;
var h7;
var h8;
var h9;
var ha;
var hb;
var hc;
var hd;
var he;
var hf;
var hg;
var hh;
var hi;
var hj;
var hk;
var hl;
var hm;
var hn;
var ho;
var hp;
var hq;
var hr;
var hs;
var ht;
var hu;
var hv;
var hw;
var hx;
var hy;
var hz;
var hA;
var hB;
var hC;
var hD;
var hE;
var hF;
var hG;
var hH;
var hI;
var hJ;
var hK;
var hL;
var hM = bW({
  ""() {
    dn();
    gR = cG("干杯", 20);
    gS = cG("cheers", 20);
    gT = cG("biliPc");
    gU = cG("AUTH_COOKIES");
    gV = cG("AUTH_COOKIES_CACHE");
    gW = cG("USER_INFO");
    gX = cG("USER_INFO_CACHE");
    gY = cG("SYSTEM_FP");
    gZ = cG("SYSTEM_FP_CACHE");
    h0 = cG("GAIA_FP");
    h1 = cG("GAIA_FP_CACHE");
    h2 = cG("BUVID");
    h3 = cG("BUVID_CACHE");
    h4 = cG("CHID");
    h5 = cG("CHID_CACHE");
    h6 = cG("REFRESH_TOKEN");
    h7 = cG("REFRESH_TOKEN_CACHE");
    h8 = "IS_CONFIG_DEV";
    h9 = "TEMP_DEV_PWD";
    ha = "WINDOW_STATES";
    hb = "MAIN_WINDOW_THEME";
    hc = "PLAYER_WINDOW_THEME";
    hd = "BOSS_SHORTCUT_INFO";
    he = "PLAYER_WINDOW_MODE";
    hf = "DISABLE_GPU";
    hg = "SELECTED_FIRST";
    hh = "FF_SELECTED_FIRST";
    hi = "SELECTED_EXIT";
    hj = "QUIT_BY_CLOSE_MAIN";
    hk = "DOWNLOAD_PATH";
    hl = "GAME_DOWNLOAD_PATH";
    hm = "AUTO_START_DOWNLOAD";
    hn = "DOWNLOAD_NO_SLEEP";
    ho = "BUVID_MARK";
    hp = "SYSTEM_FP_TIME";
    hq = "SYSTEM_FONT_ID";
    hr = "CUSTOM_CONFIG_STORE";
    hs = "UPLOAD_MAIN_LOG_TIME";
    ht = "APP_CONFIG_STORE";
    hu = "QUIT_DIALOG_POPED";
    hv = "INITIAL_VERSION";
    hw = "LATEST_VERSION";
    hx = "DL_PARALLEL_NUM";
    hy = "AB_TEST_CONF";
    hz = "AB_TEST_CONFIG";
    hA = "AB_TEST_CONFIG_ENV";
    hB = "PLAYER_EXP_DATA";
    hC = "FFMPEG_EXE_INFO";
    hD = "USE_MEDIA_SESSION";
    hE = "IS_SHOW_CONSOLE_LOG";
    hF = "UPLOAD_LOG_INFO";
    hG = "LOCAL_PLAYER_BACKUP";
    hH = "GENERAL_CONFIG_STORE";
    hI = "GAMEPAD_SETTINGS";
    hJ = "SAVED_ACCOUNTS";
    hK = "IS_FORCE_RELAUNCH";
    hL = "IS_WX_INSTALLED";
  }
});
var hN = {};
bY(hN, {
  StoreBase: () => hS
});
var hO;
var hP;
var hQ;
var hR;
var hS;
var hT = bW({
  ""() {
    hO = require("@bilibili/b-utils-core");
    ga();
    hP = require("@bilibili/b-utils-core");
    hM();
    dn();
    hQ = cG("哔哩哔哩");
    hR = cG("bilibili");
    hS = class extends ca {
      constructor(g) {
        super(g);
      }
      getDataStoreKey(g) {
        return "BILI_" + String(g);
      }
      getDataStoreOriginKey(g) {
        return g && g.replace(/^BILI_/, "");
      }
      initCacheKey(g, h) {
        const i = (0, hO.randomId)("[*]");
        h.set(g, i);
        return i;
      }
      getStoreKey(g, h) {
        let i = h.get(g);
        if (!i) {
          i = this.initCacheKey(g, h);
        }
        return i;
      }
      encryptData(g) {
        try {
          const h = JSON.stringify({
            data: g
          });
          const {
            encrypted: i,
            authTag: j
          } = cH(h, hQ, hR);
          return JSON.stringify({
            [gR]: i,
            [gS]: j
          });
        } catch (k) {
          this.log.error("encryptData error: ", k.message);
        }
      }
      decryptData(g, h) {
        try {
          const {
            [gR]: i,
            [gS]: j
          } = JSON.parse(g);
          const k = cI(i, j, hQ, hR);
          return JSON.parse(k).data;
        } catch (l) {
          this.log.error("decryptData error: ", l.message);
          if (hP.isFun) {
            h();
          }
          return null;
        }
      }
    };
  }
});
var hU;
var hV;
var hW;
var hX;
var hY;
var hZ;
var i0;
var i1;
var i2;
var i3;
var i4;
var i5;
var i6;
var i7 = bW({
  ""() {
    hU = "PRIVACY_POLICY_DIALOG_HIDDEN";
    hV = "SCROLL_TRIGGER_INLINE_PLAY_ACTIVE";
    hW = "ALLOW_PUSH_RECOMMEND";
    hX = "ALLOW_PUSH_DYNAMIC";
    hY = "ALLOW_PUSH_LIVE";
    hZ = "RECOMMEND_PUSH_RECORD";
    i0 = "DYNAMIC_PUSH_RECORD";
    i1 = "LIVE_PUSH_RECORD";
    i2 = "UPDATE_BASE_LINE";
    i3 = "PUSH_RECOMMEND";
    i4 = "PUSH_LIVE";
    i5 = "PUSH_DYNAMIC";
    i6 = "OGV_CACHE_VALIDATE_PLAY";
  }
});
var i8;
var i9 = bW({
  ""() {
    i8 = ["switch_account", "light_player"];
  }
});
var ia;
var ib = bW({
  ""() {
    ia = ["sidebar_game_entry", "sidebar_upload_hide_r", "sidebar_upload_toweb", "sidebar_upload_toappbrowser", "sidebar_selected_hide2_r", "enable_system_notification", "is_ugc_season_tab", "show_local_video_setting_r", "show_search_ad", "startup_selected_first_r", "switch_account"];
  }
});
var ic;
var ie = bW({
  ""() {
    ic = ["HomeLive", "HomeRecommends", "HomeHot", "HomeBangumi", "HomePgc", "BangumiMore", "PgcMore", "OgvIndex", "SearchResult", "MineHistory", "MineDownload", "MineFavorite", "MineWatchLater", "SpaceDynamic", "SpaceVideo", "DynamicAll", "DynamicVideo", "SearchPage", "Selected", "Settings", "UgcSeason", "GameCenter", "MyGame"];
  }
});
var ig;
var ih;
var ii = bW({
  ""() {
    ig = "-----BEGIN CERTIFICATE-----\nMIIEPzCCAyegAwIBAgIUJVg1qdKcUuryV+2IxAn9teS5qu0wDQYJKoZIhvcNAQEL\nBQAwga0xCzAJBgNVBAYTAkNOMREwDwYDVQQIDAhTaGFuZ0hhaTERMA8GA1UEBwwI\nU2hhbmdIYWkxLzAtBgNVBAoMJlNoYW5naGFpIEJpbGliaWxpIFRlY2hub2xvZ3kg\nQ28uLCBMdGQuMREwDwYDVQQLDAhiaWxpYmlsaTEPMA0GA1UEAwwGYmlsaXBjMSMw\nIQYJKoZIhvcNAQkBFhRzaGVudGFvQGJpbGliaWxpLmNvbTAgFw0yMzEwMjQwNTIy\nMTNaGA8yMTIzMDkzMDA1MjIxM1owga0xCzAJBgNVBAYTAkNOMREwDwYDVQQIDAhT\naGFuZ0hhaTERMA8GA1UEBwwIU2hhbmdIYWkxLzAtBgNVBAoMJlNoYW5naGFpIEJp\nbGliaWxpIFRlY2hub2xvZ3kgQ28uLCBMdGQuMREwDwYDVQQLDAhiaWxpYmlsaTEP\nMA0GA1UEAwwGYmlsaXBjMSMwIQYJKoZIhvcNAQkBFhRzaGVudGFvQGJpbGliaWxp\nLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALX2g7x/HZjGQ60a\nh6p9+GxdF8W+r+aGQD71yn419X5NoqzwCnuffDYj3snBhRu0pgh8v7P/UYc5Ll+n\nyQlpVwUzHHyKjBbn9uK1F54cLVP4wKo7Ketd+FTngM0lWQaFexYDHACgfMNVSH1r\nHbjwRYlHfCtNW4Igrc0zWIWzYoi1A1r0JzIu3Newd8qJ8a7RJ7toMk0hVHdHgHhC\n28XNsR8uveS+rRAYCcF5nTRuU8TX2UHh0geLho95DPkfRvJKm+YJbusNqgKygnTC\n/8y1lqdmM5F6mGVjcTuXOJSkvW2gXiqjAHk6BvbT6vxXCRzc42CMyk6YffN7qSL5\nZc8QU1MCAwEAAaNTMFEwHQYDVR0OBBYEFNCVw8dStnHz5VY1MEIDI8dPR9t2MB8G\nA1UdIwQYMBaAFNCVw8dStnHz5VY1MEIDI8dPR9t2MA8GA1UdEwEB/wQFMAMBAf8w\nDQYJKoZIhvcNAQELBQADggEBAAiisyz9WJNmyYthp7hRHxt8ptV8UefFOVt1oJfE\nuicHBoXBCWKOb2sYbJUOnpPQrCGTLxa0sDUXu1OvwJP2YrKhbiW4ZLefWlVM/Rx0\nJpcbbVvrR5puMfwxKrW5HT+Uafq/bFe/fJPTdHmLU9vAqkAcqZxrPhNjz1O88wp4\ntuyLcVxHcwr4ZvHFcCMo+Gkph76QY8clcOtyTF3p3U2HCFGu3I8WvJcEexjjanx6\nztZgsc9zCVdDWS5RFsEMXPj9+vTvLuo1S6z0UhMnKo4yYBCb/6gmJRJMrZ7beifP\niVFRvhO43BAkKW04hRC/nsliqcedqetuZbpTjq98g9eEDow=\n-----END CERTIFICATE-----\n";
    ih = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC19oO8fx2YxkOt\nGoeqffhsXRfFvq/mhkA+9cp+NfV+TaKs8Ap7n3w2I97JwYUbtKYIfL+z/1GHOS5f\np8kJaVcFMxx8iowW5/bitReeHC1T+MCqOynrXfhU54DNJVkGhXsWAxwAoHzDVUh9\nax248EWJR3wrTVuCIK3NM1iFs2KItQNa9CcyLtzXsHfKifGu0Se7aDJNIVR3R4B4\nQtvFzbEfLr3kvq0QGAnBeZ00blPE19lB4dIHi4aPeQz5H0bySpvmCW7rDaoCsoJ0\nwv/MtZanZjORephlY3E7lziUpL1toF4qowB5Ogb20+r8Vwkc3ONgjMpOmH3ze6ki\n+WXPEFNTAgMBAAECggEBAJjgXPvAPIh/gppr4LFwFohMik18EOL3xgBfltoE0ZVk\n+pibL+N/Med2qZYOfZuyYZBd5t3+U2vtsbVyDShYFWFr+LH14Q7ZooYEKayP9dFH\n++7JuEVj9OC4g3FXwH0HJktvH1azfz7JZxbgKN+ZFoLoyTzESG6CsCLn0aa6+Lzr\nFRPqLM8TRZKjfl5dYy6z8nEVWWA+ow1MTsaEq0aNpeBsYePjz/181jpQV5OrQe/+\nl/LqzUU53iSOU1ZAoruhzeJ0/aGfYjG/QdphNWuK6a2590kETxWoDiz7Z1m82Vx6\n1FrOY5Dr8/+dzgFLdrQkKz+DGpUlnnA+6wGw6K7MlUECgYEA2QfmC8AoHf5Du4K/\nS6JpnczvqxwTEXPMKwMNDRAxXmXyvi2PszkpLGwvP2pZYlK6D20FtOW1uVtp5jiN\nyQ0J42P83KlYQeBNvV7flgSZW7ImO8u5JO8UybbNelu+B/OKqSR9ZoHXZRzG4bYU\nlaKQxIoXG6l7IieDN0TLPgv6EfMCgYEA1qKsuh+M61EFSosIPb5fhvg/2/TeizDm\nZRvG8Zju/e6tikewGW0XLRVb1trSBFu6Ijf41QsTZRxh37FjYRPN/XF6sRHpr3Ni\nRmaQch+0BcQaU4v+WSbCnGR9nyi3O8hCPC713UrusNfokXRf6z5ARtLvDwfBU2tQ\nDCLtMmypsSECgYEAqm/chj/agWtrr7cHGZOrU8RcN0kt5FfG78ROnIKp8pMnZZiM\nMFhkcEFpfWi8V03WVkTs5Vo8MxuJ98VT+57ktBGSw4uuBtXq1xvJhJuKAAvQoMbl\nWA71iU+o4D1p5/6nVxuT60tuZzaJLTp7weNPwzka2ptnWrQjBOVeoxRux2cCgYAD\n7u09Z/CcK1rud8fJ4eA8R/ZboIwnftjqB21I5iWTD7msbA3lGWOwVtDdChuJKukp\nUV9FADP1yWRdxhFtKQDAYUD/V7Wxmmq1oZGKFdylsmdNGqapmZU9anYG4ach+FSG\nZ9HnoUTohrxjVf+f/v8MjTcGTn0Te0b3QfiY0Pb3IQKBgFhRUMasW/MnIFg1IfYU\nkVtMEJpajml9tEEQ91bBr29bCxl+nM2bM9yjb6LQU0vYTyWNn3zS/LOa3gSbOC/i\nc+3fmiI6TpouNE1eBva6kKyvmqC4dwD6aTEHokfhuMFYZQbVC8IGuhEQuN9OIM9x\nTQg6mubcOzaGBUeTmeZTkCpb\n-----END PRIVATE KEY-----\n";
  }
});
var ij;
var ik = bW({
  ""() {
    ij = {
      ip: "7ace",
      platform: "6dba",
      buvid: "e07a",
      chid: "537e",
      app_chid: "8885",
      brand: "d3c9",
      model: "3859",
      osver: "08a2",
      fts: "f152",
      event_category: "4407",
      network: "70e1",
      oid: "2e6b",
      oidname: "b3c2",
      longitude: "796f",
      latitude: "db78",
      version: "03ba",
      version_code: "309d",
      event_id: "30e4",
      mid: "a11f",
      ctime: "ca89",
      machineGUID: "fa2c",
      hostname: "dfb6",
      username: "a574",
      isvirtual: "8fa9",
      cpu_manufacturer: "4798",
      cpu_brand: "13bf",
      cpu_core: "26e9",
      cpu_processors: "a19e",
      macs: "f861",
      business_id: "d4ec",
      ctime_format: "dc71",
      session_id: "fdc8",
      webgl_version: "544e",
      webgl_shading_language_version: "910e",
      webgl_vendor: "f623",
      webgl_renderer: "5fba"
    };
  }
});
var il = {};
bY(il, {
  AB_TEST_CONFS: () => i8,
  AB_TEST_LIST: () => ia,
  ALLOW_PUSH_DYNAMIC: () => hX,
  ALLOW_PUSH_LIVE: () => hY,
  ALLOW_PUSH_RECOMMEND: () => hW,
  APP_PAGES: () => ic,
  DYNAMIC_PUSH_RECORD: () => i0,
  GAIA_KEY_MAP: () => ij,
  LIVE_PUSH_RECORD: () => i1,
  OGV_CACHE_VALIDATE_PLAY: () => i6,
  PRIVACY_POLICY_HIDDEN_KEY: () => hU,
  PUSH_DYNAMIC: () => i5,
  PUSH_LIVE: () => i4,
  PUSH_RECOMMEND: () => i3,
  RECOMMEND_PUSH_RECORD: () => hZ,
  SCROLL_TRIGGER_INLINE_PLAY_ACTIVE: () => hV,
  UPDATE_BASE_LINE: () => i2,
  cert: () => ig,
  key: () => ih
});
var im = bW({
  ""() {
    i7();
    i9();
    ib();
    ie();
    ii();
    ik();
  }
});
var io = bX({
  ""(g) {
    'use strict';

    var h = {
      UKqjc: function (E, F, G, H) {
        return E(F, G, H);
      },
      ltKQT: function (E, F) {
        return E === F;
      },
      zWPzz: function (E, F) {
        return E || F;
      },
      AibOx: "fCFRH",
      QGJAY: function (E, F) {
        return E === F;
      },
      gzOSW: function (E, F) {
        return E / F;
      },
      bTZlB: function (E, F) {
        return E !== F;
      },
      oepNB: "qeOWt",
      YaGbB: function (E, F) {
        return E !== F;
      },
      OBcIH: function (E, F) {
        return E > F;
      },
      gZJYr: "qSAHR",
      fWJSM: "NDaVn",
      umAhM: "asPDT",
      CTnzz: function (E, F) {
        return E === F;
      },
      YAffj: function (E) {
        return E();
      }
    };
    var i = g && g.__decorate || function (E, F, G, H) {
      var I = arguments.length;
      var J = I < 3 ? F : H === null ? H = Object.getOwnPropertyDescriptor(F, G) : H;
      var K;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        J = Reflect.decorate(E, F, G, H);
      } else {
        for (var L = E.length - 1; L >= 0; L--) {
          if (K = E[L]) {
            J = (I < 3 ? K(J) : I > 3 ? K(F, G, J) : K(F, G)) || J;
          }
        }
      }
      if (I > 3 && J) {
        Object.defineProperty(F, G, J);
      }
      return J;
    };
    var j = g && g.__metadata || function (E, F) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(E, F);
      }
    };
    var k = g && g.__importDefault || function (E) {
      if (E && E.__esModule) {
        return E;
      } else {
        return {
          default: E
        };
      }
    };
    var l;
    var m;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.StoreService = undefined;
    var n = require("@nestjs/common");
    var o = gK();
    var q = gP();
    h.YAffj(hT);
    var r = c2(hN);
    var t = require("fs");
    var u = require("@bilibili/b-utils-core");
    var w = k(require("electron-store"));
    var z = k(require("mkdirp"));
    fP();
    var A = c2(fO);
    h.YAffj(im);
    var B = c2(il);
    hM();
    var C = c2(gQ);
    var D = class E extends r.StoreBase {
      constructor(F, G) {
        super("StoreService");
        c3(this, "configService");
        c3(this, "eventsService");
        c3(this, "dataStore", new w.default({
          name: "store",
          encryptionKey: C.STORE_ENCRYPT
        }));
        c3(this, "secureStore", new w.default({
          name: "config",
          encryptionKey: C.STORE_ENCRYPT
        }));
        c3(this, "store", new w.default({
          name: "settings",
          encryptionKey: C.STORE_ENCRYPT
        }));
        h.UKqjc(c3, this, "authCookies", []);
        c3(this, "authCookiesCache", "");
        c3(this, "userInfo", {});
        c3(this, "userInfoCache", "");
        c3(this, "systemFp", {});
        c3(this, "systemFpCache", "");
        c3(this, "gaiaFp", {});
        c3(this, "gaiaFpCache", "");
        c3(this, "buvid", "");
        c3(this, "buvidCache", "");
        h.UKqjc(c3, this, "chid", "");
        c3(this, "chidCache", "");
        c3(this, "refreshToken", "");
        c3(this, "refreshTokenCache", "");
        this.configService = F;
        this.eventsService = G;
        this.configService.isConfigDev = this.getIsDev();
      }
      initSecureStore() {
        this.authCookiesCache = "";
        this.userInfoCache = "";
        this.systemFpCache = "";
        this.gaiaFpCache = "";
        this.buvidCache = "";
        this.chidCache = "";
        this.refreshTokenCache = "";
        this.setAppBuvid(this.buvid);
        this.setAppChid(this.chid);
      }
      getAuthCookies() {
        const F = this.getStoreKey(C.AUTH_COOKIES_CACHE, this.secureStore);
        if (!this.authCookiesCache || this.authCookiesCache !== F) {
          this.authCookiesCache = F;
          const G = this.secureStore.get(C.AUTH_COOKIES);
          const H = G && this.decryptData(G, () => this.secureStore.delete(C.AUTH_COOKIES)) || [];
          this.authCookies = H;
        }
        return this.authCookies;
      }
      setAuthCookies(F) {
        this.secureStore.set(C.AUTH_COOKIES, this.encryptData(F || []));
        this.initCacheKey(C.AUTH_COOKIES_CACHE, this.secureStore);
        this.configService.authCookiesChange$.next();
      }
      deleteAuthCookies() {
        this.secureStore.delete(C.AUTH_COOKIES);
        this.initCacheKey(C.AUTH_COOKIES_CACHE, this.secureStore);
      }
      getUserInfo() {
        const F = this.getStoreKey(C.USER_INFO_CACHE, this.secureStore);
        if (!this.userInfoCache || this.userInfoCache !== F) {
          this.userInfoCache = F;
          const G = this.secureStore.get(C.USER_INFO);
          const H = G && this.decryptData(G, () => this.secureStore.delete(C.USER_INFO)) || {};
          this.userInfo = H || {};
        }
        return this.userInfo;
      }
      setUserInfo(F) {
        this.secureStore.set(C.USER_INFO, this.encryptData(F || {}));
        this.initCacheKey(C.USER_INFO_CACHE, this.secureStore);
      }
      deleteUserInfo() {
        if (h.ltKQT("LxUVC", "LxUVC")) {
          this.secureStore.delete(C.USER_INFO);
          this.initCacheKey(C.USER_INFO_CACHE, this.secureStore);
        } else {
          const G = this.getStoreKey(j.CHID_CACHE, this.secureStore);
          if (!this.chidCache || this.chidCache !== G) {
            this.chidCache = G;
            const H = this.secureStore.get(m.CHID);
            const I = H && this.decryptData(H, () => this.secureStore.delete(G.CHID)) || "";
            this.chid = I;
          }
          return this.chid;
        }
      }
      getSystemFp() {
        const F = this.getStoreKey(C.SYSTEM_FP_CACHE, this.secureStore);
        if (!this.systemFpCache || this.systemFpCache !== F) {
          this.systemFpCache = F;
          const G = this.secureStore.get(C.SYSTEM_FP);
          const H = G && this.decryptData(G, () => this.secureStore.delete(C.SYSTEM_FP)) || {};
          this.systemFp = H;
        }
        return this.systemFp;
      }
      setSystemFp(F) {
        this.secureStore.set(C.SYSTEM_FP, this.encryptData(F || {}));
        this.initCacheKey(C.SYSTEM_FP_CACHE, this.secureStore);
      }
      getGaiaFp() {
        const F = this.getStoreKey(C.GAIA_FP_CACHE, this.secureStore);
        if (!this.gaiaFpCache || this.gaiaFpCache !== F) {
          this.gaiaFpCache = F;
          const G = this.secureStore.get(C.GAIA_FP);
          const H = G && this.decryptData(G, () => this.secureStore.delete(C.GAIA_FP)) || {};
          this.gaiaFp = H;
        }
        return this.gaiaFp;
      }
      setGaiaFp(F) {
        this.secureStore.set(C.GAIA_FP, this.encryptData(F || {}));
        this.initCacheKey(C.GAIA_FP_CACHE, this.secureStore);
      }
      getAppBuvid() {
        const F = this.getStoreKey(C.BUVID_CACHE, this.secureStore);
        if (!this.buvidCache || this.buvidCache !== F) {
          this.buvidCache = F;
          const G = this.secureStore.get(C.BUVID);
          const H = G && this.decryptData(G, () => this.secureStore.delete(C.BUVID)) || "";
          this.buvid = H;
        }
        return this.buvid;
      }
      setAppBuvid(F = "failed") {
        this.secureStore.set(C.BUVID, this.encryptData(F || ""));
        this.initCacheKey(C.BUVID_CACHE, this.secureStore);
      }
      getAppChid() {
        const F = this.getStoreKey(C.CHID_CACHE, this.secureStore);
        if (!this.chidCache || this.chidCache !== F) {
          this.chidCache = F;
          const G = this.secureStore.get(C.CHID);
          const H = G && this.decryptData(G, () => this.secureStore.delete(C.CHID)) || "";
          this.chid = H;
        }
        return this.chid;
      }
      setAppChid(F = "failed") {
        this.secureStore.set(C.CHID, this.encryptData(h.zWPzz(F, "")));
        this.initCacheKey(C.CHID_CACHE, this.secureStore);
      }
      getRefreshToken() {
        const F = this.getStoreKey(C.REFRESH_TOKEN_CACHE, this.secureStore);
        if (!this.refreshTokenCache || this.refreshTokenCache !== F) {
          this.refreshTokenCache = F;
          const G = this.secureStore.get(C.REFRESH_TOKEN);
          const H = G && this.decryptData(G, () => this.secureStore.delete(C.REFRESH_TOKEN)) || "";
          this.refreshToken = H;
        }
        return this.refreshToken;
      }
      setRefreshToken(F) {
        this.secureStore.set(C.REFRESH_TOKEN, this.encryptData(F || ""));
        this.initCacheKey(C.REFRESH_TOKEN_CACHE, this.secureStore);
      }
      getIsDev() {
        return !!this.store.get(C.IS_CONFIG_DEV);
      }
      setIsDev(F = false) {
        this.store.set(C.IS_CONFIG_DEV, F);
      }
      getTempDevPwd() {
        return this.store.get(C.TEMP_DEV_PWD);
      }
      setTempDevPwd(F) {
        this.store.set(C.TEMP_DEV_PWD, F);
      }
      getAppConfig() {
        const F = this.store.get(C.APP_CONFIG_STORE) || {};
        if (!F.popLogin) {
          F.popLogin = A.DEFAULT_APP_CONFIG.popLogin;
        }
        return F;
      }
      setAppConfig(F) {
        this.store.set(C.APP_CONFIG_STORE, F);
      }
      getSystemFpInitTime() {
        return this.store.get(C.SYSTEM_FP_TIME) || 0;
      }
      setSystemFpInitTime(F) {
        this.store.set(C.SYSTEM_FP_TIME, F);
      }
      getBuvidMark() {
        return this.store.get(C.BUVID_MARK);
      }
      setBuvidMark() {
        this.store.set(C.BUVID_MARK, "1");
      }
      getWindowState(F) {
        if (h.AibOx !== "qasVO") {
          const G = this.store.get(C.WINDOW_STATES) || {};
          try {
            return JSON.parse(G[F] || "{}");
          } catch (H) {
            return {};
          }
        } else if (i?.length) {
          const J = this.gameList.filter(K => J.includes(K.game_base_id));
          J.forEach(K => {
            K._pausePoped = true;
            this.writeGameInfo(K);
          });
        }
      }
      setWindowState(F, G) {
        const H = this.store.get(C.WINDOW_STATES) || {};
        H[F] = JSON.stringify(G || {});
        this.store.set(C.WINDOW_STATES, H);
      }
      getIsDisableGpu() {
        return !!this.store.get(C.DISABLE_GPU);
      }
      setIsDisableGpu(F) {
        this.store.set(C.DISABLE_GPU, F);
      }
      getIsSelectedFirst() {
        let F = this.store.get(C.SELECTED_FIRST);
        if (h.QGJAY(typeof F, "undefined")) {
          F = this.getIsFfSelectedFirst();
        }
        return F;
      }
      setIsSelectedFirst(F) {
        this.store.set(C.SELECTED_FIRST, F);
      }
      getIsFfSelectedFirst() {
        return !!this.store.get(C.FF_SELECTED_FIRST);
      }
      setIsFfSelectedFirst(F) {
        this.store.set(C.FF_SELECTED_FIRST, F);
      }
      getIsSelectedExit() {
        return !!this.store.get(C.SELECTED_EXIT);
      }
      setIsSelectedExit(F) {
        this.store.set(C.SELECTED_EXIT, F);
      }
      getIsQuitByCloseMain() {
        return !!this.store.get(C.QUIT_BY_CLOSE_MAIN);
      }
      setIsQuitByCloseMain(F) {
        this.store.set(C.QUIT_BY_CLOSE_MAIN, F);
      }
      getMainWindowTheme() {
        return this.store.get(C.MAIN_WINDOW_THEME) || "light";
      }
      setMainWindowTheme(F) {
        const G = this.getMainWindowTheme();
        if (G !== F) {
          this.store.set(C.MAIN_WINDOW_THEME, F);
          this.eventsService.emitAppThemeChange("MainWindowTheme");
        }
      }
      getPlayerWindowTheme() {
        return this.store.get(C.PLAYER_WINDOW_THEME) || "dark";
      }
      setPlayerWindowTheme(F) {
        const G = this.getPlayerWindowTheme();
        if (G !== F) {
          this.store.set(C.PLAYER_WINDOW_THEME, F);
          this.eventsService.emitAppThemeChange("PlayerWindowTheme");
        }
      }
      getBossShortcutInfo() {
        return this.store.get(C.BOSS_SHORTCUT_INFO) || {
          isEnable: true,
          shortcut: "Ctrl + Shift + C"
        };
      }
      setBossShortcutInfo(F) {
        this.store.set(C.BOSS_SHORTCUT_INFO, F);
      }
      getIsMiniPlayerWindow() {
        return this.store.get(C.PLAYER_WINDOW_MODE) === "mini";
      }
      setIsMiniPlayerWindow(F) {
        this.store.set(C.PLAYER_WINDOW_MODE, F ? "mini" : "");
      }
      getDownloadPath() {
        let F = this.store.get(C.DOWNLOAD_PATH);
        if (!F || !(0, t.existsSync)(F)) {
          F = this.setToDefaultDownloadPath();
          this.eventsService.emitDownloadInfoChange();
        }
        return F;
      }
      setDownloadPath(F) {
        if ((0, t.existsSync)(F)) {
          this.store.set(C.DOWNLOAD_PATH, F);
        }
      }
      setToDefaultDownloadPath() {
        const F = A.DEFAULT_DOWNLOAD_PATH;
        try {
          if (!(0, t.existsSync)(F)) {
            z.default.sync(F);
          }
        } catch (G) {
          this.log.error("Make download dir err:", this.formatError(G));
        }
        this.setDownloadPath(F);
        return F;
      }
      getGameDownloadPath() {
        let F = this.store.get(C.GAME_DOWNLOAD_PATH);
        if (!F) {
          F = this.configService.getDefaultGameDownloadPath();
        }
        return F;
      }
      setGameDownloadPath(F) {
        if ((0, t.existsSync)(F)) {
          this.store.set(C.GAME_DOWNLOAD_PATH, F);
        }
      }
      setToDefaultGameDownloadPath() {
        const F = this.configService.getDefaultGameDownloadPath(true);
        try {
          if (!(0, t.existsSync)(F)) {
            z.default.sync(F);
          }
        } catch (G) {
          this.log.error("Make download dir err:", this.formatError(G));
        }
        this.setGameDownloadPath(F);
        return F;
      }
      ensureGameDownloadPath() {
        let G = this.getGameDownloadPath();
        if (!G || !(0, t.existsSync)(G)) {
          try {
            z.default.sync(G);
          } catch (H) {
            G = this.setToDefaultGameDownloadPath();
            this.eventsService.emitDownloadInfoChange();
          }
        }
        return G;
      }
      getAutoStartDownload() {
        let F = this.store.get(C.AUTO_START_DOWNLOAD);
        if (h.bTZlB(typeof F, "boolean")) {
          if (h.oepNB !== "qeOWt") {
            if (j && !k.isDestroyed()) {
              m.close();
            }
          } else {
            F = true;
            this.store.set(C.AUTO_START_DOWNLOAD, F);
          }
        }
        return F;
      }
      setAutoStartDownload(F) {
        this.store.set(C.AUTO_START_DOWNLOAD, F);
      }
      getDownloadNoSleep() {
        let F = this.store.get(C.DOWNLOAD_NO_SLEEP);
        if (h.YaGbB(typeof F, "boolean")) {
          F = true;
          this.store.set(C.DOWNLOAD_NO_SLEEP, F);
        }
        return F;
      }
      setDownloadNoSleep(F) {
        const G = this.getDownloadNoSleep();
        if (F !== G) {
          this.store.set(C.DOWNLOAD_NO_SLEEP, F);
          this.configService.downloadChangeEvent$.next();
        }
      }
      getDownloadParallelNum() {
        const F = this.store.get(C.DL_PARALLEL_NUM);
        if (F && h.OBcIH(F, 0)) {
          return F;
        } else {
          return 1;
        }
      }
      setDownloadParallelNum(F) {
        this.store.set(C.DL_PARALLEL_NUM, F);
      }
      getSystemFontId() {
        const F = this.store.get(C.SYSTEM_FONT_ID);
        if (F) {
          return F;
        }
        return A.FONTS_LIST.find(G => G.isDefaultFont).id;
      }
      setSystemFontId(F) {
        this.store.set(C.SYSTEM_FONT_ID, F);
      }
      getGeneralConfigKeys() {
        return this.configService.generalConfigKeys;
      }
      getGeneralConfig() {
        const F = this.store.get(C.GENERAL_CONFIG_STORE) || {};
        if (h.ltKQT(F.isStartUpShowBiliPet, undefined)) {
          F.isStartUpShowBiliPet = true;
        }
        if (F.playerWindowTheme === undefined) {
          F.playerWindowTheme = "dark";
        }
        return F;
      }
      setGeneralConfig(F) {
        const G = {
          ...this.getGeneralConfig(),
          ...F
        };
        this.store.set(C.GENERAL_CONFIG_STORE, G);
        Object.assign(this.configService.generalConfig, G);
        this.eventsService.emitGeneralConfigChange(G);
      }
      deleteGeneralConfig() {
        this.configService.generalConfig = {};
        return this.store.delete(C.GENERAL_CONFIG_STORE);
      }
      getCustomConfigKeys() {
        return this.configService.customConfigKeys;
      }
      getCustomConfig() {
        const F = this.store.get(C.CUSTOM_CONFIG_STORE) || {};
        Object.assign(F, F.customSettings);
        return F;
      }
      setCustomConfig(F) {
        const G = {
          ...this.getCustomConfig(),
          ...F
        };
        this.store.set(C.CUSTOM_CONFIG_STORE, G);
        Object.assign(this.configService.customConfig, G);
        this.eventsService.emitCustomConfigChange(G);
      }
      deleteCustomConfig() {
        return this.store.delete(C.CUSTOM_CONFIG_STORE);
      }
      getUploadLogTime() {
        return this.store.get(C.UPLOAD_MAIN_LOG_TIME) || 0;
      }
      setUploadLogTime(F) {
        this.store.set(C.UPLOAD_MAIN_LOG_TIME, F);
      }
      getUploadLogInfo() {
        return this.store.get(C.UPLOAD_LOG_INFO) || {};
      }
      setUploadLogInfo(F) {
        this.store.set(C.UPLOAD_LOG_INFO, F);
      }
      getIsPrivacyPolicyAccepted() {
        const F = this.getDataStoreKey(B.PRIVACY_POLICY_HIDDEN_KEY);
        return !!this.dataStore.get(F);
      }
      setIsPrivacyPolicyAccepted() {
        const F = this.getDataStoreKey(B.PRIVACY_POLICY_HIDDEN_KEY);
        this.dataStore.set(F, true);
      }
      getAllowPushRecommend() {
        const F = this.getDataStoreKey(B.ALLOW_PUSH_RECOMMEND);
        let G = this.dataStore.get(F);
        if (typeof G !== "boolean") {
          G = true;
        }
        return !!G;
      }
      getAllowPushLive() {
        if (h.gZJYr === "iqGfS") {
          (0, i.execSync)("chmod +x " + j.FFMPEG_EXE_);
        } else {
          const G = this.getDataStoreKey(B.ALLOW_PUSH_LIVE);
          let H = this.dataStore.get(G);
          if (typeof H !== "boolean") {
            H = true;
          }
          return !!H;
        }
      }
      getAllowPushDynamic() {
        const F = this.getDataStoreKey(B.ALLOW_PUSH_DYNAMIC);
        let G = this.dataStore.get(F);
        if (typeof G !== "boolean") {
          G = true;
        }
        return !!G;
      }
      getUpdateBaseLine() {
        const F = this.getDataStoreKey(B.UPDATE_BASE_LINE);
        return this.dataStore.get(F);
      }
      getRecommendPushRecord() {
        const F = this.getDataStoreKey(B.RECOMMEND_PUSH_RECORD);
        return this.dataStore.get(F);
      }
      setRecommendPushRecord(F) {
        const G = this.getDataStoreKey(B.RECOMMEND_PUSH_RECORD);
        this.dataStore.set(G, F);
      }
      getDynamicPushRecord() {
        const F = this.getDataStoreKey(B.DYNAMIC_PUSH_RECORD);
        return this.dataStore.get(F);
      }
      setDynamicPushRecord(F) {
        const G = this.getDataStoreKey(B.DYNAMIC_PUSH_RECORD);
        this.dataStore.set(G, F);
      }
      getLivePushRecord() {
        const F = this.getDataStoreKey(B.LIVE_PUSH_RECORD);
        return this.dataStore.get(F);
      }
      setLivePushRecord(F) {
        const G = this.getDataStoreKey(B.LIVE_PUSH_RECORD);
        this.dataStore.set(G, F);
      }
      getIsQuitDialogPoped() {
        return !!this.store.get(C.QUIT_DIALOG_POPED);
      }
      setIsQuitDialogPoped(F) {
        this.store.set(C.QUIT_DIALOG_POPED, F);
        this.eventsService.emitQuitDialogPopedChange(F);
      }
      getInitialVersion() {
        return this.store.get(C.INITIAL_VERSION) || "";
      }
      setInitialVersion(F) {
        if (h.fWJSM !== h.umAhM) {
          this.store.set(C.INITIAL_VERSION, F);
        } else {
          h.maximize();
        }
      }
      getLatestRunVersion() {
        return this.store.get(C.LATEST_VERSION) || "";
      }
      setLatestRunVersion(F) {
        this.store.set(C.LATEST_VERSION, F);
      }
      getAbTestConf() {
        return this.store.get(C.AB_TEST_CONF) || {};
      }
      setAbTestConf(F) {
        this.store.set(C.AB_TEST_CONF, F);
      }
      getAbTestConfig() {
        return this.store.get(C.AB_TEST_CONFIG) || {};
      }
      setAbTestConfig(F) {
        this.store.set(C.AB_TEST_CONFIG, F);
      }
      getAbTestConfigEnv() {
        return this.store.get(C.AB_TEST_CONFIG_ENV);
      }
      setAbTestConfigEnv(F) {
        this.store.set(C.AB_TEST_CONFIG_ENV, F);
      }
      getPlayerExpData() {
        if (h.CTnzz("zPCEv", "UUkNx")) {
          this.log.error("Delete all download groups error:", this.getErrStack(i));
          throw this.formatError(j);
        } else {
          return this.store.get(C.PLAYER_EXP_DATA) || {};
        }
      }
      setPlayerExpData(F) {
        this.store.set(C.PLAYER_EXP_DATA, F);
      }
      getFfmpegExeInfo() {
        return this.store.get(C.FFMPEG_EXE_INFO) || {};
      }
      setFfmpegExeInfo(F) {
        this.store.set(C.FFMPEG_EXE_INFO, F);
      }
      getUseMediaSession() {
        const F = this.store.get(C.USE_MEDIA_SESSION);
        if ((0, u.isBol)(F)) {
          return F;
        }
        return !A.BAN_MEDIA_SESSION_CHIDS.includes(this.configService.chid);
      }
      setUseMediaSession(F) {
        this.store.set(C.USE_MEDIA_SESSION, F);
      }
      getIsShowConsoleLog() {
        return this.store.get(C.IS_SHOW_CONSOLE_LOG);
      }
      setIsShowConsoleLog(F) {
        this.store.set(C.IS_SHOW_CONSOLE_LOG, F);
      }
      getLocalPlayerBackup() {
        return this.store.get(C.LOCAL_PLAYER_BACKUP) || {};
      }
      setLocalPlayerBackup(F) {
        this.store.set(C.LOCAL_PLAYER_BACKUP, F);
      }
      getGamepadSettings() {
        return this.store.get(C.GAMEPAD_SETTINGS) || {};
      }
      setGamepadSettings(F) {
        const G = this.getGamepadSettings();
        if (F?.id) {
          G[F.id] = F;
        }
        this.store.set(C.GAMEPAD_SETTINGS, G);
        this.eventsService.emitGamepadSettingsChange(G);
      }
      delGamepadSettings() {
        this.store.delete(C.GAMEPAD_SETTINGS);
      }
      getSavedAccounts() {
        return this.store.get(C.SAVED_ACCOUNTS) || [];
      }
      setSavedAccounts(F) {
        this.store.set(C.SAVED_ACCOUNTS, F);
      }
      getIsForceRelaunch() {
        return !!this.store.get(C.IS_FORCE_RELAUNCH);
      }
      setIsForceRelaunch(F) {
        this.store.set(C.IS_FORCE_RELAUNCH, F);
      }
      getIsWxInstalled() {
        return !!this.store.get(C.IS_WX_INSTALLED);
      }
      setIsWxInstalled(F) {
        this.store.set(C.IS_WX_INSTALLED, F);
      }
    };
    D = i([(0, n.Injectable)(), j("design:paramtypes", [typeof (l = typeof o.ConfigService !== "undefined" && o.ConfigService) === "function" ? l : Object, typeof (m = typeof q.EventsService !== "undefined" && q.EventsService) === "function" ? m : Object])], D);
    g.StoreService = D;
  }
});
var ip = {};
bY(ip, {
  FetchBase: () => is
});
var iq;
var ir;
var is;
var it = bW({
  ""() {
    iq = c1(require("node-fetch"));
    ga();
    ir = require("@bilibili/b-utils-core");
    fP();
    is = class extends ca {
      constructor(h, i, j) {
        super(h);
        this.configService = i;
        this.storeServie = j;
        c3(this, "servers", {
          API: "https://api.bilibili.com",
          API_PRE: "https://pre-api.bilibili.com",
          WWW: "https://www.bilibili.com",
          PASSOPRT: "https://passport.bilibili.com",
          DATA: "https://data.bilibili.com",
          DATAFLOW: "https://dataflow.biliapi.com",
          MOCK: "http://127.0.0.1:3033"
        });
      }
      getCsrf() {
        const h = this.storeServie.getAuthCookies();
        const i = h.find(j => j.name === "bili_jct");
        return i?.value || "";
      }
      getCookies() {
        const h = this.storeServie.getAuthCookies();
        return h.map(({
          name: i,
          value: j
        }) => i + "=" + j).join("; ");
      }
      getHeaders(h = false) {
        const i = this.storeServie.getAuthCookies();
        return {
          origin: "https://www.bilibili.com",
          Referer: "https://www.bilibili.com/client",
          cookie: i.map(({
            name: j,
            value: k
          }) => j + "=" + k).join("; "),
          "user-agent": f9,
          ...(h ? {
            "Content-Type": "application/x-www-form-urlencoded"
          } : {})
        };
      }
      async get(h, i) {
        if (!i) {
          i = {};
        }
        const j = i.defaultHeaders !== false;
        const k = this.configService.proxyAgent;
        const l = await (0, iq.default)(h, {
          headers: {
            ...(j ? this.getHeaders() : {}),
            ...i.headers
          },
          ...(k && {
            agent: k
          }),
          ...(i.timeout && {
            timeout: i.timeout
          })
        });
        let m = {};
        try {
          if (i.resText) {
            m.data = await l.text();
            m.code = 0;
          } else {
            m = await l.json();
          }
        } catch {
          m = {
            code: 1,
            message: "error",
            data: null
          };
        }
        m.status = l.status;
        if (i.resHeaders === true) {
          m.headers = l.headers.raw();
        }
        return m;
      }
      async post(h, i, j) {
        if (!j) {
          j = {};
        }
        const l = new URLSearchParams();
        const m = j.defaultHeaders !== false;
        if ("csrf" in j) {
          if (j.csrf) {
            l.append("csrf", j.csrf);
          }
        } else {
          l.append("csrf", this.getCsrf());
        }
        const n = this.configService.proxyAgent;
        Object.entries(i || {}).forEach(([r, t]) => l.append(r, t));
        const o = await (0, iq.default)(h, {
          method: "POST",
          body: l,
          headers: {
            ...(m ? this.getHeaders(true) : {}),
            ...j.headers
          },
          ...(n && {
            agent: n
          }),
          ...(j.timeout && {
            timeout: j.timeout
          })
        });
        let q = {};
        try {
          if (j.resText) {
            q.data = await o.text();
            q.code = 0;
          } else {
            q = await o.json();
          }
        } catch {
          q = {
            code: 1,
            message: "error",
            data: null
          };
        }
        q.status = o.status;
        if (j.resHeaders === true) {
          q.headers = o.headers.raw();
        }
        return q;
      }
      async downloadFile(h) {
        const j = this.configService.proxyAgent;
        const k = await (0, iq.default)(h, {
          method: "GET",
          headers: {
            ...this.getHeaders(),
            "Content-Type": "application/octet-stream"
          },
          ...(j && {
            agent: j
          })
        });
        if (k.status === 200) {
          return await k.buffer();
        } else {
          throw new Error("Not found!");
        }
      }
      async fetchUrl(h) {
        const i = this.configService.proxyAgent;
        return await (0, iq.default)(h, {
          headers: this.getHeaders(),
          ...(i && {
            agent: i
          })
        });
      }
      logResponse(h, i = "Request res:") {
        console.log(i, h);
        return h;
      }
      resToData(h) {
        return h && h.data || null;
      }
      resToStr(h) {
        return h && h.data || "";
      }
      resToObj(h) {
        return h && (0, ir.isObj)(h.data) && h.data || {};
      }
      resToArr(h) {
        return h && (0, ir.isArr)(h.data) && h.data || {};
      }
      resToPage(h) {
        const i = h && (0, ir.isObj)(h.data) && h.data || {};
        i.total = i.total || 0;
        i.list = (0, ir.isArr)(i.list) && i.list || [];
        return i;
      }
    };
  }
});
var iu = bX({
  ""(g) {
    'use strict';

    var h = {
      NGpSW: function (C, D) {
        return C - D;
      },
      NyORI: function (C, D, E, F) {
        return C(D, E, F);
      },
      ODpOv: "eventsService",
      CDdFK: function (C, D) {
        return C > D;
      },
      nuNdD: function (C, D, E) {
        return C(D, E);
      },
      GoUfi: function (C, D) {
        return C !== D;
      }
    };
    var i = g && g.__decorate || function (C, D, E, F) {
      var G = arguments.length;
      var H = G < 3 ? D : F === null ? F = Object.getOwnPropertyDescriptor(D, E) : F;
      var I;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        H = Reflect.decorate(C, D, E, F);
      } else {
        for (var J = h.NGpSW(C.length, 1); J >= 0; J--) {
          if (I = C[J]) {
            H = (G < 3 ? I(H) : G > 3 ? h.NyORI(I, D, E, H) : I(D, E)) || H;
          }
        }
      }
      if (G > 3 && H) {
        Object.defineProperty(D, E, H);
      }
      return H;
    };
    var j = g && g.__metadata || function (C, D) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(C, D);
      }
    };
    var k = g && g.__importDefault || function (C) {
      if (C && C.__esModule) {
        return C;
      } else {
        return {
          default: C
        };
      }
    };
    var l;
    var m;
    var n;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.FetchService = undefined;
    var o = require("@nestjs/common");
    var q = gK();
    var r = io();
    var t = gP();
    it();
    var u = c2(ip);
    fP();
    var w = c2(fO);
    var z = k(require("node-fetch"));
    var A = require("@bilibili/b-utils-core");
    var B = class C extends u.FetchBase {
      constructor(D, E, F) {
        super("FetchService", D, E);
        c3(this, "configService");
        c3(this, "storeService");
        c3(this, h.ODpOv);
        this.configService = D;
        this.storeService = E;
        this.eventsService = F;
      }
      async getRestartApp() {
        const D = "http://127.0.0.1:" + w.MAIN_PORT + "/restart";
        return await (0, z.default)(D);
      }
      async postLogReport(D) {
        const E = this.servers.DATAFLOW + "/log/pbrequest";
        const F = this.configService.proxyAgent;
        return await (0, z.default)(E, {
          method: "POST",
          body: D,
          headers: {
            "User-Agent": w.DEFAULT_USER_AGENT
          },
          ...(F && {
            agent: F
          })
        });
      }
      async getAppConfig() {
        const {
          isRemoteConfigPre: D
        } = this.configService.customConfig;
        const E = D ? this.servers.API_PRE : this.servers.API;
        const F = E + "/x/elec-frontend/config/appconfig";
        return this.get(F);
      }
      async getPlayerConfig() {
        const {
          isRemoteConfigPre: D
        } = this.configService.customConfig;
        const E = D ? this.servers.API_PRE : this.servers.API;
        const F = E + "/x/elec-frontend/config/playerconfig";
        return this.get(F);
      }
      async getInjectCode() {
        const {
          isRemoteConfigPre: D
        } = this.configService.customConfig;
        const E = D ? this.servers.API_PRE : this.servers.API;
        const F = E + "/x/elec-frontend/config/injectcode";
        return this.get(F);
      }
      async getUserInfo() {
        const D = this.servers.API + "/x/web-interface/nav";
        return this.get(D).then(this.resToObj);
      }
      async postUserLogout() {
        const D = this.servers.PASSOPRT + "/login/exit/v2";
        return this.post(D, {
          biliCSRF: this.getCsrf()
        }, {
          resHeaders: true,
          timeout: 3000
        });
      }
      async getBuvidInfo() {
        const D = this.servers.API + "/x/frontend/finger/spi?platform=pcelec";
        return this.get(D, {
          timeout: 1000
        }).then(this.resToObj);
      }
      async getIsRefreshToken() {
        const D = this.getCsrf();
        const E = this.servers.PASSOPRT + "/x/passport-login/web/cookie/info?csrf=" + D;
        return this.get(E).then(this.resToObj);
      }
      async getRefreshCsrf(D) {
        const E = this.servers.WWW + "/correspond/2/" + D;
        return this.get(E, {
          resText: true
        }).then(this.resToStr);
      }
      async postRefreshToken(D, E) {
        const F = this.servers.PASSOPRT + "/x/passport-login/web/cookie/refresh";
        return this.post(F, {
          refresh_csrf: D,
          refresh_token: E
        }, {
          resHeaders: true
        });
      }
      async postConfirmRefreshToken(D) {
        const E = this.servers.PASSOPRT + "/x/passport-login/web/confirm/refresh";
        return this.post(E, {
          refresh_token: D
        }).then(this.resToObj);
      }
      async getFawkesFfVersion() {
        const D = this.servers.API + "/x/polymer/pc-electron/ff-version";
        return this.get(D).then(this.resToObj);
      }
      async getAbTestConf(D, E) {
        const F = (0, A.stringifyQs)({
          buvid: D,
          mid: E || ""
        });
        const G = this.servers.API + "/x/elec-frontend/config/abtest?" + F;
        return this.get(G).then(this.resToObj);
      }
      reportDownloadSize(D) {
        const E = [D.ctime, D.fid, D.fver, D.eventid, D.eventparam, D.displayid, D.seasonid, D.epid, D.avid, D.cid, D.pname, D.progress, D.readystate, D.statue, D.playmethod, D.videotype, D.quality, D.realtime, D.url, D.exparam, D.abver, D.labels || ""].join("|");
        const F = this.servers.DATA + "/log/web?001111" + Date.now() + E;
        this.eventsService.emitReportDownloadSize(F);
      }
      async getRecommendSeries() {
        const D = this.servers.API + "/x/web-interface/popular/series/list";
        return this.get(D).then(this.resToObj);
      }
      async getDynamicUpdate(D) {
        const E = this.servers.API + "/x/web-interface/dynamic/entrance?alltype_offset=" + D;
        return this.get(E).then(this.resToObj);
      }
      async getDynamicInfo(D) {
        const E = this.servers.API + "/x/polymer/web-dynamic/v1/push/info?id=" + D + "&platform=pcclient";
        return this.get(E).then(this.resToObj);
      }
      async getUpLives() {
        const D = this.servers.API + "/x/polymer/pc-electron/live-ups";
        return this.get(D).then(this.resToObj);
      }
      async postGaiaFp(D) {
        const E = this.configService.proxyAgent;
        const F = this.servers.API + "/x/internal/gaia-gateway/ExClimbZhuMu";
        return (0, z.default)(F, {
          method: "POST",
          body: JSON.stringify(D),
          headers: {
            ...this.getHeaders(),
            "Content-Type": "application/json"
          },
          ...(E && {
            agent: E
          })
        });
      }
    };
    B = h.nuNdD(i, [(0, o.Injectable)(), j("design:paramtypes", [typeof (l = h.GoUfi(typeof q.ConfigService, "undefined") && q.ConfigService) === "function" ? l : Object, typeof (m = typeof r.StoreService !== "undefined" && r.StoreService) === "function" ? m : Object, typeof (n = typeof t.EventsService !== "undefined" && t.EventsService) === "function" ? n : Object])], B);
    g.FetchService = B;
  }
});
var iw = bX({
  ""(g) {
    'use strict';

    var i = g && g.__decorate || function (G, H, I, J) {
      var K = arguments.length;
      var L = K < 3 ? H : J === null ? J = Object.getOwnPropertyDescriptor(H, I) : J;
      var M;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        L = Reflect.decorate(G, H, I, J);
      } else {
        for (var N = G.length - 1; N >= 0; N--) {
          if (M = G[N]) {
            L = (K < 3 ? M(L) : K > 3 ? M(H, I, L) : M(H, I)) || L;
          }
        }
      }
      if (K > 3 && L) {
        Object.defineProperty(H, I, L);
      }
      return L;
    };
    var j = g && g.__metadata || function (G, H) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(G, H);
      }
    };
    var k = g && g.__importDefault || function (G) {
      if (G && G.__esModule) {
        return G;
      } else {
        return {
          default: G
        };
      }
    };
    var l;
    var m;
    var n;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.GaiaService = undefined;
    var o = require("@bilibili/b-utils-core");
    im();
    var q = c2(il);
    gz();
    var r = c2(gy);
    fP();
    var t = c2(fO);
    var u = gK();
    var w = iu();
    var z = io();
    ga();
    var A = c2(g9);
    var B = require("@nestjs/common");
    var C = require("electron");
    var D = k(require("ip"));
    var E = k(require("os"));
    var F = class G extends A.BaseService {
      constructor(H, I, J) {
        super("GaiaService");
        c3(this, "fetchService");
        c3(this, "configService");
        c3(this, "storeService");
        this.fetchService = H;
        this.configService = I;
        this.storeService = J;
        this.configService.reportFpInfo$.subscribe(() => {
          this.reportGaiaFpWhenChange("systemInfo");
        });
        this.configService.userLoginChange$.subscribe(() => {
          this.reportGaiaFpWhenChange("userInfo");
        });
      }
      buildGaiaFp() {
        return {
          main: this.buildGaiaFpMain(),
          webgl: this.buildGaiaFpWebgl(),
          systemInfo: this.buildGaiaSystemInfo(),
          userInfo: this.buildGaiaUserInfo(),
          reportInfo: this.buildGaiaFpReportInfo()
        };
      }
      normalizeGaiaFp(H = {}) {
        const I = this.buildGaiaFp();
        return {
          main: {
            ...I.main,
            ...H.main
          },
          webgl: {
            ...I.webgl,
            ...H.webgl
          },
          systemInfo: {
            ...I.systemInfo,
            ...H.systemInfo
          },
          userInfo: {
            ...I.userInfo,
            ...H.userInfo
          },
          reportInfo: {
            ...I.reportInfo,
            ...H.reportInfo
          }
        };
      }
      buildGaiaFpReportInfo() {
        return {
          ctime: 0,
          ctime_format: ""
        };
      }
      buildGaiaFpWebgl() {
        return {
          webgl_version: "",
          webgl_shading_language_version: "",
          webgl_vendor: "",
          webgl_renderer: ""
        };
      }
      buildGaiaSystemInfo() {
        const H = this.storeService.getSystemFp();
        return {
          machineGUID: H?.sys?.machineGUID || "",
          hostname: H?.sys?.hostname || "",
          username: H?.sys?.username || "",
          isvirtual: H?.sys?.isvirtual || false,
          cpu_manufacturer: H?.hardware?.cpu?.manufacturer || "",
          cpu_brand: H?.hardware?.cpu?.brand || "",
          cpu_core: H?.hardware?.cpu?.cores.toString() || "",
          cpu_processors: H?.hardware?.cpu?.processors.toString() || "",
          macs: H?.macs || ""
        };
      }
      buildGaiaUserInfo() {
        const H = this.storeService.getUserInfo();
        return {
          mid: H?.mid?.toString() || ""
        };
      }
      buildGaiaFpMain() {
        const {
          chid: H,
          sessionId: I,
          buvid: J,
          build: K,
          appStartTime: L
        } = this.configService;
        return {
          ip: D.default.address(),
          platform: t.IS_WIN ? 4 : t.IS_MAC ? 8 : t.IS_LINUX ? 9 : 4,
          buvid: J,
          chid: H,
          app_chid: H,
          osver: E.default.version(),
          fts: L,
          network: r.RuntimeNetWork[C.net.isOnline ? "OTHERNET" : "OFFLINE"],
          version: t.APP_VERSION,
          version_code: K,
          session_id: I
        };
      }
      isChange(H, I) {
        return !H || Object.keys(H).some(J => H[J] !== I[J]);
      }
      getInitialGaiaFp() {
        const H = this.storeService.getGaiaFp();
        if (H?.main) {
          const I = this.buildGaiaFpMain();
          return this.normalizeGaiaFp(Object.assign({}, H, {
            main: I
          }));
        }
        return this.normalizeGaiaFp(H);
      }
      transformGaiaFp(H) {
        const I = Object.keys(H).reduce((K, L) => ({
          ...K,
          ...H[L]
        }), {});
        const J = Object.keys(I).reduce((K, L) => ({
          ...K,
          [q.GAIA_KEY_MAP[L]]: I[L]
        }), {});
        return {
          payload: JSON.stringify(J)
        };
      }
      report(H) {
        const I = this.normalizeGaiaFp(H);
        I.reportInfo.ctime = Date.now();
        I.reportInfo.ctime_format = (0, o.formatDateTime)("YYYY-MM-DD hh:mm:ss", I.reportInfo.ctime);
        this.storeService.setGaiaFp(I);
        this.configService.gaiaFp = I;
        this.fetchService.postGaiaFp(this.transformGaiaFp(I));
      }
      reportGaiaFpWhenChange(H, I) {
        const J = this.buildGaiaFp();
        const K = this.storeService.getGaiaFp();
        const L = I ?? J[H];
        if (!this.isChange(K.main, J.main) && !this.isChange(K[H], L)) {
          return;
        }
        const M = Object.assign({}, this.normalizeGaiaFp(K), {
          main: J.main
        }, {
          [H]: L
        });
        this.report(M);
      }
      reportGaiaFpWhenStart() {
        const H = this.getInitialGaiaFp();
        this.report(H);
      }
      scheduleReportGaiaFp() {
        clearInterval(this.configService.intervalOfReportGaiaFp);
        this.configService.intervalOfReportGaiaFp = setInterval(() => {
          const H = this.buildGaiaFp();
          const I = this.normalizeGaiaFp(this.storeService.getGaiaFp());
          const J = {
            main: H.main,
            webgl: I.webgl,
            systemInfo: I.systemInfo,
            userInfo: I.userInfo,
            reportInfo: H.reportInfo
          };
          this.report(J);
        }, t.GAIA_FP_REPORT_TIME);
      }
    };
    F = i([(0, B.Injectable)(), j("design:paramtypes", [typeof (l = typeof w.FetchService !== "undefined" && w.FetchService) === "function" ? l : Object, typeof (m = typeof u.ConfigService !== "undefined" && u.ConfigService) === "function" ? m : Object, typeof (n = typeof z.StoreService !== "undefined" && z.StoreService) === "function" ? n : Object])], F);
    g.GaiaService = F;
  }
});
var ix = bX({
  ""(g) {
    'use strict';

    var h = {
      eAPLR: "object",
      qlpjB: function (C, D) {
        return C === D;
      },
      XNaEx: function (C, D) {
        return C >= D;
      },
      eHBhJ: function (C, D) {
        return C !== D;
      },
      VlJok: "fTtJB",
      CDXov: "storeService",
      xykVx: "Relaunching!",
      WGziH: "function",
      Cqwuq: function (C, D) {
        return C - D;
      },
      RXNus: function (C, D) {
        return C % D;
      },
      lBtzA: function (C, D, E) {
        return C(D, E);
      },
      cIOdP: function (C, D) {
        return C(D);
      },
      LrZKJ: function (C) {
        return C();
      }
    };
    var i = g && g.__decorate || function (C, D, E, F) {
      var G = arguments.length;
      var H = G < 3 ? D : F === null ? F = Object.getOwnPropertyDescriptor(D, E) : F;
      var I;
      if (typeof Reflect === h.eAPLR && h.qlpjB(typeof Reflect.decorate, "function")) {
        H = Reflect.decorate(C, D, E, F);
      } else {
        for (var J = C.length - 1; h.XNaEx(J, 0); J--) {
          if (I = C[J]) {
            H = (G < 3 ? I(H) : G > 3 ? I(D, E, H) : I(D, E)) || H;
          }
        }
      }
      if (G > 3 && H) {
        Object.defineProperty(D, E, H);
      }
      return H;
    };
    var j = g && g.__metadata || function (C, D) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(C, D);
      }
    };
    var k = g && g.__importDefault || function (C) {
      if (h.eHBhJ("DBQyO", h.VlJok)) {
        if (C && C.__esModule) {
          return C;
        } else {
          return {
            default: C
          };
        }
      } else {
        try {
          m.appLog?.info("Init .runtion config file");
          (0, n.writeFileSync)(o, "{}");
        } catch {}
      }
    };
    var l;
    var m;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.UtilsService = undefined;
    var n = h.cIOdP(require, "@nestjs/common");
    ga();
    var o = c2(g9);
    var q = gK();
    var r = io();
    var t = require("electron");
    h.LrZKJ(dn);
    var u = c2(dm);
    fP();
    var w = c2(fO);
    var z = require("@bilibili/b-utils-core");
    var A = k(require("semver"));
    var B = class C extends o.BaseService {
      constructor(D, E) {
        super("UtilsService");
        c3(this, "configService");
        c3(this, h.CDXov);
        this.configService = D;
        this.storeService = E;
      }
      relaunchApp(D = false) {
        this.log.info(h.xykVx);
        this.configService.isAppQuited = true;
        this.configService.appQuitTime = Date.now();
        if (D) {
          this.storeService.setIsForceRelaunch(true);
          t.app.relaunch();
          t.app.exit();
        } else {
          this.configService.beforeQuitApp$.next();
          setTimeout(() => {
            this.configService.onQuitingApp$.next();
            t.app.relaunch();
            t.app.exit();
          }, w.QUIT_STAY_TIME);
        }
      }
      shellOpenExternal(D, E) {
        t.shell.openExternal(D);
        this.configService.onOpenInBrowser$.next({
          url: D,
          from: E
        });
      }
      setAppOpenAtLogin(D) {
        D = !!D;
        if (w.IS_DEV) {
          t.app.setLoginItemSettings({
            openAtLogin: D,
            path: process.execPath,
            name: "BiliBiliPC"
          });
        } else {
          t.app.setLoginItemSettings({
            openAtLogin: D,
            name: "BiliBiliPC"
          });
        }
      }
      isWindowHide(D) {
        return !D || D.isDestroyed() || !D.isVisible() && D.isHidden;
      }
      getDisplayScaleFactor(D) {
        const E = D.getBounds();
        const F = t.screen.getDisplayMatching(E);
        return F.scaleFactor;
      }
      centerBrowserView(D, E, F) {
        const {
          width: G,
          height: H
        } = D.getBounds();
        const {
          width: I,
          height: J
        } = F || E.getBounds();
        const K = Math.floor((G - I) / 2);
        const L = Math.floor((H - J) / 2);
        E.setBounds({
          x: K,
          y: L,
          width: I,
          height: J
        });
      }
      getBuvidWlCode(D) {
        return String(parseInt((0, u.md5Hash)(D, 8), 16));
      }
      getAbTestBucket(D, E, F = 1000) {
        return h.RXNus(h.lBtzA(parseInt, (0, u.md5Hash)("" + D + (E || ""), 8), 16), F);
      }
      getAbTestCursor(D) {
        const E = (D || "").split("~");
        let F = +E[0];
        let G = +E[1];
        if (!(0, z.isNum)(F)) {
          F = -1;
        }
        if (!(0, z.isNum)(G)) {
          G = F;
        }
        return [F, G];
      }
      getPatchVersionInfo(D, E) {
        const F = E.match(/\d*$/)[0];
        if (D) {
          return E.replace(/(?<=\.)\d*$/, "" + String(90 + D) + F);
        } else {
          return E;
        }
      }
      checkIsGrayHit({
        on: D,
        s: E,
        b: F,
        bc: G,
        wl: H,
        bl: I,
        st: J,
        et: K,
        sv: L,
        ev: M,
        exOS: N,
        exWin7Win8: O
      } = {}) {
        const {
          device: P
        } = this.configService.getAppInfo();
        const {
          mid: Q
        } = this.storeService.getUserInfo();
        const {
          buvid: R
        } = this.configService;
        const S = this.getBuvidWlCode(R);
        if (!D) {
          return false;
        }
        if (N && N.includes(P)) {
          return false;
        }
        if (O && w.IS_WIN7OR8) {
          return false;
        }
        if (J && Date.now() < J || K && Date.now() > K) {
          return false;
        }
        if (L && A.default.lt(w.APP_VERSION, L) || M && A.default.gt(w.APP_VERSION, M)) {
          return false;
        }
        if (I) {
          if (I.match(new RegExp("(^|,)" + Q + "(,|$)"))) {
            return false;
          }
          if (I.match(new RegExp(S + ",(0,|0$)"))) {
            return false;
          }
        }
        if (H) {
          if (H.match(new RegExp("(^|,)" + Q + "(,|$)"))) {
            return true;
          }
          if (H.match(new RegExp(S + ",(0,|0$)"))) {
            return true;
          }
        }
        const [T, U] = this.getAbTestCursor(F);
        const V = this.getAbTestBucket(R, E, G || 1000);
        return h.XNaEx(V, T) && V <= U;
      }
    };
    B = i([(0, n.Injectable)(), j("design:paramtypes", [typeof (l = typeof q.ConfigService !== "undefined" && q.ConfigService) === "function" ? l : Object, h.qlpjB(typeof (m = typeof r.StoreService !== "undefined" && r.StoreService), "function") ? m : Object])], B);
    g.UtilsService = B;
  }
});
var iy = bX({
  ""(g) {
    'use strict';

    var h = {
      IlHbT: function (L, M) {
        return L in M;
      },
      tRVDu: function (L, M) {
        return L === M;
      },
      GvpHJ: "JFzvI",
      PDzRN: function (L, M) {
        return L === M;
      },
      RHZDY: function (L, M) {
        return L !== M;
      },
      XrPkh: function (L, M) {
        return L > M;
      },
      cyjqb: "no-store, no-cache, must-revalidate, proxy-revalidate",
      znBIg: "libx264",
      qXVII: "err",
      ZKltZ: "cmd",
      MpEzi: "请输入密码：",
      OBKpY: "已退出交互模式~",
      oFJyv: function (L, M) {
        return L(M);
      },
      thQiQ: "undefined",
      JivXJ: function (L, M) {
        return L === M;
      },
      cSNSl: "function"
    };
    var i = g && g.__createBinding || (Object.create ? function (L, M, N, O = N) {
      var P = Object.getOwnPropertyDescriptor(M, N);
      if (!P || (h.IlHbT("get", P) ? !M.__esModule : P.writable || P.configurable)) {
        P = {
          enumerable: true,
          get: function () {
            return M[N];
          }
        };
      }
      Object.defineProperty(L, O, P);
    } : function (L, M, N, O) {
      if (h.tRVDu(O, undefined)) {
        O = N;
      }
      L[O] = M[N];
    });
    var j = g && g.__setModuleDefault || (Object.create ? function (L, M) {
      if (h.GvpHJ !== "wdJIc") {
        Object.defineProperty(L, "default", {
          enumerable: true,
          value: M
        });
      } else {
        this.isCanInteractive = false;
        this.eventService.emitAppLogIsCanInteractiveChange(this.isCanInteractive);
        this.log.info("已退出交互模式~");
        return false;
      }
    } : function (L, M) {
      L.default = M;
    });
    var k = g && g.__decorate || function (L, M, N, O) {
      var P = arguments.length;
      var Q = P < 3 ? M : O === null ? O = Object.getOwnPropertyDescriptor(M, N) : O;
      var R;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        Q = Reflect.decorate(L, M, N, O);
      } else {
        for (var S = L.length - 1; S >= 0; S--) {
          if (R = L[S]) {
            Q = (P < 3 ? R(Q) : P > 3 ? R(M, N, Q) : R(M, N)) || Q;
          }
        }
      }
      if (P > 3 && Q) {
        Object.defineProperty(M, N, Q);
      }
      return Q;
    };
    var l = g && g.__importStar || function (L) {
      if (L && L.__esModule) {
        return L;
      }
      var M = {};
      if (L != null) {
        for (var N in L) {
          if (N !== "default" && Object.prototype.hasOwnProperty.call(L, N)) {
            i(M, L, N);
          }
        }
      }
      j(M, L);
      return M;
    };
    var m = g && g.__metadata || function (L, M) {
      if (h.PDzRN(typeof Reflect, "object") && typeof Reflect.metadata === "function") {
        return Reflect.metadata(L, M);
      }
    };
    var n = g && g.__importDefault || function (L) {
      if (L && L.__esModule) {
        return L;
      } else {
        return {
          default: L
        };
      }
    };
    var o;
    var q;
    var r;
    var t;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.HelpService = undefined;
    var u = require("@nestjs/common");
    ga();
    var w = c2(g9);
    var z = gK();
    var A = io();
    var B = gP();
    var C = ix();
    dn();
    var D = c2(dm);
    fP();
    var E = c2(fO);
    var F = require("fs-extra");
    var G = h.oFJyv(l, h.oFJyv(require, "path"));
    var H = n(require("express"));
    var I = n(require("stream-transcoder"));
    var J = n(require("os"));
    var K = class L extends w.BaseService {
      constructor(M, N, O, P) {
        super("HelpService");
        c3(this, "configService");
        c3(this, "storeService");
        c3(this, "eventService");
        c3(this, "utilsService");
        c3(this, "enterPwdCount", 0);
        c3(this, "isReqInteractive", false);
        c3(this, "isCanInteractive", false);
        this.configService = M;
        this.storeService = N;
        this.eventService = O;
        this.utilsService = P;
        this.configService.userLoginChange$.subscribe(Q => {
          if (!Q) {
            this.deleteSavedAccount(this.configService.logoutMid);
          }
        });
      }
      launchAction(M) {
        switch (M?.action) {
          case "md5Hash":
            {
              const {
                str: N,
                len: O
              } = M.params || {};
              return (0, D.md5Hash)(N, O);
            }
          case "cipher":
            {
              const {
                str: P,
                key: Q,
                iv: R
              } = M.params || {};
              return (0, D.cipher)(P, Q, R);
            }
          case "decipher":
            {
              const {
                str: S,
                key: T,
                iv: U
              } = M.params || {};
              return (0, D.decipher)(S, T, U);
            }
          case "getIsHightCpu":
            {
              return this.getIsHightPerformanceCPU();
            }
          case "getIsShowFeatures":
            {
              if (h.RHZDY("fqHpW", "spqPS")) {
                if (!this.storeService.getIsPrivacyPolicyAccepted()) {
                  return false;
                }
                if (this.configService.checkIsAppForceUpdate(false)) {
                  return false;
                }
                return this.utilsService.checkIsGrayHit(M.params || {});
              } else {
                this.configService.mainWindowReady$.pipe((0, h.take)(1)).subscribe(() => {
                  this.handleMainWindowInitShow(false);
                });
              }
            }
          case "getAccounts":
            {
              return this.storeService.getSavedAccounts();
            }
          case "switchAccount":
            {
              const {
                mid: W
              } = M.params || {};
              this.handleSwitchAccount(W);
            }
        }
      }
      getIsHightPerformanceCPU() {
        if (!E.IS_WIN) {
          return true;
        }
        const M = J.default.cpus();
        return M.length > 8 && M[0].speed > 3000;
      }
      handleSwitchAccount(M) {
        const N = this.storeService.getSavedAccounts();
        const O = this.storeService.getUserInfo();
        (0, F.ensureDirSync)(E.ACCOUNTS_DIR);
        const P = (0, G.join)(E.USER_DATA_DIR, "config.json");
        if (O.mid) {
          const S = (0, G.join)(E.ACCOUNTS_DIR, O.mid + ".json");
          if ((0, F.existsSync)(S)) {
            (0, F.removeSync)(S);
          }
          (0, F.moveSync)(P, S);
          if (N.every(T => T.mid !== O.mid)) {
            N.push({
              label: O.uname + " (" + O.mid + ")",
              mid: O.mid,
              face: O.face,
              uname: O.uname
            });
          }
        }
        const Q = (0, G.join)(E.ACCOUNTS_DIR, M + ".json");
        if ((0, F.existsSync)(Q)) {
          (0, F.removeSync)(P);
          (0, F.moveSync)(Q, P);
        }
        const R = N.findIndex(T => String(T.mid) === String(M));
        if (h.XrPkh(R, -1)) {
          N.splice(R, 1);
        }
        this.storeService.setSavedAccounts(N);
      }
      deleteSavedAccount(M) {
        const N = (0, G.join)(E.ACCOUNTS_DIR, M + ".json");
        if ((0, F.existsSync)(N)) {
          (0, F.removeSync)(N);
        }
        const O = this.storeService.getSavedAccounts();
        const P = O.findIndex(Q => String(Q.mid) === String(M));
        if (P > -1) {
          O.splice(P, 1);
        }
        this.storeService.setSavedAccounts(O);
        this.eventService.emitAccountsChange();
      }
      disableLocalCache(M) {
        M.use(H.default.static(G.default.resolve(__dirname, "../render"), {
          cacheControl: false,
          etag: false,
          maxAge: "0",
          setHeaders: N => {
            this.setLocalServerResHeader(null, N);
          }
        }));
        M.set("etag", false);
        M.use(this.setLocalServerResHeader);
      }
      setLocalServerResHeader(M, N, O) {
        N.setHeader("Surrogate-Control", "no-store");
        N.setHeader("Cache-Control", h.cyjqb);
        N.setHeader("Pragma", "no-cache");
        N.setHeader("Expires", "0");
        if (O) {
          O();
        }
      }
      isLoopbackAddress(M) {
        if (!M) {
          return false;
        }
        const N = M.replace(/%.*$/, "").replace(/^::ffff:/i, "");
        return N === "::1" || /^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(N);
      }
      transCodeLocalVideo(M, N) {
        const O = decodeURIComponent(N);
        if ((0, F.existsSync)(O)) {
          M.writeHead(200, {
            "Content-Type": "video/mp4"
          });
          const P = (0, F.createReadStream)(O);
          new I.default(P, this.configService.ffmpegPath).maxSize(1280, 720).videoCodec(h.znBIg).videoBitrate(800000).fps(25).sampleRate(44100).channels(2).audioBitrate(128000).format("mp4").stream().pipe(M).on("close", () => {
            this.log.error("Play local close");
          }).on("finish", () => {
            this.log.error("Play local finish");
          }).on("error", Q => {
            this.log.error("Play local", Q);
          });
        } else {
          return M.status(401).send({
            code: 1,
            message: h.qXVII
          });
        }
      }
      async handleCmdInteractive(M, N) {
        if (!this.isReqInteractive && M === "clear") {
          this.log.info(M);
          return;
        }
        if (!this.isCanInteractive) {
          if (!this.isReqInteractive) {
            if (M === h.ZKltZ) {
              this.log.info("进入交互模式~");
              this.enterPwdCount = 0;
              this.isReqInteractive = false;
              clearTimeout(this.configService.timeoutOfReqInteractive);
              this.isCanInteractive = true;
              this.eventService.emitAppLogIsCanInteractiveChange(this.isCanInteractive);
              return;
            }
            if (M === "pwd") {
              this.isReqInteractive = true;
              this.log.info(h.MpEzi);
              return true;
            }
            this.log.info(M);
            return false;
          } else {
            clearTimeout(this.configService.timeoutOfReqInteractive);
            this.configService.timeoutOfReqInteractive = setTimeout(() => {
              this.enterPwdCount = 0;
              this.isReqInteractive = false;
            }, 60000);
            this.enterPwdCount++;
            if (h.PDzRN(M, E.INTERACTIVE_PWD)) {
              this.log.info("密码正确，进入交互模式~");
              this.enterPwdCount = 0;
              this.isReqInteractive = false;
              clearTimeout(this.configService.timeoutOfReqInteractive);
              this.isCanInteractive = true;
              this.eventService.emitAppLogIsCanInteractiveChange(this.isCanInteractive);
              return false;
            } else {
              this.log.info("密码错误！");
              if (this.enterPwdCount >= 3) {
                this.log.info("需要调试PC客户端？请联系@cntower获取帮助。");
                this.enterPwdCount = 0;
                this.isReqInteractive = false;
                clearTimeout(this.configService.timeoutOfReqInteractive);
                return false;
              }
              return true;
            }
          }
        } else {
          if (M === "exit") {
            this.isCanInteractive = false;
            this.eventService.emitAppLogIsCanInteractiveChange(this.isCanInteractive);
            this.log.info(h.OBKpY);
            return false;
          }
          const S = console.log;
          try {
            console.log = this.log.info;
            this.log.info(M, "// =>");
            await N();
            return false;
          } catch (T) {
            this.log.error(this.getErrStack(T));
          } finally {
            console.log = S;
          }
        }
      }
    };
    K = k([(0, u.Injectable)(), m("design:paramtypes", [typeof (o = typeof z.ConfigService !== h.thQiQ && z.ConfigService) === "function" ? o : Object, h.JivXJ(typeof (q = typeof A.StoreService !== "undefined" && A.StoreService), "function") ? q : Object, typeof (r = typeof B.EventsService !== "undefined" && B.EventsService) === "function" ? r : Object, typeof (t = typeof C.UtilsService !== "undefined" && C.UtilsService) === h.cSNSl ? t : Object])], K);
    g.HelpService = K;
  }
});
var iz = bX({
  ""(g) {
    'use strict';

    var i = g && g.__decorate || function (R, S, T, U) {
      var V = arguments.length;
      var W = V < 3 ? S : U === null ? U = Object.getOwnPropertyDescriptor(S, T) : U;
      var X;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        W = Reflect.decorate(R, S, T, U);
      } else {
        for (var Y = R.length - 1; Y >= 0; Y--) {
          if (X = R[Y]) {
            W = (V < 3 ? X(W) : V > 3 ? X(S, T, W) : X(S, T)) || W;
          }
        }
      }
      if (V > 3 && W) {
        Object.defineProperty(S, T, W);
      }
      return W;
    };
    var j = g && g.__metadata || function (R, S) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(R, S);
      }
    };
    var k = g && g.__importDefault || function (R) {
      if (R && R.__esModule) {
        return R;
      } else {
        return {
          default: R
        };
      }
    };
    var l;
    var m;
    var n;
    var o;
    var q;
    var r;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.AuthService = undefined;
    var t = require("@nestjs/common");
    ga();
    var u = c2(g9);
    var w = gK();
    var z = io();
    var A = iu();
    var B = gP();
    var C = iw();
    var D = iy();
    var E = require("systeminformation");
    var F = require("electron");
    var G = require("rxjs");
    var H = require("fs");
    var I = require("path");
    var J = require("child_process");
    var K = k(require("os"));
    var L = k(require("md5"));
    var M = k(require("uuid-by-string"));
    var N = require("@bilibili/b-utils-core");
    dn();
    var O = c2(dm);
    fP();
    var P = c2(fO);
    var Q = class R extends u.BaseService {
      constructor(S, T, U, V, W, X) {
        super("AuthService");
        c3(this, "configService");
        c3(this, "storeService");
        c3(this, "fetchService");
        c3(this, "eventsService");
        c3(this, "gaiaService");
        c3(this, "helpService");
        c3(this, "dftDelCookies", ["SESSDATA=\"\";", "SESSDATA__ckMd5=\"\";", "DedeUserID=\"\";", "DedeUserID__ckMd5=\"\";", "bili_jct=\"\";", "bili_jct__ckMd5=\"\";"]);
        c3(this, "loginCookies", this.dftDelCookies.map(a3 => a3.split("=")[0]));
        c3(this, "checkLoginTime", Date.now());
        c3(this, "cookieCache", {});
        c3(this, "loginPartitionCksCache", {});
        c3(this, "loginPartitionCksCacheStr", {});
        this.configService = S;
        this.storeService = T;
        this.fetchService = U;
        this.eventsService = V;
        this.gaiaService = W;
        this.helpService = X;
        const {
          mainWindowReady$: Y,
          authCookiesChange$: Z,
          authOriginsChange$: a0,
          appSleepChange$: a1,
          appHeartbeat$: a2
        } = this.configService;
        Y.subscribe(() => {
          this.checkIsRefreshToken();
          this.judgeUserLoginStatus();
        });
        a1.subscribe(a3 => {
          if (!a3) {
            this.refreshUserInfo();
          }
        });
        (0, G.merge)(Z, a0).subscribe(() => {
          if (this.configService.isAppReady) {
            this.log.info("Updating cookies!");
            this.updateBiliCookie();
          }
        });
        a2.subscribe(a3 => {
          if (a3 % 300 === 0) {
            Object.entries(this.cookieCache).forEach(([a4, {
              time: a5
            }]) => {
              if (Date.now() - a5 > P.COOKIE_CACHE_TIME) {
                delete this.cookieCache[a4];
              }
            });
          }
        });
      }
      initAppAuthInfo() {
        this.initAppBuvid().then(() => {
          this.gaiaService.reportGaiaFpWhenStart();
          this.gaiaService.scheduleReportGaiaFp();
        });
        this.initAppChid();
        this.initDeviceId();
        this.initMacAddress();
        this.initSystemFp();
      }
      async initAppBuvid() {
        const T = this.storeService.getAppBuvid();
        this.log.info("App buivd: " + T);
        this.setAppBuvid(T, true);
        if (T && T !== "failed") {
          const U = this.storeService.getBuvidMark();
          this.log.info("buvidmark " + U);
          if (!U) {
            this.log.info("sync buvid to regedit");
            try {
              await (0, O.addRegValue)({
                key: P.DEFAULT_REGEDIT_PATH,
                name: "buvid",
                data: T
              });
              this.log.info("sync buvid to regedit succeed!");
              this.storeService.setBuvidMark();
            } catch (V) {
              this.log.error("sync buvid to regedit failed!", this.getErrStack(V));
            }
          }
          return;
        }
        this.log.info("no buvid");
        if (P.IS_WIN) {
          this.log.info("check buvid in regedit");
          let W;
          try {
            W = await (0, O.listRegValues)(P.DEFAULT_REGEDIT_PATH_OLD);
            if (typeof W == "object" && W.buvid) {
              this.log.info("find buvid in old regedit");
              this.setAppBuvid(W.buvid.data);
              return;
            }
          } catch (X) {
            this.log.error("check regedit old error:", this.getErrStack(X));
          }
          try {
            W = await (0, O.listRegValues)(P.DEFAULT_REGEDIT_PATH);
            if (typeof W == "object" && W.buvid) {
              this.log.info("find buvid in regedit");
              this.setAppBuvid(W.buvid.data);
              return;
            }
          } catch (Z) {
            this.log.error("check regedit error:", this.getErrStack(Z));
          }
        }
        this.log.info("notfound buvid");
        try {
          const {
            b_4: a0
          } = await this.fetchService.getBuvidInfo();
          this.setAppBuvid(a0);
        } catch (a1) {
          this.log.info("getBuvidInfo error");
          this.setAppBuvid((0, O.genBuvid4)());
        }
      }
      setAppBuvid(S, T = false) {
        this.configService.buvid = S;
        if (!S) {
          return;
        }
        if (!T) {
          this.storeService.setAppBuvid(S);
          this.log.info("set buvid in regedit");
          (0, O.addRegValue)({
            key: P.DEFAULT_REGEDIT_PATH,
            name: "buvid",
            data: S
          }).then(W => {
            this.storeService.setBuvidMark();
            this.log.info("set buvid in regedit succeed" + W.msg);
          }).catch(W => {
            this.log.error("set buvid in regedit failed " + W.msg);
          });
        }
        const U = this.storeService.getAuthCookies();
        const V = U.findIndex(W => W.name === "buvid3");
        if (V > -1) {
          U[V].value = S;
        } else {
          U.push({
            name: "buvid3",
            value: S
          });
        }
        this.storeService.setAuthCookies(U);
        if (this.configService.isAppReady) {
          this.eventsService.emitAppInfoChange();
        }
      }
      async initAppChid() {
        if (!P.IS_WIN) {
          (0, O.setRunTimeConf)({
            chid: P.CHID
          });
          return;
        }
        let S = this.storeService.getAppChid();
        if (S) {
          this.log.info("find chid in store: " + S);
          this.configService.chid = S;
          (0, O.setRunTimeConf)({
            chid: S
          });
          return;
        }
        let T;
        try {
          T = await (0, O.listRegValues)(P.LM_REGEDIT_PATH_OLD);
          if (typeof T == "object" && T.chid) {
            this.log.info("find chid in old regedit");
            S = T.chid.data;
            this.setAppChid(S);
            return;
          }
        } catch (V) {
          this.log.error("check old regedit error:", this.getErrStack(V));
        }
        try {
          T = await (0, O.listRegValues)(P.LM_REGEDIT_PATH);
          if (typeof T == "object" && T.chid) {
            this.log.info("find chid in regedit");
            S = T.chid.data;
            this.setAppChid(S);
            return;
          }
        } catch (X) {
          this.log.error("check regedit error:", this.getErrStack(X));
        }
        this.log.info("find chid in appRoot");
        try {
          const Y = (0, H.readFileSync)((0, I.join)(P.APP_EXE_DIR, "bili-config.json"), {
            encoding: "utf-8"
          });
          const Z = JSON.parse(Y);
          S = Z.CHID || Z.chid;
        } catch (a0) {
          this.log.error("readFile appRoot fail:", this.getErrStack(a0));
        }
        this.setAppChid(S);
      }
      setAppChid(S) {
        if (!S) {
          this.log.info("set chid: empty");
          return;
        }
        this.log.info("set chid succ");
        this.storeService.setAppChid(S);
        (0, O.setRunTimeConf)({
          chid: P.CHID
        });
        this.configService.chid = S;
        F.crashReporter.addExtraParameter("chid", S);
        if (this.configService.isAppReady) {
          this.eventsService.emitAppInfoChange();
        }
      }
      initDeviceId() {
        (0, E.uuid)().then(S => {
          if (S.hardware) {
            if (S.hardware.length === S.os?.length) {
              this.configService.deviceId = S.hardware;
            } else {
              this.configService.deviceId = (0, M.default)(S.hardware);
            }
          } else {
            this.configService.deviceId = S.os;
          }
          this.initAuthCookies();
          if (this.configService.isAppReady) {
            this.eventsService.emitAppInfoChange();
          }
        });
      }
      initMacAddress() {
        const S = K.default.networkInterfaces();
        const T = S.WLAN || S.en0 || [];
        const U = [...new Set(T.map(V => V.mac))];
        this.configService.macAddress = U[0];
      }
      initSystemFp() {
        this.configService.systemFp = this.storeService.getSystemFp();
        this.configService.mainWindowReady$.pipe((0, G.take)(1)).subscribe(() => {
          const {
            customConfig: S
          } = this.configService;
          if (S.disableSystemFp) {
            this.log.warn("Force disable systemFp!");
          } else {
            const T = this.storeService.getSystemFpInitTime();
            if (this.configService.systemFp && Date.now() - T < P.SYSTEM_FP_KEEP_TIME) {
              this.log.info("System-fp ready!");
              this.configService.reportFpInfo$.next();
            } else {
              this.log.info("Init system-fp!");
              const U = (0, J.fork)((0, I.join)(__dirname, "assets/bili-helper.js"));
              U.on("message", V => {
                if (V?.status === 0 && V.data) {
                  const W = V.data;
                  this.log.info("Init system-fp success!");
                  W.macs = this.configService.macAddress;
                  W.sys.machineGUID = this.configService.deviceId;
                  this.storeService.setSystemFp(W);
                  this.storeService.setSystemFpInitTime(Date.now());
                  this.configService.systemFp = W;
                  this.configService.reportFpInfo$.next();
                } else {
                  this.log.error("Init system-fp error!");
                }
              });
            }
          }
        });
      }
      getCustomCookies() {
        const S = this.storeService.getAppBuvid();
        const {
          mobi_app: T,
          platform_: U,
          device: V,
          device_id: W,
          build: X
        } = this.configService.getAppInfo();
        return [{
          name: "buvid3",
          value: S
        }, {
          name: "mobi_app",
          value: T
        }, {
          name: "platform",
          value: U
        }, {
          name: "device",
          value: V
        }, {
          name: "device_id",
          value: W
        }, {
          name: "build",
          value: X
        }];
      }
      initAuthCookies() {
        const S = F.session.defaultSession;
        const T = this.storeService.getAuthCookies();
        S.cookies.get({
          url: P.BILI_URL,
          domain: ".bilibili.com"
        }).then(U => {
          U.forEach(({
            name: W,
            value: X,
            expirationDate: Y
          }) => {
            const Z = T.find(a0 => a0.name === W);
            if (!Z && !P.CUSTOM_COOKIES.includes(W)) {
              T.push({
                name: W,
                value: X,
                expirationDate: Y
              });
            }
          });
          const V = this.getCustomCookies();
          V.forEach(({
            name: W,
            value: X
          }) => {
            const Y = T.findIndex(({
              name: Z
            }) => W === Z);
            if (Y > -1) {
              T[Y] = {
                name: W,
                value: X
              };
            } else {
              T.push({
                name: W,
                value: X
              });
            }
          });
          this.storeService.setAuthCookies(T);
        });
      }
      getRequestHeaderCookie(S) {
        const T = (0, L.default)(S) + "-" + this.storeService.authCookiesCache;
        if (!this.cookieCache[T]) {
          const U = this.storeService.getAuthCookies();
          const V = U.filter(({
            name: W,
            expirationDate: X,
            isExpiredRemove: Y
          }) => {
            if (X && Math.round(Date.now() / 1000) > X) {
              if (Y) {
                this.removeCookie(W);
              }
              return false;
            }
            return W === "buvid3" || !new RegExp("(^|;\\s*)" + W + "\\s?=").test(S);
          }).map(({
            name: W,
            value: X
          }) => W + "=" + X).join("; ").trim();
          this.cookieCache[T] = {
            time: Date.now(),
            cookie: V + (V && S ? "; " : "") + S
          };
        } else {
          this.cookieCache[T].time = Date.now();
        }
        return this.cookieCache[T].cookie;
      }
      async handleLoginWindowXhr() {
        if (this.configService.isOnLoginFetch || this.storeService.getUserInfo().isLogin) {
          return;
        }
        if (Date.now() - this.checkLoginTime > 10000) {
          this.log.info("Checking login status!");
        }
        this.checkLoginTime = Date.now();
        const S = F.session.fromPartition("minilogin");
        const T = await S.cookies.get({
          url: P.BILI_URL,
          domain: ".bilibili.com"
        });
        if (T.some(U => U.name === "bili_jct" && U.value)) {
          this.log.info("Login status true, updating cookies!");
          this.configService.isOnLoginFetch = true;
          if (this.configService.loginWindow) {
            this.configService.loginWindow.close();
          }
          if (this.configService.loginRiskWindow) {
            this.configService.loginRiskWindow.close();
          }
          const U = this.storeService.getAuthCookies();
          T.forEach(({
            name: V,
            value: W,
            expirationDate: X
          }) => {
            if (![...P.CUSTOM_COOKIES, ...P.LOGIN_CUSTOM_COOKIES].includes(V)) {
              const Y = U.findIndex(Z => Z.name === V);
              if (!~Y) {
                U.push({
                  name: V,
                  value: W,
                  expirationDate: X
                });
              } else if (this.loginCookies.includes(V)) {
                U[Y] = {
                  name: V,
                  value: W,
                  expirationDate: X
                };
              }
            }
          });
          this.storeService.setAuthCookies(U);
          try {
            this.log.info("Get user info!");
            const V = await this.fetchService.getUserInfo();
            if (V.isLogin) {
              this.log.info("Login success!");
              this.storeService.setUserInfo(V);
              this.configService.userLoginChange$.next(true);
              this.eventsService.emitUserLogin();
              this.eventsService.emitUserInfoChange(V);
            } else {
              this.log.info("Get user failed!");
            }
            this.configService.isOnLoginFetch = false;
            this.configService.loginWinStatusChange$.next(V.isLogin);
          } catch (W) {
            this.log.info("Get user error: ", W.stack || W.message);
            this.configService.isOnLoginFetch = false;
            this.configService.loginWinStatusChange$.next(false);
          }
          S.clearStorageData({
            storages: ["cookies"]
          });
        }
      }
      async refreshUserInfo() {
        try {
          const S = this.storeService.getUserInfo();
          const T = await this.fetchService.getUserInfo();
          if (!T.isLogin) {
            if (S.isLogin) {
              this.handleUserLogout();
              return {};
            }
          }
          this.storeService.setUserInfo(T);
          if (!(0, N.isDeepEqual)(S, T)) {
            this.eventsService.emitUserInfoChange(T);
          }
          return T;
        } catch (U) {
          this.log.error("Refresh userInfo error:", this.getErrStack(U));
        }
      }
      getLoginPartitionCookies(S = false) {
        if (!this.loginPartitionCksCache[this.configService.buvid]) {
          const T = [...this.getCustomCookies(), {
            name: "appkey",
            value: P.APP_KEY
          }, {
            name: "device_name",
            value: encodeURIComponent(this.configService.deviceName)
          }];
          this.loginPartitionCksCache[this.configService.buvid] = T;
          this.loginPartitionCksCacheStr[this.configService.buvid] = T.map(({
            name: U,
            value: V
          }) => U + "=" + V).join("; ");
        }
        return (S ? this.loginPartitionCksCacheStr : this.loginPartitionCksCache)[this.configService.buvid];
      }
      setMiniLoginBuvid() {
        const S = F.session.fromPartition("minilogin");
        const T = this.getLoginPartitionCookies();
        T.forEach(({
          name: U,
          value: V
        }) => {
          S.cookies.set({
            url: P.BILI_URL,
            domain: ".bilibili.com",
            name: U,
            value: V
          });
        });
      }
      handleUserLogout() {
        const S = this.storeService.getUserInfo();
        if (!S.isLogin) {
          return;
        }
        this.configService.logoutMid = String(S.mid);
        this.fetchService.postUserLogout().then(T => {
          if (T?.code === 0) {
            this.clearAccountInfo(T.headers?.["set-cookie"] || T.headers?.["Set-Cookie"] || [], true);
          } else {
            this.clearAccountInfo(this.dftDelCookies, true);
          }
        }).catch(() => this.clearAccountInfo(this.dftDelCookies, true));
      }
      clearAccountInfo(S, T = false) {
        const U = [];
        let V = this.storeService.getAuthCookies();
        S.forEach(W => {
          const [X, Y] = W.split(";")[0].split("=");
          U.push({
            name: X,
            value: Y,
            expirationDate: -1
          });
          V = V.filter(Z => Z.name !== X);
        });
        this.cookieCache = {};
        this.storeService.setAuthCookies(V);
        this.storeService.deleteUserInfo();
        this.storeService.setRefreshToken("");
        this.deleteBiliCookie(U).then(() => {
          if (T) {
            this.configService.userLoginChange$.next(false);
            this.eventsService.emitUserLogout();
            this.eventsService.emitUserInfoChange({});
          }
        });
      }
      async deleteBiliCookie(S) {
        return new Promise(U => {
          const V = F.session.defaultSession;
          const W = [P.BILI_URL, ...this.configService.biliAuthOrigins];
          S.forEach(({
            name: X,
            value: Y,
            expirationDate: Z
          }) => {
            V.cookies.set({
              url: P.BILI_URL,
              domain: ".bilibili.com",
              name: X,
              value: Y,
              expirationDate: Z
            });
            V.cookies.set({
              url: P.BILI_GAME_URL,
              domain: ".biligame.com",
              name: X,
              value: Y,
              expirationDate: Z
            });
            W.forEach(a0 => V.cookies.set({
              url: a0,
              name: X,
              value: Y,
              expirationDate: Z
            }));
          });
          setTimeout(() => {
            Promise.all(W.map(X => V.cookies.get({
              url: X,
              name: "SESSDATA"
            }))).then(X => {
              const Y = X.some(Z => !!Z.length);
              this.log.debug("Session remaind: ", Y);
              if (Y) {
                this.clearAppCookies();
              }
              U(true);
            });
          }, 800);
        });
      }
      async updateBiliCookie() {
        const S = F.session.defaultSession;
        const T = this.storeService.getAuthCookies();
        await Promise.allSettled(T.map(({
          name: U,
          value: V
        }) => {
          return new Promise(async W => {
            try {
              await S.cookies.set({
                url: P.BILI_URL,
                domain: ".bilibili.com",
                name: U,
                value: V
              });
              await S.cookies.set({
                url: P.BILI_GAME_URL,
                domain: ".biligame.com",
                name: U,
                value: V
              });
              const X = this.configService.biliAuthOrigins.filter(Y => !Y.includes(".bilibili.com"));
              await Promise.allSettled(X.map(Y => S.cookies.set({
                url: Y,
                name: U,
                value: V
              })));
            } finally {
              W(true);
            }
          });
        }));
      }
      async clearAppCookies() {
        await F.session.fromPartition("minilogin").clearStorageData({
          storages: ["cookies"]
        });
        await F.session.defaultSession.clearStorageData({
          storages: ["cookies"]
        });
        this.storeService.deleteAuthCookies();
        const S = this.getCustomCookies();
        this.storeService.setAuthCookies(S);
      }
      async setCookies(S) {
        const U = this.storeService.getAuthCookies();
        S.forEach(({
          name: V,
          value: W,
          expirationDate: X,
          isExpiredRemove: Y
        }) => {
          W = String(W);
          const Z = U.findIndex(a0 => a0.name === V);
          if (Z > -1) {
            U[Z] = {
              name: V,
              value: W,
              expirationDate: X,
              isExpiredRemove: Y
            };
          } else {
            U.push({
              name: V,
              value: W,
              expirationDate: X,
              isExpiredRemove: Y
            });
          }
        });
        this.storeService.setAuthCookies(U);
      }
      async removeCookie(S) {
        const T = this.storeService.getAuthCookies();
        const U = T.findIndex(V => V.name === S);
        if (U > -1) {
          T.splice(U, 1);
        }
        this.storeService.setAuthCookies(T);
        try {
          const V = F.session.defaultSession;
          V.cookies.remove(P.BILI_URL, S);
          V.cookies.remove(P.BILI_GAME_URL, S);
          this.configService.biliAuthOrigins.forEach(W => V.cookies.remove(W, S));
        } catch {}
      }
      checkIsRefreshToken() {
        const S = this.storeService.getUserInfo();
        if (!S.isLogin) {
          return;
        }
        const T = this.storeService.getRefreshToken();
        if (!T) {
          return;
        }
        this.log.info("Checking refresh BiliConf.");
        this.fetchService.getIsRefreshToken().then(({
          refresh: U
        }) => {
          if (U) {
            this.refreshCookeAndToken();
          } else {
            this.log.info("BiliConf valid!");
          }
        }).catch(() => {
          this.log.error("Checking refresh BiliConf error!");
        });
      }
      async refreshCookeAndToken() {
        const S = this.storeService.getRefreshToken();
        const T = this.storeService.getUserInfo();
        if (!S || !T.isLogin) {
          return;
        }
        try {
          this.log.info("Refresh BiliConf.");
          const V = "" + T.mid + (0, N.randomId)(5);
          const W = (0, O.md5Hash)(String(Math.random()));
          const X = (0, O.md5Hash)(String(Math.random()));
          const {
            encrypted: Y,
            authTag: Z
          } = (0, O.encrypt)(V, W, X);
          const a0 = "" + (0, N.randomId)(10, "0-9abcdef") + W + X + Z + Y;
          const a1 = await this.fetchService.getRefreshCsrf(a0);
          const a2 = a1.match(/<div\sid="2-value">(\w*)<\/div>/) && RegExp.$1;
          if (a2) {
            const a3 = a2.split("");
            const a4 = a3.splice(0, 32).join("");
            a3.splice(0, 5);
            const a5 = a3.splice(0, 32).join("");
            a3.splice(0, 5);
            const a6 = a3.length;
            const a7 = a3.splice(a6 - 32, a6).join("");
            const a8 = a3.length;
            a3.splice(a8 - 5, a8);
            const a9 = a3.join("");
            const aa = (0, O.decrypt)(a9, a7, a4, a5);
            const ab = await this.fetchService.postRefreshToken(aa, S);
            const {
              headers: ac,
              data: {
                refresh_token: ad
              } = {}
            } = ab;
            if (ad) {
              this.storeService.setRefreshToken(ad);
            }
            const ae = this.getHeaderSetCookies(ac || {});
            if (ae.length) {
              const af = this.storeService.getAuthCookies();
              ae.forEach(({
                name: ag,
                value: ah,
                expirationDate: ai
              }) => {
                const aj = af.findIndex(ak => ak.name === ag);
                if (!~aj) {
                  af.push({
                    name: ag,
                    value: ah,
                    expirationDate: ai
                  });
                } else if (this.loginCookies.includes(ag)) {
                  af[aj] = {
                    name: ag,
                    value: ah,
                    expirationDate: ai
                  };
                }
              });
              this.storeService.setAuthCookies(af);
              this.log.info("Confirm refesh bili.");
              this.fetchService.postConfirmRefreshToken(S);
            }
          } else {
            this.log.error("Refresh BiliConf error, c!");
          }
        } catch (ag) {
          this.log.error("Refresh BiliConf error!", this.getErrStack(ag));
        }
      }
      getHeaderSetCookies(S) {
        const T = [];
        let U = S["set-cookie"] || S["Set-Cookie"] || [];
        if (typeof U === "string") {
          U = [U];
        }
        U.forEach(V => {
          const [W, X] = V.split(";")[0].split("=");
          let Y = NaN;
          const Z = V.match(/Expires=\s?([\w,\s:]*);?/) && RegExp.$1;
          if (Z) {
            const a0 = new Date(Z).getTime();
            if (a0) {
              Y = Math.round(a0 / 1000);
            }
          }
          T.push({
            name: W,
            value: X,
            ...(Y ? {
              expirationDate: Y
            } : {})
          });
        });
        return T;
      }
      judgeUserLoginStatus() {
        this.log.info("Judge login status!");
        this.fetchService.getUserInfo().then(S => {
          this.log.info("Login status: ", S.isLogin);
          if (S.isLogin) {
            this.storeService.setUserInfo(S);
          } else {
            const T = this.storeService.getUserInfo();
            if (T.isLogin) {
              this.handleUserLogout();
            }
          }
        }).catch(S => {
          this.log.error("Judge login error!", this.getErrStack(S));
        });
      }
      askForMediaAccess(S) {
        return F.systemPreferences.askForMediaAccess(S);
      }
      getMediaAccessStatus(S) {
        return F.systemPreferences.getMediaAccessStatus(S);
      }
      getUserMid() {
        const S = this.storeService.getUserInfo();
        return S.mid?.toString();
      }
      signQueryParams(S, T = false) {
        const U = "54e6a9a31b911cd5fc0daa66ebf94bc4";
        S.appkey = P.APP_KEY;
        S.build = this.configService.build;
        S.ts = Date.now();
        const V = (0, N.stringifyQueryString)(S).split("&").sort().join("&").replace(/('|!|\(|\))/g, W => escape(W)).replace(/\*/g, "%2A");
        S.sign = (0, L.default)(V + U).toLocaleLowerCase();
        if (T) {
          return S;
        } else {
          return (0, N.stringifyQueryString)(S);
        }
      }
      handleSwitchAccount(S) {
        this.helpService.handleSwitchAccount(S);
        this.configService.isOnLoginFetch = false;
        this.storeService.initSecureStore();
        if (S) {
          this.updateBiliCookie();
        } else {
          this.clearAccountInfo(this.dftDelCookies);
        }
        this.configService.switchAccount$.next();
        if (!S) {
          this.configService.requestPopLoginWindow$.next();
        }
      }
    };
    Q = i([(0, t.Injectable)(), j("design:paramtypes", [typeof (l = typeof w.ConfigService !== "undefined" && w.ConfigService) === "function" ? l : Object, typeof (m = typeof z.StoreService !== "undefined" && z.StoreService) === "function" ? m : Object, typeof (n = typeof A.FetchService !== "undefined" && A.FetchService) === "function" ? n : Object, typeof (o = typeof B.EventsService !== "undefined" && B.EventsService) === "function" ? o : Object, typeof (q = typeof C.GaiaService !== "undefined" && C.GaiaService) === "function" ? q : Object, typeof (r = typeof D.HelpService !== "undefined" && D.HelpService) === "function" ? r : Object])], Q);
    g.AuthService = Q;
  }
});
var iA = {};
bY(iA, {
  ReportBase: () => iE
});
var iB;
var iC;
var iD;
var iE;
var iF = bW({
  ""() {
    ga();
    dn();
    gJ();
    fP();
    iB = require("electron");
    iC = c1(require("os"));
    iD = c1(require("protobufjs"));
    iE = class extends ca {
      constructor(h, i, j, k, l) {
        super(h);
        this.authService = i;
        this.configService = j;
        this.fetchService = k;
        this.storeService = l;
        c3(this, "logSendBuffer", []);
        c3(this, "isLogReportError", false);
        c3(this, "logSN", 0);
        c3(this, "retryCount", 0);
        c3(this, "retryLimit", 5);
        c3(this, "retryDuration", 1000);
        c3(this, "fts", Date.now());
        c3(this, "network", iB.net.isOnline ? "OTHERNET" : "OFFLINE");
        c3(this, "logReportRoot", null);
        c3(this, "isLogReportReady", false);
        c3(this, "processMetricSamples", []);
      }
      initLogReport(h = true) {
        if (h) {
          this.log.info("Initing log-report!");
        }
        iD.default.load(ed, (i, j) => {
          if (i) {
            this.log.error("Init log-report error:", i.stack || i.message);
            if (this.retryCount < this.retryLimit) {
              this.retryCount++;
              setTimeout(() => {
                this.log.info("Retry init log-report!");
                this.initLogReport(false);
              }, this.retryDuration);
            } else {
              this.log.error("Retry init log-report error!");
              this.isLogReportError = true;
            }
            return;
          }
          this.logReportRoot = j;
          this.isLogReportReady = true;
          this.sendLogReport();
          this.log.info("Init log-report success!");
        });
      }
      sendLogReport() {
        if (this.isLogReportReady) {
          this.logSendBuffer.forEach(h => h.uploadTime = Date.now());
          this.handleReportInfo(this.logSendBuffer);
          this.logSendBuffer = [];
        }
      }
      handleReportInfo(h = []) {
        const i = this.logReportRoot.lookupType("AppEvent");
        const j = this.logReportRoot.lookupType("EventList");
        const k = [];
        h.forEach(q => {
          const r = i.create(q);
          const t = i.encode(r).finish();
          const {
            logId: u,
            eventId: w
          } = q;
          k.push({
            logId: u,
            eventId: w,
            body: t
          });
        });
        const l = j.create({
          events: k
        });
        const m = j.encode(l).finish();
        const n = this.getIsShowReportLog();
        let o = [];
        if (n) {
          h.forEach(({
            eventId: q,
            logId: r,
            mid: t,
            ctime: u,
            sn: w,
            eventCategory: z,
            retrySendCount: A,
            pageType: B,
            extendedFields: C
          }) => {
            this.log.debug(" ----------- " + q + " -----------");
            const D = {
              logId: r,
              mid: t,
              ctime: u,
              sn: w,
              eventCategory: z,
              retrySendCount: A,
              pageType: B,
              ...C
            };
            delete D.isPreInstall;
            this.log.debug("Msg:", JSON.stringify(D));
          });
          o = k.map(q => q.logId + ":" + q.eventId);
        }
        this.fetchService.postLogReport(m).then(q => {
          if (q.status === 429) {
            this.log.error("Report 429!");
            if (n) {
              this.log.info("Report error 429:", o);
            }
          } else if (!this.configService.isReportStatusInited && q.status === 200) {
            this.configService.isReportStatusInited = true;
            dc({
              reportSuccess: true
            });
          }
        }).catch(q => {
          if (n) {
            this.log.error("Report error:", q.stack || q.message, o);
          }
        });
      }
      getIsShowReportLog() {
        return cu || this.configService.customConfig.showReportLog;
      }
      getAppRuntimeInfo() {
        const h = {
          network: gj[this.network],
          version: ch,
          versionCode: this.configService.build,
          logver: "1.0.0"
        };
        return h;
      }
      getAppInfo() {
        const {
          isCanReportPrivate: h,
          systemFp: i
        } = this.configService;
        const j = h ? JSON.stringify(i) : "{}";
        return {
          appId: 112,
          platform: dt ? 4 : du ? 8 : dv ? 9 : 4,
          buvid: this.configService.buvid,
          chid: this.configService.chid,
          deviceId: this.configService.deviceId,
          model: iC.default.platform(),
          osver: iC.default.version(),
          fts: this.fts,
          bilifp: j,
          brand: this.configService.chid,
          sessionId: this.configService.sessionId
        };
      }
      initPerformanceSamps() {
        this.log.info("Initing performance samples!");
        this.processMetricSamples = [];
        iB.app.getAppMetrics();
        this.takeProcessMatricSample();
        clearInterval(this.configService.intervalOfTakeSamples);
        this.configService.intervalOfTakeSamples = setInterval(() => {
          this.takeProcessMatricSample();
          if (this.processMetricSamples.length * dT >= dU) {
            this.reportPerformanceInfo();
          }
        }, dT);
      }
      takeProcessMatricSample() {
        const h = new gF();
        this.processMetricSamples.push(h);
      }
      reportPerformanceInfo() {
        const j = {
          isAppSlept: this.configService.isAppSleeping,
          samples: this.processMetricSamples.length
        };
        j.systemMemoryTotal = process.getSystemMemoryInfo().total;
        const k = this.processMetricSamples.map(m => m.cpu);
        const l = this.processMetricSamples.map(m => m.memory);
        j.cpuMin = Math.min(...k);
        j.cpuMax = Math.max(...k);
        j.cpuMean = k.reduce((m, n) => m + n, 0) / k.length;
        j.memoryMin = Math.min(...l);
        j.memoryMax = Math.max(...l);
        j.memoryMean = l.reduce((m, n) => m + n, 0) / l.length;
        this.report({
          type: "click",
          spm_id: "main.main.performance.0"
        }, {
          msg: JSON.stringify(j)
        });
        this.initPerformanceSamps();
      }
    };
  }
});
var iG = {};
bY(iG, {
  UploadLog: () => iK
});
var iH;
var iI;
var iJ;
var iK;
var iL = bW({
  ""() {
    iH = c1(require("node-fetch"));
    iI = c1(require("fs/promises"));
    iJ = require("url");
    ga();
    fP();
    iK = class extends ca {
      constructor(h) {
        super("UpLoadLog");
        c3(this, "configService");
        this.configService = h;
      }
      async upLoad(h) {
        const i = await this.preload(h.preload);
        const j = await this.getUploadID(i);
        await this.putSplitFile({
          uploadId: j,
          ...i
        }, h.file);
        const k = await this.combineFile({
          uploadId: j,
          profile: h.preload.profile,
          name: h.preload.name,
          preloadRes: i
        });
        if (k?.OK !== 1) {
          this.log.error("upload main log combine file error");
          this.log.error(k);
          return;
        }
        this.log.info(k);
        await this.sendToLaser({
          preloadRes: i,
          options: h
        });
      }
      async preload(h = {
        r: "upos",
        profile: "",
        name: ""
      }) {
        if (!h.name) {
          throw new Error("need upload file name");
        }
        const i = new iJ.URLSearchParams(h);
        const j = this.configService.proxyAgent;
        const k = await (0, iH.default)("https://member.bilibili.com/preupload?" + i.toString(), {
          ...(j && {
            agent: j
          })
        }).then(l => l.json());
        return {
          uploadUrl: "http:" + k.endpoint + k.upos_uri.replace("upos:/", ""),
          auth: k.auth,
          bizId: k.biz_id,
          uposUri: k.upos_uri
        };
      }
      async getUploadID(h) {
        const i = h.uploadUrl + "?uploads&output=json";
        const j = this.configService.proxyAgent;
        const k = await (0, iH.default)(i, {
          method: "POST",
          headers: {
            "X-Upos-Auth": h.auth
          },
          ...(j && {
            agent: j
          })
        }).then(l => l.json());
        return k.upload_id;
      }
      async putSplitFile(h, i) {
        const j = await iI.default.readFile(i);
        const k = j.length;
        const l = h.uploadUrl + "?partNumber=1&uploadId=" + h.uploadId + "&chunk=0&chunks=1&size=" + k + "&start=0&end=" + k + "&total=" + k;
        const m = this.configService.proxyAgent;
        await (0, iH.default)(l, {
          method: "PUT",
          headers: {
            "X-Upos-Auth": h.auth,
            "Content-Type": "application/octet-stream"
          },
          body: j,
          ...(m && {
            agent: m
          })
        });
      }
      async combineFile(h) {
        const i = h.preloadRes.uploadUrl + "?output=json&name=" + h.name + "&profile=" + h.profile + "&uploadId=" + h.uploadId + "&biz_id=" + h.preloadRes.bizId;
        const j = this.configService.proxyAgent;
        const k = await (0, iH.default)(i, {
          method: "POST",
          headers: {
            "X-Upos-Auth": h.preloadRes.auth,
            "Content-Type": "application/json; charset=UTF-8"
          },
          ...(j && {
            agent: j
          })
        }).then(l => l.json());
        return k;
      }
      async sendToLaser(h) {
        const i = new iJ.URLSearchParams({
          mid: h.options.user.mid,
          buvid: h.options.user.buvid,
          app_key: du ? "pc_electron_mac" : "bili_win",
          url: h.preloadRes.uposUri
        });
        const j = "https://app.bilibili.com/x/resource/laser2?" + i.toString();
        const k = this.configService.proxyAgent;
        const l = await (0, iH.default)(j, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          ...(k && {
            agent: k
          })
        }).then(m => m.json());
        this.log.info(l);
      }
    };
  }
});
var iM = bX({
  ""(g) {
    'use strict';

    var i = g && g.__decorate || function (L, M, N, O) {
      var P = arguments.length;
      var Q = P < 3 ? M : O === null ? O = Object.getOwnPropertyDescriptor(M, N) : O;
      var R;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        Q = Reflect.decorate(L, M, N, O);
      } else {
        for (var S = L.length - 1; S >= 0; S--) {
          if (R = L[S]) {
            Q = (P < 3 ? R(Q) : P > 3 ? R(M, N, Q) : R(M, N)) || Q;
          }
        }
      }
      if (P > 3 && Q) {
        Object.defineProperty(M, N, Q);
      }
      return Q;
    };
    var j = g && g.__metadata || function (L, M) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(L, M);
      }
    };
    var k;
    var l;
    var m;
    var n;
    var o;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.ReportService = undefined;
    var q = require("@nestjs/common");
    var r = iz();
    var t = gK();
    var u = iu();
    var w = io();
    var z = gP();
    iF();
    var A = c2(iA);
    var B = require("@bilibili/b-utils-core");
    var C = require("electron");
    iL();
    var D = c2(iG);
    dn();
    var E = c2(dm);
    im();
    var F = c2(il);
    fP();
    var G = c2(fO);
    var H = require("path");
    gJ();
    var I = c2(gI);
    var J = require("fs-extra");
    var K = class L extends A.ReportBase {
      constructor(M, N, O, P, Q) {
        super("ReportService", M, N, O, P);
        c3(this, "authService");
        c3(this, "configService");
        c3(this, "fetchService");
        c3(this, "storeService");
        c3(this, "eventsService");
        c3(this, "reportEventCategory", I.ReportEventCategory);
        c3(this, "tempLogPath", (0, H.join)(C.app.getPath("temp") || C.app.getPath("userData")));
        c3(this, "tempLogFile", (0, H.join)(this.tempLogPath, "bili.log"));
        c3(this, "isReportLogPrepared", false);
        c3(this, "initReportLogTime", Date.now());
        this.authService = M;
        this.configService = N;
        this.fetchService = O;
        this.storeService = P;
        this.eventsService = Q;
        const {
          beforeQuitApp$: S,
          reportFpInfo$: T,
          appReady$: U,
          splashWindowReady$: V,
          mainWindowReady$: W,
          onOpenInBrowser$: X,
          appConfigUpdated$: Y
        } = this.configService;
        S.subscribe(() => this.reportAppQuitEvents());
        T.subscribe(() => this.reportFpReady());
        U.subscribe(() => {
          this.reportAppOrWinReady("click", "main.main.main-precess.app-ready.click");
          const {
            restrict: Z
          } = this.configService.runtimeConfig;
          if (Z) {
            this.reportElevateRestart();
            (0, E.setRunTimeConf)({
              restrict: false
            });
          }
        });
        V.subscribe(() => {
          if (!this.configService.isAppSlept) {
            this.reportAppOrWinReady("SYSTEM", "app.main.splashWindowReady.sys");
          } else {
            this.reportAppOrWinReady("click", "main.main.main-precess.splash-ready.click");
          }
        });
        W.subscribe(() => {
          if (!this.configService.isAppSlept) {
            this.reportAppOrWinReady("SYSTEM", "app.main.mainWindowReady.sys");
          } else {
            this.reportAppOrWinReady("click", "main.main.main-precess.main-ready.click");
          }
          if (this.storeService.getIsForceRelaunch()) {
            this.storeService.setIsForceRelaunch(false);
            this.reportForceRelaunch();
          }
        });
        X.subscribe(Z => this.reportOpenInBrowser(Z));
        Y.subscribe(() => this.reportMainAppLog(true));
      }
      report(M, N) {
        if (this.isLogReportError) {
          return;
        }
        if (!M || !M.type) {
          console.error("Option and options.type field are required!");
          return;
        }
        if (!M.spm_id && (!M.a || !M.b)) {
          console.error("spm_id or a.b field is required!");
          return;
        }
        const {
          type: O,
          spm_id: P,
          a: Q,
          b: R,
          c = 0,
          d = 0,
          e: S
        } = M;
        const T = P || Q + "." + R + "." + c + "." + d + (S ? "." + S : "");
        const U = O.toLowerCase() === "show" ? "APPEAR" : O.toUpperCase();
        const V = {
          eventId: this.transformEventId(T, O),
          logId: this.configService.customConfig.isTestLogReport ? "023694" : "001538",
          mid: this.authService.getUserMid(),
          ctime: Date.now(),
          sn: this.logSN++,
          snGenTime: Date.now(),
          retrySendCount: this.retryCount,
          pageType: N.pageType || 1,
          eventCategory: this.reportEventCategory[U],
          appInfo: this.getAppInfo(),
          runtimeInfo: this.getAppRuntimeInfo(),
          extendedFields: this.transformReportInfo(N.msg),
          appPageViewInfo: N.appPageViewInfo,
          appExposureInfo: N.appExposureInfo,
          appPlayerInfo: N.appPlayerInfo
        };
        this.logSendBuffer.push(V);
        this.sendLogReport();
      }
      reportCustomData(M, N) {
        if (this.isLogReportError) {
          return;
        }
        if (!M || !N?.spm_id) {
          console.error("type and info.spm_id fields are required!");
          return;
        }
        const O = M.toLowerCase() === "show" ? "APPEAR" : M.toUpperCase();
        const P = {
          eventId: this.transformEventId(N.spm_id, M),
          logId: this.configService.customConfig.isTestLogReport ? "023694" : "001538",
          mid: this.authService.getUserMid(),
          ctime: Date.now(),
          sn: this.logSN++,
          snGenTime: Date.now(),
          retrySendCount: this.retryCount,
          pageType: N.pageType || 1,
          eventCategory: this.reportEventCategory[O],
          appInfo: this.getAppInfo(),
          runtimeInfo: this.getAppRuntimeInfo(),
          extendedFields: this.transformReportInfo(N.msg),
          appPageViewInfo: N.appPageViewInfo || {},
          appExposureInfo: N.appExposureInfo || {},
          appPlayerInfo: N.appPlayerInfo || {}
        };
        this.logSendBuffer.push(P);
        this.sendLogReport();
      }
      transformReportInfo(M) {
        let N = {};
        try {
          if ((0, B.isStr)(M)) {
            N = JSON.parse(M);
          }
        } catch (P) {
          this.log.warn("log report msg json parse [", M, "] error: ", P);
          return M;
        }
        N.isPreInstall = G.IS_PRE_INSTALL;
        const O = {};
        Object.entries(N).forEach(([Q, R]) => {
          O[Q] = (0, B.isStr)(R) ? R : JSON.stringify(R);
        });
        return O;
      }
      transformEventId(M, N) {
        M = M.replace(/_/g, "-");
        const O = M.split(".");
        const P = N.toLowerCase();
        if (N.toUpperCase() === "SYSTEM") {
          return M;
        }
        if (O.length >= 4) {
          const Q = O[O.length - 1];
          if (Q === "show" && P === "appear" || Q === "show" && P === "show" || Q === "click" && P === "click") {
            return M;
          }
        }
        return M + "." + P;
      }
      reportAppStartUpEvents(M) {
        this.report({
          type: "SYSTEM",
          spm_id: "app.active.startup.sys"
        }, {
          msg: JSON.stringify({
            equipment_id: this.configService.deviceId,
            mac: this.configService.macAddress,
            version: G.APP_VERSION,
            install_version: G.INSTALL_VERSION,
            electron_version: process.versions.electron
          })
        });
        this.report({
          type: "show",
          spm_id: "app.main.main-precess.start-info"
        }, {
          msg: JSON.stringify({
            app_hash: (0, E.getAppHash)(G.APP_CODE_DIR),
            version: G.APP_VERSION + "(" + (G.FAWKES_JOB_ID || "--") + ")",
            os_type: G.IS_WIN7 ? "win7" : G.IS_WIN8 ? "win8" : G.IS_WIN10 ? "win10" : G.IS_WIN11 ? "win11" : G.IS_MAC ? "mac" : G.IS_LINUX ? "linux" : G.IS_OHOS ? "harmonyos" : "other",
            is_arm: G.IS_ARM ? 1 : 0
          })
        });
        const N = {
          ...M,
          player_theme: this.storeService.getPlayerWindowTheme(),
          font_select: this.storeService.getSystemFontId(),
          auto_startup: C.app.getLoginItemSettings().openAtLogin,
          disable_gpu: this.storeService.getIsDisableGpu(),
          quit_by_close: this.storeService.getIsQuitByCloseMain(),
          dynamic_auto_player: this.storeService.dataStore.get(F.SCROLL_TRIGGER_INLINE_PLAY_ACTIVE),
          boss_shortcut: this.storeService.getBossShortcutInfo().isEnable,
          auto_update: false,
          install_directory: (0, H.dirname)(C.app.getPath("exe")),
          push_recommend: this.storeService.getAllowPushRecommend(),
          push_live: this.storeService.getAllowPushLive(),
          push_dynamic: this.storeService.getAllowPushDynamic(),
          selected_first: this.storeService.getIsSelectedFirst()
        };
        this.report({
          type: "SYSTEM",
          spm_id: "main.system.set.sys"
        }, {
          msg: JSON.stringify(N)
        });
      }
      reportAppQuitEvents() {
        const {
          appStartTime: M,
          appQuitTime: N
        } = this.configService;
        this.report({
          type: "SYSTEM",
          spm_id: "app.active.duration.sys"
        }, {
          msg: JSON.stringify({
            duration: N - M,
            startup_time: M,
            end_time: N,
            equipment_id: this.configService.deviceId,
            mac: this.configService.macAddress
          })
        });
        this.reportPerformanceInfo();
      }
      reportAppActiveEvent() {
        this.report({
          type: "SYSTEM",
          spm_id: "app.active.startup-copy.sys"
        }, {
          msg: JSON.stringify({
            equipment_id: this.configService.deviceId,
            mac: this.configService.macAddress
          })
        });
      }
      reportAppDeactiveEvent() {
        const {
          appActiveTime: M,
          appDeactiveTime: N
        } = this.configService;
        this.report({
          type: "SYSTEM",
          spm_id: "app.active.duration-copy.sys"
        }, {
          msg: JSON.stringify({
            duration: N - M,
            startup_time: M,
            end_time: N,
            equipment_id: this.configService.deviceId,
            mac: this.configService.macAddress
          })
        });
      }
      reportMainAppLog(M = false, N = false) {
        const {
          uploadLog: O
        } = this.configService.appConfig;
        if (!O) {
          return;
        }
        if (O.csUp && !M && !N || O.crashUp && !M && N || O.wlUp && !N && M) {
          const P = Date.now();
          const Q = this.storeService.getUploadLogTime();
          const R = N ? G.UPLOAD_CRASH_LOG_TIME : G.UPLOAD_MAIN_LOG_TIME;
          if (P - Q > R) {
            if (M) {
              const {
                mids: S,
                buvids: T,
                v: U
              } = O;
              if (!S?.length && !T?.length) {
                return;
              }
              const V = this.storeService.getUploadLogInfo();
              if (U === V.v) {
                return;
              }
              const W = this.storeService.getUserInfo();
              const X = this.configService.getAppInfo();
              if (!S?.includes(W.mid) && !T?.includes(X.build)) {
                return;
              }
              this.log.info("Report log by wl config");
              this.storeService.setUploadLogInfo(O);
            }
            if (N) {
              this.log.info("Report log by process-crash");
            } else {
              this.log.info("Report log by cs button click");
            }
            this.storeService.setUploadLogTime(P);
            this.uploadClientLog(M);
          }
        }
      }
      savePlayerLog(M) {
        try {
          this.log.info("Prepare app log.");
          const N = new Array(80).fill("=").join("");
          (0, J.appendFileSync)(this.tempLogFile, N + "\nPlayer Log\n" + N + "\n");
          (0, J.appendFileSync)(this.tempLogFile, M);
          (0, J.appendFileSync)(this.tempLogFile, "\n\n" + N + "\nDownload Log\n" + N + "\n");
          const O = this.storeService.getDownloadPath();
          const P = (0, H.join)(O, "load_log");
          if ((0, J.existsSync)(P)) {
            (0, J.appendFileSync)(this.tempLogFile, (0, J.readFileSync)(P));
          }
          (0, J.appendFileSync)(this.tempLogFile, "\n\n" + N + "\nClient Log\n" + N + "\n");
          (0, J.appendFileSync)(this.tempLogFile, (0, J.readFileSync)((0, H.join)(C.app.getPath("logs"), "main.log")));
          this.log.info("App logs prepared:", this.tempLogFile);
          this.isReportLogPrepared = true;
        } catch (Q) {
          this.log.error("Prepare app log error!", this.formatError(Q));
        }
      }
      uploadClientLog(M) {
        this.log.info("Start upload log...");
        this.isReportLogPrepared = false;
        if ((0, J.existsSync)(this.tempLogFile)) {
          (0, J.rmSync)(this.tempLogFile);
        }
        this.eventsService.emitSavePlayerLog(M);
        this.initReportLogTime = Date.now();
        clearInterval(this.configService.intervalOfReportLog);
        this.configService.intervalOfReportLog = setInterval(() => {
          if (this.isReportLogPrepared || Date.now() - this.initReportLogTime > 10000) {
            clearInterval(this.configService.intervalOfReportLog);
            try {
              if (!(0, J.existsSync)(this.tempLogFile)) {
                return;
              }
              new D.UploadLog(this.configService).upLoad({
                preload: {
                  r: "upos",
                  name: "bili.log",
                  profile: G.IS_MAC ? "feedback/bili-mac" : "feedback/bili-win"
                },
                file: this.tempLogFile,
                user: {
                  mid: this.authService.getUserMid(),
                  buvid: this.configService.buvid
                }
              });
            } catch (O) {
              this.log.error("Upload log error:" + O.message);
            }
          }
        }, 200);
      }
      reportMainThemeChange(M) {
        this.report({
          type: "SYSTEM",
          spm_id: "app.active.themeChange.sys"
        }, {
          msg: JSON.stringify({
            theme: M
          })
        });
      }
      reportPlayerThemeChange(M) {
        this.report({
          type: "click",
          spm_id: "app.player.theme.switch"
        }, {
          msg: JSON.stringify({
            theme: M
          })
        });
      }
      reportChildProcessGone(M) {
        this.report({
          type: "click",
          spm_id: "app.main.crash.sys"
        }, {
          msg: JSON.stringify(M)
        });
      }
      reportRenderProcessGone(M) {
        this.report({
          type: "click",
          spm_id: "app.render.crash.sys"
        }, {
          msg: JSON.stringify(M)
        });
        this.reportMainAppLog(false, true);
      }
      reportCrashDialogShow(M) {
        this.report({
          type: "show",
          spm_id: "main.main.crash.dialog.show"
        }, {
          msg: JSON.stringify(M)
        });
      }
      reportUpdateError(M) {
        this.report({
          type: "click",
          spm_id: "main.main.update-error.0"
        }, {
          msg: JSON.stringify(M)
        });
      }
      reportElevateRestart() {
        this.report({
          type: "click",
          spm_id: "main.main.crash.elevate-restart"
        }, {
          msg: JSON.stringify({})
        });
      }
      reportForceRelaunch() {
        this.report({
          type: "click",
          spm_id: "main.main.main-page.force-relaunch"
        }, {
          msg: JSON.stringify({})
        });
      }
      reportAppOrWinReady(M, N) {
        const {
          isAppSlept: O,
          appStartTime: P,
          appAwakeTime: Q
        } = this.configService;
        const R = O ? Q : P;
        let S = Date.now();
        if (N.includes("app-ready") && global.appReadyTime) {
          S = global.appReadyTime;
        } else if (N.includes("splashWindowReady") && global.splashReadyTime) {
          S = global.splashReadyTime;
        } else if (N.includes("mainWindowReady") && global.mainWindowReadyTime) {
          S = global.mainWindowReadyTime;
        }
        this.report({
          type: M,
          spm_id: N
        }, {
          msg: JSON.stringify({
            duration: S - R
          })
        });
      }
      reportAppLaunchTiming(M) {
        this.report({
          type: "click",
          spm_id: "main.main.main-page.launch.click"
        }, {
          msg: JSON.stringify(M)
        });
      }
      reportFpReady() {
        const {
          isCanReportPrivate: M,
          systemFp: N
        } = this.configService;
        if (M && N) {
          this.report({
            type: "SYSTEM",
            spm_id: "app.active.fpready.sys"
          }, {
            msg: JSON.stringify(N)
          });
        }
      }
      reportAgreementAction(M) {
        this.report({
          type: "click",
          spm_id: "main.main.agreement.dialog"
        }, {
          msg: JSON.stringify({
            isAgree: M
          })
        });
      }
      reportBossShortcut(M) {
        this.report({
          type: "click",
          spm_id: "main.settings.boss-key.0.click"
        }, {
          msg: JSON.stringify({
            isHide: M
          })
        });
      }
      reportLoginFrom(M) {
        this.report({
          type: "click",
          spm_id: "main.main.login.from.click"
        }, {
          msg: JSON.stringify({
            from: M
          })
        });
      }
      reportAbTestInfo(M) {
        this.report({
          type: "click",
          spm_id: "app.main.ab-test.flag.click"
        }, {
          msg: JSON.stringify(M)
        });
      }
      reportSchemeUrlOpen(M) {
        const N = {
          ...M,
          buvid: this.configService.buvid,
          mid: this.storeService.getUserInfo().mid
        };
        this.report({
          type: "click",
          spm_id: "main.play-detail.player.open.click"
        }, {
          msg: JSON.stringify(N)
        });
      }
      reportPlayLocalVideo(M) {
        this.report({
          type: "click",
          spm_id: "main.play-detail.player.local.click"
        }, {
          msg: JSON.stringify(M)
        });
      }
      reportPatchUpgrade(M) {
        this.report({
          type: "click",
          spm_id: "main.main.main-page.patch.click"
        }, {
          msg: JSON.stringify(M)
        });
      }
      reportPlayerPatch(M) {
        this.report({
          type: "click",
          spm_id: "main.main.main-page.player-patch.click"
        }, {
          msg: JSON.stringify(M)
        });
      }
      reportRenderRestricted() {
        this.report({
          type: "click",
          spm_id: "main.main.crash.restrict.click"
        }, {
          msg: JSON.stringify({})
        });
      }
      reportRenderRestrictedStart() {
        this.report({
          type: "click",
          spm_id: "main.main.crash.reset-start.click"
        }, {
          msg: JSON.stringify({})
        });
      }
      reportOpenInBrowser(M) {
        this.report({
          type: "click",
          spm_id: "main.main.main-page.open-browser.click"
        }, {
          msg: JSON.stringify(M)
        });
      }
      reportWillShowNotification(M) {
        this.report({
          type: "click",
          spm_id: "main.main.main-precess.notification-ready.click"
        }, {
          msg: JSON.stringify(M)
        });
      }
      reportShowNotification(M) {
        this.report({
          type: "click",
          spm_id: "main.main.main-precess.notification-show.click"
        }, {
          msg: JSON.stringify(M)
        });
      }
      reportFailedNotification(M) {
        this.report({
          type: "click",
          spm_id: "main.main.main-precess.notification-failed.click"
        }, {
          msg: JSON.stringify(M)
        });
      }
      reportClickNotification(M) {
        this.report({
          type: "click",
          spm_id: "main.main.main-precess.notification-click.click"
        }, {
          msg: JSON.stringify(M)
        });
      }
      reportOpenUniversalWindow(M) {
        this.report({
          type: "click",
          spm_id: "main.universal-window.browser.open.click"
        }, {
          msg: JSON.stringify(M)
        });
      }
      reportCloseUniversalWindow(M) {
        this.report({
          type: "click",
          spm_id: "main.universal-window.browser.close.click"
        }, {
          msg: JSON.stringify(M)
        });
      }
      reportOpenLiveRoomWindow(M) {
        this.report({
          type: "click",
          spm_id: "main.live-room.room.open"
        }, {
          msg: JSON.stringify({
            roomid: M
          })
        });
      }
      reportWeChatInstallStatus(M) {
        this.report({
          type: "click",
          spm_id: "main.main.main-precess.weixin-install"
        }, {
          msg: JSON.stringify({
            version: M
          })
        });
      }
    };
    K = i([(0, q.Injectable)(), j("design:paramtypes", [typeof (k = typeof r.AuthService !== "undefined" && r.AuthService) === "function" ? k : Object, typeof (l = typeof t.ConfigService !== "undefined" && t.ConfigService) === "function" ? l : Object, typeof (m = typeof u.FetchService !== "undefined" && u.FetchService) === "function" ? m : Object, typeof (n = typeof w.StoreService !== "undefined" && w.StoreService) === "function" ? n : Object, typeof (o = typeof z.EventsService !== "undefined" && z.EventsService) === "function" ? o : Object])], K);
    g.ReportService = K;
  }
});
var iN = {};
bY(iN, {
  DownloadBase: () => iS
});
var iO;
var iP;
var iQ;
var iR;
var iS;
var iT = bW({
  ""() {
    ga();
    iO = require("fs");
    iP = require("@bilibili/b-utils-core");
    fP();
    gJ();
    dn();
    iQ = require("rxjs");
    iR = c1(require("@bilibili/bili-download"));
    iS = class extends ca {
      constructor(h, i, j, k, l) {
        super(h);
        this.configService = i;
        this.fetchService = j;
        this.storeService = k;
        this.eventsService = l;
        c3(this, "videoList", []);
        c3(this, "itemList", []);
        c3(this, "taskList", []);
        c3(this, "groupList", []);
        c3(this, "biliDownload", null);
        c3(this, "downloadPath", "");
        c3(this, "isBiliDownloadReady", false);
        c3(this, "retryTimer");
        c3(this, "restartTimer");
        c3(this, "retryTimeout", 20000);
        c3(this, "reportTimeout", 120000);
        c3(this, "retryDelay", 5000);
        c3(this, "restartDelay", 1000);
        c3(this, "loadingListMap", {});
        c3(this, "isBiliDownloadFree", true);
        c3(this, "logDownloadProgress", (0, iP.throttle)(t => {
          this.log.info("Download video progress:", JSON.stringify(t));
        }, 1500));
        const {
          userLoginChange$: n,
          switchAccount$: o,
          downloadPathChange$: q,
          dlParallelNumChange$: r
        } = this.configService;
        (0, iQ.merge)(n, o, q).subscribe(() => {
          this.updatdBiliDownloadInfo();
        });
        r.subscribe(async () => {
          await this.updatdBiliDownloadInfo();
          this.handleDownloadParallelChange();
        });
        this.configService.beforeQuitApp$.subscribe(() => {
          this.log.info("Cancel downloading tasks!");
          this.clearDownloadTimer();
          this.biliDownload?.destoryDownloads();
        });
      }
      initBiliDownload() {
        this.log.info("Init bili-download!");
        const h = this.fetchService.getCookies();
        this.downloadPath = this.storeService.getDownloadPath();
        this.log.info("Download path:", this.downloadPath);
        const i = this.getDlParallelNum();
        const j = this.configService.proxyAgent;
        this.biliDownload = new iR.default({
          cookie: h,
          ua: f9,
          cachePath: this.downloadPath,
          parallel: i,
          proxyAgent: j
        });
        if (!this.isBiliDownloadReady) {
          this.isBiliDownloadReady = true;
          this.configService.biliDownloadReady$.next();
        }
        iR.default.emitter.on("loadStart", async k => {
          this.log.info("Download start event, itemId:", k.itemId);
          await this.updateDownloadVideoList();
          this.eventsService.emitDownloadStatusChange(k);
        });
        iR.default.emitter.on("loadEnd", async k => {
          this.log.info("Download end event, itemId:", k.itemId);
          await this.updateDownloadVideoList();
          this.eventsService.emitDownloadStatusChange(k);
          this.tryStartRestPendingTask();
        });
        iR.default.emitter.on("loadError", async k => {
          this.log.info("Download loadError event, itemId:" + k.data?.itemId + " code: " + k.code + " errMsg: " + k.message);
          if (k.code === 7901) {
            const l = k.data.notPlayableReason;
            this.log.info("Download PGC PlayView not playable, itemId:" + k.data?.itemId + " playVideoType:" + k.data.playVideoType + (l ? " reasonCode:" + l.code + " reasonMessage:" + l.message : ""));
          }
          await this.updateDownloadVideoList();
          if (k.data.itemId) {
            this.eventsService.emitDownloadStatusChange(k.data);
            if (k.code === 4003) {
              this.eventsService.emitDownloadStatusChange({
                ...k.data,
                errorMsg: k.message
              });
            }
          }
          this.tryStartRestPendingTask();
        });
        iR.default.emitter.on("error", async k => {
          this.log.info("Download Error, itemId: " + k.data?.itemId + " code: " + k.code + " errMsg: " + k.message);
        });
        iR.default.emitter.on("loadProgress", async k => {
          const {
            itemId: l,
            speed: m,
            progress: n,
            title: o,
            status: q
          } = k;
          const r = this.videoList.find(u => u.itemId === l);
          const t = this.loadingListMap[r.cid];
          if (t) {
            const u = Date.now();
            t.updateTime = u;
          }
          if (r && r.status !== q) {
            await this.updateDownloadVideoList();
            this.eventsService.emitDownloadStatusChange(r);
          }
          this.logDownloadProgress({
            title: o,
            taskId: l,
            speed: m,
            progress: n
          });
          this.eventsService.emitDownloadProgressChange(k);
        });
      }
      async updatdBiliDownloadInfo() {
        const h = this.fetchService.getCookies();
        this.downloadPath = this.storeService.getDownloadPath();
        const i = this.getDlParallelNum();
        const j = this.configService.proxyAgent;
        this.log.info("Update bili-download, cachePath:", this.downloadPath);
        try {
          await this.biliDownload.updataConfig({
            cookie: h,
            ua: f9,
            cachePath: this.downloadPath,
            parallel: i,
            proxyAgent: j
          });
        } catch (k) {
          this.log.error("Update bili-download error:", this.getErrStack(k));
        }
      }
      getDlParallelNum() {
        const h = this.storeService.getUserInfo();
        if (!h.isLogin || !h.vipStatus) {
          return 1;
        }
        return this.storeService.getDownloadParallelNum();
      }
      async handleDownloadParallelChange() {
        var h = {
          npubs: "pending"
        };
        const i = Object.keys(this.loadingListMap);
        const j = this.getDlParallelNum();
        try {
          if (i.length < j) {
            await this.tryStartRestPendingTask();
            await this.updateDownloadVideoList();
            this.eventsService.emitDownloadTaskListEvent("startTasks");
          } else if (i.length > j) {
            i.sort((l, m) => {
              return this.loadingListMap[l].item.createTime - this.loadingListMap[m].item.createTime;
            });
            i.sort((l, m) => {
              return (this.loadingListMap[m].item.taskOrder || 0) - (this.loadingListMap[l].item.taskOrder || 0);
            });
            const k = i.filter((l, m) => m + 1 > j);
            await Promise.allSettled(k.map(l => {
              return this.biliDownload.setStatus({
                cid: +l,
                status: h.npubs
              });
            }));
            await this.updateDownloadVideoList();
            this.eventsService.emitDownloadTaskListEvent("pauseTasks");
          }
        } catch {}
      }
      isDownloadGroup(h) {
        return h && "itemList" in h;
      }
      findDownloadGroups(h) {
        const i = [];
        const j = this.groupList.slice();
        while (j.length) {
          const k = j.shift();
          if (h.includes(k.groupId)) {
            i.push(k);
          } else {
            k.itemList.forEach(l => {
              if (this.isDownloadGroup(l)) {
                j.push(l);
              }
            });
          }
        }
        return i;
      }
      async updateDownloadVideoList() {
        var h = {
          kIqvO: "uid",
          UllUb: "uname"
        };
        try {
          if (this.downloadPath !== this.storeService.getDownloadPath()) {
            await this.updatdBiliDownloadInfo();
          }
          this.videoList = await this.biliDownload.getVideoList();
          this.videoList.sort((j, k) => (j.completionTime || j.createTime) - (k.completionTime || k.createTime));
          this.taskList = [];
          this.itemList = [];
          this.groupList = [];
          this.videoList.forEach(j => {
            j.coverImg = this.getLocalImgUrl(j.coverPath);
            const k = ["completed", "damaged"].includes(j.status);
            if (k) {
              this.itemList.push(j);
            } else {
              this.taskList.push(j);
            }
            if (k) {
              const l = this.groupList.find(m => m.groupId === j.groupId);
              if (l) {
                if (j.epInfo) {
                  l.epInfo = j.epInfo;
                  const m = this.groupList.find(n => n.groupId === j.epInfo.groupId);
                  if (m) {
                    m.title = j.epInfo.groupTitle;
                  }
                }
                l.title = j.groupTitle;
                l.itemList.push(j);
                l.totalSize = l.itemList.reduce((n, o) => n + o.totalSize, 0);
              } else {
                const n = (0, iP.pick)(j, ["groupId", "groupOrder", h.kIqvO, "uname"], true);
                n.title = j.title;
                n.coverUrl = j.groupCoverUrl;
                n.coverPath = j.groupCoverPath;
                n.coverImg = this.getLocalImgUrl(n.coverPath);
                n.itemList = [j];
                n.type = j.type;
                n.totalSize = j.totalSize;
                if (j.epInfo) {
                  n.epInfo = j.epInfo;
                  j.epInfo.groupOrder = j.groupOrder;
                  const o = this.groupList.find(q => q.groupId === j.epInfo.groupId);
                  if (!o) {
                    const q = (0, iP.pick)(j.epInfo, ["groupId", "groupOrder", "uid", h.UllUb], true);
                    q.title = j.epInfo.groupTitle;
                    q.coverUrl = j.epInfo.groupCoverUrl;
                    q.coverPath = j.epInfo.groupCoverPath;
                    q.coverImg = this.getLocalImgUrl(q.coverPath);
                    q.itemList = [];
                    q.type = j.epInfo.type;
                    q.totalSize = 0;
                    this.groupList.push(q);
                  }
                }
                this.groupList.push(n);
              }
            }
          });
          const i = [];
          this.groupList.forEach(j => {
            if (j.epInfo) {
              const k = this.groupList.find(l => l.groupId === j.epInfo.groupId);
              if (k) {
                k.itemList.push(j);
                k.totalSize += j.totalSize;
              } else {
                i.push(j);
              }
            } else {
              i.push(j);
            }
          });
          this.groupList = i;
          this.taskList.sort((j, k) => (k.taskOrder || 0) - (j.taskOrder || 0));
          this.groupList.sort((j, k) => (k.groupOrder || 0) - (j.groupOrder || 0));
          this.groupList.forEach(j => {
            j.itemList.sort((k, l) => {
              const n = k.epInfo?.p || k.p;
              const o = l.epInfo?.p || l.p;
              return n - o;
            });
            j.itemList.forEach(k => {
              if (this.isDownloadGroup(k)) {
                k.itemList.sort((m, n) => {
                  return m.p - n.p;
                });
              }
            });
          });
          this.updateRetryListMap();
          this.configService.downloadChangeEvent$.next();
        } catch (j) {
          this.log.error("Get download list error:", this.getErrStack(j));
        }
      }
      updateRetryListMap() {
        const h = this.taskList.filter(i => i.status === "downloading");
        Object.keys(this.loadingListMap).forEach(i => {
          if (h.every(j => String(j.cid) !== String(i))) {
            this.reportDownloadSizeInfo(this.loadingListMap[i].item);
            delete this.loadingListMap[i];
          }
        });
        h.forEach(i => {
          if (!this.loadingListMap[i.cid]) {
            this.loadingListMap[i.cid] = {
              item: i,
              updateTime: Date.now(),
              reportTime: Date.now()
            };
          }
        });
        if (Object.keys(this.loadingListMap).length) {
          if (!this.retryTimer) {
            this.startDownloadTimer();
          }
        } else {
          this.clearDownloadTimer();
        }
      }
      startDownloadTimer() {
        this.log.info("Start check download timer.");
        this.retryTimer = setInterval(() => {
          var h = {
            aWFlz: function (l, m) {
              return l - m;
            }
          };
          const i = Object.keys(this.loadingListMap);
          const j = Date.now();
          const k = i.map(l => {
            const {
              item: m,
              updateTime: n
            } = this.loadingListMap[l];
            return "[" + m.title + "] " + (j - n > this.retryTimeout);
          });
          this.log.info("Download list:", k.join(";"));
          i.forEach(l => {
            const {
              item: m,
              updateTime: n,
              reportTime: o
            } = this.loadingListMap[l];
            if (j - n > this.retryTimeout) {
              this.log.info("Download retry:", m.title);
              this.biliDownload.stopLoadList([m]).catch(() => {});
              this.restartTimer = setTimeout(() => {
                this.biliDownload.startLoadList([m]).catch(() => {});
              }, this.restartDelay);
            }
            if (h.aWFlz(j, o) > this.reportTimeout) {
              this.log.info("Download report:", m.title);
              this.reportDownloadSizeInfo(m);
              this.loadingListMap[l].reportTime = Date.now();
            }
          });
        }, this.retryDelay);
      }
      clearDownloadTimer() {
        this.log.info("Clear check download timer.");
        clearInterval(this.retryTimer);
        clearTimeout(this.restartTimer);
        this.retryTimer = null;
        this.restartTimer = null;
      }
      async reportDownloadSizeInfo(h) {
        const {
          cid: i,
          createTime: j,
          seasonId: k,
          aid: l,
          epid: m,
          p: n
        } = h;
        try {
          const {
            loadedSize: q,
            reportedSize = 0
          } = await this.biliDownload.getVideoItem(i);
          if (q && q > reportedSize) {
            const r = q - reportedSize;
            const t = {
              ctime: j,
              eventid: "cdn_bandwidth_info",
              fid: "pc_cache"
            };
            t.eventparam = JSON.stringify({
              cdn: r
            }).replace(/"/g, "%22");
            t.displayid = cG("" + i + j + this.configService.buvid);
            t.seasonid = k;
            t.epid = m;
            t.avid = l;
            t.cid = i;
            t.pname = n;
            const u = await this.biliDownload.getLocalPlayurl(i);
            t.url = encodeURIComponent(u?.data?.data?.dash?.video?.[0]?.baseUrl || "");
            this.fetchService.reportDownloadSize(t);
            const {
              reportedSize: w
            } = await this.biliDownload.setReportedSize({
              cid: i,
              size: r
            });
            Object.assign(h, {
              reportedSize: w
            });
          }
        } catch {}
      }
      async tryStartRestPendingTask() {
        const h = this.taskList.filter(i => ["downloading", "pending"].includes(i.status));
        if (h.length) {
          this.log.info("Start download rest items.");
          try {
            await this.biliDownload.startLoadList(h);
          } catch (i) {
            this.log.error("Start download rest task error!", this.getErrStack(i));
          }
        }
      }
      hasDownloadingTasks() {
        return this.taskList.some(h => ["connecting", "downloading", "pending"].includes(h.status));
      }
      getLocalImgUrl(h) {
        if (!h || !(0, iO.existsSync)(h)) {
          return "";
        }
        return this.configService.localServer + "/local-img?imgPath=" + h + "&token=" + global.APP_HASH_CODE;
      }
    };
  }
});
var iU = bX({
  ""(g) {
    'use strict';

    var h = {
      HUYKy: "function",
      uUwhG: function (I, J) {
        return I > J;
      },
      rhebr: "NaPHj",
      nAACD: "jOrEI",
      DtKqk: function (I, J, K) {
        return I(J, K);
      },
      ZzwSr: "fetchService",
      UTEEu: "Create download tasks error:",
      oNVvj: "pauseTasks",
      wtIfs: "deleteTasks",
      RvGvk: "Pause all download tasks error:",
      kknfY: "downloads",
      CKagF: "@nestjs/common",
      RSikP: function (I, J) {
        return I === J;
      }
    };
    var i = g && g.__decorate || function (I, J, K, L) {
      var M = arguments.length;
      var N = M < 3 ? J : L === null ? L = Object.getOwnPropertyDescriptor(J, K) : L;
      var O;
      if (typeof Reflect === "object" && typeof Reflect.decorate === h.HUYKy) {
        N = Reflect.decorate(I, J, K, L);
      } else {
        for (var P = I.length - 1; P >= 0; P--) {
          if (O = I[P]) {
            N = (M < 3 ? O(N) : h.uUwhG(M, 3) ? O(J, K, N) : O(J, K)) || N;
          }
        }
      }
      if (M > 3 && N) {
        Object.defineProperty(J, K, N);
      }
      return N;
    };
    var j = g && g.__metadata || function (I, J) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(I, J);
      }
    };
    var k = g && g.__importDefault || function (I) {
      if (I && I.__esModule) {
        return I;
      } else {
        return {
          default: I
        };
      }
    };
    var l;
    var m;
    var n;
    var o;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.DownloadService = undefined;
    var q = require(h.CKagF);
    iT();
    var r = c2(iN);
    var t = gK();
    var u = io();
    var w = gP();
    var z = iu();
    dn();
    var A = c2(dm);
    var B = require("electron");
    var C = require("rxjs");
    fP();
    var D = c2(fO);
    var E = require("path");
    var F = require("fs-extra");
    var G = k(require("mkdirp"));
    var H = class I extends r.DownloadBase {
      constructor(J, K, L, M) {
        super("DownloadService", J, L, K, M);
        c3(this, "configService");
        h.DtKqk(c3, this, "storeService");
        c3(this, h.ZzwSr);
        c3(this, "eventsService");
        c3(this, "isBiliDownloadInited", false);
        this.configService = J;
        this.storeService = K;
        this.fetchService = L;
        this.eventsService = M;
        const {
          mainWindowReady$: N,
          biliDownloadReady$: O,
          userLoginChange$: P
        } = this.configService;
        N.subscribe(() => {
          if (!this.configService.isAppSlept) {
            this.initDownloadURLEvents();
          }
        });
        P.subscribe(() => {
          const Q = this.storeService.getUserInfo();
          if (!Q.isLogin) {
            this.pauseAllDownloadTasks();
          }
        });
        (0, C.combineLatest)([N, O]).subscribe(async () => {
          if (this.isBiliDownloadInited) {
            return;
          }
          this.isBiliDownloadInited = true;
          try {
            await this.updateDownloadVideoList();
            const R = this.storeService.getAutoStartDownload();
            this.log.info("Check auto start download: ", R);
            const S = this.storeService.getUserInfo();
            if (R && S.isLogin) {
              if (h.rhebr !== h.nAACD) {
                this.tryStartRestPendingTask();
              } else {
                const U = this.configService[m];
                if (U instanceof n.BrowserWindow) {
                  U.on("closed", () => {
                    U?.destroy();
                    this.configService[U] = null;
                    if ((0, C.isFun)(D)) {
                      E();
                    }
                  });
                }
              }
            } else {
              this.pauseAllDownloadTasks();
            }
          } catch (U) {
            this.log.error("Bili download error:", this.getErrStack(U));
          }
        });
      }
      async getAllDownloadVideos(J) {
        if (!J) {
          return this.videoList;
        }
        return this.videoList.filter(K => {
          return K.groupTitle?.includes(J) || K.title?.includes(J) || K.uname?.includes(J) || [K.aid, K.cid, K.bvid].includes(J);
        });
      }
      async getGroupItems({
        groupId: J
      }) {
        const K = this.findDownloadGroups([J]);
        return K?.[0]?.itemList || [];
      }
      async sortGroupList(J) {
        this.videoList.forEach(async K => {
          const L = J.find(M => M.groupId === K.groupId || M.groupId === K?.epInfo?.groupId);
          if (L?.groupOrder) {
            K.groupOrder = L.groupOrder;
            try {
              await this.biliDownload.setOrder({
                cid: K.cid,
                groupOrder: L.groupOrder
              });
            } catch {}
          }
        });
        this.groupList.forEach(K => {
          const L = J.find(M => M.groupId === K.groupId);
          if (L?.groupOrder) {
            K.groupOrder = L.groupOrder;
          }
        });
        this.groupList.sort((K, L) => (L.groupOrder || 0) - (K.groupOrder || 0));
        this.eventsService.emitDownloadItemListEvent("orderChange");
      }
      async sortDownloadTasks(J) {
        const K = [];
        this.videoList.forEach(L => {
          const {
            taskOrder: M
          } = J.find(N => N.itemId === L.itemId) || {};
          if (M) {
            L.taskOrder = M;
            const N = this.taskList.find(O => O.itemId === L.itemId);
            if (N) {
              N.taskOrder = M;
            }
            if (this.loadingListMap[L.cid]) {
              this.loadingListMap[L.cid].item.taskOrder = M;
            }
            K.push(this.biliDownload.setOrder({
              cid: L.cid,
              taskOrder: M
            }));
          }
        });
        try {
          await Promise.allSettled(K);
          await this.updateDownloadVideoList();
          this.eventsService.emitDownloadTaskListEvent("orderChange");
        } catch {}
      }
      async deleteGroups({
        groupIds: J
      }) {
        let K = [];
        const L = this.findDownloadGroups(J);
        L.forEach(M => {
          M.itemList.forEach(N => {
            if (this.isDownloadGroup(N)) {
              K = [...K, ...N.itemList];
            } else {
              K.push(N);
            }
          });
        });
        try {
          await this.biliDownload.deleteLoadList(K);
          await this.updateDownloadVideoList();
          this.eventsService.emitDownloadItemListEvent("deleteItems");
        } catch (M) {
          this.log.error("Delete download group error:", this.getErrStack(M));
          throw this.formatError(M);
        }
      }
      async deleteAllGroups() {
        try {
          await this.biliDownload.deleteLoadList(this.itemList);
          await this.updateDownloadVideoList();
          this.eventsService.emitDownloadItemListEvent("deleteAllItems");
        } catch (J) {
          this.log.error("Delete all download groups error:", this.getErrStack(J));
          throw this.formatError(J);
        }
      }
      async getGroupAllItems({
        groupId: J
      }) {
        const K = [];
        const L = [];
        const M = [];
        this.videoList.forEach(N => {
          if (N.groupId === J) {
            K.push(N);
          } else if (N.epInfo?.groupId === J) {
            L.push(N);
          } else {
            M.push(N);
          }
        });
        M.forEach(N => {
          const O = L.find(P => P.bvid === N.bvid);
          if (O) {
            const Q = this.fillSeasonInfo(N, O);
            L.push(Q);
          }
        });
        return K.concat(L);
      }
      fillSeasonInfo(J, K) {
        return {
          ...J,
          epInfo: K.epInfo
        };
      }
      async deleteGroupItems({
        itemIds: J
      }) {
        try {
          const K = this.videoList.filter(L => J.includes(L.itemId));
          await this.biliDownload.deleteLoadList(K);
          await this.updateDownloadVideoList();
          this.eventsService.emitDownloadItemListEvent("deleteItems");
        } catch (L) {
          this.log.error("Delete download items error:", this.getErrStack(L));
          throw this.formatError(L);
        }
      }
      async getItemInfo({
        itemId: J
      }) {
        return this.videoList.find(K => K.itemId === J);
      }
      async getItemsInfo({
        itemIds: J
      }) {
        return this.videoList.filter(K => J.includes(K.itemId)) || [];
      }
      async setItemStatus(J) {
        try {
          const L = this.videoList.find(M => M.cid === J.cid);
          if (L) {
            await this.biliDownload.setStatus(J);
            await this.updateDownloadVideoList();
            this.eventsService.emitDownloadStatusChange(L);
          }
        } catch (M) {
          this.log.error("Set item status error:", this.getErrStack(M));
          throw this.formatError(M);
        }
      }
      async createTasks({
        tasks: J
      }) {
        this.isBiliDownloadFree = false;
        try {
          await this.updatdBiliDownloadInfo();
          J.forEach(K => {
            const L = this.findDownloadGroups([K.groupId])[0];
            if (L?.groupOrder) {
              K.groupOrder = L.groupOrder;
            }
          });
          await this.biliDownload.appendLoadList(J);
          await this.updateDownloadVideoList();
          this.eventsService.emitDownloadTaskListEvent("newTasks");
          this.tryStartRestPendingTask();
          this.isBiliDownloadFree = true;
        } catch (K) {
          this.isBiliDownloadFree = true;
          this.log.error(h.UTEEu, this.getErrStack(K));
          throw this.formatError(K);
        }
      }
      async pauseTasks({
        taskIds: J
      }) {
        if (!this.isBiliDownloadFree) {
          await (0, A.sleep)(1000);
        }
        try {
          const K = this.taskList.filter(L => J.includes(L.itemId));
          await this.biliDownload.stopLoadList(K);
          await this.updateDownloadVideoList();
          this.eventsService.emitDownloadTaskListEvent(h.oNVvj);
          this.tryStartRestPendingTask();
        } catch (L) {
          this.log.error("Pause download tasks error:", this.getErrStack(L));
          throw this.formatError(L);
        }
      }
      async restartTasks({
        taskIds: J
      }) {
        try {
          let N = this.taskList.filter(O => J.includes(O.itemId));
          if (N.length) {
            if (J.length === 1 && ["error", "notAllowed"].includes(N[0].status)) {
              await this.biliDownload.deleteLoadList(N);
              N[0].status = "pending";
            } else {
              N = N.filter(O => !["error", "notAllowed"].includes(O.status));
            }
            await this.biliDownload.startLoadList(N);
            await this.updateDownloadVideoList();
            this.eventsService.emitDownloadTaskListEvent("startTasks");
            this.tryStartRestPendingTask();
          }
        } catch (O) {
          this.log.error("Restart download tasks error:", this.getErrStack(O));
          throw this.formatError(O);
        }
      }
      async deleteTasks({
        taskIds: J
      }) {
        var K = {
          riMmn: "DYNAMIC_PUSH_RECORD"
        };
        const L = this.taskList.filter(M => J.includes(M.itemId));
        try {
          await this.biliDownload.deleteLoadList(L);
          await this.updateDownloadVideoList();
          this.eventsService.emitDownloadTaskListEvent(h.wtIfs);
          this.tryStartRestPendingTask();
        } catch (M) {
          this.log.error("Delete download tasks error:", this.getErrStack(M));
          throw this.formatError(M);
        }
      }
      async startAllTasks() {
        try {
          const J = this.taskList.filter(K => !["error", "notAllowed"].includes(K.status));
          await this.biliDownload.startLoadList(J);
          await this.updateDownloadVideoList();
          this.eventsService.emitDownloadTaskListEvent("deleteTasks");
          this.tryStartRestPendingTask();
        } catch (K) {
          this.log.error("Start all download tasks error:", this.getErrStack(K));
          throw this.formatError(K);
        }
      }
      async pauseAllDownloadTasks() {
        try {
          await this.biliDownload.stopLoadList(this.taskList);
          await this.updateDownloadVideoList();
          this.eventsService.emitDownloadTaskListEvent("pauseAllTasks");
        } catch (J) {
          this.log.error(h.RvGvk, this.getErrStack(J));
          throw this.formatError(J);
        }
      }
      async deleteAllTasks() {
        try {
          await this.biliDownload.deleteLoadList(this.taskList);
          await this.updateDownloadVideoList();
          this.eventsService.emitDownloadTaskListEvent("deleteAllTasks");
        } catch (K) {
          this.log.error("Delete all download tasks error:", this.getErrStack(K));
          throw this.formatError(K);
        }
      }
      updateItemDmInfo({
        itemId: J
      }) {
        const K = this.videoList.filter(L => L.itemId === J);
        return this.biliDownload.updateDm(K[0]);
      }
      async selectDownloadPath() {
        const {
          canceled: J,
          filePaths: K
        } = await B.dialog.showOpenDialog(this.configService.mainWindow, {
          properties: ["openDirectory"],
          defaultPath: this.storeService.getDownloadPath()
        });
        if (!J && K[0]) {
          let L = K[0];
          const M = this.storeService.getDownloadPath();
          if (L !== M) {
            if (L.startsWith(D.APP_EXE_DIR)) {
              this.log.error("Set download path in app-exe path!");
              B.dialog.showErrorBox("错误", "下载路径不能设置在软件安装目录下！");
              return;
            }
            if (/:\\?$/.test(L)) {
              try {
                const N = (0, E.join)(L, "BiliDownload");
                if (!(0, F.existsSync)(N)) {
                  G.default.sync(N);
                }
                L = N;
              } catch (O) {
                this.log.error("Create download root path error!");
                B.dialog.showErrorBox("错误", "视频不能下载到磁盘的根目录下，请选择或创建一个文件夹作为下载路径");
                return;
              }
            }
            try {
              await this.pauseAllDownloadTasks();
            } catch {}
            this.log.info("New download path: ", L);
            this.storeService.setDownloadPath(L);
            this.configService.downloadPathChange$.next();
            this.eventsService.emitDownloadInfoChange();
          }
        }
      }
      getDownloadInfo() {
        const J = this.storeService.getDownloadPath();
        const K = this.storeService.getGameDownloadPath();
        const L = this.configService.getDefaultGameDownloadPath();
        return {
          downloadPath: J,
          isDefault: J === D.DEFAULT_DOWNLOAD_PATH,
          gameDownloadPath: K,
          isGameDefault: K === L,
          isAutoStart: this.storeService.getAutoStartDownload(),
          isDlNoSleep: this.storeService.getDownloadNoSleep()
        };
      }
      async initDownloadURLEvents() {
        this.log.info("Init DownloadURL Events");
        const K = this.configService.mainWindow;
        let L;
        try {
          L = B.app.getPath(h.kknfY);
        } catch (M) {
          try {
            L = B.app.getPath("pictures");
          } catch (N) {
            this.log.warn("Get downloads path fail!", this.getErrStack(N));
          }
        }
        K.webContents.session.on("will-download", (O, P, Q) => {
          const S = P.getURL();
          this.log.info("DownloadURL [will-download]: " + S);
          let T = (0, A.md5Hash)(S, 18);
          const U = S.match(/\.[^.]+$/);
          if (U?.[0]) {
            T += U[0];
          }
          P.setSaveDialogOptions({
            showsTagField: true,
            ...(L ? {
              defaultPath: L + "/" + T
            } : {})
          });
          P.once("done", (V, W) => {
            this.eventsService.emitDownloadItemDone({
              type: "done",
              url: S,
              state: W,
              downloadPath: P.getSavePath()
            });
          });
        });
      }
    };
    H = i([(0, q.Injectable)(), j("design:paramtypes", [typeof (l = typeof t.ConfigService !== "undefined" && t.ConfigService) === "function" ? l : Object, h.RSikP(typeof (m = typeof u.StoreService !== "undefined" && u.StoreService), "function") ? m : Object, typeof (n = typeof z.FetchService !== "undefined" && z.FetchService) === "function" ? n : Object, typeof (o = typeof w.EventsService !== "undefined" && w.EventsService) === "function" ? o : Object])], H);
    g.DownloadService = H;
  }
});
var iV = {};
bY(iV, {
  GameDownloadManager: () => j3
});
var iW;
var iX;
var iY;
var iZ;
var j0;
var j1;
var j2;
var j3;
var j4 = bW({
  ""() {
    iW = c1(require("fs"));
    iX = require("path");
    iY = require("events");
    iZ = require("follow-redirects");
    j0 = require("crypto");
    j1 = require("fs-extra");
    fP();
    j2 = require("@bilibili/b-utils-core");
    j3 = class extends iY.EventEmitter {
      constructor(h) {
        super();
        c3(this, "tasks", new Map());
        c3(this, "log");
        c3(this, "isStoped", false);
        c3(this, "dlUrlMap", {
          pc_download_link: "pc_download_link2",
          pc_download_link2: "pc_download_link",
          android_download_link: "android_download_link2",
          android_download_link2: "android_download_link"
        });
        this.log = h;
      }
      getFilePath(h, i = false) {
        const j = (0, iX.join)(h.downloadDir, String(h.id), "downloads");
        if (i) {
          try {
            (0, j1.ensureDirSync)(j);
          } catch (q) {
            this.log.error("Ensure dl file error:", h.id, q);
          }
        }
        const {
          appName: k
        } = (0, j2.parseQs)(h.downloadUrl);
        const l = k ? "_" + k : "";
        const {
          name: m,
          ext: n
        } = (0, iX.parse)(h.downloadUrl.replace(/\?.*$/, ""));
        const o = "" + m + l + n;
        return (0, iX.join)(h.downloadDir, String(h.id), "downloads", o);
      }
      getTaskId(h) {
        const i = this.getFilePath(h);
        return (0, j0.createHash)("md5").update(i).digest("hex");
      }
      getBackupDownloadUrl(h) {
        let i = "";
        for (const j in this.dlUrlMap) {
          if (h.downloadUrl === h[j] && h[this.dlUrlMap[j]]) {
            i = h[this.dlUrlMap[j]];
            break;
          }
        }
        return i;
      }
      hasDownloadTask(h) {
        const i = this.getTaskId(h);
        return this.tasks.has(i);
      }
      stopAllTasks() {
        this.log.info("Stop all game download jobs");
        this.isStoped = true;
        this.tasks.forEach(h => {
          if (!h.cancelled && !h.paused) {
            h.cancelled = true;
            h.response?.destroy();
            h.request?.destroy();
            h.fileStream?.close();
            h.request = undefined;
            h.response = undefined;
            h.fileStream = undefined;
          }
        });
      }
      startDownload(h) {
        this.log.info("Start dl game:", h.id);
        const i = this.getFilePath(h, true);
        const j = this.getTaskId(h);
        let k = this.tasks.get(j);
        if (k) {
          this.resumeDownload(h);
          return j;
        }
        let l = 0;
        try {
          if (iW.default.existsSync(i)) {
            l = iW.default.statSync(i).size;
          }
        } catch (n) {
          this.log.error("Stat dl file error:", n);
        }
        const m = Date.now();
        k = {
          id: j,
          url: h.downloadUrl,
          game: h,
          filePath: i,
          totalBytes: 0,
          receivedBytesPrev: l,
          receivedBytes: l,
          lastUpdateTimePrev: m,
          lastUpdateTime: m,
          speed: 0,
          emitProgressTime: 0,
          paused: false,
          cancelled: false,
          isResumable: true,
          isDlUrlFallback: h.isDlUrlFallback
        };
        this.tasks.set(j, k);
        this._download(h);
        this._emit("started", h.id, i);
        return j;
      }
      pauseDownload(h) {
        this.log.info("Do pause dl game:", h.id);
        const i = this.tasks.get(this.getTaskId(h));
        if (i && !i.paused && !i.cancelled) {
          i.paused = true;
          i.response?.pause();
          i.fileStream?.end();
          i.request?.destroy();
          i.request = undefined;
          if (i.response) {
            i.isResumable = i.response.statusCode === 206;
          }
          this._emit("paused", h.id);
        }
      }
      resumeDownload(h) {
        this.log.info("Do resume dl game:", h.id);
        const i = this.tasks.get(this.getTaskId(h));
        if (i && i.paused && !i.cancelled) {
          if (!i.isResumable) {
            i.receivedBytesPrev = 0;
            i.receivedBytes = 0;
            try {
              if (iW.default.existsSync(i.filePath)) {
                iW.default.unlinkSync(i.filePath);
              }
            } catch (j) {
              this.log.error("Del dl file error:", j);
            }
          } else {
            try {
              if (iW.default.existsSync(i.filePath)) {
                const k = iW.default.statSync(i.filePath).size;
                if (k !== i.receivedBytes) {
                  i.receivedBytesPrev = i.receivedBytes;
                  i.receivedBytes = k;
                }
              }
            } catch (m) {
              this.log.error("Stat dl file error:", m);
            }
          }
          i.paused = false;
          this._download(h);
          this._emit("resumed", h.id);
        }
      }
      cancelDownload(h) {
        this.log.info("Do cancel dl game:", h.id);
        const i = this.getTaskId(h);
        const j = this.tasks.get(i);
        if (j && !j.cancelled) {
          j.cancelled = true;
          j.response?.destroy();
          j.request?.destroy();
          j.fileStream?.close();
          j.request = undefined;
          j.response = undefined;
          j.fileStream = undefined;
          try {
            if (iW.default.existsSync(j.filePath)) {
              iW.default.unlinkSync(j.filePath);
            }
          } catch (l) {
            this.log.error("Del dl file error:", l);
          }
          this.tasks.delete(i);
          this._emit("cancelled", h.id);
        }
      }
      getProgress(h) {
        const i = this.tasks.get(this.getTaskId(h));
        if (!i) {
          return null;
        }
        return {
          taskId: i.id,
          gameId: h.id,
          received: i.receivedBytes,
          total: i.totalBytes,
          progress: i.totalBytes > 0 ? i.receivedBytes / i.totalBytes * 100 : 0,
          speed: this._getSpeed(i)
        };
      }
      emitProgress(h, i = false) {
        const j = Date.now();
        if (i && j - h.emitProgressTime < 500) {
          return;
        }
        h.emitProgressTime = j;
        const k = this.getProgress(h.game);
        if (k) {
          this._emit("progress", h.game.id, k);
          this.log.info("Game dl progress (id: " + h.game.id + "): " + k.progress.toFixed(2) + "%");
        }
      }
      _getSpeed(h) {
        const i = Date.now() - h.lastUpdateTimePrev;
        if (i > 0) {
          const j = (h.receivedBytes - h.receivedBytesPrev) / (i / 1000);
          h.speed = (h.speedPrev || 0) * 0.7 + j * 0.3;
          h.speedPrev = h.speed;
        }
        return h.speed;
      }
      _download(h) {
        const j = this.tasks.get(this.getTaskId(h));
        if (!j) {
          return null;
        }
        const k = j.url.startsWith("https") ? iZ.https : iZ.http;
        const l = {
          headers: {
            Range: "bytes=" + j.receivedBytes + "-",
            "User-Agent": f9,
            Referer: eg,
            Accept: "*/*"
          }
        };
        j.request = k.get(j.url, l, m => {
          if (m.statusCode === 206) {
            const n = m.headers["content-range"];
            if (n) {
              j.totalBytes = parseInt(n.split("/")[1], 10);
            }
            j.isResumable = true;
            this.log.info("Support resumable dl:", h.id, j.totalBytes);
          } else if (m.statusCode === 200) {
            j.totalBytes = parseInt(m.headers["content-length"] || "0", 10);
            j.isResumable = false;
            if (j.receivedBytes > 0) {
              j.receivedBytesPrev = 0;
              j.receivedBytes = 0;
              try {
                if (iW.default.existsSync(j.filePath)) {
                  iW.default.unlinkSync(j.filePath);
                }
              } catch (o) {
                this.log.error("Remove dl file error:", o);
              }
            }
            this.log.info("Unsupport resumable dl:", h.id, j.totalBytes);
          } else {
            if (!j.isDlUrlFallback && !h.isDlUrlFallback) {
              j.isDlUrlFallback = true;
              const r = this.getBackupDownloadUrl(h);
              if (r) {
                this.log.info("Use backup dl url:", h.id);
                j.url = r;
                h.downloadUrl = r;
                h.isDlUrlFallback = true;
                this._emit("fallback", h.id, r);
                this._download(h);
                return;
              }
            }
            this._emitError(j, new Error("下载失败，状态码: " + m.statusCode));
            return;
          }
          j.response = m;
          j.fileStream = iW.default.createWriteStream(j.filePath, {
            flags: j.receivedBytes ? "a" : "w",
            start: j.receivedBytes
          });
          m.pipe(j.fileStream);
          m.on("data", t => {
            if (j.paused) {
              m.pause();
              return;
            }
            if (j.cancelled) {
              m.destroy();
              return;
            }
            j.receivedBytesPrev = j.receivedBytes;
            j.receivedBytes += t.length;
            j.lastUpdateTimePrev = j.lastUpdateTime;
            j.lastUpdateTime = Date.now();
            this.emitProgress(j, true);
          });
          m.on("end", () => {
            if (!j.cancelled) {
              this.log.info("Game dl completed (id: " + h.id + "): " + j.filePath);
              j.fileStream?.end();
              this.emitProgress(j, false);
              this.tasks.delete(j.id);
              this._emit("completed", h.id, j.filePath);
            }
          });
          m.on("error", t => {
            this._emitError(j, t);
          });
          j.fileStream.on("error", t => {
            this._emitError(j, new Error("文件写入错误: " + t.message));
          });
        });
        j.request.on("error", m => {
          this._emitError(j, m);
        });
      }
      _emitError(h, i) {
        if (!this.isStoped && !h.paused) {
          this._emit("error", h.game.id, i);
          this.log.error("Game dl error (id: " + h.game.id + "):", i);
        }
      }
      _emit(...h) {
        if (!this.isStoped) {
          this.emit(h[0], ...h.slice(1));
        }
      }
    };
  }
});
var j5 = bX({
  ""(g) {
    'use strict';

    var h = {
      nifay: function (K, L) {
        return K - L;
      },
      Hzgvq: function (K, L, M) {
        return K(L, M);
      },
      sKHyV: "object",
      GpgpN: "gameDownloader",
      ZfIYB: "pc_download_link",
      fVSXw: "BDlWe",
      YgkkE: "[*]",
      mTKcx: "lhTQQ",
      rEJLW: "Download new game:",
      XWXwc: "pending",
      uTHpA: "Pause download all games",
      XiQVy: "drTEA",
      aoRnF: "gsPPB",
      BjYXJ: "New game download path: ",
      AboGv: function (K, L) {
        return K(L);
      },
      bUfYg: function (K, L) {
        return K !== L;
      },
      ALwLg: function (K, L) {
        return K !== L;
      }
    };
    var i = g && g.__decorate || function (K, L, M, N) {
      var O = arguments.length;
      var P = O < 3 ? L : N === null ? N = Object.getOwnPropertyDescriptor(L, M) : N;
      var Q;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        P = Reflect.decorate(K, L, M, N);
      } else {
        for (var R = h.nifay(K.length, 1); R >= 0; R--) {
          if (Q = K[R]) {
            P = (O < 3 ? Q(P) : O > 3 ? Q(L, M, P) : h.Hzgvq(Q, L, M)) || P;
          }
        }
      }
      if (O > 3 && P) {
        Object.defineProperty(L, M, P);
      }
      return P;
    };
    var j = g && g.__metadata || function (K, L) {
      if (typeof Reflect === h.sKHyV && typeof Reflect.metadata === "function") {
        return Reflect.metadata(K, L);
      }
    };
    var k = g && g.__importDefault || function (K) {
      if (K && K.__esModule) {
        return K;
      } else {
        return {
          default: K
        };
      }
    };
    var l;
    var m;
    var n;
    var o;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.GameService = undefined;
    var q = require("@nestjs/common");
    ga();
    var r = h.AboGv(c2, g9);
    var t = gK();
    var u = io();
    var w = iu();
    var z = gP();
    var A = require("electron");
    var B = require("path");
    var C = require("child_process");
    fP();
    var D = c2(fO);
    var E = require("fs-extra");
    var F = require("@bilibili/b-utils-core");
    j4();
    var G = c2(iV);
    var H = k(require("glob"));
    var I = k(require("mkdirp"));
    var J = class K extends r.BaseService {
      constructor(L, M, N, O) {
        super("GameService");
        c3(this, "configService");
        c3(this, "storeService");
        c3(this, "fetchService");
        c3(this, "eventsService");
        c3(this, "downloadPath", "");
        c3(this, "gameList", []);
        c3(this, h.GpgpN);
        c3(this, "writeGameInfoThrottle", (0, F.throttle)(P => this.writeGameInfo(P), 1000, true, false));
        this.configService = L;
        this.storeService = M;
        this.fetchService = N;
        this.eventsService = O;
        this.configService.gameDownloadPathChange$.subscribe(() => {
          this.downloadPath = this.storeService.getGameDownloadPath();
          this.gameDownloader?.stopAllTasks();
          this.initGameDownloader();
          this.eventsService.emitGameActionEvent({
            type: "pathChange",
            data: this.downloadPath
          });
        });
        this.configService.appHeartbeat$.subscribe(P => {
          if (P % 2) {
            this.flashDownloadingGameList();
          }
        });
      }
      initGameDownloader() {
        this.downloadPath = this.storeService.getGameDownloadPath();
        this.gameDownloader = new G.GameDownloadManager(this.log);
        this.gameDownloader.on("started", (O, P) => {
          const Q = this.gameList.find(R => R.id === O);
          if (Q) {
            Q.gameStatus = "downloading";
            Q.downloadPath = P;
            if (!Q.downloadStartTime) {
              Q.downloadStartTime = Date.now();
            }
            this.writeGameInfo(Q);
          }
        });
        this.gameDownloader.on("fallback", (O, P) => {
          const Q = this.gameList.find(R => R.id === O);
          if (Q) {
            Q.downloadUrl = P;
            Q.isDlUrlFallback = true;
            this.writeGameInfo(Q);
          }
        });
        this.gameDownloader.on("resumed", O => {});
        this.gameDownloader.on("paused", O => {});
        this.gameDownloader.on("completed", O => {
          const P = this.gameList.find(Q => Q.id === O);
          if (P) {
            P.gameStatus = "completed";
            P.downloadEndTime = Date.now();
            this.writeGameInfo(P);
            this.eventsService.emitGameStatusChange(P);
            this.eventsService.emitGameActionEvent({
              type: "completed",
              data: P
            });
            this.configService.downloadChangeEvent$.next();
            if (D.IS_WIN && !this.configService.appConfig.disableGameAutoInstall) {
              try {
                this.installGame(O);
              } catch (Q) {}
            }
          }
        });
        this.gameDownloader.on("error", (O, P = {}) => {
          const Q = this.gameList.find(R => R.id === O);
          if (Q) {
            Q.downloadError = (0, F.pick)(P, ["message", "name", "stack"]);
            this.updateGameStatus(Q, "error");
          }
        });
        this.gameDownloader.on("progress", (O, P) => {
          const Q = this.gameList.find(R => R.id === O);
          if (Q) {
            Q.progress = P;
            if (P.progress === 100) {
              this.writeGameInfo(Q);
            } else {
              this.writeGameInfoThrottle(Q);
            }
            this.eventsService.emitGameProgressChange(P);
          }
        });
        this.initGameList();
        const N = this.storeService.getAutoStartDownload();
        if (!N) {
          this.pauseDownloadAllGames();
        }
        this.configService.isGameServiceReady = true;
        this.eventsService.emitGameServiceReady();
        this.log.info("Local game list:", JSON.stringify(this.gameList.map(O => O.id)));
      }
      async initGameList() {
        const L = [];
        H.default.sync((0, B.join)(this.downloadPath, "*")).forEach(M => {
          const N = (0, B.basename)(M);
          if (N.match(/^\d+-(01|02|03|pc|android|ios)?$/)) {
            const O = this.readGameInfo(N);
            if (O) {
              L.push(O);
            }
          }
        });
        this.gameList = L;
      }
      getGameId(L) {
        if (!L.downloadPlatform) {
          const N = P => P.replace(/\?.*$|#.*$/, "");
          const O = N(L.downloadUrl || "");
          if ([h.ZfIYB, "pc_download_link2"].some(P => N(L[P]) === O)) {
            L.downloadPlatform = "pc";
          } else if (["android_download_link", "android_download_link2"].some(P => N(L[P]) === O)) {
            L.downloadPlatform = "android";
          }
        }
        let M = "";
        if (L.downloadPlatform === "pc") {
          M = "01";
        } else if (L.downloadPlatform === "android") {
          M = "02";
        }
        if (!M) {
          return "";
        }
        return L.game_base_id + "-" + M;
      }
      ensureDownloadDir(L, M = false) {
        if (h.fVSXw !== h.fVSXw) {
          this.resumeDownload(i);
          return j;
        } else {
          if (!this.downloadPath || M) {
            this.downloadPath = this.storeService.ensureGameDownloadPath();
          }
          if (!L.downloadDir || M) {
            L.downloadDir = this.downloadPath;
            this.writeGameInfo(L);
          }
        }
      }
      flashDownloadingGameList() {
        if (!this.gameDownloader || !this.configService.isMainWindowReady) {
          return;
        }
        const L = this.gameList.filter(M => ["downloading"].includes(M.gameStatus));
        if (!L.length) {
          const M = this.gameList.filter(O => ["pending"].includes(O.gameStatus)).sort((O, P) => O.downloadTime - P.downloadTime);
          const N = M[0];
          if (N) {
            this.updateGameStatus(N, "downloading");
            this.startDownloadGame(N);
          }
        } else {
          L.forEach(O => {
            if (!this.gameDownloader.hasDownloadTask(O)) {
              this.startDownloadGame(O);
            }
          });
        }
      }
      startDownloadGame(L) {
        this.ensureDownloadDir(L, true);
        this.gameDownloader.startDownload(L);
      }
      hasDownloadingGames() {
        return this.gameList.some(L => ["pending", "downloading"].includes(L.gameStatus));
      }
      getGameList({
        status: L,
        ids: M
      }) {
        let N = [];
        if (L === 0) {
          N = [...this.gameList];
        } else if (L === 1) {
          N = this.gameList.filter(O => ["pending", "downloading", "paused", "error"].includes(O.gameStatus));
          N.sort((O, P) => P.downloadTime - O.downloadTime);
        } else if (L === 2) {
          N = this.gameList.filter(O => ["completed", "broken"].includes(O.gameStatus));
          N.sort((O, P) => P.downloadEndTime - O.downloadEndTime);
        } else if (L === 11) {
          N = this.gameList.filter(O => ["pending", "downloading", "paused"].includes(O.gameStatus));
          N.sort((O, P) => P.downloadTime - O.downloadTime);
        }
        if ((0, F.isArr)(M)) {
          N = N.filter(O => M.includes(O.id));
        }
        return N;
      }
      downloadNewGame(L) {
        if (h.mTKcx === "lhTQQ") {
          this.log.info(h.rEJLW, L.game_name, L.game_base_id, L.downloadUrl);
          if (!L.downloadUrl) {
            throw new Error("downloadUrl is required");
          }
          L.id = this.getGameId(L);
          if (!L.id) {
            throw new Error("downloadUrl error");
          }
          if (this.gameList.some(N => N.id === L.id)) {
            throw new Error("duplicate download");
          }
          L.gameStatus = h.XWXwc;
          L.isInstalled = false;
          L.downloadTime = Date.now();
          const M = this.writeGameInfo(L);
          if (!M) {
            throw new Error("write game info error");
          }
          this.gameList.push(L);
          this.eventsService.emitGameActionEvent({
            type: "download",
            data: L
          });
          this.configService.downloadChangeEvent$.next();
        } else {
          const O = (0, j.randomId)(h.YgkkE);
          k.set(l, O);
          return O;
        }
      }
      pauseDownloadGame(L) {
        this.log.info("Pause download game, id:", L);
        const M = this.gameList.find(N => N.id === L);
        if (!M || !["pending", "downloading"].includes(M.gameStatus)) {
          return false;
        }
        this.ensureDownloadDir(M);
        this.gameDownloader.pauseDownload(M);
        this.updateGameStatus(M, "paused");
      }
      pauseDownloadAllGames() {
        this.log.info(h.uTHpA);
        const M = this.gameList.filter(N => ["pending", "downloading"].includes(N.gameStatus));
        M.forEach(N => {
          this.ensureDownloadDir(N);
          this.gameDownloader.pauseDownload(N);
          this.updateGameStatus(N, "paused");
        });
      }
      setGamePausePop(L) {
        if (L?.length) {
          const M = this.gameList.filter(N => L.includes(N.game_base_id));
          M.forEach(N => {
            N._pausePoped = true;
            this.writeGameInfo(N);
          });
        }
      }
      resumeDownloadGame(L) {
        this.log.info("Resume download game, id:", L);
        const M = this.gameList.find(O => O.id === L);
        if (!M) {
          return false;
        }
        if (M.gameStatus !== "paused") {
          return false;
        }
        const N = this.gameList.filter(P => ["downloading"].includes(P.gameStatus));
        if (N.length) {
          this.updateGameStatus(M, "pending");
        } else {
          this.updateGameStatus(M, "downloading");
          this.startDownloadGame(M);
        }
      }
      resumeDownloadAllGames() {
        this.log.info("Resume download all games");
        const L = this.gameList.filter(M => M.gameStatus === "paused");
        L.forEach(M => {
          this.updateGameStatus(M, "pending");
        });
      }
      deleteGame(L) {
        this.log.info("Delete game, id:", L);
        const M = this.gameList.findIndex(O => O.id === L);
        if (!~M) {
          return false;
        }
        const N = this.gameList[M];
        N.gameStatus = "deleted";
        this.ensureDownloadDir(N);
        this.gameDownloader.cancelDownload(N);
        this.deleteGameFiles(N);
        this.gameList.splice(M, 1);
        this.eventsService.emitGameStatusChange(N);
        this.eventsService.emitGameActionEvent({
          type: "delete",
          data: N
        });
        this.configService.downloadChangeEvent$.next();
      }
      updateGameStatus(L, M) {
        if (typeof L === "string") {
          const N = L;
          L = this.gameList.find(O => O.id === N);
        }
        if (L && L.gameStatus !== M) {
          L.gameStatus = M;
          console.log("GameService: updateGameStatus", L.id, JSON.stringify(L.progress));
          this.writeGameInfo(L);
          this.eventsService.emitGameStatusChange(L);
          this.configService.downloadChangeEvent$.next();
        }
      }
      openGameDir(L) {
        this.log.info("Open game dir, id:", L);
        const M = this.gameList.find(O => O.id === L);
        if (!M) {
          return false;
        }
        const N = (0, B.join)(this.downloadPath, "" + M.id);
        if ((0, E.existsSync)(N)) {
          A.shell.openPath(N);
          return true;
        }
        return false;
      }
      openGamePath(L) {
        this.log.info("Open game dir, id:", L);
        const M = this.gameList.find(P => P.id === L);
        if (!M) {
          return false;
        }
        if (M.downloadPath && (0, E.existsSync)(M.downloadPath)) {
          A.shell.showItemInFolder(M.downloadPath);
          return true;
        }
        const N = (0, B.join)(this.downloadPath, "" + M.id);
        const O = (0, B.join)(N, "downloads");
        if ((0, E.existsSync)(O)) {
          A.shell.openPath(O);
          return true;
        }
        if ((0, E.existsSync)(N)) {
          A.shell.openPath(N);
          return true;
        }
        return false;
      }
      installGame(L) {
        if (h.XiQVy === "IlBoU") {
          return this.configService.generalConfigKeys;
        } else {
          this.log.info("Install game, id:", L);
          const N = this.gameList.find(P => P.id === L);
          if (!N) {
            const P = "Game not found, id: " + L;
            this.log.error(P);
            throw new Error(P);
          }
          if (N.gameStatus !== "completed") {
            const Q = "Game is not completed, cannot install, id: " + L;
            this.log.error(Q);
            throw new Error(Q);
          }
          if (!N.downloadPath || !(0, E.existsSync)(N.downloadPath)) {
            const R = "Game download path not found, id: " + L;
            this.log.error(R);
            throw new Error(R);
          }
          if (!D.IS_WIN || !N.downloadPath.endsWith(".exe")) {
            const S = "Game is not a valid executable file, id: " + L;
            this.log.error(S);
            throw new Error(S);
          }
          const O = (0, C.exec)("start \"\" \"" + N.downloadPath + "\"");
          O.unref();
          N.isInstalled = true;
          this.writeGameInfo(N);
          this.eventsService.emitGameActionEvent({
            type: "install",
            data: N
          });
        }
      }
      launchGame(L) {
        this.log.info("Launch game, id:", L);
        const M = this.gameList.find(O => O.id === L);
        if (!M) {
          if (h.aoRnF !== "gsPPB") {
            try {
              const {
                [F]: P,
                [G]: Q
              } = H.parse(I);
              const V = J(P, Q, K, L);
              return M.parse(V).data;
            } catch (W) {
              this.log.error("decryptData error: ", W.message);
              if (P.isFun) {
                Q();
              }
              return null;
            }
          } else {
            const P = "Game not found, id: " + L;
            this.log.error(P);
            throw new Error(P);
          }
        }
        if (!M.launcherPath) {
          if (!M.launcherRegPath) {
            const Q = "Game launcher path is not provided, id: " + M.id;
            this.log.error(Q);
            throw new Error(Q);
          }
          try {
            const R = (0, C.execSync)("reg query \"" + M.launcherRegPath + "\"").toString("utf-8");
            const S = R.match(/[a-zA-Z]:.+\.exe/)?.[0];
            if (S) {
              M.launcherPath = S;
              this.writeGameInfo(M);
            }
          } catch (U) {
            this.log.error("Get game launcher path error:", this.formatError(U));
          }
        }
        if (!M.launcherPath) {
          const W = "Game launcher path not found";
          this.log.error(W);
          throw new Error(W);
        }
        const N = (0, C.exec)("start \"\" \"" + M.launcherPath + "\"");
        N.unref();
      }
      readGameInfo(L) {
        let N = null;
        const O = (0, B.join)(this.downloadPath, "" + L, ".gameinfo");
        if ((0, E.existsSync)(O)) {
          try {
            N = JSON.parse((0, E.readFileSync)(O, "utf-8"));
          } catch (P) {
            this.log.error("Parse game info from " + O + " error: ", this.formatError(P));
          }
        }
        return N;
      }
      writeGameInfo(L) {
        if (!L) {
          return false;
        }
        if (!L.id && L.game_base_id) {
          L.id = this.getGameId(L);
        }
        if (L.id) {
          const N = (0, B.join)(this.downloadPath, "" + L.id);
          try {
            (0, E.ensureDirSync)(N);
            const O = (0, B.join)(N, ".gameinfo");
            (0, E.writeFileSync)(O, JSON.stringify(L, null, 2), "utf-8");
            return true;
          } catch (P) {
            this.log.error("Write game info (game id: " + L.id + ") error: ", this.formatError(P));
          }
        }
        return false;
      }
      deleteGameFiles(L) {
        const M = (0, B.join)(this.downloadPath, "" + L.id);
        try {
          if ((0, E.existsSync)(M)) {
            (0, E.removeSync)(M);
          }
        } catch (N) {
          this.log.error("Delete game files (game id: " + L.id + ") error: ", this.formatError(N));
        }
      }
      async selectGameDownloadPath() {
        const L = this.storeService.getGameDownloadPath();
        const {
          canceled: M,
          filePaths: N
        } = await A.dialog.showOpenDialog(this.configService.mainWindow, {
          properties: ["openDirectory"],
          defaultPath: L
        });
        if (!M && N[0]) {
          let O = N[0];
          if (O !== L) {
            if (O.startsWith(D.APP_EXE_DIR)) {
              this.log.error("Set download path in app-exe path!");
              A.dialog.showErrorBox("错误", "下载路径不能设置在软件安装目录下！");
              return;
            }
            if (/:\\?$/.test(O)) {
              try {
                const P = (0, B.join)(O, "BiliGame");
                if (!(0, E.existsSync)(P)) {
                  I.default.sync(P);
                }
                O = P;
              } catch (Q) {
                this.log.error("Create game download root path error!");
                A.dialog.showErrorBox("错误", "游戏不能下载到磁盘的根目录下，请选择或创建一个文件夹作为下载路径");
                return;
              }
            }
            this.log.info(h.BjYXJ, O);
            this.storeService.setGameDownloadPath(O);
            this.configService.gameDownloadPathChange$.next();
            this.eventsService.emitDownloadInfoChange();
          }
        }
      }
    };
    J = i([(0, q.Injectable)(), j("design:paramtypes", [typeof (l = h.bUfYg(typeof t.ConfigService, "undefined") && t.ConfigService) === "function" ? l : Object, typeof (m = typeof u.StoreService !== "undefined" && u.StoreService) === "function" ? m : Object, typeof (n = h.ALwLg(typeof w.FetchService, "undefined") && w.FetchService) === "function" ? n : Object, typeof (o = typeof z.EventsService !== "undefined" && z.EventsService) === "function" ? o : Object])], J);
    g.GameService = J;
  }
});
var j6 = bX({
  ""(g) {
    'use strict';

    var h = {
      WKblJ: function (I, J) {
        return I(J);
      },
      TEOWI: function (I, J) {
        return I > J;
      },
      PElUL: function (I, J, K) {
        return I(J, K);
      },
      evpbP: "playerConfig",
      vOvwd: "VLVAu",
      cPatj: function (I, J) {
        return I || J;
      },
      pLLFY: function (I, J) {
        return I === J;
      },
      tbruZ: "Fetch player error:",
      TKXpe: "@nestjs/common",
      VUufY: function (I) {
        return I();
      },
      rpZkM: function (I, J) {
        return I(J);
      },
      mncsl: function (I, J, K) {
        return I(J, K);
      },
      NqCeC: "undefined",
      bcvIF: "function"
    };
    var i = g && g.__decorate || function (I, J, K, L) {
      var M = arguments.length;
      var N = M < 3 ? J : L === null ? L = Object.getOwnPropertyDescriptor(J, K) : L;
      var O;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        N = Reflect.decorate(I, J, K, L);
      } else {
        for (var P = I.length - 1; P >= 0; P--) {
          if (O = I[P]) {
            N = (M < 3 ? h.WKblJ(O, N) : M > 3 ? O(J, K, N) : O(J, K)) || N;
          }
        }
      }
      if (h.TEOWI(M, 3) && N) {
        Object.defineProperty(J, K, N);
      }
      return N;
    };
    var j = g && g.__metadata || function (I, J) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(I, J);
      }
    };
    var k = g && g.__importDefault || function (I) {
      if (I && I.__esModule) {
        return I;
      } else {
        return {
          default: I
        };
      }
    };
    var l;
    var m;
    var n;
    var o;
    var q;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.PlayerService = undefined;
    var r = require(h.TKXpe);
    ga();
    var t = c2(g9);
    var u = h.VUufY(gK);
    var w = iu();
    var z = ix();
    var A = io();
    var B = iM();
    var C = require("fs-extra");
    dn();
    var D = h.WKblJ(c2, dm);
    fP();
    var E = c2(fO);
    var F = k(h.rpZkM(require, "semver"));
    var G = k(require("node-fetch"));
    var H = class I extends t.BaseService {
      constructor(J, K, L, M, N) {
        super("PlayerService");
        c3(this, "configService");
        c3(this, "fetchService");
        c3(this, "utilsService");
        c3(this, "storeService");
        h.PElUL(c3, this, "reportService");
        c3(this, h.evpbP, null);
        this.configService = J;
        this.fetchService = K;
        this.utilsService = L;
        this.storeService = M;
        this.reportService = N;
        this.configService.buvidReady$.subscribe(() => {
          this.initPlayerVersions();
        });
        this.configService.intervalOfPlayerConfig = setInterval(() => {
          this.syncPlayerConfig();
        }, E.POLLING_PLAYER_CONFIG_TIME);
      }
      initPlayerExps() {
        this.log.info("Initing player exp.");
        if ((0, C.existsSync)(E.PLAYER_JS_PATH)) {
          const {
            exp: J,
            hash: K
          } = this.storeService.getPlayerExpData();
          if (!J || !K || (0, D.fileHash)(E.PLAYER_JS_PATH) !== K || !this.getIsPlayerExpMatched(J)) {
            this.log.info("Remove expired player");
            try {
              (0, C.removeSync)(E.PLAYER_JS_PATH);
            } catch {}
          } else {
            this.log.info("Player exp valid!");
          }
        }
        this.syncPlayerConfig();
      }
      async syncPlayerConfig() {
        this.log.info("Load player config.");
        try {
          const J = await this.fetchService.getPlayerConfig();
          if (J) {
            if (h.vOvwd !== "VLVAu") {
              this.windowFactory.createOrFocusLoginWindow();
              this.reportService.reportLoginFrom(h);
            } else {
              this.playerConfig = J;
              this.initPlayerVersions();
            }
          }
        } catch (L) {
          this.log.error("Load player config error:", this.getErrStack(L));
        }
      }
      initPlayerVersions() {
        const {
          buvid: J
        } = this.configService;
        if (!J || !this.playerConfig) {
          return;
        }
        this.log.info("Init player versions.");
        const {
          versions = []
        } = this.playerConfig;
        if (!versions.length) {
          return;
        }
        let K = null;
        const L = versions.filter(N => this.getIsPlayerExpMatched(N));
        L.forEach(N => {
          if (!K || +(N.wt || 0) > +(K.wt || 0)) {
            K = N;
          }
        });
        const M = (0, C.existsSync)(E.PLAYER_JS_PATH);
        if (!K || !K.src) {
          if (M) {
            this.log.warn("Remove exp player!");
            try {
              (0, C.removeSync)(E.PLAYER_JS_PATH);
            } catch {}
            this.storeService.setPlayerExpData({});
            this.configService.onNewExpPlayerReady$.next();
          }
          return;
        }
        if (K) {
          const N = this.storeService.getPlayerExpData().exp?.id;
          if (!M || K.id !== N || !this.isPlayerHashValid()) {
            this.fetchPlayerJs(K);
          }
        }
      }
      getIsPlayerExpMatched({
        id: J,
        on: K,
        type = "buvid",
        salt = "",
        bc = 1000,
        b: L,
        sv: M,
        ev: N,
        wl: O,
        bl: P
      }) {
        if (h.cPatj(!J, !K) || M && F.default.lt(E.APP_VERSION, M) || N && F.default.gt(E.APP_VERSION, N)) {
          return false;
        }
        const {
          mid: Q
        } = this.storeService.getUserInfo();
        const {
          buvid: R
        } = this.configService;
        const S = this.utilsService.getBuvidWlCode(R);
        if (O) {
          if (O.match(new RegExp("(^|,)" + Q + "(,|$)"))) {
            return true;
          }
          if (O.match(new RegExp(S + ",(0,|0$)"))) {
            return true;
          }
        }
        if (P) {
          if (P.match(new RegExp("(^|,)" + Q + "(,|$)"))) {
            return false;
          }
          if (P.match(new RegExp(S + ",(0,|0$)"))) {
            return false;
          }
        }
        const [T, U] = this.utilsService.getAbTestCursor(L);
        if (h.pLLFY(type, "buvid")) {
          if (!R) {
            return false;
          }
          const V = this.utilsService.getAbTestBucket(R, salt, bc);
          if (V >= T && V <= U) {
            return true;
          }
          return false;
        } else if (type === "mid") {
          const {
            mid: W
          } = this.storeService.getUserInfo();
          if (!W) {
            return false;
          }
          const X = this.utilsService.getAbTestBucket(W, salt, bc);
          if (X >= T && X <= U) {
            return true;
          }
          return false;
        }
      }
      async fetchPlayerJs(J) {
        const {
          id: K,
          src: L
        } = J;
        this.log.info("Fetch exp player, ID:", K);
        try {
          if (!(0, C.existsSync)(E.BILI_PLAYER_DIR)) {
            (0, C.mkdirSync)(E.BILI_PLAYER_DIR);
          }
          const M = (0, C.createWriteStream)(E.PLAYER_DL_PATH);
          const N = await (0, G.default)(L);
          await new Promise((O, P) => {
            N.body.pipe(M);
            N.body.on("error", P);
            M.on("finish", O);
          });
          if ((0, C.existsSync)(E.PLAYER_JS_PATH)) {
            (0, C.removeSync)(E.PLAYER_JS_PATH);
          }
          (0, C.renameSync)(E.PLAYER_DL_PATH, E.PLAYER_JS_PATH);
          this.storeService.setPlayerExpData({
            exp: J,
            hash: (0, D.fileHash)(E.PLAYER_JS_PATH)
          });
          this.configService.onNewExpPlayerReady$.next();
          this.reportService.reportPlayerPatch({
            app_version: E.APP_VERSION,
            patch_id: K
          });
        } catch (P) {
          this.log.error(h.tbruZ, this.getErrStack(P));
        }
      }
      isPlayerHashValid() {
        return (0, D.fileHash)(E.PLAYER_JS_PATH) === this.storeService.getPlayerExpData().hash;
      }
      handleGetPlayerInfo() {
        if (!(0, C.existsSync)(E.PLAYER_JS_PATH) || !this.isPlayerHashValid()) {
          return {
            playerSrc: E.PLAYER_DEFAULT_PATH + "?v=" + E.BUILD_CODE,
            playerExpInfo: {}
          };
        } else {
          const {
            exp: K
          } = this.storeService.getPlayerExpData();
          return {
            playerSrc: this.configService.localServer + "/player/core.js?id=" + K?.id + "&token=" + global.APP_HASH_CODE,
            playerExpInfo: K || {}
          };
        }
      }
    };
    H = h.mncsl(i, [(0, r.Injectable)(), j("design:paramtypes", [typeof (l = typeof u.ConfigService !== "undefined" && u.ConfigService) === "function" ? l : Object, typeof (m = typeof w.FetchService !== "undefined" && w.FetchService) === "function" ? m : Object, typeof (n = typeof z.UtilsService !== h.NqCeC && z.UtilsService) === h.bcvIF ? n : Object, typeof (o = typeof A.StoreService !== h.NqCeC && A.StoreService) === h.bcvIF ? o : Object, typeof (q = typeof B.ReportService !== "undefined" && B.ReportService) === "function" ? q : Object])], H);
    g.PlayerService = H;
  }
});
var j7 = bX({
  ""(g, h) {
    'use strict';

    var i = {
      zLSZg: function (a0, a1) {
        return a0 === a1;
      },
      aflCe: function (a0, a1, a2) {
        return a0(a1, a2);
      },
      sXBPn: "isOnSwitchingWin",
      QyGvE: "updated",
      SLySn: "3|9|1|6|2|7|4|0|10|11|8|5",
      jsaJr: "Initing app configs!",
      ighqL: "[System info]:\n",
      wQzvo: "qhqRw",
      LOpzN: "win32",
      ROAbs: function (a0, a1) {
        return a0 * a1;
      },
      sSUwF: "McYdd",
      hzAUs: "Dev mode password empty!",
      efkTg: "Dev mode password error!",
      mCXXi: "lQlLO",
      eBgSN: "Unzip font error:",
      AaYSe: function (a0, a1) {
        return a0 === a1;
      },
      tBzoW: "OjRlg",
      yEBLI: function (a0, a1) {
        return a0 !== a1;
      },
      mMNye: function (a0, a1, a2) {
        return a0(a1, a2);
      },
      UShPH: "Nivms",
      kTXOz: "object",
      gBabw: "SetThreadExecutionState error:",
      FbQRG: function (a0, a1) {
        return a0 < a1;
      },
      cOuSM: function (a0, a1) {
        return a0 <= a1;
      },
      rRjMz: function (a0, a1) {
        return a0 || a1;
      },
      mByMl: "setGpEnabled",
      ZqMsR: "setSettings",
      LVtSc: "setMouseTo",
      FoqSJ: "doubleClick",
      UQIfH: "typeKey",
      RomJJ: function (a0, a1) {
        return a0 + a1;
      },
      AfIwt: "getIsGpActive",
      fWQMn: "livePlayerAction",
      QwoBl: function (a0) {
        return a0();
      },
      PRPYu: function (a0, a1) {
        return a0(a1);
      },
      RCRzO: "path",
      DbSGf: function (a0, a1) {
        return a0(a1);
      },
      cKijs: function (a0, a1) {
        return a0 !== a1;
      },
      fFbbe: "undefined",
      cEacA: function (a0, a1) {
        return a0 === a1;
      },
      ntdQB: "function"
    };
    var j = g && g.__decorate || function (a0, a1, a2, a3) {
      var a4 = arguments.length;
      var a5 = a4 < 3 ? a1 : a3 === null ? a3 = Object.getOwnPropertyDescriptor(a1, a2) : a3;
      var a6;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        a5 = Reflect.decorate(a0, a1, a2, a3);
      } else {
        for (var a7 = a0.length - 1; a7 >= 0; a7--) {
          if (a6 = a0[a7]) {
            a5 = (a4 < 3 ? a6(a5) : a4 > 3 ? a6(a1, a2, a5) : a6(a1, a2)) || a5;
          }
        }
      }
      if (a4 > 3 && a5) {
        Object.defineProperty(a1, a2, a5);
      }
      return a5;
    };
    var k = g && g.__metadata || function (a0, a1) {
      if (i.zLSZg(typeof Reflect, "object") && typeof Reflect.metadata === "function") {
        return Reflect.metadata(a0, a1);
      }
    };
    var l = g && g.__importDefault || function (a0) {
      if (a0 && a0.__esModule) {
        return a0;
      } else {
        return {
          default: a0
        };
      }
    };
    var m;
    var n;
    var o;
    var q;
    var r;
    var t;
    var u;
    var w;
    var z;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.SystemService = undefined;
    var A = require("@nestjs/common");
    i.QwoBl(ga);
    var B = c2(g9);
    var C = gK();
    var D = iu();
    var E = gP();
    var F = io();
    var G = iM();
    var H = iU();
    var I = ix();
    var J = j5();
    var K = j6();
    var L = require("electron");
    var M = require("fs-extra");
    dn();
    var N = i.PRPYu(c2, dm);
    var O = require("@bilibili/b-utils-core");
    var P = require("child_process");
    var Q = require("https-proxy-agent");
    dn();
    var R = c2(dm);
    var S = l(require("os"));
    var T = l(require(i.RCRzO));
    var U = l(i.DbSGf(require, "mkdirp"));
    var V = l(require("glob"));
    var W = l(require("semver"));
    var X = l(require("extract-zip"));
    fP();
    var Y = c2(fO);
    var Z = class a0 extends B.BaseService {
      constructor(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        super("SystemService");
        c3(this, "configService");
        c3(this, "fetchService");
        c3(this, "storeService");
        c3(this, "eventsService");
        c3(this, "reportService");
        i.aflCe(c3, this, "downloadService");
        c3(this, "gameService");
        c3(this, "utilsService");
        c3(this, "playerService");
        c3(this, "appLogs", []);
        c3(this, "appLogLimit", 5000);
        c3(this, "isAppLogWatching", false);
        c3(this, i.sXBPn, false);
        i.aflCe(c3, this, "_mouse");
        c3(this, "_keyboard");
        this.configService = a1;
        this.fetchService = a2;
        this.storeService = a3;
        this.eventsService = a4;
        this.reportService = a5;
        this.downloadService = a6;
        this.gameService = a7;
        this.utilsService = a8;
        this.playerService = a9;
        this.configService.wakeUpBiliApp$.subscribe(() => this.wakeUpBiliApp());
        this.configService.beforeQuitApp$.subscribe(() => {
          this.storeService.setLatestRunVersion(Y.APP_VERSION);
        });
        this.configService.autoUpdateInfoReady$.subscribe(() => {
          this.judgeToastUpdateVersion();
        });
        this.configService.mainWindowFirstReady$.subscribe(() => {
          this.judgeToastUpdateVersion();
          (0, M.ensureDirSync)(Y.UTILITIES_DIR);
          if (Y.IS_WIN && !(0, M.existsSync)(Y.SETFTA_EXE)) {
            (0, M.copyFileSync)(Y.SETFTA_EXE_SRC, Y.SETFTA_EXE);
          }
        });
        this.configService.intervalOfInjectCodeConfig = setInterval(() => {
          this.syncInjectCodeConfiguration();
        }, Y.POLLING_INJECT_CODE_TIME);
        this.configService.watchAppLogChange$.subscribe(() => this.watchAppLogChange());
        L.nativeTheme.on(i.QyGvE, () => {
          const aa = L.nativeTheme.shouldUseDarkColors;
          this.log.info("NativeTheme updated, shouldUseDarkColors:", aa);
          if (this.configService.isSystemDarkTheme !== aa) {
            this.configService.isSystemDarkTheme = aa;
            this.eventsService.emitAppThemeChange("SystemTheme");
          }
        });
        this.configService.buvidReady$.subscribe(() => {
          L.crashReporter.addExtraParameter("buvid", this.configService.buvid);
        });
        this.configService.downloadChangeEvent$.subscribe(() => this.handlePowerSaveBlocker());
      }
      get mouse() {
        if (!this._mouse) {
          this._mouse = require("@nut-tree/nut-js").mouse;
        }
        return this._mouse;
      }
      get keyboard() {
        if (!this._keyboard) {
          this._keyboard = require("@nut-tree/nut-js").keyboard;
        }
        return this._keyboard;
      }
      initAppConfigs() {
        var a1 = i.SLySn.split("|");
        var a2 = 0;
        while (true) {
          switch (a1[a2++]) {
            case "0":
              this.initAppGeneralConfiguration();
              continue;
            case "1":
              this.log.info(i.jsaJr);
              continue;
            case "2":
              this.initAppInitialVersion();
              continue;
            case "3":
              this.initSysVersionInfo();
              continue;
            case "4":
              this.initAppRumimeDeciveName();
              continue;
            case "5":
              this.playerService.initPlayerExps();
              continue;
            case "6":
              this.initIsAppSilentInstall();
              continue;
            case "7":
              this.initAppRuntimeConfigs();
              continue;
            case "8":
              this.syncInjectCodeConfiguration();
              continue;
            case "9":
              this.printSystemInformation();
              continue;
            case "10":
              this.syncAppRemoteConfiguration();
              continue;
            case "11":
              this.pollingRemoteConfiguartion();
              continue;
          }
          break;
        }
      }
      initSysVersionInfo() {
        try {
          if (Y.IS_OHOS) {
            this.configService.sysVersion = "--";
            return;
          }
          this.configService.sysVersion = (0, P.execSync)(process.platform === "win32" ? "ver" : "sw_vers").toString().match(/\d+\.\d+(\.\d+)*/)?.[0] || "";
        } catch (a1) {
          this.log.error("Init osVersion error:", this.getErrStack(a1));
        }
      }
      printSystemInformation() {
        this.log.info("[App info]:\n", {
          version: Y.APP_VERSION,
          installVersion: Y.INSTALL_VERSION,
          electron: process.versions.electron,
          node: process.versions.node,
          chromium: process.versions.chrome,
          buildCode: Y.BUILD_CODE,
          buildId: Y.FAWKES_BUILD_ID,
          buildJobId: Y.FAWKES_JOB_ID,
          chid: Y.CHID
        });
        this.log.info(i.ighqL, {
          osArch: S.default.arch(),
          processArch: process.arch,
          platform: S.default.platform(),
          osType: S.default.type(),
          osRelease: S.default.release(),
          osVersoin: S.default.version(),
          endianness: S.default.endianness(),
          hostName: S.default.hostname(),
          totalMemory: S.default.totalmem(),
          sysVersion: this.configService.sysVersion
        });
        const {
          isLogin: a1,
          mid: a2,
          uname: a3
        } = this.storeService.getUserInfo();
        L.crashReporter.addExtraParameter("isLogin", a1 ? "1" : "0");
        L.crashReporter.addExtraParameter("mid", String(a2 || ""));
        this.log.info("[User info]", {
          isLogin: a1,
          mid: a2,
          uname: a3
        });
      }
      async initIsAppSilentInstall() {
        try {
          const a1 = await (0, N.listRegValues)(Y.DEFAULT_REGEDIT_PATH);
          if ((0, O.isObj)(a1) && a1.isSilent?.data) {
            if (i.wQzvo === "qhqRw") {
              this.configService.isAppSilentInstall = a1.isSilent.data === "true";
              this.log.info("Get isSilient:", a1.isSilent.data);
            } else {
              const [a3, a4, a5, a6] = this.systemService.getGamepadWindowAndViews();
              if ((this.utilsService.isWindowHide(a5) || !a5.isFocused()) && (this.utilsService.isWindowHide(a6) || !a6.isFocused())) {
                if (!this.utilsService.isWindowHide(a4)) {
                  this.configService.playerWindow.focus();
                }
              }
            }
          }
        } catch (a3) {
          this.log.error("Init isSilient error:", this.getErrStack(a3));
        }
      }
      initAppInitialVersion() {
        const a1 = this.storeService.getInitialVersion();
        if (!a1) {
          this.storeService.setInitialVersion(Y.APP_VERSION);
          this.log.info("Set initial version:", Y.APP_VERSION);
        }
      }
      initAppRuntimeConfigs() {
        let a1 = global.APP_HASH_CODE;
        if (global.runtimeConf?.hashCode) {
          a1 = (0, N.md5Hash)(String(Math.random()));
        }
        (0, N.setRunTimeConf)({
          hashCode: a1,
          pkgChid: Y.CHID,
          reportSuccess: false
        });
        this.configService.hashCode = a1;
      }
      initAppRumimeDeciveName() {
        let a1 = "";
        try {
          switch (process.platform) {
            case i.LOpzN:
              a1 = "CN210105828";
              break;
            case "darwin":
              a1 = (0, P.execSync)("scutil --get ComputerName").toString().trim();
              break;
          }
        } catch {}
        this.configService.deviceName = a1 || S.default.hostname();
      }
      syncAppRemoteConfiguration() {
        const a2 = this.storeService.getAppConfig();
        this.configService.updateAppConfig(a2);
        this.fetchService.getAppConfig().then(a3 => {
          if (JSON.stringify(a3) !== JSON.stringify(a2)) {
            this.configService.updateAppConfig(a3);
            this.storeService.setAppConfig(a3);
            this.configService.isAppConfigReady = true;
            this.configService.appConfigUpdated$.next({
              cur: a3,
              pre: a2
            });
            if (a3.syncTime !== a2.syncTime) {
              this.pollingRemoteConfiguartion();
            }
            const a4 = this.storeService.getTempDevPwd();
            if (a4 && a4 !== a3.devPwd) {
              this.storeService.setTempDevPwd("");
              this.storeService.setIsDev(false);
              setTimeout(() => this.utilsService.relaunchApp());
            }
          } else {
            this.configService.isAppConfigReady = true;
          }
          this.log.info("Fetch appConfig success!");
        }).catch(a3 => {
          this.log.error("Fetch appConfig error!", this.getErrStack(a3));
        });
      }
      pollingRemoteConfiguartion() {
        let a1 = Y.POLLING_REMOTE_CONFIG_TIME;
        const {
          syncTime: a2
        } = this.configService.appConfig;
        if ((0, O.isNum)(a2) && a2 > 0 && a2 <= 120) {
          a1 = i.ROAbs(a2, 60) * 1000;
        }
        clearInterval(this.configService.intervalOfAppRemoteConfig);
        this.configService.intervalOfAppRemoteConfig = setInterval(() => {
          this.syncAppRemoteConfiguration();
        }, a1);
      }
      initAppGeneralConfiguration() {
        this.configService.generalConfig = this.storeService.getGeneralConfig();
      }
      async syncInjectCodeConfiguration() {
        this.log.info("Load code config.");
        try {
          const a1 = await this.fetchService.getInjectCode();
          if (a1) {
            this.configService.injectCodeConfig = a1;
          }
        } catch (a2) {
          if (i.sSUwF === "hoshI") {
            h.autoUpdater.requestHeaders.manualcheck = "1";
          } else {
            this.log.error("Load code error:", this.getErrStack(a2));
          }
        }
      }
      judgeToastUpdateVersion() {
        if (!this.configService.isMainWindowReady) {
          return;
        }
        if (!this.storeService.getIsPrivacyPolicyAccepted()) {
          return;
        }
        if (this.configService.checkIsAppForceUpdate()) {
          return;
        }
        const a1 = this.storeService.getLatestRunVersion();
        if (a1 && W.default.lt(a1, Y.APP_VERSION)) {
          this.eventsService.emitNewVersionUpdated();
          this.storeService.setLatestRunVersion(Y.APP_VERSION);
        }
      }
      getIsSystemDarkMode() {
        return L.nativeTheme.shouldUseDarkColors;
      }
      setIsDevMode(a1, a2) {
        if (a1) {
          if (!a2) {
            this.log.error(i.hzAUs);
            return;
          }
          const {
            appConfig: a3,
            runtimeConfig: a4
          } = this.configService;
          try {
            const a5 = a3.devPwd && a2 === (0, R.decipher)(a3.devPwd, Y.PWD_KEY, Y.PWD_IV) || a4.devModePwd && a2 === (0, R.decipher)(a4.devModePwd, Y.PWD_KEY, Y.PWD_IV);
            if (!a5) {
              this.log.warn("Dev mode password error!");
              return;
            }
          } catch {
            this.log.warn(i.efkTg);
            return;
          }
          this.storeService.setTempDevPwd(a3.devPwd);
        }
        this.log.info("Set dev mode: ", a1);
        this.storeService.setIsDev(a1);
        setTimeout(() => this.utilsService.relaunchApp());
      }
      async initCustomConfig() {
        Object.assign(this.configService.customConfig, this.storeService.getCustomConfig());
        if ((0, M.existsSync)(Y.CUSTOM_CONF_FILE)) {
          const a1 = (0, M.readFileSync)(Y.CUSTOM_CONF_FILE, {
            encoding: "utf-8"
          });
          if (a1) {
            try {
              let a2;
              a2 = {};
              eval("configObj = " + a1);
              Object.assign(this.configService.customConfig, a2);
            } catch {}
          }
        }
        await this.updateProxyAgent();
        if (this.configService.customConfig.noPopPrivacyPolicy) {
          this.storeService.setIsPrivacyPolicyAccepted();
          this.configService.isPrivacyPolicyAccepted = true;
        }
      }
      async updateProxyAgent() {
        const {
          enableSystemProxy: a1,
          enableProxyAgent: a2,
          proxyAgentUrl: a3
        } = this.configService.customConfig;
        if (a1) {
          const a4 = await L.session.defaultSession.resolveProxy("https://www.bilibili.com");
          const a5 = a4.match(/PROXY\s*([\d.:]+)/)?.[1];
          this.log.info("Init proxy agent:", a5);
          this.configService.proxyAgent = a5 ? new Q.HttpsProxyAgent("http://" + a5) : null;
        } else if (a2 && a3?.match(/^https?:\/\//)) {
          if (i.mCXXi === "CDLaZ") {
            i = "?appSubId=" + j;
          } else {
            this.configService.proxyAgent = new Q.HttpsProxyAgent(a3);
            this.log.warn("proxyAgentUrl:", a3);
          }
        } else {
          this.configService.proxyAgent = null;
        }
      }
      async updateAppProxyConfig() {
        await global.setAppProxy?.(this.configService.customConfig);
        this.updateProxyAgent();
      }
      initAppFonts() {
        if (!Y.IS_WIN) {
          return;
        }
        this.log.info("Initing fonts!");
        try {
          if (!(0, M.existsSync)(Y.APP_FONTS_DIR)) {
            this.log.info("Creating fonts dir:", Y.APP_FONTS_DIR);
            U.default.sync(Y.APP_FONTS_DIR);
          }
          this.configService.fontList.forEach(a1 => {
            if (a1.id !== "Default") {
              if ((0, M.existsSync)(a1.cssFile)) {
                a1.isReady = true;
              } else if ((0, M.existsSync)(a1.zipPath)) {
                this.handleUnzipFontZip(a1);
              } else {
                this.handleFetchFontZip(a1);
              }
            }
          });
        } catch (a1) {
          this.log.error("Init fonts error:", this.getErrStack(a1));
        }
      }
      async handleUnzipFontZip(a1) {
        this.log.info("Unzip font:", a1.name);
        try {
          U.default.sync(a1.path);
          await (0, X.default)(a1.zipPath, {
            dir: a1.path
          });
          a1.isReady = true;
          const a3 = V.default.sync(T.default.join(a1.path, "*.css"));
          a3.forEach(a4 => {
            const a5 = (0, M.readFileSync)(a4, {
              encoding: "utf-8"
            });
            const a6 = a5.replace(Y.FONTS_BFS_PTN, "./");
            (0, M.writeFileSync)(a4, a6);
          });
          if (a1.id === this.storeService.getSystemFontId()) {
            if (this.configService.isAppReady) {
              this.eventsService.emitFontsInfoChange();
            }
          }
          (0, M.removeSync)(a1.zipPath);
        } catch (a4) {
          this.log.error(i.eBgSN, this.getErrStack(a4));
        }
      }
      async handleFetchFontZip(a1) {
        this.log.info("Fetch font:", a1.name);
        try {
          const a2 = await this.fetchService.downloadFile(a1.url);
          this.log.info("Fetch font success!");
          (0, M.writeFileSync)(a1.zipPath, a2, "binary");
          this.handleUnzipFontZip(a1);
        } catch (a3) {
          this.log.error("Fetch font(" + a1.name + ") error:", this.getErrStack(a3));
        }
      }
      handleGetFontsInfo() {
        const {
          fontList: a1,
          localServer: a2
        } = this.configService;
        const a3 = a1.find(a4 => a4.id === this.storeService.getSystemFontId());
        if (a3 && a3.isReady) {
          if (a3.id === "HarmonyOS") {
            a3.hrefs.forEach((a4, a5) => {
              a3.hrefs[a5] = a4.replace(Y.FONTS_BFS_PTN, "local://fonts/HarmonyOS/");
            });
          }
        }
        return a1;
      }
      async initFfmpegPlugin() {
        this.log.info("Initing ffmpeg!");
        try {
          if (!(0, M.existsSync)(Y.APP_FFMPEG_DIR)) {
            this.log.info("Creating ffmpeg dir:", Y.APP_FFMPEG_DIR);
            U.default.sync(Y.APP_FFMPEG_DIR);
          }
          const a1 = (0, M.existsSync)(Y.FFMPEG_EXE);
          const a2 = () => {
            if (a1) {
              this.log.warn("Remove expired ffmpeg");
              (0, M.removeSync)(Y.FFMPEG_EXE);
            }
            this.handleFetchFfmpeg();
          };
          if (a1) {
            const {
              url: a4,
              hash: a5
            } = this.storeService.getFfmpegExeInfo();
            if (a4 !== this.getFfmpegUrl()) {
              a2();
            } else {
              const a6 = await (0, N.bigFileHash)(Y.FFMPEG_EXE);
              if (a6 !== a5) {
                a2();
              }
            }
          } else {
            a2();
          }
        } catch (a7) {
          this.log.error("Init ffmpeg error:", this.getErrStack(a7));
        }
      }
      getFfmpegUrl() {
        let a1 = S.default.arch();
        let a2 = S.default.platform();
        if (a2 == "darwin") {
          a2 = "mac";
        } else if (a2 == "win32") {
          a2 = "win";
        }
        if (a2 === "win" && !["ia32", "x64"].includes(a1)) {
          a1 = "ia32";
        } else if (a2 === "mac" && !["arm64", "x64"].includes(a1)) {
          a1 = "x64";
        } else if (a2 === "linux" && !["ia32", "x64"].includes(a1)) {
          a1 = "ia32";
        }
        return Y.FFMPEG_URLS[a2]?.[a1];
      }
      async handleFetchFfmpeg() {
        if (i.AaYSe("Xvwte", "TFypq")) {
          return;
        } else {
          const a2 = this.getFfmpegUrl();
          if (!a2) {
            return;
          }
          this.log.info("Fetch ffmpeg");
          try {
            const a3 = await this.fetchService.downloadFile(a2);
            this.log.info("Fetch ffmpeg success!");
            (0, M.writeFileSync)(Y.FFMPEG_ZIP, a3, "binary");
            this.handleUnzipFfmpeg(a2);
          } catch (a4) {
            this.log.error("Fetch ffmpeg error:", this.getErrStack(a4));
          }
        }
      }
      async handleUnzipFfmpeg(a1) {
        if (i.tBzoW !== i.tBzoW) {
          return false;
        } else {
          this.log.info("Unzip ffmpeg");
          try {
            if (i.yEBLI("FvJzQ", "sVoFR")) {
              await (0, X.default)(Y.FFMPEG_ZIP, {
                dir: Y.APP_FFMPEG_DIR
              });
              if (!Y.IS_WIN) {
                try {
                  (0, P.execSync)("chmod +x " + Y.FFMPEG_EXE_);
                } catch (a4) {
                  this.log.error("Chmod ffmpeg error", this.getErrStack(a4));
                }
              }
              const a3 = await (0, N.bigFileHash)(Y.FFMPEG_EXE);
              this.storeService.setFfmpegExeInfo({
                url: a1,
                hash: a3
              });
              this.log.info("Unzip ffmpeg success!");
              (0, M.removeSync)(Y.FFMPEG_ZIP);
            } else {
              this.pollingRemoteConfiguartion();
            }
          } catch (a6) {
            this.log.error("Unzip ffmpeg error:", this.getErrStack(a6));
          }
        }
      }
      initAppSleepTask() {
        const {
          runtimeConfig: a1,
          customConfig: a2,
          isAppQuited: a3,
          isHideByBossShortcut: a4,
          isAppSleeping: a5
        } = this.configService;
        if (a3 || a4 || a5) {
          return;
        }
        if (a1.disableSleep) {
          return;
        }
        const a6 = (0, O.isNum)(a2.fallAsleepTime) ? a2.fallAsleepTime : Y.FALL_ASLEEP_TIME;
        if (a6 < 0) {
          return;
        }
        const a7 = this.downloadService.hasDownloadingTasks();
        if (a7) {
          return;
        }
        const a8 = this.gameService.hasDownloadingGames();
        if (a8) {
          return;
        }
        if (this.configService.checkIsAppForceUpdate()) {
          return;
        }
        clearTimeout(this.configService.timeoutOfAppSleepCheck);
        this.configService.timeoutOfAppSleepCheck = setTimeout(() => {
          const a9 = L.BrowserWindow.getAllWindows();
          if (a9.every(aa => this.utilsService.isWindowHide(aa))) {
            clearTimeout(this.configService.timeoutOfAppSleep);
            this.log.info("Start app sleep timer! (" + a6 + "ms)");
            this.configService.timeoutOfAppSleep = i.mMNye(setTimeout, () => this.makeBiliAppSleep(), a6);
          }
        }, 200);
      }
      wakeUpBiliApp() {
        const {
          timeoutOfAppSleep: a1,
          isAppSleeping: a2
        } = this.configService;
        if (a1) {
          this.log.info("Clear app sleep timer!");
          clearTimeout(a1);
          this.configService.timeoutOfAppSleep = null;
        }
        if (a2) {
          this.log.info("Wake up sleeping app!");
          this.reportService.reportPerformanceInfo();
          this.configService.appAwakeTime = Date.now();
          this.configService.openPlayerParams = null;
          this.configService.isAppSleeping = false;
          this.configService.appSleepChange$.next(false);
          this.configService.createDefaultWindows$.next();
        }
      }
      makeBiliAppSleep() {
        const {
          isAppSleeping: a1,
          mainWindow: a2,
          playerWindow: a3
        } = this.configService;
        if (!a1) {
          this.log.info("App sleeping!");
          this.reportService.reportPerformanceInfo();
          a2?.removeAllListeners();
          a2?.close();
          a3?.removeAllListeners();
          a3?.close();
          global.mainWindow = null;
          this.configService.mainWindow = null;
          this.configService.playerWindow = null;
          this.configService.isSplashWindowReady = false;
          this.configService.isMainWindowReady = false;
          this.configService.isPlayerWindowReady = false;
          this.configService.isMainWindowShowed = false;
          this.configService.mainWinInitShowSub?.unsubscribe();
          this.configService.isAppSlept = true;
          this.configService.isAppSleeping = true;
          this.configService.appSleepChange$.next(true);
          this.configService.playingWinStatusChange$.next();
        }
      }
      async getAppCache() {
        try {
          const a1 = L.session.defaultSession;
          const a2 = await a1.getCacheSize();
          const a3 = (a2 / 1048576).toFixed(2);
          this.log.info("Get cache size: " + a3 + " MB");
          return a3;
        } catch (a4) {
          this.log.error("Get cache size error:", this.formatError(a4));
        }
      }
      async clearAppCache() {
        try {
          const a1 = L.session.defaultSession;
          await a1.clearCache();
          this.log.info("Clear cache success.");
        } catch (a2) {
          this.log.error("Clear cache error:", this.formatError(a2));
        }
      }
      async clearDNSCache() {
        try {
          let a1;
          if (Y.IS_WIN) {
            a1 = (0, P.execSync)("ipconfig /flushdns");
          } else if (Y.IS_MAC) {
            a1 = (0, P.execSync)("dscacheutil -flushcache");
          } else {
            a1 = (0, P.execSync)("systemd-resolve --flush-caches");
          }
          this.log.info("Clear DNS cache done:\n", a1.toString());
        } catch (a3) {
          this.log.error("Clear DNS cache error:", this.formatError(a3));
        }
      }
      watchAppLogChange() {
        if (i.UShPH !== "nlBUR") {
          if (this.isAppLogWatching) {
            return;
          }
          this.isAppLogWatching = true;
          let a1;
          this.log.info("Watching app log");
          if (Y.IS_WIN && !Y.IS_WIN7OR8) {
            const a2 = ["Get-Content", Y.APP_LOG_FILE, "-Wait", "-Tail", "150"];
            a1 = (0, P.spawn)("powershell.exe", a2, {
              cwd: "./",
              stdio: "pipe"
            });
          } else {
            a1 = (0, P.spawn)("tail", ["-f", "-n", "150", Y.APP_LOG_FILE], {
              cwd: "./",
              stdio: "pipe"
            });
          }
          a1.stdout.on("data", a3 => {
            const a4 = a3.toString();
            this.appLogs.push(a4);
            if (this.appLogs.length > this.appLogLimit) {
              this.appLogs.shift();
            }
            this.eventsService.emitAppLogChange(a4);
          });
          a1.on("exit", a3 => {
            this.isAppLogWatching = false;
            this.log.info("[watchAppLogChange] Finished. code:", a3);
          });
        } else {
          this.configService.onQuitingApp$.next();
          i.app.relaunch();
          j.app.exit();
        }
      }
      convertKeys(a1, a2) {
        const a4 = [];
        const a5 = new WeakMap();
        const a6 = [[a1, a2]];
        while (a6.length > 0) {
          const [a8, a9] = a6.shift();
          const aa = Object.getPrototypeOf(a8);
          let ab = Object.entries(a8);
          if (aa !== null && Object.getPrototypeOf(aa) !== null) {
            ab = ab.concat(Reflect.ownKeys(aa).filter(ac => {
              const ad = Object.getOwnPropertyDescriptor(aa, ac);
              return typeof ac === "string" && ac !== "constructor" && typeof ad?.get !== "function" && typeof aa[ac] === "function";
            }).map(ac => [ac, aa[ac]]));
          }
          for (const [ac, ad] of ab) {
            const ae = a9 ? a9 + "." + ac : ac;
            if (typeof ad === i.kTXOz && ad !== null) {
              if (a5.get(ad) > 1) {
                continue;
              }
              a5.set(ad, a5.get(ad) + 1 || 1);
              a6.push([ad, ae]);
            } else {
              a4.push(ae);
            }
          }
        }
        return a4;
      }
      getAppLogTipStrings() {
        const a1 = this.convertKeys(global.biliApp, "this");
        const a2 = this.convertKeys(global.biliApp, "biliApp");
        return a1.concat(a2);
      }
      handlePowerSaveBlocker() {
        const a1 = this.storeService.getDownloadNoSleep();
        if (a1) {
          if (this.downloadService.hasDownloadingTasks() || this.gameService.hasDownloadingGames()) {
            if (!this.configService.powerSaveBlockerId) {
              this.configService.powerSaveBlockerId = L.powerSaveBlocker.start("prevent-app-suspension");
              this.log.info("Start power save blocker!", this.configService.powerSaveBlockerId);
            }
            if (Y.IS_WIN) {
              try {
                require("@bilibili/keep-pc-alive").preventSleep();
                this.log.info("SetThreadExecutionState called to prevent sleep.");
              } catch (a2) {
                this.log.error("SetThreadExecutionState error:", this.getErrStack(a2));
              }
            }
          } else {
            this.stopPowerSaveBlocker();
          }
        } else {
          this.stopPowerSaveBlocker();
        }
      }
      stopPowerSaveBlocker() {
        if (this.configService.powerSaveBlockerId) {
          this.log.info("Clear power save blocker!", this.configService.powerSaveBlockerId);
          L.powerSaveBlocker.stop(this.configService.powerSaveBlockerId);
          this.configService.powerSaveBlockerId = null;
        }
        if (Y.IS_WIN) {
          try {
            require("@bilibili/keep-pc-alive").allowSleep();
            this.log.info("SetThreadExecutionState called to allow sleep.");
          } catch (a1) {
            this.log.error(i.gBabw, this.getErrStack(a1));
          }
        }
      }
      async smoothScroll(a1, a2) {
        const a3 = Math.floor(a1 / 3);
        for (let a4 = 0; i.FbQRG(a4, 3); a4++) {
          if (a2 === "l") {
            await this.mouse.scrollLeft(a3);
          } else if (a2 === "r") {
            await this.mouse.scrollRight(a3);
          } else if (a2 === "u") {
            await this.mouse.scrollUp(a3);
          } else if (a2 === "d") {
            await this.mouse.scrollDown(a3);
          }
          await (0, N.sleep)();
        }
      }
      getGamepadWindowAndViews() {
        const {
          mainWindow: a1,
          playerWindow: a2,
          liveRoomWindow: a3,
          universalWindow: a4,
          liveRoomGpView: a5,
          universalGpView: a6
        } = this.configService;
        return [a1, a2, a3, a4, a5, a6];
      }
      switchToNextWindow(a1) {
        if (!a1 || a1.isDestroyed() || !a1.isFocused()) {
          return null;
        }
        if (this.isOnSwitchingWin) {
          return null;
        }
        this.isOnSwitchingWin = true;
        setTimeout(() => this.isOnSwitchingWin = false, 200);
        const [a2, a3, a4, a5] = this.getGamepadWindowAndViews();
        const a6 = ["mainWindow", "playerWindow", "liveRoomWindow", "universalWindow"];
        const a7 = [a2, a3, a4, a5].map((a9, aa) => ({
          win: a9,
          name: a6[aa]
        })).filter(({
          win: a9
        }) => !this.utilsService.isWindowHide(a9));
        if (!a7.length) {
          return null;
        }
        let a8 = a7.findIndex(({
          win: a9
        }) => a9.id === a1.id) + 1;
        if (a8 >= a7.length) {
          a8 = 0;
        }
        a7[a8].win.focus();
        return a7[a8].name;
      }
      checkIsMouseOnApp() {
        const {
          x: a1,
          y: a2
        } = L.screen.getCursorScreenPoint();
        const a3 = L.screen.getDisplayNearestPoint({
          x: a1,
          y: a2
        });
        const {
          x: a4,
          y: a5,
          width: a6,
          height: a7
        } = a3.workArea;
        const a8 = L.BrowserWindow.getAllWindows();
        for (const a9 of a8) {
          if (this.utilsService.isWindowHide(a9)) {
            continue;
          }
          const {
            x: aa,
            y: ab,
            width: ac,
            height: ad
          } = a9.getBounds();
          if (a1 >= aa && a1 <= aa + ac && a2 >= ab && a2 <= ab + ad && a1 >= a4 && i.cOuSM(a1, a4 + a6) && a2 >= a5 && a2 <= a5 + a7) {
            if (i.zLSZg("GfToP", "sKMRr")) {
              h = "01";
            } else {
              return true;
            }
          }
        }
        return false;
      }
      async handleGamepadAction(a1, a2) {
        if (i.rRjMz(!a1, !a2)) {
          return;
        }
        switch (a1.action) {
          case "getGpEnabled":
            return this.configService.isGamepadEnabled;
          case i.mByMl:
            this.configService.isGamepadEnabled = a1.params;
            return;
          case "getSettings":
            return this.storeService.getGamepadSettings();
          case i.ZqMsR:
            this.storeService.setGamepadSettings(a1.params);
            return;
          case "getMousePos":
            {
              const {
                x: a3,
                y: a4
              } = await this.mouse.getPosition();
              return {
                x: a3,
                y: a4
              };
            }
          case "moveMouseTo":
            {
              const {
                x: a6,
                y: a7,
                dx: a8,
                dy: a9,
                pressed: aa
              } = a1.params || {};
              await this.mouse.move([{
                x: a6,
                y: a7
              }]);
              if (aa) {
                const {
                  x: ab,
                  y: ac,
                  width: ad
                } = a2.getBounds();
                if (a6 > ab && a6 < ab + ad && a7 > ac && a7 < ac + 70) {
                  a2.setPosition(ab + a8, ac + a9);
                }
              }
              return;
            }
          case i.LVtSc:
            {
              let {
                x: af,
                y: ag
              } = a1.params || {};
              if (Y.IS_WIN) {
                const ah = this.utilsService.getDisplayScaleFactor(a2);
                af = af * ah;
                ag = ag * ah;
              }
              await this.mouse.setPosition({
                x: af,
                y: ag
              });
              await (0, N.sleep)();
              await this.mouse.move([{
                x: ++af,
                y: ++ag
              }]);
              return;
            }
          case "mouseClick":
            await this.mouse.click(0);
            return;
          case i.FoqSJ:
            await this.mouse.doubleClick(0);
            return;
          case "scrollLeft":
            if (a1.params?.smooth) {
              await this.smoothScroll(a1.params.value || 100, "l");
              await (0, N.sleep)(100);
            } else {
              await this.mouse.scrollLeft(a1.params.value || 100);
            }
            return;
          case "scrollRight":
            if (a1.params?.smooth) {
              await this.smoothScroll(a1.params.value || 100, "r");
              await (0, N.sleep)(100);
            } else {
              await this.mouse.scrollRight(a1.params.value || 100);
            }
            return;
          case "scrollUp":
            if (a1.params?.smooth) {
              await this.smoothScroll(a1.params.value || 100, "u");
              await (0, N.sleep)(100);
            } else {
              await this.mouse.scrollUp(a1.params.value || 100);
            }
            return;
          case "scrollDown":
            if (a1.params?.smooth) {
              await this.smoothScroll(a1.params.value || 100, "d");
              await (0, N.sleep)(100);
            } else {
              await this.mouse.scrollDown(a1.params.value || 100);
            }
            return;
          case "pressButton":
            if (this.checkIsMouseOnApp()) {
              await this.mouse.pressButton(0);
            }
            return;
          case "releaseButton":
            await this.mouse.releaseButton(0);
            return;
          case i.UQIfH:
            if (a1.params?.key) {
              await this.keyboard.type(a1.params.key);
            }
            return;
          case "getWindowPos":
            {
              const {
                x: aj,
                y: ak
              } = a2.getBounds();
              const [al, am, an, ao, ap, aq] = this.getGamepadWindowAndViews();
              if (a2.id === an?.id) {
                const {
                  x: ar,
                  y: as
                } = ap.getBounds();
                return {
                  x: aj + ar,
                  y: i.RomJJ(ak, as)
                };
              } else if (a2.id === ao?.id) {
                const {
                  x: at,
                  y: au
                } = aq.getBounds();
                return {
                  x: aj + at,
                  y: ak + au
                };
              } else {
                return {
                  x: aj,
                  y: ak
                };
              }
            }
          case "centerWindow":
            {
              const av = a2.getBounds();
              const aw = L.screen.getDisplayMatching(av);
              const {
                width: ax,
                height: ay
              } = av;
              const {
                x: az,
                y: aA
              } = aw.bounds;
              const {
                width: aB,
                height: aC
              } = aw.workAreaSize;
              const aD = Math.round((aB - ax) / 2 + az);
              const aE = Math.round((aC - ay) / 2 + aA);
              a2.setBounds({
                x: aD,
                y: aE
              });
              return;
            }
          case "switchWindow":
            {
              this.switchToNextWindow(a2);
              return;
            }
          case i.AfIwt:
            {
              const [aF, aG, aH, aI] = this.getGamepadWindowAndViews();
              const aJ = L.BrowserWindow.getFocusedWindow();
              if (a2.id === aJ?.id) {
                return true;
              }
              if (![aF?.id, aG?.id, aH?.id, aI?.id].includes(aJ?.id)) {
                for (const aK of [aF, aG, aH, aI]) {
                  if (a2.id === aK?.id) {
                    return !this.utilsService.isWindowHide(aK);
                  }
                }
              }
              return false;
            }
          case "showGpView":
            {
              const [aM, aN, aO, aP, aQ, aR] = this.getGamepadWindowAndViews();
              const {
                width = 200,
                height = 300
              } = a1.params || {};
              if (a2.id === aO?.id) {
                this.utilsService.centerBrowserView(aO, aQ, {
                  width: width,
                  height: height
                });
              } else if (a2.id === aP?.id) {
                this.utilsService.centerBrowserView(aP, aR, {
                  width: width,
                  height: height
                });
              }
              return;
            }
          case "hideGpView":
            {
              const [aS, aT, aU, aV, aW, aX] = this.getGamepadWindowAndViews();
              if (i.AaYSe(a2.id, aU?.id)) {
                this.utilsService.centerBrowserView(aU, aW, {
                  width: 1,
                  height: 1
                });
              } else if (a2.id === aV?.id) {
                this.utilsService.centerBrowserView(aV, aX, {
                  width: 1,
                  height: 1
                });
              }
              return;
            }
          case i.fWQMn:
            {
              this.eventsService.emitGamepadLiveAction(a1.params);
              return;
            }
          case "livePlayerInfo":
            {
              this.eventsService.emitGamepadLiveInfo(a1.params);
              return;
            }
        }
      }
    };
    Z = j([(0, A.Injectable)(), k("design:paramtypes", [typeof (m = typeof C.ConfigService !== "undefined" && C.ConfigService) === "function" ? m : Object, typeof (n = i.cKijs(typeof D.FetchService, "undefined") && D.FetchService) === "function" ? n : Object, typeof (o = typeof F.StoreService !== "undefined" && F.StoreService) === "function" ? o : Object, typeof (q = typeof E.EventsService !== i.fFbbe && E.EventsService) === "function" ? q : Object, i.cEacA(typeof (r = typeof G.ReportService !== "undefined" && G.ReportService), i.ntdQB) ? r : Object, typeof (t = typeof H.DownloadService !== "undefined" && H.DownloadService) === "function" ? t : Object, typeof (u = typeof J.GameService !== "undefined" && J.GameService) === "function" ? u : Object, typeof (w = i.yEBLI(typeof I.UtilsService, i.fFbbe) && I.UtilsService) === "function" ? w : Object, typeof (z = typeof K.PlayerService !== "undefined" && K.PlayerService) === "function" ? z : Object])], Z);
    g.SystemService = Z;
  }
});
var j8 = bX({
  ""(g) {
    'use strict';

    var i = g && g.__decorate || function (w, z, A, B) {
      var C = arguments.length;
      var D = C < 3 ? z : B === null ? B = Object.getOwnPropertyDescriptor(z, A) : B;
      var E;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        D = Reflect.decorate(w, z, A, B);
      } else {
        for (var F = w.length - 1; F >= 0; F--) {
          if (E = w[F]) {
            D = (C < 3 ? E(D) : C > 3 ? E(z, A, D) : E(z, A)) || D;
          }
        }
      }
      if (C > 3 && D) {
        Object.defineProperty(z, A, D);
      }
      return D;
    };
    var j = g && g.__metadata || function (w, z) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(w, z);
      }
    };
    var k;
    var l;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.TrayMenuService = undefined;
    ga();
    var m = c2(g9);
    var n = require("@nestjs/common");
    var o = gK();
    var q = ix();
    var r = require("electron");
    fP();
    var t = c2(fO);
    var u = class w extends m.BaseService {
      constructor(z, A) {
        super("TrayMenuService");
        c3(this, "configService");
        c3(this, "utilsService");
        c3(this, "appTray", null);
        this.configService = z;
        this.utilsService = A;
        this.configService.beforeQuitApp$.subscribe(() => {
          this.destoryApplicationTray();
        });
      }
      initAppTrayAndMenu() {
        this.createApplicationTray();
        this.createApplicationMenu();
        if (t.IS_MAC) {
          r.app.setAboutPanelOptions({
            applicationName: "哔哩哔哩",
            applicationVersion: "版本 v" + t.APP_VERSION,
            version: t.FAWKES_JOB_ID,
            copyright: "© " + new Date().getFullYear() + " 版权所有",
            website: "https://www.bilibili.com"
          });
        }
      }
      destoryApplicationTray() {
        if (this.appTray) {
          this.log.info("Destoring app tray");
          this.appTray.destroy();
          this.appTray = null;
        }
      }
      toggleMainWindow(z) {
        const {
          isAppSleeping: A,
          wakeUpBiliApp$: B,
          mainWindow: C
        } = this.configService;
        if (A) {
          B.next();
          return;
        }
        if (C && !C.isDestroyed()) {
          if (!C.isFocused()) {
            C.show();
          } else if (!z) {
            C.hide();
          }
        }
      }
      createApplicationTray() {
        if (!this.appTray) {
          this.appTray = new r.Tray(t.APP_TRAY_ICON_PATH);
          this.appTray.setToolTip("哔哩哔哩");
          if (!t.IS_MAC) {
            this.log.info("Creating app tray.");
            this.appTray.setContextMenu(r.Menu.buildFromTemplate([{
              label: "设置",
              click: () => this.configService.openMainWindowPage$.next({
                page: "SettingsPage"
              })
            }, {
              label: "意见反馈",
              click: () => this.utilsService.shellOpenExternal(t.FEEDBACK_URL, "main.TrayMenu")
            }, {
              label: "官网",
              click: () => this.utilsService.shellOpenExternal("https://www.bilibili.com", "main.TrayMenu")
            }, {
              label: "退出应用",
              click: () => r.app.quit()
            }]));
          }
          this.appTray.on("click", () => this.toggleMainWindow());
        }
      }
      createApplicationMenu() {
        this.log.info("Creating app menu.");
        const z = r.Menu.buildFromTemplate([{
          label: "哔哩哔哩",
          submenu: [{
            label: "关于",
            role: "about"
          }, {
            type: "separator"
          }, {
            label: "设置",
            click: () => this.configService.openMainWindowPage$.next({
              page: "SettingsPage"
            })
          }, {
            type: "separator"
          }, {
            label: "隐藏其它",
            role: "hideOthers"
          }, {
            label: "显示",
            role: "unhide"
          }, {
            type: "separator"
          }, {
            label: "退出应用",
            role: "quit"
          }]
        }, {
          label: "文件",
          submenu: [{
            label: "关闭",
            role: "close"
          }]
        }, {
          label: "编辑",
          submenu: [{
            label: "撤销",
            role: "undo"
          }, {
            label: "重做",
            role: "redo"
          }, {
            type: "separator"
          }, {
            label: "剪切",
            role: "cut"
          }, {
            label: "复制",
            role: "copy"
          }, {
            label: "粘贴",
            role: "paste"
          }, {
            label: "带格式粘贴",
            role: "pasteAndMatchStyle"
          }, {
            label: "删除",
            role: "delete"
          }, {
            label: "全选",
            role: "selectAll"
          }]
        }, ...(this.configService.isDevMode ? [{
          label: "视图",
          submenu: [{
            label: "服务",
            role: "services"
          }, {
            type: "separator"
          }, {
            label: "刷新",
            role: "reload"
          }, {
            label: "强制刷新",
            role: "forceReload"
          }, {
            label: "开发者工具",
            role: "toggleDevTools"
          }, {
            type: "separator"
          }, {
            label: "重置缩放",
            role: "resetZoom"
          }, {
            label: "放大",
            role: "zoomIn"
          }, {
            label: "缩小",
            role: "zoomOut"
          }, {
            type: "separator"
          }, {
            label: "全屏",
            role: "togglefullscreen"
          }]
        }] : []), {
          label: "窗口",
          submenu: [{
            label: "显示主窗口",
            click: () => this.toggleMainWindow(true)
          }, {
            type: "separator"
          }, {
            label: "最小化",
            role: "minimize"
          }, {
            label: "最大化或恢复",
            role: "zoom"
          }, {
            type: "separator"
          }, {
            label: "窗口前置",
            role: "front"
          }, {
            type: "separator"
          }, {
            label: "窗口",
            role: "window"
          }]
        }, {
          label: "帮助",
          submenu: [{
            label: "意见反馈",
            click: () => this.utilsService.shellOpenExternal(t.FEEDBACK_URL, "main.TrayMenu")
          }]
        }]);
        r.Menu.setApplicationMenu(z);
      }
    };
    u = i([(0, n.Injectable)(), j("design:paramtypes", [typeof (k = typeof o.ConfigService !== "undefined" && o.ConfigService) === "function" ? k : Object, typeof (l = typeof q.UtilsService !== "undefined" && q.UtilsService) === "function" ? l : Object])], u);
    g.TrayMenuService = u;
  }
});
var j9 = {};
bY(j9, {
  INTERCEPT_LOGIN_URLS: () => ja,
  WEB_REQUEST_FILTER: () => jb,
  WEB_REQUEST_LOGOUT: () => jc
});
var ja;
var jb;
var jc;
var jd = bW({
  ""() {
    ja = [/:\/\/passport\.bilibili\.com\/login/, /:\/\/passport\.bilibili\.com\/h5-app\/passport\/login/];
    jb = ["*://*.bilibili.com/*"];
    jc = "login/exit/v2";
  }
});
var je = bX({
  ""(g) {
    'use strict';

    var h = {
      JRehe: function (Q, R) {
        return Q > R;
      },
      OTRFm: "function",
      TcmGW: "WindowEvents",
      QFOln: function (Q, R, S, T) {
        return Q(R, S, T);
      },
      pWnos: "Start close window: ",
      nusCY: "always-on-top-changed",
      yYtmI: function (Q, R) {
        return Q === R;
      },
      vhIIS: "pRmtb",
      oDPDT: "Xjhev",
      KshEY: "will-move",
      aQxFi: function (Q, R) {
        return Q === R;
      },
      WQurL: "BsENw",
      NZFmq: "Startup timeline: ",
      qVcKM: "light",
      uJFMJ: "dark",
      KSUMf: "LaSOw",
      tycgO: "Player window closed!",
      SURcv: "will-download",
      Zihqs: "ZAqPv",
      RsVvh: "Is boss shortcut registered:",
      eNuig: function (Q, R) {
        return Q || R;
      },
      AApOm: "@nestjs/common",
      OxVEY: function (Q, R) {
        return Q !== R;
      },
      wZfMV: "undefined",
      tRCUQ: function (Q, R) {
        return Q !== R;
      }
    };
    var i = g && g.__decorate || function (Q, R, S, T) {
      var U = arguments.length;
      var V = U < 3 ? R : T === null ? T = Object.getOwnPropertyDescriptor(R, S) : T;
      var W;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        V = Reflect.decorate(Q, R, S, T);
      } else {
        for (var X = Q.length - 1; X >= 0; X--) {
          if (W = Q[X]) {
            V = (U < 3 ? W(V) : h.JRehe(U, 3) ? W(R, S, V) : W(R, S)) || V;
          }
        }
      }
      if (U > 3 && V) {
        Object.defineProperty(R, S, V);
      }
      return V;
    };
    var j = g && g.__metadata || function (Q, R) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === h.OTRFm) {
        return Reflect.metadata(Q, R);
      }
    };
    var k;
    var l;
    var m;
    var n;
    var o;
    var q;
    var r;
    var t;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.WindowEvents = undefined;
    var u = require(h.AApOm);
    ga();
    var w = c2(g9);
    var z = gK();
    var A = iz();
    var B = j7();
    var C = gP();
    var D = iM();
    var E = io();
    var F = j8();
    var G = ix();
    var H = require("@bilibili/b-utils-core");
    var I = require("electron");
    im();
    var J = c2(il);
    var K = require("path");
    var L = require("fs-extra");
    fP();
    var M = c2(fO);
    jd();
    var N = c2(j9);
    dn();
    var O = c2(dm);
    var P = class Q extends w.BaseService {
      constructor(R, S, T, U, V, W, X, Y) {
        super(h.TcmGW);
        c3(this, "configService");
        c3(this, "authService");
        c3(this, "systemService");
        c3(this, "eventsService");
        c3(this, "reportService");
        c3(this, "storeService");
        c3(this, "trayMenuService");
        c3(this, "utilsService");
        c3(this, "bossShortcut", "");
        c3(this, "isMainWindowOpened", false);
        c3(this, "isPlayerWindowOpened", false);
        h.QFOln(c3, this, "isLiveRoomWindowOpened", false);
        c3(this, "refreshUserInfoTime", Date.now());
        c3(this, "handleUniversalDownload", (a0, a1, a2) => {
          const a4 = a1.getFilename();
          this.log.info("Universal view download file:", a4);
          const a5 = I.dialog.showSaveDialogSync(this.configService.uploadWindow, {
            defaultPath: (0, K.join)(I.app.getPath("downloads"), a4)
          });
          if (a5) {
            a1.setSavePath(a5);
            a1.on("updated", (a6, a7) => {
              if (a7 === "progressing") {
                if (a1.isPaused()) {
                  this.log.info("View download paused：", a4);
                } else {
                  this.log.info("View download Progress(" + a4 + ")：", (a1.getReceivedBytes() / a1.getTotalBytes() * 100).toFixed(2) + "%");
                }
              }
            });
            a1.once("done", (a6, a7) => {
              if (a7 === "completed") {
                this.log.info("View download completed：", a5);
              } else {
                this.log.info("View download error(" + a5 + ")：", a7);
              }
            });
          } else {
            a1.cancel();
          }
        });
        this.configService = R;
        this.authService = S;
        this.systemService = T;
        this.eventsService = U;
        this.reportService = V;
        this.storeService = W;
        this.trayMenuService = X;
        this.utilsService = Y;
        this.configService.mainWindowFirstReady$.subscribe(() => this.registerGlobalShortcut());
        this.configService.themeChange$.subscribe(() => {
          this.initPlayerWindowTheme();
          this.initLiveRoomWindowTheme();
        });
      }
      registerWindowEvents(R, S, T = false, U) {
        var V = {
          htyGK: function (a0, a1) {
            return a0 !== a1;
          },
          EVHSS: "window/focusChange",
          rlTpe: h.pWnos,
          MINIa: "FWitn"
        };
        if ((0, H.isFun)(T)) {
          U = T;
          T = false;
        }
        const W = R.id;
        let X = false;
        let Y = R.isMaximized();
        let Z = false;
        R.on("restore", () => this.eventsService.sendEventToWindow(R, "window/restore"));
        R.on("minimize", () => this.eventsService.sendEventToWindow(R, "window/minimize"));
        R.on("hide", () => {
          if (X && !R.isVisible()) {
            if (V.htyGK("wmYJh", "eOhJh")) {
              X = false;
              this.eventsService.emitWindowStatusChange();
              this.eventsService.sendEventToWindow(R, "window/visibleChange", {
                data: false
              });
            } else {
              i.returnValue = this.configService.isDevMode;
              return j.returnValue;
            }
          }
        });
        R.on("show", () => {
          this.eventsService.sendEventToWindow(R, "window/show");
          R.isHidden = false;
          if (!X) {
            X = true;
            this.eventsService.emitWindowStatusChange();
            this.eventsService.sendEventToWindow(R, "window/visibleChange", {
              data: true
            });
          }
        });
        R.on("blur", () => {
          if (Z) {
            Z = false;
            this.eventsService.emitWindowStatusChange();
            this.eventsService.sendEventToWindow(R, "window/blur");
            this.eventsService.sendEventToWindow(R, "window/focusChange", {
              data: false
            });
          }
        });
        R.on("focus", () => {
          if (!Z) {
            Z = true;
            this.eventsService.emitWindowStatusChange();
            this.eventsService.sendEventToWindow(R, "window/focus");
            this.eventsService.sendEventToWindow(R, V.EVHSS, {
              data: true
            });
          }
        });
        R.on("maximize", () => {
          this.eventsService.sendEventToWindow(R, "window/maximize");
          this.eventsService.sendEventToWindow(R, "window/maximizeChange", {
            data: true
          });
        });
        R.on("unmaximize", () => {
          this.eventsService.sendEventToWindow(R, "window/unmaximize");
          this.eventsService.sendEventToWindow(R, "window/maximizeChange", {
            data: false
          });
        });
        R.on("resized", () => {
          const a0 = R.isMaximized();
          if (a0 !== Y) {
            Y = a0;
            this.eventsService.sendEventToWindow(R, "window/maximizeChange", {
              data: a0
            });
          }
        });
        R.on("close", a0 => {
          this.log.info(V.rlTpe, S);
          const {
            isForceCloseWindows: a1,
            catchCloseWinIds: a2,
            isAppQuited: a3
          } = this.configService;
          if (a1) {
            return;
          }
          if (a2.includes(W)) {
            a0.preventDefault();
            this.eventsService.sendEventToWindow(R, "window/willClose", {
              data: a3
            });
            return;
          }
          this.eventsService.sendEventToWindow(R, "window/close");
          if ((0, H.isFun)(U)) {
            U(a0);
          }
        });
        R.on("closed", () => {
          this.log.info("Window closed: ", S);
          this.eventsService.emitWindowStatusChange();
          this.eventsService.emitWindowClosed();
          const {
            catchCloseWinIds: a0
          } = this.configService;
          for (let a1 = 0; a1 < a0.length; a1++) {
            if (a0[a1] === W || !I.BrowserWindow.fromId(a0[a1])) {
              a0.splice(a1, 1);
              a1--;
            }
          }
          ;
          R.isHidden = true;
        });
        R.on(h.nusCY, (a0, a1) => {
          this.eventsService.sendEventToWindow(R, "window/pinChange", {
            data: a1
          });
        });
        R.on("leave-full-screen", () => {
          if (V.MINIa !== "ktDva") {
            if (!T) {
              R.setFullScreenable(false);
            }
            this.eventsService.sendEventToWindow(R, "window/leaveFullScreen");
            this.eventsService.sendEventToWindow(R, "window/fullScreenChange", {
              data: false
            });
          } else {
            this.log.error("Create game download root path error!");
            h.dialog.showErrorBox("错误", "游戏不能下载到磁盘的根目录下，请选择或创建一个文件夹作为下载路径");
            return;
          }
        });
        R.on("enter-full-screen", () => {
          this.eventsService.sendEventToWindow(R, "window/enterFullScreen");
          this.eventsService.sendEventToWindow(R, "window/fullScreenChange", {
            data: true
          });
        });
      }
      registerAppSleepEvent(R) {
        R.on("show", () => this.systemService.wakeUpBiliApp());
        R.on("hide", () => this.systemService.initAppSleepTask());
        R.on("closed", () => this.systemService.initAppSleepTask());
      }
      registerClosableWindowEvents(R, S) {
        const T = this.configService[R];
        if (T instanceof I.BrowserWindow) {
          T.on("closed", () => {
            T?.destroy();
            this.configService[R] = null;
            if ((0, H.isFun)(S)) {
              S();
            }
          });
        }
      }
      catchCertVerifyError(R) {
        R.webContents.session.setCertificateVerifyProc((S, T) => {
          if (S.certificate.data === J.cert) {
            return T(0);
          }
          T(-3);
        });
      }
      judgeUrlIsAllowed(R, S, T) {
        if (!S || (0, O.isResourceUrl)(S)) {
          return false;
        }
        if (T === "mainWindow" || T === "playerWindow" || h.yYtmI(T, "loginRiskWindow")) {
          let W = [];
          switch (T) {
            case "mainWindow":
              W = M.MAIN_WINDOW_ALLOW_OPEN_URLS;
              break;
            case "playerWindow":
              W = M.PLAYER_WINDOW_ALLOW_OPEN_URLS;
              break;
            case "loginRiskWindow":
              W = M.RISK_WINDOW_ALLOW_OPEN_URLS;
              break;
          }
          if (W.some(X => X instanceof RegExp ? X.test(S) : S.includes(X))) {
            return true;
          }
        }
        const {
          urls: U,
          regExps: V
        } = this.configService.allowOpenUrls[R.id] || {};
        if ((0, H.isArr)(U) && U.some(X => X == S)) {
          return true;
        }
        try {
          if ((0, H.isArr)(V) && V.some(X => new RegExp(X).test(S))) {
            return true;
          }
        } catch (X) {}
        return false;
      }
      catchLinkAndWindowOpen(R, S) {
        R.webContents.on("will-navigate", (U, V) => {
          U.preventDefault();
          if (this.judgeUrlIsAllowed(R, V, S)) {
            if (this.configService.customConfig.isDisableAppBrowser) {
              this.utilsService.shellOpenExternal(V);
            } else {
              this.configService.openOrFocusUniversalWindow$.next({
                url: V
              });
            }
          }
        });
        R.webContents.setWindowOpenHandler(({
          url: U
        }) => {
          if (this.judgeUrlIsAllowed(R, U, S)) {
            if (this.configService.customConfig.isDisableAppBrowser) {
              this.utilsService.shellOpenExternal(U);
            } else {
              this.configService.openOrFocusUniversalWindow$.next({
                url: U
              });
            }
          }
          return {
            action: "deny"
          };
        });
      }
      catchWebviewLinkAndWindowOpen(R, S, T = false) {
        R.webContents.on("did-attach-webview", (U, V) => {
          this.log.info((0, H.capitalize)(S) + " page ready!");
          if (T) {
            if (!this.configService.appWebviewIds.includes(V.id)) {
              if (h.vhIIS === "OTjWf") {
                j.returnValue = k.IS_WIN;
                return l.returnValue;
              } else {
                this.configService.appWebviewIds.push(V.id);
              }
            }
          }
          V.on("will-navigate", (Y, Z) => {
            if (this.judgeUrlIsAllowed(R, Z, S)) {
              if (S === "loginRiskWindow") {
                return;
              }
              Y.preventDefault();
              if (this.configService.customConfig.isDisableAppBrowser) {
                this.utilsService.shellOpenExternal(Z);
              } else {
                this.configService.openOrFocusUniversalWindow$.next({
                  url: Z
                });
              }
            } else {
              Y.preventDefault();
            }
          });
          V.setWindowOpenHandler(({
            url: Y
          }) => {
            if (this.judgeUrlIsAllowed(R, Y, S)) {
              if (S === "loginRiskWindow") {
                return;
              }
              if (this.configService.customConfig.isDisableAppBrowser) {
                this.utilsService.shellOpenExternal(Y);
              } else {
                this.configService.openOrFocusUniversalWindow$.next({
                  url: Y
                });
              }
            }
            return {
              action: "deny"
            };
          });
        });
      }
      registerWindowFocusBlur(R, S, T = true) {
        let U = true;
        R.on("blur", () => {
          if (U) {
            U = false;
          }
          if (T) {
            this.judgeIsAppActive();
          }
        });
        R.on("focus", () => {
          if (!U) {
            U = true;
            this.log.info("Focus on " + S + "!");
          }
          if (T) {
            this.judgeIsAppActive();
          }
        });
      }
      judgeIsAppActive() {
        setTimeout(() => {
          if (I.BrowserWindow.getAllWindows().some(T => T.isFocused())) {
            if (!this.configService.isAppActive) {
              this.configService.isAppActive = true;
              this.configService.appActiveTime = Date.now();
              this.configService.appActiveChange$.next(true);
              this.reportService.reportAppActiveEvent();
              this.log.info("App activated!");
            }
          } else if (this.configService.isAppActive) {
            this.configService.isAppActive = false;
            this.configService.appDeactiveTime = Date.now();
            this.configService.appActiveChange$.next(false);
            this.reportService.reportAppDeactiveEvent();
            this.log.info("App deactivated!");
          }
        }, 200);
      }
      registerWindowResizeEvt(R, S) {
        let U;
        let V;
        let W;
        let X;
        let Y;
        let Z = Date.now();
        if (M.IS_WIN) {
          if (h.oDPDT === "Xjhev") {
            R.on(h.KshEY, () => {
              if (!U) {
                U = R.getBounds();
                const {
                  x: a0,
                  y: a1,
                  width: a2,
                  height: a3
                } = U;
                V = I.screen.getDisplayNearestPoint({
                  x: a0,
                  y: a1
                });
                W = I.screen.getDisplayNearestPoint({
                  x: a0,
                  y: a1 + a3
                });
                X = I.screen.getDisplayNearestPoint({
                  x: a0 + a2,
                  y: a1
                });
                Y = I.screen.getDisplayNearestPoint({
                  x: a0 + a2,
                  y: a1 + a3
                });
              } else {
                const {
                  x: a5,
                  y: a6,
                  width: a7,
                  height: a8
                } = R.getBounds();
                const a9 = I.screen.getDisplayNearestPoint({
                  x: a5,
                  y: a6
                });
                const aa = I.screen.getDisplayNearestPoint({
                  x: a5,
                  y: a6 + a8
                });
                const ab = I.screen.getDisplayNearestPoint({
                  x: a5 + a7,
                  y: a6
                });
                const ac = I.screen.getDisplayNearestPoint({
                  x: a5 + a7,
                  y: a6 + a8
                });
                if (a9.id !== V.id || aa.id !== W.id || ab.id !== X.id || ac.id !== Y.id) {
                  R.setResizable(false);
                }
              }
            });
          } else {
            q = r || this.winRef;
            if (!t) {
              return;
            }
            try {
              const a1 = D(E.getBounds());
              if (this.isNormalWindow(F)) {
                this.state.x = a1.x;
                this.state.y = a1.y;
                this.state.width = a1.width;
                this.state.height = a1.height;
              }
              this.state.isMaximized = G.isMaximized();
              this.state.isFullScreen = H.isFullScreen();
              this.state.displayBounds = I.screen.getDisplayMatching(a1).bounds;
            } catch (a2) {}
            this.storeService.setWindowState(this.config.windowName, this.state);
          }
        }
        if (M.IS_MAC) {
          R.on("will-resize", a1 => {
            if (Date.now() - Z < 200) {
              a1.preventDefault();
            }
          });
        }
        R.on("moved", () => {
          U = null;
          this.setWindowResizable(R, S);
          Z = Date.now();
        });
        R.on("show", () => {
          this.setWindowResizable(R, S);
        });
      }
      setWindowResizable(R, {
        minWidth: S,
        minHeight: T
      } = {}) {
        R.setResizable(true);
        if (M.IS_WIN) {
          if (S && T) {
            const {
              mainWindow: U,
              isMainWindowMini: V
            } = this.configService;
            if (h.aQxFi(R.id, U?.id) && V) {
              S = M.MINI_MAIN_WINDOW.minWidth;
              T = M.MINI_MAIN_WINDOW.minHeight;
            }
            R.setMinimumSize(S, T);
          }
        }
      }
      handleWindowFailLoadEvent(R) {
        let S = 0;
        R.webContents.on("did-fail-load", async (T, U, V, W, X) => {
          this.log.error("Window failed to load: " + V + " (Error code: " + U + ", url: " + W + "))");
          if (X && U === -401 && Date.now() - S > 10000) {
            S = Date.now();
            R.webContents.session.clearCache().then(() => R.webContents.reload());
          }
        });
      }
      registerMainWindowEvent() {
        const S = this.configService.mainWindow;
        S.on("show", () => {
          if (M.IS_WIN && S.isMaximized()) {
            const {
              x: U,
              y: V,
              width: W
            } = S.getBounds();
            const X = I.screen.getDisplayNearestPoint({
              x: U,
              y: V
            });
            if (X.size.width - W > 50) {
              S.unmaximize();
              setTimeout(() => S.maximize());
            }
          }
          if (this.configService.isHideByBossShortcut) {
            this.exitBossShortcutHide();
          }
          this.handleMainWindowShow();
        });
        S.on("focus", () => {
          if (this.configService.isAppQuited) {
            return;
          }
          const T = Date.now();
          const U = this.storeService.getUserInfo();
          if (U.isLogin && T - this.refreshUserInfoTime >= 300000) {
            this.refreshUserInfoTime = T;
            this.authService.refreshUserInfo();
          }
        });
        if (!this.utilsService.isWindowHide(S)) {
          this.handleMainWindowShow();
        }
        this.handleWindowFailLoadEvent(S);
      }
      handleMainWindowShow() {
        if (!this.configService.isMainWindowShowed) {
          this.configService.isMainWindowShowed = true;
          this.configService.isOpenedByLocalVido = false;
          this.configService.mainWindowInitShow$.next();
        }
      }
      handleMainWindowClose() {
        this.log.info("Main window closed!");
        this.configService.mainWindow.hide();
        this.configService.mainWindow.isHidden = true;
        this.eventsService.emitWindowClosed();
        if (this.configService.isGamepadEnabled) {
          const [R, S, T, U] = this.systemService.getGamepadWindowAndViews();
          if ((this.utilsService.isWindowHide(T) || !T.isFocused()) && (this.utilsService.isWindowHide(U) || !U.isFocused())) {
            if (!this.utilsService.isWindowHide(S)) {
              this.configService.playerWindow.focus();
            }
          }
        }
      }
      handleStartupTimeline() {
        if (h.WQurL === "iaKqm") {
          h.webContents.reload();
        } else if (!this.configService.isAppSlept) {
          const S = {
            appReadyTime: global.appReadyTime - global.biliAppInitTime,
            splashReadyTime: global.splashReadyTime - global.biliAppInitTime,
            decryptedTime: global.decriptedTime - global.biliAppInitTime,
            bootstrapTime: global.bootstrapTime - global.biliAppInitTime,
            runCodeTime: global.mainInitTime - global.biliAppInitTime,
            runCodeEndTime: global.runCodeTime - global.biliAppInitTime,
            mainWindowReady: global.mainWindowReadyTime - global.biliAppInitTime
          };
          this.log.info(h.NZFmq, JSON.stringify(S));
          this.reportService.reportAppLaunchTiming(S);
          if (process.env.PERFORMANCE_TEST) {
            const T = (0, K.resolve)(process.cwd(), "data.json");
            let U = [];
            if ((0, L.existsSync)(T)) {
              try {
                U = JSON.parse((0, L.readFileSync)(T, "utf-8"));
              } catch (V) {
                this.log.error("读取现有数据失败:", V);
              }
            }
            U.push({
              timestamp: Date.now(),
              metrics: S
            });
            (0, L.writeFileSync)(T, JSON.stringify(U, null, 2));
          }
        }
      }
      getAppMainTheme() {
        const R = this.storeService.getMainWindowTheme();
        const S = this.systemService.getIsSystemDarkMode();
        const T = R === "dark" || R === "system" && S;
        if (T) {
          return "dark";
        } else {
          return h.qVcKM;
        }
      }
      registerPlayerWindowEvent() {
        const R = this.configService.playerWindow;
        R.on("show", () => {
          R.setSkipTaskbar(false);
          if (this.configService.isHideByBossShortcut) {
            this.exitBossShortcutHide();
          }
          this.eventsService.emitPlayerWindowVisibleChange(true);
          this.configService.playingWinStatusChange$.next();
        });
        R.on("hide", () => {
          R.setSkipTaskbar(true);
        });
        R.on("focus", () => {
          if (this.configService.isPlayerWindowPined) {
            R.setAlwaysOnTop(true, "normal", 9999);
          }
        });
        R.on("will-resize", (S, {
          width: T,
          height: U
        }) => {
          const {
            minWidth: V,
            minHeight: W
          } = M.MINI_PLAYER_WINDOW;
          if (T < V || U < W) {
            S.preventDefault();
          }
        });
        this.handleWindowFailLoadEvent(R);
        this.initPlayerWindowTheme();
      }
      getPlayerWindowBgColor() {
        const R = this.storeService.getPlayerWindowTheme();
        const S = h.yYtmI(R, h.uJFMJ) || R === "followMain" && this.getAppMainTheme() === "dark";
        if (S) {
          return "#000";
        } else {
          return "#fff";
        }
      }
      initPlayerWindowTheme() {
        const R = this.configService.playerWindow;
        if (R && !R.isDestroyed()) {
          R.setBackgroundColor(this.getPlayerWindowBgColor());
        }
      }
      initLiveRoomWindowTheme() {
        const R = this.configService.liveRoomWindow;
        if (R && !R.isDestroyed()) {
          R.setBackgroundColor(this.getPlayerWindowBgColor());
        }
      }
      handlePlayerWindowClose() {
        if (h.KSUMf === "inqRs") {
          h(false);
        } else {
          this.log.info(h.tycgO);
          this.configService.playerWindow.hide();
          this.configService.playerWindow.isHidden = true;
          this.configService.playingWinStatusChange$.next();
          this.eventsService.emitPlayerWindowVisibleChange(false);
          if (M.IS_WIN && this.configService.playerWindow.isMaximized()) {
            if (!this.utilsService.isWindowHide(this.configService.mainWindow)) {
              this.configService.mainWindow.focus();
            }
          }
          if (this.configService.isGamepadEnabled) {
            const [T, U, V, W] = this.systemService.getGamepadWindowAndViews();
            if ((this.utilsService.isWindowHide(V) || !V.isFocused()) && (this.utilsService.isWindowHide(W) || !W.isFocused())) {
              this.configService.mainWindow.focus();
            }
          }
          this.eventsService.emitWindowClosed();
        }
      }
      registerUniversalWindowEvents() {
        const {
          universalWindow: S,
          universalView: T,
          universalGpView: U
        } = this.configService;
        this.handelUniversalWindowResize(S, T, U);
        S.on("resize", () => this.handelUniversalWindowResize(S, T, U));
        S.on("closed", () => {
          this.reportService.reportCloseUniversalWindow({
            url: T.webContents.getURL()
          });
          T.webContents.executeJavaScript(";[].forEach.call(document.querySelectorAll('video'), video => video.pause());location.href = 'about:blank';");
          try {
            ;
            T.webContents.close();
          } catch (Z) {}
          try {
            ;
            T.webContents.destroy();
          } catch (Y) {}
          try {
            ;
            U.webContents.close();
          } catch (a0) {}
          try {
            ;
            U.webContents.destroy();
          } catch (X) {}
          this.configService.universalView = null;
          this.configService.universalGpView = null;
          this.eventsService.emitUniversalVisibleChange(false);
        });
        S.on("enter-full-screen", () => {
          this.handelUniversalWindowResize(S, T, U);
        });
        S.on("leave-full-screen", () => {
          this.handelUniversalWindowResize(S, T, U);
        });
        S.webContents.on("dom-ready", () => {
          S.show();
          this.eventsService.emitUniversalVisibleChange(true);
        });
        this.handleWindowFailLoadEvent(S);
        T.webContents.on("will-navigate", (V, W) => {
          this.handleUniversalViewNavigate(V, W);
        });
        T.webContents.on("will-redirect", (V, W) => {
          this.handleUniversalViewNavigate(V, W);
        });
        T.webContents.setWindowOpenHandler(({
          url: V
        }) => {
          T.webContents.loadURL(V);
          return {
            action: "deny"
          };
        });
        T.webContents.on("did-finish-load", () => {
          this.setUniversalParams();
          this.handleUniversalViewPageLoad();
          this.insertCodeToUniversalWindow();
        });
        T.webContents.on("did-navigate", () => {
          this.setUniversalParams();
          this.insertCodeToUniversalWindow();
          this.handleUniversalViewPageLoad();
        });
        T.webContents.on("did-navigate-in-page", () => {
          this.setUniversalParams();
          this.insertCodeToUniversalWindow();
          this.handleUniversalViewPageLoad();
        });
        T.webContents.on("page-title-updated", () => this.setUniversalParams());
        T.webContents.on("did-fail-load", (V, W, ...X) => {
          this.log.info("Universal view load failed", W, X);
          if (W === -3) {
            return;
          }
          this.setUniversalParams({
            isFail: true
          });
          S.removeBrowserView(T);
        });
        T.webContents.session.setPermissionRequestHandler((V, W, X) => {
          X(W !== "media");
        });
        T.webContents.session.off("will-download", this.handleUniversalDownload);
        T.webContents.session.on(h.SURcv, this.handleUniversalDownload);
      }
      checkUniversalView() {
        const {
          universalWindow: R,
          universalView: S,
          universalGpView: T
        } = this.configService;
        const U = R.getBrowserViews();
        if (U.every(V => V.webContents.id !== S?.webContents?.id)) {
          this.setUniversalParams({
            isFail: false
          });
          R.setBrowserView(S);
          this.handelUniversalWindowResize(R, S, T);
        }
      }
      handleUniversalViewNavigate(R, S) {
        if (S.match(/\.(xsl|xslt|svg|xml)(\?.*)?$/i)) {
          R.preventDefault();
          this.setUniversalParams({
            isFail: true,
            url: "error",
            title: "error"
          });
          this.configService.universalWindow.removeBrowserView(this.configService.universalView);
          return;
        } else {
          this.setUniversalParams({
            isFail: false
          });
        }
        if (N.INTERCEPT_LOGIN_URLS.some(T => T.test(S))) {
          const T = this.storeService.getUserInfo();
          if (!T.isLogin) {
            R.preventDefault();
            this.configService.requestPopLoginWindow$.next();
            this.reportService.reportLoginFrom("universal");
          }
        }
      }
      registerUniversalWindowWebRequests() {
        const {
          universalView: R
        } = this.configService;
        R.webContents.session.webRequest.onBeforeRequest((S, T) => {
          if (!S.url.includes("bilipc") && S.webContentsId === R.webContents?.id && (S.url.startsWith("file") || S.url.match(/\.xslt?/i))) {
            T({
              cancel: true
            });
            return;
          }
          T({
            cancel: false
          });
        });
        R.webContents.session.webRequest.onCompleted({
          urls: N.WEB_REQUEST_FILTER
        }, S => {
          if (S.url.includes(N.WEB_REQUEST_LOGOUT)) {
            this.authService.handleUserLogout();
          }
        });
      }
      handelUniversalWindowResize(R, S, T) {
        const {
          width: U,
          height: V
        } = R.getBounds();
        if (R.isFullScreen()) {
          S.setBounds({
            x: 0,
            y: 0,
            width: U,
            height: V
          });
        } else {
          S.setBounds({
            x: 0,
            y: 48,
            width: U,
            height: V - 48
          });
        }
        this.utilsService.centerBrowserView(R, T);
      }
      setUniversalParams(R) {
        if (R?.url) {
          this.configService.universalParams.url = R.url;
          this.configService.universalParams.title = R.title;
        }
        if (typeof R?.isFail === "boolean") {
          this.configService.universalParams.isFail = R.isFail;
        }
        const {
          universalView: S
        } = this.configService;
        if (S) {
          this.configService.universalParams.pageUrl = S.webContents?.getURL();
          this.configService.universalParams.pageTitle = S.webContents?.getTitle();
          this.configService.universalParams.canGoBack = S.webContents?.canGoBack();
          this.configService.universalParams.canGoForward = S.webContents?.canGoForward();
          this.eventsService.emitUniversalParamsChange(this.configService.universalParams);
        }
      }
      insertCodeToUniversalWindow() {
        const {
          universalView: R
        } = this.configService;
        if (!R) {
          return;
        }
        R.webContents.executeJavaScript("\n      if (!window.isPcShortcutAdded) {\n        window.isPcShortcutAdded = true\n        document.addEventListener('keydown', (e) => {\n          if (['INPUT', 'TEXTAREA'].includes(e.target?.tagName)) return\n          if (e.target?.getAttribute('contenteditable') === 'true') return\n          if (/^a$/i.test(e.key)) {\n            window.biliBridgePc?.callNative('window/openMainWindow')\n            return\n          }\n          if (/^b$/i.test(e.key)) {\n            window.biliBridgePc?.callNative('window/switchWindow')\n            return\n          }\n        })\n      }\n    ");
        R.webContents.insertCSS("\n      #biliMainHeader,\n      #bili-header-container,\n      .bili-header:not(.large-header),\n      .bili-header:not(.large-header) .bili-header__bar,\n      #internationalHeader,\n      .z-top-container,\n      .bili-footer,\n      .international-footer {\n        display: none !important;\n      }\n    ");
        const S = this.configService.injectCodeConfig?.codes || [];
        if (S.length) {
          S.forEach(T => {
            if (T.enable && this.configService.universalParams.pageUrl.match(new RegExp(T.url || ""))) {
              if (T.css) {
                R.webContents.insertCSS(T.css);
              }
              if (T.js) {
                R.webContents.executeJavaScript(T.js);
              }
            }
          });
        }
      }
      handleUniversalViewPageLoad() {
        const {
          universalView: R
        } = this.configService;
        if (!R) {
          return;
        }
        const S = R.webContents?.getURL();
        if (S) {
          const T = S.match(/bilibili.com\/video\/av(\d+)/i)?.[1];
          const U = S.match(/bilibili.com\/video\/(BV\w+)/i)?.[1];
          const V = S.match(/bilibili.com\/bangumi\/(?:play|media)\/ep(\d+)/i)?.[1];
          const W = S.match(/bilibili.com\/bangumi\/(?:play|media)\/ss(\d+)/i)?.[1];
          const X = S.match(/live.bilibili.com\/(\d+)/i)?.[1];
          if (!T && !U && !V && !W && !X) {
            R.webContents.executeJavaScript("\n          ;(() => {\n            const toast = document.getElementById('bilipc-toast')\n            if (toast) toast.style.display = 'none'\n          })()\n        ");
            return;
          }
          R.webContents.executeJavaScript(";(() => {\n            let toast = document.getElementById('bilipc-toast')\n            let text, link, close, isInited\n            if (toast) {\n              text = toast.querySelector('.toast-text')\n              link = toast.querySelector('.toast-link')\n              close = toast.querySelector('.toast-close')\n              isInited = true\n            } else {\n              text = document.createElement('span')\n              link = document.createElement('a')\n              close = document.createElement('span')\n              text.className = 'toast-text'\n              text.innerText = '" + (X ? "在直播窗口" : "在播放窗口") + "'\n              link.className = 'toast-link'\n              link.innerText = '打开'\n              close.className = 'toast-close'\n              toast = document.createElement('div')\n              toast.id = 'bilipc-toast'\n              toast.appendChild(text)\n              toast.appendChild(link)\n              toast.appendChild(close)\n              document.body.appendChild(toast)\n              link.addEventListener('click', () => {\n                // 暂停视频或直播播放\n                ;[].forEach.call(document.querySelectorAll('video'), video => video.pause())\n                ;[].forEach.call(document.querySelectorAll('iframe'), iframe => {\n                  try {\n                    const videos = iframe.contentDocument?.querySelectorAll('video')\n                    if (videos?.length) [].forEach.call(videos, video => video.pause())\n                  } finally {}\n                })\n                const { ptype, vtype, id } = link.dataset\n                if (ptype === 'ugc' || ptype === 'ogv') {\n                  // 打开播放窗口\n                  window.biliBridgePc?.callNative('window/openPlayerWindow', {\n                    type: ptype,\n                    [vtype]: id,\n                    fromSpmid: 'main.browser.0.0.pv',\n                  })\n                } else if (vtype === 'roomId') {\n                  // 打开直播窗口\n                  window.biliBridgePc?.callNative('window/openLiveRoomWindow', id)\n                }\n                toast.style.display = 'none'\n              })\n              close.addEventListener('click', () => {\n                toast.style.display = 'none'\n              })\n            }\n            link.dataset.id = '" + (T || U || V || W || X) + "'\n            const vtype = '" + (T ? "aid" : U ? "bvid" : V ? "epid" : W ? "seasonId" : X ? "roomId" : "") + "'\n            link.dataset.vtype = vtype\n            const ptype = '" + (T || U ? "ugc" : V || W ? "ogv" : "") + "'\n            if (link.dataset.ptype !== ptype) {\n              link.dataset.ptype = ptype\n              toast.style.display = 'flex'\n            }\n            return isInited\n          })()").then(Y => {
            if (!Y) {
              R.webContents.insertCSS("\n              #bilipc-toast {\n                width: 164px;\n                height: 40px;\n                line-height: 40px;\n                position: fixed;\n                z-index: 99999;\n                top: 20px;\n                left: 50%;\n                transform: translateX(-50%);\n                font-size: 14px;\n                color: #fff;\n                text-align: center;\n                background: #1f1f1f;\n                border-radius: 4px;\n                box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);\n                display: none;\n                align-items: center;\n                justify-content: center;\n              }\n              #bilipc-toast .toast-link {\n                margin-left: 4px;\n                color: #D44E7D;\n                cursor: pointer;\n              }\n              #bilipc-toast .toast-close {\n                position: relative;\n                width: 24px;\n                height: 24px;\n                cursor: pointer;\n                transform: scale(0.6);\n                margin-left: 10px;\n                margin-right: -6px;\n              }\n              #bilipc-toast .toast-close::before, #bilipc-toast .toast-close::after {\n                content: '';\n                position: absolute;\n                width: 2px;\n                height: 24px;\n                border-radius: 1px;\n                background: #fff;\n              }\n              #bilipc-toast .toast-close::before {\n                transform: rotate(-45deg);\n              }\n              #bilipc-toast .toast-close::after {\n                transform: rotate(45deg);\n              }\n            ");
            }
          });
        }
      }
      registerUploadWindowEvents() {
        const {
          uploadWindow: R,
          errorPageUrl: S
        } = this.configService;
        R.webContents.on("dom-ready", () => R.show());
        R.webContents.on("did-fail-load", () => R.webContents.loadURL(S));
      }
      registerBiliPetWindowEvent() {
        const R = this.configService.biliPetWindow;
        R.on("close", () => this.eventsService.emitBiliPetVisibleChange(false));
        const S = () => {
          if (!R || R.isDestroyed()) {
            clearInterval(this.configService.intervalOfBiliPetHover);
            return;
          }
          const {
            x: T,
            y: U,
            width: V,
            height: W
          } = R.getBounds();
          const X = I.screen.getCursorScreenPoint();
          this.eventsService.emitMousePositionChange({
            ...X,
            winX: T,
            winY: U,
            winW: V,
            winH: W
          });
        };
        clearInterval(this.configService.intervalOfBiliPetHover);
        this.configService.intervalOfBiliPetHover = setInterval(S, 250);
      }
      registerLiveNowWindowEvents() {
        const {
          liveNowWindow: R,
          errorPageUrl: S
        } = this.configService;
        R.webContents.on("dom-ready", () => {
          R.webContents.insertCSS("\n        #app { overflow: hidden; }\n        .n-config-provider > main { margin-top: 10px; }\n      ");
          R.show();
        });
        R.webContents.on("did-fail-load", () => R.webContents.loadURL(S));
        R.webContents.session.setDevicePermissionHandler(() => true);
        R.webContents.session.setPermissionCheckHandler(() => true);
        R.webContents.session.setPermissionRequestHandler((T, U, V) => V(true));
      }
      registerLiveRoomWindowEvents() {
        const {
          liveRoomWindow: S,
          errorPageUrl: T,
          liveRoomGpView: U
        } = this.configService;
        let V = 0;
        S.webContents.on("dom-ready", () => S.show());
        S.webContents.on("did-fail-load", (W, X, Y, Z, a0) => {
          if (a0 || Z.includes("live.bilibili.com/blanc/")) {
            S.webContents.loadURL(T);
          }
          if (a0 && X === -401 && V < 3) {
            V++;
            S.webContents.session.clearCache().then(() => S.webContents.reload());
          }
        });
        S.webContents.on("did-finish-load", () => {
          const W = this.configService.injectCodeConfig?.codes || [];
          const X = W.find(Y => Y.enable && Y.url === "LiveRoom");
          if (X) {
            if (X.css) {
              S.webContents.insertCSS(X.css);
            }
            if (X.js) {
              S.webContents.executeJavaScript(X.js);
            }
          }
        });
        S.on("show", () => {
          if (this.configService.isHideByBossShortcut) {
            if (h.Zihqs === "ZAqPv") {
              this.exitBossShortcutHide();
            } else {
              this.sendEventToWindow(this.configService.mainWindow, "download/itemListEvent", {
                data: h
              });
            }
          }
          this.eventsService.emitLiveRoomWindowVisibleChange(true);
          this.configService.playingWinStatusChange$.next();
        });
        S.on("close", () => this.eventsService.emitLiveRoomWindowVisibleChange(false));
        S.on("closed", () => {
          this.configService.playingWinStatusChange$.next();
          try {
            ;
            U.webContents.close();
          } catch (X) {}
          try {
            ;
            U.webContents.destroy();
          } catch (Y) {}
          this.configService.liveRoomGpView = null;
        });
        this.utilsService.centerBrowserView(S, U);
        S.on("resize", () => this.utilsService.centerBrowserView(S, U));
        S.on("enter-full-screen", () => this.utilsService.centerBrowserView(S, U));
        S.on("leave-full-screen", () => this.utilsService.centerBrowserView(S, U));
      }
      registerGlobalShortcut() {
        const R = this.storeService.getBossShortcutInfo();
        this.toggleBossShortcut(R);
      }
      toggleBossShortcut({
        isEnable: R,
        shortcut: S
      }) {
        S = S?.replace(/\s/g, "") || "";
        if (M.IS_WIN) {
          S = S.replace("Ctrl", "CommandOrControl");
        }
        if (this.bossShortcut && I.globalShortcut.isRegistered(this.bossShortcut)) {
          this.log.info("Unregister old boss shortcut:", this.bossShortcut);
          I.globalShortcut.unregister(this.bossShortcut);
        }
        if (!S) {
          return;
        }
        if (R) {
          this.bossShortcut = S;
          this.log.info("Register boss shortcut:", S);
          const T = I.globalShortcut.register(S, () => this.handBossShortcutEvent());
          this.log.info(h.RsVvh, T);
        } else if (I.globalShortcut.isRegistered(S)) {
          I.globalShortcut.unregister(S);
        }
      }
      handBossShortcutEvent() {
        const {
          isAppSleeping: R,
          wakeUpBiliApp$: S,
          mainWindow: T,
          playerWindow: U,
          liveRoomWindow: V
        } = this.configService;
        if (R) {
          S.next();
          return;
        }
        const W = T.isVisible();
        const X = U.isVisible();
        const Y = V && !V.isDestroyed() && V.isVisible();
        if (h.eNuig(W, Y) || X) {
          this.configService.isHideByBossShortcut = true;
          if (W) {
            T.hide();
            T.emit("hide");
            this.isMainWindowOpened = true;
          }
          if (Y) {
            V.hide();
            V.emit("hide");
            this.isLiveRoomWindowOpened = true;
          }
          if (X) {
            U.hide();
            U.emit("hide");
            this.isPlayerWindowOpened = true;
          }
          if (M.IS_WIN) {
            this.trayMenuService.destoryApplicationTray();
          }
          this.eventsService.emitHideByBossShortcut();
          this.reportService.reportBossShortcut(true);
        } else {
          this.exitBossShortcutHide();
        }
      }
      exitBossShortcutHide() {
        this.configService.isHideByBossShortcut = false;
        const {
          mainWindow: R,
          liveRoomWindow: S,
          playerWindow: T
        } = this.configService;
        if (this.isMainWindowOpened || this.isPlayerWindowOpened || this.isLiveRoomWindowOpened) {
          if (this.isMainWindowOpened) {
            this.isMainWindowOpened = false;
            R.show();
          }
          if (this.isLiveRoomWindowOpened) {
            this.isLiveRoomWindowOpened = false;
            S?.show();
          }
          if (this.isPlayerWindowOpened) {
            this.isPlayerWindowOpened = false;
            T.show();
            this.eventsService.emitPlayerWindowRecover();
          }
        } else {
          this.configService.forcusMainWindow$.next();
        }
        this.trayMenuService.createApplicationTray();
        this.eventsService.emitShowByBossShortcut();
        this.reportService.reportBossShortcut(false);
      }
    };
    P = i([(0, u.Injectable)(), j("design:paramtypes", [typeof (k = typeof z.ConfigService !== "undefined" && z.ConfigService) === "function" ? k : Object, typeof (l = h.OxVEY(typeof A.AuthService, h.wZfMV) && A.AuthService) === "function" ? l : Object, typeof (m = typeof B.SystemService !== "undefined" && B.SystemService) === "function" ? m : Object, typeof (n = typeof C.EventsService !== "undefined" && C.EventsService) === "function" ? n : Object, typeof (o = typeof D.ReportService !== "undefined" && D.ReportService) === "function" ? o : Object, typeof (q = typeof E.StoreService !== h.wZfMV && E.StoreService) === "function" ? q : Object, typeof (r = typeof F.TrayMenuService !== h.wZfMV && F.TrayMenuService) === "function" ? r : Object, typeof (t = h.tRCUQ(typeof G.UtilsService, "undefined") && G.UtilsService) === "function" ? t : Object])], P);
    g.WindowEvents = P;
  }
});
var jf = bX({
  ""(g) {
    'use strict';

    var h = {
      PjuBR: function (N, O, P, Q) {
        return N(O, P, Q);
      },
      QIXWd: function (N, O, P) {
        return N(O, P);
      },
      cNMnv: "appLogWindowState",
      rSGmp: "dom-ready",
      HxRWY: "mainWindow",
      aWhtW: "Main window created!",
      eLfLw: "ready-to-show",
      EGqFW: "liveRoomWindow",
      UYoYs: "lUDLi",
      ebcah: "biliPetWindow",
      ZNihU: "closed",
      zfNpS: "uploadWindow",
      Befkq: "default",
      pvmef: "testWindow",
      NPBVk: "Test window created!",
      ynxnF: function (N) {
        return N();
      }
    };
    var i = g && g.__decorate || function (N, O, P, Q) {
      var R = arguments.length;
      var S = R < 3 ? O : Q === null ? Q = Object.getOwnPropertyDescriptor(O, P) : Q;
      var T;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        S = Reflect.decorate(N, O, P, Q);
      } else {
        for (var U = N.length - 1; U >= 0; U--) {
          if (T = N[U]) {
            S = (R < 3 ? T(S) : R > 3 ? h.PjuBR(T, O, P, S) : h.QIXWd(T, O, P)) || S;
          }
        }
      }
      if (R > 3 && S) {
        Object.defineProperty(O, P, S);
      }
      return S;
    };
    var j = g && g.__metadata || function (N, O) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(N, O);
      }
    };
    var k = g && g.__importDefault || function (N) {
      if (N && N.__esModule) {
        return N;
      } else {
        return {
          default: N
        };
      }
    };
    var l;
    var m;
    var n;
    var o;
    var q;
    var r;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.WindowFactory = undefined;
    var t = require("@nestjs/common");
    h.ynxnF(ga);
    var u = c2(g9);
    var w = gK();
    var z = io();
    var A = gP();
    var B = iM();
    var C = je();
    var D = ix();
    var E = require("@bilibili/b-utils-core");
    dn();
    var F = c2(dm);
    cF();
    var G = c2(cw);
    var H = require("electron");
    var I = require("path");
    var J = k(require("url-parse"));
    fP();
    var K = c2(fO);
    var L = require("rxjs");
    var M = class N extends u.BaseService {
      constructor(O, P, Q, R, S, T) {
        super("WindowFactory");
        h.QIXWd(c3, this, "configService");
        c3(this, "storeService");
        c3(this, "windowEvents");
        c3(this, "eventsService");
        c3(this, "reportService");
        c3(this, "utilsService");
        c3(this, "mainWindowState");
        c3(this, "miniMainWinState");
        c3(this, "playerWindowState");
        c3(this, "miniPlayerState");
        c3(this, "loginWindowState");
        c3(this, "uploadWindowState");
        c3(this, "liveNowWindowState");
        c3(this, "liveRoomWindowState");
        c3(this, "universalWindowState");
        c3(this, "biliPetWinState");
        c3(this, h.cNMnv);
        c3(this, "demoWindowState");
        c3(this, "isOnCreatingMain", false);
        c3(this, "isInitPlayerWindowFirst", false);
        c3(this, "mainUrl", K.LOCAL_FILE_HOST + "/index.html");
        c3(this, "playerUrl", K.LOCAL_FILE_HOST + "/player.html");
        c3(this, "loginFile", K.RENDER_FILE_BASE + "/login.html");
        c3(this, "universalUrl", K.LOCAL_FILE_HOST + "/universal.html");
        c3(this, "universalFile", K.RENDER_FILE_BASE + "/universal.html");
        c3(this, "appLogUrl", K.LOCAL_FILE_HOST + "/applog.html");
        c3(this, "appLogFile", K.RENDER_FILE_BASE + "/applog.html");
        c3(this, "gamepadViewUrl", K.LOCAL_FILE_HOST + "/tracker.html");
        c3(this, "biliPetUrl", K.LOCAL_FILE_HOST + "/bilipet.html");
        c3(this, "getCommonWebPreference", (U = false) => {
          return {
            nodeIntegration: true,
            devTools: this.configService.isDevMode,
            preload: (0, I.join)(__dirname, "assets/" + (U ? "bili-preload.js" : "bili-inject.js")),
            ...global.runtimeConf.exWebPreferences
          };
        });
        this.configService = O;
        this.storeService = P;
        this.windowEvents = Q;
        this.eventsService = R;
        this.reportService = S;
        this.utilsService = T;
        this.configService.appReady$.subscribe(() => {
          this.initWindowsState();
        });
        this.configService.createDefaultWindows$.subscribe(() => {
          this.createDefaultWindows();
        });
        this.configService.requestPopLoginWindow$.subscribe(() => {
          this.reportService.reportLoginFrom("main.autoLogin");
          this.createOrFocusLoginWindow();
        });
        this.configService.userLoginChange$.subscribe(() => {
          if (this.configService.universalView) {
            this.configService.universalView.webContents.reload();
          }
        });
      }
      initWindowsState() {
        this.mainWindowState = new F.WinStateKeeper(this.storeService, K.MAIN_WINDOW);
        this.miniMainWinState = new F.WinStateKeeper(this.storeService, K.MINI_MAIN_WINDOW);
        this.playerWindowState = new F.WinStateKeeper(this.storeService, K.PLAYER_WINDOW);
        this.miniPlayerState = new F.WinStateKeeper(this.storeService, K.MINI_PLAYER_WINDOW);
        this.loginWindowState = new F.WinStateKeeper(this.storeService, K.LOGIN_WINDOW);
        this.uploadWindowState = new F.WinStateKeeper(this.storeService, K.UPLOAD_WINDOW);
        this.liveNowWindowState = new F.WinStateKeeper(this.storeService, K.LIVE_NOW_WINDOW);
        this.liveRoomWindowState = new F.WinStateKeeper(this.storeService, K.LIVE_ROOM_WINDOW);
        this.universalWindowState = new F.WinStateKeeper(this.storeService, K.UNIVERSAL_WINDOW);
        this.appLogWindowState = new F.WinStateKeeper(this.storeService, K.APPLOG_WINDOW);
        this.biliPetWinState = new F.WinStateKeeper(this.storeService, K.BILI_PET_WINDOW);
        this.demoWindowState = new F.WinStateKeeper(this.storeService, K.DEMO_WINDOW);
      }
      createDefaultWindows() {
        const {
          isInitPlayerWinFirst: O
        } = this.configService;
        this.configService.isInitPlayerWinFirst = false;
        if (O) {
          this.log.info("Init player first.");
          this.createOrFocusPlayerWindow(O);
        }
        this.createOrFocusMainWindow(O);
      }
      createOrFocusMainWindow(O = false) {
        if (this.isOnCreatingMain) {
          return;
        }
        const {
          isAppQuited: P,
          mainWindow: Q
        } = this.configService;
        if (P) {
          return;
        }
        if (Q && !Q.isDestroyed()) {
          Q.show();
        } else {
          this.isInitPlayerWindowFirst = O;
          this.isOnCreatingMain = true;
          this.configService.isMainWindowReady = false;
          this.configService.isMainWindowShowed = false;
          this.configService.isSplashWindowReady = false;
          let R = global.mainWindow;
          if (!R || R.isDestroyed()) {
            const {
              x: S,
              y: T,
              width: U,
              height: V
            } = this.mainWindowState;
            const {
              minWidth: W,
              minHeight: X
            } = K.MAIN_WINDOW;
            R = new H.BrowserWindow({
              x: S,
              y: T,
              width: U,
              height: V,
              minWidth: W,
              minHeight: X,
              show: false,
              titleBarStyle: "hidden",
              autoHideMenuBar: true,
              alwaysOnTop: true,
              fullscreenable: false,
              trafficLightPosition: {
                x: 5,
                y: 5
              },
              ...(K.IS_WIN ? {
                resizable: false
              } : {}),
              ...(K.IS_WIN ? {
                icon: K.WIN_APP_ICON
              } : {}),
              webPreferences: {
                webviewTag: true,
                webSecurity: false,
                ...this.getCommonWebPreference(true)
              }
            });
            global.mainWindow = R;
            R.removeMenu();
            R.isHidden = true;
            R.webContents.setUserAgent(K.DEFAULT_USER_AGENT);
            const Y = this.storeService.getIsSelectedFirst();
            const Z = this.storeService.getIsSelectedExit();
            R.loadURL("" + this.mainUrl + (Y || Z ? "#page/selected" : ""));
            this.windowEvents.catchCertVerifyError(R);
          }
          this.configService.mainWindow = R;
          if (!O) {
            R.webContents.once(h.rSGmp, () => R.show());
          }
          this.mainWindowState.manage(R, O);
          this.windowEvents.registerMainWindowEvent();
          this.windowEvents.registerAppSleepEvent(R);
          this.windowEvents.registerWindowResizeEvt(R, K.MAIN_WINDOW);
          this.windowEvents.registerWindowFocusBlur(R, "mainWindow");
          this.windowEvents.registerWindowEvents(R, "mainWindow", a1 => {
            a1.preventDefault();
            this.windowEvents.handleMainWindowClose();
          });
          this.windowEvents.catchLinkAndWindowOpen(R, "mainWindow");
          this.windowEvents.catchWebviewLinkAndWindowOpen(R, h.HxRWY, true);
          this.log.info(h.aWhtW);
          if (!global.runCodeTime) {
            global.runCodeTime = Date.now();
          }
          this.configService.mainWindowEventsReady$.next(true);
        }
      }
      createOrFocusPlayerWindow(O = false) {
        const {
          isAppQuited: P,
          playerWindow: Q,
          openPlayerParams: R
        } = this.configService;
        if (P) {
          return;
        }
        const S = this.storeService.getIsMiniPlayerWindow();
        const T = S ? this.miniPlayerState : this.playerWindowState;
        let U = false;
        if (Q && !Q.isDestroyed()) {
          U = this.utilsService.isWindowHide(Q);
          if (R) {
            Q.show();
            if (!Q.isAlwaysOnTop()) {
              Q.setAlwaysOnTop(true, "normal", 9999);
              setTimeout(() => Q.setAlwaysOnTop(false));
            }
            T.checkWindowStatus();
          }
        } else {
          U = true;
          const {
            minWidth: V,
            minHeight: W
          } = S ? K.MINI_PLAYER_WINDOW : K.PLAYER_WINDOW;
          const {
            x: X,
            y: Y,
            width: Z,
            height: a0
          } = T;
          const a1 = new H.BrowserWindow({
            x: X,
            y: Y,
            width: Z,
            height: a0,
            minWidth: V,
            minHeight: W,
            show: false,
            autoHideMenuBar: true,
            titleBarStyle: "hidden",
            fullscreenable: false,
            trafficLightPosition: {
              x: 12,
              y: 16
            },
            backgroundColor: this.windowEvents.getPlayerWindowBgColor(),
            ...(K.IS_WIN ? {
              resizable: false
            } : {}),
            ...(K.IS_WIN ? {
              icon: K.WIN_APP_ICON
            } : {}),
            webPreferences: {
              webviewTag: true,
              webSecurity: false,
              ...this.getCommonWebPreference(true)
            }
          });
          a1.isHidden = true;
          this.configService.playerWindow = a1;
          a1.webContents.setUserAgent(K.DEFAULT_USER_AGENT);
          a1.loadURL(this.playerUrl + "?" + (0, E.stringifyQueryString)(R));
          a1.removeMenu();
          if (O) {
            a1.once(h.eLfLw, () => a1.show());
          }
          T.manage(a1);
          this.windowEvents.catchCertVerifyError(a1);
          this.windowEvents.registerPlayerWindowEvent();
          this.windowEvents.registerAppSleepEvent(a1);
          this.windowEvents.registerWindowResizeEvt(a1, K.PLAYER_WINDOW);
          this.windowEvents.registerWindowFocusBlur(a1, "playerWindow");
          this.windowEvents.registerWindowEvents(a1, "playerWindow", a2 => {
            a2.preventDefault();
            this.windowEvents.handlePlayerWindowClose();
          });
          this.windowEvents.catchLinkAndWindowOpen(a1, "playerWindow");
          this.log.info("Player window created!");
        }
        if (this.configService.isPlayerWindowReady) {
          this.eventsService.emitPlayerParamsChange({
            ...R,
            isWindowNewOpen: U
          });
        } else {
          this.configService.playerWindowReady$.pipe((0, L.take)(1)).subscribe(() => {
            this.eventsService.emitPlayerParamsChange({
              ...R,
              isWindowNewOpen: U
            });
          });
        }
      }
      createOrFocusLiveRoomWindow(O, P) {
        const {
          isAppQuited: Q,
          liveRoomWindow: R,
          customConfig: S
        } = this.configService;
        if (Q) {
          return;
        }
        const {
          liveRoomUrlTpl: T,
          liveRoomBlancUrl: U
        } = S;
        let V = O;
        let W = T;
        if (T && T.match(/^\d+$/)) {
          V = T;
          W = K.LIVE_ROOM_URL_TPL;
        }
        if (U && (!V || +V === -1)) {
          V = U.match(/bilibili.com(\/blanc)?\/(\d+)/i)?.[2];
        }
        const X = W || K.LIVE_ROOM_URL_TPL;
        const Y = X.replace(/desktop\/xxx/, "desktop/" + (V || O));
        const Z = this.storeService.getDataStoreKey("LIVE_ROOM_PARAMS");
        this.storeService.dataStore.set(Z, P || null);
        if (R && !R.isDestroyed()) {
          R.show();
          R.loadURL(Y);
          this.configService.windowOpenedUrls.liveRoomWindow = Y;
        } else {
          const {
            x: a0,
            y: a1,
            width: a2,
            height: a3
          } = this.liveRoomWindowState;
          const {
            minWidth: a4,
            minHeight: a5
          } = K.LIVE_ROOM_WINDOW;
          const a6 = new H.BrowserWindow({
            x: a0,
            y: a1,
            width: a2,
            height: a3,
            minWidth: a4,
            minHeight: a5,
            show: false,
            autoHideMenuBar: true,
            titleBarStyle: "hidden",
            trafficLightPosition: {
              x: 12,
              y: 16
            },
            backgroundColor: this.windowEvents.getPlayerWindowBgColor(),
            ...(K.IS_WIN ? {
              resizable: false
            } : {}),
            ...(K.IS_WIN ? {
              icon: K.WIN_APP_ICON
            } : {}),
            webPreferences: {
              webSecurity: false,
              ...this.getCommonWebPreference()
            }
          });
          a6.isHidden = true;
          const a7 = new H.BrowserView({
            webPreferences: {
              webSecurity: false,
              ...this.getCommonWebPreference()
            }
          });
          a6.addBrowserView(a7);
          this.configService.liveRoomGpView = a7;
          this.configService.liveRoomWindow = a6;
          a6.webContents.setUserAgent(K.DEFAULT_USER_AGENT);
          a6.loadURL(Y);
          this.configService.windowOpenedUrls.liveRoomWindow = Y;
          a6.removeMenu();
          a7.setBounds({
            x: 0,
            y: 0,
            width: 1,
            height: 1
          });
          a7.webContents.setUserAgent(K.DEFAULT_USER_AGENT);
          a7.webContents.loadURL(this.gamepadViewUrl + "?win=liveRoom");
          this.liveRoomWindowState.manage(a6);
          this.windowEvents.registerLiveRoomWindowEvents();
          this.windowEvents.registerAppSleepEvent(a6);
          this.windowEvents.registerWindowResizeEvt(a6, K.LIVE_ROOM_WINDOW);
          this.windowEvents.registerWindowFocusBlur(a6, "liveRoomWindow");
          this.windowEvents.registerWindowEvents(a6, "liveRoomWindow", true);
          this.windowEvents.catchLinkAndWindowOpen(a6);
          this.windowEvents.registerClosableWindowEvents(h.EGqFW);
          this.log.info("Live room window created!");
        }
        this.reportService.reportOpenLiveRoomWindow(O);
      }
      createOrFocusUniversalWindow(O) {
        this.reportService.reportOpenUniversalWindow({
          url: O.url
        });
        this.windowEvents.setUniversalParams(O);
        const {
          universalWindow: P,
          universalView: Q
        } = this.configService;
        if (P && !P.isDestroyed()) {
          P.show();
          Q.webContents.loadURL(O.url);
          this.windowEvents.checkUniversalView();
        } else if (h.UYoYs === "lUDLi") {
          let {
            x: R,
            y: S,
            width: T,
            height: U
          } = this.universalWindowState;
          const V = H.screen.getDisplayNearestPoint({
            x: R,
            y: S
          });
          if (V) {
            const {
              width: a2,
              height: a3
            } = V.workAreaSize;
            if (T > a2) {
              T = a2;
            }
            if (U > a3) {
              U = a3;
            }
          }
          const {
            minWidth: W,
            minHeight: X
          } = K.UNIVERSAL_WINDOW;
          const Y = new H.BrowserWindow({
            x: R,
            y: S,
            width: T,
            height: U,
            minWidth: W,
            minHeight: X,
            show: false,
            darkTheme: true,
            titleBarStyle: "hidden",
            autoHideMenuBar: true,
            trafficLightPosition: {
              x: 12,
              y: 16
            },
            ...(K.IS_WIN ? {
              resizable: false
            } : {}),
            ...(K.IS_WIN ? {
              icon: K.WIN_APP_ICON
            } : {}),
            webPreferences: {
              webSecurity: false,
              webviewTag: true,
              ...this.getCommonWebPreference(true)
            }
          });
          Y.isHidden = true;
          const Z = new H.BrowserView({
            webPreferences: {
              webSecurity: false,
              ...this.getCommonWebPreference()
            }
          });
          Y.setBrowserView(Z);
          this.configService.universalView = Z;
          const a0 = new H.BrowserView({
            webPreferences: {
              webSecurity: false,
              ...this.getCommonWebPreference()
            }
          });
          Y.addBrowserView(a0);
          this.configService.universalGpView = a0;
          this.configService.universalWindow = Y;
          const a1 = (0, K.getUserAgent)(true);
          Y.webContents.setUserAgent(a1);
          if (K.IS_DEV) {
            Y.loadURL(this.universalUrl);
          } else {
            Y.loadFile(this.universalFile);
          }
          Y.removeMenu();
          Z.webContents.setUserAgent(a1);
          Z.webContents.loadURL(O.url);
          a0.setBounds({
            x: 0,
            y: 0,
            width: 1,
            height: 1
          });
          a0.webContents.setUserAgent(a1);
          a0.webContents.loadURL(this.gamepadViewUrl + "?win=universal");
          this.universalWindowState.manage(Y);
          this.windowEvents.registerUniversalWindowEvents();
          this.windowEvents.registerUniversalWindowWebRequests();
          this.windowEvents.registerAppSleepEvent(Y);
          this.windowEvents.registerWindowResizeEvt(Y, K.UNIVERSAL_WINDOW);
          this.windowEvents.registerWindowFocusBlur(Y, "universalWindow");
          this.windowEvents.registerWindowEvents(Y, "universalWindow", true);
          this.windowEvents.registerClosableWindowEvents("universalWindow");
          this.log.info("Universal window created!");
        } else {
          i.splice(j, 1);
        }
      }
      createBiliPetWindow() {
        if (!this.storeService.getIsPrivacyPolicyAccepted()) {
          return;
        }
        if (this.configService.checkIsAppForceUpdate(false)) {
          return;
        }
        if (global.isGpuDisabled) {
          return;
        }
        if (!this.storeService.getGeneralConfig().isEnableBiliPet) {
          return;
        }
        const {
          biliPetWindow: O,
          isBiliPetWindowPined: P
        } = this.configService;
        const {
          defaultWidth: Q,
          defaultHeight: R
        } = K.BILI_PET_WINDOW;
        if (O && !O.isDestroyed()) {
          O.show();
          this.eventsService.emitResetBiliPetModel();
          this.biliPetWinState.checkWindowStatus(true);
          if (P) {
            O.setAlwaysOnTop(true, "normal", 999999);
          }
        } else {
          const {
            x: S,
            y: T
          } = this.biliPetWinState;
          const {
            isDevBiliPetWindow: U
          } = this.configService.customConfig;
          const V = new H.BrowserWindow({
            x: S,
            y: T,
            width: Q,
            height: R,
            minimizable: false,
            maximizable: false,
            skipTaskbar: true,
            hasShadow: false,
            fullscreenable: false,
            roundedCorners: false,
            frame: false,
            alwaysOnTop: true,
            ...(U ? {
              resizable: true,
              transparent: false
            } : {
              resizable: false,
              transparent: true
            }),
            webPreferences: {
              webSecurity: false,
              ...this.getCommonWebPreference(true)
            }
          });
          this.configService.biliPetWindow = V;
          this.configService.isBiliPetWindowPined = true;
          this.eventsService.emitBiliPetVisibleChange(true);
          if (K.IS_MAC) {
            const X = require("@bilibili/mission-control");
            X.setTransientBehavior(V.getNativeWindowHandle());
          }
          V.setIgnoreMouseEvents(true, {
            forward: true
          });
          V.setAlwaysOnTop(true, "normal", 999999);
          V.setVisibleOnAllWorkspaces(true);
          V.webContents.setUserAgent(K.DEFAULT_USER_AGENT);
          V.loadURL(this.biliPetUrl);
          V.removeMenu();
          this.biliPetWinState.manage(V);
          this.windowEvents.catchCertVerifyError(V);
          this.windowEvents.registerBiliPetWindowEvent();
          this.windowEvents.registerWindowEvents(V, h.ebcah);
          this.windowEvents.catchLinkAndWindowOpen(V);
        }
      }
      createOrFocusLoginWindow() {
        this.configService.loginWindowLiving$.next(true);
        this.configService.loginWinStatusChange$.next(false);
        const {
          loginWindow: P
        } = this.configService;
        const {
          x: Q,
          y: R
        } = this.loginWindowState;
        const {
          defaultWidth: S,
          defaultHeight: T
        } = K.LOGIN_WINDOW;
        if (P && !P.isDestroyed()) {
          P.show();
          P.setAlwaysOnTop(true, "normal", 99999);
        } else {
          const U = new H.BrowserWindow({
            x: Q,
            y: R,
            width: S,
            height: T,
            show: false,
            titleBarStyle: "hidden",
            trafficLightPosition: {
              x: 32,
              y: 32
            },
            transparent: true,
            darkTheme: false,
            resizable: false,
            maximizable: false,
            fullscreenable: false,
            alwaysOnTop: true,
            hasShadow: false,
            autoHideMenuBar: true,
            ...(K.IS_WIN ? {
              icon: K.WIN_APP_ICON
            } : {}),
            webPreferences: {
              webviewTag: true,
              webSecurity: false,
              ...this.getCommonWebPreference()
            }
          });
          U.isHidden = true;
          this.configService.loginWindow = U;
          U.webContents.setUserAgent(K.DEFAULT_USER_AGENT);
          U.loadFile(this.loginFile);
          U.removeMenu();
          U.setAlwaysOnTop(true, "normal", 99999);
          this.loginWindowState.resetStateToDefault();
          this.loginWindowState.manage(U);
          this.windowEvents.registerAppSleepEvent(U);
          this.windowEvents.registerClosableWindowEvents("loginWindow");
          this.windowEvents.registerWindowFocusBlur(U, "loginWindow");
          this.windowEvents.catchLinkAndWindowOpen(U);
          this.windowEvents.catchWebviewLinkAndWindowOpen(U, "loginWindow");
          U.webContents.on("dom-ready", () => {
            U.show();
            this.log.info("Initialize login page!");
            U.webContents.executeJavaScript("initLoginPage('login', '" + K.LOGIN_URL + "')");
          });
          U.on("close", () => {
            const {
              isOnLoginFetch: V,
              isHitLoginRisk: W,
              loginWinStatusChange$: X
            } = this.configService;
            if (!V && !W) {
              X.next(false);
            }
          });
          U.on(h.ZNihU, () => {
            this.configService.loginWindowLiving$.next(false);
          });
          this.log.info("Login window created!");
        }
      }
      openLoginRiskWindow(O) {
        if (O && O.width && O.height && O.url) {
          this.configService.loginWindowLiving$.next(true);
          const {
            loginWindow: P,
            loginRiskWindow: Q
          } = this.configService;
          this.configService.isHitLoginRisk = true;
          if (P) {
            P.close();
          }
          const {
            width: R,
            height: S,
            url: T,
            js: U,
            css: V
          } = O;
          const {
            x: W,
            y: X
          } = (0, G.getWindowDefaultState)({
            width: R,
            height: S
          });
          if (Q && !Q.isDestroyed()) {
            Q.show();
          } else {
            const Y = new H.BrowserWindow({
              x: W,
              y: X,
              width: R,
              height: S,
              show: false,
              titleBarStyle: "hidden",
              trafficLightPosition: {
                x: 32,
                y: 32
              },
              transparent: true,
              darkTheme: false,
              resizable: false,
              maximizable: false,
              fullscreenable: false,
              alwaysOnTop: true,
              hasShadow: false,
              autoHideMenuBar: true,
              ...(K.IS_WIN ? {
                icon: K.WIN_APP_ICON
              } : {}),
              webPreferences: {
                webviewTag: true,
                webSecurity: false,
                ...this.getCommonWebPreference()
              }
            });
            Y.isHidden = true;
            this.configService.loginRiskWindow = Y;
            Y.webContents.setUserAgent(K.DEFAULT_USER_AGENT);
            Y.loadFile(this.loginFile);
            Y.removeMenu();
            this.loginWindowState.resetStateToDefault();
            this.windowEvents.registerAppSleepEvent(Y);
            this.windowEvents.registerClosableWindowEvents("loginRiskWindow");
            this.windowEvents.registerWindowFocusBlur(Y, "loginRiskWindow");
            this.windowEvents.catchLinkAndWindowOpen(Y);
            this.windowEvents.catchWebviewLinkAndWindowOpen(Y, "loginRiskWindow");
            Y.webContents.on("dom-ready", () => {
              Y.show();
              this.log.info("Initialize login risk page!");
              Y.webContents.executeJavaScript("initLoginPage('risk', '" + T + "', `" + U + "`, `" + V + "`)");
            });
            Y.on("close", () => {
              const {
                isOnLoginFetch: Z,
                loginWinStatusChange$: a0
              } = this.configService;
              if (!Z) {
                a0.next(false);
              }
            });
            Y.on("closed", () => {
              this.configService.loginWindowLiving$.next(false);
            });
            this.log.info("Risk window created!");
          }
        }
      }
      createOrFocusUploadWindow() {
        const {
          uploadWindow: O,
          customConfig: P
        } = this.configService;
        const Q = P.uploadPageUrl || K.UPLOAD_PAGE_URL;
        if (O && !O.isDestroyed()) {
          O.show();
        } else {
          const {
            x: S,
            y: T,
            width: U,
            height: V
          } = this.uploadWindowState;
          const {
            minWidth: W,
            minHeight: X
          } = K.UPLOAD_WINDOW;
          const Y = new H.BrowserWindow({
            x: S,
            y: T,
            width: U,
            height: V,
            minWidth: W,
            minHeight: X,
            show: false,
            darkTheme: true,
            fullscreenable: false,
            autoHideMenuBar: true,
            titleBarStyle: "hidden",
            trafficLightPosition: {
              x: 12,
              y: 16
            },
            ...(K.IS_WIN ? {
              resizable: false
            } : {}),
            ...(K.IS_WIN ? {
              icon: K.WIN_APP_ICON
            } : {}),
            webPreferences: {
              webSecurity: false,
              ...this.getCommonWebPreference()
            }
          });
          Y.isHidden = true;
          this.configService.uploadWindow = Y;
          Y.webContents.setUserAgent(K.DEFAULT_USER_AGENT);
          Y.loadURL(Q);
          this.configService.windowOpenedUrls.uploadWindow = Q;
          Y.removeMenu();
          this.uploadWindowState.manage(Y);
          this.windowEvents.registerUploadWindowEvents();
          this.windowEvents.registerAppSleepEvent(Y);
          this.windowEvents.registerWindowResizeEvt(Y, K.UPLOAD_WINDOW);
          this.windowEvents.registerWindowFocusBlur(Y, "uploadWindow");
          this.windowEvents.registerWindowEvents(Y, h.zfNpS, true);
          this.windowEvents.catchLinkAndWindowOpen(Y);
          this.windowEvents.registerClosableWindowEvents("uploadWindow");
          this.log.info("Upload window created!");
        }
      }
      createOrFocusLiveNowWindow() {
        const {
          liveNowWindow: O,
          customConfig: P
        } = this.configService;
        const Q = P.liveNowPageUrl || K.LIVE_NOW_PAGE_URL;
        if (O && !O.isDestroyed()) {
          O.show();
        } else {
          const {
            x: R,
            y: S,
            width: T,
            height: U
          } = this.liveNowWindowState;
          const {
            minWidth: V,
            minHeight: W
          } = K.LIVE_NOW_WINDOW;
          const X = new H.BrowserWindow({
            x: R,
            y: S,
            width: T,
            height: U,
            minWidth: V,
            minHeight: W,
            show: false,
            darkTheme: true,
            autoHideMenuBar: true,
            titleBarStyle: "hidden",
            trafficLightPosition: {
              x: 12,
              y: 16
            },
            ...(K.IS_WIN ? {
              resizable: false
            } : {}),
            ...(K.IS_WIN ? {
              icon: K.WIN_APP_ICON
            } : {}),
            webPreferences: {
              webSecurity: false,
              ...this.getCommonWebPreference()
            }
          });
          X.isHidden = true;
          this.configService.liveNowWindow = X;
          X.webContents.setUserAgent(K.DEFAULT_USER_AGENT);
          X.loadURL(Q);
          this.configService.windowOpenedUrls.liveNowWindow = Q;
          X.removeMenu();
          this.liveNowWindowState.manage(X);
          this.windowEvents.registerLiveNowWindowEvents();
          this.windowEvents.registerAppSleepEvent(X);
          this.windowEvents.registerWindowResizeEvt(X, K.LIVE_NOW_WINDOW);
          this.windowEvents.registerWindowFocusBlur(X, "liveNowWindow");
          this.windowEvents.registerWindowEvents(X, "liveNowWindow", true);
          this.windowEvents.catchLinkAndWindowOpen(X);
          this.windowEvents.registerClosableWindowEvents("liveNowWindow");
          this.log.info("Live now window created!");
        }
      }
      createOrFocusAppLogWindow() {
        const {
          appLogWindow: O
        } = this.configService;
        if (O && !O.isDestroyed()) {
          O.show();
        } else {
          const {
            x: P,
            y: Q,
            width: R,
            height: S
          } = this.appLogWindowState;
          const {
            minWidth: T,
            minHeight: U
          } = K.APPLOG_WINDOW;
          const V = new H.BrowserWindow({
            x: P,
            y: Q,
            width: R,
            height: S,
            minWidth: T,
            minHeight: U,
            show: false,
            autoHideMenuBar: true,
            alwaysOnTop: true,
            fullscreenable: false,
            ...(K.IS_WIN ? {
              resizable: false
            } : {}),
            ...(K.IS_WIN ? {
              icon: K.WIN_APP_ICON
            } : {}),
            webPreferences: {
              webSecurity: false,
              ...this.getCommonWebPreference()
            }
          });
          V.isHidden = true;
          this.configService.appLogWindow = V;
          V.webContents.setUserAgent(K.DEFAULT_USER_AGENT);
          if (K.IS_DEV) {
            V.loadURL(this.appLogUrl);
          } else {
            V.loadFile(this.appLogFile);
          }
          V.removeMenu();
          this.appLogWindowState.manage(V);
          this.windowEvents.catchCertVerifyError(V);
          this.windowEvents.registerAppSleepEvent(V);
          this.windowEvents.registerWindowResizeEvt(V, K.APPLOG_WINDOW);
          this.windowEvents.registerWindowFocusBlur(V, "appLogWindow");
          this.windowEvents.registerWindowEvents(V, "appLogWindow");
          this.windowEvents.catchLinkAndWindowOpen(V);
          this.windowEvents.registerClosableWindowEvents("appLogWindow");
          V.webContents.on("dom-ready", () => {
            setTimeout(() => {
              if (V && !V.isDestroyed()) {
                V.show();
                V.setAlwaysOnTop(false);
                this.log.info("AppLog window ready!");
              }
            }, 600);
          });
          this.log.info("AppLog window created!");
        }
      }
      createOrFocusTestWindow({
        url: O,
        minWidth: P,
        minHeight: Q,
        titleBar = false,
        innerPage = false
      }) {
        const {
          x: R,
          y: S
        } = this.demoWindowState;
        let {
          width: T,
          height: U
        } = this.demoWindowState;
        const V = (0, E.isNum)(P) && P >= 300 && P <= 3000;
        const W = (0, E.isNum)(Q) && Q >= 300 && Q <= 3000;
        if (V && T < P) {
          T = P;
        }
        if (W && U < Q) {
          U = Q;
        }
        const {
          testWindow: X
        } = this.configService;
        if (X) {
          X.show();
        } else {
          const Z = new H.BrowserWindow({
            x: R,
            y: S,
            width: T,
            height: U,
            ...(V ? {
              minWidth: P
            } : {}),
            ...(W ? {
              minHeight: Q
            } : {}),
            autoHideMenuBar: true,
            titleBarStyle: titleBar ? h.Befkq : "hidden",
            trafficLightPosition: {
              x: 12,
              y: 16
            },
            ...(K.IS_WIN ? {
              resizable: false
            } : {}),
            ...(K.IS_WIN ? {
              icon: K.WIN_APP_ICON
            } : {}),
            webPreferences: {
              webSecurity: false,
              ...this.getCommonWebPreference()
            }
          });
          this.configService.testWindow = Z;
          Z.webContents.setUserAgent(K.DEFAULT_USER_AGENT);
          if (O.match(/^https?:\/\//)) {
            const a0 = (0, J.default)(O)?.origin;
            if (a0) {
              this.configService.biliAuthOrigins.push(a0);
            }
            Z.loadURL(O);
          }
          this.windowEvents.catchCertVerifyError(Z);
          Z.removeMenu();
          this.demoWindowState.manage(Z);
          Z.on(h.ZNihU, () => {
            Z.destroy();
            this.configService.testWindow = null;
          });
          this.windowEvents.registerAppSleepEvent(Z);
          this.windowEvents.registerWindowResizeEvt(Z);
          this.windowEvents.registerWindowFocusBlur(Z, h.pvmef);
          this.windowEvents.registerWindowEvents(Z, "testWindow", true);
          this.windowEvents.catchLinkAndWindowOpen(Z);
          this.windowEvents.registerClosableWindowEvents("testWindow");
          this.log.info(h.NPBVk);
        }
      }
    };
    M = i([(0, t.Injectable)(), j("design:paramtypes", [typeof (l = typeof w.ConfigService !== "undefined" && w.ConfigService) === "function" ? l : Object, typeof (m = typeof z.StoreService !== "undefined" && z.StoreService) === "function" ? m : Object, typeof (n = typeof C.WindowEvents !== "undefined" && C.WindowEvents) === "function" ? n : Object, typeof (o = typeof A.EventsService !== "undefined" && A.EventsService) === "function" ? o : Object, typeof (q = typeof B.ReportService !== "undefined" && B.ReportService) === "function" ? q : Object, typeof (r = typeof D.UtilsService !== "undefined" && D.UtilsService) === "function" ? r : Object])], M);
    g.WindowFactory = M;
  }
});
var jg = bX({
  ""(g) {
    'use strict';

    var h = {
      GxiqS: function (R, S) {
        return R < S;
      },
      wrMHd: function (R, S, T, U) {
        return R(S, T, U);
      },
      ChsQC: "windowEvents",
      HUaRq: "systemService",
      OmGrD: "utilsService",
      iVvcI: "mainWinEvtsReadySub",
      sxybo: "4|2|1|3|0",
      IotcO: function (R, S) {
        return R === S;
      },
      dlvNK: function (R, S) {
        return R === S;
      },
      sLVAY: "window",
      ZTErd: function (R, S) {
        return R > S;
      },
      UISqs: function (R, S) {
        return R(S);
      },
      iuJVW: "goForward",
      JEWqX: function (R) {
        return R();
      },
      cPLKV: "undefined",
      pGfVf: "function",
      DdpNn: function (R, S) {
        return R !== S;
      }
    };
    var i = g && g.__decorate || function (R, S, T, U) {
      var V = arguments.length;
      var W = V < 3 ? S : U === null ? U = Object.getOwnPropertyDescriptor(S, T) : U;
      var X;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        W = Reflect.decorate(R, S, T, U);
      } else {
        for (var Y = R.length - 1; Y >= 0; Y--) {
          if (X = R[Y]) {
            W = (h.GxiqS(V, 3) ? X(W) : V > 3 ? h.wrMHd(X, S, T, W) : X(S, T)) || W;
          }
        }
      }
      if (V > 3 && W) {
        Object.defineProperty(S, T, W);
      }
      return W;
    };
    var j = g && g.__metadata || function (R, S) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(R, S);
      }
    };
    var k = g && g.__importDefault || function (R) {
      if (R && R.__esModule) {
        return R;
      } else {
        return {
          default: R
        };
      }
    };
    var l;
    var m;
    var n;
    var o;
    var q;
    var r;
    var t;
    var u;
    var w;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.WindowService = undefined;
    var z = require("@nestjs/common");
    ga();
    var A = c2(g9);
    var B = h.JEWqX(jf);
    var C = gP();
    var D = iM();
    var E = j7();
    var F = io();
    var G = gK();
    var H = ix();
    var I = j8();
    var J = je();
    dn();
    var K = c2(dm);
    var L = require("@bilibili/b-utils-core");
    var M = k(require("url-parse"));
    var N = require("electron");
    fP();
    var O = c2(fO);
    var P = k(require("semver"));
    var Q = class R extends A.BaseService {
      constructor(S, T, U, V, W, X, Y, Z, a0) {
        super("WindowService");
        c3(this, "configService");
        c3(this, h.ChsQC);
        c3(this, "windowFactory");
        c3(this, "reportService");
        c3(this, h.HUaRq);
        c3(this, "storeService");
        c3(this, "eventsService");
        c3(this, h.OmGrD);
        c3(this, "trayMenuService");
        c3(this, h.iVvcI);
        c3(this, "openLiveRoomWindow", (0, L.debounce)((a1, a2) => {
          if (a1) {
            this.windowFactory.createOrFocusLiveRoomWindow(a1, a2);
          }
        }, 1000, true, false));
        this.configService = S;
        this.windowEvents = T;
        this.windowFactory = U;
        this.reportService = V;
        this.systemService = W;
        this.storeService = X;
        this.eventsService = Y;
        this.utilsService = Z;
        this.trayMenuService = a0;
        this.configService.forcusMainWindow$.subscribe(() => this.focusMainWindow());
        this.configService.focusPlayerWindow$.subscribe(() => this.focusPlayerWindow());
        this.configService.reloadPlayerWindow$.subscribe(() => this.reloadPlayerWindow(true));
        this.configService.userLoginChange$.subscribe(() => this.reloadPlayerWindow(true));
        this.configService.openMainWindowPage$.subscribe(a1 => {
          this.log.info("Open main window Page", a1);
          this.openMainWindowPage(a1);
        });
        this.configService.openPlayerWindow$.subscribe(a1 => {
          this.openPlayerWindow(a1);
        });
        this.configService.openOrFocusUniversalWindow$.subscribe(a1 => {
          this.windowFactory.createOrFocusUniversalWindow(a1);
        });
        this.configService.onNewExpPlayerReady$.subscribe(() => {
          this.log.info("Reload player window to new.");
          this.reloadPlayerWindow();
        });
        this.configService.switchAccount$.subscribe(() => {
          this.log.info("Switch account, reload windows.");
          this.handleReloadWindows();
        });
      }
      handleSplashWindowReady() {
        this.log.debug("Splash window ready!");
        this.configService.isSplashWindowReady = true;
        this.configService.splashWindowReady$.next();
        if (!this.configService.isAppSlept) {
          this.configService.splashWindowFirstReady$.next();
        }
        O.MAIN_WINDOW.onInit$.next();
        const {
          mainWindow: S
        } = this.configService;
        if (!this.windowFactory.isInitPlayerWindowFirst && !S.isShowed) {
          S.show();
        }
        S.setAlwaysOnTop(false);
      }
      handleMainWindowReady() {
        if (!global.mainWindowReadyTime) {
          global.mainWindowReadyTime = Date.now();
        }
        if (!this.configService.isMainWindowReady) {
          this.mainWinEvtsReadySub = this.configService.mainWindowEventsReady$.subscribe(S => {
            if (S) {
              this.mainWinEvtsReadySub?.unsubscribe();
              this.mainWinEvtsReadySub = null;
              this.log.info("Main window ready!");
              this.windowFactory.isOnCreatingMain = false;
              this.configService.isMainWindowReady = true;
              this.configService.mainWindowReady$.next();
              if (!this.configService.isAppSlept) {
                this.configService.mainWindowFirstReady$.next();
              }
              if (!this.windowFactory.isInitPlayerWindowFirst) {
                this.windowFactory.createOrFocusPlayerWindow();
              }
              if (!this.configService.isAppSlept && this.configService.isRenderRestricted) {
                this.reportService.reportRenderRestrictedStart();
              }
              const {
                isEnableBiliPet: T,
                isStartUpShowBiliPet: U
              } = this.storeService.getGeneralConfig();
              if (T && U) {
                this.windowFactory.createBiliPetWindow();
              }
              this.windowEvents.handleStartupTimeline();
            }
          });
        }
      }
      focusMainWindow() {
        const {
          isAppSleeping: S,
          mainWindow: T
        } = this.configService;
        if (S) {
          this.systemService.wakeUpBiliApp();
        } else if (T && !T.isDestroyed()) {
          T.show();
          T.setAlwaysOnTop(true);
          setTimeout(() => T.setAlwaysOnTop(false));
          this.trayMenuService.createApplicationTray();
        }
      }
      openMainWindowPage(S) {
        this.configService.mainWindow.show();
        if (!this.storeService.getIsPrivacyPolicyAccepted()) {
          return;
        }
        if (this.configService.checkIsAppForceUpdate(false)) {
          return;
        }
        this.eventsService.emitOpenMainWindowPage(S);
      }
      openPlayerWindow(S) {
        if (S && (S.type === "ugc" && (S.bvid || S.aid) || S.type === "ogv" && (S.epid || S.seasonId) || S.mediaList)) {
          this.configService.openPlayerParams = S;
          this.windowFactory.createOrFocusPlayerWindow(true);
        } else {
          this.log.error("Open player params error!");
        }
      }
      reloadPlayerWindow(S = false) {
        const {
          playerWindow: U
        } = this.configService;
        if (U && !U.isDestroyed()) {
          if (this.utilsService.isWindowHide(U)) {
            this.createNewPlayerWindow();
          } else if (S) {
            U.webContents.reload();
          } else {
            const W = () => {
              if (this.utilsService.isWindowHide(U)) {
                U.off("hide", W);
                this.createNewPlayerWindow();
              }
            };
            U.on("hide", W);
          }
        }
      }
      createNewPlayerWindow() {
        const {
          playerWindow: S
        } = this.configService;
        if (S && !S.isDestroyed()) {
          var T = h.sxybo.split("|");
          var U = 0;
          while (true) {
            switch (T[U++]) {
              case "0":
                setTimeout(() => this.windowFactory.createOrFocusPlayerWindow());
                continue;
              case "1":
                this.configService.playerWindow = null;
                continue;
              case "2":
                S.close();
                continue;
              case "3":
                this.configService.openPlayerParams = null;
                continue;
              case "4":
                S.removeAllListeners();
                continue;
            }
            break;
          }
        }
      }
      focusPlayerWindow() {
        const {
          isAppSleeping: S,
          openPlayerParams: T,
          playerWindow: U
        } = this.configService;
        if (S) {
          this.systemService.wakeUpBiliApp();
        } else if (T && U && !U.isDestroyed()) {
          U.show();
          this.configService.isInitPlayerWinFirst = false;
        }
      }
      handleReloadWindows() {
        const {
          loginWindow: S,
          loginRiskWindow: T,
          mainWindow: U,
          liveRoomWindow: V,
          liveNowWindow: W,
          universalWindow: X,
          universalView: Y,
          testWindow: Z
        } = this.configService;
        if (S && !S.isDestroyed()) {
          this.configService.loginWindow.close();
        }
        if (T && !T.isDestroyed()) {
          this.configService.loginRiskWindow.close();
        }
        ;
        [U, V, W, Z].forEach(a0 => {
          if (a0 && !a0.isDestroyed()) {
            a0.webContents.reload();
          }
        });
        this.reloadPlayerWindow(true);
        if (X && !X.isDestroyed() && Y) {
          Y.webContents.reload();
        }
      }
      catchWindowClose(S) {
        const T = N.BrowserWindow.fromWebContents(S.sender).id;
        if (T === this.configService.universalWindow?.id) {
          if (h.IotcO("BfdPS", "HPjAG")) {
            return this.state.height;
          } else {
            return;
          }
        }
        if (!this.configService.catchCloseWinIds.includes(T)) {
          this.configService.catchCloseWinIds.push(T);
        }
      }
      uncatchWindowClose(S) {
        const T = N.BrowserWindow.fromWebContents(S.sender).id;
        const U = this.configService.catchCloseWinIds.indexOf(T);
        if (U > -1) {
          this.configService.catchCloseWinIds.splice(U, 1);
        }
      }
      forceCloseWindow(S) {
        this.uncatchWindowClose(S);
        const T = N.BrowserWindow.fromWebContents(S.sender);
        T.close();
      }
      toggleDevTools(S) {
        if (this.configService.isDevMode) {
          if (S.webContents.isDevToolsOpened()) {
            S.webContents.closeDevTools();
          } else {
            S.webContents.openDevTools();
          }
        }
      }
      handleResetWindowStatus() {
        this.eventsService.emitResetWindowState();
        setTimeout(() => {
          const {
            mainWindow: S,
            playerWindow: T
          } = this.configService;
          this.windowFactory.mainWindowState.resetAndUpdateWindowState();
          S.webContents.reload();
          setTimeout(() => {
            if (this.utilsService.isWindowHide(T)) {
              this.windowFactory.playerWindowState.resetStateToDefault();
              this.storeService.setWindowState("playerWindow", null);
              this.storeService.setIsMiniPlayerWindow(false);
              T.removeAllListeners();
              T.close();
              this.configService.playerWindow = null;
              this.configService.openPlayerParams = null;
              this.configService.isPlayerWindowReady = false;
              this.windowFactory.createOrFocusPlayerWindow();
            } else {
              this.windowFactory.playerWindowState.resetAndUpdateWindowState();
              T.show();
              T.webContents.reload();
            }
          }, 100);
        }, 250);
      }
      replaceWindowUrl(S, T) {
        if (S && (0, L.isStr)(T)) {
          const U = (0, M.default)(S.getURL());
          const V = (0, M.default)(T);
          if (h.dlvNK(U.origin, V.origin)) {
            S.loadURL(T);
            const W = N.BrowserWindow.fromWebContents(S);
            if (W === this.configService.liveRoomWindow) {
              this.configService.windowOpenedUrls.liveRoomWindow = T;
            }
          }
        }
      }
      setAllowOpenUrls(S, T) {
        let {
          urls: U,
          regExps: V
        } = T || {};
        if ((0, L.isArr)(U) || (0, L.isArr)(V)) {
          const W = this.configService.allowOpenUrls[S.id] || {};
          if ((0, L.isArr)(U) && U.length) {
            const X = W.urls || [];
            U = U.filter(Y => !X.includes(Y));
            W.urls = [...X, ...U];
          }
          if ((0, L.isArr)(V) && V.length) {
            const Y = W.regExps || [];
            V = V.filter(Z => !Y.includes(Z));
            W.regExps = [...Y, ...V];
          }
          this.configService.allowOpenUrls[S.id] = W;
        }
      }
      async captureWindowPage(S) {
        const T = await S.capturePage();
        const U = T.getSize();
        return {
          buffer: T.getBitmap(),
          width: U.width,
          height: U.height
        };
      }
      async getDesktopCapturerSources() {
        const S = await N.desktopCapturer.getSources({
          types: [h.sLVAY, "screen"],
          fetchWindowIcons: true
        });
        return S.map(({
          name: T,
          id: U,
          thumbnail: V,
          appIcon: W
        }) => ({
          name: T,
          id: U,
          thumbnail: V.toDataURL(),
          appIcon: W?.toDataURL() || null
        }));
      }
      getVisibleWinNum() {
        const S = N.BrowserWindow.getAllWindows();
        if (this.configService.isAppQuited) {
          return 0;
        }
        let T = 0;
        S.forEach(U => U.isVisible() && T++);
        return T;
      }
      miniMainWindow() {
        this.eventsService.emitMainWindowMiniChange(true);
        const S = this.configService.mainWindow;
        if (S.isMaximized) {
          S.unmaximize();
        }
        S.setMaximizable(false);
        if (O.IS_MAC) {
          if (P.default.gte(process.versions.electron, "25.0.0")) {
            ;
            S.setWindowButtonPosition({
              x: 12,
              y: 16
            });
          } else {
            ;
            S.setTrafficLightPosition({
              x: 12,
              y: 16
            });
          }
        }
        this.windowFactory.mainWindowState.unmanage();
        const {
          x: T,
          y: U,
          width: V,
          height: W
        } = this.windowFactory.miniMainWinState;
        const {
          minWidth: X,
          minHeight: Y
        } = O.MINI_MAIN_WINDOW;
        this.resetMainWindow({
          x: T,
          y: U,
          width: V,
          height: W
        }, X, Y);
        this.windowFactory.miniMainWinState.manage(S);
        this.configService.isMainWindowMini = true;
      }
      unminMainWindow() {
        this.eventsService.emitMainWindowMiniChange(false);
        const {
          mainWindow: S
        } = this.configService;
        S.setAspectRatio(0);
        S.setMaximizable(true);
        S.setAlwaysOnTop(false);
        if (O.IS_MAC) {
          if (P.default.gte(process.versions.electron, "25.0.0")) {
            ;
            S.setWindowButtonPosition({
              x: 5,
              y: 5
            });
          } else {
            ;
            S.setTrafficLightPosition({
              x: 5,
              y: 5
            });
          }
          S.setWindowButtonVisibility(true);
        }
        this.windowFactory.miniMainWinState.unmanage();
        const {
          x: T,
          y: U,
          width: V,
          height: W
        } = this.windowFactory.mainWindowState;
        const {
          minWidth: X,
          minHeight: Y
        } = O.MAIN_WINDOW;
        this.resetMainWindow({
          x: T,
          y: U,
          width: V,
          height: W
        }, X, Y);
        this.windowFactory.mainWindowState.manage(S);
        this.configService.isMainWindowMini = false;
        this.removeMiniMainMouseListener();
      }
      resetMainWindow(S, T, U) {
        const {
          mainWindow: V
        } = this.configService;
        S = (0, K.formatRectangle)(S);
        V.setMinimumSize(T, U);
        if ((0, L.isUdf)(S.x)) {
          delete S.x;
        }
        if ((0, L.isUdf)(S.y)) {
          delete S.y;
        }
        if ((0, L.isUdf)(S.x) || (0, L.isUdf)(S.y)) {
          V.setBounds(S);
          V.center();
        } else {
          V.setBounds(S, true);
        }
      }
      setMainVideoSize(S) {
        if (!this.configService.isMainWindowMini) {
          return;
        }
        const {
          mainWindow: T
        } = this.configService;
        if (S) {
          const {
            width: U,
            height: V
          } = S;
          if ((0, L.isNum)(U) && (0, L.isNum)(V) && U && V) {
            const {
              width: W,
              height: X
            } = T.getBounds();
            const Y = U / V;
            const Z = W / X;
            if (Math.abs(Y - Z) > 0.01) {
              const {
                width: a0,
                height: a1
              } = O.MINI_MAIN_RESET;
              let a2;
              let a3;
              if (U > V) {
                ;
                a2 = a0;
                a3 = parseInt(String(a0 * V / U));
              } else {
                ;
                a2 = a1;
                a3 = parseInt(String(a1 * V / U));
              }
              T.setBounds((0, K.formatRectangle)({
                width: a2,
                height: a3
              }), true);
            }
            T.setAspectRatio(Y);
          }
        } else {
          T.setAspectRatio(0);
        }
      }
      handleMainWindowMouseEnter() {
        const {
          mainWindow: S
        } = this.configService;
        clearInterval(this.configService.intervalOfMiniMainMouse);
        this.configService.intervalOfMiniMainMouse = setInterval(() => {
          if (S.isVisible()) {
            const {
              x: T,
              y: U,
              width: V,
              height: W
            } = S.getBounds();
            const X = T + V;
            const Y = U + W;
            const {
              x: Z,
              y: a0
            } = N.screen.getCursorScreenPoint();
            if (Z < T || Z > X || a0 < U || a0 > Y) {
              this.removeMiniMainMouseListener();
            }
          } else {
            this.removeMiniMainMouseListener();
          }
        }, 250);
      }
      removeMiniMainMouseListener() {
        clearInterval(this.configService.intervalOfMiniMainMouse);
        this.configService.intervalOfMiniMainMouse = null;
        const S = this.configService.isMainWindowMini;
        if (S) {
          this.setMiniMainBtnsVisible(false);
        }
        this.eventsService.emitMainWindowMouseLeave();
      }
      setMiniMainBtnsVisible(S) {
        if (O.IS_MAC) {
          this.configService.mainWindow.setWindowButtonVisibility(S);
        }
      }
      miniPlayerWindow() {
        this.eventsService.emitPlayerWindowMiniChange(true);
        const S = this.configService.playerWindow;
        if (S.isMaximized) {
          S.unmaximize();
        }
        S.setMaximizable(false);
        this.windowFactory.playerWindowState.unmanage();
        const {
          x: T,
          y: U,
          width: V,
          height: W
        } = this.windowFactory.miniPlayerState;
        const {
          minWidth: X,
          minHeight: Y
        } = O.MINI_PLAYER_WINDOW;
        this.resetPlayerWindow({
          x: T,
          y: U,
          width: V,
          height: W
        }, X, Y);
        this.windowFactory.miniPlayerState.manage(S);
        this.storeService.setIsMiniPlayerWindow(true);
      }
      unminPlayerWindow() {
        this.eventsService.emitPlayerWindowMiniChange(false);
        const {
          playerWindow: S
        } = this.configService;
        S.setAspectRatio(0);
        S.setMaximizable(true);
        if (O.IS_MAC) {
          S.setWindowButtonVisibility(true);
        }
        this.windowFactory.miniPlayerState.unmanage();
        const {
          x: T,
          y: U,
          width: V,
          height: W
        } = this.windowFactory.playerWindowState;
        const {
          minWidth: X,
          minHeight: Y
        } = O.PLAYER_WINDOW;
        this.resetPlayerWindow({
          x: T,
          y: U,
          width: V,
          height: W
        }, X, Y);
        this.windowFactory.playerWindowState.manage(S);
        this.storeService.setIsMiniPlayerWindow(false);
        this.removeMiniPlayerMouseListener();
      }
      resetPlayerWindow(S, T, U) {
        const {
          playerWindow: V
        } = this.configService;
        S = (0, K.formatRectangle)(S);
        V.setMinimumSize(T, U);
        if ((0, L.isUdf)(S.x)) {
          delete S.x;
        }
        if ((0, L.isUdf)(S.y)) {
          delete S.y;
        }
        if ((0, L.isUdf)(S.x) || (0, L.isUdf)(S.y)) {
          V.setBounds(S);
          V.center();
        } else {
          V.setBounds(S, true);
        }
      }
      setPlayerVideoSize(S) {
        const {
          playerWindow: T
        } = this.configService;
        if (S) {
          const {
            width: V,
            height: W
          } = S;
          if ((0, L.isNum)(V) && (0, L.isNum)(W) && V && W) {
            const {
              width: X,
              height: Y
            } = T.getBounds();
            const Z = V / W;
            const a0 = X / Y;
            if (Math.abs(Z - a0) > 0.01) {
              const {
                width: a1,
                height: a2
              } = O.MINI_PLAYER_RESET;
              let a3;
              let a4;
              if (h.ZTErd(V, W)) {
                ;
                a3 = a1;
                a4 = parseInt(String(a1 * W / V));
              } else {
                ;
                a3 = a2;
                a4 = parseInt(String(a2 * W / V));
              }
              T.setBounds((0, K.formatRectangle)({
                width: a3,
                height: a4
              }), true);
            }
            T.setAspectRatio(Z);
          }
        } else {
          T.setAspectRatio(0);
        }
      }
      handlePlayerWindowMouseEnter() {
        const {
          playerWindow: T
        } = this.configService;
        h.UISqs(clearInterval, this.configService.intervalOfMiniPlayerMouse);
        this.configService.intervalOfMiniPlayerMouse = setInterval(() => {
          if (T.isVisible()) {
            const {
              x: U,
              y: V,
              width: W,
              height: X
            } = T.getBounds();
            const Y = U + W;
            const Z = V + X;
            const {
              x: a0,
              y: a1
            } = N.screen.getCursorScreenPoint();
            if (a0 < U || a0 > Y || a1 < V || a1 > Z) {
              this.removeMiniPlayerMouseListener();
            }
          } else {
            this.removeMiniPlayerMouseListener();
          }
        }, 250);
      }
      removeMiniPlayerMouseListener() {
        clearInterval(this.configService.intervalOfMiniPlayerMouse);
        this.configService.intervalOfMiniPlayerMouse = null;
        const S = this.storeService.getIsMiniPlayerWindow();
        if (S) {
          this.setMiniPlayerBtnsVisible(false);
        }
        this.eventsService.emitPlayerWindowMouseLeave();
      }
      setMiniPlayerBtnsVisible(S) {
        if (O.IS_MAC) {
          this.configService.playerWindow.setWindowButtonVisibility(S);
        }
      }
      handleMovePetWindow(S, T) {
        if (T) {
          const {
            x: U,
            y: V
          } = S.getBounds();
          const {
            x: W,
            y: X
          } = N.screen.getCursorScreenPoint();
          clearInterval(this.configService.intervalOfBiliPetMove);
          this.configService.intervalOfBiliPetMove = setInterval(() => {
            const {
              x: Y,
              y: Z
            } = N.screen.getCursorScreenPoint();
            const a0 = Y - W;
            const a1 = Z - X;
            const a2 = U + a0;
            const a3 = V + a1;
            S.setPosition(a2, a3);
          }, 30);
        } else {
          clearInterval(this.configService.intervalOfBiliPetMove);
        }
      }
      openUploadWindow() {
        const S = this.storeService.getUserInfo();
        if (!S.isLogin) {
          this.windowFactory.createOrFocusLoginWindow();
          this.configService.loginSub?.unsubscribe();
          this.configService.loginSub = this.configService.loginWinStatusChange$.subscribe(T => {
            this.configService.loginSub.unsubscribe();
            if (T) {
              this.windowFactory.createOrFocusUploadWindow();
            }
          });
        } else {
          this.windowFactory.createOrFocusUploadWindow();
        }
      }
      openLiveNowWindow() {
        const S = this.storeService.getUserInfo();
        if (!S.isLogin) {
          this.windowFactory.createOrFocusLoginWindow();
          this.configService.loginSub?.unsubscribe();
          this.configService.loginSub = this.configService.loginWinStatusChange$.subscribe(T => {
            this.configService.loginSub.unsubscribe();
            if (T) {
              this.windowFactory.createOrFocusLiveNowWindow();
            }
          });
        } else {
          this.windowFactory.createOrFocusLiveNowWindow();
        }
      }
      handleOpenBigVipWindow(S) {
        const T = this.storeService.getUserInfo();
        if (T.isLogin) {
          this.openBigVipWindow(S);
        } else {
          this.windowFactory.createOrFocusLoginWindow();
          this.configService.loginSub?.unsubscribe();
          this.configService.loginSub = this.configService.loginWinStatusChange$.subscribe(U => {
            this.configService.loginSub.unsubscribe();
            if (U) {
              this.openBigVipWindow(S);
            }
          });
        }
      }
      openBigVipWindow({
        appSubId: S,
        currentIndex: T,
        sourceFrom: U,
        orderReportParams: V
      }) {
        let W = "";
        if (S && String(S) !== "undefined") {
          W = "?appSubId=" + S;
        }
        if (T && String(T) !== "undefined") {
          W += (W ? "&" : "?") + "currentIndex=" + T;
        }
        if (U && String(U) !== "undefined") {
          W += (W ? "&" : "?") + "sourceFrom=" + U;
        }
        if (V && Object.keys(V).length) {
          W += (W ? "&" : "?") + "orderReportParams=" + encodeURIComponent(JSON.stringify(V));
        }
        const X = "" + O.BUY_BIG_VIP_URL + W;
        this.windowFactory.createOrFocusUniversalWindow({
          url: X
        });
      }
      launchUniversalAction({
        action: S
      }) {
        const {
          universalView: T,
          universalWindow: U,
          universalParams: V
        } = this.configService;
        switch (S) {
          case "goBack":
            {
              this.windowEvents.checkUniversalView();
              T?.webContents.goBack();
              break;
            }
          case h.iuJVW:
            {
              this.windowEvents.checkUniversalView();
              T?.webContents.goForward();
              break;
            }
          case "reload":
            {
              if (this.configService.universalParams?.url === "error") {
                return;
              }
              this.windowEvents.checkUniversalView();
              T?.webContents.reload();
              break;
            }
          case "devTools":
            this.toggleDevTools(T);
            break;
          case "openInBrowser":
            this.utilsService.shellOpenExternal(V.pageUrl || V.url, "universal.openInBrowser");
            break;
          case "focus":
            if (U && !U.isDestroyed()) {
              U.show();
            }
            break;
        }
      }
    };
    Q = i([(0, z.Injectable)(), j("design:paramtypes", [typeof (l = typeof G.ConfigService !== "undefined" && G.ConfigService) === "function" ? l : Object, typeof (m = typeof J.WindowEvents !== "undefined" && J.WindowEvents) === "function" ? m : Object, typeof (n = typeof B.WindowFactory !== "undefined" && B.WindowFactory) === "function" ? n : Object, typeof (o = typeof D.ReportService !== h.cPLKV && D.ReportService) === h.pGfVf ? o : Object, typeof (q = typeof E.SystemService !== h.cPLKV && E.SystemService) === "function" ? q : Object, typeof (r = typeof F.StoreService !== "undefined" && F.StoreService) === "function" ? r : Object, typeof (t = typeof C.EventsService !== h.cPLKV && C.EventsService) === "function" ? t : Object, typeof (u = h.DdpNn(typeof H.UtilsService, "undefined") && H.UtilsService) === "function" ? u : Object, typeof (w = typeof I.TrayMenuService !== "undefined" && I.TrayMenuService) === "function" ? w : Object])], Q);
    g.WindowService = Q;
  }
});
var jh = bX({
  ""(g) {
    'use strict';

    var h = {
      vlRIk: function (K, L) {
        return K === L;
      },
      QjXcI: function (K, L) {
        return K(L);
      },
      MytVX: function (K, L) {
        return K > L;
      },
      AnLTW: "isRenderGoneDialogOpen",
      SLJDy: function (K, L) {
        return K === L;
      },
      NdQPU: "DynamicPage",
      PqGDu: function (K, L) {
        return K instanceof L;
      },
      nLiWH: "ugc",
      PnExZ: "App child-process-gone, reason:",
      qehig: "GPU进程意外终止，是否禁用GPU后重启程序？",
      mhSMn: "child-process-gone",
      YzhsJ: "eJJDH",
      mMsDJ: "crashed",
      inTUq: "oom",
      tEfcq: "render-process-gone",
      SgQoW: function (K, L) {
        return K(L);
      },
      fNOai: function (K, L) {
        return K(L);
      },
      lKsGs: "undefined"
    };
    var i = g && g.__decorate || function (K, L, M, N) {
      var O = arguments.length;
      var P = O < 3 ? L : N === null ? N = Object.getOwnPropertyDescriptor(L, M) : N;
      var Q;
      if (h.vlRIk(typeof Reflect, "object") && typeof Reflect.decorate === "function") {
        P = Reflect.decorate(K, L, M, N);
      } else {
        for (var R = K.length - 1; R >= 0; R--) {
          if (Q = K[R]) {
            P = (O < 3 ? h.QjXcI(Q, P) : O > 3 ? Q(L, M, P) : Q(L, M)) || P;
          }
        }
      }
      if (h.MytVX(O, 3) && P) {
        Object.defineProperty(L, M, P);
      }
      return P;
    };
    var j = g && g.__metadata || function (K, L) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(K, L);
      }
    };
    var k = g && g.__importDefault || function (K) {
      if (K && K.__esModule) {
        return K;
      } else {
        return {
          default: K
        };
      }
    };
    var l;
    var m;
    var n;
    var o;
    var q;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.AppEvents = undefined;
    var r = require("@nestjs/common");
    ga();
    var t = c2(g9);
    var u = gK();
    var w = io();
    var z = iM();
    var A = ix();
    var B = require("@bilibili/b-utils-core");
    var C = jg();
    var D = h.SgQoW(require, "electron");
    var E = require("child_process");
    fP();
    var F = c2(fO);
    var G = k(require("path"));
    var H = require("rxjs");
    var I = h.fNOai(require, "fs-extra");
    var J = class K extends t.BaseService {
      constructor(L, M, N, O, P) {
        super("AppEvents");
        c3(this, "configService");
        c3(this, "storeService");
        c3(this, "reportService");
        c3(this, "utilsService");
        c3(this, "windowService");
        c3(this, "isAppOnQuitting", false);
        c3(this, "isAppQuitReported", false);
        c3(this, h.AnLTW, false);
        c3(this, "_urlSchemeOpenId", "");
        this.configService = L;
        this.storeService = M;
        this.reportService = N;
        this.utilsService = O;
        this.windowService = P;
      }
      get urlSchemeOpenId() {
        return this._urlSchemeOpenId;
      }
      set urlSchemeOpenId(L) {
        this._urlSchemeOpenId = L;
        clearTimeout(this.configService.timeoutOfUrlSchemeOpen);
        this.configService.timeoutOfUrlSchemeOpen = setTimeout(() => this._urlSchemeOpenId = "", F.SCHEME_OPENID_KEEP_TIME);
      }
      initAppEvents() {
        if (F.IS_DEV) {
          if (F.IS_WIN) {
            process.on("message", L => {
              if (L === "graceful-exit") {
                D.app.quit();
              }
            });
          } else {
            process.on("SIGTERM", () => D.app.quit());
          }
        }
        D.app.on("second-instance", () => {
          this.log.warn("Second instance!");
          this.configService.forcusMainWindow$.next();
        });
        D.app.on("window-all-closed", () => {
          if (!F.IS_MAC && !this.configService.isAppSleeping) {
            D.app.quit();
          }
        });
        D.app.on("activate", () => {
          this.log.log("Activate app!");
          if (!this.configService.playerWindow?.isDestroyed() && (this.configService.playerWindow?.isVisible() || this.configService.playerWindow?.isMinimized())) {
            this.configService.focusPlayerWindow$.next();
          } else {
            this.configService.forcusMainWindow$.next();
          }
        });
        if (global.deepLinkUrl) {
          this.handleDeepLinkingUrl(global.deepLinkUrl);
        }
        if (global.openFilePath) {
          this.handlePlayLocalVideo(global.openFilePath);
        }
        global.bootstrapEvents.on("deepLink", M => this.handleDeepLinkingUrl(M));
        global.bootstrapEvents.on("openFile", M => this.handlePlayLocalVideo(M));
        if (process.defaultApp) {
          if (process.argv.length >= 2) {
            D.app.setAsDefaultProtocolClient("bilipc", process.execPath, [G.default.resolve(process.argv[1])]);
          }
        } else {
          D.app.setAsDefaultProtocolClient("bilipc");
        }
        this.registerAppBeforeQuitEvent();
        this.registerAppChildProcessGone();
        this.registerAppRenderProcessGone();
      }
      registerAppBeforeQuitEvent() {
        var L = {
          mHbLn: function (M, N) {
            return M - N;
          }
        };
        D.app.on("before-quit", M => {
          if (this.isAppOnQuitting) {
            M.preventDefault();
            return;
          }
          this.isAppOnQuitting = true;
          if (!this.isAppQuitReported) {
            this.isAppQuitReported = true;
            this.configService.isAppQuited = true;
            this.configService.appQuitTime = Date.now();
            this.configService.beforeQuitApp$.next();
            setTimeout(() => {
              this.isAppOnQuitting = false;
              D.app.quit();
            }, F.QUIT_STAY_TIME);
          } else {
            this.configService.onQuitingApp$.next();
            D.app.removeAllListeners();
            D.globalShortcut.unregisterAll();
            D.BrowserWindow.getAllWindows().forEach(Q => Q.removeAllListeners());
            this.log.info("Good-bye!");
          }
        });
      }
      handleDeepLinkingUrl(L) {
        const M = decodeURIComponent(L);
        this.log.info("Handle deep-link:", M);
        const N = /bilipc:\/\/page\/(\w*?)(?=$|\?.*$)/.exec(L);
        if (N && N[1]) {
          const O = (0, B.parseQueryString)(L) || {};
          this.urlSchemeOpenId = O.openId;
          this.reportService.reportSchemeUrlOpen({
            url: L,
            openFlag: O.openFlag
          });
          this.configService.deepLinkSub?.unsubscribe();
          if (N[1] === "player" && O) {
            if (h.SLJDy(O.mainWin, "0")) {
              this.configService.isInitPlayerWinFirst = true;
            }
            this.configService.isOpenedByLocalVido = false;
            this.windowService.focusPlayerWindow();
            this.configService.openPlayerWindow$.next(O);
            return;
          }
          this.windowService.focusMainWindow();
          if (N[1] === "search" && O.keyword) {
            if (this.configService.isSearchPageReady) {
              this.configService.openMainWindowPage$.next({
                page: "SearchPage",
                meta: {
                  ...O
                }
              });
            } else {
              this.configService.deepLinkSub = this.configService.searchPageReady$.pipe((0, H.take)(1)).subscribe(() => {
                this.configService.openMainWindowPage$.next({
                  page: "SearchPage",
                  meta: {
                    ...O
                  }
                });
              });
            }
            return;
          }
          let P;
          switch (N[1]) {
            case "recommend":
              P = "RecommendPage";
              break;
            case "dynamic":
              P = h.NdQPU;
              break;
            case "space":
              P = "SpacePage";
              break;
            case "settings":
              P = "SettingsPage";
              break;
          }
          if (P) {
            if (this.configService.isMainWindowReady) {
              this.configService.openMainWindowPage$.next({
                page: P,
                meta: {
                  ...O
                }
              });
            } else {
              this.configService.deepLinkSub = this.configService.mainWindowReady$.pipe((0, H.take)(1)).subscribe(() => {
                this.configService.openMainWindowPage$.next({
                  page: P,
                  meta: {
                    ...O
                  }
                });
              });
            }
          }
        } else {
          this.windowService.focusMainWindow();
        }
      }
      handlePlayLocalVideo(L) {
        const M = decodeURIComponent(L);
        this.log.info("Handle play local video:", M);
        if (!(0, I.existsSync)(M)) {
          this.log.error("Local video not exist!");
          return;
        }
        const {
          ext: N,
          base: O
        } = G.default.parse(M);
        const {
          ffmpegPath: P
        } = this.configService;
        let Q = undefined;
        let R = undefined;
        if (P) {
          let T = "";
          try {
            T = (0, E.execFileSync)(F.FFMPEG_EXE_, ["-i", M], {
              encoding: "utf8",
              windowsHide: true
            }) || "";
          } catch (U) {
            T = h.PqGDu(U, Error) ? U.stack || U.message : String(U);
          }
          Q = T.match(/Stream\s.*?Video:.*$/m)?.[0];
          R = T.match(/Stream\s.*?Audio:.*$/m)?.[0];
        }
        this.reportService.reportPlayLocalVideo({
          name: O,
          ext: N,
          vinfo: Q,
          ainfo: R
        });
        this.configService.isOpenedByLocalVido = true;
        this.configService.isInitPlayerWinFirst = true;
        this.windowService.focusPlayerWindow();
        let S = "";
        if (N && F.SUPPORT_EXTS.includes(N.toLowerCase().replace(/^\./, ""))) {
          S = "file://" + M;
        } else {
          S = this.configService.localServer + "/local-video?vpath=" + L + "&token=" + global.APP_HASH_CODE;
        }
        this.configService.openPlayerWindow$.next({
          type: h.nLiWH,
          aid: -999,
          cid: -999,
          bvid: "-999",
          localUrl: S,
          videoName: O
        });
      }
      registerAppChildProcessGone() {
        D.app.on(h.mhSMn, (L, {
          type: M,
          reason: N,
          name: O,
          serviceName: P,
          exitCode: Q
        }) => {
          this.log.error(h.PnExZ, {
            type: M,
            reason: N,
            name: O,
            serviceName: P,
            exitCode: Q
          });
          this.reportService.reportChildProcessGone({
            type: M,
            reason: N,
            name: O,
            serviceName: P,
            exitCode: Q
          });
          let R = "";
          switch (M) {
            case "GPU":
              switch (N) {
                case "crashed":
                  this.log.error("GPU creashed!");
                  R = "GPU进程崩溃，是否禁用GPU后重启程序？";
                  break;
                case "killed":
                  this.log.error("GPU killed!");
                  R = h.qehig;
                  break;
              }
          }
          if (R) {
            const {
              isSplashWindowReady: S,
              mainWindow: T
            } = this.configService;
            if (S || this.storeService.getIsDisableGpu()) {
              return;
            }
            this.storeService.setIsDisableGpu(true);
            if (T) {
              D.dialog.showMessageBox(T, {
                type: "warning",
                title: "警告",
                buttons: ["刷新", "重启"],
                message: R,
                noLink: true
              }).then(U => {
                if (U.response === 1) {
                  this.utilsService.relaunchApp();
                } else {
                  T.reload();
                }
              });
            } else {
              this.utilsService.relaunchApp();
            }
          }
        });
      }
      registerAppRenderProcessGone() {
        D.app.on(h.tEfcq, (M, N, {
          reason: O
        }) => {
          if (h.YzhsJ !== "eJJDH") {
            const {
              mainWindow: Q,
              playerWindow: R,
              liveRoomWindow: S,
              universalWindow: T,
              liveRoomGpView: U,
              universalGpView: V
            } = this.configService;
            return [Q, R, S, T, U, V];
          } else {
            this.log.error("Render process gone, reason:", O);
            this.reportService.reportRenderProcessGone({
              reason: O
            });
            if (this.isRenderGoneDialogOpen) {
              return;
            }
            this.isRenderGoneDialogOpen = true;
            let Q = "";
            switch (O) {
              case h.mMsDJ:
                Q = "图形化进程崩溃，是否重启程序？";
                break;
              case "killed":
                Q = "由于未知原因导致图形化进程被终止，是否重启程序？";
                break;
              case h.inTUq:
                Q = "内存不足，是否重启程序释放内存？";
                break;
              default:
                Q = "由于未知原因，导致程序崩溃！需要重启吗？";
                break;
            }
            this.reportService.reportCrashDialogShow({
              reason: O
            });
            const {
              playerWindow: R,
              openPlayerWindow$: S,
              openPlayerParams: T
            } = this.configService;
            const U = D.BrowserWindow.fromWebContents(N);
            const V = U.id === R.id;
            D.dialog.showMessageBox(U, {
              type: "warning",
              title: "警告",
              buttons: ["刷新", "重启"],
              message: Q,
              noLink: true
            }).then(W => {
              this.isRenderGoneDialogOpen = false;
              if (W.response === 1) {
                this.utilsService.relaunchApp();
              } else {
                if (V) {
                  U.webContents.once("dom-ready", () => {
                    setTimeout(() => S.next(T), 200);
                  });
                }
                U.reload();
              }
            });
          }
        });
      }
      logAppGpuDiagnostics() {
        const M = async () => {
          try {
            this.log.info("GPU feature status:", JSON.stringify(D.app.getGPUFeatureStatus()));
            const N = await D.app.getGPUInfo("complete");
            this.log.info("GPU complete info:", JSON.stringify(N));
          } catch (O) {
            this.log.warn("Get GPU diagnostics error:", O?.message || O);
          }
        };
        if (global.isGpuInfoUpdated) {
          M();
        } else {
          D.app.once("gpu-info-update", M);
        }
      }
    };
    J = i([(0, r.Injectable)(), j("design:paramtypes", [typeof (l = typeof u.ConfigService !== "undefined" && u.ConfigService) === "function" ? l : Object, typeof (m = typeof w.StoreService !== h.lKsGs && w.StoreService) === "function" ? m : Object, typeof (n = typeof z.ReportService !== "undefined" && z.ReportService) === "function" ? n : Object, typeof (o = typeof A.UtilsService !== "undefined" && A.UtilsService) === "function" ? o : Object, typeof (q = typeof C.WindowService !== "undefined" && C.WindowService) === "function" ? q : Object])], J);
    g.AppEvents = J;
  }
});
var ji = bX({
  ""(g) {
    'use strict';

    var h = {
      xuqeD: function (O, P) {
        return O === P;
      },
      gdRbv: function (O, P) {
        return O - P;
      },
      aOXjA: function (O, P, Q, R) {
        return O(P, Q, R);
      },
      CHDpT: "eventsService",
      DJJqY: "isOnUpdating",
      lAejB: "isPatchReadyEmited",
      XoJzv: "isPatchUpdateHited",
      RUmgS: "exe",
      nVrMz: function (O, P) {
        return O || P;
      },
      WndAI: function (O, P) {
        return O === P;
      },
      oiJJm: "quitandinstall",
      yfvkP: function (O, P) {
        return O + P;
      },
      hmWiR: function (O, P) {
        return O + P;
      },
      LtxnM: "download-progress",
      EBmgc: function (O) {
        return O();
      },
      CYdgR: "fs-extra",
      OWari: function (O, P) {
        return O(P);
      },
      CHUxk: function (O, P) {
        return O !== P;
      }
    };
    var i = g && g.__decorate || function (O, P, Q, R) {
      var S = arguments.length;
      var T = S < 3 ? P : h.xuqeD(R, null) ? R = Object.getOwnPropertyDescriptor(P, Q) : R;
      var U;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        T = Reflect.decorate(O, P, Q, R);
      } else {
        for (var V = h.gdRbv(O.length, 1); V >= 0; V--) {
          if (U = O[V]) {
            T = (S < 3 ? U(T) : S > 3 ? h.aOXjA(U, P, Q, T) : U(P, Q)) || T;
          }
        }
      }
      if (S > 3 && T) {
        Object.defineProperty(P, Q, T);
      }
      return T;
    };
    var j = g && g.__metadata || function (O, P) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(O, P);
      }
    };
    var k = g && g.__importDefault || function (O) {
      if (O && O.__esModule) {
        return O;
      } else {
        return {
          default: O
        };
      }
    };
    var l;
    var m;
    var n;
    var o;
    var q;
    var r;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.UpdateService = undefined;
    var t = require("@nestjs/common");
    ga();
    var u = c2(g9);
    var w = gP();
    var z = gK();
    var A = io();
    var B = iM();
    var C = h.EBmgc(ix);
    var D = iu();
    var E = require("electron-updater");
    var F = require("@bilibili/b-utils-core");
    var G = require("electron");
    var H = require("path");
    var I = require("rxjs");
    var J = require(h.CYdgR);
    fP();
    var K = c2(fO);
    var L = k(h.OWari(require, "semver"));
    var M = k(require("extract-zip"));
    var N = class O extends u.BaseService {
      constructor(P, Q, R, S, T, U) {
        super("UpdateService");
        c3(this, "configService");
        c3(this, h.CHDpT);
        c3(this, "storeService");
        c3(this, "reportService");
        c3(this, "utilsService");
        c3(this, "fetchService");
        h.aOXjA(c3, this, "checkingTimes", 0);
        c3(this, "autocheck", true);
        c3(this, "cancellationToken", null);
        c3(this, "isCanceledByUser", false);
        c3(this, "isDownloading", false);
        c3(this, "updateInfo", null);
        c3(this, "updateStep", "check");
        c3(this, "progressObj", null);
        c3(this, h.DJJqY, false);
        c3(this, "patchVersion", "");
        c3(this, h.lAejB, false);
        c3(this, h.XoJzv, false);
        c3(this, "isPatchSameVersion", false);
        c3(this, "patchInfo", null);
        this.configService = P;
        this.eventsService = Q;
        this.storeService = R;
        this.reportService = S;
        this.utilsService = T;
        this.fetchService = U;
        E.autoUpdater.logger = this.log;
        E.autoUpdater.autoInstallOnAppQuit = true;
        E.autoUpdater.autoDownload = false;
        if (K.IS_WIN) {
          E.autoUpdater.installDirectory = (0, H.dirname)(G.app.getPath(h.RUmgS));
        }
        this.configService.buvidReady$.subscribe(() => {
          this.judgeIncrementUpdate();
        });
        this.configService.appConfigUpdated$.subscribe(() => {
          this.isPatchUpdateHited = false;
          this.isPatchSameVersion = false;
          this.judgeIncrementUpdate();
        });
        const {
          autoUpdateInfoReady$: W,
          acceptPrivacyPolicy$: X
        } = this.configService;
        (0, I.merge)(W, X).subscribe(() => {
          this.judgeIncrementPatchReady();
        });
        this.configService.mainWindowReady$.subscribe(() => {
          if (!this.configService.isAppSlept) {
            this.checkForUpdate(true);
            this.judgeIncrementUpdate();
          }
          this.judgeIncrementPatchReady();
        });
        this.configService.intervalOfAppUpdateCheck = setInterval(() => this.checkForUpdate(true), 86400000);
      }
      judgeIncrementUpdate() {
        var P = {
          GBTyc: function (X, Y) {
            return X === Y;
          },
          OflWn: "Increment update buvid black hit.",
          dwZIJ: function (X, Y) {
            return h.nVrMz(X, Y);
          }
        };
        const {
          runtimeConfig: Q,
          customConfig: R,
          isAppConfigReady: S,
          buvid: T,
          isMainWindowReady: U
        } = this.configService;
        if (Q.disableAppPatch) {
          return;
        }
        if (K.IS_FREEZE_VERSION || R.ignorePatchUpdate) {
          return;
        }
        if (this.isOnUpdating || !S || !T || !U) {
          return;
        }
        this.configService.isIncrementPatchReady = false;
        const {
          patchInfo: V
        } = this.configService.appConfig;
        if (!V) {
          this.log.info("Patch info null.");
          return;
        }
        const W = undefined;
        this.log.info("Patch info:", JSON.stringify(V.map(X => ({
          ...X,
          wl: W,
          bl: W,
          uw: W,
          um: W
        }))));
        (0, F.toArray)(V).forEach((X, Y) => {
          if (P.GBTyc("IcIVF", "dzcSH")) {
            l?.destroy();
            this.configService[m] = null;
            if ((0, n.isFun)(o)) {
              q();
            }
          } else {
            if (this.isPatchUpdateHited) {
              return;
            }
            const {
              on: a0,
              s: a1,
              b: a2,
              bc: a3,
              v: a4,
              sv: a5,
              ev: a6,
              uw: a7,
              um: a8,
              wl: a9,
              bl: aa,
              fix: ab
            } = X;
            const ac = K.IS_WIN ? a7 : a8;
            const ad = ac.match(/\/(\d+)\/public/)?.[1];
            if (!a0 || !a4 || !ac) {
              return;
            }
            if ((K.APP_VERSION !== a4 || ab && !ac.includes(K.FAWKES_JOB_ID)) && (!a5 || L.default.gte(K.APP_VERSION, a5)) && (!a6 || L.default.lte(K.APP_VERSION, a6))) {
              const {
                mid: ae
              } = this.storeService.getUserInfo();
              const {
                buvid: af
              } = this.configService;
              const ag = this.utilsService.getBuvidWlCode(af);
              if (aa) {
                if (aa.match(new RegExp("(^|,)" + ae + "(,|$)"))) {
                  this.log.info("Increment update mid black hit.");
                  return;
                }
                if (aa.match(new RegExp(ag + ",(0,|0$)"))) {
                  this.log.info(P.OflWn);
                  return;
                }
              }
              if (a9) {
                if (a9.match(new RegExp("(^|,)" + ae + "(,|$)"))) {
                  this.log.info("Increment update mid white hit.");
                  this.handleIncrementPatchGrayHit(X, ad);
                  return;
                }
                if (a9.match(new RegExp(ag + ",(0,|0$)"))) {
                  this.log.info("Increment update buvid white hit.");
                  this.handleIncrementPatchGrayHit(X, ad);
                  return;
                }
              }
              const [ah, ai] = this.utilsService.getAbTestCursor(a2);
              const aj = this.utilsService.getAbTestBucket(af, a1, P.dwZIJ(a3, 1000));
              this.log.info("Patch bucket:", aj);
              if (aj >= ah && aj <= ai) {
                this.log.info("Increment update bucket hit.");
                this.handleIncrementPatchGrayHit(X, ad);
              }
            }
          }
        });
      }
      handleIncrementPatchGrayHit(P, Q) {
        this.patchInfo = P;
        this.isPatchUpdateHited = true;
        this.isPatchSameVersion = h.WndAI(K.APP_VERSION, P.v);
        const {
          versionInfoPath: R
        } = K.UPDATE_INFO;
        if (!(0, J.existsSync)(R)) {
          this.handleFetchPatch(Q);
        } else {
          const {
            v: S,
            fix: T
          } = P;
          const U = (0, J.readFileSync)(R, {
            encoding: "utf-8"
          });
          const V = this.utilsService.getPatchVersionInfo(T, S);
          if (U === V) {
            this.log.info("Patch file already exist.");
            this.configService.isIncrementPatchReady = true;
            this.patchVersion = S;
            this.judgeIncrementPatchReady();
          } else {
            this.handleFetchPatch(Q);
          }
        }
      }
      async handleFetchPatch(P) {
        this.isOnUpdating = true;
        const {
          v: Q,
          uw: R,
          um: S
        } = this.patchInfo;
        this.log.info("Fetch patch:", Q, P);
        const {
          updateZipPath: T,
          updateAsarPath: U
        } = K.UPDATE_INFO;
        if ((0, J.existsSync)(T)) {
          (0, J.removeSync)(T);
        }
        if ((0, J.existsSync)(U)) {
          (0, J.removeSync)(U);
        }
        const V = K.IS_WIN ? R : S;
        try {
          const W = await this.fetchService.downloadFile(V);
          this.log.info("Fetch patch success!");
          (0, J.writeFileSync)(T, new Uint8Array(W), "binary");
          this.handleUnzipPatch(P);
        } catch (X) {
          this.isOnUpdating = false;
          this.log.error("download petch(" + Q + "," + P + ") error:", this.getErrStack(X));
        }
      }
      async handleUnzipPatch(P) {
        const {
          v: Q,
          fix: R
        } = this.patchInfo;
        this.log.info("Unzip patch:", Q, P);
        const {
          updateZipPath: S,
          updateAsarPath: T,
          versionInfoPath: U,
          getResourceAsarPath: V
        } = K.UPDATE_INFO;
        try {
          process.noAsar = true;
          await (0, M.default)(S, {
            dir: K.APP_RESOURCE_DIR
          });
          const W = this.utilsService.getPatchVersionInfo(R, Q);
          const X = V(W);
          (0, J.renameSync)(T, X);
          process.noAsar = false;
          (0, J.removeSync)(S);
          (0, J.writeFileSync)(U, W);
          this.log.info("Unzip patch success!");
          this.isOnUpdating = false;
          this.configService.isIncrementPatchReady = true;
          this.patchVersion = Q;
          this.judgeIncrementPatchReady();
          this.reportService.reportPatchUpgrade({
            new_version: Q,
            new_fawkes_id: P,
            from_version: K.APP_VERSION,
            from_fawkes_id: K.FAWKES_JOB_ID,
            install_version: K.INSTALL_VERSION
          });
        } catch (Y) {
          this.isOnUpdating = false;
          this.log.error("Unzip petch error:", this.getErrStack(Y));
        }
      }
      judgeIncrementPatchReady() {
        const {
          isIncrementPatchReady: P,
          isMainWindowReady: Q
        } = this.configService;
        if (!P || !Q) {
          return;
        }
        if (this.isPatchReadyEmited || this.isPatchSameVersion) {
          return;
        }
        if (!this.storeService.getIsPrivacyPolicyAccepted()) {
          return;
        }
        if (this.configService.checkIsAppForceUpdate()) {
          return;
        }
        this.log.info("Emit increment patch ready!");
        this.eventsService.emitIncrementPatchReady(this.patchVersion);
        this.isPatchReadyEmited = true;
      }
      checkForUpdate(P = false) {
        if (!P && K.IS_DEV) {
          this.eventsService.emitUpdateInfo({
            isAvailable: false
          });
          return;
        }
        this.updateStep = "check";
        this.checkingTimes++;
        if (P) {
          delete E.autoUpdater.requestHeaders.manualcheck;
        } else {
          E.autoUpdater.requestHeaders.manualcheck = "1";
        }
        this.autocheck = P;
        E.autoUpdater.checkForUpdates();
      }
      downloadUpdate() {
        this.isCanceledByUser = false;
        if (this.isDownloading) {
          return;
        }
        this.isDownloading = true;
        this.updateStep = "download";
        this.cancellationToken = new E.CancellationToken();
        E.autoUpdater.downloadUpdate(this.cancellationToken);
      }
      quitAndInstall() {
        this.updateStep = h.oiJJm;
        this.configService.isForceCloseWindows = true;
        E.autoUpdater.quitAndInstall();
      }
      cancelDownLoadUpdate() {
        this.isCanceledByUser = true;
      }
      initAppUpdateEvents() {
        E.autoUpdater.requestHeaders = {
          platform: K.IS_MAC ? "mac" : "win",
          chid: K.CHID,
          appversion: K.APP_VERSION,
          eleversion: process.versions.electron,
          osversion: this.configService.sysVersion.match(/\d+\.\d+\.\d+/)?.[0] || "",
          arch: process.arch,
          buvid: this.configService.buvid,
          fawkesjobid: K.FAWKES_JOB_ID,
          fawkesbuildid: K.FAWKES_BUILD_ID
        };
        E.autoUpdater.on("checking-for-update", () => {
          this.log.info("Checking for update...");
        });
        E.autoUpdater.on("update-available", Q => {
          this.log.info("Update available.");
          this.updateInfo = Q;
          this.configService.autoUpdateInfo = Q;
          this.configService.autoUpdateInfoReady$.next();
          Q.isAvailable = true;
          const R = Q?.isShowUpdate;
          if (R && L.default.gte(K.APP_VERSION, R) && this.autocheck) {
            this.log.info("update no auto check tips,appver:" + K.APP_VERSION + ",showver:" + R);
            return;
          }
          if (this.isDownloading && !this.isCanceledByUser) {
            if (this.progressObj) {
              this.eventsService.emitUpdateDownload({
                ...this.progressObj,
                isShowModal: true
              });
            }
            return;
          }
          this.eventsService.emitUpdateInfo(Q);
        });
        E.autoUpdater.on("update-not-available", Q => {
          this.log.info("Update not available.");
          this.updateInfo = Q;
          this.configService.autoUpdateInfo = {};
          this.configService.autoUpdateInfoReady$.next();
          if (!this.autocheck) {
            Q.isAvailable = false;
            this.eventsService.emitUpdateInfo(Q);
          }
        });
        E.autoUpdater.on(h.LtxnM, Q => {
          this.isDownloading = true;
          if (this.isCanceledByUser) {
            return;
          }
          let R = "Download speed: " + Q.bytesPerSecond;
          R = h.yfvkP(R, " - Downloaded ") + Q.percent + "%";
          R = h.hmWiR(R + " (" + Q.transferred + "/" + Q.total, ")");
          this.log.info(R);
          this.progressObj = Q;
          this.eventsService.emitUpdateDownload(Q);
        });
        E.autoUpdater.on("update-downloaded", Q => {
          this.progressObj = null;
          this.isDownloading = false;
          if (this.isCanceledByUser) {
            return;
          }
          this.log.info("Update downloaded");
          Q.isDownloaded = true;
          this.eventsService.emitUpdateInfo(this.updateInfo);
          this.eventsService.emitUpdateDownload(Q);
        });
        E.autoUpdater.on("error", Q => {
          this.progressObj = null;
          this.isDownloading = false;
          this.configService.autoUpdateInfo = {};
          this.configService.autoUpdateInfoReady$.next();
          if (this.isCanceledByUser) {
            return;
          }
          this.log.error("Error in auto-updater." + Q);
          this.log.info("Step:" + this.updateStep + ", Times:" + this.checkingTimes);
          if (!this.autocheck || this.updateStep != "check") {
            this.eventsService.emitUpdateInfo({
              iserror: true
            });
          }
          this.reportService.reportUpdateError({
            autocheck: this.autocheck,
            updateStep: this.updateStep,
            message: Q?.message || "",
            error: this.getErrStack(Q).substring(0, 300)
          });
        });
      }
    };
    N = i([(0, t.Injectable)(), j("design:paramtypes", [typeof (l = typeof z.ConfigService !== "undefined" && z.ConfigService) === "function" ? l : Object, typeof (m = typeof w.EventsService !== "undefined" && w.EventsService) === "function" ? m : Object, typeof (n = h.CHUxk(typeof A.StoreService, "undefined") && A.StoreService) === "function" ? n : Object, typeof (o = typeof B.ReportService !== "undefined" && B.ReportService) === "function" ? o : Object, typeof (q = typeof C.UtilsService !== "undefined" && C.UtilsService) === "function" ? q : Object, h.xuqeD(typeof (r = typeof D.FetchService !== "undefined" && D.FetchService), "function") ? r : Object])], N);
    g.UpdateService = N;
  }
});
var jj = bX({
  ""(g) {
    'use strict';

    var h = {
      fWhCF: function (B, C) {
        return B === C;
      },
      fVnpy: function (B, C) {
        return B(C);
      },
      LYyfO: function (B, C, D) {
        return B(C, D);
      },
      qGbDP: "Init ab conf.",
      UYlBy: function (B, C) {
        return B !== C;
      },
      JXQtK: function (B) {
        return B();
      },
      EFAPT: function (B, C, D) {
        return B(C, D);
      },
      XPdZj: function (B, C) {
        return B !== C;
      }
    };
    var i = g && g.__decorate || function (B, C, D, E) {
      var F = arguments.length;
      var G = F < 3 ? C : h.fWhCF(E, null) ? E = Object.getOwnPropertyDescriptor(C, D) : E;
      var H;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        G = Reflect.decorate(B, C, D, E);
      } else {
        for (var I = B.length - 1; I >= 0; I--) {
          if (H = B[I]) {
            G = (F < 3 ? h.fVnpy(H, G) : F > 3 ? H(C, D, G) : h.LYyfO(H, C, D)) || G;
          }
        }
      }
      if (F > 3 && G) {
        Object.defineProperty(C, D, G);
      }
      return G;
    };
    var j = g && g.__metadata || function (B, C) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(B, C);
      }
    };
    var k;
    var l;
    var m;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.AbTestService = undefined;
    var n = require("@nestjs/common");
    ga();
    var o = c2(g9);
    var q = gK();
    var r = iu();
    var t = h.JXQtK(io);
    var u = require("rxjs");
    im();
    var w = c2(il);
    var z = require("@bilibili/b-utils-core");
    var A = class B extends o.BaseService {
      constructor(C, D, E) {
        super("AbTestService");
        c3(this, "configService");
        c3(this, "storeService");
        c3(this, "fetchService");
        c3(this, "isOnLoading", false);
        this.configService = C;
        this.storeService = D;
        this.fetchService = E;
        const {
          buvidReady$: G,
          userLoginChange$: H
        } = this.configService;
        (0, u.merge)(G, H).subscribe(() => {
          this.syncAbTestConf(true);
        });
        this.configService.appSleepChange$.subscribe(I => {
          if (!I) {
            this.syncAbTestConf();
          }
        });
        this.configService.appHeartbeat$.subscribe(I => {
          if (I % 1800 === 0) {
            this.syncAbTestConf();
          }
        });
      }
      initAbTestConf() {
        this.log.info(h.qGbDP);
        const {
          customAbInfo = {}
        } = this.configService.customConfig;
        const C = this.storeService.getAbTestConf();
        w.AB_TEST_CONFS.forEach(D => {
          if ((0, z.isObj)(customAbInfo[D])) {
            C[D] = customAbInfo[D];
            this.log.info("Hit customAbConf,", JSON.stringify({
              [D]: customAbInfo[D]
            }));
          }
        });
        if (w.AB_TEST_CONFS.includes("light_player") && h.UYlBy(C.light_player?.value, "1")) {
          this.storeService.setPlayerWindowTheme("dark");
        }
        this.configService.abTestConf = C;
      }
      async syncAbTestConf(C = false) {
        if (this.isOnLoading) {
          return;
        }
        this.isOnLoading = true;
        this.log.info("Sync ab conf");
        try {
          const {
            buvid: D
          } = this.configService;
          const {
            mid: E
          } = this.storeService.getUserInfo();
          const F = await this.fetchService.getAbTestConf(D, E);
          const G = F.default || {};
          const H = JSON.stringify(G);
          const I = this.storeService.getAbTestConf();
          if (C) {
            this.log.info("AbConf:", H);
          }
          if (H !== JSON.stringify(I)) {
            this.storeService.setAbTestConf(G);
            this.initAbTestConf();
            this.configService.abTestConfChange$.next();
          }
        } catch (K) {
          this.log.error("syncAbTestConf err", K);
        } finally {
          this.isOnLoading = false;
        }
      }
    };
    A = h.EFAPT(i, [(0, n.Injectable)(), j("design:paramtypes", [typeof (k = typeof q.ConfigService !== "undefined" && q.ConfigService) === "function" ? k : Object, typeof (l = h.XPdZj(typeof t.StoreService, "undefined") && t.StoreService) === "function" ? l : Object, typeof (m = typeof r.FetchService !== "undefined" && r.FetchService) === "function" ? m : Object])], A);
    g.AbTestService = A;
  }
});
var jk = bX({
  ""(g) {
    'use strict';

    var h = {
      uQMuS: function (I, J) {
        return I < J;
      },
      oOJYH: "QVHFJ",
      ZGVdS: function (I, J, K) {
        return I(J, K);
      },
      TcLil: "Parse FF tree.",
      mzBBV: "test",
      qLhPg: "rxjs",
      QuFhY: function (I, J) {
        return I !== J;
      },
      NvWne: function (I, J) {
        return I !== J;
      },
      qdgRI: function (I, J) {
        return I === J;
      }
    };
    var i = g && g.__decorate || function (I, J, K, L) {
      var M = arguments.length;
      var N = M < 3 ? J : L === null ? L = Object.getOwnPropertyDescriptor(J, K) : L;
      var O;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        N = Reflect.decorate(I, J, K, L);
      } else {
        for (var P = I.length - 1; P >= 0; P--) {
          if (O = I[P]) {
            N = (h.uQMuS(M, 3) ? O(N) : M > 3 ? O(J, K, N) : O(J, K)) || N;
          }
        }
      }
      if (M > 3 && N) {
        Object.defineProperty(J, K, N);
      }
      return N;
    };
    var j = g && g.__metadata || function (I, J) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(I, J);
      }
    };
    var k = g && g.__importDefault || function (I) {
      if (h.oOJYH !== "QVHFJ") {
        h.show();
      } else if (I && I.__esModule) {
        return I;
      } else {
        return {
          default: I
        };
      }
    };
    var l;
    var m;
    var n;
    var o;
    var q;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.FfAbTestService = undefined;
    var r = require("@nestjs/common");
    ga();
    var t = c2(g9);
    var u = gK();
    var w = iu();
    var z = io();
    var A = ix();
    var B = iM();
    var C = require("@bilibili/b-utils-core");
    im();
    var D = c2(il);
    fP();
    var E = c2(fO);
    var F = require(h.qLhPg);
    var G = k(require("jszip"));
    var H = class I extends t.BaseService {
      constructor(J, K, L, M, N) {
        super("FfAbTestService");
        c3(this, "configService");
        h.ZGVdS(c3, this, "fetchService");
        c3(this, "storeService");
        c3(this, "reportService");
        c3(this, "utilsService");
        this.configService = J;
        this.fetchService = K;
        this.storeService = L;
        this.reportService = M;
        this.utilsService = N;
        const {
          buvidReady$: P,
          userLoginChange$: Q
        } = this.configService;
        (0, F.merge)(P, Q).subscribe(() => {
          this.initFfAbTestInfo();
        });
        this.configService.appSleepChange$.subscribe(R => {
          if (!R) {
            this.syncFfAbTestConfig();
          }
        });
        this.configService.appHeartbeat$.subscribe(R => {
          if (R % 1800 === 0) {
            this.syncFfAbTestConfig();
          }
        });
        this.configService.beforeQuitApp$.subscribe(() => {
          this.initReportAbTestTimer(true);
        });
        this.initReportAbTestTimer(false);
      }
      initFfAbTestInfo() {
        this.log.info(h.TcLil);
        const {
          customAbInfo = {}
        } = this.configService.customConfig;
        const J = this.storeService.getAbTestConfig();
        const {
          mid: K
        } = this.storeService.getUserInfo();
        const {
          buvid: L
        } = this.configService;
        const M = this.utilsService.getBuvidWlCode(L);
        const N = {};
        D.AB_TEST_LIST.forEach(P => {
          if (P in customAbInfo && (0, C.isBol)(customAbInfo[P])) {
            N[P] = customAbInfo[P];
            this.log.info("Hit customAbInfo,", P, customAbInfo[P]);
            return;
          }
          N[P] = false;
          if (!J.v) {
            return;
          }
          let R = false;
          const S = J.ab_list || [];
          S.forEach(T => {
            if (T.n === P) {
              R = true;
              if (T.wl) {
                if (T.wl.match(new RegExp("(^|,)" + K + "(,|$)"))) {
                  N[P] = true;
                  return;
                }
                if (T.wl.match(new RegExp(M + ",(0,|0$)"))) {
                  N[P] = true;
                  return;
                }
              }
              if (T.bl) {
                if (T.bl.match(new RegExp("(^|,)" + K + "(,|$)"))) {
                  return;
                }
                if (T.bl.match(new RegExp(M + ",(0,|0$)"))) {
                  return;
                }
              }
              if (!T.tree?.l) {
                return;
              }
              const U = +T.tree.bc || 1000;
              const [V, W] = this.utilsService.getAbTestCursor(T.tree.b);
              if (T.tree.l === "dm") {
                if (!L) {
                  return;
                }
                const X = this.utilsService.getAbTestBucket(L, T.tree.s, U);
                if (X >= V && X <= W) {
                  N[P] = true;
                  return;
                }
              } else {
                if (!K) {
                  return;
                }
                if (T.tree.l === "um") {
                  const Y = this.utilsService.getAbTestBucket(K, T.tree.s, U);
                  if (Y >= V && Y <= W) {
                    N[P] = true;
                  }
                } else if (T.tree.l === "u") {
                  const Z = this.utilsService.getAbTestBucket(K, "", U);
                  if (Z >= V && Z <= W) {
                    N[P] = true;
                  }
                }
              }
            }
          });
          if (!R) {
            N[P] = !P.endsWith("_r");
          }
        });
        if (!E.IS_WIN) {
          if (!this.configService.appConfig.isShowMacLinuxGamePage && !("sidebar_game_entry" in customAbInfo)) {
            N.sidebar_game_entry = false;
          }
        }
        let O = false;
        if (!(0, C.isDeepEqual)(this.configService.abTestInfo, N)) {
          this.configService.abTestInfo = N;
          if (L && J.v) {
            O = true;
          }
        }
        if (L && J.v) {
          if (N.sidebar_selected_hide2_r) {
            this.storeService.setIsSelectedExit(false);
            this.storeService.setIsSelectedFirst(false);
          }
          if (O) {
            this.configService.abTestInfoChange$.next();
          }
          this.log.info("FF:", JSON.stringify(N));
          this.storeService.setIsFfSelectedFirst(N.startup_selected_first_r);
          this.reportAbTestInfo();
        }
      }
      async syncFfAbTestConfig() {
        try {
          this.log.info("Fetch FF info.");
          const J = await this.fetchService.getFawkesFfVersion();
          const {
            isFawkesFFTest: K
          } = this.configService.customConfig;
          const L = K ? h.mzBBV : "prod";
          const M = this.storeService.getAbTestConfigEnv();
          this.log.info("FF env, s-c", M === L ? M : M + "-" + L);
          const N = Number(J[L]?.ff);
          const O = Number(this.storeService.getAbTestConfig().v);
          this.log.info("FF versions, l-r:", O === N ? O : O + "-" + N);
          if (M !== L || !O || N > O) {
            this.log.info("Fetch FF details, env:", L);
            const P = "http://i0.hdslb.com/bfs/fawkes/ff/" + L + "/bili_win_" + N + ".zip";
            const Q = await this.fetchService.fetchUrl(P);
            const R = new G.default();
            await R.loadAsync(Q.arrayBuffer());
            const S = await R.file("bili_win_" + N).async("text");
            const T = JSON.parse(S);
            const U = await this.fetchService.fetchUrl(T.version.default.u);
            const V = new G.default();
            await V.loadAsync(U.arrayBuffer());
            const W = await V.file("bili_win_default_" + N).async("text");
            this.storeService.setAbTestConfigEnv(L);
            this.storeService.setAbTestConfig(JSON.parse(W));
            this.initFfAbTestInfo();
          }
        } catch (X) {
          this.log.error("Fetch FF error:", this.getErrStack(X));
        }
      }
      reportAbTestInfo() {
        const {
          v: J
        } = this.storeService.getAbTestConfig();
        const {
          mid: K
        } = this.storeService.getUserInfo();
        const {
          buvid: L,
          abTestInfo: M
        } = this.configService;
        if (L && J) {
          this.reportService.reportAbTestInfo({
            config: M,
            buvid: L,
            mid: K
          });
        }
      }
      initReportAbTestTimer(J) {
        if (J) {
          this.reportAbTestInfo();
        }
        clearInterval(this.configService.intervalOfAbFlagReport);
        this.configService.intervalOfAbFlagReport = setInterval(() => {
          this.reportAbTestInfo();
        }, E.AB_FLAG_REPORT_TIME);
      }
    };
    H = i([(0, r.Injectable)(), j("design:paramtypes", [typeof (l = h.QuFhY(typeof u.ConfigService, "undefined") && u.ConfigService) === "function" ? l : Object, typeof (m = h.NvWne(typeof w.FetchService, "undefined") && w.FetchService) === "function" ? m : Object, typeof (n = typeof z.StoreService !== "undefined" && z.StoreService) === "function" ? n : Object, h.qdgRI(typeof (o = typeof B.ReportService !== "undefined" && B.ReportService), "function") ? o : Object, typeof (q = typeof A.UtilsService !== "undefined" && A.UtilsService) === "function" ? q : Object])], H);
    g.FfAbTestService = H;
  }
});
var jl = bX({
  ""(g) {
    'use strict';

    var h = {
      unHHj: "object",
      zZjKI: "function",
      WAame: function (B, C, D) {
        return B(C, D);
      },
      eigDT: "isWeChatInstalled",
      aegjT: "winreg",
      IAzEH: "undefined"
    };
    var i = g && g.__decorate || function (B, C, D, E) {
      var F = arguments.length;
      var G = F < 3 ? C : E === null ? E = Object.getOwnPropertyDescriptor(C, D) : E;
      var H;
      if (typeof Reflect === h.unHHj && typeof Reflect.decorate === h.zZjKI) {
        G = Reflect.decorate(B, C, D, E);
      } else {
        for (var I = B.length - 1; I >= 0; I--) {
          if (H = B[I]) {
            G = (F < 3 ? H(G) : F > 3 ? H(C, D, G) : H(C, D)) || G;
          }
        }
      }
      if (F > 3 && G) {
        Object.defineProperty(C, D, G);
      }
      return G;
    };
    var j = g && g.__metadata || function (B, C) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(B, C);
      }
    };
    var k = g && g.__importDefault || function (B) {
      if (B && B.__esModule) {
        return B;
      } else {
        return {
          default: B
        };
      }
    };
    var l;
    var m;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.ThirdPartyService = undefined;
    var n = require("@nestjs/common");
    ga();
    var o = c2(g9);
    var q = iM();
    var r = io();
    fP();
    var t = c2(fO);
    var u = k(require(h.aegjT));
    var w = require("child_process");
    var z = require("@bilibili/b-utils-core");
    var A = class B extends o.BaseService {
      constructor(C, D) {
        super("ThirdPartyService");
        c3(this, "reportService");
        h.WAame(c3, this, "storeService");
        c3(this, "isWeChatChecked", false);
        c3(this, h.eigDT, false);
        c3(this, "WIN_LOWEST_SUPPORT_OPENSDK_WECHAT_VERSION", "3.9.12");
        c3(this, "MAC_LOWEST_SUPPORT_OPENSDK_WECHAT_VERSION", "4.0.0");
        this.reportService = C;
        this.storeService = D;
      }
      async initThirdParties() {
        await this.checkWeChatInstalled();
        this.isWeChatChecked = true;
        this.storeService.setIsWxInstalled(this.isWeChatChecked);
      }
      getIsWeChatInstalled() {
        if (this.isWeChatChecked) {
          return this.isWeChatInstalled;
        } else {
          return this.storeService.getIsWxInstalled();
        }
      }
      getWeChatVersionOfWin(C, D) {
        return new Promise(E => {
          if (this.isWeChatInstalled) {
            E(null);
          }
          const F = D ? t.BETA_WE_CHAT_REGEDIT_PATH : t.WE_CHAT_REGEDIT_PATH;
          const G = new u.default({
            hive: u.default.HKCR,
            key: F
          });
          G.get("", (H, I) => {
            if (H) {
              this.log.error("Check " + C + " regedit error");
              E(null);
              return;
            }
            const J = /([^"]+\.exe)/.exec(I.value);
            if (!J || !J[1]) {
              this.log.error("Check " + C + " exe path error：", I.value);
              E(null);
              return;
            }
            const K = "wmic datafile where name=\"" + J[1].replace(/\\/g, "\\\\") + "\" get Version /value";
            (0, w.exec)(K, (L, M) => {
              if (L) {
                this.log.error("Wmic " + C + " version error");
                E(null);
                return;
              }
              const N = /Version=(.+)/.exec(M);
              if (!N || !N[1]) {
                this.log.error("Match " + C + " version error：", M);
                E(null);
                return;
              }
              const O = N[1];
              E(O);
            });
          });
        });
      }
      getWeChatVersionOfMac(C, D) {
        return new Promise(E => {
          if (this.isWeChatInstalled) {
            E(null);
          }
          const F = D ? t.BETA_WE_CHAT_PATH : t.WE_CHAT_PATH;
          const G = "defaults read \"" + F + "/Contents/Info\" CFBundleShortVersionString";
          (0, w.exec)(G, (H, I) => {
            if (H) {
              this.log.error("defaults read " + C + " error");
              E(null);
              return;
            }
            const J = I.trim();
            this.log.info(C + " version：", J);
            E(J);
          });
        });
      }
      onGetVersion(C, D, E) {
        this.reportService.reportWeChatInstallStatus(C);
        let F = false;
        try {
          F = (0, z.compareVersion)(C, D) >= 0;
        } catch (G) {
          this.log.error("Compare " + E + " version error");
          return;
        }
        if (!F) {
          this.log.error("The " + E + " version is not support openSDK");
          return;
        }
        this.isWeChatInstalled = true;
      }
      async checkWeChatInstalled() {
        if (t.IS_WIN && !t.IS_WIN7OR8) {
          const D = "wx";
          this.getWeChatVersionOfWin(D, false).then(E => {
            if (E) {
              this.onGetVersion(E, this.WIN_LOWEST_SUPPORT_OPENSDK_WECHAT_VERSION, D);
            }
          }).catch(E => {
            this.log.error("Check " + D + " error");
          });
        } else if (t.IS_MAC) {
          const E = "wx";
          this.getWeChatVersionOfMac(E, false).then(F => {
            if (F) {
              this.onGetVersion(F, this.MAC_LOWEST_SUPPORT_OPENSDK_WECHAT_VERSION, E);
            }
          }).catch(F => {
            this.log.error("Check " + E + " error");
          }).finally(() => {
            const F = "wx(beta)";
            this.getWeChatVersionOfMac(F, true).then(G => {
              if (G) {
                this.onGetVersion(G, this.MAC_LOWEST_SUPPORT_OPENSDK_WECHAT_VERSION, F);
              }
            }).catch(G => {
              this.log.error("Check beta " + F + " error");
            });
          });
        }
      }
    };
    A = i([(0, n.Injectable)(), j("design:paramtypes", [typeof (l = typeof q.ReportService !== "undefined" && q.ReportService) === "function" ? l : Object, typeof (m = typeof r.StoreService !== h.IAzEH && r.StoreService) === "function" ? m : Object])], A);
    g.ThirdPartyService = A;
  }
});
var jm = bX({
  ""(g, h) {
    'use strict';

    var j = g && g.__decorate || function (a7, a8, a9, aa) {
      var ab = arguments.length;
      var ac = ab < 3 ? a8 : aa === null ? aa = Object.getOwnPropertyDescriptor(a8, a9) : aa;
      var ad;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        ac = Reflect.decorate(a7, a8, a9, aa);
      } else {
        for (var ae = a7.length - 1; ae >= 0; ae--) {
          if (ad = a7[ae]) {
            ac = (ab < 3 ? ad(ac) : ab > 3 ? ad(a8, a9, ac) : ad(a8, a9)) || ac;
          }
        }
      }
      if (ab > 3 && ac) {
        Object.defineProperty(a8, a9, ac);
      }
      return ac;
    };
    var k = g && g.__metadata || function (a7, a8) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(a7, a8);
      }
    };
    var l = g && g.__importDefault || function (a7) {
      if (a7 && a7.__esModule) {
        return a7;
      } else {
        return {
          default: a7
        };
      }
    };
    var m;
    var n;
    var o;
    var q;
    var r;
    var t;
    var u;
    var w;
    var z;
    var A;
    var B;
    var C;
    var D;
    var E;
    var F;
    var G;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.AppService = undefined;
    var H = require("@nestjs/common");
    ga();
    var I = c2(g9);
    var J = gK();
    var K = jh();
    var L = iy();
    var M = iz();
    var N = j7();
    var O = je();
    var P = jg();
    var Q = jf();
    var R = iM();
    var S = ji();
    var T = iU();
    var U = j5();
    var V = jj();
    var W = jk();
    var X = j8();
    var Y = jl();
    dn();
    var Z = c2(dm);
    fP();
    var a0 = c2(fO);
    var a1 = require("electron");
    var a2 = require("path");
    var a3 = require("fs-extra");
    var a4 = require("portfinder");
    var a5 = l(require("express"));
    var a6 = class a7 extends I.BaseService {
      constructor(a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an) {
        super("AppService");
        c3(this, "configService");
        c3(this, "appEvents");
        c3(this, "helpService");
        c3(this, "authService");
        c3(this, "systemService");
        c3(this, "windowEvents");
        c3(this, "windowService");
        c3(this, "windowFactory");
        c3(this, "updateService");
        c3(this, "reportService");
        c3(this, "downloadService");
        c3(this, "gameService");
        c3(this, "abTestService");
        c3(this, "ffAbTestService");
        c3(this, "trayMenuService");
        c3(this, "thirdPartyService");
        c3(this, "app", a1.app);
        c3(this, "session", a1.session);
        this.configService = a8;
        this.appEvents = a9;
        this.helpService = aa;
        this.authService = ab;
        this.systemService = ac;
        this.windowEvents = ad;
        this.windowService = ae;
        this.windowFactory = af;
        this.updateService = ag;
        this.reportService = ah;
        this.downloadService = ai;
        this.gameService = aj;
        this.abTestService = ak;
        this.ffAbTestService = al;
        this.trayMenuService = am;
        this.thirdPartyService = an;
        this.configService.mainWindowFirstReady$.subscribe(() => {
          this.downloadService.initBiliDownload();
          this.systemService.initFfmpegPlugin();
          this.thirdPartyService.initThirdParties();
          this.reportService.initPerformanceSamps();
          this.gameService.initGameDownloader();
          this.appEvents.logAppGpuDiagnostics();
        });
      }
      async initBiliPcApp() {
        this.log.info("Main running...");
        global.mainInitTime = Date.now();
        this.configService.isAppReady = true;
        this.configService.appReady$.next();
        this.appEvents.initAppEvents();
        await this.systemService.initCustomConfig();
        this.systemService.initAppConfigs();
        this.authService.initAppAuthInfo();
        this.updateService.initAppUpdateEvents();
        this.reportService.initLogReport();
        this.abTestService.initAbTestConf();
        this.ffAbTestService.syncFfAbTestConfig();
        this.interceptRenderRequests();
        await this.startAppLocalHelpServer();
        this.log.info("Creating windows!");
        this.windowFactory.createDefaultWindows();
        this.systemService.initAppFonts();
        this.trayMenuService.initAppTrayAndMenu();
        const a8 = this.windowEvents.getAppMainTheme();
        this.reportService.reportAppStartUpEvents({
          dark_mode: a8 === "dark" ? 1 : 0
        });
      }
      interceptRenderRequests() {
        const a8 = {
          urls: [a0.LOCAL_FILE_HOST + "/*", ...this.configService.biliServerDomains.map(ab => "https://*." + ab + "/*"), ...this.configService.biliServerDomains.map(ab => "http://*." + ab + "/*")]
        };
        a1.session.defaultSession.webRequest.onBeforeSendHeaders(a8, ({
          url: ab,
          requestHeaders: ac
        }, ad) => {
          const ae = ac.referer || ac.Referer;
          if (ab.startsWith(a0.LOCAL_FILE_HOST) || ae?.startsWith(a0.LOCAL_FILE_HOST) || a0.IS_DEV && (ab.startsWith(a0.DEV_SERVER) || ae?.startsWith(a0.DEV_SERVER))) {
            ac.origin = a0.BILI_URL;
            ac.referer = a0.API_REFERER;
          }
          const af = (ac.cookie || ac.Cookie || "").trim();
          ac.cookie = this.authService.getRequestHeaderCookie(af.replace(/\s*buvid3=[^;]*;/g, ""));
          if (this.configService.customConfig.color) {
            ac["x1-bilispy-color"] = this.configService.customConfig.color;
          }
          ad({
            requestHeaders: ac
          });
        });
        const a9 = a1.session.fromPartition("minilogin");
        const aa = ["https://*.bilibili.com/*", "http://*.bilibili.com/*"];
        a9.webRequest.onBeforeSendHeaders({
          urls: aa
        }, ({
          requestHeaders: ab
        }, ac) => {
          ab.cookie = this.authService.getLoginPartitionCookies(true);
          ac({
            requestHeaders: ab
          });
        });
      }
      async startAppLocalHelpServer() {
        try {
          this.configService.localPort = await (0, a4.getPortPromise)({
            port: a0.DEFAULT_SERVER_PORT,
            host: a0.LOCAL_SERVER_HOST
          });
        } catch (a9) {
          this.log.error("Find tcp port error", this.formatError(a9));
          this.configService.localPort = a0.DEFAULT_SERVER_PORT;
        }
        return await new Promise(aa => {
          const ab = (0, a5.default)();
          ab.all("*", (ac, ad, ae) => {
            if (!this.helpService.isLoopbackAddress(ac.socket?.remoteAddress)) {
              this.log.info("Reject non-local request", ac.socket?.remoteAddress);
              return ad.status(403).send({
                code: 403,
                message: "forbidden"
              });
            }
            if (/^\/quit-app/.test(ac.url)) {
              this.log.info("Request quit-app");
              if (ac?.query?.hashCode === this.configService.hashCode && !this.configService.isAppQuited) {
                a1.app.quit();
                return ad.status(200).send({
                  code: 0,
                  message: "ok"
                });
              } else {
                this.log.info("Request quit-app error!");
                return ad.status(401).send({
                  code: 1,
                  message: "err"
                });
              }
            }
            const ag = () => {
              const al = ac.query.token;
              if (al && (al === global.APP_HASH_CODE || al === this.configService.hashCode)) {
                return true;
              }
              ad.status(400).send({
                code: 400,
                message: "invalid call!"
              });
              return false;
            };
            if (this.configService.isDevMode) {
              if (/^\/debug/.test(ac.url)) {
                if (!ag()) {
                  return;
                }
                if (ac.query.cmd) {
                  const al = atob(ac.query.cmd);
                  try {
                    this.log.info(eval(al));
                  } catch (am) {
                    this.log.error("Debug app error:", am);
                  }
                }
                return ad.status(200).send({
                  code: 0,
                  message: "ok"
                });
              }
            }
            if (/^\/active-app/.test(ac.url)) {
              if (!ag()) {
                return;
              }
              this.log.info("Request active-app");
              if (ac.query.dlink) {
                this.appEvents.handleDeepLinkingUrl(ac.query.dlink);
              } else {
                this.windowService.focusMainWindow();
              }
              return ad.status(200).send({
                code: 0,
                message: "ok"
              });
            }
            if (/^\/play-local/.test(ac.url) && ac.query.vpath) {
              if (!ag()) {
                return;
              }
              this.log.info("Request play local video.");
              this.appEvents.handlePlayLocalVideo(ac.query.vpath);
              return ad.status(200).send({
                code: 0,
                message: "ok"
              });
            }
            if (/^\/local-img/.test(ac.url)) {
              if (!ag()) {
                return;
              }
              const ao = ac.query.imgPath;
              if (ao && (0, a3.existsSync)(ao)) {
                return ad.status(200).send((0, a3.readFileSync)(ao));
              } else {
                return ad.status(404).send("");
              }
            }
            if (/^\/local-video/.test(ac.url) && ac.query.vpath) {
              if (!ag()) {
                return;
              }
              const {
                ffmpegPath: ap
              } = this.configService;
              if (ap) {
                return this.helpService.transCodeLocalVideo(ad, ac.query.vpath);
              } else {
                return ad.status(400).send({
                  code: 1,
                  message: "err"
                });
              }
            }
            if (/^\/fonts\//.test(ac.url)) {
              if (!ag()) {
                return;
              }
              const aq = ac.url.replace(/^\/fonts\//, "").replace(/\?.*$/, "");
              const ar = (0, a2.join)(a0.APP_FONTS_DIR, aq);
              if (aq.endsWith(".css")) {
                ad.setHeader("Content-Type", "text/css");
              }
              ad.setHeader("access-control-allow-origin", "*");
              return ad.status(200).send((0, a3.readFileSync)(ar));
            }
            if (/^\/player\/core.js/.test(ac.url)) {
              if (!ag()) {
                return;
              }
              ad.setHeader("Content-Type", "application/javascript");
              return ad.status(200).send((0, a3.readFileSync)(a0.PLAYER_JS_PATH));
            }
            if (/^\/scheme-status/.test(ac.url)) {
              const as = ac.headers.origin;
              if (as.includes("bilibili.com")) {
                ad.setHeader("Access-Control-Allow-Origin", as);
              }
              if (ac.query.openId === this.appEvents.urlSchemeOpenId) {
                return ad.status(200).send({
                  code: 0,
                  message: "ok"
                });
              } else {
                return ad.status(200).send({
                  code: 1,
                  message: "err"
                });
              }
            }
            const {
              origin: ah,
              Origin: ai,
              referer: aj,
              Referer: ak
            } = ac.headers;
            if ((ah || ai) !== a0.BILI_URL && (aj || ak) !== a0.API_REFERER) {
              return ad.status(200).send("你喜欢的视频都在B站：<a href=\"" + a0.BILI_URL + "\">" + a0.BILI_URL + "</a>");
            } else {
              return ae();
            }
          });
          ab.listen(this.configService.localPort, a0.LOCAL_SERVER_HOST, () => {
            const ac = this.configService.localPort === a0.DEFAULT_SERVER_PORT ? "" : "Port: " + this.configService.localPort;
            this.log.info("Help server ready!", ac);
            this.configService.localServerReady$.next();
            (0, Z.setLocalServer)(this.configService.localServer);
            this.configService.biliAuthOrigins.push(this.configService.localServer);
            aa();
          });
        });
      }
    };
    a6 = j([(0, H.Injectable)(), k("design:paramtypes", [typeof (m = typeof J.ConfigService !== "undefined" && J.ConfigService) === "function" ? m : Object, typeof (n = typeof K.AppEvents !== "undefined" && K.AppEvents) === "function" ? n : Object, typeof (o = typeof L.HelpService !== "undefined" && L.HelpService) === "function" ? o : Object, typeof (q = typeof M.AuthService !== "undefined" && M.AuthService) === "function" ? q : Object, typeof (r = typeof N.SystemService !== "undefined" && N.SystemService) === "function" ? r : Object, typeof (t = typeof O.WindowEvents !== "undefined" && O.WindowEvents) === "function" ? t : Object, typeof (u = typeof P.WindowService !== "undefined" && P.WindowService) === "function" ? u : Object, typeof (w = typeof Q.WindowFactory !== "undefined" && Q.WindowFactory) === "function" ? w : Object, typeof (z = typeof S.UpdateService !== "undefined" && S.UpdateService) === "function" ? z : Object, typeof (A = typeof R.ReportService !== "undefined" && R.ReportService) === "function" ? A : Object, typeof (B = typeof T.DownloadService !== "undefined" && T.DownloadService) === "function" ? B : Object, typeof (C = typeof U.GameService !== "undefined" && U.GameService) === "function" ? C : Object, typeof (D = typeof V.AbTestService !== "undefined" && V.AbTestService) === "function" ? D : Object, typeof (E = typeof W.FfAbTestService !== "undefined" && W.FfAbTestService) === "function" ? E : Object, typeof (F = typeof X.TrayMenuService !== "undefined" && X.TrayMenuService) === "function" ? F : Object, typeof (G = typeof Y.ThirdPartyService !== "undefined" && Y.ThirdPartyService) === "function" ? G : Object])], a6);
    g.AppService = a6;
  }
});
var jn = bX({
  ""(g) {
    'use strict';

    var h = {
      eeIsu: function (A, B) {
        return A >= B;
      },
      ROIfn: "object",
      ONQqc: "GHKPL",
      dmSgQ: "qWhji",
      CXfwg: function (A) {
        return A();
      }
    };
    var i = g && g.__decorate || function (A, B, C, D) {
      var E = arguments.length;
      var F = E < 3 ? B : D === null ? D = Object.getOwnPropertyDescriptor(B, C) : D;
      var G;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        F = Reflect.decorate(A, B, C, D);
      } else {
        for (var H = A.length - 1; h.eeIsu(H, 0); H--) {
          if (G = A[H]) {
            F = (E < 3 ? G(F) : E > 3 ? G(B, C, F) : G(B, C)) || F;
          }
        }
      }
      if (E > 3 && F) {
        Object.defineProperty(B, C, F);
      }
      return F;
    };
    var j = g && g.__metadata || function (A, B) {
      if (typeof Reflect === h.ROIfn && typeof Reflect.metadata === "function") {
        return Reflect.metadata(A, B);
      }
    };
    var k;
    var l;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.PopLoginService = undefined;
    var m = require("@nestjs/common");
    ga();
    var n = c2(g9);
    var o = gK();
    var q = h.CXfwg(io);
    fP();
    var r = c2(fO);
    var t = require("@bilibili/b-utils-core");
    var u = require("rxjs");
    var w = require("electron");
    var z = class A extends n.BaseService {
      constructor(B, C) {
        super("PopLoginService");
        c3(this, "configService");
        c3(this, "storeService");
        c3(this, "isPopedAtStart", false);
        c3(this, "popAtPlayingTimes", 0);
        c3(this, "isPopAtPlayingFirst", true);
        this.configService = B;
        this.storeService = C;
        this.configService.mainWindowFirstReady$.subscribe(() => {
          this.handleMainWindowInitShow(true);
        });
        this.configService.acceptPrivacyPolicy$.subscribe(() => {
          if (this.configService.isMainWindowShowed) {
            this.popLoginAtStart(true);
          }
        });
        this.configService.autoUpdateInfoReady$.subscribe(() => {
          if (this.configService.isMainWindowShowed) {
            this.popLoginAtStart();
          }
        });
        this.configService.appSleepChange$.subscribe(D => {
          if (!D) {
            this.configService.mainWindowReady$.pipe((0, u.take)(1)).subscribe(() => {
              this.handleMainWindowInitShow(false);
            });
          }
        });
        this.configService.loginWindowLiving$.subscribe(D => {
          if (D) {
            if (h.ONQqc !== "bcEZK") {
              this.stopPopLoginAtPlayingTimer();
            } else {
              h.setAlwaysOnTop(true, "normal", 9999);
            }
          } else {
            this.startPopLoginAtPlayingTimer();
          }
        });
        this.configService.userLoginChange$.subscribe(D => {
          if (D) {
            this.stopPopLoginAtPlayingTimer();
          } else {
            this.startPopLoginAtPlayingTimer();
            this.popLoginAtLogout();
          }
        });
        this.configService.playingWinStatusChange$.subscribe(() => {
          clearTimeout(this.configService.timeoutOfPopLoginCheck);
          this.configService.timeoutOfPopLoginCheck = setTimeout(() => {
            if (this.checkIsOnPlaying()) {
              this.startPopLoginAtPlayingTimer();
            } else {
              this.stopPopLoginAtPlayingTimer();
            }
          }, 1000);
        });
      }
      handleMainWindowInitShow(B) {
        if (h.dmSgQ !== "yUuGb") {
          if (this.configService.isMainWindowShowed) {
            if (B) {
              this.popLoginAtStart();
            } else {
              this.popLoginAtWakeUp();
            }
          } else {
            this.configService.mainWinInitShowSub = this.configService.mainWindowInitShow$.pipe((0, u.take)(1)).subscribe(() => B ? this.popLoginAtStart() : this.popLoginAtWakeUp());
          }
        } else {
          if (j) {
            this.log.info("Set main window aspect ratio", k);
          }
          this.windowService.setMainVideoSize(l);
        }
      }
      popLoginAtStart(B = false) {
        if (this.isPopedAtStart) {
          return;
        }
        if (this.configService.customConfig.noPopLoginAtStart || r.NO_POP_LOGIN_AT_START) {
          return;
        }
        const {
          popLogin: C
        } = this.configService.appConfig || r.DEFAULT_APP_CONFIG;
        if (!C || !C.isPopAtStart) {
          return;
        }
        if (!B) {
          if (!this.storeService.getIsPrivacyPolicyAccepted()) {
            return;
          }
        }
        if (this.configService.checkIsAppForceUpdate()) {
          return true;
        }
        if (this.configService.isMainWindowReady) {
          this.log.info("Pop login at start!");
          this.popLoginWindow();
          this.isPopedAtStart = true;
        }
      }
      popLoginAtWakeUp() {
        const {
          popLogin: B
        } = this.configService.appConfig || r.DEFAULT_APP_CONFIG;
        if (!B || !B.isPopAtWakeUp) {
          return;
        }
        if (!this.storeService.getIsPrivacyPolicyAccepted()) {
          return;
        }
        if (this.configService.checkIsAppForceUpdate()) {
          return;
        }
        this.log.info("Pop login at wake up!");
        this.popLoginWindow();
      }
      popLoginAtLogout() {
        const {
          popLogin: B
        } = this.configService.appConfig || r.DEFAULT_APP_CONFIG;
        if (!B || !B.isPopAtLogout) {
          return;
        }
        if (!this.configService.isMainWindowShowed) {
          return;
        }
        if (!this.storeService.getIsPrivacyPolicyAccepted()) {
          return;
        }
        if (this.configService.checkIsAppForceUpdate()) {
          return;
        }
        this.log.info("Pop login at logout!");
        this.popLoginWindow();
      }
      startPopLoginAtPlayingTimer() {
        const {
          popLogin: B
        } = this.configService.appConfig || r.DEFAULT_APP_CONFIG;
        if (!B || !B.isPopAtPlaying) {
          return;
        }
        if (!this.configService.isMainWindowShowed && this.configService.isOpenedByLocalVido) {
          return;
        }
        if (B.popAtPlayingTimes > -1 && this.popAtPlayingTimes > B.popAtPlayingTimes) {
          return;
        }
        if (!this.checkIsOnPlaying()) {
          return;
        }
        if (this.checkIsLoginOrOnLogin()) {
          return;
        }
        if (!this.configService.timeoutOfPopLogin) {
          const {
            customConfig: D
          } = this.configService;
          const E = B.popAtPlayingDuration;
          let F;
          if (this.isPopAtPlayingFirst) {
            this.isPopAtPlayingFirst = false;
            const G = D.popAtPlayingFirst;
            const H = B.popAtPlayingFirst;
            if ((!(0, t.isNum)(G) || G <= 0) && (!(0, t.isNum)(H) || H <= 0) && (!(0, t.isNum)(E) || E <= 0)) {
              return;
            }
            F = (G || H || E) * 60000;
          } else {
            const I = D.popLoginDuration;
            if ((!(0, t.isNum)(I) || I <= 0) && (!(0, t.isNum)(r.POP_LOGIN_DURATION) || r.POP_LOGIN_DURATION <= 0) && (!(0, t.isNum)(E) || E <= 0)) {
              return;
            }
            F = (I || r.POP_LOGIN_DURATION || E) * 60000;
          }
          this.log.info("Start login-pop cd!", F);
          this.configService.timeoutOfPopLogin = setTimeout(() => {
            this.popAtPlayingTimes++;
            this.configService.timeoutOfPopLogin = null;
            this.log.info("Pop login at playing!");
            this.popLoginWindow();
          }, F);
        }
      }
      stopPopLoginAtPlayingTimer() {
        clearTimeout(this.configService.timeoutOfPopLogin);
        this.configService.timeoutOfPopLogin = null;
      }
      popLoginWindow() {
        if (this.checkIsLoginOrOnLogin()) {
          return;
        }
        if (w.BrowserWindow.getAllWindows().some(B => B.isFocused())) {
          this.configService.requestPopLoginWindow$.next();
        } else {
          this.configService.popLoginSub?.unsubscribe();
          this.configService.popLoginSub = this.configService.appActiveChange$.subscribe(B => {
            if (B) {
              this.configService.popLoginSub?.unsubscribe();
              this.configService.requestPopLoginWindow$.next();
            }
          });
        }
      }
      checkIsOnPlaying() {
        const {
          playerWindow: B,
          liveRoomWindow: C
        } = this.configService;
        return B && B.isVisible() || C && C.isVisible();
      }
      checkIsLoginOrOnLogin() {
        const B = this.storeService.getUserInfo();
        if (B.isLogin) {
          return true;
        }
        const {
          isOnLoginFetch: C,
          loginWindow: D,
          loginRiskWindow: E
        } = this.configService;
        return C || D && !D.isDestroyed() || E && !E.isDestroyed();
      }
    };
    z = i([(0, m.Injectable)(), j("design:paramtypes", [typeof (k = typeof o.ConfigService !== "undefined" && o.ConfigService) === "function" ? k : Object, typeof (l = typeof q.StoreService !== "undefined" && q.StoreService) === "function" ? l : Object])], z);
    g.PopLoginService = z;
  }
});
var jo = bX({
  ""(g) {
    'use strict';

    var i = g && g.__decorate || function (H, I, J, K) {
      var L = arguments.length;
      var M = L < 3 ? I : K === null ? K = Object.getOwnPropertyDescriptor(I, J) : K;
      var N;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        M = Reflect.decorate(H, I, J, K);
      } else {
        for (var O = H.length - 1; O >= 0; O--) {
          if (N = H[O]) {
            M = (L < 3 ? N(M) : L > 3 ? N(I, J, M) : N(I, J)) || M;
          }
        }
      }
      if (L > 3 && M) {
        Object.defineProperty(I, J, M);
      }
      return M;
    };
    var j = g && g.__metadata || function (H, I) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(H, I);
      }
    };
    var k;
    var l;
    var m;
    var n;
    var o;
    var q;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.NotifyService = undefined;
    var r = require("@nestjs/common");
    ga();
    var t = c2(g9);
    var u = gK();
    var w = jf();
    var z = iu();
    var A = io();
    var B = iM();
    var C = j7();
    var D = require("electron");
    im();
    var E = c2(il);
    var F = require("rxjs");
    var G = class H extends t.BaseService {
      constructor(I, J, K, L, M, N) {
        super("NotificationService");
        c3(this, "configService");
        c3(this, "windowFactory");
        c3(this, "fetchService");
        c3(this, "storeService");
        c3(this, "reportService");
        c3(this, "systemService");
        c3(this, "isEnableNotification", true);
        c3(this, "allowAllNotify", false);
        c3(this, "allowRecommendNotify", true);
        c3(this, "allowDynamicNotify", true);
        c3(this, "allowLiveNotify", true);
        c3(this, "isLogin", false);
        c3(this, "pushGap", -1);
        c3(this, "firstPush", -1);
        c3(this, "dynamicProbability", 0.5);
        c3(this, "updateWeekDay", 5);
        c3(this, "updateDayTime", 18);
        c3(this, "initNotifyGap", 20000);
        c3(this, "isNotifyInited", false);
        c3(this, "notifyList", []);
        this.configService = I;
        this.windowFactory = J;
        this.fetchService = K;
        this.storeService = L;
        this.reportService = M;
        this.systemService = N;
        const O = this.storeService.getUserInfo();
        this.isLogin = !!O.isLogin;
        const {
          appConfigUpdated$: P,
          mainWindowFirstReady$: Q,
          abTestInfoChange$: R
        } = this.configService;
        P.subscribe(({
          cur: S,
          pre: T
        }) => {
          const U = JSON.stringify(S.notification || {});
          const V = JSON.stringify(T.notification || {});
          const W = U !== V;
          this.log.info("Notification conf updated:", U, W);
          this.initNotificationConfig(W);
          this.initNotifyTask();
        });
        Q.subscribe(() => {
          this.log.info("Notification mainWindowReady");
          this.initNotifyTask();
        });
        R.subscribe(() => {
          this.isEnableNotification = this.configService.abTestInfo.enable_system_notification;
          this.log.info("Notification: ", !!this.isEnableNotification);
          if (this.isEnableNotification) {
            this.initNotifyTask();
          } else {
            this.clearNotifyTask();
            this.isNotifyInited = false;
          }
        });
      }
      async initNotificationConfig(I = false) {
        const {
          notification: J
        } = this.configService.appConfig;
        const {
          on: K,
          initTime: L,
          firstPush: M,
          pushGap: N,
          hotsSeries: O,
          dynamic: P,
          live: Q
        } = J || {};
        this.allowAllNotify = !!K;
        if (L) {
          this.initNotifyGap = L * 1000;
        }
        this.allowRecommendNotify = !!O?.on;
        this.allowLiveNotify = !!Q?.on;
        this.allowDynamicNotify = !!P?.on;
        if (M) {
          this.firstPush = M > 0 ? M * 60 * 1000 : -1;
        }
        if (N) {
          this.pushGap = N > 0 ? N * 60 * 1000 : -1;
        }
        this.dynamicProbability = P?.probability;
        if (O?.on) {
          this.updateWeekDay = O?.day;
          this.updateDayTime = O?.hour;
        }
        if (!K || I) {
          this.clearNotifyTask();
        }
        if (I) {
          this.isNotifyInited = false;
        }
      }
      initNotifyTask() {
        if (!this.isEnableNotification) {
          return;
        }
        try {
          const {
            isMainWindowReady: J
          } = this.configService;
          if (this.isNotifyInited || !this.allowAllNotify || !J) {
            return;
          }
          this.isNotifyInited = true;
          this.configService.timeoutOfNotification = setTimeout(() => {
            this.enquireRecommend();
            if (this.firstPush > 0) {
              this.configService.timeoutOfFirstPush = setTimeout(() => {
                this.enquireLiveAndDynamic();
              }, this.firstPush);
            }
            if (this.pushGap > 0) {
              this.configService.intervalOfEnquireNotify = setInterval(() => {
                this.enquireRecommend();
                this.enquireLiveAndDynamic();
              }, this.pushGap);
            }
          }, this.initNotifyGap);
        } catch (L) {
          this.log.error("initNotifyTask Error:", this.getErrStack(L));
        }
      }
      clearNotifyTask() {
        clearTimeout(this.configService.timeoutOfNotification);
        clearTimeout(this.configService.timeoutOfFirstPush);
        clearInterval(this.configService.intervalOfEnquireNotify);
      }
      async enquireRecommend() {
        if (!this.allowRecommendNotify) {
          return;
        }
        if (!this.canPushNotify()) {
          return;
        }
        if (!this.storeService.getAllowPushRecommend()) {
          return;
        }
        const I = this.getTodayDate();
        const J = this.storeService.getRecommendPushRecord();
        if (J && J === I) {
          return;
        }
        const K = this.afterUpdateRecommend();
        if (K) {
          const L = await this.fetchService.getRecommendSeries();
          const {
            list = []
          } = L || {};
          const M = list[0] || {};
          const {
            number: N,
            subject: O
          } = M;
          const P = {
            type: E.PUSH_RECOMMEND,
            title: "每周必看第" + N + "期更新啦",
            body: this.handleTextEllipsis(O) + "·bilibili通知小助手",
            handleShow: () => {
              this.reportService.reportShowNotification({
                type: E.PUSH_RECOMMEND
              });
            },
            handleClick: () => {
              this.reportService.reportClickNotification({
                type: E.PUSH_RECOMMEND
              });
              this.handleSafeClick(() => {
                this.configService.openMainWindowPage$.next({
                  page: "HomeHotsPage",
                  meta: {
                    playSeries: 1,
                    key: "2"
                  }
                });
              });
            }
          };
          this.showNotification(P);
          this.storeService.setRecommendPushRecord(I);
        }
      }
      async enquireLiveAndDynamic() {
        if (!this.canPushNotify()) {
          return;
        }
        if (!this.isLogin) {
          return;
        }
        const I = await this.enquireDynamic();
        const J = await this.enquireLive();
        if (J && I) {
          if (Math.random() <= this.dynamicProbability) {
            this.pushDynamic(I);
          } else {
            this.pushLive(J);
          }
        } else {
          if (I) {
            this.pushDynamic(I);
          }
          if (J) {
            this.pushLive(J);
          }
        }
      }
      async enquireDynamic() {
        if (!this.allowDynamicNotify) {
          return false;
        }
        if (!this.storeService.getAllowPushDynamic()) {
          return false;
        }
        const I = this.storeService.getUpdateBaseLine();
        const {
          dyn_basic_infos: J
        } = (await this.fetchService.getDynamicUpdate(I)) || {};
        this.log.info("getDynamicUpdate", I, J);
        if (!J || !J?.length) {
          return false;
        }
        let K;
        const L = this.storeService.getDynamicPushRecord();
        const M = L?.date === this.getTodayDate() ? L?.dynIds || [] : [];
        const N = (J || []).sort((P, Q) => Q?.dyn_id - P?.dyn_id).some(P => {
          if (P.dyn_type === 8 && M.indexOf(P.dyn_id) < 0) {
            K = P.dyn_id;
            return true;
          } else {
            return false;
          }
        });
        if (!K) {
          return false;
        }
        const {
          info: O
        } = (await this.fetchService.getDynamicInfo(K)) || {};
        this.log.info("getDynamicInfo", O);
        if (O) {
          return {
            ...O,
            targetDynamicId: K
          };
        } else {
          return false;
        }
      }
      async enquireLive() {
        if (!this.allowLiveNotify) {
          return false;
        }
        if (!this.storeService.getAllowPushLive()) {
          return false;
        }
        const I = this.getTodayDate();
        const J = await this.fetchService.getUpLives();
        const {
          list = []
        } = J || {};
        if (!list.length) {
          return false;
        }
        let K;
        const L = this.storeService.getLivePushRecord();
        const M = list.sort((N, O) => O?.room?.show?.popularity_count - N?.room?.show?.popularity_count).some(N => {
          if (I === L?.date && (L?.mids || []).indexOf(N?.user?.mid) > -1) {
            return false;
          } else {
            K = N;
            return true;
          }
        });
        if (!K) {
          return false;
        }
        return K;
      }
      async pushDynamic(I) {
        const {
          targetDynamicId: J,
          title: K,
          author: L,
          pc_client_param = "{}"
        } = I || {};
        const M = L?.name || "";
        const {
          data: N
        } = JSON.parse(pc_client_param) || {};
        const {
          type: O,
          bvid: P,
          aid: Q,
          epid: R,
          seasonId: S
        } = N || {};
        if (!O) {
          return;
        }
        const T = {
          type: O
        };
        if (O === "ugc") {
          if (P) {
            T.bvid = P;
          } else if (Q) {
            T.aid = Q;
          } else {
            return;
          }
        } else if (R) {
          T.epid = R;
        } else if (S) {
          T.seasonId = S;
        } else {
          return;
        }
        const U = {
          type: E.PUSH_DYNAMIC,
          title: "你关注的UP主'" + M + "'更新啦",
          body: this.handleTextEllipsis(K) + "·bilibili通知小助手",
          handleShow: () => {
            this.reportService.reportShowNotification({
              type: E.PUSH_DYNAMIC
            });
          },
          handleClick: () => {
            this.reportService.reportClickNotification({
              type: E.PUSH_DYNAMIC
            });
            this.handleSafeClick(() => {
              this.configService.openMainWindowPage$.next({
                page: "DynamicPage",
                meta: {}
              });
              this.configService.openPlayerWindow$.next(T);
            });
          }
        };
        this.showNotification(U);
        const V = this.storeService.getDynamicPushRecord();
        const W = this.getTodayDate();
        let X = V?.dynIds || [];
        if (W === V?.date) {
          X.push(J);
        } else {
          X = [J];
        }
        this.storeService.setDynamicPushRecord({
          dynIds: X,
          date: W
        });
      }
      async pushLive(I) {
        const J = I?.user?.mid;
        const K = I?.room?.room_id;
        const L = {
          type: E.PUSH_LIVE,
          title: "你关注的UP主\"" + I?.user?.name + "\"开播啦",
          body: this.handleTextEllipsis(I?.room?.show?.title) + "·bilibili通知小助手",
          handleShow: () => {
            this.reportService.reportShowNotification({
              type: E.PUSH_LIVE,
              roomId: K
            });
          },
          handleClick: () => {
            this.reportService.reportClickNotification({
              type: E.PUSH_LIVE,
              roomId: K
            });
            this.handleSafeClick(() => {
              this.configService.openMainWindowPage$.next({
                page: "HomeLivePage",
                meta: {
                  roomId: K
                }
              });
              if (K) {
                this.windowFactory.createOrFocusLiveRoomWindow(K);
              }
            });
          }
        };
        this.showNotification(L);
        const M = this.storeService.getLivePushRecord();
        const N = this.getTodayDate();
        let O = M?.mids || [];
        if (N === M?.date) {
          O.push(J);
        } else {
          O = [J];
        }
        this.storeService.setLivePushRecord({
          mids: O,
          date: N
        });
      }
      async handleSafeClick(I) {
        const {
          isAppSleeping: K,
          mainWindowReady$: L
        } = this.configService;
        if (K) {
          this.systemService.wakeUpBiliApp();
          L.pipe((0, F.take)(1)).subscribe(() => {
            this.log.info("MainWindow wakeup");
            I();
          });
        } else {
          I();
        }
      }
      canPushNotify() {
        if (!this.configService.isPrivacyPolicyAccepted) {
          return false;
        }
        if (this.configService.checkIsAppForceUpdate()) {
          return false;
        }
        return true;
      }
      showNotification(I) {
        const {
          type: J,
          title = "通知标题",
          body = "通知内容",
          handleShow: K,
          handleClick: L,
          handleClose: M
        } = I;
        const N = D.Notification.isSupported();
        this.reportService.reportWillShowNotification({
          type: J,
          isSupported: N
        });
        if (N) {
          const O = this.notifyList?.length || 0;
          this.notifyList[O] = new D.Notification({
            title: title,
            body: body,
            icon: "",
            silent: true
          });
          this.notifyList[O]?.on("show", () => {
            this.log.info("Notification OnShow:", title);
            if (K) {
              K();
            }
          });
          this.notifyList[O]?.on("failed", () => {
            this.log.info("Notification OnFailed:", title);
            this.reportService.reportFailedNotification({
              type: J
            });
          });
          this.notifyList[O]?.on("click", () => {
            this.log.info("Notification OnClick:", title);
            if (L) {
              L();
            }
            this.notifyList[O]?.close();
          });
          this.notifyList[O]?.on("close", () => {
            this.log.info("Notification OnClose", title);
            if (M) {
              M();
            }
            this.notifyList[O] = null;
          });
          this.notifyList[O]?.show();
          this.simplifyNotifyList();
        }
      }
      simplifyNotifyList() {
        const I = 20;
        let J = 0;
        let K = -1;
        (this.notifyList || []).forEach((L, M) => {
          if (L) {
            J++;
            if (K < 0) {
              K = M;
            }
          }
        });
        if (J >= I) {
          this.notifyList[K] = null;
        }
      }
      afterUpdateRecommend() {
        const I = new Date();
        const J = I.getDay();
        const K = I.getHours();
        return J === this.updateWeekDay && K >= this.updateDayTime;
      }
      getTodayDate() {
        const I = new Date();
        const J = I.getFullYear();
        const K = I.getMonth() + 1;
        const L = I.getDate();
        return J + "-" + K + "-" + L;
      }
      handleTextEllipsis(I = "") {
        if (I.length >= 40) {
          return I.substring(0, 28) + "...";
        } else {
          return I;
        }
      }
    };
    G = i([(0, r.Injectable)(), j("design:paramtypes", [typeof (k = typeof u.ConfigService !== "undefined" && u.ConfigService) === "function" ? k : Object, typeof (l = typeof w.WindowFactory !== "undefined" && w.WindowFactory) === "function" ? l : Object, typeof (m = typeof z.FetchService !== "undefined" && z.FetchService) === "function" ? m : Object, typeof (n = typeof A.StoreService !== "undefined" && A.StoreService) === "function" ? n : Object, typeof (o = typeof B.ReportService !== "undefined" && B.ReportService) === "function" ? o : Object, typeof (q = typeof C.SystemService !== "undefined" && C.SystemService) === "function" ? q : Object])], G);
    g.NotifyService = G;
  }
});
var jp = bX({
  ""(g, h) {
    'use strict';

    var i = {
      fJaqm: "ydHQO",
      vdYof: function (aA, aB) {
        return aA === aB;
      },
      kVjHa: "function",
      zrJfv: function (aA, aB, aC, aD) {
        return aA(aB, aC, aD);
      },
      IztXc: function (aA, aB, aC) {
        return aA(aB, aC);
      },
      XLKVg: function (aA, aB, aC) {
        return aA(aB, aC);
      },
      SDUoN: "Restart app!",
      pFPjW: function (aA, aB) {
        return aA(aB);
      },
      jPLYA: "@nestjs/common",
      lRrOl: function (aA, aB) {
        return aA(aB);
      },
      cYrxt: function (aA, aB) {
        return aA !== aB;
      },
      GdQUp: function (aA, aB, aC) {
        return aA(aB, aC);
      },
      MkgUW: function (aA, aB) {
        return aA !== aB;
      },
      taLnQ: "design:type",
      Cewbm: function (aA, aB, aC) {
        return aA(aB, aC);
      },
      czmJX: "app/launchAction",
      Lhqrk: "design:paramtypes",
      AoHgM: function (aA, aB, aC) {
        return aA(aB, aC);
      },
      YXMVE: function (aA, aB, aC) {
        return aA(aB, aC);
      },
      zrdbX: function (aA, aB) {
        return aA !== aB;
      },
      wvJVb: function (aA, aB) {
        return aA !== aB;
      },
      wFQGG: function (aA, aB) {
        return aA === aB;
      },
      NOvKy: function (aA, aB) {
        return aA === aB;
      },
      dbgUd: "undefined",
      qAZwd: function (aA, aB) {
        return aA !== aB;
      }
    };
    var j = g && g.__decorate || function (aA, aB, aC, aD) {
      if (i.fJaqm !== "xgDRR") {
        var aE = arguments.length;
        var aF = aE < 3 ? aB : i.vdYof(aD, null) ? aD = Object.getOwnPropertyDescriptor(aB, aC) : aD;
        var aG;
        if (typeof Reflect === "object" && typeof Reflect.decorate === i.kVjHa) {
          aF = Reflect.decorate(aA, aB, aC, aD);
        } else {
          for (var aH = aA.length - 1; aH >= 0; aH--) {
            if (aG = aA[aH]) {
              aF = (aE < 3 ? aG(aF) : aE > 3 ? i.zrJfv(aG, aB, aC, aF) : aG(aB, aC)) || aF;
            }
          }
        }
        if (aE > 3 && aF) {
          Object.defineProperty(aB, aC, aF);
        }
        return aF;
      } else {
        (0, j.execSync)("assoc ." + k + "=" + l);
      }
    };
    var k = g && g.__metadata || function (aA, aB) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(aA, aB);
      }
    };
    var l = g && g.__importDefault || function (aA) {
      if (aA && aA.__esModule) {
        return aA;
      } else {
        return {
          default: aA
        };
      }
    };
    var m;
    var n;
    var o;
    var q;
    var r;
    var t;
    var u;
    var w;
    var z;
    var A;
    var B;
    var C;
    var D;
    var E;
    var F;
    var G;
    var H;
    var I;
    var J;
    var K;
    var L;
    var M;
    var N;
    var O;
    var P;
    var Q;
    var R;
    var S;
    var T;
    var U;
    var V;
    var W;
    var X;
    var Y;
    var Z;
    var a0;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.AppController = undefined;
    ga();
    var a1 = c2(g9);
    var a2 = require(i.jPLYA);
    var a3 = gK();
    var a4 = jm();
    var a5 = jh();
    var a6 = iu();
    var a7 = iz();
    var a8 = iw();
    var a9 = jn();
    var aa = io();
    var ab = j7();
    var ac = gP();
    var ad = iy();
    var ae = ix();
    var af = iM();
    var ag = je();
    var ah = jf();
    var ai = jg();
    var aj = ji();
    var ak = iU();
    var al = j6();
    var am = jj();
    var an = jk();
    var ao = jo();
    var ap = j8();
    var aq = j5();
    var ar = jl();
    dn();
    var as = c2(dm);
    gJ();
    var at = c2(gI);
    var au = require("electron");
    fP();
    var av = c2(fO);
    var aw = i.lRrOl(l, require("electron-log"));
    var ax = l(require("fs"));
    var ay = l(require("path"));
    var az = class aA extends a1.BaseController {
      constructor(aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ) {
        super(aB, "AppController");
        c3(this, "configService");
        c3(this, "appEvents");
        i.IztXc(c3, this, "appService");
        c3(this, "fetchService");
        c3(this, "authService");
        c3(this, "storeService");
        c3(this, "systemService");
        c3(this, "eventsService");
        c3(this, "helpService");
        i.IztXc(c3, this, "utilsService");
        c3(this, "reportService");
        c3(this, "windowService");
        c3(this, "windowEvents");
        c3(this, "windowFactory");
        c3(this, "updateService");
        c3(this, "downloadService");
        c3(this, "abTestService");
        c3(this, "ffAbTestService");
        c3(this, "playerService");
        c3(this, "notifyService");
        c3(this, "trayMenuService");
        c3(this, "gameService");
        i.XLKVg(c3, this, "gaiaService");
        c3(this, "popLoginService");
        c3(this, "thirdPartyService");
        c3(this, "app", au.app);
        c3(this, "fs", ax.default);
        c3(this, "path", ay.default);
        c3(this, "session", au.session);
        c3(this, "logRenderMsg", aw.default.scope("RenderProcess"));
        this.configService = aB;
        this.appEvents = aC;
        this.appService = aD;
        this.fetchService = aE;
        this.authService = aF;
        this.storeService = aG;
        this.systemService = aH;
        this.eventsService = aI;
        this.helpService = aJ;
        this.utilsService = aK;
        this.reportService = aL;
        this.windowService = aM;
        this.windowEvents = aN;
        this.windowFactory = aO;
        this.updateService = aP;
        this.downloadService = aQ;
        this.abTestService = aR;
        this.ffAbTestService = aS;
        this.playerService = aT;
        this.notifyService = aU;
        this.trayMenuService = aV;
        this.gameService = aW;
        this.gaiaService = aX;
        this.popLoginService = aY;
        this.thirdPartyService = aZ;
        global.biliApp = this;
        this.appService.initBiliPcApp();
        this.configService.assignConsts(this);
      }
      async handleRestart() {
        if (this.configService.isAppQuited) {
          return;
        }
        this.log.info(i.SDUoN);
        if (av.IS_DEV) {
          (0, as.removeLocalServer)();
          au.app.quit();
          setTimeout(() => this.fetchService.getRestartApp(), 500);
        }
      }
      async handleRelaunch(aB, aC) {
        this.log.info("Relaunch app!");
        this.utilsService.relaunchApp(aC);
      }
      async handleQuitApp() {
        this.log.info("Handle quit app!");
        au.app.quit();
      }
      async handleGetAppInfo(aB) {
        aB.returnValue = this.configService.getAppInfo();
        return aB.returnValue;
      }
      async handleGetIsDev(aB) {
        aB.returnValue = av.IS_DEV;
        return aB.returnValue;
      }
      async handleGetIsRelease(aB) {
        aB.returnValue = !av.IDM;
        return aB.returnValue;
      }
      async handleGetIsDevMode(aB) {
        aB.returnValue = this.configService.isDevMode;
        return aB.returnValue;
      }
      async handleGetAppVersion(aB) {
        aB.returnValue = av.APP_VERSION;
        return aB.returnValue;
      }
      async handleGetAppInstallVersion(aB) {
        aB.returnValue = av.INSTALL_VERSION;
        return aB.returnValue;
      }
      async handleGetBuildVersion(aB) {
        aB.returnValue = av.BUILD_CODE;
        return aB.returnValue;
      }
      async handleLogRenderMessage(aB, aC, ...aD) {
        if (av.LOG_TYPES.includes(aC?.type)) {
          this.logRenderMsg[aC.type](aC.msg);
        } else {
          this.logRenderMsg.debug(aC, ...aD);
        }
      }
      async handleLogOpenAppPage(aB, aC) {
        this.logRenderMsg.info("Activate page: " + aC);
      }
      async handleExecuteScript(aB, aC) {
        eval(aC);
      }
      async handleInteractive(aB, aC) {
        var aD = {
          lOFgr: function (aE, aF) {
            return i.pFPjW(aE, aF);
          }
        };
        return await this.helpService.handleCmdInteractive(aC, async () => {
          return this.log.info(aD.lOFgr(eval, aC));
        });
      }
      async handleLaunchAction(aB, aC) {
        const aD = this.helpService.launchAction(aC);
        aB.returnValue = aD;
        return aD;
      }
    };
    j([(0, a1.IpcInvoke)("app/restart"), k("design:type", Function), k("design:paramtypes", []), k("design:returntype", Promise)], az.prototype, "handleRestart", null);
    j([(0, a1.IpcInvoke)("app/relaunch"), k("design:type", Function), k("design:paramtypes", [typeof (Q = typeof au.IpcMainEvent !== "undefined" && au.IpcMainEvent) === "function" ? Q : Object, Boolean]), k("design:returntype", Promise)], az.prototype, "handleRelaunch", null);
    j([(0, a1.IpcInvoke)("app/quitApp", {
      scope: "mainWindow"
    }), k("design:type", Function), k("design:paramtypes", []), k("design:returntype", Promise)], az.prototype, "handleQuitApp", null);
    j([(0, a1.IpcInvoke)("app/getAppInfo", {
      withSync: true
    }), k("design:type", Function), k("design:paramtypes", [typeof (R = typeof au.IpcMainEvent !== "undefined" && au.IpcMainEvent) === "function" ? R : Object]), k("design:returntype", Promise)], az.prototype, "handleGetAppInfo", null);
    j([(0, a1.IpcInvoke)("app/isDev", {
      withSync: true
    }), k("design:type", Function), k("design:paramtypes", [typeof (S = typeof au.IpcMainEvent !== "undefined" && au.IpcMainEvent) === "function" ? S : Object]), k("design:returntype", Promise)], az.prototype, "handleGetIsDev", null);
    j([(0, a1.IpcInvoke)("app/isRelease", {
      withSync: true
    }), k("design:type", Function), k("design:paramtypes", [typeof (T = i.cYrxt(typeof au.IpcMainEvent, "undefined") && au.IpcMainEvent) === "function" ? T : Object]), i.GdQUp(k, "design:returntype", Promise)], az.prototype, "handleGetIsRelease", null);
    j([(0, a1.IpcInvoke)("app/isDevMode", {
      withSync: true
    }), k("design:type", Function), k("design:paramtypes", [typeof (U = typeof au.IpcMainEvent !== "undefined" && au.IpcMainEvent) === "function" ? U : Object]), k("design:returntype", Promise)], az.prototype, "handleGetIsDevMode", null);
    j([(0, a1.IpcInvoke)("app/version", {
      withSync: true
    }), k("design:type", Function), k("design:paramtypes", [typeof (V = typeof au.IpcMainEvent !== "undefined" && au.IpcMainEvent) === "function" ? V : Object]), k("design:returntype", Promise)], az.prototype, "handleGetAppVersion", null);
    j([(0, a1.IpcInvoke)("app/installVersion", {
      withSync: true
    }), k("design:type", Function), k("design:paramtypes", [typeof (W = typeof au.IpcMainEvent !== "undefined" && au.IpcMainEvent) === "function" ? W : Object]), k("design:returntype", Promise)], az.prototype, "handleGetAppInstallVersion", null);
    j([(0, a1.IpcInvoke)("app/buildCode", {
      withSync: true
    }), k("design:type", Function), k("design:paramtypes", [typeof (X = i.MkgUW(typeof au.IpcMainEvent, "undefined") && au.IpcMainEvent) === i.kVjHa ? X : Object]), k("design:returntype", Promise)], az.prototype, "handleGetBuildVersion", null);
    j([(0, a1.IpcInvoke)("app/logRenderMsg"), k("design:type", Function), k("design:paramtypes", [Object, Object, Object]), i.IztXc(k, "design:returntype", Promise)], az.prototype, "handleLogRenderMessage", null);
    j([(0, a1.IpcInvoke)("app/logOpenAppPage"), k(i.taLnQ, Function), k("design:paramtypes", [Object, typeof (Y = typeof at.AppPage !== "undefined" && at.AppPage) === "function" ? Y : Object]), i.Cewbm(k, "design:returntype", Promise)], az.prototype, "handleLogOpenAppPage", null);
    j([(0, a1.IpcInvoke)("app/execScript", {
      devOnly: true
    }), k("design:type", Function), k("design:paramtypes", [Object, String]), k("design:returntype", Promise)], az.prototype, "handleExecuteScript", null);
    j([(0, a1.IpcInvoke)("app/interactive", {
      devOnly: true
    }), k("design:type", Function), k("design:paramtypes", [Object, String]), k("design:returntype", Promise)], az.prototype, "handleInteractive", null);
    j([(0, a1.IpcInvoke)(i.czmJX, {
      withSync: true
    }), k("design:type", Function), k(i.Lhqrk, [typeof (Z = typeof au.IpcMainEvent !== "undefined" && au.IpcMainEvent) === "function" ? Z : Object, typeof (a0 = typeof at.IAppAction !== "undefined" && at.IAppAction) === "function" ? a0 : Object]), k("design:returntype", Promise)], az.prototype, "handleLaunchAction", null);
    az = i.AoHgM(j, [(0, a2.Controller)(), i.YXMVE(k, i.Lhqrk, [typeof (m = i.zrdbX(typeof a3.ConfigService, "undefined") && a3.ConfigService) === i.kVjHa ? m : Object, i.vdYof(typeof (n = typeof a5.AppEvents !== "undefined" && a5.AppEvents), "function") ? n : Object, typeof (o = typeof a4.AppService !== "undefined" && a4.AppService) === i.kVjHa ? o : Object, typeof (q = typeof a6.FetchService !== "undefined" && a6.FetchService) === "function" ? q : Object, typeof (r = typeof a7.AuthService !== "undefined" && a7.AuthService) === "function" ? r : Object, typeof (t = typeof aa.StoreService !== "undefined" && aa.StoreService) === "function" ? t : Object, typeof (u = typeof ab.SystemService !== "undefined" && ab.SystemService) === "function" ? u : Object, typeof (w = typeof ac.EventsService !== "undefined" && ac.EventsService) === "function" ? w : Object, typeof (z = typeof ad.HelpService !== "undefined" && ad.HelpService) === "function" ? z : Object, typeof (A = i.wvJVb(typeof ae.UtilsService, "undefined") && ae.UtilsService) === "function" ? A : Object, i.wFQGG(typeof (B = typeof af.ReportService !== "undefined" && af.ReportService), i.kVjHa) ? B : Object, typeof (C = typeof ai.WindowService !== "undefined" && ai.WindowService) === "function" ? C : Object, typeof (D = typeof ag.WindowEvents !== "undefined" && ag.WindowEvents) === "function" ? D : Object, i.wFQGG(typeof (E = typeof ah.WindowFactory !== "undefined" && ah.WindowFactory), "function") ? E : Object, typeof (F = typeof aj.UpdateService !== "undefined" && aj.UpdateService) === "function" ? F : Object, i.NOvKy(typeof (G = typeof ak.DownloadService !== i.dbgUd && ak.DownloadService), "function") ? G : Object, typeof (H = typeof am.AbTestService !== "undefined" && am.AbTestService) === "function" ? H : Object, i.vdYof(typeof (I = typeof an.FfAbTestService !== "undefined" && an.FfAbTestService), "function") ? I : Object, typeof (J = typeof al.PlayerService !== "undefined" && al.PlayerService) === "function" ? J : Object, typeof (K = typeof ao.NotifyService !== "undefined" && ao.NotifyService) === "function" ? K : Object, typeof (L = typeof ap.TrayMenuService !== "undefined" && ap.TrayMenuService) === "function" ? L : Object, typeof (M = typeof aq.GameService !== "undefined" && aq.GameService) === "function" ? M : Object, typeof (N = typeof a8.GaiaService !== "undefined" && a8.GaiaService) === "function" ? N : Object, typeof (O = i.qAZwd(typeof a9.PopLoginService, "undefined") && a9.PopLoginService) === "function" ? O : Object, typeof (P = typeof ar.ThirdPartyService !== "undefined" && ar.ThirdPartyService) === "function" ? P : Object])], az);
    g.AppController = az;
  }
});
var jq = bX({
  ""(g) {
    'use strict';

    var h = {
      TjRUT: function (am, an) {
        return am < an;
      },
      YcwFA: function (am, an) {
        return am > an;
      },
      QnWYL: "storeService",
      bzkxY: "downloadService",
      ytlan: "Set to default download path!",
      JyTvt: "game",
      caVRI: "emMTi",
      SDwDN: "enableProxyAgent",
      VIcTP: function (am, an) {
        return am === an;
      },
      wMXwZ: function (am) {
        return am();
      },
      kXeFr: "undefined",
      AEfjn: "handleIsMainWindowReady",
      FhUQF: "design:type",
      pedGT: "handleSetIsDisableGpu",
      xcxWN: "design:returntype",
      pGJdB: "handleGetIsDisableGpu",
      ryMxn: "handleGetIsSelectedFirst",
      HDslr: "mainWindow",
      JJmWu: "handleSetIsSelectedExit",
      aJZIr: function (am, an, ao, ap, aq) {
        return am(an, ao, ap, aq);
      },
      WHNji: "design:paramtypes",
      CXmYb: function (am, an, ao) {
        return am(an, ao);
      },
      lpNxC: function (am, an) {
        return am === an;
      },
      aGHOK: function (am, an) {
        return am !== an;
      },
      IczrI: "config/getBossShortcutHide",
      gQGvz: function (am, an, ao) {
        return am(an, ao);
      },
      wJRsY: function (am, an, ao, ap, aq) {
        return am(an, ao, ap, aq);
      },
      QvUHo: "config/setDownloadConfig",
      vPKay: function (am, an, ao) {
        return am(an, ao);
      },
      dFCvB: function (am, an) {
        return am === an;
      },
      MNZbP: function (am, an, ao) {
        return am(an, ao);
      },
      BKZtl: "function",
      ZeLNT: function (am, an, ao) {
        return am(an, ao);
      },
      gBMvX: function (am, an, ao, ap, aq) {
        return am(an, ao, ap, aq);
      },
      HYvwE: function (am, an, ao) {
        return am(an, ao);
      },
      uZtDw: function (am, an) {
        return am !== an;
      }
    };
    var i = g && g.__decorate || function (am, an, ao, ap) {
      var aq = arguments.length;
      var ar = aq < 3 ? an : ap === null ? ap = Object.getOwnPropertyDescriptor(an, ao) : ap;
      var as;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        ar = Reflect.decorate(am, an, ao, ap);
      } else {
        for (var at = am.length - 1; at >= 0; at--) {
          if (as = am[at]) {
            ar = (h.TjRUT(aq, 3) ? as(ar) : aq > 3 ? as(an, ao, ar) : as(an, ao)) || ar;
          }
        }
      }
      if (h.YcwFA(aq, 3) && ar) {
        Object.defineProperty(an, ao, ar);
      }
      return ar;
    };
    var j = g && g.__metadata || function (am, an) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(am, an);
      }
    };
    var k;
    var l;
    var m;
    var n;
    var o;
    var q;
    var r;
    var t;
    var u;
    var w;
    var z;
    var A;
    var B;
    var C;
    var D;
    var E;
    var F;
    var G;
    var H;
    var I;
    var J;
    var K;
    var L;
    var M;
    var N;
    var O;
    var P;
    var Q;
    var R;
    var S;
    var T;
    var U;
    var V;
    var W;
    var X;
    var Y;
    var Z;
    var a0;
    var a1;
    var a2;
    var a3;
    var a4;
    var a5;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.ConfigController = undefined;
    var a6 = require("@nestjs/common");
    var a7 = gK();
    var a8 = h.wMXwZ(io);
    var a9 = ix();
    var aa = je();
    var ab = h.wMXwZ(gP);
    var ac = iM();
    var ad = iU();
    var ae = j7();
    var af = j5();
    ga();
    var ag = c2(g9);
    var ah = require("electron");
    fP();
    var ai = c2(fO);
    h.wMXwZ(gJ);
    var aj = c2(gI);
    var ak = require("@bilibili/b-utils-core");
    var al = class am extends ag.BaseController {
      constructor(an, ao, ap, aq, ar, as, at, au, av) {
        super(an, "ConfigController");
        c3(this, "configService");
        c3(this, h.QnWYL);
        c3(this, "utilsService");
        c3(this, "windowEvents");
        c3(this, "eventsService");
        c3(this, "reportService");
        c3(this, h.bzkxY);
        c3(this, "systemService");
        c3(this, "gameService");
        this.configService = an;
        this.storeService = ao;
        this.utilsService = ap;
        this.windowEvents = aq;
        this.eventsService = ar;
        this.reportService = as;
        this.downloadService = at;
        this.systemService = au;
        this.gameService = av;
        this.configService.isPrivacyPolicyAccepted = this.storeService.getIsPrivacyPolicyAccepted();
      }
      async handleIsMainWindowReady(an) {
        an.returnValue = this.configService.isMainWindowReady;
        return this.configService.isMainWindowReady;
      }
      async handleSetIsDevMode(an, ao, ap) {
        this.systemService.setIsDevMode(ao, ap);
      }
      async handleSetSystemFont(an, ao) {
        this.log.info("Set system font:", ao.name);
        this.storeService.setSystemFontId(ao.id);
        this.eventsService.emitSystemFontChange(ao);
      }
      async handleGetSystemFont(an) {
        const ao = this.storeService.getSystemFontId();
        an.returnValue = this.configService.fontList.find(ap => ap.id === ao);
      }
      async handleSetIsDisableGpu(an, ao) {
        this.log.info("Set is disable gpu: ", ao);
        this.storeService.setIsDisableGpu(ao);
      }
      async handleGetIsDisableGpu(an) {
        const ao = this.storeService.getIsDisableGpu();
        an.returnValue = ao;
        return ao;
      }
      async handleSetIsSelectedFirst(an, ao) {
        this.log.info("Set is selected first: ", ao);
        this.storeService.setIsSelectedFirst(ao);
      }
      async handleGetIsSelectedFirst(an) {
        const ao = this.storeService.getIsSelectedFirst();
        an.returnValue = ao;
        return ao;
      }
      async handleSetIsSelectedExit(an, ao) {
        this.log.info("Set is selected exit: ", ao);
        this.storeService.setIsSelectedExit(ao);
      }
      async handleGetIsSelectedExit(an) {
        const ao = this.storeService.getIsSelectedExit();
        an.returnValue = ao;
        return ao;
      }
      async handleSetIsQuitByCloseMain(an, ao) {
        this.log.info("SetIsQuitByCloseMain: ", ao);
        this.storeService.setIsQuitByCloseMain(ao);
        this.eventsService.emitQuitByCloseMainChange(ao);
      }
      async handleGetIsQuitByCloseMain(an) {
        const ao = this.storeService.getIsQuitByCloseMain();
        an.returnValue = ao;
        return ao;
      }
      async handleSetTheme(an, ao, ap) {
        this.log.info("Set theme: ", ao, ap);
        switch (ao) {
          case "MainWindowTheme":
            this.storeService.setMainWindowTheme(ap);
            this.reportService.reportMainThemeChange(ap);
            break;
          case "PlayerWindowTheme":
            this.storeService.setPlayerWindowTheme(ap);
            this.reportService.reportPlayerThemeChange(ap);
            break;
        }
      }
      async handleGetTheme(an, ao) {
        let ap = "";
        switch (ao) {
          case "MainWindowTheme":
            ap = this.storeService.getMainWindowTheme();
            break;
          case "PlayerWindowTheme":
            ap = this.storeService.getPlayerWindowTheme();
            break;
          case "SystemTheme":
            ap = this.configService.isSystemDarkTheme ? "dark" : "light";
            break;
        }
        an.returnValue = ap;
        return ap;
      }
      async handleGetMainWindowTheme(an) {
        const ao = this.windowEvents.getAppMainTheme();
        an.returnValue = ao;
        return ao;
      }
      async handleSetBossShortcut(an, ao) {
        this.log.info("Set boss shortcurt: ", ao);
        this.storeService.setBossShortcutInfo(ao);
        this.windowEvents.toggleBossShortcut(ao);
      }
      async handleGetBossShortcut(an) {
        const ao = this.storeService.getBossShortcutInfo();
        an.returnValue = ao;
        return ao;
      }
      async handlegetBossShortcutHide(an) {
        const ao = this.configService.isHideByBossShortcut;
        an.returnValue = ao;
        return ao;
      }
      async handleSetIsAppOpenAtLogin(an, ao) {
        this.log.info("Set app auto start: ", ao);
        this.utilsService.setAppOpenAtLogin(ao);
      }
      async handleGetIsAppOpenAtLogin(an) {
        const ao = ah.app.getLoginItemSettings().openAtLogin;
        an.returnValue = ao;
        return ao;
      }
      async handleSetDownloadPath(an, ao) {
        if (ao.toDefault) {
          this.log.info(h.ytlan);
          if (ao?.type === "game") {
            this.storeService.setToDefaultGameDownloadPath();
            this.configService.gameDownloadPathChange$.next();
          } else {
            this.storeService.setToDefaultDownloadPath();
            this.configService.downloadPathChange$.next();
          }
          this.eventsService.emitDownloadInfoChange();
        } else {
          this.log.info("Open select download path dialog, type:" + ao.type);
          if (ao?.type === h.JyTvt) {
            await this.gameService.selectGameDownloadPath();
          } else {
            await this.downloadService.selectDownloadPath();
          }
        }
      }
      async handleGetDownloadPath(an) {
        return this.downloadService.getDownloadInfo();
      }
      async handleGetDlParallelNum() {
        return this.downloadService.getDlParallelNum();
      }
      async handleSetDownloadConfig(an, {
        type: ao,
        value: ap
      }) {
        this.log.info("Set download config " + ao + ": " + ap);
        if (ao === "noSleep") {
          this.storeService.setDownloadNoSleep(ap);
          this.eventsService.emitDownloadInfoChange();
        } else if (ao === "autoStart") {
          this.storeService.setAutoStartDownload(ap);
          this.eventsService.emitDownloadInfoChange();
        } else if (ao === "parallel") {
          const aq = this.storeService.getDownloadParallelNum();
          if (ap !== aq) {
            this.storeService.setDownloadParallelNum(ap);
            this.configService.dlParallelNumChange$.next();
            this.eventsService.emitDownloadParallelNumChange(ap);
          }
        }
      }
      async handleGetIsShowLicense(an) {
        an.returnValue = ai.SHOW_LICENSE_CHIDS.includes(this.configService.chid);
      }
      async handleSetIsQuitDialogPoped(an, ao) {
        if (h.caVRI !== "HfNSp") {
          this.storeService.setIsQuitDialogPoped(ao);
        } else {
          h.preventDefault();
          this.configService.requestPopLoginWindow$.next();
          this.reportService.reportLoginFrom("universal");
        }
      }
      async handleGetIsQuitDialogPoped(an) {
        an.returnValue = this.storeService.getIsQuitDialogPoped();
      }
      async handleSetUseMediaSession(an, ao) {
        this.storeService.setUseMediaSession(ao);
      }
      async handleUseMediaSession(an) {
        an.returnValue = this.storeService.getUseMediaSession();
      }
      async handleGetRemoteConfig(an) {
        const ao = (0, ak.pick)(this.configService.appConfig, ["isAdOpenModeByApi", "activity"]);
        an.returnValue = ao;
        return ao;
      }
      async handleSetCustomConfig(an, ao) {
        this.storeService.setCustomConfig(ao);
        if (["proxyAgentUrl", h.SDwDN, "enableSystemProxy"].some(ap => ap in ao)) {
          await this.systemService.updateAppProxyConfig();
        }
      }
      async handleGetCustomConfig(an) {
        if (h.VIcTP("qqVYi", "VUmvg")) {
          if (k && !l.isVisible()) {
            o = false;
            this.eventsService.emitWindowStatusChange();
            this.eventsService.sendEventToWindow(q, "window/visibleChange", {
              data: false
            });
          }
        } else {
          const ap = this.storeService.getCustomConfig();
          an.returnValue = ap;
          return ap;
        }
      }
      async handleSetGeneralConfig(an, ao) {
        this.storeService.setGeneralConfig(ao);
      }
      async handleGetGeneralConfig(an) {
        const ao = this.storeService.getGeneralConfig();
        an.returnValue = ao;
        return ao;
      }
      async handleSetIsShowConsoleLog(an, ao) {
        return this.storeService.setIsShowConsoleLog(ao);
      }
      async handleGetIsShowConsoleLog(an) {
        const ao = this.storeService.getIsShowConsoleLog();
        if ((0, ak.isBol)(ao)) {
          an.returnValue = ao;
          return ao;
        }
        an.returnValue = ai.IS_DEV;
        return ai.IS_DEV;
      }
      async handleSetConfig(an, {
        key: ao,
        value: ap
      }) {
        switch (ao) {}
      }
      async handleGetConfig(an, ao) {
        let ap;
        switch (ao.name) {
          case "isGameServiceReady":
            ap = this.configService.isGameServiceReady;
            break;
          case "isSystemDarkTheme":
            ap = this.configService.isSystemDarkTheme;
            break;
        }
        an.returnValue = ap;
        return ap;
      }
    };
    i([(0, ag.IpcInvoke)("config/isMainWindowReady", {
      withSync: true,
      withAsync: false,
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [typeof (w = typeof ah.IpcMainEvent !== h.kXeFr && ah.IpcMainEvent) === "function" ? w : Object]), j("design:returntype", Promise)], al.prototype, h.AEfjn, null);
    i([(0, ag.IpcInvoke)("config/setIsDevMode", {
      scope: "mainWindow"
    }), j(h.FhUQF, Function), j("design:paramtypes", [Object, Boolean, String]), j("design:returntype", Promise)], al.prototype, "handleSetIsDevMode", null);
    i([(0, ag.IpcInvoke)("config/setSystemFont", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, typeof (z = typeof aj.AppFont !== "undefined" && aj.AppFont) === "function" ? z : Object]), j("design:returntype", Promise)], al.prototype, "handleSetSystemFont", null);
    i([(0, ag.IpcInvoke)("config/getSystemFont", {
      withSync: true,
      withAsync: false
    }), j(h.FhUQF, Function), j("design:paramtypes", [typeof (A = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent) === "function" ? A : Object]), j("design:returntype", Promise)], al.prototype, "handleGetSystemFont", null);
    i([(0, ag.IpcInvoke)("config/setIsDisableGpu", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, Boolean]), j("design:returntype", Promise)], al.prototype, h.pedGT, null);
    i([(0, ag.IpcInvoke)("config/getIsDisableGpu", {
      withSync: true,
      withAsync: false
    }), j("design:type", Function), j("design:paramtypes", [typeof (B = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent) === "function" ? B : Object]), j(h.xcxWN, Promise)], al.prototype, h.pGJdB, null);
    i([(0, ag.IpcInvoke)("config/setIsSelectedFirst", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, Boolean]), j("design:returntype", Promise)], al.prototype, "handleSetIsSelectedFirst", null);
    i([(0, ag.IpcInvoke)("config/getIsSelectedFirst", {
      withSync: true,
      withAsync: false
    }), j("design:type", Function), j("design:paramtypes", [typeof (C = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent) === "function" ? C : Object]), j(h.xcxWN, Promise)], al.prototype, h.ryMxn, null);
    i([(0, ag.IpcInvoke)("config/setIsSelectedExit", {
      scope: h.HDslr
    }), j("design:type", Function), j("design:paramtypes", [Object, Boolean]), j("design:returntype", Promise)], al.prototype, h.JJmWu, null);
    h.aJZIr(i, [(0, ag.IpcInvoke)("config/getIsSelectedExit", {
      withSync: true,
      withAsync: false
    }), j("design:type", Function), j(h.WHNji, [typeof (D = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent) === "function" ? D : Object]), j("design:returntype", Promise)], al.prototype, "handleGetIsSelectedExit", null);
    i([(0, ag.IpcInvoke)("config/setIsQuitByCloseMain", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, Boolean]), j("design:returntype", Promise)], al.prototype, "handleSetIsQuitByCloseMain", null);
    i([(0, ag.IpcInvoke)("config/getIsQuitByCloseMain", {
      withSync: true,
      withAsync: false
    }), h.CXmYb(j, "design:type", Function), j("design:paramtypes", [h.lpNxC(typeof (E = h.aGHOK(typeof ah.IpcMainEvent, "undefined") && ah.IpcMainEvent), "function") ? E : Object]), j(h.xcxWN, Promise)], al.prototype, "handleGetIsQuitByCloseMain", null);
    i([(0, ag.IpcInvoke)("config/setTheme"), j("design:type", Function), j("design:paramtypes", [Object, typeof (F = typeof aj.ThemeType !== "undefined" && aj.ThemeType) === "function" ? F : Object, Object]), j("design:returntype", Promise)], al.prototype, "handleSetTheme", null);
    i([(0, ag.IpcInvoke)("config/getTheme", {
      withSync: true
    }), j("design:type", Function), j("design:paramtypes", [typeof (G = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent) === "function" ? G : Object, typeof (H = typeof aj.ThemeType !== "undefined" && aj.ThemeType) === "function" ? H : Object]), j("design:returntype", Promise)], al.prototype, "handleGetTheme", null);
    i([(0, ag.IpcInvoke)("config/getMainWindowTheme", {
      withSync: true
    }), j("design:type", Function), j("design:paramtypes", [h.VIcTP(typeof (I = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent), "function") ? I : Object]), j("design:returntype", Promise)], al.prototype, "handleGetMainWindowTheme", null);
    i([(0, ag.IpcInvoke)("config/setBossShortcutInfo", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, typeof (J = typeof aj.BossShortcutInfo !== "undefined" && aj.BossShortcutInfo) === "function" ? J : Object]), j("design:returntype", Promise)], al.prototype, "handleSetBossShortcut", null);
    i([(0, ag.IpcInvoke)("config/getBossShortcutInfo", {
      withSync: true,
      withAsync: false
    }), j("design:type", Function), j("design:paramtypes", [typeof (K = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent) === "function" ? K : Object]), j("design:returntype", Promise)], al.prototype, "handleGetBossShortcut", null);
    i([(0, ag.IpcInvoke)(h.IczrI, {
      withSync: true,
      withAsync: false
    }), j("design:type", Function), j("design:paramtypes", [typeof (L = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent) === "function" ? L : Object]), h.gQGvz(j, "design:returntype", Promise)], al.prototype, "handlegetBossShortcutHide", null);
    i([(0, ag.IpcInvoke)("config/setIsAppOpenAtLogin", {
      scope: "mainWindow"
    }), j("design:type", Function), h.gQGvz(j, "design:paramtypes", [Object, Boolean]), j("design:returntype", Promise)], al.prototype, "handleSetIsAppOpenAtLogin", null);
    i([(0, ag.IpcInvoke)("config/getIsAppOpenAtLogin", {
      withSync: true,
      withAsync: false
    }), j("design:type", Function), j("design:paramtypes", [typeof (M = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent) === "function" ? M : Object]), j("design:returntype", Promise)], al.prototype, "handleGetIsAppOpenAtLogin", null);
    i([(0, ag.IpcInvoke)("config/setDownloadPath", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, Object]), j("design:returntype", Promise)], al.prototype, "handleSetDownloadPath", null);
    h.wJRsY(i, [(0, ag.IpcInvoke)("config/getDownloadInfo"), j("design:type", Function), j("design:paramtypes", [typeof (N = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent) === "function" ? N : Object]), j("design:returntype", Promise)], al.prototype, "handleGetDownloadPath", null);
    i([(0, ag.IpcInvoke)("config/getDlParallelNum", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], al.prototype, "handleGetDlParallelNum", null);
    i([(0, ag.IpcInvoke)(h.QvUHo, {
      scope: "mainWindow"
    }), j("design:type", Function), h.vPKay(j, "design:paramtypes", [Object, Object]), j("design:returntype", Promise)], al.prototype, "handleSetDownloadConfig", null);
    i([(0, ag.IpcInvoke)("config/getIsShowLicense", {
      withSync: true,
      withAsync: false
    }), j("design:type", Function), j("design:paramtypes", [h.dFCvB(typeof (O = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent), "function") ? O : Object]), h.MNZbP(j, "design:returntype", Promise)], al.prototype, "handleGetIsShowLicense", null);
    i([(0, ag.IpcInvoke)("config/setIsQuitDialogPoped", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [h.lpNxC(typeof (P = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent), h.BKZtl) ? P : Object, Boolean]), j("design:returntype", Promise)], al.prototype, "handleSetIsQuitDialogPoped", null);
    i([(0, ag.IpcInvoke)("config/getIsQuitDialogPoped", {
      withSync: true,
      withAsync: false,
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [h.dFCvB(typeof (Q = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent), "function") ? Q : Object]), j("design:returntype", Promise)], al.prototype, "handleGetIsQuitDialogPoped", null);
    h.aJZIr(i, [(0, ag.IpcInvoke)("config/setUseMediaSession", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [typeof (R = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent) === "function" ? R : Object, Boolean]), j("design:returntype", Promise)], al.prototype, "handleSetUseMediaSession", null);
    i([(0, ag.IpcInvoke)("config/getUseMediaSession", {
      withSync: true,
      withAsync: false,
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [typeof (S = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent) === "function" ? S : Object]), j("design:returntype", Promise)], al.prototype, "handleUseMediaSession", null);
    i([(0, ag.IpcInvoke)("config/getRemoteConfig", {
      withSync: true
    }), j("design:type", Function), h.ZeLNT(j, "design:paramtypes", [typeof (T = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent) === "function" ? T : Object]), j("design:returntype", Promise)], al.prototype, "handleGetRemoteConfig", null);
    h.gBMvX(i, [(0, ag.IpcInvoke)("config/setCustomConfig", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [typeof (U = h.aGHOK(typeof ah.IpcMainEvent, "undefined") && ah.IpcMainEvent) === "function" ? U : Object, h.lpNxC(typeof (V = typeof aj.CustomConfig !== "undefined" && aj.CustomConfig), "function") ? V : Object]), j("design:returntype", Promise)], al.prototype, "handleSetCustomConfig", null);
    i([(0, ag.IpcInvoke)("config/getCustomConfig", {
      withSync: true
    }), j("design:type", Function), j("design:paramtypes", [typeof (W = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent) === "function" ? W : Object]), h.HYvwE(j, "design:returntype", Promise)], al.prototype, "handleGetCustomConfig", null);
    i([(0, ag.IpcInvoke)("config/setGeneralConfig"), j("design:type", Function), j("design:paramtypes", [typeof (X = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent) === "function" ? X : Object, typeof (Y = typeof aj.GeneralConfig !== h.kXeFr && aj.GeneralConfig) === "function" ? Y : Object]), j("design:returntype", Promise)], al.prototype, "handleSetGeneralConfig", null);
    i([(0, ag.IpcInvoke)("config/getGeneralConfig", {
      withSync: true
    }), j("design:type", Function), j("design:paramtypes", [typeof (Z = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent) === "function" ? Z : Object]), j(h.xcxWN, Promise)], al.prototype, "handleGetGeneralConfig", null);
    i([(0, ag.IpcInvoke)("config/setIsShowConsoleLog", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [typeof (a0 = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent) === "function" ? a0 : Object, Boolean]), j("design:returntype", Promise)], al.prototype, "handleSetIsShowConsoleLog", null);
    i([(0, ag.IpcInvoke)("config/getIsShowConsoleLog", {
      withSync: true,
      withAsync: false
    }), j("design:type", Function), j("design:paramtypes", [typeof (a1 = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent) === h.BKZtl ? a1 : Object]), j("design:returntype", Promise)], al.prototype, "handleGetIsShowConsoleLog", null);
    i([(0, ag.IpcInvoke)("config/setConfig", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [typeof (a2 = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent) === "function" ? a2 : Object, typeof (a3 = typeof aj.IAppSetConfig !== "undefined" && aj.IAppSetConfig) === "function" ? a3 : Object]), h.HYvwE(j, "design:returntype", Promise)], al.prototype, "handleSetConfig", null);
    i([(0, ag.IpcInvoke)("config/getConfig", {
      withSync: true
    }), j("design:type", Function), j(h.WHNji, [typeof (a4 = typeof ah.IpcMainEvent !== "undefined" && ah.IpcMainEvent) === "function" ? a4 : Object, typeof (a5 = typeof aj.IGetConfigParam !== "undefined" && aj.IGetConfigParam) === h.BKZtl ? a5 : Object]), h.HYvwE(j, "design:returntype", Promise)], al.prototype, "handleGetConfig", null);
    al = i([(0, a6.Controller)(), j("design:paramtypes", [typeof (k = typeof a7.ConfigService !== "undefined" && a7.ConfigService) === "function" ? k : Object, typeof (l = typeof a8.StoreService !== "undefined" && a8.StoreService) === "function" ? l : Object, typeof (m = typeof a9.UtilsService !== "undefined" && a9.UtilsService) === "function" ? m : Object, typeof (n = typeof aa.WindowEvents !== "undefined" && aa.WindowEvents) === h.BKZtl ? n : Object, typeof (o = h.uZtDw(typeof ab.EventsService, "undefined") && ab.EventsService) === "function" ? o : Object, typeof (q = typeof ac.ReportService !== "undefined" && ac.ReportService) === "function" ? q : Object, typeof (r = typeof ad.DownloadService !== "undefined" && ad.DownloadService) === "function" ? r : Object, typeof (t = typeof ae.SystemService !== "undefined" && ae.SystemService) === "function" ? t : Object, typeof (u = typeof af.GameService !== "undefined" && af.GameService) === "function" ? u : Object])], al);
    g.ConfigController = al;
  }
});
var jr = bX({
  ""(g) {
    'use strict';

    var h = g && g.__decorate || function (n, o, q, t) {
      var u = arguments.length;
      var w = u < 3 ? o : t === null ? t = Object.getOwnPropertyDescriptor(o, q) : t;
      var z;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        w = Reflect.decorate(n, o, q, t);
      } else {
        for (var A = n.length - 1; A >= 0; A--) {
          if (z = n[A]) {
            w = (u < 3 ? z(w) : u > 3 ? z(o, q, w) : z(o, q)) || w;
          }
        }
      }
      if (u > 3 && w) {
        Object.defineProperty(o, q, w);
      }
      return w;
    };
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.ConfigModule = undefined;
    var i = require("@nestjs/common");
    var j = jq();
    var k = gK();
    var l = j8();
    var m = class n {};
    m = h([(0, i.Global)(), (0, i.Module)({
      controllers: [j.ConfigController],
      providers: [k.ConfigService, l.TrayMenuService],
      exports: [k.ConfigService, l.TrayMenuService]
    })], m);
    g.ConfigModule = m;
  }
});
var jt = bX({
  ""(g) {
    'use strict';

    var h = {
      vgxlQ: "object",
      IOhuo: "storeService",
      PclMO: "Reset main window status!",
      PjJgs: "Open main window!",
      lSIPU: "ODEQX",
      WUTsZ: "suRUi",
      YLKLS: "mvNfb",
      dWAoO: function (ay, az) {
        return ay === az;
      },
      CSqhF: "iEgWg",
      HecJo: "function",
      IwkbW: function (ay, az, aA) {
        return ay(az, aA);
      },
      wPmFr: "window/close",
      QpZkg: function (ay, az, aA) {
        return ay(az, aA);
      },
      dcrcs: "design:returntype",
      plqYX: function (ay, az, aA) {
        return ay(az, aA);
      },
      uEMFv: "undefined",
      MeTJs: function (ay, az, aA) {
        return ay(az, aA);
      },
      cVVXP: "design:paramtypes",
      IWYdK: "window/unpin",
      cEowF: "design:type",
      ykPvQ: "handleUnpinWindow",
      PWzri: "window/minimize",
      GUMpp: function (ay, az, aA) {
        return ay(az, aA);
      },
      zJLJf: function (ay, az) {
        return ay !== az;
      },
      tWsbG: function (ay, az, aA) {
        return ay(az, aA);
      },
      jrjPS: function (ay, az, aA, aB, aC) {
        return ay(az, aA, aB, aC);
      },
      RabuZ: function (ay, az, aA) {
        return ay(az, aA);
      },
      vMuSy: function (ay, az, aA) {
        return ay(az, aA);
      },
      QCkCq: function (ay, az, aA) {
        return ay(az, aA);
      },
      QLWjR: function (ay, az, aA) {
        return ay(az, aA);
      },
      rPpdM: "window/openMainWindow",
      ytsvR: "handleOpenMainWindowPage",
      JhCVg: function (ay, az, aA) {
        return ay(az, aA);
      },
      uTgQO: function (ay, az, aA, aB, aC) {
        return ay(az, aA, aB, aC);
      },
      MqjCF: "handleMiniMainWindow",
      NUDBD: function (ay, az, aA, aB, aC) {
        return ay(az, aA, aB, aC);
      },
      SEqID: function (ay, az, aA) {
        return ay(az, aA);
      },
      XRujP: "window/mainWindowMouseEnter",
      ljlWP: function (ay, az, aA) {
        return ay(az, aA);
      },
      wfZAO: "handleOpenPlayerWindow",
      rgtEH: function (ay, az, aA) {
        return ay(az, aA);
      },
      QdBUA: function (ay, az, aA, aB, aC) {
        return ay(az, aA, aB, aC);
      },
      lujHp: function (ay, az, aA) {
        return ay(az, aA);
      },
      LlqaQ: "window/playerWindowMouseEnter",
      BTXNs: function (ay, az, aA) {
        return ay(az, aA);
      },
      wxhEz: function (ay, az, aA) {
        return ay(az, aA);
      },
      UwFYo: function (ay, az, aA) {
        return ay(az, aA);
      },
      KqMnJ: "window/focusLiveRoomWindow",
      hMqnh: function (ay, az, aA) {
        return ay(az, aA);
      },
      rsrOK: "window/openInAppBrowser",
      iVJPj: "handleGetUniversalParams",
      KcPZx: "handleOpenDemoWindow",
      YqoGT: "handleCloseTestWindow",
      VSmie: function (ay, az, aA) {
        return ay(az, aA);
      },
      wFiFi: "handleOpenTestWindowDevTools"
    };
    var i = g && g.__decorate || function (ay, az, aA, aB) {
      var aC = arguments.length;
      var aD = aC < 3 ? az : aB === null ? aB = Object.getOwnPropertyDescriptor(az, aA) : aB;
      var aE;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        aD = Reflect.decorate(ay, az, aA, aB);
      } else {
        for (var aF = ay.length - 1; aF >= 0; aF--) {
          if (aE = ay[aF]) {
            aD = (aC < 3 ? aE(aD) : aC > 3 ? aE(az, aA, aD) : aE(az, aA)) || aD;
          }
        }
      }
      if (aC > 3 && aD) {
        Object.defineProperty(az, aA, aD);
      }
      return aD;
    };
    var j = g && g.__metadata || function (ay, az) {
      if (typeof Reflect === h.vgxlQ && typeof Reflect.metadata === "function") {
        return Reflect.metadata(ay, az);
      }
    };
    var k;
    var l;
    var m;
    var n;
    var o;
    var q;
    var r;
    var t;
    var u;
    var w;
    var z;
    var A;
    var B;
    var C;
    var D;
    var E;
    var F;
    var G;
    var H;
    var I;
    var J;
    var K;
    var L;
    var M;
    var N;
    var O;
    var P;
    var Q;
    var R;
    var S;
    var T;
    var U;
    var V;
    var W;
    var X;
    var Y;
    var Z;
    var a0;
    var a1;
    var a2;
    var a3;
    var a4;
    var a5;
    var a6;
    var a7;
    var a8;
    var a9;
    var aa;
    var ab;
    var ac;
    var ad;
    var ae;
    var af;
    var ag;
    var ah;
    var ai;
    var aj;
    var ak;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.WindowController = undefined;
    var al = require("@nestjs/common");
    ga();
    var am = c2(g9);
    var an = gK();
    var ao = jf();
    var ap = jg();
    var aq = io();
    var ar = gP();
    var as = j7();
    var at = ix();
    fP();
    var au = c2(fO);
    var av = require("electron");
    gJ();
    var aw = c2(gI);
    var ax = class ay extends am.BaseController {
      constructor(az, aA, aB, aC, aD, aE, aF) {
        super(az, "WindowController");
        c3(this, "configService");
        c3(this, "windowFactory");
        c3(this, "windowService");
        c3(this, h.IOhuo);
        c3(this, "eventsService");
        c3(this, "systemService");
        c3(this, "utilsService");
        this.configService = az;
        this.windowFactory = aA;
        this.windowService = aB;
        this.storeService = aC;
        this.eventsService = aD;
        this.systemService = aE;
        this.utilsService = aF;
      }
      async handleSwitchWindow(az) {
        return this.systemService.switchToNextWindow(this.getSenderWindow(az));
      }
      async handleDevTools(az) {
        this.windowService.toggleDevTools(this.getSenderWindow(az));
      }
      async handleCloseWindow(az) {
        this.getSenderWindow(az).close();
      }
      async handleCatchClose(az) {
        this.windowService.catchWindowClose(az);
      }
      async handleUncatchClose(az) {
        this.windowService.uncatchWindowClose(az);
      }
      async handleForceClose(az) {
        this.windowService.forceCloseWindow(az);
      }
      async handleFocusWindow(az) {
        this.getSenderWindow(az).focus();
      }
      async handleIsWindowFocus(az) {
        az.returnValue = this.getSenderWindow(az).isFocused();
        return az.returnValue;
      }
      async handleIsWindowVisible(az) {
        const aA = this.getSenderWindow(az);
        az.returnValue = !this.utilsService.isWindowHide(aA);
        return az.returnValue;
      }
      async handleHideWindow(az) {
        this.getSenderWindow(az).hide();
      }
      async handleShowWindow(az) {
        this.getSenderWindow(az).show();
      }
      async handlePinWindow(az, aA) {
        if (aA) {
          this.log.info("Pin", aA);
        }
        this.getSenderWindow(az).setAlwaysOnTop(true, "normal", 999);
      }
      async handleUnpinWindow(az, aA) {
        if (aA) {
          this.log.info("Unpin", aA);
        }
        this.getSenderWindow(az).setAlwaysOnTop(false);
      }
      async handleGetIsPined(az) {
        const aA = this.getSenderWindow(az);
        az.returnValue = aA.isAlwaysOnTop();
        return az.returnValue;
      }
      async handleSetAlwaysOnTop(az, aA) {
        this.getSenderWindow(az).setAlwaysOnTop(aA);
      }
      async handleMinimize(az) {
        this.getSenderWindow(az).minimize();
      }
      async handleIsMinimized(az) {
        const aA = this.getSenderWindow(az);
        az.returnValue = aA.isMinimized();
        return az.returnValue;
      }
      async handleRestore(az) {
        this.getSenderWindow(az).restore();
      }
      async handleMaximize(az) {
        const aA = this.getSenderWindow(az);
        aA.maximize();
      }
      async handleUnmaximize(az) {
        const aA = this.getSenderWindow(az);
        aA.unmaximize();
      }
      async handleIsMaximized(az) {
        const aA = this.getSenderWindow(az);
        az.returnValue = aA.isMaximized();
        return az.returnValue;
      }
      async handleToggleMaximize(az) {
        const aA = this.getSenderWindow(az);
        if (aA.isMaximized()) {
          aA.unmaximize();
        } else {
          aA.maximize();
        }
      }
      async handleSetFullScreen(az, aA) {
        this.getSenderWindow(az).setFullScreen(aA);
      }
      async handleGetIsFullScreen(az) {
        const aB = this.getSenderWindow(az);
        az.returnValue = aB.isFullScreen();
        return az.returnValue;
      }
      async handleOneTimeFullScreen(az) {
        this.log.info("One Time fullscreen!");
        const aA = this.getSenderWindow(az);
        aA.setFullScreenable(true);
      }
      async handleWindowReload(az) {
        this.getSenderWindow(az).webContents.reload();
      }
      async handleReplaceWindow(az, aA) {
        this.windowService.replaceWindowUrl(az.sender, aA.url);
      }
      async handleSetAllowOpenUrls(az, aA) {
        const aB = this.getSenderWindow(az);
        this.windowService.setAllowOpenUrls(aB, aA);
      }
      async handleOpenInBrowser(az, aA, aB) {
        this.log.info("Open in browser: ", aA, aB);
        this.utilsService.shellOpenExternal(aA, aB);
      }
      async handleCapturePage(az) {
        const aA = this.getSenderWindow(az);
        return await this.windowService.captureWindowPage(aA);
      }
      async handleDesktopCapturer() {
        return await this.windowService.getDesktopCapturerSources();
      }
      async handleGetOpendWinNum(az) {
        const aA = this.windowService.getVisibleWinNum();
        this.log.info("Get visible win num:", aA);
        az.returnValue = aA;
      }
      async handleReloadWindow(az) {
        const aA = this.getSenderWindow(az);
        const aB = ["liveRoomWindow", "liveNowWindow", "uploadWindow"];
        const aC = aB.find(aD => this.configService[aD]?.id === aA.id);
        if (aC && this.configService.windowOpenedUrls[aC]) {
          this.configService[aC].webContents.loadURL(this.configService.windowOpenedUrls[aC]);
        }
      }
      async handleResetStatus() {
        this.log.info(h.PclMO);
        this.windowService.handleResetWindowStatus();
      }
      async handleOpenMainWindow(az, {
        unmini: aA
      } = {}) {
        this.log.info(h.PjJgs);
        this.windowFactory.createOrFocusMainWindow();
        if (aA && this.configService.isMainWindowMini) {
          this.windowService.unminMainWindow();
        }
      }
      async handleOpenMainWindowPage(az, aA) {
        this.log.info("Open main window page: ", aA);
        this.windowService.openMainWindowPage(aA);
        if (this.configService.isMainWindowMini) {
          this.windowService.unminMainWindow();
        }
      }
      async handleSplashWindowReady() {
        this.windowService.handleSplashWindowReady();
      }
      async handleMainWindowReady() {
        this.windowService.handleMainWindowReady();
      }
      async handleSearchPageReady() {
        this.log.info("Search page ready!");
        this.configService.isSearchPageReady = true;
        this.configService.searchPageReady$.next();
      }
      async handleMiniMainWindow() {
        this.log.info("Mini main window!");
        this.windowService.miniMainWindow();
      }
      async handleUnminiMainWindow() {
        this.log.info("Unmini main window!");
        this.windowService.unminMainWindow();
      }
      handleIsMainWindowMini(az) {
        az.returnValue = this.configService.isMainWindowMini;
      }
      async handleMainWindowMouseEnter() {
        this.windowService.handleMainWindowMouseEnter();
      }
      async handleSetMainVideoSize(az, aA) {
        if (aA) {
          this.log.info("Set main window aspect ratio", aA);
        }
        this.windowService.setMainVideoSize(aA);
      }
      async handleSetMiniMainBtnsVisible(az, aA) {
        this.windowService.setMiniMainBtnsVisible(aA);
      }
      async handlePlayerWindowReady() {
        this.log.info("Player window ready!");
        if (!this.configService.isPlayerWindowReady) {
          this.configService.isPlayerWindowReady = true;
          this.configService.playerWindowReady$.next();
        }
      }
      async handleOpenPlayerWindow(az, aA) {
        this.log.info("Open player window:", JSON.stringify(aA || "{}"));
        this.configService.openPlayerWindow$.next(aA);
      }
      async handleShowPlayerWindow() {
        this.log.info("Focus player window!");
        this.windowService.focusPlayerWindow();
      }
      async handleIsPlayerWindowVisiable(az) {
        if (h.lSIPU === "lFAyR") {
          if (k && l.__esModule) {
            return m;
          } else {
            return {
              default: n
            };
          }
        } else {
          az.returnValue = this.configService.playerWindow?.isVisible();
        }
      }
      async handlePinPlayerWindow() {
        this.log.info("Pin player window!");
        this.configService.isPlayerWindowPined = true;
        this.configService.playerWindow.setAlwaysOnTop(true, "normal", 99999);
        this.eventsService.emitPlayerWindowPinChange(true);
      }
      async handleUnpinPlayerWindow() {
        this.log.info("Unpin player window!");
        this.configService.isPlayerWindowPined = false;
        this.configService.playerWindow.setAlwaysOnTop(false);
        this.eventsService.emitPlayerWindowPinChange(false);
      }
      async handleStretchPlareWindow() {
        if (h.WUTsZ !== "suRUi") {
          if (k.default.existsSync(l.filePath)) {
            o.default.unlinkSync(q.filePath);
          }
        } else {
          this.log.info("Stretch player window!");
          const {
            defaultWidth: aA,
            defaultHeight: aB
          } = au.PLAYER_WINDOW;
          this.configService.playerWindow.setBounds({
            width: aA,
            height: aB
          }, true);
          this.windowFactory.playerWindowState.updateState();
        }
      }
      async handleMiniPlayerWindow() {
        this.log.info("Mini player window!");
        this.windowService.miniPlayerWindow();
      }
      async handleUnminiPlayerWindow() {
        this.log.info("Unmini player window!");
        this.windowService.unminPlayerWindow();
      }
      handleIsMiniPlayerMode(az) {
        az.returnValue = this.storeService.getIsMiniPlayerWindow();
      }
      async handlePlayerWinodwMouseEnter() {
        this.windowService.handlePlayerWindowMouseEnter();
      }
      async handleSetPlayerVideoSize(az, aA) {
        if (aA) {
          this.log.info("Set player window aspect ratio", aA);
        }
        this.windowService.setPlayerVideoSize(aA);
      }
      async handleSetMiniPlayerBtnsVisible(az, aA) {
        this.windowService.setMiniPlayerBtnsVisible(aA);
      }
      async handleCheckPlayerWindowStatus() {
        if (this.configService.playerWindow && !this.configService.playerWindow.isDestroyed()) {
          this.windowFactory.playerWindowState.checkWindowStatus(true);
        }
      }
      async handleOpenLiveNowWindow() {
        this.log.info("Open live now window!");
        this.windowService.openLiveNowWindow();
      }
      async handleOpenLiveRoomWindow(az, aA, {
        params: aB
      } = {}) {
        this.log.info("Open live room, roomId: " + aA + ", params: " + JSON.stringify(aB || {}));
        this.windowService.openLiveRoomWindow(aA, aB);
      }
      async handleFocusLiveRoomWindow() {
        this.log.info("Focus live room window!");
        if (this.configService.liveRoomWindow && !this.configService.liveRoomWindow.isDestroyed()) {
          this.configService.liveRoomWindow.show();
        }
      }
      async handleIsLiveRoomWindowVisiable(az) {
        const {
          liveRoomWindow: aA
        } = this.configService;
        az.returnValue = !!aA && !aA.isDestroyed() && aA.isVisible();
      }
      async handleIsLiveRoomWindowOpened(az) {
        az.returnValue = this.configService.isLiveRoomWindowOpened;
      }
      async handleSetLiveRoomWindowOpened() {
        this.configService.isLiveRoomWindowOpened = true;
      }
      async handleOpenUniversalWindow(az, aA) {
        this.log.info("Open Universal window!");
        this.windowFactory.createOrFocusUniversalWindow(aA);
      }
      async handleGetUniversalParams() {
        return this.configService.universalParams || {};
      }
      async handleLaunchUniversalAction(az, aA) {
        this.windowService.launchUniversalAction(aA);
      }
      async handleOpenUploadWindow() {
        this.log.info("Open Upload window!");
        this.windowService.openUploadWindow();
      }
      async handleBiliPetAction(az, {
        action: aA
      }) {
        const {
          biliPetWindow: aB
        } = this.configService;
        if (aA === "init" || aA === "show" && aB && !aB.isDestroyed()) {
          this.windowFactory.createBiliPetWindow();
        } else if (aA === "close") {
          if (aB && !aB.isDestroyed()) {
            aB.close();
          }
        }
      }
      async handleGetIsBiliPetVisible(az) {
        const {
          biliPetWindow: aA
        } = this.configService;
        az.returnValue = !!aA && !aA.isDestroyed() && aA.isVisible();
      }
      async handleTogglePinPetWindow() {
        if (h.YLKLS === "mvNfb") {
          const {
            isBiliPetWindowPined: az,
            biliPetWindow: aA
          } = this.configService;
          if (az) {
            aA.setAlwaysOnTop(false);
          } else {
            aA.setAlwaysOnTop(true, "normal", 999999);
          }
          this.configService.isBiliPetWindowPined = !az;
        } else {
          (0, i.ensureDirSync)(j);
        }
      }
      async handleSetIgnoreMouseEvents(az, aA, aB) {
        const aC = this.getSenderWindow(az);
        aC.setIgnoreMouseEvents(aA, aB);
        if (this.configService.isBiliPetWindowPined) {
          if (h.dWAoO("pzpUW", "pzpUW")) {
            aC.setAlwaysOnTop(true, "normal", 999999);
          } else {
            const aE = l();
            (0, m.writeFileSync)(n, o.stringify({
              ...aE,
              ...q
            }, null, 2));
          }
        }
      }
      async handleMovePetWindow(az, aA) {
        const aB = this.getSenderWindow(az);
        this.windowService.handleMovePetWindow(aB, aA);
      }
      async handleOpenAppLogWindow(az) {
        this.log.info("Open applog window!");
        this.configService.watchAppLogChange$.next();
        this.windowFactory.createOrFocusAppLogWindow();
      }
      async handleOpenDemoWindow(az, aA) {
        this.log.info("Open demo window!");
        this.windowFactory.createOrFocusTestWindow(aA);
      }
      async handleCloseTestWindow() {
        this.log.info("Close demo window!");
        if (this.configService.testWindow) {
          if (h.CSqhF !== "iEgWg") {
            const {
              str: aA,
              len: aB
            } = i.params || {};
            return (0, j.md5Hash)(aA, aB);
          } else {
            this.configService.testWindow.focus();
            this.configService.testWindow.close();
          }
        }
      }
      async handleOpenTestWindowDevTools() {
        this.log.info("Focus demo window!");
        if (this.configService.testWindow) {
          this.configService.testWindow.focus();
          this.configService.testWindow.webContents.openDevTools();
        }
      }
      async handleCloseTestWindowDevTools() {
        this.log.info("Close demo window!");
        if (this.configService.testWindow) {
          this.configService.testWindow.focus();
          this.configService.testWindow.webContents.closeDevTools();
        }
      }
    };
    i([(0, am.IpcInvoke)("window/switchWindow"), j("design:type", Function), j("design:paramtypes", [typeof (t = typeof av.IpcMainInvokeEvent !== "undefined" && av.IpcMainInvokeEvent) === h.HecJo ? t : Object]), j("design:returntype", Promise)], ax.prototype, "handleSwitchWindow", null);
    i([(0, am.IpcInvoke)("window/toggleDevTools"), h.IwkbW(j, "design:type", Function), j("design:paramtypes", [typeof (u = typeof av.IpcMainInvokeEvent !== "undefined" && av.IpcMainInvokeEvent) === "function" ? u : Object]), j("design:returntype", Promise)], ax.prototype, "handleDevTools", null);
    i([(0, am.IpcInvoke)(h.wPmFr), j("design:type", Function), j("design:paramtypes", [typeof (w = typeof av.IpcMainInvokeEvent !== "undefined" && av.IpcMainInvokeEvent) === "function" ? w : Object]), j("design:returntype", Promise)], ax.prototype, "handleCloseWindow", null);
    i([(0, am.IpcInvoke)("window/catchClose"), j("design:type", Function), j("design:paramtypes", [typeof (z = typeof av.IpcMainInvokeEvent !== "undefined" && av.IpcMainInvokeEvent) === "function" ? z : Object]), h.QpZkg(j, "design:returntype", Promise)], ax.prototype, "handleCatchClose", null);
    i([(0, am.IpcInvoke)("window/uncatchClose"), j("design:type", Function), j("design:paramtypes", [typeof (A = typeof av.IpcMainInvokeEvent !== "undefined" && av.IpcMainInvokeEvent) === "function" ? A : Object]), j(h.dcrcs, Promise)], ax.prototype, "handleUncatchClose", null);
    i([(0, am.IpcInvoke)("window/forceClose"), j("design:type", Function), j("design:paramtypes", [typeof (B = typeof av.IpcMainInvokeEvent !== "undefined" && av.IpcMainInvokeEvent) === "function" ? B : Object]), j("design:returntype", Promise)], ax.prototype, "handleForceClose", null);
    i([(0, am.IpcInvoke)("window/focus"), j("design:type", Function), j("design:paramtypes", [h.dWAoO(typeof (C = typeof av.IpcMainInvokeEvent !== "undefined" && av.IpcMainInvokeEvent), "function") ? C : Object]), j("design:returntype", Promise)], ax.prototype, "handleFocusWindow", null);
    i([(0, am.IpcInvoke)("window/isFocused", {
      withSync: true
    }), j("design:type", Function), j("design:paramtypes", [typeof (D = typeof av.IpcMainEvent !== "undefined" && av.IpcMainEvent) === "function" ? D : Object]), j("design:returntype", Promise)], ax.prototype, "handleIsWindowFocus", null);
    i([(0, am.IpcInvoke)("window/isVisible", {
      withSync: true
    }), h.plqYX(j, "design:type", Function), j("design:paramtypes", [typeof (E = typeof av.IpcMainEvent !== h.uEMFv && av.IpcMainEvent) === "function" ? E : Object]), j("design:returntype", Promise)], ax.prototype, "handleIsWindowVisible", null);
    i([(0, am.IpcInvoke)("window/hide"), j("design:type", Function), j("design:paramtypes", [typeof (F = typeof av.IpcMainInvokeEvent !== "undefined" && av.IpcMainInvokeEvent) === "function" ? F : Object]), j("design:returntype", Promise)], ax.prototype, "handleHideWindow", null);
    i([(0, am.IpcInvoke)("window/show"), j("design:type", Function), j("design:paramtypes", [h.dWAoO(typeof (G = typeof av.IpcMainInvokeEvent !== "undefined" && av.IpcMainInvokeEvent), "function") ? G : Object]), j("design:returntype", Promise)], ax.prototype, "handleShowWindow", null);
    i([(0, am.IpcInvoke)("window/pin"), h.MeTJs(j, "design:type", Function), j(h.cVVXP, [typeof (H = typeof av.IpcMainInvokeEvent !== "undefined" && av.IpcMainInvokeEvent) === "function" ? H : Object, typeof (I = typeof aw.AppWindow !== "undefined" && aw.AppWindow) === "function" ? I : Object]), j("design:returntype", Promise)], ax.prototype, "handlePinWindow", null);
    i([(0, am.IpcInvoke)(h.IWYdK), j(h.cEowF, Function), j("design:paramtypes", [typeof (J = typeof av.IpcMainInvokeEvent !== h.uEMFv && av.IpcMainInvokeEvent) === "function" ? J : Object, typeof (K = typeof aw.AppWindow !== "undefined" && aw.AppWindow) === "function" ? K : Object]), j("design:returntype", Promise)], ax.prototype, h.ykPvQ, null);
    i([(0, am.IpcInvoke)("window/isPined", {
      withSync: true
    }), j("design:type", Function), j("design:paramtypes", [typeof (L = typeof av.IpcMainEvent !== "undefined" && av.IpcMainEvent) === "function" ? L : Object]), j("design:returntype", Promise)], ax.prototype, "handleGetIsPined", null);
    i([(0, am.IpcInvoke)("window/setAlwaysOnTop"), j("design:type", Function), j(h.cVVXP, [typeof (M = typeof av.IpcMainInvokeEvent !== "undefined" && av.IpcMainInvokeEvent) === "function" ? M : Object, Boolean]), j("design:returntype", Promise)], ax.prototype, "handleSetAlwaysOnTop", null);
    i([(0, am.IpcInvoke)(h.PWzri), j(h.cEowF, Function), j("design:paramtypes", [typeof (N = typeof av.IpcMainInvokeEvent !== "undefined" && av.IpcMainInvokeEvent) === "function" ? N : Object]), j(h.dcrcs, Promise)], ax.prototype, "handleMinimize", null);
    i([(0, am.IpcInvoke)("window/isMinimized", {
      withSync: true
    }), h.GUMpp(j, "design:type", Function), j("design:paramtypes", [typeof (O = typeof av.IpcMainEvent !== "undefined" && av.IpcMainEvent) === "function" ? O : Object]), j("design:returntype", Promise)], ax.prototype, "handleIsMinimized", null);
    i([(0, am.IpcInvoke)("window/restore"), j("design:type", Function), h.GUMpp(j, "design:paramtypes", [typeof (P = typeof av.IpcMainInvokeEvent !== "undefined" && av.IpcMainInvokeEvent) === "function" ? P : Object]), j("design:returntype", Promise)], ax.prototype, "handleRestore", null);
    i([(0, am.IpcInvoke)("window/maximize"), j("design:type", Function), j("design:paramtypes", [typeof (Q = typeof av.IpcMainInvokeEvent !== "undefined" && av.IpcMainInvokeEvent) === "function" ? Q : Object]), j("design:returntype", Promise)], ax.prototype, "handleMaximize", null);
    i([(0, am.IpcInvoke)("window/unmaximize"), j("design:type", Function), j("design:paramtypes", [typeof (R = h.zJLJf(typeof av.IpcMainInvokeEvent, "undefined") && av.IpcMainInvokeEvent) === "function" ? R : Object]), j("design:returntype", Promise)], ax.prototype, "handleUnmaximize", null);
    i([(0, am.IpcInvoke)("window/isMaximized", {
      withSync: true
    }), h.tWsbG(j, "design:type", Function), j("design:paramtypes", [typeof (S = typeof av.IpcMainEvent !== "undefined" && av.IpcMainEvent) === "function" ? S : Object]), j("design:returntype", Promise)], ax.prototype, "handleIsMaximized", null);
    h.jrjPS(i, [(0, am.IpcInvoke)("window/toggleMaximize"), j("design:type", Function), j("design:paramtypes", [typeof (T = typeof av.IpcMainInvokeEvent !== "undefined" && av.IpcMainInvokeEvent) === "function" ? T : Object]), j("design:returntype", Promise)], ax.prototype, "handleToggleMaximize", null);
    h.jrjPS(i, [(0, am.IpcInvoke)("window/setFullScreen"), j("design:type", Function), j("design:paramtypes", [typeof (U = typeof av.IpcMainInvokeEvent !== "undefined" && av.IpcMainInvokeEvent) === "function" ? U : Object, Boolean]), h.RabuZ(j, "design:returntype", Promise)], ax.prototype, "handleSetFullScreen", null);
    h.jrjPS(i, [(0, am.IpcInvoke)("window/isFullScreen", {
      withSync: true
    }), j("design:type", Function), j(h.cVVXP, [typeof (V = typeof av.IpcMainEvent !== "undefined" && av.IpcMainEvent) === "function" ? V : Object]), j("design:returntype", Promise)], ax.prototype, "handleGetIsFullScreen", null);
    i([(0, am.IpcInvoke)("window/oneTimeFullScreen"), j("design:type", Function), h.vMuSy(j, "design:paramtypes", [typeof (W = typeof av.IpcMainEvent !== "undefined" && av.IpcMainEvent) === "function" ? W : Object]), j("design:returntype", Promise)], ax.prototype, "handleOneTimeFullScreen", null);
    i([(0, am.IpcInvoke)("window/reload"), h.QCkCq(j, "design:type", Function), j("design:paramtypes", [typeof (X = typeof av.IpcMainInvokeEvent !== "undefined" && av.IpcMainInvokeEvent) === "function" ? X : Object]), j("design:returntype", Promise)], ax.prototype, "handleWindowReload", null);
    i([(0, am.IpcInvoke)("window/replace"), j("design:type", Function), j("design:paramtypes", [typeof (Y = typeof av.IpcMainInvokeEvent !== h.uEMFv && av.IpcMainInvokeEvent) === "function" ? Y : Object, Object]), j("design:returntype", Promise)], ax.prototype, "handleReplaceWindow", null);
    h.jrjPS(i, [(0, am.IpcInvoke)("window/setAllowOpenUrls"), h.QLWjR(j, "design:type", Function), j("design:paramtypes", [typeof (Z = typeof av.IpcMainInvokeEvent !== "undefined" && av.IpcMainInvokeEvent) === "function" ? Z : Object, typeof (a0 = typeof aw.AllowOpenOptions !== "undefined" && aw.AllowOpenOptions) === "function" ? a0 : Object]), j("design:returntype", Promise)], ax.prototype, "handleSetAllowOpenUrls", null);
    i([(0, am.IpcInvoke)("window/openInBrowser"), h.QpZkg(j, "design:type", Function), j("design:paramtypes", [typeof (a1 = typeof av.IpcMainInvokeEvent !== "undefined" && av.IpcMainInvokeEvent) === "function" ? a1 : Object, String, String]), j("design:returntype", Promise)], ax.prototype, "handleOpenInBrowser", null);
    i([(0, am.IpcInvoke)("window/capturePage"), j("design:type", Function), j(h.cVVXP, [typeof (a2 = typeof av.IpcMainEvent !== h.uEMFv && av.IpcMainEvent) === "function" ? a2 : Object]), j("design:returntype", Promise)], ax.prototype, "handleCapturePage", null);
    i([(0, am.IpcInvoke)("window/desktopCapturer", {
      scope: "liveNowWindow"
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], ax.prototype, "handleDesktopCapturer", null);
    i([(0, am.IpcInvoke)("window/getVisibleWinNum", {
      withSync: true,
      withAsync: false
    }), j("design:type", Function), j("design:paramtypes", [typeof (a3 = typeof av.IpcMainEvent !== "undefined" && av.IpcMainEvent) === "function" ? a3 : Object]), j("design:returntype", Promise)], ax.prototype, "handleGetOpendWinNum", null);
    i([(0, am.IpcInvoke)("window/reloadWindow"), j("design:type", Function), j(h.cVVXP, [typeof (a4 = typeof av.IpcMainInvokeEvent !== "undefined" && av.IpcMainInvokeEvent) === h.HecJo ? a4 : Object]), j("design:returntype", Promise)], ax.prototype, "handleReloadWindow", null);
    i([(0, am.IpcInvoke)("window/resetStatus", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], ax.prototype, "handleResetStatus", null);
    i([(0, am.IpcInvoke)(h.rPpdM), j("design:type", Function), h.vMuSy(j, "design:paramtypes", [typeof (a5 = typeof av.IpcMainEvent !== "undefined" && av.IpcMainEvent) === "function" ? a5 : Object, Object]), j("design:returntype", Promise)], ax.prototype, "handleOpenMainWindow", null);
    i([(0, am.IpcInvoke)("window/openMainWindowPage"), j(h.cEowF, Function), j("design:paramtypes", [Object, typeof (a6 = typeof aw.OpenMainPageInfo !== "undefined" && aw.OpenMainPageInfo) === "function" ? a6 : Object]), j("design:returntype", Promise)], ax.prototype, h.ytsvR, null);
    i([(0, am.IpcInvoke)("window/splashWindowReady", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", []), h.MeTJs(j, "design:returntype", Promise)], ax.prototype, "handleSplashWindowReady", null);
    i([(0, am.IpcInvoke)("window/mainWindowReady", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", []), h.JhCVg(j, "design:returntype", Promise)], ax.prototype, "handleMainWindowReady", null);
    i([(0, am.IpcInvoke)("window/searchPageReady", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], ax.prototype, "handleSearchPageReady", null);
    h.uTgQO(i, [(0, am.IpcInvoke)("window/miniMainWindow", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], ax.prototype, h.MqjCF, null);
    h.NUDBD(i, [(0, am.IpcInvoke)("window/unminiMainWindow", {
      scope: "mainWindow"
    }), h.SEqID(j, "design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], ax.prototype, "handleUnminiMainWindow", null);
    h.NUDBD(i, [(0, am.IpcInvoke)("window/isMainWindowMini", {
      withSync: true,
      withAsync: false,
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [typeof (a7 = typeof av.IpcMainEvent !== "undefined" && av.IpcMainEvent) === "function" ? a7 : Object]), j("design:returntype", undefined)], ax.prototype, "handleIsMainWindowMini", null);
    i([(0, am.IpcInvoke)(h.XRujP, {
      scope: "mainWindow"
    }), j(h.cEowF, Function), j("design:paramtypes", []), j("design:returntype", Promise)], ax.prototype, "handleMainWindowMouseEnter", null);
    i([(0, am.IpcInvoke)("window/setMainVideoSize", {
      scope: "mainWindow"
    }), h.ljlWP(j, "design:type", Function), j("design:paramtypes", [Object, typeof (a8 = typeof aw.Nullable !== "undefined" && aw.Nullable) === "function" ? a8 : Object]), j("design:returntype", Promise)], ax.prototype, "handleSetMainVideoSize", null);
    i([(0, am.IpcInvoke)("window/setMiniMainBtnsVisible", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, Boolean]), j(h.dcrcs, Promise)], ax.prototype, "handleSetMiniMainBtnsVisible", null);
    i([(0, am.IpcInvoke)("window/playerWindowReady"), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], ax.prototype, "handlePlayerWindowReady", null);
    i([(0, am.IpcInvoke)("window/openPlayerWindow"), j("design:type", Function), j(h.cVVXP, [Object, typeof (a9 = typeof aw.OpenPlayerParams !== "undefined" && aw.OpenPlayerParams) === "function" ? a9 : Object]), j("design:returntype", Promise)], ax.prototype, h.wfZAO, null);
    i([(0, am.IpcInvoke)("window/focusPlayerWindow"), h.rgtEH(j, "design:type", Function), j(h.cVVXP, []), j("design:returntype", Promise)], ax.prototype, "handleShowPlayerWindow", null);
    i([(0, am.IpcInvoke)("window/isPlayerWindowVisible", {
      withSync: true,
      withAsync: false
    }), j("design:type", Function), j("design:paramtypes", [typeof (aa = typeof av.IpcMainEvent !== h.uEMFv && av.IpcMainEvent) === "function" ? aa : Object]), j("design:returntype", Promise)], ax.prototype, "handleIsPlayerWindowVisiable", null);
    i([(0, am.IpcInvoke)("window/pinPlayerWindow", {
      scope: "playerWindow"
    }), j("design:type", Function), j(h.cVVXP, []), j("design:returntype", Promise)], ax.prototype, "handlePinPlayerWindow", null);
    i([(0, am.IpcInvoke)("window/unpinPlayerWindow", {
      scope: "playerWindow"
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], ax.prototype, "handleUnpinPlayerWindow", null);
    h.QdBUA(i, [(0, am.IpcInvoke)("window/stretchPlayerWindow", {
      scope: "playerWindow"
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], ax.prototype, "handleStretchPlareWindow", null);
    i([(0, am.IpcInvoke)("window/miniPlayerWindow", {
      scope: "playerWindow"
    }), j("design:type", Function), j(h.cVVXP, []), j("design:returntype", Promise)], ax.prototype, "handleMiniPlayerWindow", null);
    i([(0, am.IpcInvoke)("window/unminiPlayerWindow", {
      scope: "playerWindow"
    }), j("design:type", Function), h.lujHp(j, "design:paramtypes", []), j("design:returntype", Promise)], ax.prototype, "handleUnminiPlayerWindow", null);
    i([(0, am.IpcInvoke)("window/isMiniPlayerMode", {
      withSync: true,
      withAsync: false,
      scope: "playerWindow"
    }), h.SEqID(j, "design:type", Function), j("design:paramtypes", [h.dWAoO(typeof (ab = typeof av.IpcMainEvent !== "undefined" && av.IpcMainEvent), "function") ? ab : Object]), j("design:returntype", undefined)], ax.prototype, "handleIsMiniPlayerMode", null);
    i([(0, am.IpcInvoke)(h.LlqaQ, {
      scope: "playerWindow"
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], ax.prototype, "handlePlayerWinodwMouseEnter", null);
    i([(0, am.IpcInvoke)("window/setPlayerVideoSize", {
      scope: "playerWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, typeof (ac = typeof aw.Nullable !== h.uEMFv && aw.Nullable) === h.HecJo ? ac : Object]), j("design:returntype", Promise)], ax.prototype, "handleSetPlayerVideoSize", null);
    i([(0, am.IpcInvoke)("window/setMiniPlayerBtnsVisible", {
      scope: "playerWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, Boolean]), h.BTXNs(j, "design:returntype", Promise)], ax.prototype, "handleSetMiniPlayerBtnsVisible", null);
    i([(0, am.IpcInvoke)("window/checkPlayerWindowStatus", {
      scope: "playerWindow"
    }), j("design:type", Function), j("design:paramtypes", []), j(h.dcrcs, Promise)], ax.prototype, "handleCheckPlayerWindowStatus", null);
    i([(0, am.IpcInvoke)("window/openLiveNowWindow"), j("design:type", Function), h.wxhEz(j, h.cVVXP, []), h.QpZkg(j, h.dcrcs, Promise)], ax.prototype, "handleOpenLiveNowWindow", null);
    i([(0, am.IpcInvoke)("window/openLiveRoomWindow"), j("design:type", Function), j("design:paramtypes", [Object, String, Object]), h.UwFYo(j, "design:returntype", Promise)], ax.prototype, "handleOpenLiveRoomWindow", null);
    i([(0, am.IpcInvoke)(h.KqMnJ), j("design:type", Function), h.rgtEH(j, "design:paramtypes", []), j("design:returntype", Promise)], ax.prototype, "handleFocusLiveRoomWindow", null);
    i([(0, am.IpcInvoke)("window/isLiveRoomWindowVisible", {
      withSync: true,
      withAsync: false
    }), j("design:type", Function), j("design:paramtypes", [typeof (ad = typeof av.IpcMainEvent !== "undefined" && av.IpcMainEvent) === "function" ? ad : Object]), j("design:returntype", Promise)], ax.prototype, "handleIsLiveRoomWindowVisiable", null);
    i([(0, am.IpcInvoke)("window/isLiveRoomWindowOpened", {
      withSync: true,
      withAsync: false
    }), j("design:type", Function), j("design:paramtypes", [typeof (ae = typeof av.IpcMainEvent !== "undefined" && av.IpcMainEvent) === "function" ? ae : Object]), j("design:returntype", Promise)], ax.prototype, "handleIsLiveRoomWindowOpened", null);
    i([(0, am.IpcInvoke)("window/setLiveRoomWindowOpened"), j("design:type", Function), h.hMqnh(j, "design:paramtypes", []), j("design:returntype", Promise)], ax.prototype, "handleSetLiveRoomWindowOpened", null);
    i([(0, am.IpcInvoke)(h.rsrOK), j("design:type", Function), j("design:paramtypes", [Object, typeof (af = typeof aw.OpenUniversalParams !== h.uEMFv && aw.OpenUniversalParams) === "function" ? af : Object]), j("design:returntype", Promise)], ax.prototype, "handleOpenUniversalWindow", null);
    i([(0, am.IpcInvoke)("window/getUniversalParams"), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], ax.prototype, h.iVJPj, null);
    i([(0, am.IpcInvoke)("window/launchUniversalAction"), h.tWsbG(j, "design:type", Function), j(h.cVVXP, [Object, h.dWAoO(typeof (ag = h.zJLJf(typeof aw.UniversalActionParams, "undefined") && aw.UniversalActionParams), "function") ? ag : Object]), j("design:returntype", Promise)], ax.prototype, "handleLaunchUniversalAction", null);
    i([(0, am.IpcInvoke)("window/openUploadWindow"), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], ax.prototype, "handleOpenUploadWindow", null);
    i([(0, am.IpcInvoke)("window/biliPetAction"), j("design:type", Function), j(h.cVVXP, [Object, typeof (ah = typeof aw.IBiliPetAction !== "undefined" && aw.IBiliPetAction) === "function" ? ah : Object]), j("design:returntype", Promise)], ax.prototype, "handleBiliPetAction", null);
    h.NUDBD(i, [(0, am.IpcInvoke)("window/isBiliPetVisible", {
      withSync: true,
      withAsync: false
    }), j("design:type", Function), j("design:paramtypes", [typeof (ai = typeof av.IpcMainEvent !== "undefined" && av.IpcMainEvent) === "function" ? ai : Object]), j("design:returntype", Promise)], ax.prototype, "handleGetIsBiliPetVisible", null);
    i([(0, am.IpcInvoke)("window/togglePinPetWindow", {
      scope: "biliPetWindow"
    }), j("design:type", Function), j(h.cVVXP, []), j("design:returntype", Promise)], ax.prototype, "handleTogglePinPetWindow", null);
    i([(0, am.IpcInvoke)("window/setIgnoreMouseEvents", {
      scope: "biliPetWindow"
    }), j("design:type", Function), j("design:paramtypes", [typeof (aj = typeof av.IpcMainEvent !== "undefined" && av.IpcMainEvent) === "function" ? aj : Object, Boolean, Object]), j("design:returntype", Promise)], ax.prototype, "handleSetIgnoreMouseEvents", null);
    h.uTgQO(i, [(0, am.IpcInvoke)("window/handleMovePetWindow", {
      scope: "biliPetWindow"
    }), j("design:type", Function), j("design:paramtypes", [typeof (ak = typeof av.IpcMainEvent !== "undefined" && av.IpcMainEvent) === "function" ? ak : Object, Boolean]), j("design:returntype", Promise)], ax.prototype, "handleMovePetWindow", null);
    i([(0, am.IpcInvoke)("window/openAppLogWindow", {
      devOnly: true
    }), j("design:type", Function), h.ljlWP(j, h.cVVXP, [Object]), j("design:returntype", Promise)], ax.prototype, "handleOpenAppLogWindow", null);
    i([(0, am.IpcInvoke)("window/openDemoWindow", {
      devOnly: true
    }), j(h.cEowF, Function), j(h.cVVXP, [Object, Object]), j("design:returntype", Promise)], ax.prototype, h.KcPZx, null);
    i([(0, am.IpcInvoke)("window/closeDemoWindow", {
      devOnly: true
    }), j("design:type", Function), j(h.cVVXP, []), j("design:returntype", Promise)], ax.prototype, h.YqoGT, null);
    i([(0, am.IpcInvoke)("window/openDemoWindowDevTools", {
      devOnly: true
    }), h.VSmie(j, "design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], ax.prototype, h.wFiFi, null);
    i([(0, am.IpcInvoke)("window/closeDemoWindowDevTools", {
      devOnly: true
    }), j(h.cEowF, Function), j("design:paramtypes", []), j("design:returntype", Promise)], ax.prototype, "handleCloseTestWindowDevTools", null);
    ax = h.JhCVg(i, [(0, al.Controller)(), j("design:paramtypes", [typeof (k = typeof an.ConfigService !== h.uEMFv && an.ConfigService) === "function" ? k : Object, typeof (l = typeof ao.WindowFactory !== "undefined" && ao.WindowFactory) === "function" ? l : Object, typeof (m = typeof ap.WindowService !== "undefined" && ap.WindowService) === "function" ? m : Object, typeof (n = typeof aq.StoreService !== "undefined" && aq.StoreService) === "function" ? n : Object, typeof (o = typeof ar.EventsService !== "undefined" && ar.EventsService) === "function" ? o : Object, typeof (q = typeof as.SystemService !== h.uEMFv && as.SystemService) === "function" ? q : Object, typeof (r = typeof at.UtilsService !== "undefined" && at.UtilsService) === "function" ? r : Object])], ax);
    g.WindowController = ax;
  }
});
var ju = bX({
  ""(g) {
    'use strict';

    var i = g && g.__decorate || function (q, t, u, w) {
      var z = arguments.length;
      var A = z < 3 ? t : w === null ? w = Object.getOwnPropertyDescriptor(t, u) : w;
      var B;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        A = Reflect.decorate(q, t, u, w);
      } else {
        for (var C = q.length - 1; C >= 0; C--) {
          if (B = q[C]) {
            A = (z < 3 ? B(A) : z > 3 ? B(t, u, A) : B(t, u)) || A;
          }
        }
      }
      if (z > 3 && A) {
        Object.defineProperty(t, u, A);
      }
      return A;
    };
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.WindowModule = undefined;
    var j = require("@nestjs/common");
    var k = jt();
    var l = je();
    var m = jg();
    var n = jf();
    var o = class q {};
    o = i([(0, j.Global)(), (0, j.Module)({
      controllers: [k.WindowController],
      providers: [n.WindowFactory, m.WindowService, l.WindowEvents],
      exports: [n.WindowFactory, m.WindowService, l.WindowEvents]
    })], o);
    g.WindowModule = o;
  }
});
var jv = bX({
  ""(g) {
    'use strict';

    var i = g && g.__decorate || function (n, o, q, t) {
      var u = arguments.length;
      var w = u < 3 ? o : t === null ? t = Object.getOwnPropertyDescriptor(o, q) : t;
      var z;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        w = Reflect.decorate(n, o, q, t);
      } else {
        for (var A = n.length - 1; A >= 0; A--) {
          if (z = n[A]) {
            w = (u < 3 ? z(w) : u > 3 ? z(o, q, w) : z(o, q)) || w;
          }
        }
      }
      if (u > 3 && w) {
        Object.defineProperty(o, q, w);
      }
      return w;
    };
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.UtilsModule = undefined;
    var j = require("@nestjs/common");
    var k = iy();
    var l = ix();
    var m = class n {};
    m = i([(0, j.Global)(), (0, j.Module)({
      providers: [l.UtilsService, k.HelpService],
      exports: [l.UtilsService, k.HelpService]
    })], m);
    g.UtilsModule = m;
  }
});
var jw = bX({
  ""(g) {
    'use strict';

    var i = g && g.__decorate || function (z, A, B, C) {
      var D = arguments.length;
      var E = D < 3 ? A : C === null ? C = Object.getOwnPropertyDescriptor(A, B) : C;
      var F;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        E = Reflect.decorate(z, A, B, C);
      } else {
        for (var G = z.length - 1; G >= 0; G--) {
          if (F = z[G]) {
            E = (D < 3 ? F(E) : D > 3 ? F(A, B, E) : F(A, B)) || E;
          }
        }
      }
      if (D > 3 && E) {
        Object.defineProperty(A, B, E);
      }
      return E;
    };
    var j = g && g.__metadata || function (z, A) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(z, A);
      }
    };
    var k;
    var l;
    var m;
    var n;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.StoreController = undefined;
    var o = require("@nestjs/common");
    ga();
    var q = c2(g9);
    var r = gK();
    var t = io();
    var u = require("electron");
    var w = class z extends q.BaseController {
      constructor(A, B) {
        super(A, "StoreController");
        c3(this, "configService");
        c3(this, "storeService");
        this.configService = A;
        this.storeService = B;
      }
      async handleGetData(A, B) {
        const C = this.storeService.getDataStoreKey(B);
        A.returnValue = this.storeService.dataStore.get(C);
        return A.returnValue;
      }
      async handleSetData(A, B, C) {
        const D = this.storeService.getDataStoreKey(B);
        this.storeService.dataStore.set(D, C);
      }
      async handleRemoveData(A, B) {
        const C = this.storeService.getDataStoreKey(B);
        this.storeService.dataStore.delete(C);
      }
      async handleGetAllKeys(A) {
        const B = Object.keys(this.storeService.dataStore.store);
        A.returnValue = B.map(C => this.storeService.getDataStoreOriginKey(C));
        return A.returnValue;
      }
    };
    i([(0, q.IpcInvoke)("store/getData", {
      withSync: true
    }), j("design:type", Function), j("design:paramtypes", [typeof (m = typeof u.IpcMainEvent !== "undefined" && u.IpcMainEvent) === "function" ? m : Object, String]), j("design:returntype", Promise)], w.prototype, "handleGetData", null);
    i([(0, q.IpcInvoke)("store/setData"), j("design:type", Function), j("design:paramtypes", [Object, String, Object]), j("design:returntype", Promise)], w.prototype, "handleSetData", null);
    i([(0, q.IpcInvoke)("store/removeData"), j("design:type", Function), j("design:paramtypes", [Object, String]), j("design:returntype", Promise)], w.prototype, "handleRemoveData", null);
    i([(0, q.IpcInvoke)("store/getAllKeys", {
      withSync: true
    }), j("design:type", Function), j("design:paramtypes", [typeof (n = typeof u.IpcMainEvent !== "undefined" && u.IpcMainEvent) === "function" ? n : Object]), j("design:returntype", Promise)], w.prototype, "handleGetAllKeys", null);
    w = i([(0, o.Controller)(), j("design:paramtypes", [typeof (k = typeof r.ConfigService !== "undefined" && r.ConfigService) === "function" ? k : Object, typeof (l = typeof t.StoreService !== "undefined" && t.StoreService) === "function" ? l : Object])], w);
    g.StoreController = w;
  }
});
var jx = bX({
  ""(g) {
    'use strict';

    var i = g && g.__decorate || function (n, o, q, t) {
      var u = arguments.length;
      var w = u < 3 ? o : t === null ? t = Object.getOwnPropertyDescriptor(o, q) : t;
      var z;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        w = Reflect.decorate(n, o, q, t);
      } else {
        for (var A = n.length - 1; A >= 0; A--) {
          if (z = n[A]) {
            w = (u < 3 ? z(w) : u > 3 ? z(o, q, w) : z(o, q)) || w;
          }
        }
      }
      if (u > 3 && w) {
        Object.defineProperty(o, q, w);
      }
      return w;
    };
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.StoreModule = undefined;
    var j = require("@nestjs/common");
    var k = jw();
    var l = io();
    var m = class n {};
    m = i([(0, j.Global)(), (0, j.Module)({
      controllers: [k.StoreController],
      providers: [l.StoreService],
      exports: [l.StoreService]
    })], m);
    g.StoreModule = m;
  }
});
var jy = bX({
  ""(g) {
    'use strict';

    var i = g && g.__decorate || function (t, u, w, z) {
      var A = arguments.length;
      var B = A < 3 ? u : z === null ? z = Object.getOwnPropertyDescriptor(u, w) : z;
      var C;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        B = Reflect.decorate(t, u, w, z);
      } else {
        for (var D = t.length - 1; D >= 0; D--) {
          if (C = t[D]) {
            B = (A < 3 ? C(B) : A > 3 ? C(u, w, B) : C(u, w)) || B;
          }
        }
      }
      if (A > 3 && B) {
        Object.defineProperty(u, w, B);
      }
      return B;
    };
    var j = g && g.__metadata || function (t, u) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(t, u);
      }
    };
    var k;
    var l;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.EventsController = undefined;
    var m = require("@nestjs/common");
    ga();
    var n = c2(g9);
    var o = gP();
    var q = gK();
    var r = class t extends n.BaseController {
      constructor(u, w) {
        super(u, "EventsController");
        c3(this, "configService");
        c3(this, "eventsService");
        this.configService = u;
        this.eventsService = w;
      }
      async handleFollowUser(u, w) {
        this.eventsService.emitFollowUsersChange(true, w);
      }
      async handleUnfollowUser(u, w) {
        this.eventsService.emitFollowUsersChange(false, w);
      }
      async handleAddWatchLater(u, w) {
        this.eventsService.emitAddWatchLater(w);
      }
      async handleReceiveNewMessages(u, w) {
        this.eventsService.emitReceiveNewMessages(w);
      }
    };
    i([(0, n.IpcInvoke)("events/sendFollowUsers"), j("design:type", Function), j("design:paramtypes", [Object, Array]), j("design:returntype", Promise)], r.prototype, "handleFollowUser", null);
    i([(0, n.IpcInvoke)("events/sendUnfollowUsers"), j("design:type", Function), j("design:paramtypes", [Object, Array]), j("design:returntype", Promise)], r.prototype, "handleUnfollowUser", null);
    i([(0, n.IpcInvoke)("events/addWatchLater"), j("design:type", Function), j("design:paramtypes", [Object, Object]), j("design:returntype", Promise)], r.prototype, "handleAddWatchLater", null);
    i([(0, n.IpcInvoke)("events/newMessages"), j("design:type", Function), j("design:paramtypes", [Object, Object]), j("design:returntype", Promise)], r.prototype, "handleReceiveNewMessages", null);
    r = i([(0, m.Controller)(), j("design:paramtypes", [typeof (k = typeof q.ConfigService !== "undefined" && q.ConfigService) === "function" ? k : Object, typeof (l = typeof o.EventsService !== "undefined" && o.EventsService) === "function" ? l : Object])], r);
    g.EventsController = r;
  }
});
var jz = bX({
  ""(g) {
    'use strict';

    var o = g && g.__decorate || function (t, u, w, z) {
      var A = arguments.length;
      var B = A < 3 ? u : z === null ? z = Object.getOwnPropertyDescriptor(u, w) : z;
      var C;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        B = Reflect.decorate(t, u, w, z);
      } else {
        for (var D = t.length - 1; D >= 0; D--) {
          if (C = t[D]) {
            B = (A < 3 ? C(B) : A > 3 ? C(u, w, B) : C(u, w)) || B;
          }
        }
      }
      if (A > 3 && B) {
        Object.defineProperty(u, w, B);
      }
      return B;
    };
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.EventsModule = undefined;
    var q = require("@nestjs/common");
    var m = jy();
    var l = gP();
    var n = class r {};
    n = o([(0, q.Global)(), (0, q.Module)({
      controllers: [m.EventsController],
      providers: [l.EventsService],
      exports: [l.EventsService]
    })], n);
    g.EventsModule = n;
  }
});
var jA = bX({
  ""(g) {
    'use strict';

    var i = g && g.__decorate || function (m, n, o, q) {
      var t = arguments.length;
      var u = t < 3 ? n : q === null ? q = Object.getOwnPropertyDescriptor(n, o) : q;
      var w;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        u = Reflect.decorate(m, n, o, q);
      } else {
        for (var z = m.length - 1; z >= 0; z--) {
          if (w = m[z]) {
            u = (t < 3 ? w(u) : t > 3 ? w(n, o, u) : w(n, o)) || u;
          }
        }
      }
      if (t > 3 && u) {
        Object.defineProperty(n, o, u);
      }
      return u;
    };
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.FetchModule = undefined;
    var j = require("@nestjs/common");
    var k = iu();
    var l = class m {};
    l = i([(0, j.Global)(), (0, j.Module)({
      providers: [k.FetchService],
      exports: [k.FetchService]
    })], l);
    g.FetchModule = l;
  }
});
var jB = bX({
  ""(g) {
    'use strict';

    var i = g && g.__decorate || function (C, D, E, F) {
      var G = arguments.length;
      var H = G < 3 ? D : F === null ? F = Object.getOwnPropertyDescriptor(D, E) : F;
      var I;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        H = Reflect.decorate(C, D, E, F);
      } else {
        for (var J = C.length - 1; J >= 0; J--) {
          if (I = C[J]) {
            H = (G < 3 ? I(H) : G > 3 ? I(D, E, H) : I(D, E)) || H;
          }
        }
      }
      if (G > 3 && H) {
        Object.defineProperty(D, E, H);
      }
      return H;
    };
    var j = g && g.__metadata || function (C, D) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(C, D);
      }
    };
    var k;
    var l;
    var m;
    var n;
    var o;
    var q;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.ReportController = undefined;
    var r = require("@nestjs/common");
    ga();
    var t = c2(g9);
    var u = iM();
    var w = gK();
    gz();
    var z = c2(gy);
    var A = require("electron");
    var B = class C extends t.BaseController {
      constructor(D, E) {
        super(D, "ReportController");
        c3(this, "configService");
        c3(this, "reportService");
        this.configService = D;
        this.reportService = E;
      }
      async handleCustomReport(D, [E, F]) {
        this.reportService.report(E, F);
      }
      async handleReportCustomData(D, E, F) {
        this.reportService.reportCustomData(E, F);
      }
      async handleReportMainLog() {
        this.reportService.reportMainAppLog();
      }
      async handleSavePlayerLog(D, E) {
        this.reportService.savePlayerLog(E);
      }
    };
    i([(0, t.IpcInvoke)("report/customReport"), j("design:type", Function), j("design:paramtypes", [typeof (m = typeof A.IpcMainInvokeEvent !== "undefined" && A.IpcMainInvokeEvent) === "function" ? m : Object, Array]), j("design:returntype", Promise)], B.prototype, "handleCustomReport", null);
    i([(0, t.IpcInvoke)("report/reportCustomData"), j("design:type", Function), j("design:paramtypes", [typeof (n = typeof A.IpcMainInvokeEvent !== "undefined" && A.IpcMainInvokeEvent) === "function" ? n : Object, String, typeof (o = typeof z.ICustomReport !== "undefined" && z.ICustomReport) === "function" ? o : Object]), j("design:returntype", Promise)], B.prototype, "handleReportCustomData", null);
    i([(0, t.IpcInvoke)("report/reportMainAppLog"), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], B.prototype, "handleReportMainLog", null);
    i([(0, t.IpcInvoke)("report/savePlayerLog"), j("design:type", Function), j("design:paramtypes", [typeof (q = typeof A.IpcMainInvokeEvent !== "undefined" && A.IpcMainInvokeEvent) === "function" ? q : Object, String]), j("design:returntype", Promise)], B.prototype, "handleSavePlayerLog", null);
    B = i([(0, r.Controller)(), j("design:paramtypes", [typeof (k = typeof w.ConfigService !== "undefined" && w.ConfigService) === "function" ? k : Object, typeof (l = typeof u.ReportService !== "undefined" && u.ReportService) === "function" ? l : Object])], B);
    g.ReportController = B;
  }
});
var jC = bX({
  ""(g) {
    'use strict';

    var h = g && g.__decorate || function (m, n, o, q) {
      var t = arguments.length;
      var u = t < 3 ? n : q === null ? q = Object.getOwnPropertyDescriptor(n, o) : q;
      var w;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        u = Reflect.decorate(m, n, o, q);
      } else {
        for (var z = m.length - 1; z >= 0; z--) {
          if (w = m[z]) {
            u = (t < 3 ? w(u) : t > 3 ? w(n, o, u) : w(n, o)) || u;
          }
        }
      }
      if (t > 3 && u) {
        Object.defineProperty(n, o, u);
      }
      return u;
    };
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.ReportModule = undefined;
    var i = require("@nestjs/common");
    var j = jB();
    var k = iM();
    var l = class m {};
    l = h([(0, i.Global)(), (0, i.Module)({
      controllers: [j.ReportController],
      providers: [k.ReportService],
      exports: [k.ReportService]
    })], l);
    g.ReportModule = l;
  }
});
var jD = bX({
  ""(g) {
    'use strict';

    var i = g && g.__decorate || function (a0, a1, a2, a3) {
      var a4 = arguments.length;
      var a5 = a4 < 3 ? a1 : a3 === null ? a3 = Object.getOwnPropertyDescriptor(a1, a2) : a3;
      var a6;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        a5 = Reflect.decorate(a0, a1, a2, a3);
      } else {
        for (var a7 = a0.length - 1; a7 >= 0; a7--) {
          if (a6 = a0[a7]) {
            a5 = (a4 < 3 ? a6(a5) : a4 > 3 ? a6(a1, a2, a5) : a6(a1, a2)) || a5;
          }
        }
      }
      if (a4 > 3 && a5) {
        Object.defineProperty(a1, a2, a5);
      }
      return a5;
    };
    var j = g && g.__metadata || function (a0, a1) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(a0, a1);
      }
    };
    var k;
    var l;
    var m;
    var n;
    var o;
    var q;
    var r;
    var t;
    var u;
    var w;
    var z;
    var A;
    var B;
    var C;
    var D;
    var E;
    var F;
    var G;
    var H;
    var I;
    var J;
    var K;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.AuthController = undefined;
    var L = require("@nestjs/common");
    ga();
    var M = c2(g9);
    var N = iz();
    var O = jf();
    var P = io();
    var Q = gK();
    var R = jg();
    var S = gP();
    var T = iM();
    var U = iw();
    var V = iy();
    var W = require("electron");
    gJ();
    var X = c2(gI);
    var Y = require("@bilibili/b-utils-core");
    var Z = class a0 extends M.BaseController {
      constructor(a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        super(a1, "AuthController");
        c3(this, "configService");
        c3(this, "authService");
        c3(this, "windowService");
        c3(this, "windowFactory");
        c3(this, "storeService");
        c3(this, "eventsService");
        c3(this, "reportService");
        c3(this, "gaiaService");
        c3(this, "helpService");
        c3(this, "isOnRefreshBigVipInfo", false);
        this.configService = a1;
        this.authService = a2;
        this.windowService = a3;
        this.windowFactory = a4;
        this.storeService = a5;
        this.eventsService = a6;
        this.reportService = a7;
        this.gaiaService = a8;
        this.helpService = a9;
      }
      async handleRequestLogin(a1, a2) {
        this.log.info("Request login!");
        const a3 = this.storeService.getUserInfo();
        if (!a3.isLogin) {
          this.windowFactory.createOrFocusLoginWindow();
          this.reportService.reportLoginFrom(a2);
        }
      }
      async handleRequestReskPage(a1, a2) {
        this.log.info("Request risk page!");
        this.windowFactory.openLoginRiskWindow(a2);
      }
      async handleLoginWebviewReady() {
        this.log.info("Init login buvid!");
        this.authService.setMiniLoginBuvid();
      }
      async handleSetRefreshToken(a1, a2) {
        const a3 = a2?.token || a2?.refresh_token || "";
        this.log.info("Setup BiliConf,", !!a2, !!a3);
        this.storeService.setRefreshToken(a3);
        this.authService.handleLoginWindowXhr();
      }
      async handleLoginXhr(a1, a2) {
        this.authService.handleLoginWindowXhr();
      }
      async handleRequestLogout() {
        this.log.info("Logout account!");
        this.authService.handleUserLogout();
      }
      async handleRequestBigVip(a1, a2) {
        this.log.info("Open big VIP window!");
        if (this.isOnRefreshBigVipInfo) {
          return;
        }
        this.windowService.handleOpenBigVipWindow(a2);
      }
      async handleBigVipPaySuccess() {
        this.log.info("Big VIP pay success!");
        this.isOnRefreshBigVipInfo = true;
        await this.authService.refreshUserInfo();
        this.isOnRefreshBigVipInfo = false;
        this.eventsService.emitBigVipPaySuccess();
      }
      async handleGetAppInfo(a1) {
        a1.returnValue = this.configService.getAppInfo();
        return a1.returnValue;
      }
      async handleGetUserInfo(a1) {
        a1.returnValue = this.storeService.getUserInfo();
        return a1.returnValue;
      }
      async handleReloadUserInfo() {
        await this.authService.refreshUserInfo();
      }
      async handleSetCookies(a1, a2) {
        return await this.authService.setCookies((0, Y.toArray)(a2));
      }
      async handleRemoveCookie(a1, a2) {
        return await this.authService.removeCookie(a2);
      }
      async handleFlashCookiess() {
        return this.authService.clearAppCookies();
      }
      async handleGetBiliCookies() {
        return await W.session.defaultSession.cookies.get({
          domain: ".bilibili.com"
        });
      }
      async handleGetStoredCookies() {
        return this.storeService.getAuthCookies();
      }
      async handleAskForMediaAccess(a1, a2) {
        return await this.authService.askForMediaAccess(a2);
      }
      async handleGetMediaAccessStatus(a1, a2) {
        a1.returnValue = this.authService.getMediaAccessStatus(a2);
        return a1.returnValue;
      }
      async handleSignQueryParams(a1, a2, a3 = false) {
        if (typeof a2 === "object") {
          return this.authService.signQueryParams(a2, a3);
        }
      }
      async handleAcceptPrivacyPolicy() {
        this.configService.isPrivacyPolicyAccepted = true;
        this.configService.acceptPrivacyPolicy$.next();
        this.configService.reportFpInfo$.next();
        this.reportService.reportAgreementAction(true);
      }
      async handleDisagreePrivacyPolicy() {
        this.reportService.reportAgreementAction(false);
      }
      async handleSetGaiaFpWebgl(a1, a2) {
        this.log.info("set gaia fingerprint webgl");
        this.gaiaService.reportGaiaFpWhenChange("webgl", a2);
      }
      async handleSwitchAccount(a1, {
        action: a2,
        mid: a3
      }) {
        if (a2 === "getAccs") {
          a1.returnValue = this.storeService.getSavedAccounts();
          return a1.returnValue;
        } else if (a2 === "delAcc") {
          this.helpService.deleteSavedAccount(a3);
        } else {
          this.authService.handleSwitchAccount(a3);
        }
      }
    };
    i([(0, M.IpcInvoke)("auth/requestLogin"), j("design:type", Function), j("design:paramtypes", [Object, String]), j("design:returntype", Promise)], Z.prototype, "handleRequestLogin", null);
    i([(0, M.IpcInvoke)("auth/requestReskPage", {
      scope: "loginWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, typeof (w = typeof X.RiskPageParams !== "undefined" && X.RiskPageParams) === "function" ? w : Object]), j("design:returntype", Promise)], Z.prototype, "handleRequestReskPage", null);
    i([(0, M.IpcInvoke)("auth/loginWebviewReady", {
      scopes: ["loginWindow", "loginRiskWindow"]
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], Z.prototype, "handleLoginWebviewReady", null);
    i([(0, M.IpcInvoke)("auth/setRefreshToken", {
      scopes: ["loginWindow", "loginRiskWindow"]
    }), j("design:type", Function), j("design:paramtypes", [Object, typeof (z = typeof X.RefreshTokenInfo !== "undefined" && X.RefreshTokenInfo) === "function" ? z : Object]), j("design:returntype", Promise)], Z.prototype, "handleSetRefreshToken", null);
    i([(0, M.IpcInvoke)("auth/handleLoginXhr", {
      scopes: ["loginWindow", "loginRiskWindow"]
    }), j("design:type", Function), j("design:paramtypes", [Object, String]), j("design:returntype", Promise)], Z.prototype, "handleLoginXhr", null);
    i([(0, M.IpcInvoke)("auth/requestLogout", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], Z.prototype, "handleRequestLogout", null);
    i([(0, M.IpcInvoke)("auth/requestBigVip"), j("design:type", Function), j("design:paramtypes", [Object, typeof (A = typeof Partial !== "undefined" && Partial) === "function" ? A : Object]), j("design:returntype", Promise)], Z.prototype, "handleRequestBigVip", null);
    i([(0, M.IpcInvoke)("auth/bigVipPaySuccess"), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], Z.prototype, "handleBigVipPaySuccess", null);
    i([(0, M.IpcInvoke)("auth/getAppInfo", {
      withSync: true
    }), j("design:type", Function), j("design:paramtypes", [typeof (B = typeof W.IpcMainEvent !== "undefined" && W.IpcMainEvent) === "function" ? B : Object]), j("design:returntype", Promise)], Z.prototype, "handleGetAppInfo", null);
    i([(0, M.IpcInvoke)("auth/getUserInfo", {
      withSync: true
    }), j("design:type", Function), j("design:paramtypes", [typeof (C = typeof W.IpcMainEvent !== "undefined" && W.IpcMainEvent) === "function" ? C : Object]), j("design:returntype", Promise)], Z.prototype, "handleGetUserInfo", null);
    i([(0, M.IpcInvoke)("auth/reloadUserInfo"), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], Z.prototype, "handleReloadUserInfo", null);
    i([(0, M.IpcInvoke)("auth/setCookies"), j("design:type", Function), j("design:paramtypes", [Object, Array]), j("design:returntype", Promise)], Z.prototype, "handleSetCookies", null);
    i([(0, M.IpcInvoke)("auth/removeCookie", {
      devOnly: true
    }), j("design:type", Function), j("design:paramtypes", [Object, String]), j("design:returntype", Promise)], Z.prototype, "handleRemoveCookie", null);
    i([(0, M.IpcInvoke)("auth/clearCookies", {
      devOnly: true
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], Z.prototype, "handleFlashCookiess", null);
    i([(0, M.IpcInvoke)("auth/getBiliCookies", {
      devOnly: true
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], Z.prototype, "handleGetBiliCookies", null);
    i([(0, M.IpcInvoke)("auth/getStoredCookies", {
      devOnly: true
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], Z.prototype, "handleGetStoredCookies", null);
    i([(0, M.IpcInvoke)("auth/askForMediaAccess"), j("design:type", Function), j("design:paramtypes", [Object, typeof (D = typeof X.AskMediaType !== "undefined" && X.AskMediaType) === "function" ? D : Object]), j("design:returntype", Promise)], Z.prototype, "handleAskForMediaAccess", null);
    i([(0, M.IpcInvoke)("auth/getMediaAccessStatus", {
      withSync: true
    }), j("design:type", Function), j("design:paramtypes", [typeof (E = typeof W.IpcMainEvent !== "undefined" && W.IpcMainEvent) === "function" ? E : Object, typeof (F = typeof X.MediaType !== "undefined" && X.MediaType) === "function" ? F : Object]), j("design:returntype", Promise)], Z.prototype, "handleGetMediaAccessStatus", null);
    i([(0, M.IpcInvoke)("auth/signQueryParams"), j("design:type", Function), j("design:paramtypes", [typeof (G = typeof W.IpcMainInvokeEvent !== "undefined" && W.IpcMainInvokeEvent) === "function" ? G : Object, typeof (H = typeof X.Data !== "undefined" && X.Data) === "function" ? H : Object, Boolean]), j("design:returntype", Promise)], Z.prototype, "handleSignQueryParams", null);
    i([(0, M.IpcInvoke)("auth/acceptPrivacyPolicy", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], Z.prototype, "handleAcceptPrivacyPolicy", null);
    i([(0, M.IpcInvoke)("auth/disagreePrivacyPolicy", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], Z.prototype, "handleDisagreePrivacyPolicy", null);
    i([(0, M.IpcInvoke)("auth/setGaiaFpWebgl", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, typeof (I = typeof X.GaiaFpWebgl !== "undefined" && X.GaiaFpWebgl) === "function" ? I : Object]), j("design:returntype", Promise)], Z.prototype, "handleSetGaiaFpWebgl", null);
    i([(0, M.IpcInvoke)("auth/switchAccount", {
      withSync: true,
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [typeof (J = typeof W.IpcMainInvokeEvent !== "undefined" && W.IpcMainInvokeEvent) === "function" ? J : Object, typeof (K = typeof X.ISwitchAccParams !== "undefined" && X.ISwitchAccParams) === "function" ? K : Object]), j("design:returntype", Promise)], Z.prototype, "handleSwitchAccount", null);
    Z = i([(0, L.Controller)(), j("design:paramtypes", [typeof (k = typeof Q.ConfigService !== "undefined" && Q.ConfigService) === "function" ? k : Object, typeof (l = typeof N.AuthService !== "undefined" && N.AuthService) === "function" ? l : Object, typeof (m = typeof R.WindowService !== "undefined" && R.WindowService) === "function" ? m : Object, typeof (n = typeof O.WindowFactory !== "undefined" && O.WindowFactory) === "function" ? n : Object, typeof (o = typeof P.StoreService !== "undefined" && P.StoreService) === "function" ? o : Object, typeof (q = typeof S.EventsService !== "undefined" && S.EventsService) === "function" ? q : Object, typeof (r = typeof T.ReportService !== "undefined" && T.ReportService) === "function" ? r : Object, typeof (t = typeof U.GaiaService !== "undefined" && U.GaiaService) === "function" ? t : Object, typeof (u = typeof V.HelpService !== "undefined" && V.HelpService) === "function" ? u : Object])], Z);
    g.AuthController = Z;
  }
});
var jE = bX({
  ""(g) {
    'use strict';

    var h = g && g.__decorate || function (o, q, t, u) {
      var w = arguments.length;
      var z = w < 3 ? q : u === null ? u = Object.getOwnPropertyDescriptor(q, t) : u;
      var A;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        z = Reflect.decorate(o, q, t, u);
      } else {
        for (var B = o.length - 1; B >= 0; B--) {
          if (A = o[B]) {
            z = (w < 3 ? A(z) : w > 3 ? A(q, t, z) : A(q, t)) || z;
          }
        }
      }
      if (w > 3 && z) {
        Object.defineProperty(q, t, z);
      }
      return z;
    };
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.AuthModule = undefined;
    var i = require("@nestjs/common");
    var j = jD();
    var k = iz();
    var l = jn();
    var m = iw();
    var n = class o {};
    n = h([(0, i.Global)(), (0, i.Module)({
      controllers: [j.AuthController],
      providers: [k.AuthService, l.PopLoginService, m.GaiaService],
      exports: [k.AuthService, l.PopLoginService, m.GaiaService]
    })], n);
    g.AuthModule = n;
  }
});
var jF = bX({
  ""(g) {
    'use strict';

    var h = {
      MxgDC: function (w, z) {
        return w === z;
      },
      zXumy: "LocalPlayerService",
      VDHht: "storeService",
      kmdWL: "ndJlx",
      zYAJe: "SqXvJ",
      EpGVO: "'\\''",
      ZKrtW: "child_process"
    };
    var i = g && g.__decorate || function (w, z, A, B) {
      var C = arguments.length;
      var D = C < 3 ? z : B === null ? B = Object.getOwnPropertyDescriptor(z, A) : B;
      var E;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        D = Reflect.decorate(w, z, A, B);
      } else {
        for (var F = w.length - 1; F >= 0; F--) {
          if (E = w[F]) {
            D = (C < 3 ? E(D) : C > 3 ? E(z, A, D) : E(z, A)) || D;
          }
        }
      }
      if (C > 3 && D) {
        Object.defineProperty(z, A, D);
      }
      return D;
    };
    var j = g && g.__metadata || function (w, z) {
      if (typeof Reflect === "object" && h.MxgDC(typeof Reflect.metadata, "function")) {
        return Reflect.metadata(w, z);
      }
    };
    var k = g && g.__importDefault || function (w) {
      if (w && w.__esModule) {
        return w;
      } else {
        return {
          default: w
        };
      }
    };
    var l;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.LocalPlayerService = undefined;
    var m = require("@nestjs/common");
    ga();
    var n = c2(g9);
    var o = io();
    fP();
    var q = c2(fO);
    var r = require(h.ZKrtW);
    var t = k(require("winreg"));
    var u = class w extends n.BaseService {
      constructor(z) {
        super(h.zXumy);
        c3(this, h.VDHht);
        this.storeService = z;
      }
      async isDetaultPlayer() {
        if (q.IS_WIN) {
          return await this.isWinDefaultPlayer();
        } else if (q.IS_MAC) {
          return await this.isMacDefaultPlayer();
        }
      }
      async setDefaultPlayer() {
        if (q.IS_WIN) {
          if (h.kmdWL !== "ndJlx") {
            l.loadURL(m);
            const A = n.BrowserWindow.fromWebContents(o);
            if (A === this.configService.liveRoomWindow) {
              this.configService.windowOpenedUrls.liveRoomWindow = r;
            }
          } else {
            return await this.setWinDefaultPlayer();
          }
        } else if (q.IS_MAC) {
          return await this.setMacDefaultPlayer();
        }
      }
      async unsetDefaultPlayer() {
        if (q.IS_WIN) {
          return await this.unsetWinDefaultPlayer();
        } else if (q.IS_MAC) {
          return await this.unsetMacDefaultPlayer();
        }
      }
      async isWinDefaultPlayer() {
        return await new Promise((z, A) => {
          const C = "bilipc";
          this.log.info("Getting is default local player");
          const D = new t.default({
            hive: t.default.HKCU,
            key: "\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\FileExts\\.mp4\\UserChoice"
          });
          D.get("Progid", (E, F) => {
            this.log.info("[isWinDefaultPlayer] item:", F?.value || "--");
            if (E || !F) {
              this.log.error("[isWinDefaultPlayer] err:", E?.message || "--");
              z(false);
              return;
            }
            if (F.value === C) {
              z(true);
            } else {
              z(false);
            }
          });
        });
      }
      async setWinDefaultPlayer() {
        return await new Promise((z, A) => {
          this.log.info("Setting as default local player");
          const B = "bilipc";
          const C = this.storeService.getLocalPlayerBackup();
          let D = true;
          let E = 0;
          const F = () => {
            E++;
            if (E === q.SUPPORT_EXTS.length) {
              this.storeService.setLocalPlayerBackup(C);
              z(D);
            }
          };
          q.SUPPORT_EXTS.forEach(G => {
            const I = new t.default({
              hive: t.default.HKCU,
              key: "\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\FileExts\\." + G + "\\UserChoice"
            });
            I.get("Progid", (J, K) => {
              if (K?.value && (!C[G] || K.value !== B)) {
                C[G] = K.value;
              }
              try {
                (0, r.execSync)(q.SETFTA_EXE_ + " ." + G + " " + B);
                try {
                  (0, r.execSync)("assoc ." + G + "=" + B);
                } finally {
                  F();
                }
              } catch (L) {
                this.log.error("[setWinDefaultPlayer] err", L.message);
                D = false;
                F();
              }
            });
          });
        });
      }
      async unsetWinDefaultPlayer() {
        return await new Promise((z, A) => {
          this.log.info("Unsetting default local player");
          const B = this.storeService.getLocalPlayerBackup();
          let C = true;
          let D = 0;
          const E = () => {
            D++;
            if (D === q.SUPPORT_EXTS.length) {
              z(C);
            }
          };
          q.SUPPORT_EXTS.forEach(F => {
            const G = B[F];
            if (G) {
              try {
                (0, r.execSync)(q.SETFTA_EXE_ + " ." + F + " " + G);
                try {
                  (0, r.execSync)("assoc ." + F + "=" + G);
                } finally {
                  E();
                }
              } catch (H) {
                this.log.error("[unsetWinDefaultPlayer] err", H.message);
                C = false;
                E();
              }
            } else {
              E();
            }
          });
        });
      }
      async isMacDefaultPlayer() {
        const z = "\n      set fileType to \"mp4\"\n      set appAlias to POSIX file \"/Applications/哔哩哔哩.app\" as alias\n      \n      tell application \"Finder\"\n        try\n          -- 获取当前默认应用程序\n          set currentApp to (get application file type fileType)\n          -- 检查当前默认应用是否为目标应用\n          if currentApp is appAlias then\n            do shell script \"echo yes\"\n          else\n            do shell script \"echo no\"\n          end if\n        on error\n          do shell script \"echo no\"\n        end try\n      end tell\n    ";
        return await new Promise((A, B) => {
          (0, r.exec)("osascript -e '" + z.replace(/'/g, "'\\''") + "'", (C, D, E) => {
            if (C) {
              this.log.error("[isMacDefaultPlayer]: " + C.message);
              A(false);
            }
            A(D.trim() === "yes");
          });
        });
      }
      async setMacDefaultPlayer() {
        const z = ["mp4", "webm", "mov", "mkv"];
        const A = "\n      set fileTypes to {" + z.map(B => "\"" + B + "\"").join(", ") + "}\n      set appPath to \"/Applications/哔哩哔哩.app\"\n      \n      tell application \"Finder\"\n        set appAlias to POSIX file appPath as alias\n        repeat with ft in fileTypes\n          try\n            -- 获取当前默认应用程序\n            set currentApp to (get application file type ft)\n            -- 检查当前默认应用是否为目标应用，如不是，则更改默认应用\n            if currentApp is not appAlias then\n              do shell script \"lsregister -u '/Applications/\" & currentApp & \".app' && lsregister -f '\" & appPath & \"' && killall Finder\"\n            end if\n          end try\n        end repeat\n      end tell\n    ";
        return new Promise((B, C) => {
          (0, r.exec)("osascript -e '" + A.replace(/'/g, "'\\''") + "'", (D, E, F) => {
            if (D) {
              this.log.error("[setMacDefaultPlayer]: " + D.message);
              B(false);
              return;
            }
            B(true);
          });
        });
      }
      async unsetMacDefaultPlayer() {
        const A = "\n      set fileTypes to {" + q.SUPPORT_EXTS.map(B => "\"" + B + "\"").join(", ") + "}\n      \n      tell application \"Finder\"\n        repeat with ft in fileTypes\n          try\n            -- 获取当前默认应用程序\n            set currentApp to (get application file type ft)\n            -- 检查当前默认应用是否为目标应用，如不是，则更改默认应用\n            if currentApp is \"/Applications/哔哩哔哩.app\" then\n              do shell script \"lsregister -u '/Applications/哔哩哔哩.app' && killall Finder\"\n            end if\n          end try\n        end repeat\n      end tell\n    ";
        return new Promise((B, C) => {
          if (h.zYAJe === "fCeuv") {
            this.windowService.handleMainWindowMouseEnter();
          } else {
            (0, r.exec)("osascript -e '" + A.replace(/'/g, h.EpGVO) + "'", (E, F, G) => {
              if (E) {
                this.log.error("[unsetMacDefaultPlayer]: " + E.message);
                B(false);
                return;
              }
              B(true);
            });
          }
        });
      }
    };
    u = i([(0, m.Injectable)(), j("design:paramtypes", [typeof (l = typeof o.StoreService !== "undefined" && o.StoreService) === "function" ? l : Object])], u);
    g.LocalPlayerService = u;
  }
});
var jG = bX({
  ""(g) {
    'use strict';

    var h = {
      ILMDq: function (Y, Z, a0, a1) {
        return Y(Z, a0, a1);
      },
      DIbdT: "SystemController",
      jlpox: "utilsService",
      PoJio: function (Y, Z) {
        return Y === Z;
      },
      sDhWL: "yDSrH",
      JUfyk: function (Y) {
        return Y();
      },
      OQvbt: function (Y, Z, a0) {
        return Y(Z, a0);
      },
      NAJqt: "undefined",
      xcNsb: "handleIsLinux",
      FCtIA: function (Y, Z, a0) {
        return Y(Z, a0);
      },
      rStWx: "design:paramtypes",
      XkBWe: function (Y, Z) {
        return Y === Z;
      },
      lWBkg: "design:type",
      GdizT: "function",
      qvOKH: "handleGetAbTestInfo",
      hCdLi: "mainWindow",
      fSxdn: "system/getAppLogs",
      aTecR: "appLogWindow",
      dPEBf: "handleClearAppCache",
      AHhcc: function (Y, Z, a0, a1, a2) {
        return Y(Z, a0, a1, a2);
      },
      rFTtb: function (Y, Z, a0) {
        return Y(Z, a0);
      },
      gZNVq: "design:returntype",
      qpBFj: function (Y, Z, a0, a1, a2) {
        return Y(Z, a0, a1, a2);
      },
      wYcSU: function (Y, Z, a0, a1, a2) {
        return Y(Z, a0, a1, a2);
      }
    };
    var i = g && g.__decorate || function (Y, Z, a0, a1) {
      var a2 = arguments.length;
      var a3 = a2 < 3 ? Z : a1 === null ? a1 = Object.getOwnPropertyDescriptor(Z, a0) : a1;
      var a4;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        a3 = Reflect.decorate(Y, Z, a0, a1);
      } else {
        for (var a5 = Y.length - 1; a5 >= 0; a5--) {
          if (a4 = Y[a5]) {
            a3 = (a2 < 3 ? a4(a3) : a2 > 3 ? h.ILMDq(a4, Z, a0, a3) : a4(Z, a0)) || a3;
          }
        }
      }
      if (a2 > 3 && a3) {
        Object.defineProperty(Z, a0, a3);
      }
      return a3;
    };
    var j = g && g.__metadata || function (Y, Z) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(Y, Z);
      }
    };
    var k;
    var l;
    var m;
    var n;
    var o;
    var q;
    var r;
    var t;
    var u;
    var w;
    var z;
    var A;
    var B;
    var C;
    var D;
    var E;
    var F;
    var G;
    var H;
    var I;
    var J;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.SystemController = undefined;
    var K = require("@nestjs/common");
    ga();
    var L = c2(g9);
    fP();
    var M = c2(fO);
    var N = j7();
    var O = j6();
    var P = h.JUfyk(gK);
    var Q = ix();
    var R = jF();
    var S = jl();
    var T = require("electron");
    gJ();
    var U = c2(gI);
    var V = require("@bilibili/b-utils-core");
    var W = require("path");
    var X = class Y extends L.BaseController {
      constructor(Z, a0, a1, a2, a3, a4) {
        super(Z, h.DIbdT);
        c3(this, "configService");
        c3(this, "systemService");
        c3(this, h.jlpox);
        c3(this, "playerService");
        c3(this, "localPlayerService");
        c3(this, "thirdPartyService");
        this.configService = Z;
        this.systemService = a0;
        this.utilsService = a1;
        this.playerService = a2;
        this.localPlayerService = a3;
        this.thirdPartyService = a4;
      }
      async handleIsMac(Z) {
        Z.returnValue = M.IS_MAC;
        return Z.returnValue;
      }
      async handleIsWin(Z) {
        Z.returnValue = M.IS_WIN;
        return Z.returnValue;
      }
      async handleIsLinux(Z) {
        Z.returnValue = M.IS_LINUX;
        return Z.returnValue;
      }
      async handleIsNetOnLine(Z) {
        Z.returnValue = T.net.isOnline();
        return Z.returnValue;
      }
      async handleGetPath(Z, a0) {
        Z.returnValue = T.app.getPath(a0);
        return Z.returnValue;
      }
      async handleOpenPath(Z, a0) {
        try {
          this.log.info("Open path:", a0);
          if (a0) {
            T.shell.openPath(a0);
          }
        } catch (a1) {}
      }
      async handleGetAppPath(Z) {
        Z.returnValue = M.IS_DEV ? T.app.getAppPath() : (0, W.resolve)((0, W.dirname)(T.app.getAppPath()), "../");
        return Z.returnValue;
      }
      async handleShowItemInPath(Z, a0) {
        try {
          const a1 = (0, W.join)(...(0, V.toArray)(a0));
          this.log.info("Show item in path:", a1);
          if (a1) {
            T.shell.showItemInFolder(a1);
          }
        } catch (a3) {}
      }
      async handleGetPlayerInfo(Z) {
        Z.returnValue = this.playerService.handleGetPlayerInfo();
      }
      async handleGetFontsInfo(Z) {
        Z.returnValue = this.systemService.handleGetFontsInfo();
      }
      async handleGetAbTestInfo(Z, a0) {
        if (h.PoJio(a0, "ab")) {
          Z.returnValue = this.configService.abTestConf;
        } else {
          Z.returnValue = this.configService.abTestInfo;
        }
        return Z.returnValue;
      }
      async handleGetBuvidWlCode(Z, a0) {
        return this.utilsService.getBuvidWlCode(a0);
      }
      async handleGetBucketInfo(Z, {
        bid: a0,
        salt: a1
      }) {
        return this.utilsService.getAbTestBucket(a0, a1);
      }
      async handleGetAppLogs() {
        return this.systemService.appLogs;
      }
      async handleGetAppCach() {
        return this.systemService.getAppCache();
      }
      async handleClearAppCache() {
        return this.systemService.clearAppCache();
      }
      async handleClearDNSCache() {
        return this.systemService.clearDNSCache();
      }
      handleGetAppLogTipStrings() {
        return this.systemService.getAppLogTipStrings();
      }
      async handleGetIsDefaultPlayer() {
        if (h.PoJio(h.sDhWL, "HnHvJ")) {
          j.returnValue = k.INSTALL_VERSION;
          return l.returnValue;
        } else {
          return this.localPlayerService.isDetaultPlayer();
        }
      }
      async handleSetDefaultPlayer(Z, a0) {
        if (a0) {
          return this.localPlayerService.setDefaultPlayer();
        } else {
          return this.localPlayerService.unsetDefaultPlayer();
        }
      }
      async handleCheckIsGrayHit(Z, a0) {
        Z.returnValue = this.utilsService.checkIsGrayHit(a0);
        return Z.returnValue;
      }
      async handleGamepadAction(Z, a0) {
        const a1 = this.getSenderWindow(Z);
        Z.returnValue = await this.systemService.handleGamepadAction(a0, a1);
        return Z.returnValue;
      }
      async handleGetWxInstallInfo(Z) {
        Z.returnValue = {
          isWeChatInstalled: this.thirdPartyService.getIsWeChatInstalled()
        };
      }
    };
    i([(0, L.IpcInvoke)("system/isMac", {
      withSync: true
    }), j("design:type", Function), h.OQvbt(j, "design:paramtypes", [typeof (r = typeof T.IpcMainEvent !== "undefined" && T.IpcMainEvent) === "function" ? r : Object]), j("design:returntype", Promise)], X.prototype, "handleIsMac", null);
    i([(0, L.IpcInvoke)("system/isWin", {
      withSync: true
    }), j("design:type", Function), j("design:paramtypes", [typeof (t = typeof T.IpcMainEvent !== "undefined" && T.IpcMainEvent) === "function" ? t : Object]), j("design:returntype", Promise)], X.prototype, "handleIsWin", null);
    i([(0, L.IpcInvoke)("system/isLinux", {
      withSync: true
    }), j("design:type", Function), j("design:paramtypes", [typeof (u = typeof T.IpcMainEvent !== h.NAJqt && T.IpcMainEvent) === "function" ? u : Object]), j("design:returntype", Promise)], X.prototype, h.xcNsb, null);
    i([(0, L.IpcInvoke)("system/isNetOnLine", {
      withSync: true
    }), j("design:type", Function), h.FCtIA(j, h.rStWx, [typeof (w = typeof T.IpcMainEvent !== "undefined" && T.IpcMainEvent) === "function" ? w : Object]), j("design:returntype", Promise)], X.prototype, "handleIsNetOnLine", null);
    i([(0, L.IpcInvoke)("system/getPath", {
      withSync: true
    }), j("design:type", Function), j("design:paramtypes", [typeof (z = typeof T.IpcMainEvent !== "undefined" && T.IpcMainEvent) === "function" ? z : Object, typeof (A = typeof U.PathType !== "undefined" && U.PathType) === "function" ? A : Object]), j("design:returntype", Promise)], X.prototype, "handleGetPath", null);
    i([(0, L.IpcInvoke)("system/openPath"), j("design:type", Function), j("design:paramtypes", [Object, String]), j("design:returntype", Promise)], X.prototype, "handleOpenPath", null);
    i([(0, L.IpcInvoke)("system/getAppPath", {
      withSync: true
    }), j("design:type", Function), j("design:paramtypes", [typeof (B = typeof T.IpcMainEvent !== "undefined" && T.IpcMainEvent) === "function" ? B : Object]), j("design:returntype", Promise)], X.prototype, "handleGetAppPath", null);
    i([(0, L.IpcInvoke)("system/showItemInPath"), j("design:type", Function), j("design:paramtypes", [Object, Array]), j("design:returntype", Promise)], X.prototype, "handleShowItemInPath", null);
    i([(0, L.IpcInvoke)("system/getPlayerInfo", {
      withSync: true,
      withAsync: false
    }), j("design:type", Function), j("design:paramtypes", [h.XkBWe(typeof (C = typeof T.IpcMainEvent !== "undefined" && T.IpcMainEvent), "function") ? C : Object]), j("design:returntype", Promise)], X.prototype, "handleGetPlayerInfo", null);
    i([(0, L.IpcInvoke)("system/getFontsInfo", {
      withSync: true,
      withAsync: false
    }), j(h.lWBkg, Function), j("design:paramtypes", [typeof (D = typeof T.IpcMainEvent !== "undefined" && T.IpcMainEvent) === h.GdizT ? D : Object]), j("design:returntype", Promise)], X.prototype, "handleGetFontsInfo", null);
    i([(0, L.IpcInvoke)("system/getAbTestInfo", {
      withSync: true,
      withAsync: false
    }), j("design:type", Function), j("design:paramtypes", [typeof (E = typeof T.IpcMainEvent !== "undefined" && T.IpcMainEvent) === "function" ? E : Object, String]), j("design:returntype", Promise)], X.prototype, h.qvOKH, null);
    i([(0, L.IpcInvoke)("system/getBuvidWlCode", {
      scope: h.hCdLi
    }), j("design:type", Function), j("design:paramtypes", [Object, String]), j("design:returntype", Promise)], X.prototype, "handleGetBuvidWlCode", null);
    i([(0, L.IpcInvoke)("system/getBucketInfo", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, Object]), j("design:returntype", Promise)], X.prototype, "handleGetBucketInfo", null);
    i([(0, L.IpcInvoke)(h.fSxdn, {
      scope: h.aTecR
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], X.prototype, "handleGetAppLogs", null);
    i([(0, L.IpcInvoke)("system/getAppCache", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], X.prototype, "handleGetAppCach", null);
    i([(0, L.IpcInvoke)("system/clearAppCache", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], X.prototype, h.dPEBf, null);
    i([(0, L.IpcInvoke)("system/clearDNSCache", {
      scope: "mainWindow"
    }), j("design:type", Function), j(h.rStWx, []), j("design:returntype", Promise)], X.prototype, "handleClearDNSCache", null);
    i([(0, L.IpcInvoke)("system/getAppLogTipStrings", {
      scope: "appLogWindow"
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", undefined)], X.prototype, "handleGetAppLogTipStrings", null);
    h.AHhcc(i, [(0, L.IpcInvoke)("system/getIsDefaultPlayer", {
      scope: "mainWindow"
    }), j("design:type", Function), j(h.rStWx, []), h.rFTtb(j, "design:returntype", Promise)], X.prototype, "handleGetIsDefaultPlayer", null);
    i([(0, L.IpcInvoke)("system/setDefaultPlayer", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, Boolean]), j(h.gZNVq, Promise)], X.prototype, "handleSetDefaultPlayer", null);
    h.qpBFj(i, [(0, L.IpcInvoke)("system/checkIsGrayHit", {
      withSync: true
    }), j("design:type", Function), j("design:paramtypes", [typeof (F = typeof T.IpcMainEvent !== "undefined" && T.IpcMainEvent) === "function" ? F : Object, h.XkBWe(typeof (G = typeof U.IGrayConf !== "undefined" && U.IGrayConf), "function") ? G : Object]), j("design:returntype", Promise)], X.prototype, "handleCheckIsGrayHit", null);
    h.wYcSU(i, [(0, L.IpcInvoke)("system/gamepadAction", {
      withSync: true
    }), j("design:type", Function), j("design:paramtypes", [typeof (H = typeof T.IpcMainEvent !== "undefined" && T.IpcMainEvent) === "function" ? H : Object, typeof (I = typeof U.IGamePadAction !== "undefined" && U.IGamePadAction) === h.GdizT ? I : Object]), j("design:returntype", Promise)], X.prototype, "handleGamepadAction", null);
    i([(0, L.IpcInvoke)("system/getWxInstallInfo", {
      withSync: true,
      withAsync: false
    }), j("design:type", Function), j("design:paramtypes", [typeof (J = typeof T.IpcMainEvent !== "undefined" && T.IpcMainEvent) === h.GdizT ? J : Object]), j("design:returntype", Promise)], X.prototype, "handleGetWxInstallInfo", null);
    X = i([(0, K.Controller)(), j("design:paramtypes", [typeof (k = typeof P.ConfigService !== "undefined" && P.ConfigService) === "function" ? k : Object, typeof (l = typeof N.SystemService !== "undefined" && N.SystemService) === "function" ? l : Object, typeof (m = typeof Q.UtilsService !== "undefined" && Q.UtilsService) === "function" ? m : Object, typeof (n = typeof O.PlayerService !== "undefined" && O.PlayerService) === "function" ? n : Object, typeof (o = typeof R.LocalPlayerService !== "undefined" && R.LocalPlayerService) === "function" ? o : Object, typeof (q = typeof S.ThirdPartyService !== "undefined" && S.ThirdPartyService) === "function" ? q : Object])], X);
    g.SystemController = X;
  }
});
var jH = bX({
  ""(g) {
    'use strict';

    var i = g && g.__decorate || function (w, z, A, B) {
      var C = arguments.length;
      var D = C < 3 ? z : B === null ? B = Object.getOwnPropertyDescriptor(z, A) : B;
      var E;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        D = Reflect.decorate(w, z, A, B);
      } else {
        for (var F = w.length - 1; F >= 0; F--) {
          if (E = w[F]) {
            D = (C < 3 ? E(D) : C > 3 ? E(z, A, D) : E(z, A)) || D;
          }
        }
      }
      if (C > 3 && D) {
        Object.defineProperty(z, A, D);
      }
      return D;
    };
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.SystemModule = undefined;
    var j = require("@nestjs/common");
    var k = jG();
    var l = j7();
    var m = jj();
    var n = jk();
    var o = j6();
    var q = jo();
    var r = jF();
    var t = jl();
    var u = class w {};
    u = i([(0, j.Global)(), (0, j.Module)({
      controllers: [k.SystemController],
      providers: [l.SystemService, o.PlayerService, m.AbTestService, n.FfAbTestService, q.NotifyService, r.LocalPlayerService, t.ThirdPartyService],
      exports: [l.SystemService, o.PlayerService, m.AbTestService, n.FfAbTestService, q.NotifyService, r.LocalPlayerService, t.ThirdPartyService]
    })], u);
    g.SystemModule = u;
  }
});
var jI = bX({
  ""(g) {
    'use strict';

    var i = g && g.__decorate || function (z, A, B, C) {
      var D = arguments.length;
      var E = D < 3 ? A : C === null ? C = Object.getOwnPropertyDescriptor(A, B) : C;
      var F;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        E = Reflect.decorate(z, A, B, C);
      } else {
        for (var G = z.length - 1; G >= 0; G--) {
          if (F = z[G]) {
            E = (D < 3 ? F(E) : D > 3 ? F(A, B, E) : F(A, B)) || E;
          }
        }
      }
      if (D > 3 && E) {
        Object.defineProperty(A, B, E);
      }
      return E;
    };
    var j = g && g.__metadata || function (z, A) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(z, A);
      }
    };
    var k;
    var l;
    var m;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.UpdateController = undefined;
    var n = require("@nestjs/common");
    ga();
    var o = c2(g9);
    var q = ji();
    var r = gK();
    var t = ix();
    fP();
    var u = c2(fO);
    var w = class z extends o.BaseController {
      constructor(A, B, C) {
        super(A, "UpdateController");
        c3(this, "configService");
        c3(this, "updateService");
        c3(this, "utilsService");
        this.configService = A;
        this.updateService = B;
        this.utilsService = C;
      }
      async handleCheckForUpdate() {
        this.log.info("Check for update.");
        return this.updateService.checkForUpdate();
      }
      async handleDownloadUpdate() {
        this.log.info("Download update.");
        this.updateService.downloadUpdate();
      }
      async handleInstall() {
        this.log.info("Quit and install.");
        this.updateService.quitAndInstall();
      }
      async handleCancelUpdate() {
        this.log.info("Cancel update.");
        this.updateService.cancelDownLoadUpdate();
      }
      async handleUpdatePatchNow() {
        this.log.info("Update patch now!");
        if (u.IS_DEV) {
          return;
        }
        this.utilsService.relaunchApp();
      }
      async handleUpdatePatchLater() {
        this.log.info("Update patch later!");
      }
    };
    i([(0, o.IpcInvoke)("update/checkForUpdate"), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], w.prototype, "handleCheckForUpdate", null);
    i([(0, o.IpcInvoke)("update/downloadUpdate"), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], w.prototype, "handleDownloadUpdate", null);
    i([(0, o.IpcInvoke)("update/quitAndInstall"), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], w.prototype, "handleInstall", null);
    i([(0, o.IpcInvoke)("update/cancelUpdate"), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], w.prototype, "handleCancelUpdate", null);
    i([(0, o.IpcInvoke)("update/updatePatchNow", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], w.prototype, "handleUpdatePatchNow", null);
    i([(0, o.IpcInvoke)("update/updatePatchLater", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], w.prototype, "handleUpdatePatchLater", null);
    w = i([(0, n.Controller)(), j("design:paramtypes", [typeof (k = typeof r.ConfigService !== "undefined" && r.ConfigService) === "function" ? k : Object, typeof (l = typeof q.UpdateService !== "undefined" && q.UpdateService) === "function" ? l : Object, typeof (m = typeof t.UtilsService !== "undefined" && t.UtilsService) === "function" ? m : Object])], w);
    g.UpdateController = w;
  }
});
var jJ = bX({
  ""(g) {
    'use strict';

    var l = g && g.__decorate || function (q, t, u, w) {
      var z = arguments.length;
      var A = z < 3 ? t : w === null ? w = Object.getOwnPropertyDescriptor(t, u) : w;
      var B;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        A = Reflect.decorate(q, t, u, w);
      } else {
        for (var C = q.length - 1; C >= 0; C--) {
          if (B = q[C]) {
            A = (z < 3 ? B(A) : z > 3 ? B(t, u, A) : B(t, u)) || A;
          }
        }
      }
      if (z > 3 && A) {
        Object.defineProperty(t, u, A);
      }
      return A;
    };
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.UpdateModule = undefined;
    var n = require("@nestjs/common");
    var k = jI();
    var m = ji();
    var j = class o {};
    j = l([(0, n.Global)(), (0, n.Module)({
      controllers: [k.UpdateController],
      providers: [m.UpdateService],
      exports: [m.UpdateService]
    })], j);
    g.UpdateModule = j;
  }
});
var jK = bX({
  ""(g) {
    'use strict';

    var h = {
      yicRa: function (E, F) {
        return E === F;
      },
      LLKTB: function (E, F) {
        return E < F;
      },
      TjImr: function (E, F) {
        return E > F;
      },
      vpYlJ: "An array param(taskIds) is required!",
      JNovl: "This action must login!",
      yFzQs: "tsIHE",
      yiUiW: "electron",
      uqEZw: "mainWindow",
      SJzih: function (E, F, G) {
        return E(F, G);
      },
      wQAUA: "design:paramtypes",
      YOZqz: "design:returntype",
      vCXTe: function (E, F, G) {
        return E(F, G);
      },
      ckxNy: function (E, F, G, H, I) {
        return E(F, G, H, I);
      },
      ryrOD: function (E, F, G) {
        return E(F, G);
      },
      SoISO: function (E, F, G, H, I) {
        return E(F, G, H, I);
      },
      UssOK: "download/getTaskList",
      VwOtu: "handleCreateTasks",
      jvnbQ: "download/deleteTasks",
      FvcPn: "handleStartAllTasks",
      wCRsv: "download/pauseAllTasks",
      nECGq: "handleDeleteAllTasks",
      gHJeo: function (E, F, G) {
        return E(F, G);
      },
      WQdmU: "playerWindow",
      deMKA: function (E, F, G, H, I) {
        return E(F, G, H, I);
      },
      BqEgH: function (E, F, G) {
        return E(F, G);
      },
      CYTkp: "handleUpdateItemDmInfo",
      tzjpH: "download/downloadURL",
      RpuPi: function (E, F) {
        return E === F;
      }
    };
    var i = g && g.__decorate || function (E, F, G, H) {
      var I = arguments.length;
      var J = I < 3 ? F : h.yicRa(H, null) ? H = Object.getOwnPropertyDescriptor(F, G) : H;
      var K;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        J = Reflect.decorate(E, F, G, H);
      } else {
        for (var L = E.length - 1; L >= 0; L--) {
          if (K = E[L]) {
            J = (h.LLKTB(I, 3) ? K(J) : I > 3 ? K(F, G, J) : K(F, G)) || J;
          }
        }
      }
      if (h.TjImr(I, 3) && J) {
        Object.defineProperty(F, G, J);
      }
      return J;
    };
    var j = g && g.__metadata || function (E, F) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(E, F);
      }
    };
    var k;
    var l;
    var m;
    var n;
    var o;
    var q;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.DownloadController = undefined;
    var r = require("@nestjs/common");
    ga();
    var t = c2(g9);
    var u = gK();
    var w = iU();
    var z = io();
    var A = require("@bilibili/b-utils-core");
    var B = require("@bilibili/bili-download");
    var C = require(h.yiUiW);
    var D = class E extends t.BaseController {
      constructor(F, G, H) {
        super(F, "DownloadController");
        c3(this, "configService");
        c3(this, "downloadService");
        c3(this, "storeService");
        this.configService = F;
        this.downloadService = G;
        this.storeService = H;
      }
      async handleReloadVideoList() {
        return await this.downloadService.updateDownloadVideoList();
      }
      async handleGetAllVideoList(F, {
        search: G
      } = {}) {
        return this.downloadService.getAllDownloadVideos(G);
      }
      async handleGetCompletedItems() {
        return this.downloadService.itemList;
      }
      async handleGetCompletedGroups() {
        return this.downloadService.groupList;
      }
      async handleGetGroupAllItems(F, G) {
        if (!G?.groupId) {
          throw new Error("A param(groupId) is required!");
        }
        return await this.downloadService.getGroupAllItems(G);
      }
      async handleSortGroupList(F, G) {
        if (!(0, A.isArr)(G)) {
          throw new Error("An array param(orderList) is required!");
        }
        return await this.downloadService.sortGroupList(G);
      }
      async handleDeleteGroups(F, G) {
        if (!(0, A.isArr)(G?.groupIds)) {
          throw new Error("An array param(groupIds) is required!");
        }
        return await this.downloadService.deleteGroups(G);
      }
      async handleDeleteAllGroups() {
        return await this.downloadService.deleteAllGroups();
      }
      async handleGetGroupItems(F, G) {
        if (!G?.groupId) {
          throw new Error("A param(groupId) is required!");
        }
        return await this.downloadService.getGroupItems(G);
      }
      async handleDeleteGroupItems(F, G) {
        if (!G?.groupId || !(0, A.isArr)(G?.itemIds)) {
          throw new Error("A param(groupId) & An array param(groupIds) are required!");
        }
        return await this.downloadService.deleteGroupItems(G);
      }
      async handleGetItemInfo(F, G) {
        if (!G?.itemId) {
          throw new Error("A param(itmeId) is required!");
        }
        return await this.downloadService.getItemInfo(G);
      }
      async handleGetItemsInfo(F, G) {
        if (!(0, A.isArr)(G?.itemIds)) {
          throw new Error("An array param(itemIds) is required!");
        }
        return await this.downloadService.getItemsInfo(G);
      }
      async handleSetItemStatus(F, G) {
        if (!G?.cid || !G?.status) {
          throw new Error("Params \"cid\" and \"status\" are required!");
        }
        return await this.downloadService.setItemStatus(G);
      }
      async handleGetTaskList() {
        return this.downloadService.taskList;
      }
      async handleCreateTasks(F, G) {
        const H = this.storeService.getUserInfo();
        if (!H.isLogin) {
          throw new Error("This action must login!");
        }
        if (!(0, A.isArr)(G?.tasks)) {
          throw new Error("An array param(tasks) is required!");
        }
        return await this.downloadService.createTasks(G);
      }
      async handlePauseTasks(F, G) {
        if (!(0, A.isArr)(G?.taskIds)) {
          throw new Error(h.vpYlJ);
        }
        return await this.downloadService.pauseTasks(G);
      }
      async handleRestartTasks(F, G) {
        const H = this.storeService.getUserInfo();
        if (!H.isLogin) {
          throw new Error(h.JNovl);
        }
        if (!(0, A.isArr)(G?.taskIds)) {
          throw new Error("An array param(taskIds) is required!");
        }
        return await this.downloadService.restartTasks(G);
      }
      async handleSortTasks(F, G) {
        if (!(0, A.isArr)(G)) {
          throw new Error("An array param(orderList) is required!");
        }
        return await this.downloadService.sortDownloadTasks(G);
      }
      async handleDeleteTasks(F, G) {
        if (!(0, A.isArr)(G?.taskIds)) {
          throw new Error("An array param(taskIds) is required!");
        }
        return await this.downloadService.deleteTasks(G);
      }
      async handleStartAllTasks() {
        const F = this.storeService.getUserInfo();
        if (!F.isLogin) {
          throw new Error("This action must login!");
        }
        return await this.downloadService.startAllTasks();
      }
      async handlePauseAllTasks() {
        return await this.downloadService.pauseAllDownloadTasks();
      }
      async handleDeleteAllTasks() {
        return await this.downloadService.deleteAllTasks();
      }
      async handleGetItemPlayerUrl(F, G) {
        if (h.yFzQs !== "YVoYM") {
          return await this.downloadService.biliDownload.getLocalPlayurl(G);
        } else {
          h.returnValue = this.storeService.getIsQuitDialogPoped();
        }
      }
      async handleGetItemRangeStream(F, G) {
        return await this.downloadService.biliDownload.getRangeStreams(G);
      }
      async handleGetItemDmInfo(F, G) {
        return await this.downloadService.biliDownload.getDmInfo(G);
      }
      async handleUpdateItemDmInfo(F, G) {
        if (!G?.itemId) {
          throw new Error("A param(itmeId) is required!");
        }
        return await this.downloadService.updateItemDmInfo(G);
      }
      async handleDownloadURL(F, G) {
        return this.configService.mainWindow.webContents.downloadURL(G);
      }
    };
    i([(0, t.IpcInvoke)("download/reloadVideoList", {
      scopes: [h.uqEZw, "playerWindow"]
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], D.prototype, "handleReloadVideoList", null);
    i([(0, t.IpcInvoke)("download/getAllVideoList", {
      scopes: ["mainWindow", "playerWindow"]
    }), h.SJzih(j, "design:type", Function), j("design:paramtypes", [typeof (n = typeof C.IpcMainEvent !== "undefined" && C.IpcMainEvent) === "function" ? n : Object, Object]), j("design:returntype", Promise)], D.prototype, "handleGetAllVideoList", null);
    i([(0, t.IpcInvoke)("download/getCompletedItems", {
      scopes: ["mainWindow", "playerWindow"]
    }), j("design:type", Function), h.SJzih(j, h.wQAUA, []), j(h.YOZqz, Promise)], D.prototype, "handleGetCompletedItems", null);
    i([(0, t.IpcInvoke)("download/getCompletedGroups", {
      scopes: ["mainWindow", "playerWindow"]
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], D.prototype, "handleGetCompletedGroups", null);
    i([(0, t.IpcInvoke)("download/getGroupAllItems", {
      scopes: ["mainWindow", "playerWindow"]
    }), j("design:type", Function), j("design:paramtypes", [Object, Object]), j("design:returntype", Promise)], D.prototype, "handleGetGroupAllItems", null);
    i([(0, t.IpcInvoke)("download/sortGroupList", {
      scopes: ["mainWindow", "playerWindow"]
    }), h.SJzih(j, "design:type", Function), j("design:paramtypes", [Object, Array]), j("design:returntype", Promise)], D.prototype, "handleSortGroupList", null);
    i([(0, t.IpcInvoke)("download/deleteGroups", {
      scopes: ["mainWindow", "playerWindow"]
    }), j("design:type", Function), j("design:paramtypes", [Object, Object]), j(h.YOZqz, Promise)], D.prototype, "handleDeleteGroups", null);
    i([(0, t.IpcInvoke)("download/deleteAllGroups", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], D.prototype, "handleDeleteAllGroups", null);
    i([(0, t.IpcInvoke)("download/getGroupItems", {
      scope: "mainWindow"
    }), j("design:type", Function), h.vCXTe(j, "design:paramtypes", [Object, Object]), j("design:returntype", Promise)], D.prototype, "handleGetGroupItems", null);
    h.ckxNy(i, [(0, t.IpcInvoke)("download/deleteGroupItems", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, Object]), j(h.YOZqz, Promise)], D.prototype, "handleDeleteGroupItems", null);
    i([(0, t.IpcInvoke)("download/getItemInfo", {
      scopes: ["mainWindow", "playerWindow"]
    }), j("design:type", Function), h.ryrOD(j, "design:paramtypes", [Object, Object]), h.ryrOD(j, "design:returntype", Promise)], D.prototype, "handleGetItemInfo", null);
    h.SoISO(i, [(0, t.IpcInvoke)("download/getItemsInfo", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, Object]), j("design:returntype", Promise)], D.prototype, "handleGetItemsInfo", null);
    i([(0, t.IpcInvoke)("download/setItemStatus", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, Object]), j("design:returntype", Promise)], D.prototype, "handleSetItemStatus", null);
    i([(0, t.IpcInvoke)(h.UssOK, {
      scope: h.uqEZw
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], D.prototype, "handleGetTaskList", null);
    i([(0, t.IpcInvoke)("download/createTasks", {
      scopes: ["mainWindow", "playerWindow"]
    }), j("design:type", Function), j(h.wQAUA, [Object, Object]), j("design:returntype", Promise)], D.prototype, h.VwOtu, null);
    i([(0, t.IpcInvoke)("download/pauseTasks", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, Object]), h.ryrOD(j, "design:returntype", Promise)], D.prototype, "handlePauseTasks", null);
    i([(0, t.IpcInvoke)("download/restartTasks", {
      scope: h.uqEZw
    }), j("design:type", Function), j("design:paramtypes", [Object, Object]), j("design:returntype", Promise)], D.prototype, "handleRestartTasks", null);
    i([(0, t.IpcInvoke)("download/sortTasks", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, Array]), j("design:returntype", Promise)], D.prototype, "handleSortTasks", null);
    i([(0, t.IpcInvoke)(h.jvnbQ, {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, Object]), j(h.YOZqz, Promise)], D.prototype, "handleDeleteTasks", null);
    i([(0, t.IpcInvoke)("download/startAllTasks", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], D.prototype, h.FvcPn, null);
    i([(0, t.IpcInvoke)(h.wCRsv, {
      scope: h.uqEZw
    }), j("design:type", Function), j(h.wQAUA, []), j("design:returntype", Promise)], D.prototype, "handlePauseAllTasks", null);
    i([(0, t.IpcInvoke)("download/deleteAllTasks", {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", []), j("design:returntype", Promise)], D.prototype, h.nECGq, null);
    h.SoISO(i, [(0, t.IpcInvoke)("download/getItemPlayerUrl", {
      scope: "playerWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, Number]), h.gHJeo(j, "design:returntype", Promise)], D.prototype, "handleGetItemPlayerUrl", null);
    i([(0, t.IpcInvoke)("download/getItemRangeStream", {
      scope: h.WQdmU
    }), j("design:type", Function), j("design:paramtypes", [Object, typeof (o = typeof B.ILoadVideoParam !== "undefined" && B.ILoadVideoParam) === "function" ? o : Object]), h.SJzih(j, "design:returntype", Promise)], D.prototype, "handleGetItemRangeStream", null);
    h.deMKA(i, [(0, t.IpcInvoke)("download/getItemDmInfo", {
      scope: "playerWindow"
    }), h.BqEgH(j, "design:type", Function), j("design:paramtypes", [Object, typeof (q = typeof B.ILoadDmParam !== "undefined" && B.ILoadDmParam) === "function" ? q : Object]), j("design:returntype", Promise)], D.prototype, "handleGetItemDmInfo", null);
    i([(0, t.IpcInvoke)("download/updateItemDmInfo", {
      scopes: ["mainWindow", "playerWindow"]
    }), j("design:type", Function), j("design:paramtypes", [Object, Object]), j("design:returntype", Promise)], D.prototype, h.CYTkp, null);
    i([(0, t.IpcInvoke)(h.tzjpH, {
      scope: "mainWindow"
    }), j("design:type", Function), j("design:paramtypes", [Object, String]), j("design:returntype", Promise)], D.prototype, "handleDownloadURL", null);
    D = i([(0, r.Controller)(), j("design:paramtypes", [typeof (k = typeof u.ConfigService !== "undefined" && u.ConfigService) === "function" ? k : Object, h.RpuPi(typeof (l = typeof w.DownloadService !== "undefined" && w.DownloadService), "function") ? l : Object, typeof (m = typeof z.StoreService !== "undefined" && z.StoreService) === "function" ? m : Object])], D);
    g.DownloadController = D;
  }
});
var jL = bX({
  ""(g) {
    'use strict';

    var h = g && g.__decorate || function (m, n, o, q) {
      var t = arguments.length;
      var u = t < 3 ? n : q === null ? q = Object.getOwnPropertyDescriptor(n, o) : q;
      var w;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        u = Reflect.decorate(m, n, o, q);
      } else {
        for (var z = m.length - 1; z >= 0; z--) {
          if (w = m[z]) {
            u = (t < 3 ? w(u) : t > 3 ? w(n, o, u) : w(n, o)) || u;
          }
        }
      }
      if (t > 3 && u) {
        Object.defineProperty(n, o, u);
      }
      return u;
    };
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.DownloadModule = undefined;
    var i = require("@nestjs/common");
    var j = jK();
    var k = iU();
    var l = class m {};
    l = h([(0, i.Global)(), (0, i.Module)({
      controllers: [j.DownloadController],
      providers: [k.DownloadService],
      exports: [k.DownloadService]
    })], l);
    g.DownloadModule = l;
  }
});
var jM = bX({
  ""(g) {
    'use strict';

    var h = {
      DQYPc: function (A, B) {
        return A >= B;
      },
      BjkNC: "GameController",
      mYuMp: "configService",
      HgOqq: "kTFUR",
      cGfTD: "resumeAll",
      vNMxW: function (A) {
        return A();
      },
      TnQWw: function (A, B) {
        return A !== B;
      },
      WIWQC: "undefined",
      vlPZN: function (A, B, C) {
        return A(B, C);
      },
      cClpX: "design:type",
      WfOzg: "design:returntype",
      poWGX: "design:paramtypes",
      zxuLE: function (A, B) {
        return A !== B;
      },
      bCdQk: "function"
    };
    var i = g && g.__decorate || function (A, B, C, D) {
      var E = arguments.length;
      var F = E < 3 ? B : D === null ? D = Object.getOwnPropertyDescriptor(B, C) : D;
      var G;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        F = Reflect.decorate(A, B, C, D);
      } else {
        for (var H = A.length - 1; h.DQYPc(H, 0); H--) {
          if (G = A[H]) {
            F = (E < 3 ? G(F) : E > 3 ? G(B, C, F) : G(B, C)) || F;
          }
        }
      }
      if (E > 3 && F) {
        Object.defineProperty(B, C, F);
      }
      return F;
    };
    var j = g && g.__metadata || function (A, B) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
        return Reflect.metadata(A, B);
      }
    };
    var k;
    var l;
    var m;
    var n;
    var o;
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.GameController = undefined;
    var q = require("@nestjs/common");
    h.vNMxW(ga);
    var r = c2(g9);
    var t = gK();
    var u = j5();
    var w = require("electron");
    var z = class A extends r.BaseController {
      constructor(B, C) {
        super(B, h.BjkNC);
        c3(this, h.mYuMp);
        c3(this, "gameService");
        this.configService = B;
        this.gameService = C;
      }
      async handleGetGameList(B, C = {}) {
        return this.gameService.getGameList(C);
      }
      async handleGetGameInfo(B, C) {
        if (h.HgOqq === "AHdBh") {
          const E = h.toString();
          this.appLogs.push(E);
          if (this.appLogs.length > this.appLogLimit) {
            this.appLogs.shift();
          }
          this.eventsService.emitAppLogChange(E);
        } else {
          return this.gameService.gameList.find(E => E.id === C);
        }
      }
      async handleSendGameAction(B, C = {}) {
        const D = B.sender;
        const E = new URL(D.getURL());
        if (!E.host.match(/(bilibili|biligame).com/)) {
          throw new Error("Illegal action");
        }
        switch (C.type) {
          case "download":
            {
              return this.gameService.downloadNewGame(C.data);
            }
          case "pause":
            {
              return this.gameService.pauseDownloadGame(C.data?.id);
            }
          case "pauseAll":
            {
              return this.gameService.pauseDownloadAllGames();
            }
          case "pausePop":
            {
              return this.gameService.setGamePausePop(C.data?.ids);
            }
          case "resume":
            {
              return this.gameService.resumeDownloadGame(C.data?.id);
            }
          case h.cGfTD:
            {
              return this.gameService.resumeDownloadAllGames();
            }
          case "delete":
            {
              return this.gameService.deleteGame(C.data?.id);
            }
          case "openDir":
            {
              return this.gameService.openGameDir(C.data?.id);
            }
          case "openPath":
            {
              return this.gameService.openGamePath(C.data?.id);
            }
          case "install":
            {
              return this.gameService.installGame(C.data?.id);
            }
          case "launch":
            {
              return this.gameService.launchGame(C.data?.id);
            }
        }
      }
    };
    i([(0, r.IpcInvoke)("game/getGameList"), j("design:type", Function), j("design:paramtypes", [typeof (m = h.TnQWw(typeof w.IpcMainEvent, h.WIWQC) && w.IpcMainEvent) === "function" ? m : Object, Object]), h.vlPZN(j, "design:returntype", Promise)], z.prototype, "handleGetGameList", null);
    i([(0, r.IpcInvoke)("game/getGameInfo"), j(h.cClpX, Function), j("design:paramtypes", [typeof (n = typeof w.IpcMainEvent !== "undefined" && w.IpcMainEvent) === "function" ? n : Object, String]), j(h.WfOzg, Promise)], z.prototype, "handleGetGameInfo", null);
    i([(0, r.IpcInvoke)("game/sendAction"), j("design:type", Function), h.vlPZN(j, h.poWGX, [typeof (o = typeof w.IpcMainEvent !== "undefined" && w.IpcMainEvent) === "function" ? o : Object, Object]), j("design:returntype", Promise)], z.prototype, "handleSendGameAction", null);
    z = i([(0, q.Controller)(), j("design:paramtypes", [typeof (k = h.zxuLE(typeof t.ConfigService, "undefined") && t.ConfigService) === h.bCdQk ? k : Object, typeof (l = typeof u.GameService !== "undefined" && u.GameService) === "function" ? l : Object])], z);
    g.GameController = z;
  }
});
var jN = bX({
  ""(g) {
    'use strict';

    var h = g && g.__decorate || function (m, n, o, q) {
      var t = arguments.length;
      var u = t < 3 ? n : q === null ? q = Object.getOwnPropertyDescriptor(n, o) : q;
      var w;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        u = Reflect.decorate(m, n, o, q);
      } else {
        for (var z = m.length - 1; z >= 0; z--) {
          if (w = m[z]) {
            u = (t < 3 ? w(u) : t > 3 ? w(n, o, u) : w(n, o)) || u;
          }
        }
      }
      if (t > 3 && u) {
        Object.defineProperty(n, o, u);
      }
      return u;
    };
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.GameModule = undefined;
    var i = require("@nestjs/common");
    var j = jM();
    var k = j5();
    var l = class m {};
    l = h([(0, i.Global)(), (0, i.Module)({
      controllers: [j.GameController],
      providers: [k.GameService],
      exports: [k.GameService]
    })], l);
    g.GameModule = l;
  }
});
var jO = bX({
  ""(g) {
    'use strict';

    var i = g && g.__decorate || function (F, G, H, I) {
      var J = arguments.length;
      var K = J < 3 ? G : I === null ? I = Object.getOwnPropertyDescriptor(G, H) : I;
      var L;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
        K = Reflect.decorate(F, G, H, I);
      } else {
        for (var M = F.length - 1; M >= 0; M--) {
          if (L = F[M]) {
            K = (J < 3 ? L(K) : J > 3 ? L(G, H, K) : L(G, H)) || K;
          }
        }
      }
      if (J > 3 && K) {
        Object.defineProperty(G, H, K);
      }
      return K;
    };
    Object.defineProperty(g, "__esModule", {
      value: true
    });
    g.AppModule = undefined;
    var j = require("@nestjs/common");
    var k = jp();
    var l = jm();
    var m = jh();
    var n = jr();
    var o = ju();
    var q = jv();
    var r = jx();
    var t = jz();
    var u = jA();
    var w = jC();
    var z = jE();
    var A = jH();
    var B = jJ();
    var C = jL();
    var D = jN();
    var E = class F {};
    E = i([(0, j.Module)({
      imports: [o.WindowModule, n.ConfigModule, q.UtilsModule, r.StoreModule, t.EventsModule, u.FetchModule, w.ReportModule, z.AuthModule, A.SystemModule, B.UpdateModule, C.DownloadModule, D.GameModule],
      controllers: [k.AppController],
      providers: [l.AppService, m.AppEvents]
    })], E);
    g.AppModule = E;
  }
});
var jP = require("@nestjs/core");
var jQ = c1(jO());
var jR = require("electron");
var jS = require("fs");
var jT = require("path");
dn();
ga();
fP();
var jU = c1(require("electron-log"));
var jV = jU.default.scope("AppBootstrap");
var jW = (0, jT.resolve)(__dirname, "../");
var jX = cN((0, jT.join)(jW, "main/index.js"));
var jY = "";
if (!dz) {
  const k3 = "applicationkey".replace("lication", "");
  const k4 = (0, jS.readFileSync)((0, jT.join)(jW, "." + k3), {
    encoding: "utf-8"
  });
  const k5 = k4.split(".")[1];
  const k6 = cG(jX, 18);
  if (k5 !== k6) {
    jV.error("Start error, code: 011");
    jR.dialog.showErrorBox("警告", "程序异常，无法正常运行！错误代码：011");
    process.exit(1);
  }
  global.biliHash = k5 + "." + k6;
  jY = k4.split(".")[0];
}
if (jR.app.isPackaged && cP(jW) !== jY) {
  jV.error("Start error, code: 012");
  jR.dialog.showErrorBox("警告", "程序异常，无法正常运行！错误代码：012");
  process.exit(1);
}
var jZ = cp;
var k0 = du && jZ === "mac" || dt && jZ === "win";
if (!k0 && !dw) {
  if (!dv) {
    jV.error("Start error, code: 021");
    jR.dialog.showErrorBox("警告", "程序错误，无法正常运行！错误代码：021");
    process.exit(1);
  } else if (jZ !== "linux") {
    jV.error("Start error, code: 022");
    jR.dialog.showErrorBox("警告", "程序异常，继续运行可能存在安全风险！错误代码：022");
  }
}
global.bootstrapBiliApp = async () => {
  if (!global.isFiredByEntry) {
    jV.error("Start error, code: 031");
    jR.dialog.showErrorBox("警告", "程序异常，无法正常运行！错误代码：031");
    process.exit(1);
  }
  try {
    global.bootstrapTime = Date.now();
    const g = await jP.NestFactory.createMicroservice(jQ.AppModule, {
      strategy: new g7()
    });
    g.useGlobalFilters(new g9.GlobalExceptionsFilter());
    await g.listen();
  } catch (i) {
    jV.error(i);
    jR.app.quit();
  }
};