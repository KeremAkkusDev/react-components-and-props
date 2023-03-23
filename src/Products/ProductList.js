function ProductList(){

    var products =[
        {
          id:1,
          name: "IPhone 14 Pro Max",
          price: 50000,
          description:"Telefon",
          colors:["silver","red","white","black"]
        },
        {
          id:2,
          name: "IPhone 13",
          price: 30000,
          description:"Telefon",
          colors:["mavi","yeşil","sarı"]
        },
        {
          id:3,
          name: "IPhone 11",
          price: 20000,
          description:"Telefon",
          colors:["Siyah","Beyaz","sarı"]
        }
      ]

    function formatPrice(product){
        return <p>{product.price + "TL"}</p>
      }
      
      function printDescription(product){
        if(product.description){
          return <p>{product.description}</p>
        }
    }

    return(
        <>
            {
                products.map((product)=>(
                <div className="prdocut-details" key={product.id} >
                    {(product.name && product.name.length>3) 
                    ? <h2>{product.name}</h2> 
                    : <h2>Ürün ismi girilmemiş.</h2>}
                    {(product.price && product.price > 0) && formatPrice(product)}
                    {product.description && <p>{product.description}</p>}
                    {product.colors.length>0 ? <p>Renk seçenekleri mevcut</p> : ""}
                    <ul>
                    {
                        product.colors.map((color,index) => (<li key={index}>{color}</li>))
                    }
                    </ul>
                </div>
                ))
            }
        </>
    );
}

export default ProductList;