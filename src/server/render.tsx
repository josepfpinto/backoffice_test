/**
 * Server Side Rendering
 */
import { APIGatewayEvent } from "aws-lambda";
import * as React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../App";
import ConfigContext from "../components/ConfigContext";
import config from "./config";
import html from "./html";
import { Provider } from 'react-redux';
import store from "../store/store";
import { Stats } from "src/types";

/**
 * Server-side rendering
 */
export default async function render(_event: APIGatewayEvent): Promise<string> {
  // The stats are generated by the Webpack Stats Plugin (`webpack-stats-plugin`)
  const stats = (await import("../../dist/stats.json")) as unknown as Stats;
  const content = renderToString(
    <ConfigContext.Provider value={config}>
      <StaticRouter basename={config.app.URL} location={_event.path}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    </ConfigContext.Provider>,
  );
  return html({ stats, content, config });
}
