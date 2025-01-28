module.exports = {

"[project]/app/loader/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$socket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/socket.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-fast-marquee/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const Loader = ()=>{
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const userConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((name)=>name.data);
    const audio = typeof Audio !== "undefined" ? new Audio('./music1.mp3') : null;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const ConnectToChat = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$socket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].emit('createRoom', userConfig);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (audio) {
            audio.play();
            audio.volume = 0.03;
        }
        !userConfig.localName ? router.push('/') : ConnectToChat();
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$socket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].on('roomState', (data)=>data > 1 && router.push('/chat'));
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$socket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].off('roomState');
            audio?.pause();
        };
    }, [
        router
    ]);
    const quotes = [
        "Каждый новый человек в твоей жизни — это космос, полный звёзд, которые ты ещё не видел.",
        "Дружба — это редкий дар, который не принадлежит ни времени, ни пространству.",
        "Некоторые люди появляются как ветер — слегка касаются и меняют твоё направление навсегда.",
        "В тишине друзей больше мудрости, чем в тысяче громких слов.",
        "Друзья — это те, кто слышит музыку твоей души, даже когда ты сам забыл её мелодию.",
        "Каждый друг — это отражение тебя самого, но в новой, неожиданной интерпретации.",
        "Новые люди — это загадки, ответы на которые всегда немного о нас самих.",
        "Незнакомцы — это как книги в библиотеке: ты никогда не знаешь, какая история изменит твою жизнь.",
        "Встреча с другим человеком — это диалог двух вселенных, где истина рождается на границе их столкновения.",
        "Настоящий друг — это не тот, кто идёт с тобой в свет, а тот, кто не отпускает твою руку в темноте."
    ];
    return userConfig.localName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "loader",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Соединение с чатом устанавливается. Скоро начнём!"
                    }, void 0, false, {
                        fileName: "[project]/app/loader/page.tsx",
                        lineNumber: 53,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/loader/page.tsx",
                    lineNumber: 52,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/loader/page.tsx",
                lineNumber: 51,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$fast$2d$marquee$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "lenta",
                speed: 40,
                gradient: false,
                pauseOnHover: false,
                children: quotes.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "logo-slide",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: item
                        }, void 0, false, {
                            fileName: "[project]/app/loader/page.tsx",
                            lineNumber: 59,
                            columnNumber: 29
                        }, this)
                    }, index, false, {
                        fileName: "[project]/app/loader/page.tsx",
                        lineNumber: 58,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/loader/page.tsx",
                lineNumber: 56,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Loader;
}}),
"[project]/app/loader/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/react-fast-marquee/dist/index.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use client";
function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}
Object.defineProperty(exports, '__esModule', {
    value: true
});
var React = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {
        'default': e
    };
}
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
___$insertStyle(".rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: \"\";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}");
const Marquee = React.forwardRef(function Marquee({ style = {}, className = "", autoFill = false, play = true, pauseOnHover = false, pauseOnClick = false, direction = "left", speed = 50, delay = 0, loop = 0, gradient = false, gradientColor = "white", gradientWidth = 200, onFinish, onCycleComplete, onMount, children }, ref) {
    // React Hooks
    const [containerWidth, setContainerWidth] = React.useState(0);
    const [marqueeWidth, setMarqueeWidth] = React.useState(0);
    const [multiplier, setMultiplier] = React.useState(1);
    const [isMounted, setIsMounted] = React.useState(false);
    const rootRef = React.useRef(null);
    const containerRef = ref || rootRef;
    const marqueeRef = React.useRef(null);
    // Calculate width of container and marquee and set multiplier
    const calculateWidth = React.useCallback(()=>{
        if (marqueeRef.current && containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const marqueeRect = marqueeRef.current.getBoundingClientRect();
            let containerWidth = containerRect.width;
            let marqueeWidth = marqueeRect.width;
            // Swap width and height if direction is up or down
            if (direction === "up" || direction === "down") {
                containerWidth = containerRect.height;
                marqueeWidth = marqueeRect.height;
            }
            if (autoFill && containerWidth && marqueeWidth) {
                setMultiplier(marqueeWidth < containerWidth ? Math.ceil(containerWidth / marqueeWidth) : 1);
            } else {
                setMultiplier(1);
            }
            setContainerWidth(containerWidth);
            setMarqueeWidth(marqueeWidth);
        }
    }, [
        autoFill,
        containerRef,
        direction
    ]);
    // Calculate width and multiplier on mount and on window resize
    React.useEffect(()=>{
        if (!isMounted) return;
        calculateWidth();
        if (marqueeRef.current && containerRef.current) {
            const resizeObserver = new ResizeObserver(()=>calculateWidth());
            resizeObserver.observe(containerRef.current);
            resizeObserver.observe(marqueeRef.current);
            return ()=>{
                if (!resizeObserver) return;
                resizeObserver.disconnect();
            };
        }
    }, [
        calculateWidth,
        containerRef,
        isMounted
    ]);
    // Recalculate width when children change
    React.useEffect(()=>{
        calculateWidth();
    }, [
        calculateWidth,
        children
    ]);
    React.useEffect(()=>{
        setIsMounted(true);
    }, []);
    // Runs the onMount callback, if it is a function, when Marquee is mounted.
    React.useEffect(()=>{
        if (typeof onMount === "function") {
            onMount();
        }
    }, []);
    // Animation duration
    const duration = React.useMemo(()=>{
        if (autoFill) {
            return marqueeWidth * multiplier / speed;
        } else {
            return marqueeWidth < containerWidth ? containerWidth / speed : marqueeWidth / speed;
        }
    }, [
        autoFill,
        containerWidth,
        marqueeWidth,
        multiplier,
        speed
    ]);
    const containerStyle = React.useMemo(()=>Object.assign(Object.assign({}, style), {
            ["--pause-on-hover"]: !play || pauseOnHover ? "paused" : "running",
            ["--pause-on-click"]: !play || pauseOnHover && !pauseOnClick || pauseOnClick ? "paused" : "running",
            ["--width"]: direction === "up" || direction === "down" ? `100vh` : "100%",
            ["--transform"]: direction === "up" ? "rotate(-90deg)" : direction === "down" ? "rotate(90deg)" : "none"
        }), [
        style,
        play,
        pauseOnHover,
        pauseOnClick,
        direction
    ]);
    const gradientStyle = React.useMemo(()=>({
            ["--gradient-color"]: gradientColor,
            ["--gradient-width"]: typeof gradientWidth === "number" ? `${gradientWidth}px` : gradientWidth
        }), [
        gradientColor,
        gradientWidth
    ]);
    const marqueeStyle = React.useMemo(()=>({
            ["--play"]: play ? "running" : "paused",
            ["--direction"]: direction === "left" ? "normal" : "reverse",
            ["--duration"]: `${duration}s`,
            ["--delay"]: `${delay}s`,
            ["--iteration-count"]: !!loop ? `${loop}` : "infinite",
            ["--min-width"]: autoFill ? `auto` : "100%"
        }), [
        play,
        direction,
        duration,
        delay,
        loop,
        autoFill
    ]);
    const childStyle = React.useMemo(()=>({
            ["--transform"]: direction === "up" ? "rotate(90deg)" : direction === "down" ? "rotate(-90deg)" : "none"
        }), [
        direction
    ]);
    // Render {multiplier} number of children
    const multiplyChildren = React.useCallback((multiplier)=>{
        return [
            ...Array(Number.isFinite(multiplier) && multiplier >= 0 ? multiplier : 0)
        ].map((_, i)=>React__default['default'].createElement(React.Fragment, {
                key: i
            }, React.Children.map(children, (child)=>{
                return React__default['default'].createElement("div", {
                    style: childStyle,
                    className: "rfm-child"
                }, child);
            })));
    }, [
        childStyle,
        children
    ]);
    return !isMounted ? null : React__default['default'].createElement("div", {
        ref: containerRef,
        style: containerStyle,
        className: "rfm-marquee-container " + className
    }, gradient && React__default['default'].createElement("div", {
        style: gradientStyle,
        className: "rfm-overlay"
    }), React__default['default'].createElement("div", {
        className: "rfm-marquee",
        style: marqueeStyle,
        onAnimationIteration: onCycleComplete,
        onAnimationEnd: onFinish
    }, React__default['default'].createElement("div", {
        className: "rfm-initial-child-container",
        ref: marqueeRef
    }, React.Children.map(children, (child)=>{
        return React__default['default'].createElement("div", {
            style: childStyle,
            className: "rfm-child"
        }, child);
    })), multiplyChildren(multiplier - 1)), React__default['default'].createElement("div", {
        className: "rfm-marquee",
        style: marqueeStyle
    }, multiplyChildren(multiplier)));
});
exports.default = Marquee; //# sourceMappingURL=index.js.map
}}),

};

//# sourceMappingURL=_a0bab1._.js.map