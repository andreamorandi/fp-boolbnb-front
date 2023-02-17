  <script>
  export default {
    name: 'LoadingSpinner',
    props: {
      size: {
        type: String,
        default: 'medium',
        validator: (value) => ['small', 'medium', 'large'].indexOf(value) !== -1,
      },
    },
  };
  </script>

<template>
    <div class="loader pb-5">
        <div class="loader-inner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>
  
<style lang="scss">
    .loader {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .loader-inner {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
        position: absolute;
        top: 33px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background: #c9e265;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }

    div:nth-child(1) {
        left: 8px;
        animation: lds-ellipsis1 0.6s infinite;
    }

    div:nth-child(2) {
        left: 8px;
        animation: lds-ellipsis2 0.6s infinite;
    }

    div:nth-child(3) {
        left: 32px;
        animation: lds-ellipsis2 0.6s infinite;
    }

    div:nth-child(4) {
        left: 56px;
        animation: lds-ellipsis3 0.6s infinite;
    }

    @keyframes lds-ellipsis1 {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes lds-ellipsis3 {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
    @keyframes lds-ellipsis2 {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(24px, 0);
        }
    }

    &.small {
        width: 20px;
        height: 20px;
    }

    &.medium {
        width: 80px;
        height: 80px;
    }

    &.large {
        width: 120px;
        height: 120px;

        div {
            width: 16px;
            height: 16px;
        }

        div:nth-child(1),
        div:nth-child(2),
        div:nth-child(3),
        div:nth-child(4) {
            animation-duration: 1.2s;
        }
    }
}
</style>
  