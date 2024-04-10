<script>

export default {
components: {

},
data() {
    return {};
},
methods: {},
};
</script>

<template>
    <form>
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="name" class="form-control" id="name" >
            
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email </label>
            <input type="email" class="form-control" id="email">
            
        </div>
        <div class="mb-3">
            <label for="address" class="form-label">Address</label>
            <input type="address" class="form-control" id="address">
            
        </div>
        <div class="mb-3">
            <label for="number" class="form-label">number telefon</label>
            <input type="number" class="form-control" id="number">
            
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>

<style lang="scss" scoped>
</style>
