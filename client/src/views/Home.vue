<template>
    <div class="container-fluid">
        <alert :message="message" v-if="showMessage"></alert>
        <div class="row">
            <div v-if="!houses[0]">No houses in the database</div>
            <div class="col-sm-3" v-else>
                <card v-for="house in houses" :key="house.id" :name="house.name" :address="house.address"></card>
                <jw-pagination :items="unitHouse" @changePage="onChangePage" :pageSize=5 :styles="customStyles"></jw-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Alert from './Alert'
import Card from './Card'
import JWPagination from 'jw-vue-pagination'

const customStyles ={
    ul:{
        border: '2px solid red'
    },
    li:{
        display: 'inline-block',
        border: '2px dotted green'
    },
    a:{
        color: 'blue'
    }
}

export default {
	data() {
        return {
            houses: [],
            loginForm: {
                username: '',
                password: ''
            },
            submitted: false,
            signupForm: {
                name: '',
                username: '',
                password: '',
				confirmPassword: '',
            },
            message: '',
            showMessage: false,
            customStyles,
            unitHouse
        }
    },
    components: {
		alert: Alert,
		card: Card,
		Header,
		Footer
    },
    validations:{
        loginForm:{
            firstName: {required},
            username: {required}
        },
        signupForm:{
            name: {required},
            username: {required},
            password: {required, minLength: minLength(6)},
            confirmPassword: {required, sameAsPassword: sameAs('password')}
        }
    },
    methods: {
        getHouses() {
            const path = 'http://localhost:5000/api/building'
            axios.get(path)
            .then((res) => {
                this.houses = res.data.houses
            })
            .catch((error) => {
                // eslint-disable-next-line
                console.error(error)
            });
        },
        onSubmit(e) {
            e.preventDefault()
            this.$refs.loginModal.hide()
            this.submitted = true
            // stop here if form is  invalid
            this.$v.$touch()
            if(this.$v.$invalid){
                return
            }
            alert('success!:-)\n\n' + JSON.stringify(this.loginForm))
        },
        onChangePage(houses){
            // update page of items
            this.houses = houses
        }
    },
    created() {
        this.getBooks()
    }
}
</script>

<style>
    *{
        font-family: 'Roboto';
    }
    .navbar{
        margin-bottom: 50px;
        border-radius: 0;
    }
    .jumbotron{
        margin-bottom: 0;
    }
    footer{
        background-color: #f2f2f2;
        padding: 25px;
    }
</style>