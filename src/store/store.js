import { reactive } from 'vue'

export const store = reactive({
    urlBackend: "http://127.0.0.1:8000",
    urlAPI: "http://127.0.0.1:8000/api/orders",
    cart :[],
    order: {
        name : '',
        email : '',
        address :'',
        phon_num :'',
        restaurant_id :1,
        total : 100,
        status : 'in preparazione',
        foods :  [],
    },
    clientToken: null,
    
    
});
