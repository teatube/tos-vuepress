const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
    title : 'Tetris Online (Study) 使用说明',
    description : '方块茶服。Tetris Online (Japan) 的 俄罗斯方块研究群用 线上研究服。因服主名称含【茶】因此也称作【茶服】',
    base : '/tos/',
    theme: defaultTheme({
        navbar: [
        // NavbarItem
        {
            text: '茶服/TOS',
            link: '/',
        },
        ],
        // URL
        logo: 'https://teatube.cn/favicon.ico',
        // 侧边栏对象
        // 不同子路径下的页面会使用不同的侧边栏
        sidebar: [
        {
            text: 'Tetris Online (Study)',
            link: '/',
            children: [
                '/',
                '/support/',
                '/download/',
                '/register/',
                '/launcher/',
                '/usage/',
                '/room-commands/',
                '/mys-commands/',
                '/about/',
                '/streamer-safety/',
            ]
        }
      ],
    }),
  }
  