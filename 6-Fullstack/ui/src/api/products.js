

import apiRoot from './root';

export async function getProducts() {
    const response = await apiRoot.get("/products");
    return response.data;
}
