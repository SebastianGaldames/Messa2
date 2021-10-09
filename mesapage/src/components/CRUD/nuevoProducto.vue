<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="container">
                    <div class="card">
                        <div class="card-body">
                            <form @submit.prevent="addProducto">
                                <div class="form-group">
                                    <input type="text" v-model="Producto.nombre"
                                    placeholder="Ingrese nombre"
                                    class="form-control"
                                    style="width : 300px; heigth : 5px">
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="Producto.precio"
                                    placeholder="Ingrese precio"
                                    class="form-control"
                                    style="width : 300px; heigth : 5px">
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="Producto.stockS"
                                    placeholder="Ingrese stock talla S"
                                    class="form-control"
                                    style="width : 300px; heigth : 5px">
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="Producto.stockM"
                                    placeholder="Ingrese stock talla M"
                                    class="form-control"
                                    style="width : 300px; heigth : 5px">
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="Producto.stockL"
                                    placeholder="Ingrese stock talla L"
                                    class="form-control"
                                    style="width : 300px; heigth : 5px">
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="Producto.stockXL"
                                    placeholder="Ingrese stock talla XL"
                                    class="form-control"
                                    style="width : 300px; heigth : 5px">
                                </div>
                                <div class="form-group">
                                    <textarea cols="30" rows="3" v-model="Producto.descripcion"
                                    class="form-control"
                                    placeholder="Ingrese descripcion"
                                    style="width : 300px">
                                    </textarea>
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="Producto.categoria"
                                    placeholder="Ingrese categoria"
                                    class="form-control"
                                    style="width : 300px; heigth : 5px">
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="Producto.genero"
                                    placeholder="Ingrese genero"
                                    class="form-control"
                                    style="width : 300px; heigth : 5px">
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="Producto.temporada"
                                    placeholder="Ingrese temporada"
                                    class="form-control"
                                    style="width : 300px; heigth : 5px">
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="Producto.imagen"
                                    placeholder="Ingrese url imagen"
                                    class="form-control"
                                    style="width : 300px; heigth : 5px">
                                </div>
                                <button class="btn btn-primary btn-bloc">
                                    Agregar producto
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col order-12">Second, but last</div>
            <div class="col order-1">Third, but first</div>    <!-- ¡¡CUIDADO!! -->
        </div>
    </div>  
</template>

<script>
export default {
    data() {
        return {
            Producto: {
                nombre: '',
                precio: '',
                stockS: '',
                stockM: '',
                stockL: '',
                stockXL: '',
                descripcion: '',
                categoria: '',
                genero: '',
                temporada: '',
                imagen: ''
            }
        }
    },
    methods: {
        addProducto() {
            console.log(this.Producto)
            this.Producto.nombre= '';
            this.Producto.precio= '';
            this.Producto.stockS= '';
            this.Producto.stockM= '';
            this.Producto.stockL= '';
            this.Producto.stockXL= '';
            this.Producto.descripcion= '';
            this.Producto.categoria= '';
            this.Producto.genero= '';
            this.Producto.temporada= '';
            this.Producto.imagen= '';
        }
    }
 
}
</script>
