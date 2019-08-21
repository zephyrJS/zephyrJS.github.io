module.exports = {
    title: 'zephyr 的 blog',
    description: '构建前端知识体系',
    themeConfig: {
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        nav: [
            { text: ' 文章目录', link: '/article/' },
            { text: 'github', link: 'https://github.com/zephyrJS' },
        ],
        sidebar: {
            '/article/': [
                '/article/',
                {
                    title: 'JS进阶',
                    children: [
                        '/article/JS进阶/作用域与闭包'
                    ]
                },
            ]
        }
    }
};