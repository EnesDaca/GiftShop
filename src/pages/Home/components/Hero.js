import { Link } from "react-router-dom"
import giftshop from "../../../assets/giftshop.png"

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
        <div className="text my-5">
            <h1 className="text-5xl font-bold">The Ultimate Gift Shop</h1>
            <p className="text-2xl my-7 px-1 dark:text-slate-300">Gifts Galore: Discover unique and thoughtful gifts for every occasion at our one-stop-shop. A treasure trove of carefully curated gifts to suit all tastes and budgets.</p>
            <Link to="/products" type="button" className="text-white tirkiz hover:tirkiz2 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 focus:outline-none dark:focus:ring-blue-800">Explore eBooks</Link>
        </div>
        <div className="visual my-5 lg:max-w-xl">
            <img className="rounded-lg max-h-full" src={giftshop} alt="Gift Shop Image" />
        </div>
    </section>
  )
}
