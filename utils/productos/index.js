class Productos{
    constructor(){
        this.productos = []
    }
    getItems(){
        if(!this.productos.length){
            return this.noItems()
        }
        return this.productos
    }
    getItemsById(id){
        if(!this.productos.length){
            return this.noItems()
        }
        if(!this.productos[id]) return this.itemNotFound()
        return this.productos[id]
    }

    addItem(obj){
        if(!obj){
            return this.error()
        }
        let id = this.productos.length;
        let newProducto = {id,...obj}
        this.productos = [...this.productos, {...newProducto}]
        return newProducto
    }

    itemNotFound(){
        return {
            error : 'producto no encontrado'
        }
    }

    noItems(){
        return {
            'error':'no hay productos cargados'
        }
    }

    isObject(obj){
        return obj != null && obj.constructor.name === "Object"
    }
    error(){
        return {messaje:"algo salio mal"}
    }


}

export const productos = new Productos();

