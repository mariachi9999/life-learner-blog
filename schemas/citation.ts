import { defineField, defineType } from "sanity";

export default defineType({
  name: "citation",
  title: "Citation",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "articleTitle",
      title: "Article Title",
      type: "string",
    }),
    defineField({
      name: "blogName",
      title: "Blog Name",
      type: "string",
    }),
    defineField({
      name: "citationUrl",
      title: "Citation url",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
        }),
    }),
  ],
  preview: {},
});
