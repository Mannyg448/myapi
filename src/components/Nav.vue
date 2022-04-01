<template>
   <div class="bg-white text-red-800">
        <div class="container mx-auto flex items-center italic justify-between ">
            <h1 class="tracking-tighter text-3xl font-semibold">
                Basic<span class="font-normal">Router</span>
                </h1>
            <nav>
                <ul class="flex space-x-4">
                    <router-link to="/">
                    <li class="py-8 px-4  hover:cursor-pointer hover:bg-gray-500 hover:text-white">
                        Home
                        </li></router-link>
                     <router-link to="/about">   
                    <li class="py-8 px-4 hover:cursor-pointer hover:bg-gray-500 hover:text-white">About</li>
                    </router-link>
                    <router-link to="/hello">
                    <li class="py-8 px-4 hover:cursor-pointer hover:bg-gray-500 hover:text-white">Hello</li>
                    </router-link>

                     <router-link to="/us">
                    <li class="py-8 px-4 hover:cursor-pointer hover:bg-gray-500 hover:text-white">Us</li>
                    </router-link>
                    
                </ul>

            </nav>
        </div>
        </div>
    
</template>