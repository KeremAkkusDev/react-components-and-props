function Header(){
    var selectedProducts =[
    
    ]
    return(
        <>
            <h1 id="header">Ürün Listesi</h1>
            <h3>Seçilen Ürünler:  {selectedProducts.length}</h3>
        </>
    );
}

export default Header;