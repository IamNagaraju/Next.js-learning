21. Your route toolbox so far

You now have:

Normal route
app/products/page.tsx

→ /products

Dynamic route
app/products/[id]/page.tsx

→ /products/101

Route group
app/(auth)/login/page.tsx

→ /login

Catch-all
app/docs/[...slug]/page.tsx

→ /docs/a/b/c

Optional catch-all
app/docs/[[...slug]]/page.tsx

→ /docs
→ /docs/a
→ /docs/a/b