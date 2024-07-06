class Validate {
  constructor() {
    this.form = document.querySelector("form");
    // Taken from: https://gist.github.com/ShreyKumar/43ebb040383c90ed976439245423aa38
    this.zipRegexPatterns = {
      af: /[0-9]{4}/,
      al: /(120|122)[0-9]{2}/,
      dz: /[0-9]{5}/,
      as: /[0-9]{5}/,
      ad: /[0-9]{5}/,
      ao: /^\d{5}$/,
      ai: /AI-2640/,
      ag: /\d{5}(?:[-\s]\d{4})?/,
      ar: /[A-Z]{1}[0-9]{4}[A-Z]{3}/,
      am: /[0-9]{4}/,
      aw: /^\d{5}$/,
      au: /[0-9]{4}/,
      at: /[0-9]{4}/,
      az: /[0-9]{4}/,
      bs: /^\d{5}$/,
      bh: /^\d{5}$/,
      bd: /[0-9]{4}/,
      bb: /BB[0-9]{5}/,
      by: /[0-9]{6}/,
      be: /[0-9]{4}/,
      bz: /^\d{5}$/,
      bj: /^\d{5}$/,
      bm: /[A-Z]{2}[0-9]{2}/,
      bt: /[0-9]{5}/,
      bo: /^\d{5}$/,
      bq: /^\d{5}$/,
      ba: /[0-9]{5}/,
      bw: /^\d{5}$/,
      br: /[0-9]{5}-[0-9]{3}/,
      bn: /[A-Z]{2}[0-9]{4}/,
      bg: /[0-9]{4}/,
      bf: /^\d{5}$/,
      bi: /^\d{5}$/,
      kh: /[0-9]{5}/,
      cm: /^\d{5}$/,
      ca: /[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]/,
      ci: /^\d{5}$/,
      cv: /[0-9]{4}/,
      ky: /[A-Z]{2}[0-9]-[0-9]{4}/,
      cf: /^\d{5}$/,
      td: /^\d{5}$/,
      cl: /[0-9]{7}/,
      cn: /[0-9]{6}/,
      co: /[0-9]{6}/,
      km: /^\d{5}$/,
      cg: /^\d{5}$/,
      cd: /^\d{5}$/,
      ck: /^\d{5}$/,
      cr: /[0-9]{5}/,
      hr: /[0-9]{5}/,
      cu: /[0-9]{5}/,
      cw: /^\d{5}$/,
      cy: /[0-9]{4}/,
      cz: /[0-9]{3} [0-9]{2}/,
      dk: /[0-9]{5}/,
      dj: /^\d{5}$/,
      dm: /^\d{5}$/,
      do: /[0-9]{5}/,
      tl: /^\d{5}$/,
      ec: /[0-9]{6}/,
      eg: /[0-9]{5}/,
      sv: /[0-9]{4}/,
      er: /^\d{5}$/,
      ee: /[0-9]{5}/,
      et: /[0-9]{4}/,
      fk: /FIQQ 1ZZ/,
      fo: /[0-9]{3}/,
      fj: /^\d{5}$/,
      fi: /[0-9]{5}/,
      fr: /[0-9]{5}/,
      pf: /[0-9]{5}/,
      ga: /^\d{5}$/,
      gm: /^\d{5}$/,
      ge: /^\d{5}$/,
      de: /[0-9]{5}/,
      gh: /^\d{5}$/,
      gi: /GX11 1AA/,
      gr: /[0-9]{3} [0-9]{2}/,
      gl: /[0-9]{4}/,
      gd: /^\d{5}$/,
      gp: /971[0-9]{2}/,
      gu: /\d{5}(?:[-\s]\d{4})?/,
      gt: /[0-9]{5}/,
      gg: /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/,
      gw: /[0-9]{4}/,
      gq: /^\d{5}$/,
      gn: /[0-9]{3}/,
      gy: /^\d{5}$/,
      gf: /973[0-9]{2}/,
      ht: /[0-9]{4}/,
      hn: /[0-9]{5}/,
      hk: /^\d{5}$/,
      hu: /[0-9]{4}/,
      is: /[0-9]{3}/,
      in: /[1-9][0-9]{5}/,
      id: /[0-9]{5}/,
      ir: /[0-9]{5}/,
      iq: /[0-9]{5}/,
      ie: /(?:^[AC-FHKNPRTV-Y][0-9]{2}|D6W)[ -]?[0-9AC-FHKNPRTV-Y]{4}$/,
      il: /[0-9]{5}|[0-9]{7}/,
      it: /[0-9]{5}/,
      jm: /^\d{5}$/,
      jp: /[0-9]{3}-[0-9]{4}/,
      je: /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/,
      jo: /[0-9]{5}/,
      kz: /[0-9]{6}/,
      ke: /[0-9]{5}/,
      ki: /^\d{5}$/,
      kr: /[0-9]{5}/,
      kp: /^\d{5}$/,
      xk: /[0-9]{5}/,
      kw: /[0-9]{5}/,
      kg: /[0-9]{6}/,
      la: /[0-9]{5}/,
      lv: /LV-[0-9]{4}/,
      lb: /[0-9]{4} [0-9]{4}/,
      ls: /[0-9]{3}/,
      lr: /[0-9]{4}/,
      ly: /^\d{5}$/,
      li: /[0-9]{4}/,
      lt: /LT-[0-9]{5}/,
      lu: /[0-9]{4}/,
      mo: /^\d{5}$/,
      mk: /[0-9]{4}/,
      mg: /[0-9]{3}/,
      mw: /^\d{5}$/,
      my: /[0-9]{5}/,
      mv: /[0-9]{5}/,
      ml: /^\d{5}$/,
      mt: /[A-Z]{3} [0-9]{4}/,
      mh: /\d{5}(?:[-\s]\d{4})?/,
      mq: /972[0-9]{2}/,
      mr: /^\d{5}$/,
      mu: /[0-9]{5}/,
      yt: /976[0-9]{2}/,
      mx: /[0-9]{5}/,
      md: /MD-?[0-9]{4}/,
      mc: /980[0-9]{2}/,
      mn: /[0-9]{5}/,
      me: /[0-9]{5}/,
      ms: /MSR [0-9]{4}/,
      ma: /[0-9]{5}/,
      mz: /[0-9]{4}/,
      mm: /[0-9]{5}/,
      na: /^\d{5}$/,
      nr: /^\d{5}$/,
      np: /[0-9]{5}/,
      nl: /(?:NL-)?(\d{4})\s*([A-Z]{2})/,
      nc: /988[0-9]{2}/,
      nz: /[0-9]{4}/,
      ni: /^\d{5}$/,
      ne: /[0-9]{4}/,
      ng: /[0-9]{6}/,
      nu: /^\d{5}$/,
      mp: /96950/,
      no: /[0-9]{4}/,
      om: /[0-9]{3}/,
      pk: /[0-9]{5}/,
      pw: /\d{5}(?:[-\s]\d{4})?/,
      pa: /[0-9]{4}/,
      pg: /[0-9]{3}/,
      py: /[0-9]{4}/,
      pe: /[0-9]{5}/,
      ph: /[0-9]{4}/,
      pl: /[0-9]{2}-[0-9]{3}/,
      pt: /[0-9]{4}-[0-9]{3}/,
      pr: /\d{5}(?:[-\s]\d{4})?/,
      qa: /^\d{5}$/,
      re: /974[0-9]{2}/,
      ro: /[0-9]{6}/,
      ru: /[0-9]{6}/,
      rw: /^\d{5}$/,
      ws: /WS[0-9]{4}/,
      st: /^\d{5}$/,
      sa: /[0-9]{5}(-[0-9]{4})?/,
      sn: /[0-9]{5}/,
      rs: /[0-9]{5}/,
      sc: /^\d{5}$/,
      sl: /^\d{5}$/,
      sg: /[0-9]{6}/,
      sk: /[0-9]{3} [0-9]{2}/,
      si: /[0-9]{4}/,
      sb: /^\d{5}$/,
      so: /[A-Z]{2} [0-9]{5}/,
      za: /[0-9]{4}/,
      ss: /^\d{5}$/,
      es: /[0-9]{5}/,
      lk: /[0-9]{4}/,
      bl: /[0-9]{5}/,
      vi: /\d{5}(?:[-\s]\d{4})?/,
      se: /[0-9]{3} [0-9]{2}/,
      sh: /STHL 1ZZ/,
      kn: /[A-Z]{2}[0-9]{4}/,
      lc: /[A-Z]{2}[0-9]{2} [0-9]{3}/,
      sx: /^\d{5}$/,
      vc: /VC[0-9]{4}/,
      sd: /[0-9]{5}/,
      sr: /^\d{5}$/,
      sz: /[A-Z]{1}[0-9]{3}/,
      ch: /[0-9]{4}/,
      sy: /^\d{5}$/,
      tw: /[0-9]{3}(-[0-9]{2})?/,
      tz: /[0-9]{5}/,
      th: /[0-9]{5}/,
      tg: /^\d{5}$/,
      to: /^\d{5}$/,
      vg: /VG[0-9]{4}/,
      tt: /[0-9]{6}/,
      tn: /[0-9]{4}/,
      tr: /[0-9]{5}/,
      tm: /[0-9]{6}/,
      tc: /TKCA 1ZZ/,
      tv: /^\d{5}$/,
      ug: /^\d{5}$/,
      ua: /[0-9]{5}/,
      ae: /^\d{5}$/,
      gb: /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/,
      us: /\d{5}(?:[-\s]\d{4})?/,
      uy: /[0-9]{5}/,
      uz: /[0-9]{6}/,
      vu: /^\d{5}$/,
      ve: /[0-9]{4}(-[A-Z]{1})?/,
      vn: /[0-9]{6}/,
      ye: /^\d{5}$/,
      zm: /[0-9]{5}/,
      zw: /^\d{5}$/,
    };
  }
  validateEmail() {
    const email = this.form.querySelector("#email");
    const output = this.form.querySelector('output[for="email"]');
    if (email.validity.valueMissing) {
      this.showError(output, "The email field is empty.");
    } else if (email.validity.typeMismatch) {
      this.showError(output, "Please enter a valid email address.")
    } else {
      this.hideError(output);
    }
  }
  validateZipCode() {
    const zip = this.form.querySelector("#zip");
    const country = this.form.querySelector("#country");
    const output = this.form.querySelector('output[for="zip"]');
    const pattern = this.zipRegexPatterns[country.value] ?? /.*/;
    if (!pattern.test(zip.value)) {
      this.showError(output, "This zip code format is not appropriate for the selected country.");
    } else {
      this.hideError(output);
    }
  }
  validatePassWidget(passElement, outputElement) {
    if (passElement.validity.tooShort) {
      this.showError(outputElement, "The password must be at least 10 characters long.");
    } else if (passElement.validity.tooLong) {
      this.showError(outputElement, "The password can't be more than 100 characters long.");
    } else {
      this.hideError(outputElement);
    }
  }
  validatePassword() {
    const password = this.form.querySelector("#password");
    const output = this.form.querySelector('output[for="password"]');
    this.validatePassWidget(password, output);
  }
  validatePasswordConfirm() {
    const password = this.form.querySelector("#password");
    const passwordConf = this.form.querySelector("#password-confirm");
    const output = this.form.querySelector('output[for="password-confirm"]');
    if (passwordConf.value !== password.value) {
      this.showError(output, "The passwords do not match.");
    } else if (!passwordConf.validity.valid) {
      this.validatePassWidget(passwordConf, output);
    } else {
      this.hideError(output);
    }
  }
  showError(outputElement, message) {
    outputElement.classList.add("active");
    outputElement.textContent = message;
  }
  hideError(outputElement) {
    outputElement.classList.remove("active");
    outputElement.textContent = "";
  }
}

const validate = new Validate();
