<template>
  <div class="container">
    <Wizard/>
  </div>
</template>

<script>
import Wizard from '../components/Wizard'

export default {
  data(){
    return {
      name: 'RegisterBuilding',
      components: {
        Wizard,
      },
      methods: {
        onSubmit(e) {
            e.preventDefault()
            this.$refs.loginModal.hide()
            this.submitted = true
            if (this.addBookForm.read[0]) read = true
            const payload = {
                title: this.addBookForm.title,
                author: this.addBookForm.author,
                read
            }
            this.addBook(payload)
            this.initForm()
        },
        addHouse(payload) {
          const path = 'http://localhost:5000/api/building'
          axios.post(path, payload)
          .then(() => {
              this.getBooks()
              this.message = 'Book Added!'
              this.showMessage = true
          })
          .catch((error) => {
              console.log(error)
              this.getBooks()
          })
        },
        onReset(e) {
          e.preventDefault()
          this.$refs.addBookModal.hide()
          this.initForm()
        },
      },
      created() {
        this.getBooks()
      }
    }
  }
}
</script>