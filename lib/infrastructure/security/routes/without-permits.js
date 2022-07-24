export default [
  { resource: /^\/api\/auth\/sign-in$/, methods: ['POST'] },
  { resource: /^\/api\/songs\/$/, methods: ['GET'] },
  { resource: /^\/api\/author\/:id\/songs$/, methods: ['GET'] },
]