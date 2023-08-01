<template>
    <div>
        <form>
            <div>
                <label>Username</label>
                <input placeholder="username">
            </div>
            <div>
                <label>Password</label>
                <input placeholder="*****" type="password">
            </div>
            <div class="buton">
                <RouterLink to="/" tag="button" v-slot="{href, route}">
                    <button :href="href">
                        Submit
                    </button>
                </RouterLink></div>
        </form>
    </div>
</template>

<script lang ="ts">
export default {
    name : "LoginView",
    methods:{}
}
</script>

<style scoped>
div {
    margin : 1em;
}
label {
    margin : .25em;
}

.buton{
    
    
}
.buton:hover{
    
}
</style>