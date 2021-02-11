class productos{
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
        if(id!=0){
            let maxId = this.productos.reduce(function(prev, current) {
                return (prev.id > current.id) ? prev : current
            })
            id = maxId.id + 1
        }
        let newProducto = {...obj,id}
        this.productos = [...this.productos, {...newProducto}]
        return newProducto
    }
    putItemById(obj){
        let id = obj.id
        if(!id){
            return this.error()
        }
        if(!this.productos[id]){
            return this.noItems() 
        }
        let newProducto = {...obj}
        this.productos[id] = {...newProducto}
        return newProducto
    }
    deleteItemById(obj){
        if(!obj.id){
            return this.error()
        }
        let filtered = this.productos.filter(function(val) { return val.id != obj.id; });
        this.productos = filtered;
        return this.productos
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

export const Productos = new productos();

