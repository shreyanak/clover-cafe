
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/clover-cafe/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/clover-cafe"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2472, hash: 'c397919df0c44733582fdb6a2d2b388b78ff5137c7ca81ed7a7a820aaa956efe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2985, hash: '4d8f8ef94cd2c6042958bedfb61b5641a5c55785b91a8cea179f07094ae6631f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6813, hash: 'cb48cbfb2e8e68767572705400b7809fce9f70f9f6a241066ee99c969ec68847', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
