<template>
    <a-modal v-model:open="open">
        <template #title>
            <ExclamationCircleOutlined/>
            頁面施工中
        </template>
        <p>本頁面尚未完成</p>
        <template #footer>
            <a-button @click="handleOk">
                繼續瀏覽
            </a-button>
        </template>
    </a-modal>
</template>

<script>
import { ref  } from 'vue';

export default {
    name: 'AlertModal',
    setup() {
        const open = ref(true);

        const handleOk = e => {
            console.log(e);
            open.value = false;
        };
        return {
            open, handleOk
        }
    }
}
</script>