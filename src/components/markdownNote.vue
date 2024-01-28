<template>
    <article v-html="content"></article>
</template>

<script>
export default {
    name: 'MarkdownNote',
    props: {
        content: {
            type: String,
            required: true,
        },
    },
    setup() {
        return {
        }
    },
}
</script>