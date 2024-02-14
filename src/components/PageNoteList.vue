<template>
    <a-list item-layout="horizontal" :data-source="data">
        <template #renderItem="{ item }">
            <a-list-item>
                <a-list-item-meta
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team">
                    <template #title>
                        <router-link :to="'/Note/'+item.fileName">
                            {{ item.title }}
                        </router-link>
                    </template>
                    <template #avatar>
                        <a-avatar src="https://joeschmoe.io/api/v1/random" />
                    </template>
                </a-list-item-meta>
            </a-list-item>
        </template>
    </a-list>
</template>

<script>
export default {
    setup() {
        const data = [];
        // 取得assets/notes中所有Markdown筆記
        const requireAll = require.context("@/assets/notes", false, /\.md$/);
        requireAll.keys().forEach((key) => {
            // 取得Markdown檔案內容(HTML格式)
            let content = requireAll(key).default;
            // 
            let dom = document.createElement("div");
            dom.innerHTML = content;
            // 取得Markdown檔案 <h1></h1>的內容
            let heading1 = dom.querySelector("h1").innerText;
            data.push({
                // Title為 Markdown檔案 <h1></h1>的內容
                title: heading1,
                fileName: key.replace("./", ""),
            });
        });
        return {
            data
        };
    }
};
</script>