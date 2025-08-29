import { useState, useEffect } from "react";




 function ProductList() {
  const [allProducts, setAllProducts] = useState([]);

  const apiCall = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
    setAllProducts(data.products);
  };

  

 

  

  useEffect(() => {
    apiCall();
  }, []);

   

  return (

    <div>
    <h1 className="mt-3 text-lg font-bold text-center text-[50px] ">Product Catalog</h1>
    <p className="text-center text-gray-500 text-[20px]" > Discover amazing products</p>

    
    <div className="pt-20 grid grid-cols-3 gap-4 px-30">

      {allProducts.map((product) => (
        <div
          key={product.id}
          className="flex flex-col w-100 h-120   bg-white shadow-md rounded-xl p-4"
        >
         
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-60 h-60 object-cover rounded-lg items-center"
          />
          <p className="mt-3 text-lg font-bold text-[20px] ">{product.title}</p>
          <p className="text-blue-400 ">{product.brand}</p>
          <p className="font-bold text-[40px]">${product.price}</p>
          <p>{product.des}</p>

          <button type="button" class="text-white bg-blue-400    font-medium rounded-lg text-sm px-5 py-2.5 ">view details</button>
          
        </div>
      ))}
    </div>
    </div>

   
  );
}

export default ProductList;
