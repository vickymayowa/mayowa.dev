import type { JsonLd } from "@/lib/seo/json-ld"

type JsonLdScriptProps = {
  data: JsonLd | JsonLd[]
}

export default function JsonLdScript({ data }: JsonLdScriptProps) {
  const schemas = Array.isArray(data) ? data : [data]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
