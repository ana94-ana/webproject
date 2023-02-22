<template>
  <div  >
      <slot name="header" />
       <slot name="buttons" />  
      <slot name="footer" />
      
        <div class="container flex flex-col mx-auto space-y-4">
            <slot />
        </div> 
</div>
</template>