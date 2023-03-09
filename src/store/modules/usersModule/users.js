import { data } from 'autoprefixer'
import axios from 'axios'

const regLoginModule = {
    data() {
        return {
            register: [{
                name: String,
                email: Email,
                password: String
            }],
            login:[{
                email: Email,
                password: String
            }]
        }
    },
    methods: {
        submitForm() {
            const register = {
                name: this.name,
                email: this.email,
                password: this.password
            }

            axios.post('https://items.magischer.de/api/auth/register')
                .then(response => {

                })
        }
    },
    methods: {
        submitForm() {
            const login = {
                email: this.email,
                password: this.password
            }

            axios.post('https://items.magischer.de/api/auth/login'.data)
                .then(response => {

                })
        }
    },

}


export default regLoginModule