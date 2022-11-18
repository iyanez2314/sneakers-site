export default{
    name: "sneakers",
    title: "Sneakers",
    type: "document",
    feilds: [
        {
            name: "image",
            title: "Image",
            type: "array",
            of: [{type: "image"}],
            options: {
                hostspot: true,
            }
        },
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "slug"
        }
    ]
}