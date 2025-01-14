import { component$ } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";
import { RouterHead } from "~/component/routerHead/routerHead";
import { QwikSpeak } from "qwik-speak";
import { config, translationFn } from "~/speak-config";

import "./global.css";

export default component$(() => {
    return (
        <QwikSpeak config={config} translationFn={translationFn}>
            <QwikCityProvider>
                <head>
                    <meta charSet="utf-8"/>
                    <link rel="manifest" href="/manifest.json"/>
                    <RouterHead/>
                </head>
                <body>
                    <RouterOutlet/>
                    <ServiceWorkerRegister/>
                </body>
            </QwikCityProvider>
        </QwikSpeak>
    );
});
