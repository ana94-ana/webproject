<template>
    <div id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-violet-300 dark:bg-violet-600">
            <ul class="space-y-2">
                <li>
                    <RouterLink
                        class="flex items-center p-2 text-base font-normal border bg-violet-600 text-white rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-300"
                        :to="{ name: 'AllUsers', params: { userId: 1 } }"> All Users</RouterLink>

                </li>
                <li>
                    <RouterLink
                        class="flex items-center p-2 text-base font-normal border bg-violet-600 text-white rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-300"
                        :to="{ name: 'Categories', params: { userId: 1 } }"> Categories</RouterLink>

                </li>
            </ul>
        </div>
    </div>
    <div class=" ml-[280px]">
        <router-view />
    </div>
</template>