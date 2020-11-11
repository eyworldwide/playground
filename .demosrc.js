var pkg = require("./package.json");

module.exports = {
  name: "Oasis Playground",
  version: `v${pkg.version}`,
  homePage: "https://oasis3d.alipay.com/",
  boxTheme: "monokai", // 配置代码编辑器的主题
  // 可选主题: active4d, allHallowsEve, amy, blackboard, brillianceBlack,
  // brillianceDull, chromeDevtools, cloudsMidnight, clouds, cobalt,
  // dawn, dreamweaver, eiffel, espressoLibre, github, idle, katzenmilch,
  // kuroirTheme, lazy, magicwbAmiga, merbivoreSoft, merbivore, monokai,
  // pastelsOnDark, slushAndPoppies, solarizedDark, solarizedLight,
  // spacecadet, sunburst, textmateMacClassic, tomorrowNightBlue,
  // tomorrowNightBright, tomorrowNightEighties, tomorrowNight, tomorrow,
  // twilight, vibrantInk, zenburnesque, iplastic, idlefingers, krtheme,
  // monoindustrial,
  globalPackages: {
    js: [
      "https://cdn.jsdelivr.net/npm/dat.gui@0.7.7/build/dat.gui.min.js",
      "https://gw.alipayobjects.com/os/lib/oasis-engine/0.1.0/dist/browser.min.js",
      "https://gw.alipayobjects.com/os/lib/oasis-engine/tween/0.1.0/dist/browser.min.js",
      "https://gw.alipayobjects.com/os/lib/oasis-engine/controls/0.1.0/dist/browser.js",
      "https://gw.alipayobjects.com/os/lib/oasis-engine/framebuffer-picker/0.1.0/dist/browser.js"
    ]
  }
};