<template>
    <nav class="fixed bottom-0 right-0 left-0 bg-neutral sm:top-0 sm:right-auto sm:w-[220px] sm:rounded-tr-2xl sm:rounded-br-2xl">
        <ul class="flex h-16 items-center justify-between py-0 px-8 sm:flex-col sm:pt-[150px] sm:h-auto sm:items-start sm:gap-6">
            <li class="text-white text-xl">
                <a href="#">
                    <font-awesome-icon icon="fa-solid fa-cubes" class="sm:w-[30px]" />
                    <span class="hidden text-base sm:inline-block sm:ml-6">Dashboard</span>
                </a>
            </li>
            <li class="text-white text-xl">
                <a href="#">
                    <font-awesome-icon icon="fa-solid fa-layer-group" class="sm:w-[30px]" />
                    <span class="hidden text-base sm:inline-block sm:ml-6">Stock</span>
                </a>
            </li>
            <li class="text-white text-xl bg-primary h-12 w-12 flex justify-center items-center rounded-full sm:hidden"> 
                <a href="#">
                    <font-awesome-icon icon="fa-solid fa-plus" />
                </a>
            </li>
            <li class="text-white text-xl">
                <a href="#">
                    <font-awesome-icon icon="fa-solid fa-gear" class="sm:w-[30px]"/>
                    <span class="hidden text-base sm:inline-block sm:ml-6">Settings</span>
                </a>
            </li>
            <li class="sm:absolute sm:bottom-14">
                <a href="#" class="flex justify-center items-center">
                    <div class="h-8 w-8 overflow-hidden rounded-full sm:w-[30px]">
                        <img src="images/profile.jpeg" />
                    </div>
                    <span class="text-white text-base hidden sm:inline-block sm:ml-6">John Doe</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
</script>