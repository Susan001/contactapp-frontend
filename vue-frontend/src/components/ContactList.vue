<template>
    <div>
        <navigation></navigation>
        <br>
        
        <form class="form-inline search-inline">
            <input class="form-control" type="search" placeholder="Search" style="width:70%" >
            <button class="btn btn-secondary" type="submit" >Search</button>
            <button class="btn btn-secondary" >Add</button>
        </form>
        <div class="contacts">
            <div class="card">
                <img class="card-img-top" src="https://www.w3schools.com/howto/img_avatar.png" alt="Card image cap">
                <div class="card-body">
                    <h2 class="card-title">Anne Born</h2>
                    <p class="card-text">Mobile: 017652865022</p>
                    <p class="card-text">Email: Kukuk</p>
                    <p class="card-text">Facebook: 017652865022</p>
                </div>
                <div class="card-footer text-muted">
                    <button type="button" class="btn btn-primary">Edit</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
        
    
   </div>
</template>

<script>
    import navigation from './Navbar';
    export default {
        name: 'ContactList',
        components: {
             navigation
        }
    };
</script>

<style scoped>
.card-text, .card-title{
    margin:0;
    padding: 0;
}
.search-inline{
    margin-left: 2em;
    margin-top: 0em;
}
.contacts{
    margin-left:2em;
    margin-top: 1em;
}
.card {
    width: 18rem;
    float:left;
}
.card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
}
</style>




