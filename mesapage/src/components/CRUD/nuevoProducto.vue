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
                                    <a>Categoria</a>
                                    <b-form-select
                                    v-model="producto.categoria"
                                    :options="optionsCategoria"
                                    class="mb-3"
                                    value-field="item"
                                    text-field="name"
                                    disabled-field="notEnabled"
                                    ></b-form-select>
                                </div>
                                <div class="form-group">
                                    <a>Genero</a>
                                    <b-form-select
                                    v-model="producto.genero"
                                    :options="optionsGenero"
                                    class="mb-3"
                                    value-field="item"
                                    text-field="name"
                                    disabled-field="notEnabled"
                                    ></b-form-select>
                                </div>
                                <div class="form-group">
                                    <a>Temporada</a>
                                    <b-form-select
                                    v-model="producto.temporada"
                                    :options="optionsTemporada"
                                    class="mb-3"
                                    value-field="item"
                                    text-field="name"
                                    disabled-field="notEnabled"
                                    ></b-form-select>
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
                        <b-button @click="eliminarProducto(row.item)" variant="danger" size="sm" class="mr-1">
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
    //Objeto producto para crear o editar
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
                prodXPagina: 10, //Productos por pagina en la tabla
                pagActual: 1,
                arrayproductos:[], //Array para almacenar los productos actualizados en la BD
                editar: false,
                idEliminar : '', //Para almacenar el id del producto seleccionado a eliminar
                idEditar: '', //Para almacenar el id del producto seleccionado a editar
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
                ],
                //Opciones para temporada
                optionsTemporada: [
                { item: 'Primavera-Verano 2021', name: 'Primavera-Verano 2021' },
                { item: 'Otoño-Invierno 2021', name: 'Otoño-Invierno 2021' },
                { item: 'Primavera-Verano 2020', name: 'Primavera-Verano 2020' },
                { item: 'Otoño-Invierno 2020', name: 'Otoño-Invierno 2020' }
                ],
                //Opciones para genero
                optionsGenero: [
                { item: 'Masculino', name: 'Masculino' },
                { item: 'Femenino', name: 'Femenino' },
                { item: 'Unisex', name: 'Unisex' }
                ],
                //Opciones para categoria
                optionsCategoria: [
                { item: 'Pantalon', name: 'Pantalon' },
                { item: 'Polera', name: 'Polera' },
                { item: 'Poleron', name: 'Poleron' },
                { item: 'Camisa', name: 'Camisa' },
                { item: 'Camiseta', name: 'Camiseta' },
                { item: 'Casaca', name: 'Casaca' },
                { item: 'Abrigo', name: 'Abrigo' },
                { item: 'Vestido', name: 'Vestido' }
                ],

            }
        },
        created () {
            this.listar()
        },
        methods: {
            listar() {
                console.log(process.env);
                let me=this;
                axios.get(`${process.env.VUE_APP_BACK_URL}/api/Producto/list`).then(function (response){
                    //console.log(response);
                    me.arrayproductos=response.data;
                }).catch(function(error){
                    console.log(error);
                });
            },
            //Metodo para limpiar las casillas donde agregamos o editamos productos
            limpiar(){
                let me = this;
                me.producto.nombre = '';
                me.producto.precio = '';
                me.producto.stockS = '';
                me.producto.stockM = '';
                me.producto.stockL = '';
                me.producto.stockXL = '';
                me.producto.descripcion = '';
                me.producto.categoria = '';
                me.producto.genero = '';
                me.producto.temporada = '';
                me.producto.imagen = '';
            },

            //Metodo para agregar un producto desde cero
            agregarProducto() {
                let me=this;
                //Cuando es agregar un producto
                if(me.editar === false){
                    console.log(this.producto.nombre);
                    axios.post(`${process.env.VUE_APP_BACK_URL}/api/Producto/add`,
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
                        me.limpiar();
                        me.listar();

                    })
                    .catch(function(error){
                        console.log(error);
                        alert('Datos no validos');
                    });
                }
                //Cuando es editar un producto
                else{
                    //console.log(me.idEditar);
                    axios.put(`${process.env.VUE_APP_BACK_URL}/api/Producto/update`,
                    {'_id':me.idEditar,
                    'nombre':this.producto.nombre,
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
                        me.editar = false;
                        me.limpiar();
                        me.listar();
                    })
                    .catch(function(error){
                        console.log(error);
                        alert('Datos no validos');
                    });
                }
            },
            //Metodo para obtener un producto a editar
            editarProducto(item){
                let me=this;
                me.editar = true;
                console.log(item)
                this.producto = new Producto(item.nombre,item.precio,item.stockS,item.stockM,item.stockL,item.stockXL,item.descripcion,item.categoria,item.genero,item.temporada,item.imagen);
                me.idEditar = item._id;
            },
            //Metodo para obtener un producto a eliminar
            eliminarProducto(item){
                console.log(item._id);
                let me=this;
                me.idEliminar = item._id;
                axios.delete(`${process.env.VUE_APP_BACK_URL}/api/Producto/remove/${item._id}`
                )
                .then(function(response){
                        me.delete = false;
                        me.listar();
                    })
                    .catch(function(error){
                        console.log(error);
                        alert('Datos no validos');

                    });
                

            }
        }
    }
</script>
