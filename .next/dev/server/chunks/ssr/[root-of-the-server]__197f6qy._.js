module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/src/components/FestivalSplash.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FestivalSplash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function FestivalSplash() {
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const dismissed = sessionStorage.getItem("iskcon-festival-splash-dismissed");
            if (!dismissed) setVisible(true);
        } catch  {
            // sessionStorage unavailable (private browsing, etc.) — just show it.
            setVisible(true);
        }
    }, []);
    const dismiss = ()=>{
        try {
            sessionStorage.setItem("iskcon-festival-splash-dismissed", "1");
        } catch  {
        // ignore
        }
        setVisible(false);
    };
    if (!visible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-navy-dark/90 backdrop-blur-sm p-4 sm:p-8 cursor-pointer animate-[fadeIn_0.3s_ease-out]",
        onClick: dismiss,
        role: "button",
        tabIndex: 0,
        "aria-label": "Click anywhere to enter the ISKCON Austin website",
        onKeyDown: (e)=>{
            if (e.key === "Enter" || e.key === " ") dismiss();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative max-w-xs sm:max-w-sm w-full text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/splash/festival-poster.png",
                        alt: "Celebrate Divine Joy at ISKCON Austin — three auspicious festivals: Balram Purnima on August 27, Sri Krishna Janmashtami on September 4, and Srila Prabhupada Appearance Day on September 5, 2026",
                        width: 593,
                        height: 885,
                        className: "w-full h-auto",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/FestivalSplash.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/FestivalSplash.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-5 text-white/80 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]",
                    children: "Tap anywhere to enter the site"
                }, void 0, false, {
                    fileName: "[project]/src/components/FestivalSplash.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FestivalSplash.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/FestivalSplash.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/MobileDonateButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileDonateButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ornaments$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ornaments.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function MobileDonateButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: "/donate",
        "aria-label": "Donate to ISKCON Austin",
        className: "sm:hidden fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-gold pl-3 pr-4 py-3 text-sm font-semibold text-white shadow-lg shadow-navy-dark/30 border border-gold-light/60 active:scale-95 transition-transform",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex h-7 w-7 items-center justify-center rounded-full bg-white/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ornaments$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KalashFinial"], {
                    className: "w-4 h-4",
                    color: "white"
                }, void 0, false, {
                    fileName: "[project]/src/components/MobileDonateButton.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MobileDonateButton.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            "Donate"
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MobileDonateButton.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Navbar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-cream-deep",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4 sm:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-18 items-center justify-between py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-3",
                            onClick: ()=>setOpen(false),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo.png",
                                    alt: "ISKCON Austin logo",
                                    width: 44,
                                    height: 38,
                                    className: "h-10 w-auto",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex flex-col leading-tight",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-display text-lg font-semibold text-navy",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["site"].name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] uppercase tracking-wide text-ink-soft",
                                            children: "Hare Krishna Temple"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.tsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden lg:flex items-center gap-1",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nav"].map((item)=>{
                                const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: `px-3 py-2 rounded-full text-sm font-medium transition-colors ${active ? "text-navy bg-cream" : "text-ink-soft hover:text-navy hover:bg-cream/60"}`,
                                    children: item.label
                                }, item.href, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 43,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/media",
                                    className: "text-sm font-semibold text-navy hover:text-gold transition-colors",
                                    children: "Watch Online"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/donate",
                                    className: "rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white hover:bg-gold-light transition-colors shadow-sm",
                                    children: "Donate"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "lg:hidden flex flex-col gap-1.5 p-2",
                            "aria-label": "Toggle menu",
                            onClick: ()=>setOpen((v)=>!v),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block h-0.5 w-6 bg-navy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block h-0.5 w-6 bg-navy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block h-0.5 w-6 bg-navy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden border-t border-cream-deep bg-white px-4 pb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex flex-col",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nav"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                onClick: ()=>setOpen(false),
                                className: "py-3 text-sm font-medium text-ink border-b border-cream-deep last:border-0",
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/donate",
                            onClick: ()=>setOpen(false),
                            className: "mt-4 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-white",
                            children: "Donate"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ornaments.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Reusable decorative flourishes that give the site a temple/devotional
// character: ornamental section dividers, corner frame brackets (like a
// temple doorway frame), and a small kalash/finial mark used above key
// panels. All inline SVG — no external assets.
__turbopack_context__.s([
    "CornerFrame",
    ()=>CornerFrame,
    "GarlandRow",
    ()=>GarlandRow,
    "KalashFinial",
    ()=>KalashFinial,
    "OrnamentDivider",
    ()=>OrnamentDivider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function OrnamentDivider({ center = false, tone = "gold", className = "" }) {
    const color = tone === "white" ? "#f4e4b8" : "var(--color-gold)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 160 20",
        width: "160",
        height: "20",
        className: `${center ? "mx-auto" : ""} mb-5 ${className}`,
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 10 H62",
                stroke: color,
                strokeWidth: "1.5",
                opacity: "0.7"
            }, void 0, false, {
                fileName: "[project]/src/components/ornaments.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M98 10 H160",
                stroke: color,
                strokeWidth: "1.5",
                opacity: "0.7"
            }, void 0, false, {
                fileName: "[project]/src/components/ornaments.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M80 4 C74 4 70 8 70 10 C70 12 74 16 80 16 C86 16 90 12 90 10 C90 8 86 4 80 4Z",
                stroke: color,
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/ornaments.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "80",
                cy: "10",
                r: "2.4",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/ornaments.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "66",
                cy: "10",
                r: "1.6",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/ornaments.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "94",
                cy: "10",
                r: "1.6",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/ornaments.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ornaments.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
function KalashFinial({ className = "", color = "var(--color-gold)" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 60 60",
        className: className,
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                stroke: color,
                strokeWidth: "2",
                strokeLinejoin: "round",
                strokeLinecap: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M30 4 L30 12"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ornaments.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M22 12 L38 12"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ornaments.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M24 12 C18 20 18 30 24 36 C20 40 20 46 26 50 C22 52 22 56 26 58 L34 58 C38 56 38 52 34 50 C40 46 40 40 36 36 C42 30 42 20 36 12 Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ornaments.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ornaments.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "30",
                cy: "8",
                r: "1.8",
                fill: color
            }, void 0, false, {
                fileName: "[project]/src/components/ornaments.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ornaments.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
function CornerFrame({ tone = "gold", size = 22, inset = 10 }) {
    const border = tone === "white" ? "border-white/50" : "border-gold/60";
    const base = `absolute pointer-events-none border-2 ${border}`;
    const px = (n)=>`${n}px`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `${base} border-r-0 border-b-0`,
                style: {
                    top: px(inset),
                    left: px(inset),
                    width: px(size),
                    height: px(size)
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ornaments.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `${base} border-l-0 border-b-0`,
                style: {
                    top: px(inset),
                    right: px(inset),
                    width: px(size),
                    height: px(size)
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ornaments.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `${base} border-r-0 border-t-0`,
                style: {
                    bottom: px(inset),
                    left: px(inset),
                    width: px(size),
                    height: px(size)
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ornaments.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `${base} border-l-0 border-t-0`,
                style: {
                    bottom: px(inset),
                    right: px(inset),
                    width: px(size),
                    height: px(size)
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ornaments.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ornaments.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
function GarlandRow({ className = "" }) {
    const flowers = Array.from({
        length: 14
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center justify-center gap-1 ${className}`,
        children: flowers.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 20 20",
                width: "14",
                height: "14",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        stroke: "currentColor",
                        strokeWidth: "1.4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "10",
                                cy: "4",
                                r: "2.6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ornaments.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "10",
                                cy: "16",
                                r: "2.6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ornaments.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "4",
                                cy: "10",
                                r: "2.6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ornaments.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "16",
                                cy: "10",
                                r: "2.6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ornaments.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ornaments.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "10",
                        cy: "10",
                        r: "2.2",
                        fill: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ornaments.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/ornaments.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ornaments.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ---------------------------------------------------------------------------
// Central content file for the ISKCON Austin website.
// Everything marked TODO is placeholder copy — swap in real temple content
// before launch. Keeping it all here means no page code needs to change
// when real content arrives.
// ---------------------------------------------------------------------------
__turbopack_context__.s([
    "campaignPercent",
    ()=>campaignPercent,
    "campaignProgress",
    ()=>campaignProgress,
    "constructionUpdates",
    ()=>constructionUpdates,
    "coreBeliefs",
    ()=>coreBeliefs,
    "donationContact",
    ()=>donationContact,
    "donationMethods",
    ()=>donationMethods,
    "donationTiers",
    ()=>donationTiers,
    "donorRecognitionTiers",
    ()=>donorRecognitionTiers,
    "events",
    ()=>events,
    "faqs",
    ()=>faqs,
    "getInvolvedOptions",
    ()=>getInvolvedOptions,
    "givingFunds",
    ()=>givingFunds,
    "heroSlides",
    ()=>heroSlides,
    "iskconPhilosophy",
    ()=>iskconPhilosophy,
    "iskconStats",
    ()=>iskconStats,
    "kcAtHome",
    ()=>kcAtHome,
    "leadership",
    ()=>leadership,
    "locations",
    ()=>locations,
    "nav",
    ()=>nav,
    "ongoingPrograms",
    ()=>ongoingPrograms,
    "site",
    ()=>site,
    "virtualTourImages",
    ()=>virtualTourImages,
    "weeklySchedule",
    ()=>weeklySchedule
]);
const site = {
    name: "ISKCON Austin",
    legalName: "International Society for Krishna Consciousness of Austin",
    tagline: "A Home for Krishna Consciousness in Central Texas",
    phone: "+1-512-835-2121",
    email: "info@iskconaustin.com",
    address: "12012 North IH 35, Austin, TX 78753",
    hours: "Sundays, 11:00 AM – 1:00 PM",
    socials: {
        facebook: "https://facebook.com/iskconaustin",
        instagram: "https://instagram.com/iskconaustin",
        youtube: "https://youtube.com/@iskconaustin"
    },
    // Direct temple contacts.
    contactPeople: [
        {
            name: "Abhay Charan Das",
            phone: "+1-512-762-6644"
        },
        {
            name: "Caitanyavani Das",
            phone: "+1-512-689-6971"
        },
        {
            name: "Sravanananda Das",
            phone: "+1-408-594-8864"
        }
    ],
    map: {
        // Google Business Profile listing (cid link) provided by the client.
        placeUrl: "https://www.google.com/maps?cid=9067017259345413292&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=IN&source=embed",
        // Embeddable iframe version of the same listing — no API key required.
        embedUrl: "https://www.google.com/maps?cid=9067017259345413292&output=embed",
        // Deep link that opens turn-by-turn directions straight away.
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=12012+North+IH+35%2C+Austin%2C+TX+78753"
    }
};
const locations = [
    {
        key: "sunday",
        label: "Sunday Programs",
        address: "12012 N Interstate 35, Austin, TX 78753, USA",
        description: "Sunday Feast, kirtan, and the weekly Bhagavad-gita class are held here.",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=12012+N+Interstate+35%2C+Austin%2C+TX+78753"
    },
    {
        key: "newTemple",
        label: "New Temple (Under Construction)",
        address: "1311 Collinwood W Dr, Austin, TX 78753, USA",
        description: "Site of ISKCON Austin's future permanent home — see the Virtual Tour for renderings.",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=1311+Collinwood+W+Dr%2C+Austin%2C+TX+78753"
    }
];
const nav = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/visit",
        label: "Visit"
    },
    {
        href: "/get-involved",
        label: "Get Involved"
    },
    {
        href: "/about",
        label: "About"
    },
    {
        href: "/virtual-tour",
        label: "Virtual Tour"
    },
    {
        href: "/media",
        label: "Media"
    },
    {
        href: "/contact",
        label: "Contact"
    }
];
const weeklySchedule = [
    {
        day: "Every Day",
        title: "Mangala Aarti & Tulasi Worship",
        time: "4:30 AM",
        description: "Morning worship and devotional offering to Srimati Tulasi Devi."
    },
    {
        day: "Every Day",
        title: "Greeting of the Deities & Guru Puja",
        time: "6:45 AM",
        description: "The Deities' curtains open for the day, followed by worship of the spiritual master."
    },
    {
        day: "Every Day",
        title: "Srimad Bhagavatam Class",
        time: "7:15 AM",
        description: "Daily scriptural class exploring the teachings of the Srimad Bhagavatam."
    },
    {
        day: "Every Day",
        title: "Dhoop Aarti",
        time: "12:30 PM",
        description: "Midday offering of incense to the Deities."
    },
    {
        day: "Every Day",
        title: "Gaura Aarti",
        time: "6:30 PM",
        description: "Evening offering of lamps, incense, and kirtan."
    },
    {
        day: "Sunday",
        title: "Ecstatic Kirtan",
        time: "11:00 AM – 11:30 AM",
        description: "Congregational chanting and dancing open to all — no experience needed."
    },
    {
        day: "Sunday",
        title: "Bhagavad-gita Study & Q&A",
        time: "11:40 AM – 12:30 PM",
        description: "A talk on the Bhagavad-gita followed by open questions and discussion."
    },
    {
        day: "Sunday",
        title: "Aarti & Prasadam",
        time: "12:30 PM – 1:00 PM",
        description: "Closing aarti followed by a free vegetarian feast, offered to Krishna and shared with everyone."
    },
    {
        day: "Wednesday",
        title: "Bhagavad-gita Study Circle",
        time: "7:30 PM – 8:30 PM",
        description: "In-depth weekly study group for all levels, online and in person."
    }
];
const campaignProgress = {
    raised: 1_250_000,
    goal: 4_500_000
};
function campaignPercent() {
    return Math.round(campaignProgress.raised / campaignProgress.goal * 100);
}
function formatMoney(n) {
    if (n % 1_000_000 === 0) return `$${n / 1_000_000}M`;
    return `$${(n / 1_000_000).toFixed(2).replace(/0$/, "")}M`;
}
function givingProgressLabel() {
    return `${formatMoney(campaignProgress.raised)} raised of ${formatMoney(campaignProgress.goal)} goal`;
}
const heroSlides = [
    {
        key: "sunday",
        image: "/hero/sunday-program.jpg",
        eyebrow: "Every Sunday",
        title: "Join Us for the Sunday Program",
        body: "Kirtan, scripture study, and a free feast — every Sunday, open to everyone.",
        primaryCta: {
            label: "Plan Your Visit",
            href: "/locations/sunday"
        },
        schedule: [
            {
                time: "11:00 – 11:30 AM",
                title: "Ecstatic Kirtan"
            },
            {
                time: "11:40 AM – 12:30 PM",
                title: "Bhagavad-gita Study & Q&A"
            },
            {
                time: "12:30 – 1:00 PM",
                title: "Aarti Followed by Prasadam"
            }
        ]
    },
    {
        key: "kirtan",
        image: "/hero/kirtan.jpg",
        eyebrow: "Chant Together",
        title: "Kirtan",
        body: "Congregational chanting of the Hare Krishna maha-mantra — music, dancing, and joy open to everyone, no experience needed.",
        primaryCta: {
            label: "See Festival Calendar",
            href: "/get-involved#events"
        }
    },
    {
        key: "temple",
        image: "/temple-renderings/exterior-04-front-entrance-pool.jpg",
        eyebrow: "A Gift for Generations",
        title: "A Grand New Temple Is Coming to Austin",
        body: "Help us build a permanent home for Krishna consciousness in Central Texas — a worship hall, residences, and gardens for generations of devotees to come.",
        primaryCta: {
            label: "Explore the New Temple",
            href: "/locations/new-temple"
        },
        stat: givingProgressLabel()
    }
];
const constructionUpdates = {
    templeName: "Sri Sri Radha Damodar Temple",
    milestones: [
        {
            title: "Site Plan Approved by City",
            detail: "Completed by our civil engineering team.",
            date: "2024",
            done: true
        },
        {
            title: "Building Permit Approved by City",
            date: "February 2026",
            done: true
        },
        {
            title: "General Contractor Bidding Process Completed",
            date: "July 2026",
            done: true
        },
        {
            title: "Final Round of Fundraising",
            detail: "Construction can begin once complete.",
            date: "In progress",
            done: false
        }
    ],
    constructionDuration: "10 to 12 months",
    features: [
        "Modern design",
        "48 car parking spots",
        "Centrally located — an easy commute from both north and south Austin",
        "Krishna prasadam distribution to begin shortly after the Grand Opening"
    ]
};
const virtualTourImages = [
    {
        key: "exterior-01",
        group: "Exterior",
        src: "/temple-renderings/exterior-01-entrance-courtyard.jpg",
        title: "Entrance Courtyard",
        caption: "Approaching the new temple across the entrance courtyard.",
        // Grouped with the other "Temple Front" views into a single gallery
        // tile that cycles through all three photos.
        set: "temple-front"
    },
    {
        key: "exterior-02",
        group: "Exterior",
        src: "/temple-renderings/exterior-02-facade.jpg",
        title: "Temple Facade",
        caption: "The main facade, viewed from the parking and arrival area.",
        set: "temple-front"
    },
    {
        key: "exterior-03",
        group: "Exterior",
        src: "/temple-renderings/exterior-03-covered-porch.jpg",
        title: "Covered Porch",
        caption: "A shaded, covered porch along the side of the temple."
    },
    {
        key: "exterior-04",
        group: "Exterior",
        src: "/temple-renderings/exterior-04-front-entrance-pool.jpg",
        title: "Front Entrance & Reflecting Pool",
        caption: "The front entrance framed by a reflecting pool.",
        set: "temple-front"
    },
    {
        key: "exterior-05",
        group: "Exterior",
        src: "/temple-renderings/exterior-05-corner-view.jpg",
        title: "Corner View",
        caption: "An angled exterior view showing the building's full scale."
    },
    {
        key: "interior-01",
        group: "Interior",
        src: "/temple-renderings/interior-01-altar-hall.jpg",
        title: "Grand Hall & Altar",
        caption: "The grand worship hall, leading toward the Radha-Krishna altar."
    },
    {
        key: "interior-02",
        group: "Interior",
        src: "/temple-renderings/interior-02-great-hall.jpg",
        title: "Great Hall",
        caption: "A wide view of the great hall, with acharya portraits and lila paintings along the walls."
    },
    {
        key: "interior-03",
        group: "Interior",
        src: "/temple-renderings/interior-03-shrine-alcove.jpg",
        title: "Shrine Alcove",
        caption: "A secondary shrine alcove for personal darshan and reflection."
    }
];
const events = [
    {
        title: "Janmashtami — Appearance of Lord Krishna",
        date: "2026-09-04",
        category: "Festival",
        description: "The biggest celebration of the year: abhishek, kirtan, drama, and a midnight feast.",
        location: "12012 N Interstate 35, Austin, TX 78753",
        time: "6:00 PM – 12:00 AM"
    },
    {
        title: "Radhastami",
        date: "2026-09-19",
        category: "Festival",
        description: "Celebrating the appearance of Srimati Radharani with special offerings and kirtan.",
        location: "12012 N Interstate 35, Austin, TX 78753",
        time: "6:00 PM – 8:30 PM"
    },
    {
        title: "Govardhan Puja",
        date: "2026-11-09",
        category: "Festival",
        description: "Annapurna offering of 108 preparations and re-enactment of Krishna lifting Govardhan Hill.",
        location: "12012 N Interstate 35, Austin, TX 78753",
        time: "6:00 PM – 8:30 PM"
    },
    {
        title: "Prabhupada Marathon Book Distribution",
        date: "2026-10-01",
        category: "Community",
        description: "Community outreach distributing Srila Prabhupada's books across Austin.",
        location: "Various locations around Austin, TX",
        time: "10:00 AM – 4:00 PM"
    },
    {
        title: "Diwali / Dipavali Celebration",
        date: "2026-11-08",
        category: "Festival",
        description: "No celebration is planned at the temple this year — check back for updates in future years.",
        location: "12012 N Interstate 35, Austin, TX 78753",
        time: "No celebration this year"
    }
];
const ongoingPrograms = [
    {
        title: "Book Distribution",
        description: "Sharing Srila Prabhupada's books with the Austin community at outreach events and public locations."
    },
    {
        title: "Harinam Sankirtan",
        description: "Public chanting of the holy names — kirtan processions through the streets and community spaces."
    },
    {
        title: "Home Programs",
        description: "Kirtan, class, and prasadam hosted in devotees' homes across Austin — contact us to host one."
    }
];
const donationTiers = [
    {
        amount: 21,
        label: "Offer a garland of flowers for the Deities"
    },
    {
        amount: 51,
        label: "Sponsor prasadam for a Sunday Feast guest"
    },
    {
        amount: 108,
        label: "Support a week of temple worship and upkeep"
    },
    {
        amount: 251,
        label: "Sponsor a full Sunday Feast program"
    }
];
const donationMethods = [
    {
        key: "online",
        title: "Credit / Debit / Google Pay",
        description: "Give securely online using the form above — credit card, debit card, or Google Pay all accepted."
    },
    {
        key: "check",
        title: "By Check",
        description: "Make checks payable to “ISKCON Austin” and mail to:",
        detail: "10700 Jonwood Way, Austin, TX 78753"
    },
    {
        key: "paypal",
        title: "PayPal",
        description: "Send your gift directly via PayPal to:",
        detail: "sda@ultimateselfrealization.com"
    },
    {
        key: "wire",
        title: "Wire / Bank Transfer",
        description: "For wire or ACH transfers, use the following account details:",
        detail: "Account Name: Sri Sri Radha Damodar Temple, Inc · ACH Routing: 314977175 · Account: 1800207606 · Type: Checking · Address: 10700 Jonwood Way, Austin, TX 78753, USA"
    }
];
const donorRecognitionTiers = [
    {
        amount: "$1,000+",
        title: "Saptarishi Set",
        description: "Receive a complimentary copy of the Saptarishi Set — a collection of 7 books by Srila Prabhupada."
    },
    {
        amount: "$2,500+",
        title: "Complete Srimad Bhagavatam",
        description: "Receive a complimentary copy of all twelve Cantos of the Srimad Bhagavatam, the most sacred scripture."
    },
    {
        amount: "$5,000+",
        title: "Wall of Gratitude",
        description: "Your name is inscribed on our Wall of Gratitude, adorning the Main Lobby — with further recognition for gifts of $10,000+ and $25,000+."
    }
];
const donationContact = {
    name: "Sankarshan Das Adhikari",
    email: "sda@backtohome.com",
    phone: "+1-512-835-2121"
};
const givingFunds = [
    {
        key: "capital",
        title: "New Temple Capital Campaign",
        description: "Help build ISKCON Austin's permanent home — a 300-person worship hall, residences, and gardens for generations to come.",
        stat: givingProgressLabel()
    },
    {
        key: "operations",
        title: "Temple Operations & Seva",
        description: "Support day-to-day temple life: Deity worship, the free Sunday Feast, utilities, and outreach programs.",
        stat: "Ongoing — every gift helps"
    }
];
const iskconPhilosophy = {
    intro: "Welcome to our website. We are the ISKCON Austin Hare Krishna center, the Austin, Texas USA branch of ISKCON, the International Society for Krishna Consciousness. ISKCON is a worldwide organization of over 650 temples and centers that was started in New York City in 1966. Globally we are endeavoring to bring to planet earth a new age of unparalleled peace and prosperity for all. And locally we are dedicated to making Austin a spiritual city where everyone lives in perfect peace and harmony by making Krishna or God the center of their lives.",
    paragraphs: [
        "ISKCON is popularly known as the Hare Krishna Movement. This is a movement with historical roots going back at least 5,000 years ago to the time when Lord Sri Krishna was present on the planet in India and spoke the now famous Bhagavad-gita to his beloved friend Arjuna.",
        "In the later part of the 15th century, Sri Chaitanya Mahaprabhu revitalized the bhakti tradition by introducing an expansive spiritual movement that swept India. Central to this renaissance was Chaitanya Mahaprabhu's emphasis on the chanting of Lord Krishna's holy names. Underlying the practice was a profound, rational, and intellectually comprehensive theology. ISKCON is a continuation of the movement that Sri Chaitanya revitalized."
    ]
};
const coreBeliefs = [
    {
        title: "Krishna, the Supreme",
        description: "Krishna is understood as the Supreme Personality of Godhead — the source of all that exists, worshipped as a personal, loving God rather than an abstract force."
    },
    {
        title: "Bhagavad-gita As It Is",
        description: "The Bhagavad-gita is our central scripture, studied through Srila Prabhupada's translation and commentary, Bhagavad-gita As It Is."
    },
    {
        title: "Bhakti Yoga",
        description: "Devotional service — chanting, worship, study, and service to others — is the direct path to reconnecting with Krishna, open to absolutely everyone."
    },
    {
        title: "Karma & Reincarnation",
        description: "The soul is eternal and passes through many bodies across lifetimes; our actions shape what comes next, and bhakti offers a way beyond the cycle entirely."
    }
];
const iskconStats = [
    {
        stat: "1966",
        label: "Founded in New York City"
    },
    {
        stat: "800+",
        label: "Temples & centers worldwide"
    },
    {
        stat: "~1M",
        label: "Congregational members globally"
    },
    {
        stat: "60",
        label: "Years spreading Krishna consciousness"
    }
];
const leadership = [
    {
        name: "Sankarshan Das",
        role: "Temple President",
        bio: "Sankarshan Das has served the Austin devotee community for over a decade, overseeing temple programs and the new temple capital campaign."
    },
    {
        name: "Resident Priest",
        role: "Pujari / Worship Coordinator",
        bio: "Leads daily Deity worship, aartis, and festival observances at the temple."
    },
    {
        name: "Congregational Coordinator",
        role: "Community & Outreach",
        bio: "Coordinates Sunday programs, new-devotee classes, and volunteer service (seva) opportunities."
    }
];
const getInvolvedOptions = [
    {
        title: "Sunday Feast Seva",
        description: "Help cook, serve, or clean up for the free weekly community feast."
    },
    {
        title: "Book Distribution",
        description: "Share Srila Prabhupada's books with the Austin community at outreach events."
    },
    {
        title: "Food for Life",
        description: "Prepare and distribute free vegetarian meals to those in need around Austin."
    },
    {
        title: "Youth Programs",
        description: "Support kirtan, drama, and educational programs for children and teens."
    },
    {
        title: "Temple Upkeep",
        description: "Lend a hand with grounds, Deity garments, altar decoration, and facilities."
    },
    {
        title: "Capital Campaign Volunteers",
        description: "Help with fundraising events, outreach, and communications for the new temple."
    }
];
const kcAtHome = {
    mantra: [
        "Hare Krishna, Hare Krishna",
        "Krishna Krishna, Hare Hare",
        "Hare Rama, Hare Rama",
        "Rama Rama, Hare Hare"
    ],
    altarItems: [
        "A picture of Srila Prabhupada",
        "A picture of Lord Chaitanya and associates",
        "A picture of Sri Sri Radha-Krishna",
        "An altar cloth",
        "Water cups and an offering plate",
        "A bell, incense, candles, and fresh flowers"
    ],
    offerableFoods: [
        "Milk & dairy products",
        "Vegetables",
        "Fruits & nuts",
        "Grains"
    ],
    nonOfferableFoods: [
        "Meat, fish & eggs",
        "Garlic & onions",
        "Caffeinated beverages"
    ],
    regulativePrinciples: [
        {
            title: "No Meat, Fish, or Eggs",
            description: "A diet free of violence toward other living beings, centered on foods offered to Krishna."
        },
        {
            title: "No Gambling",
            description: "Gambling breeds anxiety, greed, and envy — the opposite of a peaceful, devotional mind."
        },
        {
            title: "No Intoxication",
            description: "Alcohol, drugs, tobacco, and even caffeine cloud consciousness and cause forgetfulness of Krishna."
        },
        {
            title: "No Illicit Sex",
            description: "Sexual life is restricted to marriage, for procreation, in keeping with a life of self-control."
        }
    ],
    dailyPractices: [
        {
            title: "Chant the Holy Names",
            description: "Chant japa on 108 beads — 16 rounds daily is the standard for serious practitioners, ideally in the early morning hours."
        },
        {
            title: "Worship at Your Altar",
            description: "Keep it clean, offer fresh water and incense daily, and remove wilted flowers promptly."
        },
        {
            title: "Offer Your Food",
            description: "Prepare vegetarian food with devotion and offer it to Krishna before eating — it becomes prasadam, spiritualized food."
        },
        {
            title: "Read Daily",
            description: "Set aside time each day to read Srila Prabhupada's books — available at store.krishna.com."
        },
        {
            title: "Engage Your Work",
            description: "Offer the fruits of your profession — writing, art, or any skill — in service to Krishna rather than for self alone."
        },
        {
            title: "Stay in Association",
            description: "Visit the temple regularly and join a home study group to stay connected to the devotee community."
        }
    ]
};
const faqs = [
    {
        q: "What should I wear?",
        a: "Modest, comfortable clothing is welcome — there's no strict dress code for visitors. Many devotees wear traditional Indian clothing, but it isn't required."
    },
    {
        q: "Is there anything to eat?",
        a: "Yes — a free vegetarian feast (prasadam) is offered every Sunday after the program, open to everyone regardless of background."
    },
    {
        q: "Do I need to know anything about Krishna consciousness beforehand?",
        a: "Not at all. Newcomers are welcome at every program, and temple greeters are happy to explain what's happening as it unfolds."
    },
    {
        q: "Is parking available?",
        a: "Yes, free on-site parking is available at the temple."
    },
    {
        q: "Can I bring my family, including children?",
        a: "Absolutely — Sunday programs are family-friendly, with activities for children and a warm, welcoming community."
    }
];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__197f6qy._.js.map