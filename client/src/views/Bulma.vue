<template>
<div>
<section class="hero is-success is-medium">
    <div class="hero-head">
        <b-navbar wrapper-class="container">
                <template #brand>
                    <b-navbar-item tag="router-link" :to="{ path: '/' }">
                        <img
                            src="https://bulma.io/images/bulma-type-white.png"
                            alt="LOGO"
                        >
                    </b-navbar-item>
                </template>
                <template #start>
                    <b-navbar-item active tag="router-link" :to="{ path: '/' }">
                        Home
                    </b-navbar-item>
                    <b-navbar-item href="#">
                        Documentation
                    </b-navbar-item>
                </template>

                <template #end>
                    <b-navbar-item tag="div">
                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light">
                                Log in
                            </a>
                        </div>
                    </b-navbar-item>
                </template>
        </b-navbar>
        <!-- <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="../">
                        <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo">
                    </a>
                    <span class="navbar-burger burger" data-target="navbarMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenu" class="navbar-menu">
                    <div class="navbar-end">
                        <div class="tabs is-right">
                            <ul>
                                <li class="is-active"><a>Home</a></li>
                                <li><a href="">Examples</a></li>
                                <li><a href="">Features</a></li>
                                <li><a href="">Team</a></li>
                                <li><a href="">Help</a></li>
                            </ul>
                            <span class="navbar-item">
                                <a class="button is-white is-outlined" href="https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/hero.html">
                                    <span class="icon">
                                        <i class="fa fa-github"></i>
                                    </span>
                                    <span title="Hello from the other side">View Source</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav> -->
    </div>
    <div class="hero-body">
        <div class="container has-text-centered">
        <p class="title">
            Service Life Database
        </p>
        <p class="subtitle">
        <i class="fa fa-home"></i>
        <i class="fa fa-wrench"></i>
            A platform to add building records...
        </p>
        </div>
    </div>
</section>
<div class="box cta">
            <p class="has-text-centered">
                <span class="tag is-primary">New</span> A new feature introduced, input a building code into the search box below to get instant access
            </p>
        </div>

<section class="section">
<div class="columns">
            <div class="column is-half is-offset-one-quarter">

<div class='container'>
<div class="field is-grouped">
  <p class="control is-expanded">
    <input class="input" type="text" v-model="search" placeholder="Find a building">
  </p>
  <p class="control">
    <a class="button is-info">
      Search
    </a>
  </p>
</div>
</div>
</div>
</div>
</section>
  <div class="container">
      <div class="section">
        <div class="columns">
          <div class="column has-text-centered">
            <h1 class="title" style="color: ghostwhite;">Recent Buildings</h1><br>
          </div>
        </div>
        <div id="app" class="row columns is-multiline">
          <div v-for="card in filteredList" :key="card.id" class="column is-4">
            <div class="card large">
              <div class="card-image">
                <figure class="image is-16by9">
                  <img :src="card.image" alt="Image">
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                    <h4>Click on image above</h4>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis.</p>
                    <span class="button is-link modal-button" data-target="modal-image2">Image modal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<section class="section">
<div class="columns">
            <div class="column is-4 is-offset-4">
<!-- login -->
<form class="box">
<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <button class="button is-success">
      Login
    </button>
  </p>
</div>
</form>
<!-- login end -->

<form class="box">
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>

<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" value="bulma">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success">This username is available</p>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
</form>
</div>
</div>
</section>


<footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>SLDB</strong> by <a href="https://github.com/FemiBlack">Femi Black</a>. The source code is licensed
      <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
    </p>
  </div>
</footer>
</div>
</template>

<script>

export default{
    name: 'Bulma',
    data() {
        return{
            search: '',
            cardData:[{
  id: 1,
  image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
  avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
  user: {
    name: 'Jon',
    handle: 'twitterid',
    title: 'UX Designer'
  },
  content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
{
  id: 2,
  image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
  avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
  user: {
    name: 'Hope',
    handle: 'twitterid',
    title: 'Front-End Developer'
  },
  content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
{
  id: 3,
  image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
  avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
  user: {
    name: 'Binami',
    handle: 'twitterid',
    title: 'Full-Stack Developer'
  },
  content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
{
  id: 4,
  image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
  avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
  user: {
    name: 'Hanna',
    handle: 'twitterid',
    title: 'Software Testing'
  },
  content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
{
  id: 5,
  image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
  avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
  user: {
    name: 'Akinyele',
    handle: 'twitterid',
    title: 'Database Manager'
  },
  content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
{
  id: 6,
  image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
  avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
  user: {
    name: 'Pahid',
    handle: 'twitterid',
    title: 'Coder'
  },
  content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
{
  id: 7,
  image: 'https://source.unsplash.com/h-ACUrBngrw/1280x720',
  avatar: 'https://avatars.dicebear.com/api/initials/john%20doe.svg',
  user: {
    name: 'Okinami',
    handle: 'twitterid',
    title: 'Bread Developer'
  },
  content: 'The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.'
},
],
        };
    },
    computed:{
        filteredList() {
            return this.cardData.filter(post => {
            return post.user.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
    }
}
</script>

<style>
/* Card start*/
.card {
  overflow: hidden;
  background: ghostwhite;
  /* color: var(--bg); */
}

.card.large {
  border-radius: 5px;
}



</style>