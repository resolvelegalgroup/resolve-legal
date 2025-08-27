import React from "react"
import Helmet from "react-helmet"

export default React.memo(
  ({
    author,
    canonicalUrl,
    datePublished,
    defaultTitle,
    description,
    image,
    logo,
    isBlogPost,
    organization,
    title,
    url,
  }) => {
    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "Attorney",
        "@id": "https://www.resolvelegalgroup.com",
        name: "Resolve Legal Group",
        alternateName: "Resolve Legal Group",
        logo: logo,
        telephone: "(403) 229-2365",
        email: "info@resolvelegalgroup.com",
        sameAs: [
          "https://www.facebook.com/ResolveLegalGroup/",
          "https://twitter.com/resolvelglgroup",
        ],
        url: "https://www.resolvelegalgroup.com/",
        image: image,
        priceRange: "$$",
        description: description,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Suite #440, 318-11th Avenue SE",
          addressLocality: "Calgary",
          addressRegion: "Alberta",
          postalCode: "T2G 0Y2",
          addressCountry: "CA",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday"],
            opens: "9:00am",
            closes: "5:00pm",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Tuesday"],
            opens: "9:00am",
            closes: "5:00pm",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Wednesday"],
            opens: "9:00am",
            closes: "5:00pm",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Thursday"],
            opens: "9:00am",
            closes: "5:00pm",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Friday"],
            opens: "9:00am",
            closes: "5:00pm",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "",
            closes: "",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday"],
            opens: "",
            closes: "",
          },
        ],
      },
    ]

    const schema = isBlogPost
      ? [
          ...baseSchema,
          {
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@id": url,
                  name: title,
                  image,
                },
              },
            ],
          },
          {
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            url,
            name: title,
            alternateName: defaultTitle,
            headline: title,
            image: {
              "@type": "ImageObject",
              url: image,
            },
            description,
            author: {
              "@type": "Person",
              name: author.name,
            },
            publisher: {
              "@type": "Organization",
              url: organization.url,
              logo: organization.logo,
              name: organization.name,
            },
            mainEntityOfPage: {
              "@type": "WebSite",
              "@id": canonicalUrl,
            },
            datePublished,
          },
        ]
      : baseSchema

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
    )
  }
)
