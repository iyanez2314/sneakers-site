export default{
    name: "newlyAdded",
    title: "NewlyAdded",
    type: "document",
    fields: [
       {
           name: 'image',
           title: 'Image',
           type: 'image',
           options: {
               hotspot: true
           }
       },
       {
           name: 'buttonText',
           title: 'ButtonText',
           type: 'string'
       },
       {
           name: 'product',
           title: 'Product',
           type: 'string'
       },
       {
           name: 'desc',
           title: 'Desc',
           type: 'string'
       },
       {
           name: 'price',
           title: 'Price',
           type: 'number'
       }
    ]
}