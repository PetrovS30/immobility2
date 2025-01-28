module.exports = {

"[project]/app/loader/music.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// audioFile.js
const audioFile = './music.mp3';
module.exports = audioFile;
}}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loader$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/loader/music.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
"use client";
;
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const ConnectToChat = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$socket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].emit('createRoom', userConfig);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleMouseOver = ()=>{
            if (audioRef.current) {
                try {
                    audioRef.current.play();
                } catch (error) {
                    console.error("Ошибка при воспроизведении аудио:", error);
                }
            }
        };
        document.addEventListener("click", handleMouseOver);
        !userConfig.localName ? router.push('/') : ConnectToChat();
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$socket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].on('roomState', (data)=>data > 1 && router.push('/chat'));
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$socket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].off('roomState');
        };
    }, [
        router
    ]);
    const quotes = [
        "Знакомства — это как страницы книги. Некоторые захватывают, другие лишь мелькают, но каждый оставляет след.",
        "Каждое знакомство — шанс для нового понимания мира и себя.",
        "Знакомства — это моменты, когда мы открываем дверь в чужую реальность, а иногда и в свою.",
        "В каждом новом знакомстве скрыт урок, который мы должны выучить.",
        "Знакомства — это не просто встречи, это пересечения путей, которые изменяют направление.",
        "Каждый человек, с которым мы знакомимся, — это отражение той части нас, которую мы ещё не осознали.",
        "Знакомства — это не случайность, а необходимость для роста и трансформации.",
        "В каждом знакомстве есть шанс найти того, кто изменит не только тебя, но и твой взгляд на мир.",
        "Знакомства учат нас, что не всегда нужно искать ответы, иногда достаточно просто слушать.",
        "Знакомства — это как фрески на стенах жизни, каждая деталь важна, даже если не видна сразу.",
        "Каждое знакомство — это шанс понять, что мир гораздо шире, чем мы привыкли думать, и намного одинокее, чем мы себе представляем.",
        "Мы встречаем людей, но иногда мы теряем себя, пытаясь понять, кто мы для них.",
        "Каждое знакомство — это не просто встреча, а потеря части себя, которую мы не хотели отпускать.",
        "Знакомства — это всегда как открытие книги, но чаще всего страницы оказываются порваными.",
        "Мы ищем смысл в чужих глазах, но находим только пустоту, которую никто не может заполнить.",
        "В каждом знакомстве есть момент, когда ты понимаешь, что уже никогда не будешь прежним.",
        "Знакомства — это мгновения, которые изменяют нас, но никто не видит, как мы меняемся внутри.",
        "Мы думаем, что мы выбираем людей, но на самом деле они выбирают нас, и каждый выбор — это след на душе.",
        "Иногда мы теряем людей, но гораздо больнее терять частицу себя, которая осталась с ними.",
        "Знакомства — это не встречи, а прощания, которые мы ещё не осознали."
    ];
    return userConfig.localName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$loader$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
                        type: "audio/mp3"
                    }, void 0, false, {
                        fileName: "[project]/app/loader/page.tsx",
                        lineNumber: 66,
                        columnNumber: 21
                    }, this),
                    "Ваш браузер не поддерживает элемент audio."
                ]
            }, void 0, true, {
                fileName: "[project]/app/loader/page.tsx",
                lineNumber: 65,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "loader",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Соединение с чатом устанавливается. Скоро начнём!"
                    }, void 0, false, {
                        fileName: "[project]/app/loader/page.tsx",
                        lineNumber: 71,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/loader/page.tsx",
                    lineNumber: 70,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/loader/page.tsx",
                lineNumber: 69,
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
                            lineNumber: 79,
                            columnNumber: 29
                        }, this)
                    }, index, false, {
                        fileName: "[project]/app/loader/page.tsx",
                        lineNumber: 78,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/loader/page.tsx",
                lineNumber: 76,
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

//# sourceMappingURL=_feca6b._.js.map