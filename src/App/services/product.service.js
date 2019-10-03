import Network from './network.service';


class ProductService extends Network {
    
    createProduct(product) {
        const data = new FormData();
        for(let prop in product) {
            data.append(prop, product[prop])
        }
        return this.sendMultipart('PUT', '/product', data, {
            'Content-Type': 'muiltipart/form-data'
        })
    }

    getByCategoryId(categoryId) {
        return this.send('GET', `/category/${categoryId}/product`)
    }
    getById(productId) {
        return this.send('GET', `/product/${productId}`)
    }

    getByIds(productIds) {
        return this.send('POST', `/product/bulk`, {
            ids:productIds
        })

    }
  
}


export default new ProductService();