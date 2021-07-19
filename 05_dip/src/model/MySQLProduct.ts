import IDbProduct from "./IDbProduct";

export default class MySQLProduct implements IDbProduct {
    getProductById(productId: number): string {
        return `Mysql: Exibindo dados do produto: ${productId}`;
    }

}