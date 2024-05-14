// .wrangler/tmp/bundle-zrKjyv/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// build/worker/shim.mjs
import P from "./c9191e60182b65a5672db35b2077995cd0d613a5-index.wasm";
import Ye from "./c9191e60182b65a5672db35b2077995cd0d613a5-index.wasm";
import { WorkerEntrypoint as He } from "cloudflare:workers";
var I = Object.defineProperty;
var D = (t, e) => {
  for (var n in e)
    I(t, n, { get: e[n], enumerable: true });
};
var d = {};
D(d, { IntoUnderlyingByteSource: () => E, IntoUnderlyingSink: () => T, IntoUnderlyingSource: () => h, MinifyConfig: () => x, PolishConfig: () => Q, R2Range: () => q, RequestRedirect: () => Y, __wbg_append_7bfcb4937d1d5e29: () => Yt, __wbg_body_17b435cb52dcf45f: () => Bt, __wbg_body_9545a94f397829db: () => Et, __wbg_buffer_12d079cc21e14bdb: () => Ee, __wbg_buffer_dd7f74bc60f1faab: () => Ce, __wbg_byobRequest_72fca99f9c32c193: () => Lt, __wbg_byteLength_58f7b4fab1919d44: () => Ue, __wbg_byteOffset_81d60f7392524f62: () => We, __wbg_call_27c0f87801dedf93: () => ae, __wbg_call_b3ca7c6051f9bec1: () => me, __wbg_cancel_6ee33d4006737aef: () => Wt, __wbg_catch_0260e338d10f79ae: () => Me, __wbg_cause_3d9c85ebaf6b1155: () => he, __wbg_cf_b1ddc6b9d2f719aa: () => kt, __wbg_close_184931724d961ccc: () => vt, __wbg_close_a994f9425dab445c: () => Jt, __wbg_constructor_1d9b26449d83b236: () => Fe, __wbg_done_298b57d23c0fc80c: () => se, __wbg_done_2ffa852272310e47: () => yt, __wbg_enqueue_ea194723156c0cc2: () => Vt, __wbg_entries_a23fead5f1cc4139: () => Ft, __wbg_error_8e3928cfb8a43e2b: () => Gt, __wbg_error_f851667af71bcfc6: () => st, __wbg_fetch_77c3aab3dee20e7c: () => Ot, __wbg_fetch_bc400efeda8ac0c8: () => jt, __wbg_getReader_ab94afcb5cb7689a: () => pt, __wbg_get_bd8e338fbd5f5cc8: () => _e, __wbg_get_e3c254076557e348: () => fe, __wbg_globalThis_d1e6af4856ba331b: () => we, __wbg_global_207b558942527489: () => le, __wbg_headers_9620bfada380764a: () => zt, __wbg_headers_abb199c3be8d817c: () => Pt, __wbg_httpProtocol_4d577fc24f15a233: () => mt, __wbg_instanceof_Error_e20bb56fd5591a93: () => pe, __wbg_instanceof_ReadableStream_68ecb420c904a644: () => Xt, __wbg_instanceof_Response_849eb93e75734b6e: () => Mt, __wbg_length_c20a40f15020d68a: () => Le, __wbg_log_5bb5f88f245d7762: () => Kt, __wbg_method_83327ed2e3f3229c: () => It, __wbg_minifyconfig_new: () => gt, __wbg_name_72024f5702a32334: () => Re, __wbg_new_28c511d9baebfa89: () => ye, __wbg_new_63b92bc8671ed464: () => qe, __wbg_new_72fb9a18b5ae2624: () => be, __wbg_new_81740750da40724f: () => je, __wbg_new_ab6fd82b10560829: () => Qt, __wbg_new_abda76e883ba8a5f: () => ct, __wbg_new_d9bc3a0147634640: () => ce, __wbg_newnoargs_e258087cd0daa0ea: () => oe, __wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb: () => Te, __wbg_newwithintounderlyingsource_a03a82aa1bbbb292: () => xt, __wbg_newwithlength_e9b4878cebadb3d3: () => ve, __wbg_newwithoptbuffersourceandinit_a4fa81e77259bb96: () => Tt, __wbg_newwithoptreadablestreamandinit_0b825f969ca543d6: () => At, __wbg_newwithoptstrandinit_219732174c595a25: () => qt, __wbg_newwithstrandinit_3fd6fba4083ff2d0: () => Ht, __wbg_next_196c84450b364254: () => ie, __wbg_queueMicrotask_3cbae2ec6b6cd3d6: () => ee, __wbg_queueMicrotask_481971b0d87f3dd4: () => re, __wbg_read_e7d0f8a49be01d86: () => Ct, __wbg_redirect_53aa50ab48e7a227: () => $t, __wbg_releaseLock_5c49db976c08b864: () => Ut, __wbg_resolve_b0083a7967828ec8: () => Oe, __wbg_respond_b1a43b2e3a06d525: () => te, __wbg_self_ce0dbfc45cf2f5be: () => ge, __wbg_set_1f9b04f170055d33: () => Ie, __wbg_set_8417257aaedc936b: () => ke, __wbg_set_a47bac70306a19a7: () => Ae, __wbg_set_f975102236d3c502: () => wt, __wbg_sethighWaterMark_ea50ed3ec2143088: () => lt, __wbg_signal_e0b0ea9dce5137b3: () => Nt, __wbg_stack_658279fe44541cf6: () => it, __wbg_status_61a01141acd3cf74: () => St, __wbg_then_0c86a60e8fcfe9f6: () => Se, __wbg_then_a73caa9a87991566: () => ze, __wbg_toString_ffe4c9ea3b3532e9: () => xe, __wbg_url_7807f6a1fddc3e23: () => Dt, __wbg_value_9f6eeb1e2aab8d96: () => ht, __wbg_value_d93c65011f51a456: () => ue, __wbg_view_7f0ce470793a340f: () => Zt, __wbg_webSocket_328a9c3b071c0d02: () => Rt, __wbg_window_c6fb939a7f436783: () => de, __wbindgen_cb_drop: () => ot, __wbindgen_closure_wrapper1521: () => Be, __wbindgen_closure_wrapper986: () => Ne, __wbindgen_debug_string: () => De, __wbindgen_error_new: () => dt, __wbindgen_is_function: () => ne, __wbindgen_is_string: () => at, __wbindgen_is_undefined: () => bt, __wbindgen_memory: () => $e, __wbindgen_number_new: () => ft, __wbindgen_object_clone_ref: () => _t, __wbindgen_object_drop_ref: () => nt, __wbindgen_string_get: () => ut, __wbindgen_string_new: () => rt, __wbindgen_throw: () => Pe, fetch: () => A, getMemory: () => N });
var $ = new WebAssembly.Instance(P, { "./index_bg.js": d });
var c = $.exports;
function N() {
  return c.memory;
}
var p = new Array(128).fill(void 0);
p.push(void 0, null, true, false);
function r(t) {
  return p[t];
}
var k = p.length;
function B(t) {
  t < 132 || (p[t] = k, k = t);
}
function l(t) {
  let e = r(t);
  return B(t), e;
}
var H = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
var U = new H("utf-8", { ignoreBOM: true, fatal: true });
U.decode();
var F = null;
function O() {
  return (F === null || F.byteLength === 0) && (F = new Uint8Array(c.memory.buffer)), F;
}
function w(t, e) {
  return t = t >>> 0, U.decode(O().subarray(t, t + e));
}
function o(t) {
  k === p.length && p.push(p.length + 1);
  let e = k;
  return k = p[e], p[e] = t, e;
}
var y = 0;
var X = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
var M = new X("utf-8");
var J = typeof M.encodeInto == "function" ? function(t, e) {
  return M.encodeInto(t, e);
} : function(t, e) {
  let n = M.encode(t);
  return e.set(n), { read: t.length, written: n.length };
};
function m(t, e, n) {
  if (n === void 0) {
    let b = M.encode(t), R = e(b.length, 1) >>> 0;
    return O().subarray(R, R + b.length).set(b), y = b.length, R;
  }
  let _ = t.length, i = e(_, 1) >>> 0, a = O(), u = 0;
  for (; u < _; u++) {
    let b = t.charCodeAt(u);
    if (b > 127)
      break;
    a[i + u] = b;
  }
  if (u !== _) {
    u !== 0 && (t = t.slice(u)), i = n(i, _, _ = u + t.length * 3, 1) >>> 0;
    let b = O().subarray(i + u, i + _), R = J(t, b);
    u += R.written, i = n(i, _, u, 1) >>> 0;
  }
  return y = u, i;
}
function g(t) {
  return t == null;
}
var j = null;
function f() {
  return (j === null || j.byteLength === 0) && (j = new Int32Array(c.memory.buffer)), j;
}
function z(t) {
  let e = typeof t;
  if (e == "number" || e == "boolean" || t == null)
    return `${t}`;
  if (e == "string")
    return `"${t}"`;
  if (e == "symbol") {
    let i = t.description;
    return i == null ? "Symbol" : `Symbol(${i})`;
  }
  if (e == "function") {
    let i = t.name;
    return typeof i == "string" && i.length > 0 ? `Function(${i})` : "Function";
  }
  if (Array.isArray(t)) {
    let i = t.length, a = "[";
    i > 0 && (a += z(t[0]));
    for (let u = 1; u < i; u++)
      a += ", " + z(t[u]);
    return a += "]", a;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(t)), _;
  if (n.length > 1)
    _ = n[1];
  else
    return toString.call(t);
  if (_ == "Object")
    try {
      return "Object(" + JSON.stringify(t) + ")";
    } catch {
      return "Object";
    }
  return t instanceof Error ? `${t.name}: ${t.message}
${t.stack}` : _;
}
var L = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t) => {
  c.__wbindgen_export_2.get(t.dtor)(t.a, t.b);
});
function W(t, e, n, _) {
  let i = { a: t, b: e, cnt: 1, dtor: n }, a = (...u) => {
    i.cnt++;
    let b = i.a;
    i.a = 0;
    try {
      return _(b, i.b, ...u);
    } finally {
      --i.cnt === 0 ? (c.__wbindgen_export_2.get(i.dtor)(b, i.b), L.unregister(i)) : i.a = b;
    }
  };
  return a.original = i, L.register(a, i, i), a;
}
function V(t, e, n) {
  c._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h44e1e8778bf8baa8(t, e, o(n));
}
function G(t, e, n) {
  c._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6ae4ce79b2a00a6a(t, e, o(n));
}
function A(t, e, n) {
  let _ = c.fetch(o(t), o(e), o(n));
  return l(_);
}
function s(t, e) {
  try {
    return t.apply(this, e);
  } catch (n) {
    c.__wbindgen_exn_store(o(n));
  }
}
function K(t, e, n, _) {
  c.wasm_bindgen__convert__closures__invoke2_mut__h58fc3852f578ff10(t, e, o(n), o(_));
}
var Q = Object.freeze({ Off: 0, 0: "Off", Lossy: 1, 1: "Lossy", Lossless: 2, 2: "Lossless" });
var Y = Object.freeze({ Error: 0, 0: "Error", Follow: 1, 1: "Follow", Manual: 2, 2: "Manual" });
var Z = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t) => c.__wbg_intounderlyingbytesource_free(t >>> 0));
var E = class {
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Z.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    c.__wbg_intounderlyingbytesource_free(e);
  }
  get type() {
    let e, n;
    try {
      let a = c.__wbindgen_add_to_stack_pointer(-16);
      c.intounderlyingbytesource_type(a, this.__wbg_ptr);
      var _ = f()[a / 4 + 0], i = f()[a / 4 + 1];
      return e = _, n = i, w(_, i);
    } finally {
      c.__wbindgen_add_to_stack_pointer(16), c.__wbindgen_free(e, n, 1);
    }
  }
  get autoAllocateChunkSize() {
    return c.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0;
  }
  start(e) {
    c.intounderlyingbytesource_start(this.__wbg_ptr, o(e));
  }
  pull(e) {
    let n = c.intounderlyingbytesource_pull(this.__wbg_ptr, o(e));
    return l(n);
  }
  cancel() {
    let e = this.__destroy_into_raw();
    c.intounderlyingbytesource_cancel(e);
  }
};
var tt = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t) => c.__wbg_intounderlyingsink_free(t >>> 0));
var T = class {
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, tt.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    c.__wbg_intounderlyingsink_free(e);
  }
  write(e) {
    let n = c.intounderlyingsink_write(this.__wbg_ptr, o(e));
    return l(n);
  }
  close() {
    let e = this.__destroy_into_raw(), n = c.intounderlyingsink_close(e);
    return l(n);
  }
  abort(e) {
    let n = this.__destroy_into_raw(), _ = c.intounderlyingsink_abort(n, o(e));
    return l(_);
  }
};
var v = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t) => c.__wbg_intounderlyingsource_free(t >>> 0));
var h = class {
  static __wrap(e) {
    e = e >>> 0;
    let n = Object.create(h.prototype);
    return n.__wbg_ptr = e, v.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, v.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    c.__wbg_intounderlyingsource_free(e);
  }
  pull(e) {
    let n = c.intounderlyingsource_pull(this.__wbg_ptr, o(e));
    return l(n);
  }
  cancel() {
    let e = this.__destroy_into_raw();
    c.intounderlyingsource_cancel(e);
  }
};
var C = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t) => c.__wbg_minifyconfig_free(t >>> 0));
var x = class {
  static __wrap(e) {
    e = e >>> 0;
    let n = Object.create(x.prototype);
    return n.__wbg_ptr = e, C.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, C.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    c.__wbg_minifyconfig_free(e);
  }
  get js() {
    return c.__wbg_get_minifyconfig_js(this.__wbg_ptr) !== 0;
  }
  set js(e) {
    c.__wbg_set_minifyconfig_js(this.__wbg_ptr, e);
  }
  get html() {
    return c.__wbg_get_minifyconfig_html(this.__wbg_ptr) !== 0;
  }
  set html(e) {
    c.__wbg_set_minifyconfig_html(this.__wbg_ptr, e);
  }
  get css() {
    return c.__wbg_get_minifyconfig_css(this.__wbg_ptr) !== 0;
  }
  set css(e) {
    c.__wbg_set_minifyconfig_css(this.__wbg_ptr, e);
  }
};
var et = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t) => c.__wbg_r2range_free(t >>> 0));
var q = class {
  __destroy_into_raw() {
    let e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, et.unregister(this), e;
  }
  free() {
    let e = this.__destroy_into_raw();
    c.__wbg_r2range_free(e);
  }
  get offset() {
    try {
      let _ = c.__wbindgen_add_to_stack_pointer(-16);
      c.__wbg_get_r2range_offset(_, this.__wbg_ptr);
      var e = f()[_ / 4 + 0], n = f()[_ / 4 + 1];
      return e === 0 ? void 0 : n >>> 0;
    } finally {
      c.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set offset(e) {
    c.__wbg_set_r2range_offset(this.__wbg_ptr, !g(e), g(e) ? 0 : e);
  }
  get length() {
    try {
      let _ = c.__wbindgen_add_to_stack_pointer(-16);
      c.__wbg_get_r2range_length(_, this.__wbg_ptr);
      var e = f()[_ / 4 + 0], n = f()[_ / 4 + 1];
      return e === 0 ? void 0 : n >>> 0;
    } finally {
      c.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set length(e) {
    c.__wbg_set_r2range_length(this.__wbg_ptr, !g(e), g(e) ? 0 : e);
  }
  get suffix() {
    try {
      let _ = c.__wbindgen_add_to_stack_pointer(-16);
      c.__wbg_get_r2range_suffix(_, this.__wbg_ptr);
      var e = f()[_ / 4 + 0], n = f()[_ / 4 + 1];
      return e === 0 ? void 0 : n >>> 0;
    } finally {
      c.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set suffix(e) {
    c.__wbg_set_r2range_suffix(this.__wbg_ptr, !g(e), g(e) ? 0 : e);
  }
};
function nt(t) {
  l(t);
}
function rt(t, e) {
  let n = w(t, e);
  return o(n);
}
function _t(t) {
  let e = r(t);
  return o(e);
}
function ot(t) {
  let e = l(t).original;
  return e.cnt-- == 1 ? (e.a = 0, true) : false;
}
function ct() {
  let t = new Error();
  return o(t);
}
function it(t, e) {
  let n = r(e).stack, _ = m(n, c.__wbindgen_malloc, c.__wbindgen_realloc), i = y;
  f()[t / 4 + 1] = i, f()[t / 4 + 0] = _;
}
function st(t, e) {
  let n, _;
  try {
    n = t, _ = e, console.error(w(t, e));
  } finally {
    c.__wbindgen_free(n, _, 1);
  }
}
function ut(t, e) {
  let n = r(e), _ = typeof n == "string" ? n : void 0;
  var i = g(_) ? 0 : m(_, c.__wbindgen_malloc, c.__wbindgen_realloc), a = y;
  f()[t / 4 + 1] = a, f()[t / 4 + 0] = i;
}
function ft(t) {
  return o(t);
}
function at(t) {
  return typeof r(t) == "string";
}
function bt(t) {
  return r(t) === void 0;
}
function gt(t) {
  let e = x.__wrap(t);
  return o(e);
}
function dt(t, e) {
  let n = new Error(w(t, e));
  return o(n);
}
function wt(t, e, n) {
  r(t)[l(e)] = l(n);
}
function lt(t, e) {
  r(t).highWaterMark = e;
}
function pt() {
  return s(function(t) {
    let e = r(t).getReader();
    return o(e);
  }, arguments);
}
function yt(t) {
  return r(t).done;
}
function ht(t) {
  let e = r(t).value;
  return o(e);
}
function xt(t, e) {
  let n = new ReadableStream(h.__wrap(t), l(e));
  return o(n);
}
function mt() {
  return s(function(t, e) {
    let n = r(e).httpProtocol, _ = m(n, c.__wbindgen_malloc, c.__wbindgen_realloc), i = y;
    f()[t / 4 + 1] = i, f()[t / 4 + 0] = _;
  }, arguments);
}
function Rt() {
  return s(function(t) {
    let e = r(t).webSocket;
    return g(e) ? 0 : o(e);
  }, arguments);
}
function kt() {
  return s(function(t) {
    let e = r(t).cf;
    return g(e) ? 0 : o(e);
  }, arguments);
}
function Ft() {
  return s(function(t) {
    let e = r(t).entries();
    return o(e);
  }, arguments);
}
function jt(t, e, n) {
  let _ = r(t).fetch(r(e), r(n));
  return o(_);
}
function Ot(t, e, n, _) {
  let i = r(t).fetch(w(e, n), r(_));
  return o(i);
}
function Mt(t) {
  let e;
  try {
    e = r(t) instanceof Response;
  } catch {
    e = false;
  }
  return e;
}
function St(t) {
  return r(t).status;
}
function zt(t) {
  let e = r(t).headers;
  return o(e);
}
function Et(t) {
  let e = r(t).body;
  return g(e) ? 0 : o(e);
}
function Tt() {
  return s(function(t, e) {
    let n = new Response(r(t), r(e));
    return o(n);
  }, arguments);
}
function qt() {
  return s(function(t, e, n) {
    let _ = new Response(t === 0 ? void 0 : w(t, e), r(n));
    return o(_);
  }, arguments);
}
function At() {
  return s(function(t, e) {
    let n = new Response(r(t), r(e));
    return o(n);
  }, arguments);
}
function Lt(t) {
  let e = r(t).byobRequest;
  return g(e) ? 0 : o(e);
}
function vt() {
  return s(function(t) {
    r(t).close();
  }, arguments);
}
function Ct(t) {
  let e = r(t).read();
  return o(e);
}
function Ut(t) {
  r(t).releaseLock();
}
function Wt(t) {
  let e = r(t).cancel();
  return o(e);
}
function It(t, e) {
  let n = r(e).method, _ = m(n, c.__wbindgen_malloc, c.__wbindgen_realloc), i = y;
  f()[t / 4 + 1] = i, f()[t / 4 + 0] = _;
}
function Dt(t, e) {
  let n = r(e).url, _ = m(n, c.__wbindgen_malloc, c.__wbindgen_realloc), i = y;
  f()[t / 4 + 1] = i, f()[t / 4 + 0] = _;
}
function Pt(t) {
  let e = r(t).headers;
  return o(e);
}
function $t(t) {
  let e = r(t).redirect;
  return o(e);
}
function Nt(t) {
  let e = r(t).signal;
  return o(e);
}
function Bt(t) {
  let e = r(t).body;
  return g(e) ? 0 : o(e);
}
function Ht() {
  return s(function(t, e, n) {
    let _ = new Request(w(t, e), r(n));
    return o(_);
  }, arguments);
}
function Xt(t) {
  let e;
  try {
    e = r(t) instanceof ReadableStream;
  } catch {
    e = false;
  }
  return e;
}
function Jt() {
  return s(function(t) {
    r(t).close();
  }, arguments);
}
function Vt() {
  return s(function(t, e) {
    r(t).enqueue(r(e));
  }, arguments);
}
function Gt(t) {
  console.error(r(t));
}
function Kt(t) {
  console.log(r(t));
}
function Qt() {
  return s(function() {
    let t = new Headers();
    return o(t);
  }, arguments);
}
function Yt() {
  return s(function(t, e, n, _, i) {
    r(t).append(w(e, n), w(_, i));
  }, arguments);
}
function Zt(t) {
  let e = r(t).view;
  return g(e) ? 0 : o(e);
}
function te() {
  return s(function(t, e) {
    r(t).respond(e >>> 0);
  }, arguments);
}
function ee(t) {
  let e = r(t).queueMicrotask;
  return o(e);
}
function ne(t) {
  return typeof r(t) == "function";
}
function re(t) {
  queueMicrotask(r(t));
}
function _e(t, e) {
  let n = r(t)[e >>> 0];
  return o(n);
}
function oe(t, e) {
  let n = new Function(w(t, e));
  return o(n);
}
function ce() {
  return o(/* @__PURE__ */ new Map());
}
function ie() {
  return s(function(t) {
    let e = r(t).next();
    return o(e);
  }, arguments);
}
function se(t) {
  return r(t).done;
}
function ue(t) {
  let e = r(t).value;
  return o(e);
}
function fe() {
  return s(function(t, e) {
    let n = Reflect.get(r(t), r(e));
    return o(n);
  }, arguments);
}
function ae() {
  return s(function(t, e) {
    let n = r(t).call(r(e));
    return o(n);
  }, arguments);
}
function be() {
  let t = new Object();
  return o(t);
}
function ge() {
  return s(function() {
    let t = self.self;
    return o(t);
  }, arguments);
}
function de() {
  return s(function() {
    let t = window.window;
    return o(t);
  }, arguments);
}
function we() {
  return s(function() {
    let t = globalThis.globalThis;
    return o(t);
  }, arguments);
}
function le() {
  return s(function() {
    let t = global.global;
    return o(t);
  }, arguments);
}
function pe(t) {
  let e;
  try {
    e = r(t) instanceof Error;
  } catch {
    e = false;
  }
  return e;
}
function ye(t, e) {
  let n = new Error(w(t, e));
  return o(n);
}
function he(t) {
  let e = r(t).cause;
  return o(e);
}
function xe(t) {
  let e = r(t).toString();
  return o(e);
}
function me() {
  return s(function(t, e, n) {
    let _ = r(t).call(r(e), r(n));
    return o(_);
  }, arguments);
}
function Re(t) {
  let e = r(t).name;
  return o(e);
}
function ke(t, e, n) {
  let _ = r(t).set(r(e), r(n));
  return o(_);
}
function Fe(t) {
  let e = r(t).constructor;
  return o(e);
}
function je(t, e) {
  try {
    var n = { a: t, b: e }, _ = (a, u) => {
      let b = n.a;
      n.a = 0;
      try {
        return K(b, n.b, a, u);
      } finally {
        n.a = b;
      }
    };
    let i = new Promise(_);
    return o(i);
  } finally {
    n.a = n.b = 0;
  }
}
function Oe(t) {
  let e = Promise.resolve(r(t));
  return o(e);
}
function Me(t, e) {
  let n = r(t).catch(r(e));
  return o(n);
}
function Se(t, e) {
  let n = r(t).then(r(e));
  return o(n);
}
function ze(t, e, n) {
  let _ = r(t).then(r(e), r(n));
  return o(_);
}
function Ee(t) {
  let e = r(t).buffer;
  return o(e);
}
function Te(t, e, n) {
  let _ = new Uint8Array(r(t), e >>> 0, n >>> 0);
  return o(_);
}
function qe(t) {
  let e = new Uint8Array(r(t));
  return o(e);
}
function Ae(t, e, n) {
  r(t).set(r(e), n >>> 0);
}
function Le(t) {
  return r(t).length;
}
function ve(t) {
  let e = new Uint8Array(t >>> 0);
  return o(e);
}
function Ce(t) {
  let e = r(t).buffer;
  return o(e);
}
function Ue(t) {
  return r(t).byteLength;
}
function We(t) {
  return r(t).byteOffset;
}
function Ie() {
  return s(function(t, e, n) {
    return Reflect.set(r(t), r(e), r(n));
  }, arguments);
}
function De(t, e) {
  let n = z(r(e)), _ = m(n, c.__wbindgen_malloc, c.__wbindgen_realloc), i = y;
  f()[t / 4 + 1] = i, f()[t / 4 + 0] = _;
}
function Pe(t, e) {
  throw new Error(w(t, e));
}
function $e() {
  let t = c.memory;
  return o(t);
}
function Ne(t, e, n) {
  let _ = W(t, e, 446, V);
  return o(_);
}
function Be(t, e, n) {
  let _ = W(t, e, 494, G);
  return o(_);
}
var S = class extends He {
  async fetch(e) {
    return await A(e, this.env, this.ctx);
  }
  async queue(e) {
    return await (void 0)(e, this.env, this.ctx);
  }
  async scheduled(e) {
    return await (void 0)(e, this.env, this.ctx);
  }
};
var Xe = ["IntoUnderlyingByteSource", "IntoUnderlyingSink", "IntoUnderlyingSource", "MinifyConfig", "PolishConfig", "R2Range", "RequestRedirect", "fetch", "queue", "scheduled", "getMemory"];
Object.keys(d).map((t) => {
  Xe.includes(t) | t.startsWith("__") || (S.prototype[t] = d[t]);
});
var tn = S;

// ../../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-zrKjyv/middleware-insertion-facade.js
tn.middleware = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default,
  ...tn.middleware ?? []
].filter(Boolean);
var middleware_insertion_facade_default = tn;

// ../../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-zrKjyv/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (worker.middleware === void 0 || worker.middleware.length === 0) {
    return worker;
  }
  for (const middleware of worker.middleware) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint(klass) {
  if (klass.middleware === void 0 || klass.middleware.length === 0) {
    return klass;
  }
  for (const middleware of klass.middleware) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  E as IntoUnderlyingByteSource,
  T as IntoUnderlyingSink,
  h as IntoUnderlyingSource,
  x as MinifyConfig,
  Q as PolishConfig,
  q as R2Range,
  Y as RequestRedirect,
  Yt as __wbg_append_7bfcb4937d1d5e29,
  Bt as __wbg_body_17b435cb52dcf45f,
  Et as __wbg_body_9545a94f397829db,
  Ee as __wbg_buffer_12d079cc21e14bdb,
  Ce as __wbg_buffer_dd7f74bc60f1faab,
  Lt as __wbg_byobRequest_72fca99f9c32c193,
  Ue as __wbg_byteLength_58f7b4fab1919d44,
  We as __wbg_byteOffset_81d60f7392524f62,
  ae as __wbg_call_27c0f87801dedf93,
  me as __wbg_call_b3ca7c6051f9bec1,
  Wt as __wbg_cancel_6ee33d4006737aef,
  Me as __wbg_catch_0260e338d10f79ae,
  he as __wbg_cause_3d9c85ebaf6b1155,
  kt as __wbg_cf_b1ddc6b9d2f719aa,
  vt as __wbg_close_184931724d961ccc,
  Jt as __wbg_close_a994f9425dab445c,
  Fe as __wbg_constructor_1d9b26449d83b236,
  se as __wbg_done_298b57d23c0fc80c,
  yt as __wbg_done_2ffa852272310e47,
  Vt as __wbg_enqueue_ea194723156c0cc2,
  Ft as __wbg_entries_a23fead5f1cc4139,
  Gt as __wbg_error_8e3928cfb8a43e2b,
  st as __wbg_error_f851667af71bcfc6,
  Ot as __wbg_fetch_77c3aab3dee20e7c,
  jt as __wbg_fetch_bc400efeda8ac0c8,
  pt as __wbg_getReader_ab94afcb5cb7689a,
  _e as __wbg_get_bd8e338fbd5f5cc8,
  fe as __wbg_get_e3c254076557e348,
  we as __wbg_globalThis_d1e6af4856ba331b,
  le as __wbg_global_207b558942527489,
  zt as __wbg_headers_9620bfada380764a,
  Pt as __wbg_headers_abb199c3be8d817c,
  mt as __wbg_httpProtocol_4d577fc24f15a233,
  pe as __wbg_instanceof_Error_e20bb56fd5591a93,
  Xt as __wbg_instanceof_ReadableStream_68ecb420c904a644,
  Mt as __wbg_instanceof_Response_849eb93e75734b6e,
  Le as __wbg_length_c20a40f15020d68a,
  Kt as __wbg_log_5bb5f88f245d7762,
  It as __wbg_method_83327ed2e3f3229c,
  gt as __wbg_minifyconfig_new,
  Re as __wbg_name_72024f5702a32334,
  ye as __wbg_new_28c511d9baebfa89,
  qe as __wbg_new_63b92bc8671ed464,
  be as __wbg_new_72fb9a18b5ae2624,
  je as __wbg_new_81740750da40724f,
  Qt as __wbg_new_ab6fd82b10560829,
  ct as __wbg_new_abda76e883ba8a5f,
  ce as __wbg_new_d9bc3a0147634640,
  oe as __wbg_newnoargs_e258087cd0daa0ea,
  Te as __wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb,
  xt as __wbg_newwithintounderlyingsource_a03a82aa1bbbb292,
  ve as __wbg_newwithlength_e9b4878cebadb3d3,
  Tt as __wbg_newwithoptbuffersourceandinit_a4fa81e77259bb96,
  At as __wbg_newwithoptreadablestreamandinit_0b825f969ca543d6,
  qt as __wbg_newwithoptstrandinit_219732174c595a25,
  Ht as __wbg_newwithstrandinit_3fd6fba4083ff2d0,
  ie as __wbg_next_196c84450b364254,
  ee as __wbg_queueMicrotask_3cbae2ec6b6cd3d6,
  re as __wbg_queueMicrotask_481971b0d87f3dd4,
  Ct as __wbg_read_e7d0f8a49be01d86,
  $t as __wbg_redirect_53aa50ab48e7a227,
  Ut as __wbg_releaseLock_5c49db976c08b864,
  Oe as __wbg_resolve_b0083a7967828ec8,
  te as __wbg_respond_b1a43b2e3a06d525,
  ge as __wbg_self_ce0dbfc45cf2f5be,
  Ie as __wbg_set_1f9b04f170055d33,
  ke as __wbg_set_8417257aaedc936b,
  Ae as __wbg_set_a47bac70306a19a7,
  wt as __wbg_set_f975102236d3c502,
  lt as __wbg_sethighWaterMark_ea50ed3ec2143088,
  Nt as __wbg_signal_e0b0ea9dce5137b3,
  it as __wbg_stack_658279fe44541cf6,
  St as __wbg_status_61a01141acd3cf74,
  Se as __wbg_then_0c86a60e8fcfe9f6,
  ze as __wbg_then_a73caa9a87991566,
  xe as __wbg_toString_ffe4c9ea3b3532e9,
  Dt as __wbg_url_7807f6a1fddc3e23,
  ht as __wbg_value_9f6eeb1e2aab8d96,
  ue as __wbg_value_d93c65011f51a456,
  Zt as __wbg_view_7f0ce470793a340f,
  Rt as __wbg_webSocket_328a9c3b071c0d02,
  de as __wbg_window_c6fb939a7f436783,
  ot as __wbindgen_cb_drop,
  Be as __wbindgen_closure_wrapper1521,
  Ne as __wbindgen_closure_wrapper986,
  De as __wbindgen_debug_string,
  dt as __wbindgen_error_new,
  ne as __wbindgen_is_function,
  at as __wbindgen_is_string,
  bt as __wbindgen_is_undefined,
  $e as __wbindgen_memory,
  ft as __wbindgen_number_new,
  _t as __wbindgen_object_clone_ref,
  nt as __wbindgen_object_drop_ref,
  ut as __wbindgen_string_get,
  rt as __wbindgen_string_new,
  Pe as __wbindgen_throw,
  middleware_loader_entry_default as default,
  A as fetch,
  N as getMemory,
  Ye as wasmModule
};
//# sourceMappingURL=shim.js.map
