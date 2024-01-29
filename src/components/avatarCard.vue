<template>
    <div class="avatar-card-shell">
        <div class="avatar-card-my-icon">
            <img src="@/assets/my-logo.png" alt="">
        </div>
        <div class="avatar-card-content">
            <div class="avatar-card-text">
                <h6>Ice Water Not Ice</h6>
                <h3>冰水不冰</h3>
            </div>
            <div class="avatar-card-btn">
                <div class="avatar-card-shadow-arrow-a"></div>
                <div class="avatar-card-shadow-arrow-b"></div>
            </div>
        </div>
        <div class="avatar-card-linkout-box">
            <i class="avatar-card-linkout-icon linkout-icon-intagram"></i>
            <i class="avatar-card-linkout-icon linkout-icon-bilibili"></i>
            <i class="avatar-card-linkout-icon linkout-icon-github"></i>
            <i class="avatar-card-linkout-icon linkout-icon-youtube"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "avatarCard",
    data() {
        return {};
    },
    methods: {},
    mounted() { }
};
</script>

<style lang="scss" scoped>
/*#region 主頁左上方個人名片*/
.avatar-card-shell {
    position: absolute;
    top: 0;
    left: 0;
    width: 10%;
    height: 90%;
    align-items: center;
    display: flex;
    flex-direction: column;
}

/*#region 名片Icon */
.avatar-card-my-icon {
    position: relative;
    aspect-ratio: 1 / 1;
    margin-top: 20%;
    display: flex;
    border-radius: 50%;
    width: 60%;
    overflow: hidden;
    border: 5px solid #fafafa;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.6);
    top: -40%;
    transform: 0;
    z-index: 3;
    transition: top 1s ease-out, transform 1s ease-out;
    transition-delay: var(--main-left-out-time-delay);
}

body:hover .avatar-card-my-icon {
    top: 0%;
    transform: rotateZ(360deg);
    transition: top 1s ease-out, transform 1s ease-out;
    transition-delay: calu(var(--main-left-in-time)-0.1s);

}

.avatar-card-my-icon img {
    aspect-ratio: 1 / 1;
    width: 100%;
}

/*#endregion*/
/*#region 名片內容 */
.avatar-card-content {
    position: relative;
    top: -10%;
    width: 60%;
    height: 0px;
    background: linear-gradient(rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 60%, rgba(0, 0, 0, 0) 100%);
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.6));
    overflow: hidden;
    transition: height 0.5s linear;
    transition-delay: 1.5s;
}

.avatar-card-content:hover,
.avatar-card-my-icon:hover+.avatar-card-content {
    height: 40vh;
    transition: height 0.5s linear;
}

.avatar-card-text {
    position: relative;
    top: -10%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    transform: rotateZ(-15deg);
    width: 190%;
    padding: 110% 30% 10% 0%;
    background: linear-gradient(90deg, rgb(99, 5, 149), rgb(224, 130, 223) 100%, );
}

.avatar-card-text h3,
.avatar-card-text h6 {
    transform: rotateZ(15deg);
    font-weight: bold;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    margin: 0;
    padding: 0;
    color: #fafafa;
}

.avatar-card-text h3 {
    font-size: 3.5vh;
}

.avatar-card-text h6 {
    margin-top: 15%;
    font-size: 2vh;
}

.avatar-card-btn {
    position: relative;
    width: 100%;
    height: 10vh;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

@keyframes card-shadow-arrow-animation {
    0% {
        top: -100%;
        opacity: 0;
    }

    50% {
        opacity: 0.8;
    }

    100% {
        top: -30%;
        opacity: 0;
    }
}

.avatar-card-shadow-arrow-a,
.avatar-card-shadow-arrow-b {
    cursor: pointer;
    position: absolute;
    animation: infinite 2.4s ease-in-out card-shadow-arrow-animation;
    opacity: 0;
    top: -100%;
    height: 80%;
    width: 60%;
    background: linear-gradient(-10deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 10%, ),
        linear-gradient(-80deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 10%, );
    transform: rotateZ(45deg);
}

.avatar-card-shadow-arrow-b {
    animation-delay: 1.2s;
}

/*#endregion*/
/*.avatar-card-linkout-box{
    position: absolute;
    top: 55%;
    width: 60%;
    height: 40%;
    background-color: aqua;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }*/


/*#endregion*/
</style>
