<template>
    <section class="lg:container m-auto dark:text-dark dark:bg-dark">
        <article class="flex p-4 flex-col md:flex-row md:items-center gap-10 md:gap-1">
            <div class="flex-1 md:flex-2 lg:flex-3 flex flex-col gap-6 pt-10 order-2 md:order-1">
                <p>WELCOME TO MY PROFILE</p>
                <h1 class='text-5xl leading-snug font-semibold'>
                    Hi, I'm Tran Bao Duy
                    <br />
                    a
                    <div class="gradientText relative inline-flex animate-typewriter overflow-hidden
                     border-r-4 border-r-blue-500 whitespace-nowrap tracking-widest
                    ">
                       <span class="">Developer</span> 
                    </div>
                </h1>
                <p class="pr-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates explicabo quod eos
                    libero, in enim, ipsam a facere eaque reiciendis dolorum, itaque eius. Quia nobis sapiente eos magnam
                    officiis, quibusdam alias quaerat cum, veritatis vel modi reiciendis pariatur suscipit quae!</p>
                <div>
                    <p>CONTACT ME</p>
                    <ul class="flex gap-6 mt-2 group">
                        <li class="w-16 h-16 shadow-neumor rounded-md flex text-[#213454] hover:scale-[1.03]  dark:shadow-neumor-dark">
                            <a href="https://www.facebook.com/Tduyyyyyyyy"
                            class="text-[#213454] m-auto ">
                                <i class="fa-brands fa-facebook text-[2.5rem]"></i>
                            </a>
                        </li>
                        <li class="w-16 h-16 shadow-neumor rounded-md flex hover:scale-[1.03] dark:shadow-neumor-dark">
                            <a href="https://www.facebook.com/Tduyyyyyyyy"
                            class="text-[#000] m-auto">
                                <i class="fa-brands fa-github text-[2.5rem]"></i>
                            </a>
                        </li>
                        <li class="w-16 h-16 shadow-neumor rounded-md flex  hover:scale-[1.03] dark:shadow-neumor-dark">
                            <a href="https://www.facebook.com/Tduyyyyyyyy"
                            class="text-[#213454] m-auto">
                                <i class="fa-brands fa-linkedin text-[2.5rem]"></i>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="flex-1 order-1 md:order-2">
                <img src="../assets/avt.jpg" class="w-1/2 m-auto md:w-full rounded-full shadow-neumor dark:shadow-neumor-dark" />
            </div>
        </article>
    </section>
</template>

<style>

</style>