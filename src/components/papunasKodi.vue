<template>

    <!--This part shows smaller icons-->
    <div class="smallMenu" v-if="active == false">
        <div class="first-part">
            <div v-for="a in icons" class="menu-component">
                <img class="icon" :src="a.loc">
            </div>
        </div>
    </div>
<!--This part shows bigger icons-->
    <div class="menu" v-if="active">
        <div class="first-part">
            <div v-for="a in icons" class="menu-component">
                <img class="icon" :src="a.loc">
                <p class="comp-name">{{ a.name }}</p>
            </div>
        </div>
        <div class="line"></div>
        <p style="font-family: arial;margin-left: 20px;margin-top: 10px;margin-bottom: 10px;font-size: 14px;">Subscriptions</p>
        <div class="subscribed-channels-list">
            <div v-for="channel,index in subscribedPeople" >
                <div v-if="showMore || index<5" class="subscribed-channel-info">
                    <img class="subscribed-img" :src="channel.img" >
                    <p style="font-family: arial;font-size: 12px;">{{ channel.name }}</p>
                </div>
            </div>
          <div class="moreChannels">
            <img v-if="showMore == false" @click="more" class="arrow" src="https://cdn.iconscout.com/icon/free/png-256/keyboard-arrow-down-1780936-1517439.png">
            <img v-if="showMore == true" @click="more" class="upArrow" src="https://www.svgrepo.com/download/93813/up-arrow.svg" >

            <p v-if="showMore == false">{{ "Show " + hidden + " more" }} </p>
          </div>
        </div>
    </div>

</template>

<style scoped>
.upArrow{
    margin-bottom: 10px;
    width: 19px;
    margin-left: 45%;
    cursor: pointer;
}
.moreChannels{
    display: flex;
    align-items: center;
}
.arrow{
    width: 25px;
    margin-left: 12%;
    cursor: pointer;
}
.subscribed-channel-info{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.subscribed-img{
    border-radius: 50%;
    margin-left: 10px;
}
.subscribed-profile{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.subscribed-img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    padding-right: 10px;
    padding-left: 10px;
}
  .line{
    width: 100%;
    background-color: rgba(128, 128, 128, 0.37);
    height: 1px;
    margin-left: 10px;
  }
.comp-name{
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 12px;
}
.menu-component{
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    cursor: pointer;
}
.icon{
    padding-top: 10px;
    width: 20px;
    height: 20px;
    padding-right: 10px;

}
.smallMenu{
    margin-top: 60px;
    height: 95vh;
    position: fixed;
    margin-top: 70px;

    
}
.menu{
    height: 95vh;
    overflow-y: scroll;
    position: fixed;
    margin-top: 70px;

}
.first-part{
    display: grid;
    grid-template-columns: 1fr;
    width: 10%;

}

</style>
<template>
    <Head />
    <div class="categories">
      <Categories />
    </div>


  <div class="ff">

    <div class="left">
      <LeftSide />

    </div>
    <div class="right">
      <Videos />

    </div>
  </div>
</template>

<style >
.header-div{
  display: flex;

}
.categories {
  width: 100%;
  height: 50px;
}

.ff {
  display: flex;
}


.right {
  margin-top: 70px;
  height: 100%;
  width: 100%;
}
</style>