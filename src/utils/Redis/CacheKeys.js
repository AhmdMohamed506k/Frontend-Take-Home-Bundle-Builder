


export const CACHE_KEYS = {

  
  NewCategory:(CategoryId)=> `Category:${CategoryId}`,

  CategoryProducts:(CategoryId)=> `Products:Category:${CategoryId}`,

  ProductInfo:(ProductId)=> `Product:${ProductId}`,
  

}