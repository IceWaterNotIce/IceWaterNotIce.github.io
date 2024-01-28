<template>
    <markdown-note :content="content"></markdown-note>
</template>

<script>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import MarkdownNote from './markdownNote.vue';
export default {
    name: 'PageNote',
    props: {
    },
    components: {
        "markdown-note": MarkdownNote,
    },
    setup() {

        const showNoteList = () => {
            // get all markdown files in the folder
            const markdownFiles = require.context('@/assets/notes/', true, /\.md$/).keys();
            //console.log(markdownFiles);
            // show all markdown files list 
            const tmepListDatas = [];
            markdownFiles.map((item) => {
                const listObj = {};
                const listItemS = item.split('/');
                if (listItemS.length > 0) {
                    listObj.name = listItemS[1].replace('.md', '');
                    listObj.path = item;
                    listObj.children = [];
                    listObj.showChild = false;
                }
                return tmepListDatas.push(listObj);
            });
            return tmepListDatas;
        };

        const getNoteContent = (path) => {
            const content = require(`@/assets/notes/${path}`);
            console.log(typeof content);
            return content.default;
        };

        console.log(showNoteList());
        const content = ref("");
        console.log(content);
        onMounted(() => {
            const route = useRoute();
            // console.log(route);
            if (route.query.file_path) {
                console.log(route.query.file_path);
            }
            else {
                console.log('no file path');
                content.value = getNoteContent('template.md');
            }
        });
        return {
            content,
        }
    },
}
</script>