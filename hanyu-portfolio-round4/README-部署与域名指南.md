# 作品集网站 · 部署与域名指南

## 文件结构（"自动长大"的关键） 

```
site/
├── index.html                      ← 首页：案例卡片墙
├── cases/
│   └── vatica-node-reminder.html   ← 案例页（一个项目一个文件）
├── demos/
│   └── vatica-threshold-field.html ← 交互demo（被案例页iframe嵌入）
└── README-部署与域名指南.md
```

以后每做完一个项目：往 `cases/` 加一页、往 `demos/` 放交互演示（如有）、
在 `index.html` 里复制一张卡片改文字。三步，网站就长大一格。

## 部署（三选一，都免费）

**方案A：Vercel（推荐，最快）**
1. 注册 vercel.com（用GitHub账号登录）
2. 把 site 文件夹推到一个GitHub仓库（或直接用 `vercel` 命令行拖拽部署）
3. 完成，得到 `xxx.vercel.app` 网址，全球CDN加速

**方案B：GitHub Pages**
1. GitHub新建仓库，名字任意（如 `portfolio`），把 site 里的文件推上去
2. 仓库 Settings → Pages → Branch 选 main → Save
3. 得到 `你的用户名.github.io/portfolio`

**方案C：Netlify** — 打开 app.netlify.com/drop，把 site 文件夹直接拖进浏览器，完成。

## 绑定自己的域名（hanyuliu.com 效果）

1. 买域名：Namecheap / Cloudflare（海外求职推荐，约 $10-15/年）或阿里云/腾讯云（¥60-100/年）。
   建议：`hanyuliu.com`、`hanyu.design`、`hanyu.works` 这类简短组合
2. 在托管平台（Vercel/GitHub Pages/Netlify 的 Domain 设置里）添加你的域名
3. 按平台提示，去域名商后台加一条 DNS 记录（CNAME 或 A 记录，平台会给出具体值）
4. 等10分钟生效——访客看到的就是你的域名，完全看不出托管在哪

注意：国内访问 Vercel/GitHub Pages 速度一般但可用；如果主要面向招聘方，
可以再把同一套文件部署一份到腾讯云COS/阿里云OSS静态托管（约¥10/年，需域名备案）。

## 内容维护建议

- 案例页遵循固定叙事骨架：The mess（真实痛点）→ The insight（核心抽象）→
  What shipped（落地了什么+数字）→ 交互demo → What I'd tell another team（复盘）
- 所有数字要真实可背书，面试会被追问
- 客户敏感信息脱敏：可以说行业和规模，不放未授权的内部截图
- 每个案例同步导出一版PDF（浏览器打印→存PDF）备投
