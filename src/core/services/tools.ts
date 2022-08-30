/* eslint-disable */

export const tools = {
  makeCapitalCase: (s: any) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.toLowerCase().slice(1);
  },
  toLowerCase: (s: string) => {
    if (typeof s !== "string") return "";
    return s.toLowerCase();
  },
  isEmailValid: (email: string) => {
    var re =
      /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
    return re.test(String(email).toLowerCase());
  },
  parseBool: (str: string) => {
    let val = false;
    if (typeof str === "string") {
      if (str.trim().toLowerCase() === "true") {
        val = true;
      } else if (str.trim().toLowerCase() === "false") {
        val = false;
      }
      return val;
    } else {
      return str;
    }
  },
  justNumber: (str: string) => {
    let result = str.replace(/[^\d]/g, "");
    return result;
  },

  justEnglish: (value: string) => {
    return `${value}`.replace(/[^a-zA-Z\s]/g, "");
  },

  isObject: (data: any): boolean => {
    return data && typeof data === "object";
  },

  toObject(data: any) {
    return this.isObject(data) ? data : {};
  },

  isArray: (data: any): boolean => {
    return data && typeof data === "object" && data.constructor === Array;
  },
  toArray(data: any[]) {
    return this.isArray(data) ? data : [];
  },
  toStringOrHyphen: (value: string) => {
    return value ? `${value}`.trim() : tools.emptyState();
  },
  previewFile: (
    fileBlob: any,
    callback = (e: string | ArrayBuffer | null) => {}
  ) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result);
    };
    reader.readAsDataURL(fileBlob);
  },
  scrollToTop: (ref: any) => {
    ref.current.scrollTo(0, 0);
  },
  emptyState: () => "---",
  // converts number to string representation with K and M.
  // toFixed(d) returns a string that has exactly 'd' digits
  // after the decimal place, rounding if necessary.
  numFormatterToTruncate: (num: any, fractionDigits: number = 1) => {
    if (num === null || num === undefined) return tools.emptyState();
    //---
    if (num > 999 && num < 1000000) {
      return (num / 1000) % 1 === 0
        ? num / 1000 + "K"
        : (num / 1000).toFixed(fractionDigits) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000) % 1 === 0
        ? num / 1000000 + "M"
        : (num / 1000000).toFixed(fractionDigits) + "M"; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  },
  thousandSeparator: (number: string) => {
    if (number) {
      let n = parseFloat(number);
      return n.toLocaleString();
    } else {
      return number;
    }
  },
  isLocalhost: () =>
    Boolean(
      window.location.hostname === "localhost" ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === "[::1]" ||
        // 127.0.0.1/8 is considered localhost for IPv4.
        window.location.hostname.match(
          /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
    ),
  isArrayContain: (srcArray: string[], checkArrayExistInSrcArray: string[]) => {
    return srcArray.some((e) => checkArrayExistInSrcArray.includes(e));
  },
  isBrowser: () => typeof window !== "undefined",
};
