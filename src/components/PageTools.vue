<template>
    <div id="PageToolList">
        <h1>Tool List</h1>
        <p>Here is the tool list.</p>
    </div>

    <a-card hoverable style="width: 240px" v-for="(tool, index) in tools" :key="index">
        <a-card-meta :title="tool.replace(/([A-Z])/g, ' $1').substring(1)">
            <template #description>
                <!-- link to ./{{ tool }}-->
                <router-link :to="'tools/' + tool">link</router-link>
            </template>
        </a-card-meta>
    </a-card>
</template>

<script>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { Card } from 'ant-design-vue';
export default {
    name: 'PageTools',
    props: {
    },
    components: {
        "a-card": Card,
        "a-card-meta": Card.Meta,
    },
    setup() {
        const getToolList = () => {
            let ToolList = require.context('@/components/tools/', true, /\.vue$/).keys();
            ToolList = ToolList.map((Tool) => {
                Tool = Tool.replace(/(\.\/|\.vue)/g, '');
                Tool = Tool.replace("./", "");
                return Tool;
            });
            return ToolList
        };

        let tools = ref(getToolList());
        onMounted(() => {
            console.log(getToolList());
        });
        return {
            tools
        }
    },
}
</script>