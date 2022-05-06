import { Cycle } from "./cycle"
import { Kitchen } from "./kitchen"
import { Laptop } from "./laptop"
import { Science } from "./science"

import "../styles/landingPage.css"
import "../styles/collection.css"
import "../styles/Catagory.css"
import { Mobile } from "./mobile"

export const Category = () => {

    return (
        <div>
            <div></div>
            <div id="s2">E-bike store</div>

            <div id="selectCat">
                <div id="Home">
                    Home
                </div>
                
                <div >
                <select id="Catopt">
                <option>Category</option>
                <option>Outdoor & cycle</option>
                <option>Kitchen </option>
                <option>Science and Printing </option>
                <option>Mobiles</option>
                <option>Laptop</option>
                </select>
                </div>
                </div>
                <div id="s3">ALL PRODUCTS</div>
                <div id="Btn2">
                <button>Sort By:</button>
                <button>Newest</button>
                <button>Hottest</button>
                <button>Rating</button>
                <button>Trending</button>
                <select>
                <option>Price</option>
                <option>High To Low</option>
                <option>Low To High</option>
                </select>
                </div>
            <Cycle />

            <Kitchen />
            <Laptop />
            <Science />
            <Mobile/>
        </div>

    )
}