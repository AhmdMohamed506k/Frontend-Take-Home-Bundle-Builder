import redisClient from "./redisClient.js";
import { CACHE_KEYS } from "./cacheKeys.js";


export const invalidateCache =async (action, data = {})=>{
    const { CategoryId } = data;
    let keysToDel = [];
   

    switch (action) {

        case "Category_MODIFIED":
            if(CategoryId){
                keysToDel.push(CACHE_KEYS.NewCategory(CategoryId))
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