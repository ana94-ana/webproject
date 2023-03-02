<script setup>

</script>
<template>
    <div>Account</div>
    <ul>
        <li>
            <RouterLink :to="{ name: 'AccountInfo', params: { userId: 1 } }">User Info</RouterLink>
        </li>
        <li>
            <RouterLink :to="{ name: 'AccountUpdate', params: { userId: 1 } }">User Update</RouterLink>
        </li>
    </ul>
<RouterView />
</template>
