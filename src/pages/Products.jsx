import Cart from "../components/Cart";
import { useSelector } from "react-redux";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

export default function Products() {
  const { products: data, status } = useSelector((state) => state.products);

  const spinnerStyle = css`
    display: block;
    margin: 0 auto;
   

  `;

  return (
    <div className="products-section container mx-auto py-10">
      <h2 className="section-title uppercase text-2xl font-bold space-font text-center mb-10">
        browse all products
      </h2>
      <div className="products-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4   gap-6">
       
        {status === "loading" && (
         
            <div className=" col-span-full flex justify-center items-center ">
              <RingLoader
                color="#36D7B7"
                loading={true}
                css={spinnerStyle}
                size={150}
              />
            </div>
         
        )}

        {data.map((product) => (
          <Cart key={product.id} product={product} />
        ))}
  
 


      </div>
    </div>
  );
}
