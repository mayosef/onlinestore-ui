import Network from './network.service';


class ProductService extends Network {
 
    getByCategoryId(categoryId) {
        return this.send('GET', `/category/${categoryId}/product`)
    }
    getById(productId) {
        return this.send('GET', `/product/${productId}`)
    }
  
}


export default new ProductService();