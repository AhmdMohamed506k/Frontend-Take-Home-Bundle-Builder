import redisClient from "./redisClient.js";
import { CACHE_KEYS } from "./cacheKeys.js";


export const invalidateCache =async (action, data = {})=>{
    const { CategoryId ,ProductId} = data;
    let keysToDel = [];
   

    switch (action) {

        case "Category_MODIFIED":
            if(CategoryId){
                keysToDel.push(CACHE_KEYS.NewCategory(CategoryId))
            }

        break;


        case "CategoryProducts_MODIFIED":
            if (CategoryId) {
                keysToDel.push(CACHE_KEYS.CategoryProducts(CategoryId))
            }
            

        break;
        


        case "ProductInfo_MODIFIED":
            if(ProductId){
                keysToDel.push(CACHE_KEYS.ProductInfo(ProductId))
            }
            

        break;


    
        default:
            console.warn(`[Cache Invalidator]: Unknown action type: ${action}`);
            return;

            
    }

    
    if (keysToDel.length > 0) {
        
        const uniqueKeys = [...new Set(keysToDel)];
        await redisClient.del(uniqueKeys);
        
        console.log(`[Cache Invalidator]: Successfully cleared keys:`, uniqueKeys);
    }
}