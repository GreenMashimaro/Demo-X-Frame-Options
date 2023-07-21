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
