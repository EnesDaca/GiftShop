import { Link } from "react-router-dom"

export const DashboardCard = ({order}) => {
  return (
    <div className="max-w-4xl m-auto p-2 mb-5 border dark:border-stone-500">
        <div className="flex justify-between text-sm m-2 font-bold dark:text-slate-200">
            <span>Order Id: {order.id}</span>
            <span>Total: ${order.amount_paid}</span>
        </div>
                { order.cartList.map((product) => (
            <div key={product.id} className="flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5 ">
                <div className="flex">
                    {/* <Link to={`/products/${product.id}`}>
                        <img className="w-32 rounded" src={product.poster} alt={product.name} />
                    </Link> */}
                    <ProductCard key={product.id} product={product}>
                    <img className="w-32 rounded" src={product.poster} alt={product.name} />
                    </ProductCard>
                    <div className="">
                        {/* <Link to={`/products/${product.id}`}>
                            <p className="text-lg ml-2 dark:text-slate-200">{product.name}</p>
                        </Link> */}
                        <ProductCard key={product.id} product={product}>
                        <p className="text-lg ml-2 dark:text-slate-200">{product.name}</p>
                    </ProductCard>
                        <div className="text-lg m-2 dark:text-slate-200">
                            <span>${product.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        )) }
    </div>
  )
}
