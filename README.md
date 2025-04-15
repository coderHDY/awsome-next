## 目录结构
my-app/
├── app/                         # Next.js App Router 根目录
│   ├── layout.tsx               # 全局 layout（页面包裹框架）
│   ├── page.tsx                 # 首页
│   ├── dashboard/               # 路由页面（自动成为 URL 路由）
│   │   ├── page.tsx             # /dashboard 页面
│   │   └── layout.tsx           # dashboard 下的子布局
│   ├── items/                   # feature 页面，例如商品管理
│   │   ├── page.tsx             # /items
│   │   └── [id]/page.tsx        # /items/:id
│   └── api/                     # 后端 API 路由（Server Handler）
│       ├── items/
│       │   ├── route.ts         # /api/items (GET/POST)
│       │   └── [id]/route.ts    # /api/items/:id (GET/PUT/DELETE)
├── components/                  # 所有可复用的 UI 组件
│   ├── common/                  # 通用组件（按钮、表单等）
│   ├── layout/                  # 页面布局相关组件
│   └── items/                   # 某一业务模块下的组件
├── features/                    # 按业务功能组织的 feature 模块（可选）
│   └── items/                   # items 功能域
│       ├── components/          # items 专属组件
│       ├── services/            # items 的 service 层（API 封装）
│       ├── hooks/               # 专属 hooks
│       └── types.ts             # 类型定义
├── lib/                         # 工具函数、封装库、全局配置等
│   ├── api.ts                   # 全局 fetch 封装
│   ├── constants.ts             # 全局常量
│   └── utils.ts                 # 通用工具
├── public/                      # 公共资源
├── styles/                      # 全局样式、Less、Tailwind config
│   ├── globals.less
│   └── theme.ts
├── types/                       # 全局通用类型定义
│   └── index.ts
├── .env.local                   # 环境变量
├── next.config.js               # Next.js 配置
├── tsconfig.json                # TypeScript 配置
└── package.json


## 