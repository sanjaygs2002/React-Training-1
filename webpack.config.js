export default{
    entry:"./myapp/src/App.jsx",
    output:{
        filename:"bundle.js",
    },
    module:{
       rules:[
        {test:/\.css$/ , use : "css-loader"},
       ]
    },
    mode:"Production"
}