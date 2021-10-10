<template>
    <div class="container">
        <div class="row">
            <div class="col col-md-4">
                <div class="container">
                    <div class="card">
                        <div class="card-body">
                            <form @submit.prevent="agregarProducto">
                                <div class="form-group">
                                    <input type="text" v-model="producto.nombre"
                                    placeholder="Ingrese nombre"
                                    class="form-control"
                                    style="width : 330px; heigth : 5px">
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="producto.precio"
                                    placeholder="Ingrese precio"
                                    class="form-control"
                                    style="width : 330px; heigth : 5px">
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="producto.stockS"
                                    placeholder="Ingrese stock talla S"
                                    class="form-control"
                                    style="width : 330px; heigth : 5px">
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="producto.stockM"
                                    placeholder="Ingrese stock talla M"
                                    class="form-control"
                                    style="width : 330px; heigth : 5px">
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="producto.stockL"
                                    placeholder="Ingrese stock talla L"
                                    class="form-control"
                                    style="width : 330px; heigth : 5px">
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="producto.stockXL"
                                    placeholder="Ingrese stock talla XL"
                                    class="form-control"
                                    style="width : 330px; heigth : 5px">
                                </div>
                                <div class="form-group">
                                    <textarea cols="30" rows="3" v-model="producto.descripcion"
                                    class="form-control"
                                    placeholder="Ingrese descripcion"
                                    style="width : 330px">
                                    </textarea>
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="producto.categoria"
                                    placeholder="Ingrese categoria"
                                    class="form-control"
                                    style="width : 330px; heigth : 5px">
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="producto.genero"
                                    placeholder="Ingrese genero"
                                    class="form-control"
                                    style="width : 330px; heigth : 5px">
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="producto.temporada"
                                    placeholder="Ingrese temporada"
                                    class="form-control"
                                    style="width : 330px; heigth : 5px">
                                </div>
                                <div class="form-group">
                                    <input type="text" v-model="producto.imagen"
                                    placeholder="Ingrese url imagen"
                                    class="form-control"
                                    style="width : 330px; heigth : 5px">
                                </div>
                                <div class="text-center">

                                    <template v-if="editar===false">
                                        <button class="btn btn-primary btn-bloc">
                                            Agregar Producto
                                        </button>
                                    </template>
                                        
                                    <template v-else>
                                        <button class="btn btn-primary btn-bloc">
                                            Modificar
                                        </button>
                                    </template>
                                    
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col order-12 col-md-2"></div>  <!-- ¡¡CUIDADO!! -->
            <div class="col order-12 col-md-6"> 
                <b-form-input id="formulario" v-model="textoBusqueda" size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
                <b-table striped hover :items="arrayproductos" :fields="fields" :filter="textoBusqueda" :per-page="prodXPagina" :current-page="pagActual">
                     <template #cell(actions)="row">
                        <b-button @click="editarProducto(row.item)" variant="success" size="sm" class="mr-1">
                            Editar
                        </b-button>
                        <b-button variant="danger" size="sm" class="mr-1">
                            Eliminar
                        </b-button>
                    </template>
                </b-table>
                <b-pagination v-model="pagActual" :total-rows="arrayproductos.length" :per-page="prodXPagina">

                </b-pagination>
            </div>  <!-- ¡¡CUIDADO!! -->
        </div>
    </div>  
</template>

<script>
    import axios from 'axios'
    class Producto {
        constructor(nombre,precio,stockS,stockM,stockL,stockXL,descripcion,categoria,genero,temporada,imagen){
            this.nombre= nombre;
            this.precio= precio;
            this.stockS= stockS;
            this.stockM= stockM;
            this.stockL= stockL;
            this.stockXL= stockXL;
            this.descripcion= descripcion;
            this.categoria= categoria;
            this.genero= genero;
            this.temporada= temporada;
            this.imagen= imagen;
        }
    }


    export default {
        data() {
            return {
                producto: new Producto(),
                textoBusqueda:'',
                prodXPagina: 10,
                pagActual: 1,
                arrayproductos:[],
                editar: false,
                fields: [
                    {
                        key: '_id',
                        sortable: false
                    },
                    {
                        key: 'nombre',
                        sortable: true
                    },
                    { key: 'actions', label: 'Actions' }
                ]
            }
        },
        created () {
            this.listar()
        },
        methods: {
            listar() {
                let me=this;
                axios.get('http://localhost:4000/api/Producto/list').then(function (response){
                    //console.log(response);
                    me.arrayproductos=response.data;
                }).catch(function(error){
                    console.log(error);
                });
            },
            agregarProducto() {
                
                let me=this;
                if(me.editar === false){
                    console.log(this.producto.nombre);
                    axios.post('http://localhost:4000/api/Producto/add',
                    {'nombre':this.producto.nombre,
                    'precio':this.producto.precio,
                    'stockS':this.producto.stockS,
                    'stockM':this.producto.stockM,
                    'stockL':this.producto.stockL,
                    'stockXL':this.producto.stockXL,
                    'descripcion':this.producto.descripcion,
                    'categoria':this.producto.categoria,
                    'genero':this.producto.genero,
                    'temporada':this.producto.temporada,
                    'imagen':this.producto.imagen
                    })
                    .then(function(response){
                        //new Producto();
                        me.listar();
                    })
                    .catch(function(error){
                        console.log(error);
                        alert('Datos no validos');
                    });
                }
            },
            editarProducto(item){
                let me=this;
                me.editar = true;
                console.log(item)
                this.producto = new Producto(item.nombre,item.precio,item.stockS,item.stockM,item.stockL,item.stockXL,item.descripcion,item.categoria,item.genero,item.temporada,item.imagen);
            }
        }
    }
</script>
