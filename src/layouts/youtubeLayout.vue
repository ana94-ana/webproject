<template>
  <div  >
    <slot name="header" />

    <div class="flex flex-row w-full">
      <slot name="sidebar" />
      <slot name="tags" />

    </div>
    <div >
      <slot name="video" />
    </div>
    


    <div class="container flex flex-col mx-auto space-y-4">
      <slot />
    </div>
  </div>
</template>