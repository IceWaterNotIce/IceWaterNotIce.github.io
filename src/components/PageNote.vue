<template>
    <markdown-note :content="content"></markdown-note>
</template>

<script>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import MarkdownNote from './markdownNote.vue';
export default {
    name: 'PageNote',
    components: {
        "markdown-note": MarkdownNote,
    },
    setup() {
        const content = ref("");
        onMounted(() => {
            // 取得路由參數
            const route = useRoute();
            // 取得Markdown檔案內容(HTML格式)
            content.value = require(`@/assets/notes/${route.params.file}`).default;
        });
        return {
            content
        }
    },
}
</script>