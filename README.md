# Demo X-Frame-Options

Pagea nested pageb.

When pageb headers is set to `ctx.set('X-Frame-Options', 'deny');`, pageb cannot be nested by iframe.

## Local Run

```
pnpm install

pnpm start
```

## access

pagea: http://localhost:4000

pageb: http://localhost:3000

## Reference

https://www.bilibili.com/video/BV1k441127d7/?spm_id_from=333.337.search-card.all.click&vd_source=a4d8f07ffe3e37d3d8263a3881c3aacb
