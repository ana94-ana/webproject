<script setup>

</script>
<template>
<div>Account</div>
<ul>
    <li><RouterLink :to="{name:'AccountInfo'}">User Info</RouterLink> </li>
    <li><RouterLink :to="{name:'AccountUpdate'}">User Update</RouterLink> </li>
</ul>
<RouterView/>
</template>
